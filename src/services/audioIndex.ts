import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import * as lockfile from 'proper-lockfile';
import { AudioRecord, AudioFilters } from './audioStorage';
import { audioDatabase } from './audioDatabase';

export interface AudioIndex {
  version: string;
  lastUpdated: string;
  records: Record<string, AudioRecord>; // audioId -> AudioRecord
  entryIndex: Record<string, string[]>; // entryId -> audioIds[]
  levelIndex: Record<string, string[]>; // level -> audioIds[]
}

export class AudioIndexManager {
  private indexPath: string;
  private uploadDir: string;
  private cachedIndex: AudioIndex | null = null;
  private storageProvider: string;

  constructor() {
    this.storageProvider = process.env.AUDIO_STORAGE_PROVIDER || 
                          (process.env.NODE_ENV === 'production' ? 'vercel' : 'local');
    
    // Always store index locally, but organize by environment
    const baseDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    
    if (this.storageProvider === 'local') {
      // Local: index alongside files
      this.uploadDir = baseDir;
      this.indexPath = path.join(baseDir, 'uploads.json');
    } else {
      // Cloud: index in environment-specific subdirectory
      this.uploadDir = path.join(baseDir, this.storageProvider);
      this.indexPath = path.join(this.uploadDir, 'uploads.json');
    }
    
    console.log(`📁 Audio index path: ${this.indexPath} (${this.storageProvider})`);
  }

  private async ensureUploadDir(): Promise<void> {
    if (!existsSync(this.uploadDir)) {
      await mkdir(this.uploadDir, { recursive: true });
    }
  }

  private createEmptyIndex(): AudioIndex {
    return {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      records: {},
      entryIndex: {},
      levelIndex: {}
    };
  }

  async loadIndex(): Promise<AudioIndex> {
    if (this.cachedIndex) {
      return this.cachedIndex;
    }

    await this.ensureUploadDir();

    try {
      if (existsSync(this.indexPath)) {
        const content = await readFile(this.indexPath, 'utf-8');
        this.cachedIndex = JSON.parse(content);
        console.log(`📊 Loaded audio index with ${Object.keys(this.cachedIndex!.records).length} records`);
        return this.cachedIndex!;
      }
    } catch (error) {
      console.error('Error loading audio index:', error);
    }

    // Create empty index if none exists or loading failed
    console.log('📁 Creating new audio index...');
    this.cachedIndex = this.createEmptyIndex();
    await this.saveIndex();
    return this.cachedIndex;
  }

  async saveIndex(): Promise<void> {
    if (!this.cachedIndex) return;

    this.cachedIndex.lastUpdated = new Date().toISOString();
    
    await this.ensureUploadDir();
    
    // Use file locking to prevent race conditions
    const lockPath = `${this.indexPath}.lock`;
    let release: (() => Promise<void>) | null = null;
    
    try {
      // Acquire lock with timeout
      release = await lockfile.lock(this.indexPath, {
        retries: {
          retries: 5,
          factor: 2,
          minTimeout: 100,
          maxTimeout: 1000
        }
      });
      
      await writeFile(this.indexPath, JSON.stringify(this.cachedIndex, null, 2));
      console.log(`💾 Saved audio index (${Object.keys(this.cachedIndex.records).length} records)`);
      
    } catch (error) {
      console.error('❌ Failed to save audio index:', error);
      throw error;
    } finally {
      if (release) {
        await release();
      }
    }
  }

  async addRecord(audioRecord: AudioRecord): Promise<void> {
    // Primary: Save to MongoDB
    await audioDatabase.addRecord(audioRecord);
    
    // Secondary: Update local file cache (for fallback)
    try {
      const index = await this.loadIndex();
      
      // Add to main records
      index.records[audioRecord.id] = audioRecord;
      
      // Update entry index
      const entryId = audioRecord.metadata.entryId;
      if (!index.entryIndex[entryId]) {
        index.entryIndex[entryId] = [];
      }
      if (!index.entryIndex[entryId].includes(audioRecord.id)) {
        index.entryIndex[entryId].push(audioRecord.id);
      }
      
      // Update level index
      const level = audioRecord.metadata.level;
      if (!index.levelIndex[level]) {
        index.levelIndex[level] = [];
      }
      if (!index.levelIndex[level].includes(audioRecord.id)) {
        index.levelIndex[level].push(audioRecord.id);
      }
      
      await this.saveIndex();
    } catch (error) {
      console.warn('⚠️  Failed to update file cache, but database updated successfully:', error);
    }
  }

