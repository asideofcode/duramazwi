'use client';

import { useState } from 'react';
import { AdminDictionaryEntry, AdminOperationResult } from '@/services/adminDataService';
import SvgIcon from '@/component/icons/svg-icon';

interface CreateEntryModalProps {
  onClose: () => void;
  onSubmit: (entryData: Omit<AdminDictionaryEntry, '_id' | 'createdAt' | 'updatedAt'>) => Promise<AdminOperationResult>;
}

export default function CreateEntryModal({ onClose, onSubmit }: CreateEntryModalProps) {
  const [formData, setFormData] = useState({
    word: '',
    definition: '',
    partOfSpeech: '',
    status: 'published' as 'published' | 'draft' | 'archived'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create entry data in the expected format
      const entryData: Omit<AdminDictionaryEntry, '_id' | 'createdAt' | 'updatedAt'> = {
        word: formData.word.trim(),
        meanings: [
          {
            partOfSpeech: formData.partOfSpeech.trim() || '',
            definitions: [
              {
                definition: formData.definition.trim(),
                examples: []
              }
            ]
          }
        ],
        status: formData.status
      };

      const result = await onSubmit(entryData);
      
      if (!result.success) {
        setError(result.error || result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add New Entry
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
              <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="word" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Word *
            </label>
            <input
              type="text"
              id="word"
              required
              value={formData.word}
              onChange={(e) => setFormData({ ...formData, word: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the Shona word"
            />
          </div>

          <div>
            <label htmlFor="definition" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Definition *
            </label>
            <textarea
              id="definition"
              required
              rows={3}
              value={formData.definition}
              onChange={(e) => setFormData({ ...formData, definition: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the English definition"
            />
          </div>

          <div>
            <label htmlFor="partOfSpeech" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Part of Speech
            </label>
            <select
              id="partOfSpeech"
              value={formData.partOfSpeech}
              onChange={(e) => setFormData({ ...formData, partOfSpeech: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select part of speech</option>
              <option value="noun">Noun</option>
              <option value="verb">Verb</option>
              <option value="adjective">Adjective</option>
              <option value="adverb">Adverb</option>
              <option value="pronoun">Pronoun</option>
              <option value="preposition">Preposition</option>
              <option value="conjunction">Conjunction</option>
              <option value="interjection">Interjection</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'published' | 'draft' | 'archived' })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.word.trim() || !formData.definition.trim()}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating...' : 'Create Entry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
