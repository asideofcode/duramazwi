'use client';

import { FormMeaning } from './EditFormHelpers';

interface SimpleMeaningEditorProps {
  meaning: FormMeaning;
  onChange: (meaning: FormMeaning) => void;
}

export default function SimpleMeaningEditor({ meaning, onChange }: SimpleMeaningEditorProps) {
  const updatePartOfSpeech = (partOfSpeech: string) => {
    onChange({
      ...meaning,
      partOfSpeech
    });
  };

  const updateDefinition = (definition: string) => {
    onChange({
      ...meaning,
      definitions: [
        {
          ...meaning.definitions[0],
          definition
        }
      ]
    });
  };

  return (
    <div className="space-y-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-base font-semibold text-gray-900 dark:text-white">
            Part of Speech
          </label>
          <select
            value={meaning.partOfSpeech}
            onChange={(e) => updatePartOfSpeech(e.target.value)}
            className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
      </div>

      <div className="space-y-2">
        <label className="block text-base font-semibold text-gray-900 dark:text-white">
          English Definition *
        </label>
        <textarea
          required
          rows={4}
          value={meaning.definitions[0]?.definition || ''}
          onChange={(e) => updateDefinition(e.target.value)}
          className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
          placeholder="Enter the English definition"
        />
      </div>
    </div>
  );
}
