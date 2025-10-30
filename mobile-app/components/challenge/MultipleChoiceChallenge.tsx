import { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Challenge } from '@/types/challenge';

interface MultipleChoiceChallengeProps {
  challenge: Challenge;
  selectedAnswer: string | null;
  onAnswerChange: (answer: string | null) => void;
  hasChecked: boolean;
  isCorrect: boolean | null;
}

export default function MultipleChoiceChallenge({ 
  challenge, 
  selectedAnswer,
  onAnswerChange,
  hasChecked,
  isCorrect
}: MultipleChoiceChallengeProps) {
  const handleSelectAnswer = (answer: string) => {
    if (hasChecked) return; // Prevent changing after checking
    onAnswerChange(answer);
  };

  // Handlers removed - now managed by session

  return (
    <View className="flex-1">
      {/* Scrollable Content */}
      <ScrollView 
        className="flex-1 px-6 py-8"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Question */}
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-8 leading-8">
          {challenge.question}
        </Text>

        {/* Options */}
        <View className="mb-8">
        {challenge.options?.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const showCorrect = hasChecked && option === challenge.correctAnswer;
          const showIncorrect = hasChecked && isSelected && !isCorrect;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectAnswer(option)}
              disabled={hasChecked}
              className={`p-6 rounded-xl border-2 mb-4 ${
                showCorrect
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : showIncorrect
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : isSelected
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              }`}
              style={{ minHeight: 60 }}
            >
              <View className="flex-row items-center justify-between">
                <Text
                  className={`flex-1 text-lg leading-6 ${
                    showCorrect
                      ? 'text-green-700 dark:text-green-300 font-semibold'
                      : showIncorrect
                      ? 'text-red-700 dark:text-red-300 font-semibold'
                      : isSelected
                      ? 'text-blue-700 dark:text-blue-300 font-semibold'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {option}
                </Text>
                
                {/* Reserve space for icon to prevent layout shift */}
                <View style={{ width: 24, height: 24, marginLeft: 12 }}>
                  {showCorrect && (
                    <Ionicons name="checkmark-circle" size={24} color="#10b981" />
                  )}
                  {showIncorrect && (
                    <Ionicons name="close-circle" size={24} color="#ef4444" />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      </ScrollView>
      {/* Bottom bar now managed by session */}
    </View>
  );
}
