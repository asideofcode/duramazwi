'use client';

import { FormDefinition } from './EditFormHelpers';
import SvgIcon from '@/component/icons/svg-icon';
import ExampleEditor from './ExampleEditor';
import InlineAudioManager from './InlineAudioManager';

interface DefinitionEditorProps {
  definitions: FormDefinition[];
  onChange: (definitions: FormDefinition[]) => void;
  word?: string;
  partOfSpeech?: string;
  entryId?: string;
  meaningIndex?: number;
}

export default function DefinitionEditor({ definitions, onChange, word, partOfSpeech, entryId, meaningIndex }: DefinitionEditorProps) {
  // Only work with the first definition since we only allow one per meaning
  const definition = definitions[0] || { definition: '', examples: [{ shona: '', english: '' }] };

  const updateDefinition = (field: 'definition', value: string) => {
    const updatedDefinition = { ...definition, [field]: value };
    onChange([updatedDefinition]);
  };

  const updateExamples = (examples: FormDefinition['examples']) => {
    const updatedDefinition = { ...definition, examples };
    onChange([updatedDefinition]);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Definition *
        </label>
        <textarea
          required
          rows={3}
          value={definition.definition}
          onChange={(e) => updateDefinition('definition', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
          placeholder="Enter the English definition"
        />
      </div>

      <ExampleEditor
        examples={definition.examples}
        onChange={updateExamples}
        word={word}
        definition={definition.definition}
        partOfSpeech={partOfSpeech}
        entryId={entryId}
        meaningIndex={meaningIndex}
        definitionIndex={0}
      />
    </div>
  );
}
