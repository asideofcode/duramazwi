import { AudioRecord, AudioFilters } from './audioStorage';

// Public audio service - reads directly from static JSON file
// No API calls, no environment variables, just pure client-side reading
export class PublicAudioService {
  private static instance: PublicAudioService;
  private audioIndex: any = null;
  private loading: Promise<void> | null = null;

  private constructor() {}

  static getInstance(): PublicAudioService {
    if (!PublicAudioService.instance) {
      PublicAudioService.instance = new PublicAudioService();
    }
    return PublicAudioService.instance;
  }

  private async loadIndex(): Promise<void> {
    if (this.audioIndex) return;
    
    if (this.loading) {
      await this.loading;
      return;
    }

    this.loading = (async () => {
      try {
        // Always read from the static uploads.json file
        const response = await fetch('/uploads/audio/uploads.json');
        if (!response.ok) {
          throw new Error(`Failed to load audio index: ${response.status}`);
        }
        this.audioIndex = await response.json();
        console.log(`📻 Loaded ${Object.keys(this.audioIndex.records || {}).length} audio records from static file`);
      } catch (error) {
        console.warn('⚠️ Failed to load audio index, using empty index:', error);
        this.audioIndex = {
          version: '1.0.0',
          lastUpdated: new Date().toISOString(),
          records: {},
          entryIndex: {},
          levelIndex: {}
        };
      }
    })();

    await this.loading;
    this.loading = null;
  }

  async getRecord(audioId: string): Promise<AudioRecord | null> {
    await this.loadIndex();
    return this.audioIndex.records[audioId] || null;
  }

  async list(filters?: AudioFilters): Promise<AudioRecord[]> {
    await this.loadIndex();
    
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

  async getStats(): Promise<{
    totalRecords: number;
    entriesWithAudio: number;
    recordsByLevel: Record<string, number>;
  }> {
    await this.loadIndex();
    
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

  // Clear cache (useful for development)
  clearCache(): void {
    this.audioIndex = null;
    this.loading = null;
  }
}

// Singleton instance for public use
export const publicAudio = PublicAudioService.getInstance();
