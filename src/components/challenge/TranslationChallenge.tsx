'use client';

import { useState, useRef, useEffect } from 'react';
import { Challenge } from '@/types/challenge';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import ChallengeHero, { CharacterVariation, randomiseCharacter } from './ChallengeHero';

interface TranslationChallengeProps {
  challenge: Challenge;
  onComplete: (userAnswer: string[], isCorrect: boolean) => void;
  onAnswerChecked?: () => void;
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
    onAnswerChecked?.();
    
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
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
      {/* Challenge Hero */}
      <ChallengeHero 
        question={challenge.question}
        characterVariation={characterVariation}
        gap={4}
      />

      {/* Answer Area */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Answer:</h3>
        <div 
          className={`flex flex-wrap gap-2 p-4 rounded-lg border-2 border-dashed min-h-[80px] transition-colors ${
            draggedWord && !draggedFromSelected
              ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-200 dark:border-gray-600'
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDropOnSelected}
        >
          {selectedWords.length === 0 ? (
            <div className="flex items-center justify-center w-full h-12">
              <span className="text-gray-500 dark:text-gray-400 italic">
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
                    ? 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 cursor-not-allowed'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 hover:shadow-md hover:-translate-y-1'
                } ${draggedWord === word && draggedFromSelected ? 'opacity-50 scale-95' : ''} ${
                  dragOverIndex === index ? 'ring-2 ring-blue-400 scale-105' : ''
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
                    className="ml-2 text-red-500 hover:text-red-700 transition-colors select-none"
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
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Available Words:</h3>
        <div 
          className={`flex flex-wrap gap-2 p-4 rounded-lg border-2 border-dashed transition-colors ${
            draggedWord && draggedFromSelected
              ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
              : 'border-gray-200 dark:border-gray-600'
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
                  ? 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed border-gray-400 dark:border-gray-700'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 hover:shadow-md hover:-translate-y-1'
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
            <span className="text-gray-500 dark:text-gray-400 italic">
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
                ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-800 hover:border-blue-900'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed border-gray-400 dark:border-gray-700'
            }`}
            aria-label={canSubmit ? 'Submit your translation' : 'Complete the translation first'}
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
          {!isCorrect && (
            <div className="mb-2">
              <span className="text-sm text-red-600 dark:text-red-400">
                Correct answer: {Array.isArray(challenge.correctAnswer) ? challenge.correctAnswer.join(' ') : challenge.correctAnswer}
              </span>
            </div>
          )}
          {challenge.explanation && (
            <p className={`text-sm mb-4 ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {challenge.explanation}
            </p>
          )}
          
          {/* Continue Button inside feedback */}
          <div className="mt-4">
            <button
              ref={continueButtonRef}
              onClick={handleContinue}
              className={`w-full py-3 text-white rounded-lg font-medium transition-colors select-none border-b-4 ${
                isCorrect 
                  ? 'bg-green-600 hover:bg-green-700 border-green-800 hover:border-green-900' 
                  : 'bg-red-600 hover:bg-red-700 border-red-800 hover:border-red-900'
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
