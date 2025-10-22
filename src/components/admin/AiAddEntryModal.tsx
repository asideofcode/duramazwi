'use client';

import { useState } from 'react';
import { DictionaryEntry } from '../dictionary-entry-clean';

interface AiAddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEntryGenerated: (entry: DictionaryEntry) => void;
}

export default function AiAddEntryModal({ isOpen, onClose, onEntryGenerated }: AiAddEntryModalProps) {
  const [textBlurb, setTextBlurb] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedEntry, setGeneratedEntry] = useState<DictionaryEntry | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
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

      setGeneratedEntry(data.entry);
      setError(null);
    } catch (err) {
      console.error('Error parsing entry:', err);
      setError(err instanceof Error ? err.message : 'Failed to parse entry');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUseEntry = () => {
    if (generatedEntry) {
      onEntryGenerated(generatedEntry);
      handleClose();
    }
  };

  const handleClose = () => {
    setTextBlurb('');
    setGeneratedEntry(null);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            🤖 AI-Powered Add Entry
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {!generatedEntry ? (
            /* Input Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="textBlurb" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Paste your text blurb here:
                </label>
                <textarea
                  id="textBlurb"
                  value={textBlurb}
                  onChange={(e) => setTextBlurb(e.target.value)}
                  placeholder="Example: 'kopa - noun meaning copper, the metal used for wiring. Also verb meaning to copy something, like copying homework from a friend.'"
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                  disabled={isProcessing}
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Describe the Shona word, its meanings, parts of speech, and usage. The AI will parse this into a structured dictionary entry.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-red-800 dark:text-red-200">{error}</p>
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  disabled={isProcessing}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessing || !textBlurb.trim()}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center space-x-2"
                >
                  {isProcessing && (
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  )}
                  <span>{isProcessing ? 'Processing...' : '🤖 Parse with AI'}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Generated Entry Preview */
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  ✅ Entry Generated Successfully!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  Review the generated entry below and click "Use This Entry" to add it to the dictionary.
                </p>
              </div>

              {/* Entry Preview */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {generatedEntry.word}
                </h4>

                <div className="space-y-4">
                  {generatedEntry.meanings.map((meaning, meaningIndex) => (
                    <div key={meaningIndex} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {meaning.partOfSpeech}
                        </span>
                      </div>

                      {meaning.definitions.map((definition, defIndex) => (
                        <div key={defIndex} className="ml-4 space-y-2">
                          <p className="text-gray-900 dark:text-gray-100 font-medium">
                            {definition.definition}
                          </p>
                          
                          {definition.examples.length > 0 && (
                            <div className="ml-4 space-y-1">
                              {definition.examples.map((example, exampleIndex) => (
                                <div key={exampleIndex} className="text-sm">
                                  <p className="text-gray-700 dark:text-gray-300 italic">
                                    "{example.shona}"
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    "{example.english}"
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setGeneratedEntry(null)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  ← Back to Edit
                </button>
                <button
                  onClick={handleUseEntry}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  ✅ Use This Entry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
