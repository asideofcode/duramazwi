import { View, Text, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect, Stack } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect, useCallback } from 'react';
import { challengeService } from '@/services/challenge';
import { getTodayDate, getCompletionStats } from '@/utils/challengeStorage';
import ChallengeHero from '@/components/challenge/ChallengeHero';
import ChallengeCompletion from '@/components/challenge/ChallengeCompletion';

export default function ChallengeHub() {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const [completionStats, setCompletionStats] = useState<any>(null);
  const [isFirstCompletionView, setIsFirstCompletionView] = useState(false);
  const [isCheckingCompletion, setIsCheckingCompletion] = useState(true);

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
  const checkCompletion = useCallback(async () => {
    if (!dailyChallenge) return;
    
    setIsCheckingCompletion(true);
    const stats = await getCompletionStats(dailyChallenge.date);
    const wasCompleted = isCompleted;
    
    if (stats) {
      setIsCompleted(true);
      setCompletionStats(stats);
      // If we just completed (wasn't completed before), mark as first view
      if (!wasCompleted) {
        setIsFirstCompletionView(true);
      }
    } else {
      setIsCompleted(false);
      setCompletionStats(null);
      setIsFirstCompletionView(false);
    }
    
    setIsCheckingCompletion(false);
  }, [dailyChallenge, isCompleted]);

  useEffect(() => {
    checkCompletion();
  }, [checkCompletion]);

  // Re-check completion when screen comes into focus (e.g., after navigating back)
  useFocusEffect(
    useCallback(() => {
      checkCompletion();
    }, [checkCompletion])
  );

  const handleStartChallenge = () => {
    router.push('/challenge/session');
  };

  const handleClose = () => {
    router.back();
  };

  // Loading state (either fetching challenge or checking completion)
  if (isLoading || isCheckingCompletion) {
    return (
      <>
        <Stack.Screen 
          options={{
            title: 'Daily Challenge',
            headerBackTitle: 'Back',
          }} 
        />
        <View className="flex-1 bg-white dark:bg-gray-900 items-center justify-center">
          <ActivityIndicator size="large" color="#9333ea" />
        </View>
      </>
    );
  }

  // Error state or no challenge available
  if (error || !dailyChallenge) {
    return (
      <>
        <Stack.Screen 
          options={{
            title: 'Daily Challenge',
            headerBackTitle: 'Back',
          }} 
        />
        <View className="flex-1 bg-white dark:bg-gray-900">
          <View className="flex-1 items-center justify-center px-6">
            <Ionicons name="time-outline" size={80} color="#a855f7" />
            <Text className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 text-center">
              No Challenge Yet
            </Text>
            <Text className="text-lg text-gray-600 dark:text-gray-400 text-center leading-7 mb-6">
              Today's challenge isn't ready yet.
            </Text>
            <View className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-200 dark:border-purple-800">
              <View className="flex-row items-center justify-center mb-2">
                <Ionicons name="calendar" size={20} color="#a855f7" style={{ marginRight: 8 }} />
                <Text className="text-purple-900 dark:text-purple-300 font-semibold">
                  Check Back Later
                </Text>
              </View>
              <Text className="text-purple-800 dark:text-purple-400 text-center text-base">
                New challenges are released daily!
              </Text>
            </View>
          </View>
        </View>
      </>
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
      <>
        <Stack.Screen 
          options={{
            title: 'Daily Challenge',
            headerBackTitle: 'Back',
          }} 
        />
        <View className="flex-1 bg-white dark:bg-gray-900">
          <ChallengeCompletion session={mockSession} isFirstView={isFirstCompletionView} />
        </View>
      </>
    );
  }

  // Not started - Show hero/start screen
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Daily Challenge',
          headerBackTitle: 'Back',
        }} 
      />
      <View className="flex-1 bg-white dark:bg-gray-900">
        <ChallengeHero challenge={dailyChallenge} onStart={handleStartChallenge} />
      </View>
    </>
  );
}
