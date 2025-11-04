'use client';

import { useState } from 'react';
import Link from 'next/link';

interface WordCardProps {
  word: {
    word: string;
    meanings?: Array<{
      partOfSpeech?: string;
      definitions?: Array<{
        definition: string;
        examples?: Array<{
          shona: string;
          english: string;
        }>;
      }>;
    }>;
    pronunciation?: string;
    audio?: string;
  };
}

export default function WordCard({ word }: WordCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  // Swipe detection
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

  const handleFlip = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    
    // Track flip interaction
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'card_flip', {
        word: word.word,
        action: isFlipped ? 'show_word' : 'show_meaning',
      });
    }
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const minSwipeDistance = 50;
    
    // Check if horizontal swipe is dominant (not vertical scroll)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      e.preventDefault();
      e.stopPropagation();
      // Flip on any horizontal swipe (left or right)
      setIsFlipped(!isFlipped);
      
      // Track swipe interaction
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'card_swipe_flip', {
          word: word.word,
          direction: deltaX > 0 ? 'left' : 'right',
        });
      }
    }
  };

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (word.audio && !audioPlaying) {
      setAudioPlaying(true);
      const audio = new Audio(word.audio);
      
      audio.onended = () => setAudioPlaying(false);
      audio.onerror = () => setAudioPlaying(false);
      
      audio.play().catch(() => setAudioPlaying(false));

      // Track audio play
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'audio_play', {
          word: word.word,
          source: 'discover_feed',
        });
      }
    }
  };

  const handleLinkClick = () => {
    // Track navigation to word detail
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'word_detail_click', {
        word: word.word,
        source: 'discover_feed',
      });
    }
  };

  const primaryMeaning = word.meanings?.[0]?.definitions?.[0]?.definition || 'No meaning available';
  const example = word.meanings?.[0]?.definitions?.[0]?.examples?.[0];
  const partOfSpeech = word.meanings?.[0]?.partOfSpeech;
  const isVerb = partOfSpeech?.toLowerCase() === 'verb';
  
  // Count total meanings across all definitions
  const totalMeanings = word.meanings?.reduce((count, meaning) => {
    return count + (meaning.definitions?.length || 0);
  }, 0) || 0;
  
  const hasMultipleMeanings = totalMeanings > 1;
  const displayWord = isVerb ? `ku-${word.word}` : word.word;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 h-full flex flex-col select-none">
      <div 
        className="relative w-full h-[80%] perspective-1000"
        style={{ perspective: '1000px' }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            touchAction: 'manipulation', // Fast tap response, no 300ms delay
          }}
        >
          {/* Front of card - Word */}
          <div
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="text-sm font-medium text-blue-100 uppercase tracking-wider">
                  Shona Word
                </span>
                {hasMultipleMeanings && (
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium">
                    {totalMeanings} meanings
                  </span>
                )}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 break-all hyphens-auto" lang="shona">
                {displayWord}
              </h1>
              
              {partOfSpeech && (
                <p className="text-lg text-blue-100 mb-4">
                  ({partOfSpeech})
                </p>
              )}

              {word.pronunciation && (
                <p className="text-2xl text-blue-100 mb-8">
                  /{word.pronunciation}/
                </p>
              )}

              {word.audio && (
                <button
                  onClick={playAudio}
                  disabled={audioPlaying}
                  className="mb-8 p-4 bg-white/20 hover:bg-white/30 rounded-full transition-colors disabled:opacity-50"
                  aria-label="Play pronunciation"
                >
                  {audioPlaying ? (
                    <svg className="w-8 h-8 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              )}

              <p className="text-white/80 text-lg">
                Tap to see meaning
              </p>
            </div>
          </div>

          {/* Back of card - Meaning */}
          <div
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="text-center max-w-xl">
              <div className="mb-2">
                <p className="text-xl font-semibold text-white/90 bg-white/10 rounded-lg px-4 py-2 inline-block">
                  {displayWord}
                </p>
              </div>
              <div className="mb-4">
                <span className="text-sm font-medium text-green-100 uppercase tracking-wider">
                  Meaning
                </span>
              </div>

              <p className="text-xl md:text-2xl font-semibold text-white mb-8 break-words">
                {primaryMeaning}
              </p>

              {example && (
                <div className="bg-white/10 rounded-2xl p-6 mb-8">
                  <p className="text-sm text-green-100 mb-2">Example:</p>
                  <p className="text-lg text-white italic mb-2">
                    "{example.shona}"
                  </p>
                  <p className="text-base text-green-100">
                    {example.english}
                  </p>
                </div>
              )}

              <Link
                href={`/word/${encodeURIComponent(word.word)}`}
                onClick={handleLinkClick}
                className="inline-block px-6 py-3 bg-white text-green-600 rounded-full font-medium hover:bg-green-50 transition-colors"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="text-center mt-[10%]">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Scroll for more words
        </p>
      </div>
    </div>
  );
}
