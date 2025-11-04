'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChallengeSession } from '@/types/challenge';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import StreakDisplay from './StreakDisplay';

interface ChallengeCompleteProps {
  session: ChallengeSession;
  onRestart: () => void;
  playCompletionSound?: boolean; // Flag to control if sound should play
}

export default function ChallengeComplete({ session, onRestart, playCompletionSound = false }: ChallengeCompleteProps) {
  const { playSound } = useSoundEffects();
  const [isSharing, setIsSharing] = useState(false);
  const correctAnswers = session.results.filter(result => result.isCorrect).length;
  const totalQuestions = session.results.length;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Use the challenge date from session (for past challenges) or today's date
  const challengeDate = session.date || new Date().toISOString().split('T')[0];
  
  // Use endTime if available, otherwise fall back to current time (for backwards compatibility)
  const endTime = session.endTime || Date.now();
  const totalTime = Math.floor((endTime - session.startTime) / 1000);
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  const shareImageUrl = `/api/og/Daily%20Shona%20Challenge%20Results?score=${session.totalScore}&accuracy=${accuracy}&correct=${correctAnswers}&total=${totalQuestions}&time=${minutes}:${seconds.toString().padStart(2, '0')}&date=${challengeDate}`;

  // Share with file via Web Share API (for Instagram)
  const handleInstagramShare = async () => {
    if (isSharing) return; // Prevent double-clicks
    
    setIsSharing(true);
    try {
      // Fetch the image from our API
      const response = await fetch(shareImageUrl);
      const blob = await response.blob();
      
      // Create a file from the blob
      const file = new File([blob], 'Daily Shona Challenge Results.png', { type: 'image/png' });
      
      setIsSharing(false);
      // Check if Web Share API is supported and can share files
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'My Shona Daily Challenge Result',
          text: `I scored ${session.totalScore} points with ${accuracy}% accuracy! 🎉`,
        });
      } else {
        // Fallback: open image in new tab
        window.open(shareImageUrl, '_blank');
      }
    } catch (error) {
      console.log('Error sharing:', error);
      if (error instanceof Error && error.name !== 'AbortError') {
        // Only show fallback if it's not a user cancellation
        window.open(shareImageUrl, '_blank');
      }
    } finally {
      setIsSharing(false);
    }
  };


  // Play completion sound effect only if explicitly requested (fresh completion)
  useEffect(() => {
    if (playCompletionSound) {
      const timer = setTimeout(() => {
        if (accuracy >= 60) {
          playSound('challenge-complete');
        } else {
          playSound('challenge-failed');
        }
      }, 500); // Delay to let the UI render first

      return () => clearTimeout(timer);
    }
  }, [accuracy, playSound, playCompletionSound]);

  const getPerformanceMessage = () => {
    if (accuracy === 100) return "Perfect! 🎉";
    if (accuracy >= 80) return "Excellent work! 🌟";
    if (accuracy >= 60) return "Good job! 👍";
    return "Keep practicing! 💪";
  };

  const getPerformanceColor = () => {
    if (accuracy >= 80) return "text-green-600 dark:text-green-400";
    if (accuracy >= 60) return "text-blue-600 dark:text-blue-400";
    return "text-orange-600 dark:text-orange-400";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center">
      {/* Header */}
      <div className="mb-8">
        <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-6xl">🏆</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Challenge Complete!
        </h1>
        <p className={`text-xl font-medium ${getPerformanceColor()}`}>
          {getPerformanceMessage()}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {session.totalScore}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Points Earned
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {accuracy}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Accuracy
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {correctAnswers}/{totalQuestions}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Correct Answers
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Time Taken
          </div>
        </div>
      </div>

      {/* Streak Display - Hidden for now */}
      {/* <div className="mb-8">
        <StreakDisplay showDetails={true} />
      </div> */}

      {/* Social Share CTA */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          🎉 Share Your Achievement!
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Challenge your friends to beat your score of {session.totalScore} points!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleInstagramShare}
            disabled={isSharing}
            className="flex items-center justify-center gap-2 px-6 py-3 min-w-[230px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            {isSharing ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Loading...</span>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1.5">
                  {/* Instagram Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {/* TikTok Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
                <span>Share to Socials</span>
              </>
            )}
          </button>
          <a  
            href={shareImageUrl}
            // target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Image
          </a>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Progress</span>
          <span>{correctAnswers} of {totalQuestions} correct</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${accuracy}%` }}
          />
        </div>
      </div>

      {/* Challenge Breakdown */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Challenge Breakdown
        </h3>
        <div className="space-y-2">
          {session.results.map((result, index) => (
            <div key={result.challengeId} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${result.isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                  {result.isCorrect ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-900 dark:text-white">
                  Question {index + 1}
                </span>
              </div>
              <div className="text-right">
                <div className={`font-medium ${result.isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {result.pointsEarned} pts
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions - Only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="flex justify-center">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors select-none"
            aria-label="Restart challenge (development only)"
          >
            Try Again (Dev Mode)
          </button>
        </div>
      )}

      {/* Motivational Message */}
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-blue-700 dark:text-blue-300 text-sm">
          🎯 Come back tomorrow for a new daily challenge and continue improving your Shona!
        </p>
      </div>
    </div>
  );
}
