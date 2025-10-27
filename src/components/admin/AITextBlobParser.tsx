'use client';

import { useState } from 'react';
import { Challenge } from '@/types/challenge';

interface AITextBlobParserProps {
  onChallengeGenerated: (challenge: Partial<Challenge>) => void;
  onCancel: () => void;
}

export default function AITextBlobParser({ onChallengeGenerated, onCancel }: AITextBlobParserProps) {
  const [textBlob, setTextBlob] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleGenerate = async () => {
    if (!textBlob.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    if (textBlob.trim().length < 10) {
      setError('Text must be at least 10 characters long');
      return;
    }

    setShowConfirmation(true);
  };

  const confirmGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    setShowConfirmation(false);

    try {
      const response = await fetch('/api/admin/generate-challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'parse_text_blob',
          textBlob: textBlob.trim()
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate challenge');
      }

      if (result.success && result.challenge) {
        onChallengeGenerated(result.challenge);
      } else {
        throw new Error('Invalid response from AI service');
      }
    } catch (err) {
      console.error('Error generating challenge:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate challenge');
    } finally {
      setIsGenerating(false);
    }
  };

  const cancelConfirmation = () => {
    setShowConfirmation(false);
  };

  if (showConfirmation) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 mb-4">
            <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Generate Challenge from Text?
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            This will replace all current form data with AI-generated content based on your text. This action cannot be undone.
          </p>
          <div className="flex space-x-3 justify-center">
            <button
              onClick={cancelConfirmation}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={confirmGenerate}
              disabled={isGenerating}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors"
            >
              {isGenerating ? 'Generating...' : 'Generate Challenge'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          🤖 AI Challenge Generator
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Paste any text content (lesson material, vocabulary, sentences, etc.) and AI will generate a complete challenge based on it.
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Text Content
          </label>
          <textarea
            value={textBlob}
            onChange={(e) => {
              setTextBlob(e.target.value);
              setError(null);
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            rows={6}
            placeholder="Paste your text here... (e.g., vocabulary words, sentences, lesson content, etc.)"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {textBlob.length} characters (minimum 10 required)
          </p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleGenerate}
            disabled={isGenerating || textBlob.trim().length < 10}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span>Generate Challenge</span>
              </>
            )}
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
