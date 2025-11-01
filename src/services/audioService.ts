import { AudioRecord, AudioFilters, AudioMetadata } from './audioAPIClient';

export interface AudioService {
  upload(file: File, metadata: AudioMetadata): Promise<AudioRecord>;
  delete(audioId: string): Promise<void>;
  getRecord(audioId: string): Promise<AudioRecord | null>;
  list(filters?: AudioFilters): Promise<AudioRecord[]>;
  getStats(): Promise<{
    totalRecords: number;
    entriesWithAudio: number;
    recordsByLevel: Record<string, number>;
  }>;
}

// Factory function to create the appropriate service based on AUDIO_MODE
export function createAudioService(): AudioService {
  const mode = process.env.AUDIO_MODE || 'local';
  
  console.log(`🎵 Audio mode: ${mode}`);
  
  switch (mode) {
    case 'production':
      return new ProductionAudioService();
    case 'local':
    default:
      return new LocalAudioService();
  }
}

// Local mode: Files + JSON index (no MongoDB, offline capable)
class LocalAudioService implements AudioService {
  private indexPath: string;
  private uploadDir: string;
  
  constructor() {
    const path = require('path');
    this.uploadDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    this.indexPath = path.join(process.cwd(), 'src', 'data', 'audio-index.json');
  }
  
