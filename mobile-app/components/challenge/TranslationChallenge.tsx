import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Challenge } from '@/types/challenge';

interface TranslationChallengeProps {
  challenge: Challenge;
  selectedAnswer: string[] | null;
  onAnswerChange: (answer: string[] | null) => void;
  hasChecked: boolean;
  isCorrect: boolean | null;
}

export default function TranslationChallenge({ 
  challenge, 
  selectedAnswer,
  onAnswerChange,
  hasChecked,
  isCorrect
}: TranslationChallengeProps) {
  const [usedIndices, setUsedIndices] = useState<number[]>([]);
  
  const selectedWords = selectedAnswer || [];

  // Combine correct answer and distractors for the word bank
  const wordBank = challenge.wordBank || [];

  const handleAddWord = (word: string, index: number) => {
    if (hasChecked) return;
    onAnswerChange([...selectedWords, word]);
    setUsedIndices([...usedIndices, index]);
  };

  const handleRemoveWord = (selectedIndex: number) => {
    if (hasChecked) return;
    const newWords = [...selectedWords];
    const newUsedIndices = [...usedIndices];
    newWords.splice(selectedIndex, 1);
    newUsedIndices.splice(selectedIndex, 1);
    onAnswerChange(newWords);
    setUsedIndices(newUsedIndices);
  };

  const handleClear = () => {
    if (hasChecked) return;
    onAnswerChange([]);
    setUsedIndices([]);
  };

  return (
    <View className="flex-1">
      <ScrollView className="px-6 py-8" contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Question */}
      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-8">
        {challenge.question}
      </Text>

      <Text className="text-base text-gray-600 dark:text-gray-400 mb-4">
        Tap words in order to build the sentence:
      </Text>

      {/* Selected Words Area */}
      <View className={`min-h-[120px] p-5 rounded-xl mb-6 ${
        hasChecked
          ? isCorrect
            ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
            : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
          : 'bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
      }`}>
        <View className="flex-row flex-wrap gap-2">
          {selectedWords.length === 0 ? (
            <Text className="text-base text-gray-400 dark:text-gray-500 italic">
              Tap words below to build your answer...
            </Text>
          ) : (
            selectedWords.map((word, index) => (
              <TouchableOpacity
                key={`selected-${index}`}
                onPress={() => handleRemoveWord(index)}
                disabled={hasChecked}
                className={`px-5 py-3 rounded-xl ${
                  hasChecked
                    ? isCorrect
                      ? 'bg-green-600'
                      : 'bg-red-600'
                    : 'bg-blue-600'
                }`}
                style={{ minHeight: 44 }}
              >
                <Text className="text-white font-semibold text-lg">
                  {word}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>

        {/* Clear button */}
        {selectedWords.length > 0 && !hasChecked && (
          <TouchableOpacity
            onPress={handleClear}
            className="mt-4 self-start px-3 py-2"
          >
            <Text className="text-blue-600 dark:text-blue-400 text-base font-semibold">
              ✕ Clear all
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Word Bank */}
      <Text className="text-base font-bold text-gray-700 dark:text-gray-300 mb-4">
        Word Bank:
      </Text>
      <View className="flex-row flex-wrap gap-3 mb-6">
        {wordBank.map((word, index) => {
          const isUsed = usedIndices.includes(index);
          
          return (
            <TouchableOpacity
              key={`bank-${index}`}
              onPress={() => handleAddWord(word, index)}
              disabled={isUsed || hasChecked}
              className={`px-5 py-3 rounded-xl border-2 ${
                isUsed || hasChecked
                  ? 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 opacity-40'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
              }`}
              style={{ minHeight: 44 }}
            >
              <Text className={`text-lg font-semibold ${
                isUsed || hasChecked
                  ? 'text-gray-400 dark:text-gray-500'
                  : 'text-gray-900 dark:text-white'
              }`}>
                {word}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      </ScrollView>
    </View>
  );
}
