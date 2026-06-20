'use client';

import { useState, useRef, useEffect } from 'react';
import { Challenge } from '@/types/challenge';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import ChallengeHero, { CharacterVariation, randomiseCharacter } from './ChallengeHero';

interface TranslationChallengeProps {
  challenge: Challenge;
  onComplete: (userAnswer: string[], isCorrect: boolean) => void;
  onAnswerChecked?: (isCorrect: boolean) => void;
}

export default function TranslationChallenge({ challenge, onComplete, onAnswerChecked }: TranslationChallengeProps) {
  // Combine correct answer + distractors and shuffle them
  const correctAnswer = Array.isArray(challenge.correctAnswer) ? challenge.correctAnswer : [challenge.correctAnswer];
  const distractors = challenge.distractors || []; // Only use distractors field
  const allWords = [...correctAnswer, ...distractors];
  
  // Shuffle the words (Fisher-Yates algorithm)
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Randomly select a character variation (1-8) - stable across re-renders
  const [characterVariation] = useState<CharacterVariation>(randomiseCharacter);
  
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(() => shuffleArray(allWords));
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [draggedFromSelected, setDraggedFromSelected] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const { playSound } = useSoundEffects();
  const continueButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll continue button into view when result is shown
  useEffect(() => {
    if (showResult && continueButtonRef.current) {
      setTimeout(() => {
        continueButtonRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  }, [showResult]);

  const handleWordSelect = (word: string) => {
    if (showResult) return;
    
    setSelectedWords(prev => [...prev, word]);
    // Remove only the first occurrence of the word
    setAvailableWords(prev => {
      const index = prev.indexOf(word);
      if (index > -1) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      }
      return prev;
    });
  };

  const handleWordRemove = (index: number) => {
    if (showResult) return;
    
    const word = selectedWords[index];
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
    setAvailableWords(prev => [...prev, word]);
  };

  const handleSubmit = () => {
    if (!canSubmit || showResult) return;
    
    const correctAnswer = Array.isArray(challenge.correctAnswer) 
      ? challenge.correctAnswer 
      : [challenge.correctAnswer];
    
    const correct = JSON.stringify(selectedWords) === JSON.stringify(correctAnswer);
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
    onComplete(selectedWords, isCorrect);
  };

  // Drag and Drop handlers
  const handleDragStart = (e: React.DragEvent, word: string, fromSelected: boolean, index?: number) => {
    if (showResult) return;
    setDraggedWord(word);
    setDraggedFromSelected(fromSelected);
    if (fromSelected && index !== undefined) {
      setDraggedIndex(index);
    }
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  };

  const handleDropOnSelected = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedWord || showResult) return;

    if (!draggedFromSelected) {
      // Moving from available to selected
      setSelectedWords(prev => [...prev, draggedWord]);
      // Remove only the first occurrence of the word
      setAvailableWords(prev => {
        const index = prev.indexOf(draggedWord);
        if (index > -1) {
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        }
        return prev;
      });
    }
    
    setDraggedWord(null);
    setDraggedFromSelected(false);
  };

  const handleDropOnAvailable = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedWord || showResult) return;

    if (draggedFromSelected) {
      // Moving from selected to available
      setAvailableWords(prev => [...prev, draggedWord]);
      // Remove only the first occurrence of the word
      setSelectedWords(prev => {
        const index = prev.indexOf(draggedWord);
        if (index > -1) {
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        }
        return prev;
      });
    }
    
    setDraggedWord(null);
    setDraggedFromSelected(false);
  };

  const handleDragEnd = () => {
    setDraggedWord(null);
    setDraggedFromSelected(false);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragOverWord = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedFromSelected && draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDropOnWord = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedFromSelected && draggedIndex !== null && draggedIndex !== dropIndex) {
      // Reorder within selected words
      const newSelectedWords = [...selectedWords];
      const draggedItem = newSelectedWords[draggedIndex];
      newSelectedWords.splice(draggedIndex, 1);
      newSelectedWords.splice(dropIndex, 0, draggedItem);
      setSelectedWords(newSelectedWords);
    }
    setDragOverIndex(null);
  };

  const canSubmit = selectedWords.length > 0 && !showResult;

  return (
    <div className="theme-card rounded-lg p-8">
      {/* Challenge Hero */}
      <ChallengeHero 
        question={challenge.question}
        characterVariation={characterVariation}
        gap={4}
      />

      {/* Answer Area */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-[var(--color-primary)] mb-4">Your Answer:</h3>
        <div 
          className={`flex flex-wrap gap-2 p-4 rounded-lg border-2 border-dashed min-h-[80px] transition-colors ${
            draggedWord && !draggedFromSelected
              ? 'border-[var(--color-accent)] bg-[var(--color-surface-raised)]'
              : 'border-[var(--color-border)] bg-[var(--color-surface-raised)]'
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDropOnSelected}
        >
          {selectedWords.length === 0 ? (
            <div className="flex items-center justify-center w-full h-12">
              <span className="text-[var(--color-placeholder)] italic">
                Drag words here to build your answer
              </span>
            </div>
          ) : (
            selectedWords.map((word, index) => (
              <div
                key={`selected-${word}-${index}`}
                draggable
                onDragStart={(e) => handleDragStart(e, word, true, index)}
                onDragEnd={handleDragEnd}
                onClick={() => handleWordRemove(index)}
                className={`px-3 py-2 h-10 flex items-center rounded-lg font-medium transition-all duration-300 cursor-move relative ${
                  showResult
                    ? 'theme-option-disabled cursor-not-allowed'
                    : 'bg-[var(--color-accent)] text-[#1B1B1B] dark:text-[#0F1115] hover:brightness-95 hover:shadow-md hover:-translate-y-1'
                } ${draggedWord === word && draggedFromSelected ? 'opacity-50 scale-95' : ''} ${
                  dragOverIndex === index ? 'ring-2 ring-[var(--color-primary)] scale-105' : ''
                }`}
                style={{
                  transform: draggedWord === word && draggedFromSelected ? 'scale(0.95)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDropOnWord(e, index)}
              >  
                <span className="select-none">{word}</span>
                {!showResult && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWordRemove(index);
                    }}
                    className="ml-2 text-[var(--color-danger)] hover:brightness-90 transition-colors select-none"
                    aria-label={`Remove ${word}`}
                  >
                    ×
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Available Words */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-[var(--color-primary)] mb-4">Available Words:</h3>
        <div 
          className={`flex flex-wrap gap-2 p-4 rounded-lg border-2 border-dashed transition-colors ${
            draggedWord && draggedFromSelected
              ? 'border-[var(--color-primary)] bg-[var(--color-surface-raised)]'
              : 'border-[var(--color-border)] bg-[var(--color-surface-raised)]'
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDropOnAvailable}
        >
          {availableWords.map((word, index) => (
            <div
              key={`available-${word}-${index}`}
              draggable={!showResult}
              onDragStart={(e) => handleDragStart(e, word, false)}
              onDragEnd={handleDragEnd}
              onClick={() => handleWordSelect(word)}
              className={`px-4 py-2 h-10 flex items-center rounded-lg font-medium transition-all duration-300 cursor-move border-b-4 ${
                showResult
                  ? 'theme-button-muted cursor-not-allowed'
                  : 'theme-option hover:shadow-md hover:-translate-y-1'
              } ${draggedWord === word && !draggedFromSelected ? 'opacity-50' : ''}`}
              style={{
                transform: draggedWord === word && !draggedFromSelected ? 'scale(0.95)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span className="select-none">{word}</span>
            </div>
          ))}
          {availableWords.length === 0 && (
            <span className="text-[var(--color-placeholder)] italic">
              All words have been used
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      {!showResult && (
        <div className="mb-6">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`w-full py-3 rounded-lg font-medium transition-colors select-none border-b-4 ${
              canSubmit
                ? 'theme-button-accent hover:brightness-95'
                : 'theme-button-muted cursor-not-allowed'
            }`}
            aria-label={canSubmit ? 'Submit your translation' : 'Complete the translation first'}
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
          {!isCorrect && (
            <div className="mb-2">
              <span className="text-sm text-[var(--color-danger)]">
                Correct answer: {Array.isArray(challenge.correctAnswer) ? challenge.correctAnswer.join(' ') : challenge.correctAnswer}
              </span>
            </div>
          )}
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
