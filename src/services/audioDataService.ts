import { AudioRecord, AudioFilters } from './audioAPIClient';
// Static import like dataService - build-time resolution only
import audioIndexRaw from '@/data/audio-index.json';

// Build-time audio service - loads data once at build time, like dataService
// No runtime fetching, no client-side loading, pure build-time resolution
class AudioDataService {
  private audioIndex: any;

  constructor() {
    // Static import - resolved at build time, just like dataService
    this.audioIndex = audioIndexRaw;
    console.log(`🎵 Loaded ${Object.keys(this.audioIndex.records || {}).length} audio records at build time`);
  }

  getRecord(audioId: string): AudioRecord | null {
    return this.audioIndex.records[audioId] || null;
  }

  getRecordsForEntry(entryId: string, level?: 'word' | 'meaning' | 'example', levelId?: string): AudioRecord[] {
    // Use entry index for efficient lookup
    const audioIds = this.audioIndex.entryIndex[entryId] || [];
    
    let records = audioIds
      .map((id: string) => this.audioIndex.records[id])
      .filter((record: AudioRecord) => record);

    // Apply level filter
    if (level) {
      records = records.filter((record: AudioRecord) => record.metadata.level === level);
    }

    // Apply levelId filter
    if (levelId) {
      records = records.filter((record: AudioRecord) => record.metadata.levelId === levelId);
    }

    // Sort by creation date (newest first)
    return records.sort((a: AudioRecord, b: AudioRecord) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  getRecordsByLevel(level: 'word' | 'meaning' | 'example'): AudioRecord[] {
    // Use level index for efficient lookup
    const audioIds = this.audioIndex.levelIndex[level] || [];
    
    const records = audioIds
      .map((id: string) => this.audioIndex.records[id])
      .filter((record: AudioRecord) => record);

    // Sort by creation date (newest first)
    return records.sort((a: AudioRecord, b: AudioRecord) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  list(filters?: AudioFilters): AudioRecord[] {
    let candidateIds: string[] = Object.keys(this.audioIndex.records);
    
    // Use indexes for efficient filtering
    if (filters?.entryId) {
      candidateIds = this.audioIndex.entryIndex[filters.entryId] || [];
    }
    
    if (filters?.level) {
      const levelIds = this.audioIndex.levelIndex[filters.level] || [];
      candidateIds = candidateIds.filter(id => levelIds.includes(id));
    }
    
    // Apply remaining filters
    const records = candidateIds
      .map(id => this.audioIndex.records[id])
      .filter((record: AudioRecord) => {
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
    return records.sort((a: AudioRecord, b: AudioRecord) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  getStats(): {
    totalRecords: number;
    entriesWithAudio: number;
    recordsByLevel: Record<string, number>;
  } {
    const records = Object.values(this.audioIndex.records) as AudioRecord[];
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

  // Check if an entry has audio
  hasAudio(entryId: string): boolean {
    return !!(this.audioIndex.entryIndex[entryId]?.length > 0);
  }

  // Get all entries that have audio
  getEntriesWithAudio(): string[] {
    return Object.keys(this.audioIndex.entryIndex);
  }
}

// Singleton instance - loaded once at build time
export const audioDataService = new AudioDataService();
