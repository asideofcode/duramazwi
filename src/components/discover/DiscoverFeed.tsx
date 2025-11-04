'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import { List, ListImperativeAPI } from 'react-window';
// @ts-ignore - react-window-infinite-loader has incomplete TypeScript definitions  
import { InfiniteLoader } from 'react-window-infinite-loader';
import WordCard from './WordCard';
import dataService from '@/services/dataService';

// Custom outer element with snap scrolling
const OuterElement = forwardRef<HTMLDivElement, any>((props, ref) => (
  <div
    ref={ref}
    {...props}
    style={{
      ...(props.style || {}),
      scrollSnapType: 'y mandatory',
    }}
    className="snap-y snap-mandatory"
  />
));
OuterElement.displayName = 'OuterElement';

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
  const [loadedRowCount, setLoadedRowCount] = useState(10);
  const listRef = useRef<ListImperativeAPI>(null);
  const isLoadingRef = useRef(false);

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
      
      // Initialize
      setLoadedRowCount(10);
      setLoading(false);
    } catch (error) {
      console.error('Error loading words:', error);
      setLoading(false);
    }
  }, []);

  // Check if a row is loaded
  const isRowLoaded = (index: number) => index < loadedRowCount;

  // Load more rows
  const loadMoreRows = (startIndex: number, stopIndex: number): Promise<void> => {
    // Prevent multiple simultaneous loads
    if (isLoadingRef.current) {
      console.log('⏸️ Already loading, skipping...');
      return Promise.resolve();
    }
    
    // Don't load if we've already loaded everything
    if (loadedRowCount >= allWords.length) {
      console.log('✅ All words loaded');
      return Promise.resolve();
    }
    
    console.log('🔄 Loading rows', startIndex, 'to', stopIndex, '| Currently loaded:', loadedRowCount, '/', allWords.length);
    
    isLoadingRef.current = true;
    
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoadedRowCount((prev) => {
          const newCount = Math.min(prev + 10, allWords.length);
          console.log('📊 Updated loaded count:', newCount);
          return newCount;
        });
        isLoadingRef.current = false;
        resolve();
      }, 300);
    });
  };

  // Row renderer
  const Row = ({ index, style }: RowProps) => {
    if (!isRowLoaded(index)) {
      return (
        <div style={{ ...style, scrollSnapAlign: 'start' }} className="flex justify-center px-4 py-8">
          <div className="w-full max-w-2xl h-[60vh] bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse" />
        </div>
      );
    }

    const word = allWords[index];
    return (
      <div style={{ ...style, scrollSnapAlign: 'start' }} className="flex justify-center">
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
    <div 
      className="w-full min-h-screen overflow-x-hidden"
    >
      {/* @ts-ignore */}
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={rowCount}
        threshold={3}
        minimumBatchSize={10}
      >
        {({ onRowsRendered: infiniteLoaderCallback }) => (
          <List
            listRef={listRef}
            defaultHeight={height}
            rowCount={rowCount}
            rowHeight={itemSize}
            rowComponent={Row}
            rowProps={{} as any}
            onRowsRendered={(visibleRows, allRows) => {
              // Only trigger if we haven't loaded everything
              if (loadedRowCount < allWords.length) {
                infiniteLoaderCallback({
                  startIndex: allRows.startIndex,
                  stopIndex: allRows.stopIndex,
                });
              }
            }}
            style={{ height, scrollSnapType: 'y mandatory' }}
          />
        )}
      </InfiniteLoader>

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