  async upload(file: File, metadata: AudioMetadata): Promise<AudioRecord> {
    const { writeFile, mkdir } = await import('fs/promises');
    const { existsSync } = await import('fs');
    const path = await import('path');
    const { v4: uuidv4 } = await import('uuid');
    const { convertToMp3 } = await import('@/utils/audioConverter');
    
    // Ensure directory exists
    if (!existsSync(this.uploadDir)) {
      await mkdir(this.uploadDir, { recursive: true });
    }
    
    // Generate unique filename
    const audioId = uuidv4();
    const fileExtension = file.name.split('.').pop() || 'webm';
    const filename = `${audioId}.${fileExtension}`;
    const filePath = path.join(this.uploadDir, filename);
    
    // Save original file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);
    
    console.log(`💾 Saved original: ${filename}`);
    
    // Try to convert to MP3 for better compatibility
    let mp3Url: string | undefined;
    let duration: number | undefined;
    let mp3Filename: string | undefined;
    
    try {
      const result = await convertToMp3(filePath, this.uploadDir, '/uploads/audio');
      mp3Url = result.mp3Url;
      duration = result.duration;
      mp3Filename = path.basename(result.mp3Path);
      console.log(`✅ MP3 conversion successful: ${mp3Filename}`);
    } catch (error) {
      console.warn(`⚠️ MP3 conversion failed, using original file:`, error);
      // Continue without MP3 - original file will be used
    }
    
    // Create record - use MP3 if available, otherwise use original
    const audioRecord: AudioRecord = {
      id: audioId,
      filename: mp3Filename || filename,
      originalName: file.name,
      mimeType: mp3Url ? 'audio/mpeg' : file.type,
      size: file.size,
      duration,
      metadata,
      url: mp3Url || `/uploads/audio/${filename}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Update index
    await this.addToIndex(audioRecord);
    
    return audioRecord;
  }
  
  async delete(audioId: string): Promise<void> {
    const { unlink } = await import('fs/promises');
    const { existsSync } = await import('fs');
    const path = await import('path');
    
    const index = await this.loadIndex();
    const record = index.records[audioId];
    
    if (record) {
      // Delete file
      const filePath = path.join(this.uploadDir, record.filename);
      if (existsSync(filePath)) {
        await unlink(filePath);
      }
      
      // Remove from index
      await this.removeFromIndex(audioId);
      console.log(`🗑️ Deleted locally: ${record.filename}`);
    }
  }
  
  async getRecord(audioId: string): Promise<AudioRecord | null> {
    const index = await this.loadIndex();
    return index.records[audioId] || null;
  }
  
  async list(filters?: AudioFilters): Promise<AudioRecord[]> {
    const index = await this.loadIndex();
    let records = Object.values(index.records) as AudioRecord[];
    
    // Apply filters
    if (filters?.entryId) {
      records = records.filter((r: AudioRecord) => r.metadata.entryId === filters.entryId);
    }
    if (filters?.level) {
      records = records.filter((r: AudioRecord) => r.metadata.level === filters.level);
    }
    if (filters?.levelId) {
      records = records.filter((r: AudioRecord) => r.metadata.levelId === filters.levelId);
    }
    if (filters?.speaker) {
      records = records.filter((r: AudioRecord) => r.metadata.speaker === filters.speaker);
    }
    if (filters?.dialect) {
      records = records.filter((r: AudioRecord) => r.metadata.dialect === filters.dialect);
    }
    
    return records.sort((a: AudioRecord, b: AudioRecord) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async getStats() {
    const index = await this.loadIndex();
    const records = Object.values(index.records) as AudioRecord[];
    
    const entriesWithAudio = new Set(records.map((r: AudioRecord) => r.metadata.entryId)).size;
    const recordsByLevel: Record<string, number> = {};
    
    records.forEach((record: AudioRecord) => {
      const level = record.metadata.level;
      recordsByLevel[level] = (recordsByLevel[level] || 0) + 1;
    });
    
    return {
      totalRecords: records.length,
      entriesWithAudio,
      recordsByLevel
    };
  }
  
  private async loadIndex() {
    const { readFile } = await import('fs/promises');
    const { existsSync } = await import('fs');
    
    if (existsSync(this.indexPath)) {
      try {
        const content = await readFile(this.indexPath, 'utf-8');
        return JSON.parse(content);
      } catch (error) {
        console.warn('Failed to load index, creating new one');
      }
    }
    
    return {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      records: {},
      entryIndex: {},
      levelIndex: {}
    };
  }
  
  private async saveIndex(index: any) {
    const { writeFile, mkdir } = await import('fs/promises');
    const { existsSync } = await import('fs');
    
    if (!existsSync(this.uploadDir)) {
      await mkdir(this.uploadDir, { recursive: true });
    }
    
    index.lastUpdated = new Date().toISOString();
    await writeFile(this.indexPath, JSON.stringify(index, null, 2));
  }
  
  private async addToIndex(audioRecord: AudioRecord) {
    const index = await this.loadIndex();
    
    // Add to records
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
    
    await this.saveIndex(index);
  }
  
  private async removeFromIndex(audioId: string) {
    const index = await this.loadIndex();
    const record = index.records[audioId];
    
    if (record) {
      // Remove from records
      delete index.records[audioId];
      
      // Remove from entry index
      const entryId = record.metadata.entryId;
      if (index.entryIndex[entryId]) {
        index.entryIndex[entryId] = index.entryIndex[entryId].filter((id: string) => id !== audioId);
        if (index.entryIndex[entryId].length === 0) {
          delete index.entryIndex[entryId];
        }
      }
      
      // Remove from level index
      const level = record.metadata.level;
      if (index.levelIndex[level]) {
        index.levelIndex[level] = index.levelIndex[level].filter((id: string) => id !== audioId);
        if (index.levelIndex[level].length === 0) {
          delete index.levelIndex[level];
        }
      }
      
      await this.saveIndex(index);
    }
  }
}

// Production mode: MongoDB + Vercel Blob
class ProductionAudioService implements AudioService {
  private audioDatabase: any;
  
  constructor() {
    // Lazy load to avoid import issues
    this.audioDatabase = null;
  }
  
  private async getDatabase() {
    if (!this.audioDatabase) {
      const { audioDatabase } = await import('./audioDatabase');
      this.audioDatabase = audioDatabase;
    }
    return this.audioDatabase;
  }
  
  async upload(file: File, metadata: AudioMetadata): Promise<AudioRecord> {
    const { put } = await import('@vercel/blob');
    const { v4: uuidv4 } = await import('uuid');
    const { writeFile, unlink, mkdir } = await import('fs/promises');
    const { existsSync } = await import('fs');
    const path = await import('path');
    const { convertToMp3 } = await import('@/utils/audioConverter');
    
    const audioId = uuidv4();
    const fileExtension = file.name.split('.').pop() || 'webm';
    const filename = `${audioId}.${fileExtension}`;
    
    // Upload original to Vercel Blob first (as backup)
    const blobPath = `audio/${metadata.entryId}/${metadata.level}/${filename}`;
    const blob = await put(blobPath, file, {
      access: 'public',
      addRandomSuffix: false,
    });
    
    console.log(`📤 Uploaded original to Vercel Blob: ${blobPath}`);
    
    // Convert to MP3 for better browser compatibility
    let mp3Url: string | undefined;
    let duration: number | undefined;
    
    try {
      // Create temp directory
      const tempDir = path.join('/tmp'); // Use /tmp for serverless
      if (!existsSync(tempDir)) {
        await mkdir(tempDir, { recursive: true });
      }
      
      // Save file temporarily
      const tempPath = path.join(tempDir, filename);
      const bytes = await file.arrayBuffer();
      await writeFile(tempPath, Buffer.from(bytes));
      
      // Convert to MP3
      const result = await convertToMp3(tempPath, tempDir, '');
      const mp3Filename = `${audioId}.mp3`;
      const mp3BlobPath = `audio/${metadata.entryId}/${metadata.level}/${mp3Filename}`;
      
      // Upload MP3 to Vercel Blob
      const { readFile } = await import('fs/promises');
      const mp3Buffer = await readFile(result.mp3Path);
      const mp3Blob = await put(mp3BlobPath, mp3Buffer, {
        access: 'public',
        contentType: 'audio/mpeg',
        addRandomSuffix: false,
      });
      
      mp3Url = mp3Blob.url;
      duration = result.duration;
      
      console.log(`✅ MP3 uploaded to Vercel Blob: ${mp3BlobPath}`);
      
      // Clean up temp files
      await unlink(tempPath);
      await unlink(result.mp3Path);
    } catch (error) {
      console.error(`❌ MP3 conversion failed:`, error);
      // Continue without MP3 - original WebM will be used
    }
    
    // Create record - use MP3 if available, otherwise use original
    const audioRecord: AudioRecord = {
      id: audioId,
      filename: mp3Url ? `${audioId}.mp3` : filename,
      originalName: file.name,
      mimeType: mp3Url ? 'audio/mpeg' : file.type,
      size: file.size,
      duration,
      metadata,
      url: mp3Url || blob.url,
      blobUrl: mp3Url || blob.url,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Save to MongoDB
    const db = await this.getDatabase();
    await db.addRecord(audioRecord);
    
    // Also update static index for immediate visibility
    await this.updateStaticIndex();
    
    return audioRecord;
  }
  
  async delete(audioId: string): Promise<void> {
    const { del } = await import('@vercel/blob');
    const db = await this.getDatabase();
    
    // Get record first
    const record = await db.getRecord(audioId);
    
    if (record?.blobUrl) {
      // Delete from Vercel Blob
      await del(record.blobUrl);
      console.log(`🗑️ Deleted from Vercel Blob: ${record.blobUrl}`);
    }
    
    // Remove from MongoDB
    await db.removeRecord(audioId);
    
    // Also update static index
    await this.updateStaticIndex();
  }
  
  async getRecord(audioId: string): Promise<AudioRecord | null> {
    const db = await this.getDatabase();
    return await db.getRecord(audioId);
  }
  
  async list(filters?: AudioFilters): Promise<AudioRecord[]> {
    const db = await this.getDatabase();
    return await db.listRecords(filters);
  }
  
  async getStats() {
    const db = await this.getDatabase();
    return await db.getStats();
  }
  
  // Update static index file with current database records
  private async updateStaticIndex(): Promise<void> {
    try {
      const { writeFile, mkdir } = await import('fs/promises');
      const { existsSync } = await import('fs');
      const path = await import('path');
      
      console.log('🔄 Updating static audio index...');
      
      // Get all records from database
      const db = await this.getDatabase();
      const allRecords = await db.listRecords();
      
      // Build index structure
      const index = {
        version: '1.0.0',
        lastUpdated: new Date().toISOString(),
        records: {} as Record<string, any>,
        entryIndex: {} as Record<string, string[]>,
        levelIndex: {} as Record<string, string[]>
      };
      
      // Process each record
      allRecords.forEach((record: AudioRecord) => {
        // Add to records
        index.records[record.id] = record;
        
        // Update entry index
        const entryId = record.metadata.entryId;
        if (!index.entryIndex[entryId]) {
          index.entryIndex[entryId] = [];
        }
        if (!index.entryIndex[entryId].includes(record.id)) {
          index.entryIndex[entryId].push(record.id);
        }
        
        // Update level index
        const level = record.metadata.level;
        if (!index.levelIndex[level]) {
          index.levelIndex[level] = [];
        }
        if (!index.levelIndex[level].includes(record.id)) {
          index.levelIndex[level].push(record.id);
        }
      });
      
      // Ensure data directory exists
      const dataDir = path.join(process.cwd(), 'src', 'data');
      if (!existsSync(dataDir)) {
        await mkdir(dataDir, { recursive: true });
      }
      
      // Write index file
      const indexPath = path.join(dataDir, 'audio-index.json');
      await writeFile(indexPath, JSON.stringify(index, null, 2));
      
      console.log(`✅ Updated static index with ${allRecords.length} records`);
      
    } catch (error) {
      console.error('❌ Failed to update static index:', error);
      // Don't throw - we don't want to break the upload if index update fails
    }
  }
}

// Singleton instance
export const audioService = createAudioService();
