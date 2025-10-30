import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';
import { challengeService } from '@/services/challenge';
import { useState, useEffect } from 'react';
import { ChallengeSession, ChallengeResult } from '@/types/challenge';
import { getTodayDate, saveChallengeCompletion } from '@/utils/challengeStorage';
import ChallengeProgress from '@/components/challenge/ChallengeProgress';
import MultipleChoiceChallenge from '@/components/challenge/MultipleChoiceChallenge';
import AudioChallenge from '@/components/challenge/AudioChallenge';
import TranslationChallenge from '@/components/challenge/TranslationChallenge';
import ChallengeBottomBar from '@/components/challenge/ChallengeBottomBar';
import { useSoundEffects } from '@/hooks/useSoundEffects';

export default function ChallengeSessionScreen() {
  const router = useRouter();
  const [session, setSession] = useState<ChallengeSession | null>(null);
  const [hasCheckedCurrent, setHasCheckedCurrent] = useState(false);
  
  // Current challenge answer state (managed at session level)
  const [currentAnswer, setCurrentAnswer] = useState<string | string[] | null>(null);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState<boolean | null>(null);
  
  // Sound effects
  const { playCorrect, playIncorrect, isReady: soundsReady, isMuted, setIsMuted } = useSoundEffects();

  const { data: dailyChallenge, isLoading, error } = useQuery({
    queryKey: ['dailyChallenge', getTodayDate()],
    queryFn: async () => {
      console.log('Fetching daily challenge...');
      const result = await challengeService.getDailyChallenge();
      console.log('Challenge result:', result);
      return result;
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    retry: 2,
  });

  // Auto-start session when challenge loads
  useEffect(() => {
    if (dailyChallenge && !session) {
      setSession({
        date: dailyChallenge.date,
        challenges: dailyChallenge.challenges,
        results: [],
        currentChallengeIndex: 0,
        totalScore: 0,
        isComplete: false,
        startTime: Date.now(),
      });
    }
  }, [dailyChallenge, session]);

  // Handle X button press with confirmation
  const handleClose = () => {
    if (session && !session.isComplete) {
      // Show confirmation if challenge is in progress
      Alert.alert(
        'Exit Challenge?',
        'Your progress will be lost. Are you sure you want to exit?',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Exit', 
            style: 'destructive',
            onPress: () => {
              try {
                router.back();
              } catch (error) {
                console.error('Navigation error:', error);
                router.replace('/challenge');
              }
            }
          }
        ]
      );
    } else {
      // No confirmation needed if not started or already complete
      try {
        router.back();
      } catch (error) {
        console.error('Navigation error:', error);
        router.replace('/challenge');
      }
    }
  };

  // Save completion and navigate back to hub when finished
  useEffect(() => {
    async function saveCompletionAndNavigate() {
      if (!session || !session.isComplete || !session.endTime) return;
      
      const correctChallengeIds = session.results
        .filter(r => r.isCorrect)
        .map(r => r.challengeId);
      
      const timeSpent = Math.floor((session.endTime - session.startTime) / 1000);
      
      await saveChallengeCompletion({
        date: session.date,
        completedAt: session.endTime,
        totalScore: session.totalScore,
        correctAnswers: session.results.filter(r => r.isCorrect).length,
        totalChallenges: session.challenges.length,
        accuracy: Math.round((session.results.filter(r => r.isCorrect).length / session.challenges.length) * 100),
        timeSpent,
        challengeIds: session.challenges.map(c => c.id),
        correctChallengeIds,
      });
      
      console.log('Challenge completion saved! Navigating back to hub...');
      
      // Navigate back to hub to show completion screen
      try {
        router.back();
      } catch (error) {
        console.error('Navigation error:', error);
        router.replace('/challenge');
      }
    }

    saveCompletionAndNavigate();
  }, [session?.isComplete, session?.endTime]);

  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
        {/* X Button */}
        <View className="px-6 pt-4 pb-2">
          <TouchableOpacity onPress={handleClose} className="w-10 h-10 items-center justify-center">
            <Ionicons name="close" size={32} color="#6b7280" />
          </TouchableOpacity>
        </View>
        
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-red-600 dark:text-red-400 text-center text-lg">
            Failed to load challenge. Please try again.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!session) {
    return null;
  }

  // Note: Completion screen is shown in the hub, not here
  // When session completes, we navigate back to hub which displays ChallengeCompletion

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
        {/* X Button */}
        <View className="px-6 pt-4 pb-2">
          <TouchableOpacity onPress={handleClose} className="w-10 h-10 items-center justify-center">
            <Ionicons name="close" size={32} color="#6b7280" />
          </TouchableOpacity>
        </View>
        
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      </SafeAreaView>
    );
  }

  if (!dailyChallenge) {
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

  // Handle checking the current answer
  const handleCheck = () => {
    if (!currentAnswer || !session) return;
    
    const currentChallenge = session.challenges[session.currentChallengeIndex];
    
    // For translation builder, normalize both answers (remove spaces, lowercase)
    const correct = Array.isArray(currentAnswer)
      ? currentAnswer.join('').toLowerCase() === 
        (Array.isArray(currentChallenge.correctAnswer) 
          ? currentChallenge.correctAnswer.join('').toLowerCase()
          : currentChallenge.correctAnswer.replace(/\s/g, '').toLowerCase())
      : currentAnswer === currentChallenge.correctAnswer;
    
    setIsCurrentCorrect(correct);
    setHasCheckedCurrent(true);
    
    // Play sound
    if (correct) {
      playCorrect();
    } else {
      playIncorrect();
    }
  };

  // Handle continuing to next challenge
  const handleContinue = () => {
    if (!currentAnswer || isCurrentCorrect === null || !session) return;
    
    handleChallengeComplete(currentAnswer, isCurrentCorrect);
    
    // Reset for next challenge
    setCurrentAnswer(null);
    setIsCurrentCorrect(null);
    setHasCheckedCurrent(false);
  };

  const handleChallengeComplete = (userAnswer: string | string[], isCorrect: boolean) => {
    if (!session) return;

    const currentChallenge = session.challenges[session.currentChallengeIndex];
    const timeSpent = Math.floor((Date.now() - session.startTime) / 1000);
    const pointsEarned = isCorrect ? currentChallenge.points : 0;

    console.log('Challenge completed:', {
      index: session.currentChallengeIndex,
      type: currentChallenge.type,
      isCorrect,
      userAnswer,
      correctAnswer: currentChallenge.correctAnswer
    });

    // Sound already played in component, don't play again here

    const result: ChallengeResult = {
      challengeId: currentChallenge.id,
      userAnswer,
      isCorrect,
      pointsEarned,
      timeSpent,
    };

    const isLastChallenge = session.currentChallengeIndex === session.challenges.length - 1;

    // Reset hasCheckedCurrent for next challenge
    setHasCheckedCurrent(false);

    setSession({
      ...session,
      results: [...session.results, result],
      totalScore: session.totalScore + pointsEarned,
      currentChallengeIndex: isLastChallenge ? session.currentChallengeIndex : session.currentChallengeIndex + 1,
      isComplete: isLastChallenge,
      endTime: isLastChallenge ? Date.now() : session.endTime,
    });
  };

  // Hero screen removed - now handled by hub (/challenge)

  // Completion screen removed - navigates back to hub automatically
  // Session should always exist here due to auto-start useEffect
  if (!session) return null;

  const currentChallenge = session.challenges[session.currentChallengeIndex];

  // Render challenge based on type
  const renderChallenge = () => {
    switch (currentChallenge.type) {
      case 'multiple_choice':
        return (
          <MultipleChoiceChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            selectedAnswer={currentAnswer as string | null}
            onAnswerChange={setCurrentAnswer}
            hasChecked={hasCheckedCurrent}
            isCorrect={isCurrentCorrect}
          />
        );
      case 'audio_recognition':
        return (
          <AudioChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            selectedAnswer={currentAnswer as string | null}
            onAnswerChange={setCurrentAnswer}
            hasChecked={hasCheckedCurrent}
            isCorrect={isCurrentCorrect}
          />
        );
      case 'translation_builder':
        return (
          <TranslationChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            selectedAnswer={currentAnswer as string[] | null}
            onAnswerChange={setCurrentAnswer}
            hasChecked={hasCheckedCurrent}
            isCorrect={isCurrentCorrect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      {/* Header: X Button + Progress Bar */}
      <View className="flex-row items-center px-6 py-4 gap-4">
        {/* X Button */}
        <TouchableOpacity onPress={handleClose} className="w-10 h-10 items-center justify-center">
          <Ionicons name="close" size={28} color="#6b7280" />
        </TouchableOpacity>
        
        {/* Progress Bar */}
        <View className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <View 
            className="h-full bg-blue-600 rounded-full"
            style={{ 
              width: `${((session.results.length + (hasCheckedCurrent ? 1 : 0)) / session.challenges.length) * 100}%` 
            }}
          />
        </View>
      </View>

      {/* Challenge Content - Full height container for absolute positioning */}
      <View className="flex-1">
        {renderChallenge()}
        
        {/* Shared Bottom Bar */}
        <ChallengeBottomBar
          hasAnswer={!!currentAnswer && (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true)}
          hasChecked={hasCheckedCurrent}
          isCorrect={isCurrentCorrect}
          explanation={currentChallenge.explanation}
          onCheck={handleCheck}
          onContinue={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
}
