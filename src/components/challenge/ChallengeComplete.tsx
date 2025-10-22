'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ChallengeSession } from '@/types/challenge';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface ChallengeCompleteProps {
  session: ChallengeSession;
  onRestart: () => void;
  playCompletionSound?: boolean; // Flag to control if sound should play
}

export default function ChallengeComplete({ session, onRestart, playCompletionSound = false }: ChallengeCompleteProps) {
  const { playSound } = useSoundEffects();
  const correctAnswers = session.results.filter(result => result.isCorrect).length;
  const totalQuestions = session.results.length;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const totalTime = Math.floor((Date.now() - session.startTime) / 1000);
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

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
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
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
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    result.isCorrect ? 'bg-green-500' : 'bg-red-500'
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

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors text-center"
          >
            Back to Dictionary
          </Link>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            🎯 Come back tomorrow for a new daily challenge and continue improving your Shona!
          </p>
        </div>
      </div>
    </div>
  );
}
