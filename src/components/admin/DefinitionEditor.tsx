'use client';

import { FormDefinition } from './EditFormHelpers';
import SvgIcon from '@/component/icons/svg-icon';
import ExampleEditor from './ExampleEditor';

interface DefinitionEditorProps {
  definitions: FormDefinition[];
  onChange: (definitions: FormDefinition[]) => void;
  word?: string;
  partOfSpeech?: string;
}

export default function DefinitionEditor({ definitions, onChange, word, partOfSpeech }: DefinitionEditorProps) {
  const addDefinition = () => {
    onChange([
      ...definitions,
      {
        definition: '',
        examples: [{ shona: '', english: '' }]
      }
    ]);
  };

  const removeDefinition = (index: number) => {
    if (definitions.length > 1) {
      onChange(definitions.filter((_, i) => i !== index));
    }
  };

  const updateDefinition = (index: number, field: 'definition', value: string) => {
    const newDefinitions = [...definitions];
    newDefinitions[index] = { ...newDefinitions[index], [field]: value };
    onChange(newDefinitions);
  };

  const updateExamples = (definitionIndex: number, examples: FormDefinition['examples']) => {
    const newDefinitions = [...definitions];
    newDefinitions[definitionIndex] = { ...newDefinitions[definitionIndex], examples };
    onChange(newDefinitions);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">
          Definitions
        </h4>
        <button
          type="button"
          onClick={addDefinition}
          className="inline-flex items-center space-x-1 px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
        >
          <SvgIcon className="h-4 w-4" variant="default" icon="Plus" />
          <span>Add Definition</span>
        </button>
      </div>

      <div className="space-y-4">
        {definitions.map((definition, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800">
            <div className="flex items-start justify-between mb-3">
              <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Definition {index + 1}
              </h5>
              {definitions.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeDefinition(index)}
                  className="px-2 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors text-sm"
                  title="Remove definition"
                >
                  <span className="text-sm font-bold">×</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Definition *
                </label>
                <textarea
                  required
                  rows={3}
                  value={definition.definition}
                  onChange={(e) => updateDefinition(index, 'definition', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  placeholder="Enter the English definition"
                />
              </div>

              <ExampleEditor
                examples={definition.examples}
                onChange={(examples) => updateExamples(index, examples)}
                word={word}
                definition={definition.definition}
                partOfSpeech={partOfSpeech}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
