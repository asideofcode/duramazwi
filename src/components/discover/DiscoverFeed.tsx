'use client';

import { useState, useEffect, useRef } from 'react';
import { List, ListImperativeAPI } from 'react-window';
import WordCard from './WordCard';
import dataService from '@/services/dataService';

// Type for row renderer props
interface RowProps {
  index: number;
  style: React.CSSProperties;
}

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
  const [allWords, setAllWords] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const listRef = useRef<ListImperativeAPI>(null);

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
      
      // All data loaded
      setLoading(false);
    } catch (error) {
      console.error('Error loading words:', error);
      setLoading(false);
    }
  }, []);

  // Track user touch state and scroll behavior
  const isTouchingRef = useRef(false);
  const lastVisibleIndexRef = useRef(0);
  const scrollCountSinceTouchRef = useRef(0);

  // Attach touch and scroll listeners
  useEffect(() => {
    const timer = setTimeout(() => {
      const listElement = listRef.current?.element;
      if (!listElement) return;

      const handleTouchStart = () => {
        isTouchingRef.current = true;
        scrollCountSinceTouchRef.current = 0;
      };

      const handleTouchEnd = () => {
        isTouchingRef.current = false;
        scrollCountSinceTouchRef.current = 0;
      };

      listElement.addEventListener('touchstart', handleTouchStart);
      listElement.addEventListener('touchend', handleTouchEnd);
      listElement.addEventListener('touchcancel', handleTouchEnd);
      
      return () => {
        listElement.removeEventListener('touchstart', handleTouchStart);
        listElement.removeEventListener('touchend', handleTouchEnd);
        listElement.removeEventListener('touchcancel', handleTouchEnd);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [allWords.length]);

  // Row renderer
  const Row = ({ index, style }: RowProps) => {
    const word = allWords[index];
    return (
      <div 
        style={{ 
          ...style, 
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always' // Prevent snap from continuing past this item
        }} 
        className="flex justify-center"
      >
        <WordCard word={word} />
      </div>
    );
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading words...</p>
        </div>
      </div>
    );
  }

  const rowCount = allWords.length;
  const height = typeof window !== 'undefined' ? window.innerHeight : 800;
  const itemSize = height; // Each item takes full viewport height

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <List
        listRef={listRef}
        defaultHeight={height}
        rowCount={rowCount}
        rowHeight={itemSize}
        rowComponent={Row}
        rowProps={{} as any}
        onRowsRendered={(visibleRows) => {
          const currentIndex = visibleRows.startIndex;
          
          // If not touching and index changed, increment counter
          if (!isTouchingRef.current && currentIndex !== lastVisibleIndexRef.current) {
            scrollCountSinceTouchRef.current++;
            
            // If we've scrolled through more than 2 cards without touch, disable snap to stop runaway
            if (scrollCountSinceTouchRef.current > 2) {
              const listElement = listRef.current?.element;
              if (listElement) {
                // Disable scroll-snap to stop momentum
                listElement.style.scrollSnapType = 'none';
                
                // Re-enable after scroll settles
                setTimeout(() => {
                  listElement.style.scrollSnapType = 'y mandatory';
                }, 100);
              }
              scrollCountSinceTouchRef.current = 0;
            }
          }
          
          lastVisibleIndexRef.current = currentIndex;
        }}
        style={{ height, scrollSnapType: 'y mandatory' }}
      />

      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-50 transition-opacity">
        <div className="animate-bounce bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
