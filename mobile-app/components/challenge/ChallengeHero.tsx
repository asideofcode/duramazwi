import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DailyChallenge } from '@/types/challenge';

interface ChallengeHeroProps {
  challenge: DailyChallenge;
  onStart: () => void;
}

export default function ChallengeHero({ challenge, onStart }: ChallengeHeroProps) {
  const totalQuestions = challenge.challenges.length;
  const totalPoints = challenge.totalPoints || challenge.challenges.reduce((sum, c) => sum + c.points, 0);
  const estimatedTime = challenge.estimatedTime || Math.ceil(totalQuestions * 0.5);

  return (
    <View className="px-6 py-8">
      {/* Hero Image */}
      <View className="items-center mb-8">
        <Image 
          source={require('@/assets/images/challenge-hero.png')}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Ready for Today's Challenge?
      </Text>

      {/* Date */}
      <Text className="text-center text-base text-gray-600 dark:text-gray-400 mb-8">
        {new Date(challenge.date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Text>

      {/* Stats Cards */}
      <View className="flex-row gap-3 mb-8">
        {/* Questions */}
        <View className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 items-center">
          <Text className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
            {totalQuestions}
          </Text>
          <Text className="text-base text-gray-600 dark:text-gray-400 text-center">
            Questions
          </Text>
        </View>

        {/* Points */}
        <View className="flex-1 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 items-center">
          <Text className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
            {totalPoints}
          </Text>
          <Text className="text-base text-gray-600 dark:text-gray-400 text-center">
            Points
          </Text>
        </View>

        {/* Time */}
        <View className="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 items-center">
          <Text className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
            {estimatedTime}
          </Text>
          <Text className="text-base text-gray-600 dark:text-gray-400 text-center">
            Minutes
          </Text>
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity
        onPress={onStart}
        className="bg-blue-600 py-5 rounded-xl items-center shadow-lg active:scale-95"
        style={{ minHeight: 60 }}
      >
        <Text className="text-white font-bold text-lg">
          Start Challenge
        </Text>
      </TouchableOpacity>

      {/* Tips */}
      <View className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
        <View className="flex-row items-start">
          <Ionicons name="bulb" size={20} color="#3b82f6" style={{ marginRight: 8, marginTop: 2 }} />
          <View className="flex-1">
            <Text className="text-blue-900 dark:text-blue-300 text-base">
              <Text className="font-semibold">Tip: </Text>
              Take your time and think carefully about each answer. You can only complete this challenge once per day!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
