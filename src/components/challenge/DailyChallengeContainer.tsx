'use client';

import { useState, useEffect } from 'react';
import { DailyChallenge, ChallengeSession, ChallengeResult } from '@/types/challenge';
import { isDateCompleted, saveChallengeCompletion, getCompletionStats, clearAllHistory } from '@/utils/challengeStorage';
import { getUserId } from '@/utils/userTracking';
import { useNavigationWarning } from '@/hooks/useNavigationWarning';
import ChallengeProgress from './ChallengeProgress';
import MultipleChoiceChallenge from './MultipleChoiceChallenge';
import AudioChallenge from './AudioChallenge';
import TranslationChallenge from './TranslationChallenge';
import ChallengeComplete from './ChallengeComplete';
import SoundControls from '../SoundControls';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import { useImagePreload } from '@/hooks/useImagePreload';
import SocialLinks from '@/components/SocialLinks';
import ShareChallenge from '@/components/ShareChallenge';

interface DailyChallengeContainerProps {
  challenge: DailyChallenge;
  isPreview?: boolean; // Preview mode - don't save to localStorage
}

export default function DailyChallengeContainer({ challenge, isPreview = false }: DailyChallengeContainerProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [session, setSession] = useState<ChallengeSession>({
    date: challenge.date,
    challenges: challenge.challenges,
    results: [],
    currentChallengeIndex: 0,
    startTime: Date.now(),
    isComplete: false,
    totalScore: 0
  });
  
  const [audioPreloadStatus, setAudioPreloadStatus] = useState<{
    [key: string]: 'loading' | 'loaded' | 'error'
  }>({});
  
  const [soundEffectsReady, setSoundEffectsReady] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false); // Track if current challenge has been answered
  const [currentAnswerCorrect, setCurrentAnswerCorrect] = useState<boolean | null>(null); // Track if current answer is correct
  
  // Preload hero image
  const heroImagePreload = useImagePreload('/challenge-hero.png');

  // Initialize sound effects with preloading callbacks
  const { playSound } = useSoundEffects({
    preload: true,
    onPreloadComplete: () => {
      setSoundEffectsReady(true);
    },
    onPreloadError: (errors) => {
      console.warn('🎵 Some sound effects failed to load:', errors);
      setSoundEffectsReady(true); // Still allow the challenge to proceed
    }
  });

  // Easter egg: Listen for "clear" in search bar
  useEffect(() => {
    const handleSearchInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.value.toLowerCase() === 'clear') {
        // Clear history silently in the background, search continues as normal
        clearAllHistory();
      }
    };

    // Find the search input and add listener
    const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', handleSearchInput);
      return () => searchInput.removeEventListener('input', handleSearchInput);
    }
  }, []);

  // Check if challenge is already completed on mount
  useEffect(() => {
    const initializeChallenge = async () => {
      // Skip localStorage check in preview mode
      if (isPreview) {
        setIsInitialized(true);
        return;
      }
      
      const stats = getCompletionStats(challenge.date);
      if (stats) {
        // Reconstruct session from stats using actual challenge IDs
        const mockResults: ChallengeResult[] = challenge.challenges.map((c) => {
          const wasCorrect = stats.correctChallengeIds.includes(c.id);
          return {
            challengeId: c.id,
            userAnswer: '', // We don't store individual answers anymore
            isCorrect: wasCorrect,
            pointsEarned: wasCorrect ? c.points : 0,
            timeSpent: Math.floor(stats.timeSpent / stats.totalChallenges)
          };
        });
        
        // Calculate startTime from completedAt and timeSpent
        const startTime = stats.completedAt - (stats.timeSpent * 1000);
        
        setSession(prev => ({
          ...prev,
          isComplete: true,
          results: mockResults,
          totalScore: stats.totalScore,
          startTime,
          endTime: stats.completedAt
        }));
      }
      
      // Artificial delay to see loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsInitialized(true);
    };
    
    initializeChallenge();
  }, [challenge.date, challenge.challenges]);

  // Preload audio for audio challenges
  useEffect(() => {
    const audioChallenges = challenge.challenges.filter(c => 
      c.type === 'audio_recognition' && c.audioUrl
    );

    if (audioChallenges.length === 0) return;

    audioChallenges.forEach((audioChallenge) => {
      if (!audioChallenge.audioUrl) return;

      const audioUrl = audioChallenge.audioUrl;
      
      // Set loading status
      setAudioPreloadStatus(prev => ({
        ...prev,
        [audioUrl]: 'loading'
      }));

      // Create audio element for preloading
      const audio = new Audio();
      
      audio.addEventListener('canplaythrough', () => {
        setAudioPreloadStatus(prev => ({
          ...prev,
          [audioUrl]: 'loaded'
        }));
      });

      audio.addEventListener('error', (e) => {
        console.warn(`🎵 Failed to preload audio: ${audioUrl}`, e);
        setAudioPreloadStatus(prev => ({
          ...prev,
          [audioUrl]: 'error'
        }));
      });

      // Start preloading
      audio.preload = 'auto';
      audio.src = audioUrl;
      audio.load();
    });
  }, [challenge.challenges]);

  // Navigation warning for in-progress challenges
  const isInProgress = hasStarted && !session.isComplete;
  useNavigationWarning({
    when: isInProgress,
    message: 'You have an in-progress challenge. Your progress will be lost if you navigate away. Are you sure you want to continue?'
  });

  const currentChallenge = session.challenges[session.currentChallengeIndex];
  const isLastChallenge = session.currentChallengeIndex === session.challenges.length - 1;

  const handleChallengeComplete = (userAnswer: string | string[], isCorrect: boolean) => {
    const timeSpent = Math.floor((Date.now() - session.startTime) / 1000);
    const pointsEarned = isCorrect ? currentChallenge.points : 0;

    const result: ChallengeResult = {
      challengeId: currentChallenge.id,
      userAnswer,
      isCorrect,
      pointsEarned,
      timeSpent
    };

    const updatedSession = {
      ...session,
      results: [...session.results, result],
      totalScore: session.totalScore + pointsEarned,
      currentChallengeIndex: isLastChallenge ? session.currentChallengeIndex : session.currentChallengeIndex + 1,
      isComplete: isLastChallenge,
      endTime: isLastChallenge ? Date.now() : session.endTime
    };

    setSession(updatedSession);
    setHasAnswered(false); // Reset for next challenge
    setCurrentAnswerCorrect(null); // Reset current answer correctness
    
    // Track individual challenge completion
    globalThis.gtag?.('event', 'challenge_completed', {
      challenge_type: currentChallenge.type,
      challenge_difficulty: currentChallenge.difficulty,
      is_correct: isCorrect,
      points_earned: pointsEarned,
      time_spent: timeSpent,
      challenge_number: session.currentChallengeIndex + 1,
      total_challenges: session.challenges.length
    });
    
    // Mark as just completed if this is the last challenge
    if (isLastChallenge) {
      setJustCompleted(true);
      
      // Calculate stats
      const totalTimeSpent = Math.floor((Date.now() - session.startTime) / 1000);
      const correctAnswers = updatedSession.results.filter(r => r.isCorrect).length;
      const accuracy = Math.round((correctAnswers / updatedSession.results.length) * 100);
      
      // Track daily challenge completion in analytics (skip in preview mode)
      if (!isPreview) {
        globalThis.gtag?.('event', 'daily_challenge_completed', {
          date: challenge.date,
          total_challenges: updatedSession.results.length,
          correct_answers: correctAnswers,
          accuracy: accuracy,
          total_score: updatedSession.totalScore,
          total_time_spent: totalTimeSpent
        });
      }
      
      // Save completion stats to localStorage (only when fully complete)
      if (!isPreview) {
        const challengeIds = updatedSession.challenges.map(c => c.id);
        const correctChallengeIds = updatedSession.results
          .filter(r => r.isCorrect)
          .map(r => r.challengeId);
        
        saveChallengeCompletion({
          date: challenge.date,
          completedAt: Date.now(),
          totalScore: updatedSession.totalScore,
          correctAnswers,
          totalChallenges: updatedSession.results.length,
          accuracy,
          timeSpent: totalTimeSpent,
          challengeIds,
          correctChallengeIds
        });
      }
      
      // Track completion in database with geolocation data (production only)
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/challenge/complete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: challenge.date,
            totalScore: updatedSession.totalScore,
            correctAnswers,
            totalChallenges: updatedSession.results.length,
            accuracy,
            timeSpent: totalTimeSpent,
            userId: getUserId(), // Include persistent user ID for tracking returning users
          }),
        }).catch(error => {
          // Silent fail - don't interrupt user experience
          console.error('Failed to track completion:', error);
        });
      }
    }
  };

  const handleRestart = () => {
    const newSession: ChallengeSession = {
      date: challenge.date,
      challenges: challenge.challenges,
      results: [],
      currentChallengeIndex: 0,
      startTime: Date.now(),
      isComplete: false,
      totalScore: 0
    };
    
    setSession(newSession);
    setJustCompleted(false); // Reset completion flag
    setHasStarted(false); // Reset to show preamble again
    // Note: We don't clear history - completion stats remain for streak tracking
  };

  // Consistent header for all states
  const renderHeader = () => {
    // Calculate yesterday's date
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    
    // Check if we're viewing today's challenge
    const isToday = challenge.date === new Date().toISOString().split('T')[0];
    
    return (
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Daily Shona Challenge
            </h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <p className="text-gray-600 dark:text-gray-400">
                {new Date(challenge.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              {isToday && (
                <a
                  href={`/challenge/daily?date=${yesterdayString}`}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                  title="View yesterday's challenge"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                  </svg>
                  <span>Yesterday</span>
                </a>
              )}
              {!isToday && (
                <a
                  href="/challenge/daily"
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition-colors"
                  title="View today's challenge"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span>Today</span>
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShareChallenge date={challenge.date} />
            <SoundControls compact={true} showLabel={false} />
          </div>
        </div>
      </div>
    );
  };

  // Show loading until we've checked localStorage
  if (!isInitialized) {
    return (
      <div className="py-8">
        {renderHeader()}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-screen animate-pulse"></div>
      </div>
    );
  }

  // Show preamble if challenge hasn't started AND there's no existing completion
  if (!hasStarted && !session.isComplete && session.results.length === 0) {
    return (
      <div className="py-8 min-h-screen">
        {renderHeader()}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center">

          {/* Challenge Info */}
          <div className="mb-8">
            {/* Challenge Image */}
            <div className="mb-6">
              <div className="h-60 mx-auto flex items-center justify-center">
                <ImageWithPlaceholder
                  src={heroImagePreload}
                  alt="Daily Shona Challenge"
                  className="h-60 w-auto"
                  fallbackIcon="🎯"
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready for Today's Challenge?
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Test your Shona skills with today's mix of questions. Each challenge helps you improve your vocabulary, pronunciation, and comprehension. 🎯
            </p>

            {/* Challenge Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {challenge.challenges.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Questions
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {challenge.totalPoints || challenge.challenges.reduce((sum, c) => sum + c.points, 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Points
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {challenge.estimatedTime || Math.ceil(challenge.challenges.length * 0.5)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Minutes
                </div>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setHasStarted(true);
                setSession(prev => ({ ...prev, startTime: Date.now() }));
              }}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-colors shadow-lg touch-manipulation select-none border-b-4 border-blue-800 hover:border-blue-900"
              aria-label="Start today's challenge"
            >
              Start Challenge
            </button>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              💡 <strong>Tip:</strong> Take your time and think carefully about each answer. You can only complete this challenge once per day!
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (session.isComplete) {
    return (
      <div className="py-8">
        {renderHeader()}
        
        {/* Preview Mode Navigation on Completion Screen */}
        {isPreview && (
          <div className="mb-6 flex justify-center gap-4">
            <button
              onClick={() => {
                // Go back from completion screen
                setSession(prev => ({
                  ...prev,
                  isComplete: false,
                  currentChallengeIndex: prev.challenges.length - 1
                }));
                setJustCompleted(false);
              }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Challenges
            </button>
          </div>
        )}
        
        <ChallengeComplete 
          session={session}
          onRestart={handleRestart}
          playCompletionSound={justCompleted}
        />
      </div>
    );
  }

  const renderChallenge = () => {
    switch (currentChallenge.type) {
      case 'multiple_choice':
        return (
          <MultipleChoiceChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            onComplete={handleChallengeComplete}
            onAnswerChecked={(isCorrect) => {
              setHasAnswered(true);
              setCurrentAnswerCorrect(isCorrect);
            }}
          />
        );
      case 'audio_recognition':
        return (
          <AudioChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            onComplete={handleChallengeComplete}
            onAnswerChecked={(isCorrect) => {
              setHasAnswered(true);
              setCurrentAnswerCorrect(isCorrect);
            }}
          />
        );
      case 'translation_builder':
        return (
          <TranslationChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            onComplete={handleChallengeComplete}
            onAnswerChecked={(isCorrect) => {
              setHasAnswered(true);
              setCurrentAnswerCorrect(isCorrect);
            }}
          />
        );
      default:
        return <div>Unknown challenge type</div>;
    }
  };

  return (
    <div className="py-8">
      {renderHeader()}

      {/* Preview Mode Navigation */}
      {isPreview && (
        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={() => {
              if (session.isComplete) {
                // Go back from completion screen
                setSession(prev => ({
                  ...prev,
                  isComplete: false,
                  currentChallengeIndex: prev.challenges.length - 1
                }));
                setJustCompleted(false);
              } else if (session.currentChallengeIndex > 0) {
                setSession(prev => ({
                  ...prev,
                  currentChallengeIndex: prev.currentChallengeIndex - 1
                }));
                setHasAnswered(false);
                setCurrentAnswerCorrect(null);
              }
            }}
            disabled={!session.isComplete && session.currentChallengeIndex === 0}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-md transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {session.isComplete ? 'Back to Challenges' : 'Previous'}
          </button>
          
          <button
            onClick={() => {
              if (session.currentChallengeIndex < session.challenges.length - 1) {
                setSession(prev => ({
                  ...prev,
                  currentChallengeIndex: prev.currentChallengeIndex + 1
                }));
                setHasAnswered(false);
                setCurrentAnswerCorrect(null);
              } else if (session.currentChallengeIndex === session.challenges.length - 1) {
                // Jump to completion screen from last challenge
                setSession(prev => ({
                  ...prev,
                  isComplete: true,
                  endTime: Date.now()
                }));
                setJustCompleted(true);
              }
            }}
            disabled={session.isComplete}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-md transition-colors flex items-center gap-2"
          >
            {session.currentChallengeIndex === session.challenges.length - 1 ? 'View Results' : 'Next'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Progress */}
      <ChallengeProgress
        current={session.currentChallengeIndex + 1}
        completed={hasAnswered ? session.currentChallengeIndex + 1 : session.currentChallengeIndex}
        total={session.challenges.length}
        score={session.totalScore}
        results={session.results}
        currentAnswerCorrect={currentAnswerCorrect}
      />

      {/* Challenge */}
      <div className="mt-8">
        {renderChallenge()}
      </div>
    </div>
  );
}
