'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import WordCard from './WordCard';
import dataService from '@/services/dataService';

interface DictionaryEntry {
  word: string;
  meanings?: Array<{
    meaning: string;
    examples?: string[];
  }>;
  pronunciation?: string;
  audio?: string;
}

export default function DiscoverFeed() {
  const [words, setWords] = useState<DictionaryEntry[]>([]);
  const [allWords, setAllWords] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Load all words on mount
  useEffect(() => {
    try {
      // Get all data from service
      const allData = dataService.getAllWords();
      
      // Get full entries for each word
      const entries = allData
        .map(word => {
          const details = dataService.getWordDetails(word);
          return details ? details[0] : null;
        })
        .filter((entry): entry is DictionaryEntry => entry !== null);
      
      // Shuffle words for randomization
      const shuffled = [...entries].sort(() => Math.random() - 0.5);
      setAllWords(shuffled);
      
      // Initialize with first 10 words for smoother experience
      setWords(shuffled.slice(0, 10));
      setCurrentIndex(10);
      setLoading(false);
    } catch (error) {
      console.error('Error loading words:', error);
      setLoading(false);
    }
  }, []);

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    if (!observerTarget.current || allWords.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Observer triggered:', {
          isIntersecting: entries[0].isIntersecting,
          currentIndex,
          totalWords: allWords.length,
          wordsDisplayed: words.length
        });
        
        if (entries[0].isIntersecting && currentIndex < allWords.length) {
          console.log('🔄 Loading more words! Adding 10 more from index:', currentIndex);
          // Load next batch of 10 words
          setWords(prev => [...prev, ...allWords.slice(currentIndex, currentIndex + 10)]);
          setCurrentIndex(prev => prev + 10);
        }
      },
      {
        root: null,
        rootMargin: '2400px', // Trigger ~3 screens before reaching the target
        threshold: 0.1,
      }
    );

    observer.observe(observerTarget.current);

    return () => {
      observer.disconnect();
    };
  }, [allWords, currentIndex]);

  // Track word views with Intersection Observer
  useEffect(() => {
    if (words.length === 0) return;

    const viewObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const wordElement = entry.target as HTMLElement;
            const wordId = wordElement.dataset.wordId;
            const word = words.find(w => w.word === wordId);
            
            if (word && typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'word_view', {
                word: word.word,
                word_id: word.word,
                engagement_type: 'discover_scroll',
              });
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    // Observe all word cards
    const cards = document.querySelectorAll('[data-word-id]');
    cards.forEach((card: Element) => viewObserver.observe(card));

    return () => {
      viewObserver.disconnect();
    };
  }, [words]);

  // Apply scroll-snap to html element
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y mandatory';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    return () => {
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading words...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Word cards */}
      {words.map((word, index) => (
        <div key={`${word.word}-${index}`}>
          <div
            data-word-id={word.word}
            className="h-screen w-full snap-start snap-always flex items-center justify-center"
            style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
          >
            <WordCard word={word} />
          </div>
          
          {/* Place observer target 3 cards before the end */}
          {index === words.length - 4 && (
            <div ref={observerTarget} className="h-1" />
          )}
        </div>
      ))}

      {/* Scroll hint - hide after first scroll */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-50 hover:opacity-0 transition-opacity">
        <div className="animate-bounce bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
