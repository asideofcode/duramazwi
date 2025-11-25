import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import dataService from './dataService';
import { DictionaryEntry } from '@/components/dictionary-entry-clean';
import { getDatabase } from '@/lib/mongodb';

// Types for admin operations
export interface AdminDictionaryEntry extends DictionaryEntry {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  lastReviewed?: string;
  needsReview?: boolean;
  status?: 'published' | 'draft' | 'archived';
}

export interface AdminOperationResult {
  success: boolean;
  message: string;
  data?: AdminDictionaryEntry | AdminDictionaryEntry[];
  error?: string;
  total?: number;
  page?: number;
  limit?: number;
}

class AdminDataService {
  private dataPath: string;
  private data: AdminDictionaryEntry[] = [];
  private isLoaded = false;

  constructor() {
    this.dataPath = path.join(process.cwd(), 'src', 'data', 'data.json');
  }

  /**
   * Load data from JSON file
   */
  private async loadData(): Promise<void> {
    if (this.isLoaded) return;

    try {
      const fileContent = await readFile(this.dataPath, 'utf-8');
      const rawData = JSON.parse(fileContent);
      
      // Transform data to include admin fields, preserving existing metadata
      this.data = rawData.map((entry: AdminDictionaryEntry, index: number) => ({
        ...entry,
        // Preserve existing metadata or set defaults
        _id: entry._id || `entry_${index}_${Date.now()}`,
        createdAt: entry.createdAt || new Date().toISOString(),
        updatedAt: entry.updatedAt || new Date().toISOString(),
        lastReviewed: entry.lastReviewed || undefined,
        needsReview: entry.needsReview || false,
        status: entry.status || 'published' as const
      }));
      
      this.isLoaded = true;
      console.log(`📚 Loaded ${this.data.length} entries for admin operations`);
    } catch (error) {
      console.error('❌ Error loading data:', error);
      throw new Error('Failed to load dictionary data');
    }
  }

  /**
   * Save data back to JSON file
   */
  private async saveData(): Promise<void> {
    try {
      // Keep all metadata fields in the JSON file for persistence
      // This includes: _id, createdAt, updatedAt, lastReviewed, needsReview, status
      const dataToSave = this.data.map(entry => ({
        ...entry,
        // Ensure metadata fields are present
        _id: entry._id,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
        lastReviewed: entry.lastReviewed,
        needsReview: entry.needsReview,
        status: entry.status
      }));
      
      await writeFile(this.dataPath, JSON.stringify(dataToSave, null, 2), 'utf-8');
      console.log(`💾 Saved ${this.data.length} entries to data.json with metadata`);
    } catch (error) {
      console.error('❌ Error saving data:', error);
      throw new Error('Failed to save dictionary data');
    }
  }

  /**
   * Sync a single entry to MongoDB database
   */
  private async syncEntryToDatabase(entry: AdminDictionaryEntry): Promise<void> {
    try {
      const db = await getDatabase();
      const collection = db.collection('words_new_schema');
      
      // Upsert the single entry to MongoDB
      await collection.updateOne(
        { word: entry.word },
        { 
          $set: {
            word: entry.word,
            meanings: entry.meanings,
            createdAt: entry.createdAt,
            updatedAt: entry.updatedAt,
            lastReviewed: entry.lastReviewed,
            needsReview: entry.needsReview,
            status: entry.status
          }
        },
        { upsert: true }
      );
      
      console.log(`🗄️  Synced entry "${entry.word}" to MongoDB`);
    } catch (error) {
      // Log error but don't throw - we don't want to fail the save if DB sync fails
      console.error(`⚠️  Warning: Failed to sync entry "${entry.word}" to MongoDB:`, error);
    }
  }

  /**
   * Delete a single entry from MongoDB database
   */
  private async deleteEntryFromDatabase(word: string): Promise<void> {
    try {
      const db = await getDatabase();
      const collection = db.collection('words_new_schema');
      
      // Delete the entry from MongoDB
      await collection.deleteOne({ word });
      
      console.log(`🗑️  Deleted entry "${word}" from MongoDB`);
    } catch (error) {
      // Log error but don't throw - we don't want to fail the delete if DB sync fails
      console.error(`⚠️  Warning: Failed to delete entry "${word}" from MongoDB:`, error);
    }
  }

  /**
   * Get all entries with pagination
   */
  async getAllEntries(page: number = 1, limit: number = 50, search: string = '', category: string = ''): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      let filteredData = this.data;
      
      // Apply search filter using the same fuzzy search as frontend
      if (search) {
        // Use the public dataService search which has fuzzy matching
        const searchResults = dataService.search(search);
        const searchWords = new Set(searchResults.map(result => result.word.toLowerCase()));
        
        filteredData = filteredData.filter(entry => 
          searchWords.has(entry.word.toLowerCase())
        );
      }
      
      // Apply category filter
      if (category) {
        const categoryLower = category.toLowerCase();
        filteredData = filteredData.filter(entry =>
          entry.meanings.some(meaning => 
            meaning.partOfSpeech?.toLowerCase() === categoryLower
          )
        );
      }
      
      // Sort alphabetically by word (removing ku prefix for verbs for sorting purposes)
      filteredData.sort((a, b) => {
        const getSortableWord = (entry: AdminDictionaryEntry) => {
          let word = entry.word.toLowerCase();
          // Check if any meaning is a verb and word starts with ku
          const hasVerbMeaning = entry.meanings.some(meaning => 
            meaning.partOfSpeech?.toLowerCase() === 'verb'
          );
          if (hasVerbMeaning && word.startsWith('ku')) {
            // Remove ku prefix for sorting (but keep original for display)
            word = word.substring(2);
          }
          return word;
        };
        
        return getSortableWord(a).localeCompare(getSortableWord(b));
      });
      
