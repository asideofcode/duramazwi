import { MongoClient, Db, Collection } from 'mongodb';
import { AudioRecord, AudioFilters } from './audioAPIClient';

export interface AudioIndexDocument {
  _id: string; // audioId
  audioRecord: AudioRecord;
  entryId: string; // For efficient querying
  level: string; // For efficient querying
  levelId?: string; // For specific targeting
  createdAt: Date;
  updatedAt: Date;
}

export class AudioDatabase {
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private collection: Collection<AudioIndexDocument> | null = null;

  constructor() {
    // Initialize connection lazily
  }

  private async connect(): Promise<void> {
    if (this.client && this.db && this.collection) {
      return; // Already connected
    }

    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    this.client = new MongoClient(uri);
    await this.client.connect();
    this.db = this.client.db('chishona');
    this.collection = this.db.collection<AudioIndexDocument>('audio_index');

    // Create indexes for efficient querying
    await this.collection.createIndex({ entryId: 1 });
    await this.collection.createIndex({ level: 1 });
    await this.collection.createIndex({ entryId: 1, level: 1 });
    await this.collection.createIndex({ entryId: 1, levelId: 1 });
    
    console.log('📊 Connected to audio database with indexes');
  }

  async addRecord(audioRecord: AudioRecord): Promise<void> {
    await this.connect();

    const document: AudioIndexDocument = {
      _id: audioRecord.id,
      audioRecord,
      entryId: audioRecord.metadata.entryId,
      level: audioRecord.metadata.level,
      levelId: audioRecord.metadata.levelId,
      createdAt: new Date(audioRecord.createdAt),
      updatedAt: new Date()
    };

    await this.collection!.replaceOne(
      { _id: audioRecord.id },
      document,
      { upsert: true }
    );

    console.log(`💾 Saved audio record to database: ${audioRecord.id}`);
  }

  async removeRecord(audioId: string): Promise<void> {
    await this.connect();

    const result = await this.collection!.deleteOne({ _id: audioId });
    
    if (result.deletedCount > 0) {
      console.log(`🗑️  Removed audio record from database: ${audioId}`);
    }
  }

  async getRecord(audioId: string): Promise<AudioRecord | null> {
    await this.connect();

    const document = await this.collection!.findOne({ _id: audioId });
    return document ? document.audioRecord : null;
  }

  async listRecords(filters?: AudioFilters): Promise<AudioRecord[]> {
    await this.connect();

    // Build MongoDB query from filters
    const query: any = {};
    
    if (filters?.entryId) {
      query.entryId = filters.entryId;
    }
    
    if (filters?.level) {
      query.level = filters.level;
    }
    
    if (filters?.levelId) {
      query.levelId = filters.levelId;
    }
    
    if (filters?.speaker) {
      query['audioRecord.metadata.speaker'] = filters.speaker;
    }
    
    if (filters?.dialect) {
      query['audioRecord.metadata.dialect'] = filters.dialect;
    }

    const documents = await this.collection!
      .find(query)
      .sort({ createdAt: -1 }) // Newest first
      .toArray();

    return documents.map(doc => doc.audioRecord);
  }

  async getAllRecords(): Promise<AudioRecord[]> {
    await this.connect();

    const documents = await this.collection!
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return documents.map(doc => doc.audioRecord);
  }

  async getStats(): Promise<{
    totalRecords: number;
    entriesWithAudio: number;
    recordsByLevel: Record<string, number>;
  }> {
    await this.connect();

    const totalRecords = await this.collection!.countDocuments();
    
    const entriesWithAudio = await this.collection!.distinct('entryId').then(
      entries => entries.length
    );

    const levelStats = await this.collection!.aggregate([
      {
        $group: {
          _id: '$level',
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    const recordsByLevel: Record<string, number> = {};
    levelStats.forEach(stat => {
      recordsByLevel[stat._id] = stat.count;
    });

    return {
      totalRecords,
      entriesWithAudio,
      recordsByLevel
    };
  }

  async exportToFile(filePath: string): Promise<void> {
    await this.connect();

    console.log('📤 Exporting audio index to file...');
    
    const allRecords = await this.getAllRecords();
    
    // Build the same structure as the file-based index
    const index = {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      records: {} as Record<string, AudioRecord>,
      entryIndex: {} as Record<string, string[]>,
      levelIndex: {} as Record<string, string[]>
    };

    // Populate indexes
    for (const record of allRecords) {
      // Main records
      index.records[record.id] = record;
      
      // Entry index
      const entryId = record.metadata.entryId;
      if (!index.entryIndex[entryId]) {
        index.entryIndex[entryId] = [];
      }
      index.entryIndex[entryId].push(record.id);
      
      // Level index
      const level = record.metadata.level;
      if (!index.levelIndex[level]) {
        index.levelIndex[level] = [];
      }
      index.levelIndex[level].push(record.id);
    }

    // Write to file
    const fs = require('fs');
    const path = require('path');
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(index, null, 2));
    
    console.log(`✅ Exported ${allRecords.length} audio records to ${filePath}`);
  }

  async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
      this.collection = null;
    }
  }
}

// Singleton instance
export const audioDatabase = new AudioDatabase();
