import React from 'react';
import Link from 'next/link';
import StaticAudioPlayer from './StaticAudioPlayer';
import { AudioRecord } from '@/services/audioAPIClient';

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
  audioRecords?: AudioRecord[]; // Pre-resolved audio records
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

// Helper function to format word display - now just returns the base word for detail view
const formatWordDisplay = (word: string, meanings: Meaning[]) => {
  // For detail view, always show just the base word at the top
  return {
    prefix: '',
    word: word,
    hasPrefix: false
  };
};

// Helper function to format word display for lists (with both forms)
const formatWordDisplayForList = (word: string, meanings: Meaning[]) => {
  const hasVerbMeaning = meanings.some(meaning => meaning.partOfSpeech.toLowerCase() === 'verb');
  const hasNonVerbMeaning = meanings.some(meaning => meaning.partOfSpeech.toLowerCase() !== 'verb');
  
  // If it has both verb and non-verb meanings, show both forms
  if (hasVerbMeaning && hasNonVerbMeaning) {
    return `${word}/ku-${word}`;
  }
  
  // If it's only a verb, show ku- form
  if (hasVerbMeaning && !hasNonVerbMeaning) {
    return `ku-${word}`;
  }
  
  // Otherwise just the base word
  return word;
};

// Helper function to format word for specific meaning
const formatWordForMeaning = (word: string, partOfSpeech: string) => {
  if (partOfSpeech.toLowerCase() === 'verb') {
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
  audioRecords = [],
  showExamples = true, 
  className = '' 
}: DictionaryEntryCleanProps) {
  if (!entry || !entry.meanings || entry.meanings.length === 0) {
    return null;
  }

  const wordDisplay = formatWordDisplay(entry.word, entry.meanings);

  // Helper function to filter audio records by level and levelId
  const getAudioForLevel = (level: 'word' | 'meaning' | 'example', levelId?: string) => {
    return audioRecords.filter(record => {
      if (record.metadata.level !== level) return false;
      if (levelId && record.metadata.levelId !== levelId) return false;
      return true;
    });
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Word Header */}
      <div className="space-y-2">
        <div className="space-y-1">
          <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            Meaning of:
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
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
            
            {/* Audio and Edit Controls - Stack on mobile, inline on desktop */}
            <div className="flex items-center gap-3">
              <StaticAudioPlayer
                recordings={getAudioForLevel('word')}
                className="flex-shrink-0"
              />
              {/* Development Edit Button */}
              {process.env.NODE_ENV === 'development' && (
                <Link
                  href={`/admin/entries/${encodeURIComponent(entry.word)}/edit`}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900 dark:hover:bg-yellow-800 text-yellow-700 dark:text-yellow-300 rounded-md transition-colors text-sm font-medium"
                  title="Edit this entry (Development only)"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Edit</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Meanings */}
      <div className="space-y-6">
        {entry.meanings.map((meaning, meaningIndex) => (
          <div key={meaningIndex} className="space-y-4">
            {/* Part of Speech Badge with Word Form */}
            <div className="flex items-center space-x-3">
              <span className={`
                inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border
                ${getPartOfSpeechColor(meaning.partOfSpeech)}
              `}>
                {meaning.partOfSpeech}
              </span>
              
              {/* Word form for this specific meaning */}
              {(() => {
                const wordForm = formatWordForMeaning(entry.word, meaning.partOfSpeech);
                return (
                  <div className="flex items-center space-x-2">
                    <div className="text-lg font-semibold">
                      {wordForm.hasPrefix ? (
                        <>
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            {wordForm.prefix}
                          </span>
                          <span className="text-blue-600 dark:text-blue-400">
                            {wordForm.word}
                          </span>
                        </>
                      ) : (
                        <span className="text-blue-600 dark:text-blue-400">
                          {wordForm.word}
                        </span>
                      )}
                    </div>
                    <StaticAudioPlayer
                      recordings={getAudioForLevel('meaning', `meaning-${meaningIndex}`)}
                      className="ml-2"
                    />
                  </div>
                );
              })()}
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
                          {/* Shona Example with Audio - Stack on mobile, inline on desktop */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <div className="text-gray-700 dark:text-gray-300 italic font-medium">
                              "{example.shona}"
                            </div>
                            <StaticAudioPlayer
                              recordings={getAudioForLevel('example', `example-${meaningIndex}-${defIndex}-${exampleIndex}`)}
                            />
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

// Compact version for lists - now splits by part of speech
export function DictionaryEntryCompact({ 
  entry, 
  className = '' 
}: DictionaryEntryCleanProps) {
  if (!entry || !entry.meanings || entry.meanings.length === 0) {
    return null;
  }

  // Group meanings by part of speech
  const meaningsByPartOfSpeech = entry.meanings.reduce((acc, meaning) => {
    const pos = meaning.partOfSpeech.toLowerCase();
    if (!acc[pos]) {
      acc[pos] = [];
    }
    acc[pos].push(meaning);
    return acc;
  }, {} as Record<string, typeof entry.meanings>);

  const partOfSpeechEntries = Object.entries(meaningsByPartOfSpeech);

  return (
    <div className={`space-y-0 ${className}`}>
      {partOfSpeechEntries.map(([partOfSpeech, meanings], index) => {
        const firstMeaning = meanings[0];
        const firstDefinition = firstMeaning.definitions[0];
        const wordForm = formatWordForMeaning(entry.word, partOfSpeech);
        const isLast = index === partOfSpeechEntries.length - 1;
        
        return (
          <div 
            key={partOfSpeech}
            className={`space-y-2 ${index > 0 ? 'pt-3 border-t border-gray-100 dark:border-gray-700 border-dashed' : ''} ${!isLast ? 'pb-3' : ''}`}
          >
            {/* Word and Part of Speech */}
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold">
                {wordForm.hasPrefix ? (
                  <>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {wordForm.prefix}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      {wordForm.word}
                    </span>
                  </>
                ) : (
                  <span className="text-blue-600 dark:text-blue-400">
                    {wordForm.word}
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

            {/* Show all definitions for this part of speech */}
            {meanings.slice(1).map((meaning, additionalIndex) => (
              <div key={`additional-${additionalIndex}`} className="text-gray-700 dark:text-gray-300 mt-2">
                {meaning.definitions[0]?.definition}
                {meaning.definitions[0]?.examples && meaning.definitions[0].examples.length > 0 && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                    "{meaning.definitions[0].examples[0].shona}"
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// Export types and functions for use in other components
export type { DictionaryEntry, Meaning, Definition, Example };
export { formatWordDisplayForList };
