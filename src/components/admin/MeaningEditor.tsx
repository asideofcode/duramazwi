'use client';

import { FormMeaning } from './EditFormHelpers';
import SvgIcon from '@/component/icons/svg-icon';
import DefinitionEditor from './DefinitionEditor';
import InlineAudioManager from './InlineAudioManager';

interface MeaningEditorProps {
  meanings: FormMeaning[];
  onChange: (meanings: FormMeaning[]) => void;
  word?: string;
  entryId?: string;
}

export default function MeaningEditor({ meanings, onChange, word, entryId }: MeaningEditorProps) {
  const addMeaning = () => {
    onChange([
      ...meanings,
      {
        partOfSpeech: '',
        definitions: [
          {
            definition: '',
            examples: [{ shona: '', english: '' }]
          }
        ]
      }
    ]);
  };

  const removeMeaning = (index: number) => {
    if (meanings.length > 1) {
      onChange(meanings.filter((_, i) => i !== index));
    }
  };

  const updatePartOfSpeech = (index: number, partOfSpeech: string) => {
    const newMeanings = [...meanings];
    newMeanings[index] = { ...newMeanings[index], partOfSpeech };
    onChange(newMeanings);
  };

  const updateDefinitions = (meaningIndex: number, definitions: FormMeaning['definitions']) => {
    const newMeanings = [...meanings];
    newMeanings[meaningIndex] = { ...newMeanings[meaningIndex], definitions };
    onChange(newMeanings);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Meanings & Definitions
        </h3>
        <button
          type="button"
          onClick={addMeaning}
          className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-md transition-colors font-medium w-full sm:w-auto"
        >
          <SvgIcon className="h-4 w-4" variant="default" icon="Plus" />
          <span>Add Meaning</span>
        </button>
      </div>

      <div className="space-y-6">
        {meanings.map((meaning, index) => (
          <div key={index} className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex items-start justify-between mb-4 gap-2">
              <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                Meaning {index + 1}
              </h4>
              {meanings.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMeaning(index)}
                  className="inline-flex items-center space-x-1 px-2 sm:px-3 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors text-sm font-medium flex-shrink-0"
                  title="Remove meaning"
                >
                  <span className="text-sm font-bold">×</span>
                  <span className="hidden sm:inline">Remove</span>
                </button>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Part of Speech
                  </label>
                  {entryId && (
                    <InlineAudioManager
                      entryId={entryId}
                      level="meaning"
                      levelId={`meaning-${index}`}
                      label="Pronunciation"
                      compact={true}
                    />
                  )}
                </div>
                <select
                  value={meaning.partOfSpeech}
                  onChange={(e) => updatePartOfSpeech(index, e.target.value)}
                  className="w-full max-w-xs px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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

              <DefinitionEditor
                definitions={meaning.definitions}
                onChange={(definitions) => updateDefinitions(index, definitions)}
                word={word}
                partOfSpeech={meaning.partOfSpeech}
                entryId={entryId}
                meaningIndex={index}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
