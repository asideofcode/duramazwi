'use client';

import { useState, useEffect } from 'react';
import { AdminDictionaryEntry, AdminOperationResult } from '@/services/adminDataService';

interface UseAdminEntriesOptions {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  autoFetch?: boolean;
}

interface UseAdminEntriesReturn {
  entries: AdminDictionaryEntry[];
  loading: boolean;
  error: string | null;
  stats: any;
  total: number;
  currentPage: number;
  totalPages: number;
  fetchEntries: () => Promise<void>;
  fetchStats: () => Promise<void>;
  createEntry: (entryData: Omit<AdminDictionaryEntry, '_id' | 'createdAt' | 'updatedAt'>) => Promise<AdminOperationResult>;
  updateEntry: (id: string, updateData: Partial<AdminDictionaryEntry>) => Promise<AdminOperationResult>;
  deleteEntry: (id: string) => Promise<AdminOperationResult>;
  getEntry: (id: string) => Promise<AdminDictionaryEntry | null>;
}

export function useAdminEntries(options: UseAdminEntriesOptions = {}): UseAdminEntriesReturn {
  const {
    page = 1,
    limit = 50,
    search = '',
    category = '',
    autoFetch = true
  } = options;

  const [entries, setEntries] = useState<AdminDictionaryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch entries
  const fetchEntries = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(search && { search }),
        ...(category && { category })
      });

      const response = await fetch(`/api/admin/entries?${params}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch entries');
      }

      setEntries(result.data || []);
      setTotal(result.total || 0);
      setCurrentPage(result.page || page);
      setTotalPages(Math.ceil((result.total || 0) / limit));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('❌ Error fetching entries:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch stats
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch stats');
      }

      setStats(result.data);
    } catch (err) {
      console.error('❌ Error fetching stats:', err);
    }
  };

  // Create entry
  const createEntry = async (entryData: Omit<AdminDictionaryEntry, '_id' | 'createdAt' | 'updatedAt'>): Promise<AdminOperationResult> => {
    try {
      const response = await fetch('/api/admin/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entryData),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: result.error || 'Failed to create entry',
          error: result.details
        };
      }

      // Refresh entries after creation
      await fetchEntries();
      await fetchStats();

      return {
        success: true,
        message: result.message,
        data: result.data
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      return {
        success: false,
        message: 'Failed to create entry',
        error: errorMessage
      };
    }
  };

  // Update entry
  const updateEntry = async (id: string, updateData: Partial<AdminDictionaryEntry>): Promise<AdminOperationResult> => {
    try {
      const response = await fetch(`/api/admin/entries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: result.error || 'Failed to update entry',
          error: result.details
        };
      }

      // Refresh entries after update
      await fetchEntries();
      await fetchStats();

      return {
        success: true,
        message: result.message,
        data: result.data
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      return {
        success: false,
        message: 'Failed to update entry',
        error: errorMessage
      };
    }
  };

  // Delete entry
  const deleteEntry = async (id: string): Promise<AdminOperationResult> => {
    try {
      const response = await fetch(`/api/admin/entries/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: result.error || 'Failed to delete entry',
          error: result.details
        };
      }

      // Refresh entries after deletion
      await fetchEntries();
      await fetchStats();

      return {
        success: true,
        message: result.message,
        data: result.data
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      return {
        success: false,
        message: 'Failed to delete entry',
        error: errorMessage
      };
    }
  };

  // Get single entry
  const getEntry = async (id: string): Promise<AdminDictionaryEntry | null> => {
    try {
      const response = await fetch(`/api/admin/entries/${id}`);
      const result = await response.json();

      if (!response.ok) {
        console.error('❌ Error fetching entry:', result.error);
        return null;
      }

      return result.data;
    } catch (err) {
      console.error('❌ Error fetching entry:', err);
      return null;
    }
  };

  // Auto-fetch on mount and when dependencies change
  useEffect(() => {
    if (autoFetch) {
      fetchEntries();
      fetchStats();
    }
  }, [page, limit, search, category, autoFetch]);

  return {
    entries,
    loading,
    error,
    stats,
    total,
    currentPage,
    totalPages,
    fetchEntries,
    fetchStats,
    createEntry,
    updateEntry,
    deleteEntry,
    getEntry
  };
}