      // Apply pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = filteredData.slice(startIndex, endIndex);
      
      return {
        success: true,
        message: `Retrieved ${paginatedData.length} entries`,
        data: paginatedData,
        total: filteredData.length,
        page,
        limit
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve entries',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get entry by ID or word
   */
  async getEntryById(id: string): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      console.log('🔍 Looking for entry with ID/word:', id);
      
      // First try to find by _id (for backward compatibility)
      let entry = this.data.find(item => item._id === id);
      
      // If not found by _id, try to find by word (URL decoded)
      if (!entry) {
        const decodedWord = decodeURIComponent(id);
        entry = this.data.find(item => item.word.toLowerCase() === decodedWord.toLowerCase());
        console.log('🔍 Searching by word:', decodedWord);
      }
      
      if (!entry) {
        console.log('❌ Entry not found. Available words:', this.data.map(item => item.word).slice(0, 10));
        return {
          success: false,
          message: 'Entry not found',
          error: `No entry found with ID/word: ${id}`
        };
      }
      
      return {
        success: true,
        message: 'Entry retrieved successfully',
        data: entry
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve entry',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Create new entry
   */
  async createEntry(entryData: Omit<AdminDictionaryEntry, '_id' | 'createdAt' | 'updatedAt'>): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      // Check if word already exists
      const existingEntry = this.data.find(item => 
        item.word.toLowerCase() === entryData.word.toLowerCase()
      );
      
      if (existingEntry) {
        return {
          success: false,
          message: 'Entry already exists',
          error: `An entry for "${entryData.word}" already exists`
        };
      }
      
      // Create new entry
      const newEntry: AdminDictionaryEntry = {
        ...entryData,
        _id: `entry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: entryData.status || 'published'
      };
      
      this.data.push(newEntry);
      await this.saveData();
      
      // Sync the new entry to MongoDB
      await this.syncEntryToDatabase(newEntry);
      
      return {
        success: true,
        message: 'Entry created successfully',
        data: newEntry
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to create entry',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Update existing entry
   */
  async updateEntry(id: string, updateData: Partial<AdminDictionaryEntry>): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      // First try to find by _id (for backward compatibility)
      let entryIndex = this.data.findIndex(item => item._id === id);
      let originalEntry = this.data[entryIndex];
      
      // If not found by _id, try to find by word
      if (entryIndex === -1) {
        const decodedWord = decodeURIComponent(id);
        entryIndex = this.data.findIndex(item => item.word.toLowerCase() === decodedWord.toLowerCase());
        originalEntry = this.data[entryIndex];
      }
      
      if (entryIndex === -1) {
        return {
          success: false,
          message: 'Entry not found',
          error: `No entry found with ID/word: ${id}`
        };
      }
      
      // Update entry
      const updatedEntry = {
        ...originalEntry,
        ...updateData,
        _id: originalEntry._id, // Keep original _id
        updatedAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      };
      
      this.data[entryIndex] = updatedEntry;
      await this.saveData();
      
      // Sync the updated entry to MongoDB
      await this.syncEntryToDatabase(updatedEntry);
      
      return {
        success: true,
        message: 'Entry updated successfully',
        data: updatedEntry
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to update entry',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Delete entry
   */
  async deleteEntry(id: string): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      // First try to find by _id (for backward compatibility)
      let entryIndex = this.data.findIndex(item => item._id === id);
      
      // If not found by _id, try to find by word
      if (entryIndex === -1) {
        const decodedWord = decodeURIComponent(id);
        entryIndex = this.data.findIndex(item => item.word.toLowerCase() === decodedWord.toLowerCase());
      }
      
      if (entryIndex === -1) {
        return {
          success: false,
          message: 'Entry not found',
          error: `No entry found with ID/word: ${id}`
        };
      }
      
      const deletedEntry = this.data[entryIndex];
      this.data.splice(entryIndex, 1);
      await this.saveData();
      
      // Delete from MongoDB
      await this.deleteEntryFromDatabase(deletedEntry.word);
      
      return {
        success: true,
        message: 'Entry deleted successfully',
        data: deletedEntry
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to delete entry',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get statistics
   */
  async getStats(): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      const stats = {
        totalEntries: this.data.length,
        publishedEntries: this.data.filter(entry => entry.status === 'published').length,
        draftEntries: this.data.filter(entry => entry.status === 'draft').length,
        archivedEntries: this.data.filter(entry => entry.status === 'archived').length,
        recentEntries: this.data
          .sort((a, b) => new Date(b.updatedAt || '').getTime() - new Date(a.updatedAt || '').getTime())
          .slice(0, 5)
      };
      
      return {
        success: true,
        message: 'Statistics retrieved successfully',
        data: stats as any
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve statistics',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Bulk operations
   */
  async bulkUpdate(ids: string[], updateData: Partial<AdminDictionaryEntry>): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      const updatedEntries: AdminDictionaryEntry[] = [];
      
      for (const id of ids) {
        const entryIndex = this.data.findIndex(item => item._id === id);
        if (entryIndex !== -1) {
          this.data[entryIndex] = {
            ...this.data[entryIndex],
            ...updateData,
            _id: id,
            updatedAt: new Date().toISOString()
          };
          updatedEntries.push(this.data[entryIndex]);
        }
      }
      
      await this.saveData();
      
      return {
        success: true,
        message: `Updated ${updatedEntries.length} entries`,
        data: updatedEntries
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to perform bulk update',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Export singleton instance
const adminDataService = new AdminDataService();
export default adminDataService;
