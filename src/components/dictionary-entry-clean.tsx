import React from 'react';

// New schema types
interface Example {
  shona: string;
  english: string;
}

interface Definition {
  definition: string;
  examples: Example[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface DictionaryEntry {
  _id?: string;
  word: string;
  meanings: Meaning[];
}

interface DictionaryEntryCleanProps {
  entry: DictionaryEntry;
  showExamples?: boolean;
  className?: string;
}

const getPartOfSpeechColor = (partOfSpeech: string): string => {
  const colors: { [key: string]: string } = {
    'noun': 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    'verb': 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700',
    'adjective': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
    'adverb': 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700',
    'conjunction': 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
    'preposition': 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700',
    'interjection': 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700',
    'pronoun': 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600',
  };
  return colors[partOfSpeech] || 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600';
};

// Helper function to format word display with verb prefix
const formatWordDisplay = (word: string, meanings: Meaning[]) => {
  // Check if any meaning is a verb
  const hasVerbMeaning = meanings.some(meaning => meaning.partOfSpeech.toLowerCase() === 'verb');
  
  if (hasVerbMeaning) {
    return {
      prefix: 'ku-',
      word: word,
      hasPrefix: true
    };
  }
  
  return {
    prefix: '',
    word: word,
    hasPrefix: false
  };
};

export default function DictionaryEntryClean({ 
  entry, 
  showExamples = true, 
  className = '' 
}: DictionaryEntryCleanProps) {
  if (!entry || !entry.meanings || entry.meanings.length === 0) {
    return null;
  }

  const wordDisplay = formatWordDisplay(entry.word, entry.meanings);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Word Header */}
      <div className="space-y-2">
        <div className="space-y-1">
          <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            Meaning of:
          </span>
          <h1 className="text-3xl font-bold leading-tight">
            {wordDisplay.hasPrefix ? (
              <>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {wordDisplay.prefix}
                </span>
                <span className="text-blue-600 dark:text-blue-400">
                  {wordDisplay.word}
                </span>
              </>
            ) : (
              <span className="text-blue-600 dark:text-blue-400">
                {wordDisplay.word}
              </span>
            )}
          </h1>
        </div>
      </div>

      {/* Meanings */}
      <div className="space-y-6">
        {entry.meanings.map((meaning, meaningIndex) => (
          <div key={meaningIndex} className="space-y-4">
            {/* Part of Speech Badge */}
            <div className="flex items-center">
              <span className={`
                inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border
                ${getPartOfSpeechColor(meaning.partOfSpeech)}
              `}>
                {meaning.partOfSpeech}
              </span>
            </div>

            {/* Definitions */}
            <div className="space-y-4">
              {meaning.definitions.map((definition, defIndex) => (
                <div key={defIndex} className="space-y-3">
                  {/* Definition Text */}
                  <div className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    {definition.definition}
                  </div>

                  {/* Examples */}
                  {showExamples && definition.examples && definition.examples.length > 0 && (
                    <div className="space-y-2 ml-4">
                      {definition.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="space-y-1">
                          {/* Shona Example */}
                          <div className="text-gray-700 dark:text-gray-300 italic font-medium">
                            "{example.shona}"
                          </div>
                          {/* English Translation */}
                          <div className="text-gray-600 dark:text-gray-400 italic">
                            "{example.english}"
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Compact version for lists
export function DictionaryEntryCompact({ 
  entry, 
  className = '' 
}: DictionaryEntryCleanProps) {
  if (!entry || !entry.meanings || entry.meanings.length === 0) {
    return null;
  }

  const firstMeaning = entry.meanings[0];
  const firstDefinition = firstMeaning.definitions[0];
  const wordDisplay = formatWordDisplay(entry.word, entry.meanings);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Word and Part of Speech */}
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-bold">
          {wordDisplay.hasPrefix ? (
            <>
              <span className="text-green-600 dark:text-green-400 font-medium">
                {wordDisplay.prefix}
              </span>
              <span className="text-blue-600 dark:text-blue-400">
                {wordDisplay.word}
              </span>
            </>
          ) : (
            <span className="text-blue-600 dark:text-blue-400">
              {wordDisplay.word}
            </span>
          )}
        </h3>
        <span className={`
          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border
          ${getPartOfSpeechColor(firstMeaning.partOfSpeech)}
        `}>
          {firstMeaning.partOfSpeech}
        </span>
      </div>

      {/* First Definition */}
      <div className="text-gray-700 dark:text-gray-300">
        {firstDefinition.definition}
      </div>

      {/* First Example (if available) */}
      {firstDefinition.examples && firstDefinition.examples.length > 0 && (
        <div className="text-sm text-gray-600 dark:text-gray-400 italic">
          "{firstDefinition.examples[0].shona}"
        </div>
      )}

      {/* Additional meanings indicator */}
      {entry.meanings.length > 1 && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          +{entry.meanings.length - 1} more meaning{entry.meanings.length > 2 ? 's' : ''}
        </div>
      )}
    </div>
  );
}

// Export types for use in other components
export type { DictionaryEntry, Meaning, Definition, Example };
