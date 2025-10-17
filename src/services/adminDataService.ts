import fs from 'fs/promises';
import path from 'path';
import { DictionaryEntry } from '@/components/dictionary-entry-clean';

// Types for admin operations
export interface AdminDictionaryEntry extends DictionaryEntry {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
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
      const fileContent = await fs.readFile(this.dataPath, 'utf-8');
      const rawData = JSON.parse(fileContent);
      
      // Transform data to include admin fields
      this.data = rawData.map((entry: DictionaryEntry, index: number) => ({
        ...entry,
        _id: entry._id || `entry_${index}_${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'published' as const
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
      // Remove admin-specific fields before saving to maintain compatibility
      const cleanData = this.data.map(({ _id, createdAt, updatedAt, status, ...entry }) => entry);
      
      await fs.writeFile(this.dataPath, JSON.stringify(cleanData, null, 2), 'utf-8');
      console.log(`💾 Saved ${this.data.length} entries to data.json`);
    } catch (error) {
      console.error('❌ Error saving data:', error);
      throw new Error('Failed to save dictionary data');
    }
  }

  /**
   * Get all entries with pagination
   */
  async getAllEntries(page: number = 1, limit: number = 50, search: string = '', category: string = ''): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      let filteredData = this.data;
      
      // Apply search filter
      if (search) {
        const searchLower = search.toLowerCase();
        filteredData = filteredData.filter(entry => 
          entry.word.toLowerCase().includes(searchLower) ||
          entry.meanings.some(meaning => 
            meaning.definitions.some(def => 
              def.definition.toLowerCase().includes(searchLower)
            )
          )
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
   * Get entry by ID
   */
  async getEntryById(id: string): Promise<AdminOperationResult> {
    try {
      await this.loadData();
      
      const entry = this.data.find(item => item._id === id);
      
      if (!entry) {
        return {
          success: false,
          message: 'Entry not found',
          error: `No entry found with ID: ${id}`
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
      
      const entryIndex = this.data.findIndex(item => item._id === id);
      
      if (entryIndex === -1) {
        return {
          success: false,
          message: 'Entry not found',
          error: `No entry found with ID: ${id}`
        };
      }
      
      // Update entry
      const updatedEntry = {
        ...this.data[entryIndex],
        ...updateData,
        _id: id, // Ensure ID doesn't change
        updatedAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      };
      
      this.data[entryIndex] = updatedEntry;
      await this.saveData();
      
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
      
      const entryIndex = this.data.findIndex(item => item._id === id);
      
      if (entryIndex === -1) {
        return {
          success: false,
          message: 'Entry not found',
          error: `No entry found with ID: ${id}`
        };
      }
      
      const deletedEntry = this.data[entryIndex];
      this.data.splice(entryIndex, 1);
      await this.saveData();
      
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
