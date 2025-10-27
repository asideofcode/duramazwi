'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AdminDictionaryEntry, AdminOperationResult } from '@/services/adminDataService';
import { EditFormData, entryToFormData, formDataToEntry, validateFormData } from './EditFormHelpers';
import WordInput from './WordInput';
import StatusSelector from './StatusSelector';
import MeaningEditor from './MeaningEditor';

interface EntryEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entryData: Partial<AdminDictionaryEntry>) => Promise<AdminOperationResult>;
  entry?: AdminDictionaryEntry; // Optional - if provided, we're editing; if not, we're creating
  title?: string;
  submitButtonText?: string;
}

export default function EntryEditModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  entry, 
  title, 
  submitButtonText 
}: EntryEditModalProps) {
  const isEditing = !!entry;
  
  const [formData, setFormData] = useState<EditFormData>({
    word: '',
    meanings: [
      {
        partOfSpeech: '',
        definitions: [
          {
            definition: '',
            examples: [{ shona: '', english: '' }]
          }
        ]
      }
    ],
    status: 'published'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize form data when entry changes
  useEffect(() => {
    if (entry) {
      setFormData(entryToFormData(entry));
    } else {
      // Reset to default for new entry
      setFormData({
        word: '',
        meanings: [
          {
            partOfSpeech: '',
            definitions: [
              {
                definition: '',
                examples: [{ shona: '', english: '' }]
              }
            ]
          }
        ],
        status: 'published'
      });
    }
  }, [entry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate form data using the same validation as the edit page
      const errors = validateFormData(formData);
      if (errors.length > 0) {
        setError(errors.join(', '));
        setIsSubmitting(false);
        return;
      }

      // Convert form data to entry format using the same helper
      const entryData = formDataToEntry(formData);


      const result = await onSubmit(entryData);
      
      if (!result.success) {
        setError(result.error || result.message);
      } else {
        onClose();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset form data when closing
    if (entry) {
      setFormData(entryToFormData(entry));
    } else {
      setFormData({
        word: '',
        meanings: [
          {
            partOfSpeech: '',
            definitions: [
              {
                definition: '',
                examples: [{ shona: '', english: '' }]
              }
            ]
          }
        ],
        status: 'published'
      });
    }
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  const modalTitle = title || (isEditing ? `Edit Entry: ${entry.word}` : 'Add New Entry');
  const buttonText = submitButtonText || (isEditing ? 'Update Entry' : 'Create Entry');

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div 
        className="flex items-center justify-center min-h-full p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full my-8">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {modalTitle}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          <div className="space-y-8">
            <WordInput
              value={formData.word}
              onChange={(value) => setFormData({ ...formData, word: value })}
              word={entry?.word}
            />

            <MeaningEditor
              meanings={formData.meanings}
              onChange={(meanings) => setFormData({ ...formData, meanings })}
              word={formData.word}
              entryId={entry?._id}
            />

            <StatusSelector
              value={formData.status}
              onChange={(value) => setFormData({ ...formData, status: value })}
            />
          </div>

          <div className="flex justify-end space-x-4 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.word.trim() || !formData.meanings[0]?.definitions[0]?.definition?.trim()}
              className="px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? `${isEditing ? 'Updating' : 'Creating'}...` : buttonText}
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );

  // Render modal in a portal to avoid parent styling interference
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
