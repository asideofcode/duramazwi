'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AdminDictionaryEntry, AdminOperationResult } from '@/services/adminDataService';
import EntryEditModal from './EntryEditModal';

interface EnhancedAiAddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entryData: Partial<AdminDictionaryEntry>) => Promise<AdminOperationResult>;
}

interface ParsedEntry {
  word: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      examples: Array<{
        shona: string;
        english: string;
      }>;
    }>;
  }>;
}

type ModalStep = 'input' | 'edit' | 'success';

export default function EnhancedAiAddEntryModal({ isOpen, onClose, onSubmit }: EnhancedAiAddEntryModalProps) {
  const [currentStep, setCurrentStep] = useState<ModalStep>('input');
  const [textBlurb, setTextBlurb] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [parsedEntry, setParsedEntry] = useState<ParsedEntry | null>(null);
  
  // Create a mock entry for the form modal when we have parsed data
  const mockEntry = parsedEntry ? {
    _id: 'temp',
    word: parsedEntry.word,
    meanings: parsedEntry.meanings,
    status: 'draft' as const,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  } : undefined;

  // Step 1: AI Parsing
  const handleAiParse = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!textBlurb.trim()) {
      setError('Please enter some text to parse');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/parse-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textBlurb: textBlurb.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to parse entry');
      }

      if (!data.success || !data.entry) {
        throw new Error('Invalid response from AI service');
      }

      setParsedEntry(data.entry);
      setCurrentStep('edit');
      setError(null);
    } catch (err) {
      console.error('Error parsing entry:', err);
      setError(err instanceof Error ? err.message : 'Failed to parse entry');
    } finally {
      setIsProcessing(false);
    }
  };

  // Step 2: Handle form submission from EntryFormModal
  const handleFormSubmit = async (entryData: Partial<AdminDictionaryEntry>) => {
    const result = await onSubmit(entryData);
    
    if (result.success) {
      setCurrentStep('success');
    }
    
    return result;
  };

  const handleClose = () => {
    setCurrentStep('input');
    setTextBlurb('');
    setParsedEntry(null);
    setError(null);
    onClose();
  };

  const handleFormClose = () => {
    // When closing the form modal, go back to input step
    setCurrentStep('input');
    setParsedEntry(null);
  };

  if (!isOpen) return null;

  // Step 2: Use EntryEditModal for editing
  if (currentStep === 'edit' && mockEntry) {
    return (
      <EntryEditModal
        isOpen={true}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        entry={mockEntry}
        title="✏️ Review & Edit AI-Generated Entry"
        submitButtonText="✅ Add Entry"
      />
    );
  }

  // Step 1: AI Input and Step 3: Success
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full my-8">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {currentStep === 'input' && '🤖 AI-Powered Add Entry'}
            {currentStep === 'success' && '✅ Entry Added Successfully'}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* Step 1: AI Input */}
          {currentStep === 'input' && (
            <form onSubmit={handleAiParse} className="space-y-4">
              <div>
                <label htmlFor="textBlurb" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Describe the Shona word for AI to parse:
                </label>
                <textarea
                  id="textBlurb"
                  value={textBlurb}
                  onChange={(e) => setTextBlurb(e.target.value)}
                  placeholder="Example: 'kopa - noun meaning copper, the metal used for wiring. Also verb meaning to copy something, like copying homework from a friend.'"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                  disabled={isProcessing}
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Describe the word, its meanings, parts of speech, and usage. AI will create a structured entry for you to review.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                  disabled={isProcessing}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessing || !textBlurb.trim()}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isProcessing && (
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  )}
                  <span>{isProcessing ? 'Processing...' : '🤖 Generate Entry'}</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success */}
          {currentStep === 'success' && (
            <div className="text-center space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  Entry Added Successfully!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  The AI-generated entry has been added to the dictionary.
                </p>
              </div>
              
              <button
                onClick={handleClose}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Add Another Entry
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );

  // Render modal in a portal to avoid parent styling interference
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
