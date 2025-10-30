import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { challengeService } from '@/services/challenge';
import { getTodayDate, getCompletionStats } from '@/utils/challengeStorage';
import ChallengeHero from '@/components/challenge/ChallengeHero';
import ChallengeCompletion from '@/components/challenge/ChallengeCompletion';

export default function ChallengeHub() {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const [completionStats, setCompletionStats] = useState<any>(null);

  const { data: dailyChallenge, isLoading, error } = useQuery({
    queryKey: ['dailyChallenge', getTodayDate()],
    queryFn: async () => {
      const result = await challengeService.getDailyChallenge();
      return result;
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    retry: 2,
  });

  // Check if challenge is already completed
  useEffect(() => {
    async function checkCompletion() {
      if (!dailyChallenge) return;
      
      const stats = await getCompletionStats(dailyChallenge.date);
      if (stats) {
        setIsCompleted(true);
        setCompletionStats(stats);
      }
    }
    
    checkCompletion();
  }, [dailyChallenge]);

  const handleStartChallenge = () => {
    router.push('/challenge/session');
  };

  const handleClose = () => {
    router.back();
  };

  // Loading state
  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
        {/* X Button */}
        <View className="px-6 pt-4 pb-2">
          <TouchableOpacity onPress={handleClose} className="w-10 h-10 items-center justify-center">
            <Ionicons name="close" size={32} color="#000" />
          </TouchableOpacity>
        </View>
        
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#2563eb" />
          <Text className="text-gray-600 dark:text-gray-400 mt-4">Loading challenge...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Error state
  if (error || !dailyChallenge) {
    return (
      <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
        {/* X Button */}
        <View className="px-6 pt-4 pb-2">
          <TouchableOpacity onPress={handleClose} className="w-10 h-10 items-center justify-center">
            <Ionicons name="close" size={32} color="#000" />
          </TouchableOpacity>
        </View>
        
        <View className="flex-1 items-center justify-center px-6">
          <Ionicons name="construct-outline" size={64} color="#9ca3af" />
          <Text className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3 text-center">
            We're Working On It
          </Text>
          <Text className="text-base text-gray-600 dark:text-gray-400 text-center leading-6">
            Today's challenge isn't ready yet. Check back soon!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Completed state - Show completion screen
  if (isCompleted && completionStats) {
    // Reconstruct session for completion screen
    const mockSession = {
      date: dailyChallenge.date,
      challenges: dailyChallenge.challenges,
      results: dailyChallenge.challenges.map((c: any) => ({
        challengeId: c.id,
        userAnswer: '',
        isCorrect: completionStats.correctChallengeIds?.includes(c.id) || false,
        pointsEarned: completionStats.correctChallengeIds?.includes(c.id) ? c.points : 0,
        timeSpent: Math.floor(completionStats.timeSpent / completionStats.totalChallenges)
      })),
      currentChallengeIndex: 0,
      totalScore: completionStats.totalScore,
      isComplete: true,
      startTime: completionStats.completedAt - (completionStats.timeSpent * 1000),
      endTime: completionStats.completedAt
    };

    return (
      <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
        {/* X Button */}
        <View className="px-6 pt-4 pb-2">
          <TouchableOpacity onPress={handleClose} className="w-10 h-10 items-center justify-center">
            <Ionicons name="close" size={32} color="#000" />
          </TouchableOpacity>
        </View>
        
        <View className="flex-1">
          <ChallengeCompletion session={mockSession} />
        </View>
      </SafeAreaView>
    );
  }

  // Not started - Show hero/start screen
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      {/* X Button */}
      <View className="px-6 pt-4 pb-2">
        <TouchableOpacity onPress={handleClose} className="w-10 h-10 items-center justify-center">
          <Ionicons name="close" size={32} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View className="flex-1">
        <ChallengeHero challenge={dailyChallenge} onStart={handleStartChallenge} />
      </View>
    </SafeAreaView>
  );
}
