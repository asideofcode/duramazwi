import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { Trophy, Calendar } from 'lucide-react-native';
import { challengeService } from '@/services/challenge';
import { useState } from 'react';

export default function ChallengeTab() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const { data: dailyChallenge, isLoading, error } = useQuery({
    queryKey: ['dailyChallenge'],
    queryFn: () => challengeService.getDailyChallenge(),
    staleTime: 60 * 60 * 1000, // 1 hour
  });

  if (isLoading) {
    return (
      <View className="flex-1 bg-white dark:bg-gray-900 items-center justify-center">
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (error || !dailyChallenge) {
    return (
      <View className="flex-1 bg-white dark:bg-gray-900">
        <View className="px-4 pt-12 pb-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">
            Daily Challenge
          </Text>
        </View>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-red-600 dark:text-red-400 text-center mb-2">
            No challenge available today
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 text-center">
            Check back tomorrow for a new challenge!
          </Text>
        </View>
      </View>
    );
  }

  const currentChallenge = dailyChallenge.challenges[currentChallengeIndex];
  const totalChallenges = dailyChallenge.challenges.length;
  const isLastChallenge = currentChallengeIndex === totalChallenges - 1;

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentChallengeIndex]: answer });
  };

  const handleNext = () => {
    if (isLastChallenge) {
      setShowResults(true);
    } else {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    dailyChallenge.challenges.forEach((challenge, index) => {
      if (answers[index] === challenge.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: totalChallenges,
      percentage: Math.round((correct / totalChallenges) * 100),
    };
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <View className="flex-1 bg-white dark:bg-gray-900">
        <View className="px-4 pt-12 pb-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">
            Challenge Complete!
          </Text>
        </View>
        <View className="flex-1 items-center justify-center px-6">
          <Trophy size={64} color="#2563eb" />
          <Text className="text-4xl font-bold text-gray-900 dark:text-white mt-6 mb-2">
            {score.percentage}%
          </Text>
          <Text className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {score.correct} out of {score.total} correct
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCurrentChallengeIndex(0);
              setAnswers({});
              setShowResults(false);
            }}
            className="bg-primary-600 px-6 py-3 rounded-lg"
          >
            <Text className="text-white font-semibold text-base">Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      {/* Header */}
      <View className="px-4 pt-12 pb-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">
            Daily Challenge
          </Text>
          <View className="flex-row items-center">
            <Calendar size={16} color="#9ca3af" />
            <Text className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              {dailyChallenge.date}
            </Text>
          </View>
        </View>
        <Text className="text-sm text-gray-600 dark:text-gray-400">
          Question {currentChallengeIndex + 1} of {totalChallenges}
        </Text>
      </View>

      {/* Challenge Content */}
      <ScrollView className="flex-1 px-4 py-6">
        {/* Question */}
        <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {currentChallenge.question}
        </Text>

        {/* Multiple Choice Options */}
        {currentChallenge.type === 'multiple_choice' && currentChallenge.options && (
          <View className="space-y-3">
            {currentChallenge.options.map((option, index) => {
              const isSelected = answers[currentChallengeIndex] === option;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswer(option)}
                  className={`p-4 rounded-lg border-2 ${
                    isSelected
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                  }`}
                >
                  <Text
                    className={`text-base ${
                      isSelected
                        ? 'text-primary-700 dark:text-primary-300 font-semibold'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* Explanation (if answered) */}
        {answers[currentChallengeIndex] && currentChallenge.explanation && (
          <View className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Text className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
              Explanation:
            </Text>
            <Text className="text-sm text-blue-800 dark:text-blue-200">
              {currentChallenge.explanation}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Next Button */}
      {answers[currentChallengeIndex] && (
        <View className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <TouchableOpacity
            onPress={handleNext}
            className="bg-primary-600 py-4 rounded-lg items-center"
          >
            <Text className="text-white font-semibold text-base">
              {isLastChallenge ? 'Finish' : 'Next Question'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