  async removeRecord(audioId: string): Promise<void> {
    // Primary: Remove from MongoDB
    await audioDatabase.removeRecord(audioId);
    
    // Secondary: Update local file cache
    try {
      const index = await this.loadIndex();
      const record = index.records[audioId];
      
      if (!record) return;
      
      // Remove from main records
      delete index.records[audioId];
      
      // Remove from entry index
      const entryId = record.metadata.entryId;
      if (index.entryIndex[entryId]) {
        index.entryIndex[entryId] = index.entryIndex[entryId].filter(id => id !== audioId);
        if (index.entryIndex[entryId].length === 0) {
          delete index.entryIndex[entryId];
        }
      }
      
      // Remove from level index
      const level = record.metadata.level;
      if (index.levelIndex[level]) {
        index.levelIndex[level] = index.levelIndex[level].filter(id => id !== audioId);
        if (index.levelIndex[level].length === 0) {
          delete index.levelIndex[level];
        }
      }
      
      await this.saveIndex();
    } catch (error) {
      console.warn('⚠️  Failed to update file cache, but database updated successfully:', error);
    }
  }

  async getRecord(audioId: string): Promise<AudioRecord | null> {
    // Try MongoDB first, fallback to file cache
    try {
      return await audioDatabase.getRecord(audioId);
    } catch (error) {
      console.warn('⚠️  Database unavailable, using file cache:', error);
      const index = await this.loadIndex();
      return index.records[audioId] || null;
    }
  }

  async listRecords(filters?: AudioFilters): Promise<AudioRecord[]> {
    // Try MongoDB first, fallback to file cache
    try {
      return await audioDatabase.listRecords(filters);
    } catch (error) {
      console.warn('⚠️  Database unavailable, using file cache:', error);
      const index = await this.loadIndex();
      let candidateIds: string[] = Object.keys(index.records);
      
      // Use indexes for efficient filtering
      if (filters?.entryId) {
        candidateIds = index.entryIndex[filters.entryId] || [];
      }
      
      if (filters?.level) {
        const levelIds = index.levelIndex[filters.level] || [];
        candidateIds = candidateIds.filter(id => levelIds.includes(id));
      }
      
      // Apply remaining filters
      const records = candidateIds
        .map(id => index.records[id])
        .filter(record => {
          if (!record) return false;
          
          if (filters?.levelId && record.metadata.levelId !== filters.levelId) {
            return false;
          }
          
          if (filters?.speaker && record.metadata.speaker !== filters.speaker) {
            return false;
          }
          
          if (filters?.dialect && record.metadata.dialect !== filters.dialect) {
            return false;
          }
          
          return true;
        });
      
      // Sort by creation date (newest first)
      return records.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }

  async getStats(): Promise<{
    totalRecords: number;
    entriesWithAudio: number;
    recordsByLevel: Record<string, number>;
  }> {
    const index = await this.loadIndex();
    
    const recordsByLevel: Record<string, number> = {};
    Object.values(index.records).forEach(record => {
      const level = record.metadata.level;
      recordsByLevel[level] = (recordsByLevel[level] || 0) + 1;
    });
    
    return {
      totalRecords: Object.keys(index.records).length,
      entriesWithAudio: Object.keys(index.entryIndex).length,
      recordsByLevel
    };
  }

  // Clear cache to force reload from disk
  clearCache(): void {
    this.cachedIndex = null;
  }
}

// Singleton instance
export const audioIndex = new AudioIndexManager();
