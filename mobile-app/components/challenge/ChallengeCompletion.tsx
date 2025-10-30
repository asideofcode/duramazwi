import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChallengeSession } from '@/types/challenge';
import { clearChallengeStorage } from '@/utils/challengeStorage';

interface ChallengeCompletionProps {
  session: ChallengeSession;
  onRestart?: () => void;
}

export default function ChallengeCompletion({ session, onRestart }: ChallengeCompletionProps) {
  const correctCount = session.results.filter(r => r.isCorrect).length;
  const totalCount = session.results.length;
  const accuracy = Math.round((correctCount / totalCount) * 100);
  const timeSpent = session.endTime 
    ? Math.round((session.endTime - session.startTime) / 1000) 
    : 0;

  const handleClearStorage = () => {
    Alert.alert(
      'Clear Challenge Data?',
      'This will reset all challenge completion data. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            await clearChallengeStorage();
            Alert.alert('Success', 'Challenge data cleared!');
          }
        }
      ]
    );
  };

  // Determine performance level
  const getPerformanceMessage = () => {
    if (accuracy === 100) return { message: 'Perfect!', emoji: '🎉', color: 'text-green-600 dark:text-green-400' };
    if (accuracy >= 80) return { message: 'Excellent!', emoji: '⭐', color: 'text-blue-600 dark:text-blue-400' };
    if (accuracy >= 60) return { message: 'Good Job!', emoji: '👍', color: 'text-purple-600 dark:text-purple-400' };
    return { message: 'Keep Practicing!', emoji: '💪', color: 'text-orange-600 dark:text-orange-400' };
  };

  const performance = getPerformanceMessage();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="px-6 py-12">
        {/* Trophy Icon */}
        <View className="items-center mb-8">
          <View className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full items-center justify-center shadow-lg mb-4">
            <Ionicons name="trophy" size={72} color="white" />
          </View>
          <Text className="text-4xl mb-2">{performance.emoji}</Text>
          <Text className={`text-3xl font-bold ${performance.color}`}>
            {performance.message}
          </Text>
        </View>

        {/* Score Display */}
        <View className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-6">
          <Text className="text-center text-6xl font-bold text-gray-900 dark:text-white mb-2">
            {accuracy}%
          </Text>
          <Text className="text-center text-lg text-gray-600 dark:text-gray-400">
            {correctCount} out of {totalCount} correct
          </Text>
        </View>

        {/* Stats Grid */}
        <View className="flex-row gap-3 mb-8">
          {/* Score */}
          <View className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 items-center">
            <Ionicons name="star" size={32} color="#3b82f6" />
            <Text className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
              {session.totalScore}
            </Text>
            <Text className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Points
            </Text>
          </View>

          {/* Time */}
          <View className="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 items-center">
            <Ionicons name="time" size={32} color="#a855f7" />
            <Text className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">
              {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
            </Text>
            <Text className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Time
            </Text>
          </View>

          {/* Accuracy */}
          <View className="flex-1 bg-green-50 dark:bg-green-900/20 rounded-xl p-5 items-center">
            <Ionicons name="checkmark-circle" size={32} color="#10b981" />
            <Text className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">
              {accuracy}%
            </Text>
            <Text className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Accuracy
            </Text>
          </View>
        </View>

        {/* Challenge Breakdown */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Challenge Breakdown
          </Text>
          {session.results.map((result, index) => (
            <View
              key={index}
              className={`flex-row items-center p-4 rounded-xl mb-3 ${
                result.isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : 'bg-red-50 dark:bg-red-900/20'
              }`}
            >
              <View className="mr-4">
                <Ionicons
                  name={result.isCorrect ? 'checkmark-circle' : 'close-circle'}
                  size={28}
                  color={result.isCorrect ? '#10b981' : '#ef4444'}
                />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900 dark:text-white">
                  Question {index + 1}
                </Text>
                <Text className="text-sm text-gray-600 dark:text-gray-400">
                  {session.challenges[index].type.replace('_', ' ')}
                </Text>
              </View>
              <Text className={`text-lg font-bold ${
                result.isCorrect
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}>
                +{result.pointsEarned}
              </Text>
            </View>
          ))}
        </View>

        {/* Motivational Message */}
        <View className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 mb-6">
          <View className="flex-row items-start">
            <Ionicons name="bulb" size={24} color="#3b82f6" style={{ marginRight: 12, marginTop: 2 }} />
            <View className="flex-1">
              <Text className="text-blue-900 dark:text-blue-300 text-base leading-6">
                {accuracy === 100
                  ? "Outstanding! You've mastered today's challenge. Come back tomorrow for more!"
                  : accuracy >= 80
                  ? "Great work! You're making excellent progress. Keep it up!"
                  : "Every challenge is a learning opportunity. Review the explanations and try again tomorrow!"}
              </Text>
            </View>
          </View>
        </View>

        {/* Dev Tools - Only in development */}
        {__DEV__ && (
          <View className="mt-4">
            <Text className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">
              Development Tools
            </Text>
            <TouchableOpacity
              onPress={handleClearStorage}
              className="bg-red-600 py-4 rounded-xl items-center"
              activeOpacity={0.7}
            >
              <Text className="text-white font-semibold text-base">
                🗑️ Clear Challenge Storage
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
