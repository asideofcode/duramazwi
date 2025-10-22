'use client';

import { useState, useEffect } from 'react';
import { DailyChallenge, ChallengeSession, ChallengeResult } from '@/types/challenge';
import { getChallengeCompletion, saveChallengeCompletion, clearOldCompletions } from '@/utils/challengeStorage';
import ChallengeProgress from './ChallengeProgress';
import MultipleChoiceChallenge from './MultipleChoiceChallenge';
import AudioChallenge from './AudioChallenge';
import TranslationChallenge from './TranslationChallenge';
import ChallengeComplete from './ChallengeComplete';
import SoundControls from '../SoundControls';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface DailyChallengeContainerProps {
  challenge: DailyChallenge;
}

export default function DailyChallengeContainer({ challenge }: DailyChallengeContainerProps) {
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

  // Check for existing completion on mount
  useEffect(() => {
    const initializeChallenge = async () => {
      clearOldCompletions(); // Clean up old completions first
      
      const existingCompletion = getChallengeCompletion(challenge.date);
      if (existingCompletion) {
        setSession(existingCompletion.session);
      }
      
      // Artificial delay to see loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsInitialized(true);
    };
    
    initializeChallenge();
  }, [challenge.date]);

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
      isComplete: isLastChallenge
    };

    setSession(updatedSession);
    
    // Mark as just completed if this is the last challenge
    if (isLastChallenge) {
      setJustCompleted(true);
    }
    
    // Save to localStorage
    saveChallengeCompletion(updatedSession);
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
    
    // Clear localStorage when restarting
    if (typeof window !== 'undefined') {
      localStorage.removeItem('shona_dictionary.daily_challenge_completion');
    }
  };

  // Consistent header for all states
  const renderHeader = () => (
    <div className="text-center mb-8">
      <div className="relative flex items-center justify-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Daily Challenge
        </h1>
        <div className="absolute right-0">
          <SoundControls compact={true} showLabel={false} />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        {new Date(challenge.date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
    </div>
  );

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
      <div className="py-8">
        {renderHeader()}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center">

          {/* Challenge Info */}
          <div className="mb-8">
            {/* Challenge Image */}
            <div className="mb-6">
              <img 
                src="/challenge-hero.png" 
                alt="Daily Challenge" 
                className="w-40 h-auto mx-auto rounded-lg"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Ready for Today's Challenge?
            </h2>

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
                  {challenge.estimatedTime || Math.ceil(challenge.challenges.length * 1.5)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Minutes
                </div>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={() => {
                setHasStarted(true);
                setSession(prev => ({ ...prev, startTime: Date.now() }));
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-colors shadow-lg"
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
          />
        );
      case 'audio_recognition':
        return (
          <AudioChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            onComplete={handleChallengeComplete}
          />
        );
      case 'translation_builder':
        return (
          <TranslationChallenge
            key={currentChallenge.id}
            challenge={currentChallenge}
            onComplete={handleChallengeComplete}
          />
        );
      default:
        return <div>Unknown challenge type</div>;
    }
  };

  return (
    <div className="py-8">
      {renderHeader()}

      {/* Progress */}
      <ChallengeProgress
        current={session.currentChallengeIndex + 1}
        total={session.challenges.length}
        score={session.totalScore}
      />

      {/* Challenge */}
      <div className="mt-8">
        {renderChallenge()}
      </div>
    </div>
  );
}
