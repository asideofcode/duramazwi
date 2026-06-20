'use client';

import { useState, useRef, useEffect } from 'react';
import { Challenge } from '@/types/challenge';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import ChallengeHero, { CharacterVariation, randomiseCharacter } from './ChallengeHero';

interface MultipleChoiceChallengeProps {
  challenge: Challenge;
  onComplete: (userAnswer: string, isCorrect: boolean) => void;
  onAnswerChecked?: (isCorrect: boolean) => void; // Called when answer is checked (before continue)
}

export default function MultipleChoiceChallenge({ challenge, onComplete, onAnswerChecked }: MultipleChoiceChallengeProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { playSound } = useSoundEffects();
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  
  // Randomly select a character variation (1-8) - stable across re-renders
  const [characterVariation] = useState<CharacterVariation>(randomiseCharacter);

  // Scroll continue button into view when result is shown
  useEffect(() => {
    if (showResult && continueButtonRef.current) {
      // Small delay to ensure the result section is fully rendered
      setTimeout(() => {
        continueButtonRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  }, [showResult]);

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    if (!selectedAnswer || showResult) return;
    
    const correct = selectedAnswer === challenge.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    // Notify parent that answer has been checked
    onAnswerChecked?.(correct);
    
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
    <div className="theme-card rounded-lg p-8">
      {/* Character Hero */}
      <ChallengeHero 
        question={challenge.question}
        characterVariation={characterVariation}
      />

      {/* Hidden heading for accessibility */}
      <h2 id="question-heading" className="sr-only">
        {challenge.question}
      </h2>

      {/* Options */}
      <fieldset className="mb-8">
        <legend className="sr-only">Choose the correct answer</legend>
        <div className="grid grid-cols-1 gap-3" role="radiogroup" aria-labelledby="question-heading">
          {challenge.options?.map((option, index) => {
          let buttonClass = "w-full p-4 text-left rounded-lg border-2 border-b-4 transition-all duration-200 touch-manipulation select-none ";
          
          if (!showResult) {
            buttonClass += selectedAnswer === option
              ? "theme-option-selected"
              : "theme-option";
          } else {
            if (option === challenge.correctAnswer) {
              buttonClass += "theme-option-correct";
            } else if (option === selectedAnswer && !isCorrect) {
              buttonClass += "theme-option-incorrect";
            } else {
              buttonClass += "theme-option-disabled";
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
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20" aria-label="Correct answer">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {showResult && option === selectedAnswer && !isCorrect && (
                    <svg className="w-6 h-6 text-[var(--color-danger)]" fill="currentColor" viewBox="0 0 20 20" aria-label="Incorrect answer">
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
            className={`w-full py-3 rounded-lg font-medium transition-colors select-none border-b-4 ${
              selectedAnswer
                ? 'theme-button-accent hover:brightness-95'
                : 'theme-button-muted cursor-not-allowed'
            }`}
            aria-label={selectedAnswer ? 'Check your answer' : 'Select an answer first'}
          >
            Check Answer
          </button>
        </div>
      )}

      {/* Result */}
      {showResult && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'theme-feedback-correct' : 'theme-feedback-incorrect'}`}>
          <div className="flex items-center mb-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${isCorrect ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-danger)]'}`}>
              {isCorrect ? (
                <svg className="w-4 h-4 text-[var(--color-hero-text)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`font-bold ${isCorrect ? 'text-[var(--color-primary)]' : 'text-[var(--color-danger)]'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          {challenge.explanation && (
            <p className="text-sm mb-4 text-[var(--color-muted)]">
              {challenge.explanation}
            </p>
          )}
          
          {/* Continue Button inside feedback */}
          <div className="mt-4">
            <button
              ref={continueButtonRef}
              onClick={handleContinue}
              className={`w-full py-3 rounded-lg font-medium transition-colors select-none border-b-4 ${
                isCorrect 
                  ? 'theme-button-primary hover:brightness-95'
                  : 'theme-button-danger hover:brightness-95'
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
