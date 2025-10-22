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
    clearOldCompletions(); // Clean up old completions first
    
    const existingCompletion = getChallengeCompletion(challenge.date);
    if (existingCompletion) {
      setSession(existingCompletion.session);
    }
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
    const newSession = {
      date: challenge.date,
      challenges: challenge.challenges,
      results: [],
      currentChallengeIndex: 0,
      totalScore: 0,
      isComplete: false,
      startTime: Date.now()
    };
    
    setSession(newSession);
    setJustCompleted(false); // Reset completion flag
    
    // Clear localStorage when restarting
    if (typeof window !== 'undefined') {
      localStorage.removeItem('shona_dictionary.daily_challenge_completion');
    }
  };

  if (session.isComplete) {
    return (
      <div className="py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <div></div> {/* Spacer for centering */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Daily Challenge
            </h1>
            <div className="flex justify-end">
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
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-between mb-4">
          <div></div> {/* Spacer for centering */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Daily Challenge
          </h1>
          <div className="flex justify-end">
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
