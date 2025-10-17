'use client';

import { useState } from 'react';
import { FormExample } from './EditFormHelpers';
import SvgIcon from '@/component/icons/svg-icon';

interface ExampleEditorProps {
  examples: FormExample[];
  onChange: (examples: FormExample[]) => void;
  word?: string;
  definition?: string;
  partOfSpeech?: string;
}

export default function ExampleEditor({ examples, onChange, word, definition, partOfSpeech }: ExampleEditorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const addExample = () => {
    onChange([...examples, { shona: '', english: '' }]);
  };

  const generateExamples = async () => {
    if (!word || !definition) return;
    
    setIsGenerating(true);
    try {
      const response = await fetch('/api/admin/generate-example', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word,
          definition,
          partOfSpeech
        }),
      });

      const result = await response.json();
      
      if (result.success && result.examples) {
        // Add generated examples to existing ones
        onChange([...examples, ...result.examples]);
      } else {
        console.error('Failed to generate examples:', result.error);
      }
    } catch (error) {
      console.error('Error generating examples:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const removeExample = (index: number) => {
    onChange(examples.filter((_, i) => i !== index));
  };

  const updateExample = (index: number, field: 'shona' | 'english', value: string) => {
    const newExamples = [...examples];
    newExamples[index] = { ...newExamples[index], [field]: value };
    onChange(newExamples);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Examples
        </h5>
        <div className="flex items-center space-x-2">
          {word && definition && (
            <button
              type="button"
              onClick={generateExamples}
              disabled={isGenerating}
              className="inline-flex items-center space-x-1 px-3 py-1 text-sm bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Generate AI examples"
            >
              <span className="text-sm">✨</span>
              <span>{isGenerating ? 'Generating...' : 'AI Examples'}</span>
            </button>
          )}
          <button
            type="button"
            onClick={addExample}
            className="inline-flex items-center space-x-1 px-3 py-1 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-md transition-colors"
          >
            <SvgIcon className="h-4 w-4" variant="default" icon="Plus" />
            <span>Add Example</span>
          </button>
        </div>
      </div>

      {examples.length === 0 ? (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
          No examples yet. Click "Add Example" to add one.
        </div>
      ) : (
        <div className="space-y-3">
          {examples.map((example, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800">
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Shona Example
                </label>
                <textarea
                  rows={2}
                  value={example.shona}
                  onChange={(e) => updateExample(index, 'shona', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                  placeholder="Enter Shona example sentence"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                  English Translation
                </label>
                <div className="flex space-x-2">
                  <textarea
                    rows={2}
                    value={example.english}
                    onChange={(e) => updateExample(index, 'english', e.target.value)}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                    placeholder="Enter English translation"
                  />
                  <button
                    type="button"
                    onClick={() => removeExample(index)}
                    className="px-2 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                    title="Remove example"
                  >
                    <span className="text-sm font-bold">×</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
