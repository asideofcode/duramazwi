import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ChallengeProgressProps {
  currentQuestion: number;  // Which question you're on (1-indexed)
  completed: number;        // How many you've completed
  total: number;
  score: number;
}

export default function ChallengeProgress({ currentQuestion, completed, total, score }: ChallengeProgressProps) {
  const progressPercentage = (completed / total) * 100;

  return (
    <View className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* Progress Info */}
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-base font-medium text-gray-600 dark:text-gray-400">
          Question {currentQuestion} of {total}
        </Text>
        <View className="flex-row items-center">
          <Ionicons name="star" size={16} color="#f59e0b" />
          <Text className="ml-1 text-base font-semibold text-gray-900 dark:text-white">
            {score} pts
          </Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <View 
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </View>

      {/* Progress Dots */}
      <View className="flex-row justify-between mt-3">
        {Array.from({ length: total }).map((_, index) => {
          const isCompleted = index < completed;
          const isCurrent = index === currentQuestion - 1;
          
          return (
            <View
              key={index}
              className={`w-8 h-8 rounded-full items-center justify-center ${
                isCompleted
                  ? 'bg-blue-600'
                  : isCurrent
                  ? 'bg-blue-200 dark:bg-blue-800 border-2 border-blue-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {isCompleted ? (
                <Ionicons name="checkmark" size={16} color="white" />
              ) : (
                <Text
                  className={`text-sm font-semibold ${
                    isCurrent
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {index + 1}
                </Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
