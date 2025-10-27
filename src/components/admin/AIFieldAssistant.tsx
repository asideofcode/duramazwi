'use client';

import { useState } from 'react';

interface AIFieldAssistantProps {
  type: 'explanation' | 'question' | 'options';
  currentValue?: string | string[];
  context: {
    question?: string;
    correctAnswer?: string | string[];
    type?: string;
    existingOptions?: string[];
  };
  onSuggestion: (value: string | string[]) => void;
  onApprove: (value: string | string[]) => void;
  onReject: () => void;
}

export default function AIFieldAssistant({ 
  type, 
  currentValue, 
  context, 
  onSuggestion, 
  onApprove, 
  onReject 
}: AIFieldAssistantProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestion, setSuggestion] = useState<string | string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateSuggestion = async () => {
    setIsGenerating(true);
    setError(null);
    setSuggestion(null);

    try {
      const payload: any = {
        action: `generate_${type}`,
        ...context
      };

      // Add specific parameters based on type
      if (type === 'options') {
        payload.count = 4;
      }

      const response = await fetch('/api/admin/generate-challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Failed to generate ${type}`);
      }

      if (result.success) {
        const generatedValue = result[type] || result.options;
        setSuggestion(generatedValue);
        onSuggestion(generatedValue);
      } else {
        throw new Error('Invalid response from AI service');
      }
    } catch (err) {
      console.error(`Error generating ${type}:`, err);
      setError(err instanceof Error ? err.message : `Failed to generate ${type}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApprove = () => {
    if (suggestion) {
      onApprove(suggestion);
      setSuggestion(null);
    }
  };

  const handleReject = () => {
    setSuggestion(null);
    onReject();
  };

  const getButtonText = () => {
    switch (type) {
      case 'explanation': return 'Generate Explanation';
      case 'question': return 'Generate Question';
      case 'options': return 'Generate Options';
      default: return 'Generate';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'explanation':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
      case 'question':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'options':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  const canGenerate = () => {
    switch (type) {
      case 'explanation':
        return context.question && context.correctAnswer;
      case 'question':
        return context.correctAnswer;
      case 'options':
        return context.question && context.correctAnswer;
      default:
        return false;
    }
  };

  const renderSuggestion = () => {
    if (!suggestion) return null;

    if (type === 'options' && Array.isArray(suggestion)) {
      return (
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            AI Suggested Options:
          </div>
          <div className="space-y-1">
            {suggestion.map((option, index) => (
              <div key={index} className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-sm">
                {option}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
          AI Suggestion:
        </div>
        <div className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-sm">
          {suggestion as string}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-3">
      {error && (
        <div className="p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {!suggestion && (
        <button
          onClick={generateSuggestion}
          disabled={isGenerating || !canGenerate()}
          className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-md transition-colors text-sm"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin h-3 w-3 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              {getIcon()}
              <span>{getButtonText()}</span>
            </>
          )}
        </button>
      )}

      {suggestion && (
        <div className="space-y-3">
          {renderSuggestion()}
          
          <div className="flex space-x-2">
            <button
              onClick={handleApprove}
              className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors text-sm flex items-center space-x-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{type === 'options' ? 'Add Options' : 'Use This'}</span>
            </button>
            <button
              onClick={handleReject}
              className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors text-sm flex items-center space-x-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Reject</span>
            </button>
            <button
              onClick={generateSuggestion}
              disabled={isGenerating}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors text-sm flex items-center space-x-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <span>Try Again</span>
            </button>
          </div>
        </div>
      )}

      {!canGenerate() && !suggestion && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {type === 'explanation' && 'Need question and correct answer to generate explanation'}
          {type === 'question' && 'Need correct answer to generate question'}
          {type === 'options' && 'Need question and correct answer to generate options'}
        </p>
      )}
    </div>
  );
}
