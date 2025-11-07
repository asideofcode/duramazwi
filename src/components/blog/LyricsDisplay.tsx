'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dataService from '@/services/dataService';

export interface LyricLink {
  word: string;
  url: string;
  tooltip?: string;
}

export interface LyricPair {
  shona: string;
  english: string;
  links?: LyricLink[];
  note?: string;
  displayOrder?: 'shona-first' | 'english-first'; // Default is 'shona-first'
}

export interface LyricSection {
  type: 'section';
  title: string;
}

export interface LyricVerse {
  type: 'verse';
  lines: LyricPair[];
}

export type LyricBlock = LyricSection | LyricVerse;

// Helper function to get word meanings from database using the URL
const getWordMeaningFromUrl = (url: string): string => {
  // Extract word from URL (e.g., '/word/dzidza' -> 'dzidza')
  const word = decodeURIComponent(url.replace('/word/', ''));
  const wordDetails = dataService.getWordDetails(word) as any;
  if (!wordDetails || !Array.isArray(wordDetails) || wordDetails.length === 0) return '';
  
  // Collect all definitions from all meanings
  const definitions: string[] = [];
  wordDetails.forEach((entry: any) => {
    entry.meanings?.forEach((meaning: any) => {
      meaning.definitions?.forEach((def: any) => {
        if (def.definition) {
          definitions.push(def.definition);
        }
      });
    });
  });
  
  // Return first 3 definitions joined with bullets
  return definitions.slice(0, 3).join(' • ');
};

interface LyricsDisplayProps {
  blocks: LyricBlock[];
}

export default function LyricsDisplay({ blocks }: LyricsDisplayProps) {
  const router = useRouter();
  const lastTapTime = useRef<{ [key: string]: number }>({});
  const activeTooltip = useRef<HTMLElement | null>(null);
  
  const hideActiveTooltip = () => {
    if (activeTooltip.current) {
      activeTooltip.current.classList.add('invisible', 'opacity-0');
      activeTooltip.current.classList.remove('visible', 'opacity-100');
      activeTooltip.current = null;
    }
  };

  // Render a single lyric line with links
  const renderLyricLine = (text: string, links: LyricLink[] | undefined, lineKey: string) => {
    if (!links || links.length === 0) {
      return text;
    }

    return (
      <>
        {text.split(' ').map((word, wordIndex) => {
          const link = links.find(l => word.toLowerCase().includes(l.word.toLowerCase()));
          if (link) {
            const tooltip = getWordMeaningFromUrl(link.url);
            return (
              <span key={wordIndex} className="group relative inline-block">
                <Link
                  href={link.url}
                  className="text-blue-600 dark:text-blue-400 hover:underline touch-manipulation"
                  onClick={(e) => {
                    // On desktop, normal click behavior
                    if (!('ontouchstart' in window)) return;
                    
                    // On mobile, prevent default and handle double-tap
                    e.preventDefault();
                    const now = Date.now();
                    const tapKey = `${lineKey}-${wordIndex}`;
                    const lastTap = lastTapTime.current[tapKey] || 0;
                    const timeSinceLastTap = now - lastTap;
                    
                    // Double-tap detected (within 300ms)
                    if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
                      router.push(link.url);
                      lastTapTime.current[tapKey] = 0;
                    } else {
                      lastTapTime.current[tapKey] = now;
                      
                      if (tooltip) {
                        hideActiveTooltip();
                        const target = e.currentTarget.nextElementSibling as HTMLElement;
                        if (target) {
                          const rect = target.getBoundingClientRect();
                          const tooltipWidth = target.offsetWidth;
                          const viewportWidth = window.innerWidth;
                          
                          if (rect.left + tooltipWidth / 2 > viewportWidth - 20) {
                            target.classList.remove('left-1/2', '-translate-x-1/2');
                            target.classList.add('right-0');
                          } else if (rect.left - tooltipWidth / 2 < 20) {
                            target.classList.remove('left-1/2', '-translate-x-1/2');
                            target.classList.add('left-0');
                          }
                          
                          target.classList.remove('invisible', 'opacity-0');
                          target.classList.add('visible', 'opacity-100');
                          activeTooltip.current = target;
                          
                          setTimeout(() => {
                            if (activeTooltip.current === target) {
                              target.classList.add('invisible', 'opacity-0');
                              target.classList.remove('visible', 'opacity-100');
                              target.classList.remove('right-0', 'left-0');
                              target.classList.add('left-1/2', '-translate-x-1/2');
                              activeTooltip.current = null;
                            }
                          }, 3000);
                        }
                      }
                    }
                  }}
                >
                  {word}
                </Link>
                {tooltip && (
                  <span className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none min-w-[200px] max-w-sm whitespace-normal">
                    {tooltip}
                    <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></span>
                  </span>
                )}
              </span>
            );
          }
          return <span key={wordIndex}>{word}</span>;
        }).reduce((prev, curr, i) => [prev, ' ', curr] as any)}
      </>
    );
  };

  return (
    <div className="space-y-4">
      {blocks.map((block, blockIndex) => {
        if (block.type === 'section') {
          return (
            <div key={blockIndex} className="mt-8 mb-4">
              <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                {block.title}
              </h3>
            </div>
          );
        }

        // Verse block
        return (
          <div key={blockIndex} className="space-y-4">
            {block.lines.map((pair, pairIndex) => {
              const isEnglishFirst = pair.displayOrder === 'english-first';
              
              return (
                <div
                  key={pairIndex}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col gap-2">
                    {isEnglishFirst ? (
                      <>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          🎶 {pair.english}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                          "{renderLyricLine(pair.shona, pair.links, `${blockIndex}-${pairIndex}`)}
                          {pair.note && (
                            <span className="ml-2 text-sm font-normal text-blue-600 dark:text-blue-400">
                              [{pair.note}]
                            </span>
                          )}"
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          🎶 {renderLyricLine(pair.shona, pair.links, `${blockIndex}-${pairIndex}`)}
                          {pair.note && (
                            <span className="ml-2 text-sm font-normal text-blue-600 dark:text-blue-400">
                              [{pair.note}]
                            </span>
                          )}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                          "{pair.english}"
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
