'use client';

import { useState } from 'react';
import { Challenge } from '@/types/challenge';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface MultipleChoiceChallengeProps {
  challenge: Challenge;
  onComplete: (userAnswer: string, isCorrect: boolean) => void;
}

export default function MultipleChoiceChallenge({ challenge, onComplete }: MultipleChoiceChallengeProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { playSound } = useSoundEffects();

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    if (!selectedAnswer || showResult) return;
    
    const correct = selectedAnswer === challenge.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    // Play sound effect with slight delay for better UX
    setTimeout(() => {
      playSound(correct ? 'correct' : 'incorrect');
    }, 300);
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      onComplete(selectedAnswer, isCorrect);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
      {/* Question */}
      <div className="text-center mb-8">
        <h2 id="question-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {challenge.question}
        </h2>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {challenge.difficulty} • {challenge.points} points
        </div>
      </div>

      {/* Options */}
      <fieldset className="mb-8">
        <legend className="sr-only">Choose the correct answer</legend>
        <div className="grid grid-cols-1 gap-3" role="radiogroup" aria-labelledby="question-heading">
          {challenge.options?.map((option, index) => {
          let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 touch-manipulation select-none ";
          
          if (!showResult) {
            buttonClass += selectedAnswer === option
              ? "border-blue-500 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-md"
              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600";
          } else {
            if (option === challenge.correctAnswer) {
              buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
            } else if (option === selectedAnswer && !isCorrect) {
              buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
            } else {
              buttonClass += "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              disabled={showResult}
              className={buttonClass}
              role="radio"
              aria-checked={selectedAnswer === option}
              aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-4 text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-lg font-medium flex-1">{option}</span>
                <div className="ml-auto w-6 h-6 flex items-center justify-center">
                  {showResult && option === challenge.correctAnswer && (
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-label="Correct answer">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {showResult && option === selectedAnswer && !isCorrect && (
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-label="Incorrect answer">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          );
        })}
        </div>
      </fieldset>

      {/* Check Button */}
      {!showResult && (
        <div className="mb-6">
          <button
            onClick={handleCheck}
            disabled={!selectedAnswer}
            className={`w-full py-3 rounded-lg font-medium transition-colors select-none ${
              selectedAnswer
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
            aria-label={selectedAnswer ? 'Check your answer' : 'Select an answer first'}
          >
            Check Answer
          </button>
        </div>
      )}

      {/* Result */}
      {showResult && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
          <div className="flex items-center mb-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
              {isCorrect ? (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`font-bold ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          {challenge.explanation && (
            <p className={`text-sm mb-4 ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {challenge.explanation}
            </p>
          )}
          
          {/* Continue Button inside feedback */}
          <div className="mt-4">
            <button
              onClick={handleContinue}
              className={`w-full py-3 text-white rounded-lg font-medium transition-colors select-none ${
                isCorrect 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
              aria-label="Continue to next question"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
