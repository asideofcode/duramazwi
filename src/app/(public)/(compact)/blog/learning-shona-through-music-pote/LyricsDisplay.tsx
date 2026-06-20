'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dataService from '@/services/dataService';
import InlineIcon from '@/components/InlineIcon';

interface LyricLine {
  text: string;
  isShona: boolean;
  note?: string;
  links?: Array<{ word: string; url: string; tooltip?: string }>;
}

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
  lyrics: LyricLine[];
}

export default function LyricsDisplay({ lyrics }: LyricsDisplayProps) {
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
  
  return (
    <div className="space-y-4">
      {lyrics.map((line, index) => {
        // Skip even indices (translations in parentheses)
        if (index % 2 !== 0) return null;
        
        const translation = lyrics[index + 1];
        
        return (
          <div 
            key={index}
            className="bg-[var(--color-surface-raised)] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[var(--color-border)]"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-[var(--color-text)]">
                <InlineIcon className="mr-2 inline-block h-5 w-5 text-[var(--color-accent)]" name="music" />
                {line.links ? (
                  <>
                    {line.text.split(' ').map((word, wordIndex) => {
                      const link = line.links?.find(l => word.toLowerCase().includes(l.word.toLowerCase()));
                      if (link) {
                        const tooltip = getWordMeaningFromUrl(link.url);
                        return (
                          <span key={wordIndex} className="group relative inline-block">
                            <Link
                              href={link.url}
                              className="text-[var(--color-primary)] hover:underline touch-manipulation"
                              onClick={(e) => {
                                // On desktop, normal click behavior
                                if (!('ontouchstart' in window)) return;
                                
                                // On mobile, prevent default and handle double-tap
                                e.preventDefault();
                                const now = Date.now();
                                const tapKey = `${index}-${wordIndex}`;
                                const lastTap = lastTapTime.current[tapKey] || 0;
                                const timeSinceLastTap = now - lastTap;
                                
                                // Double-tap detected (within 300ms)
                                if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
                                  // Navigate on double-tap
                                  router.push(link.url);
                                  lastTapTime.current[tapKey] = 0; // Reset
                                } else {
                                  // Single tap - show tooltip
                                  lastTapTime.current[tapKey] = now;
                                  
                                  if (tooltip) {
                                    // Hide any currently active tooltip
                                    hideActiveTooltip();
                                    
                                    const target = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (target) {
                                      // Position tooltip within viewport
                                      const rect = target.getBoundingClientRect();
                                      const tooltipWidth = target.offsetWidth;
                                      const viewportWidth = window.innerWidth;
                                      
                                      // Check if tooltip would overflow on the right
                                      if (rect.left + tooltipWidth / 2 > viewportWidth - 20) {
                                        target.classList.remove('left-1/2', '-translate-x-1/2');
                                        target.classList.add('right-0');
                                      }
                                      // Check if tooltip would overflow on the left
                                      else if (rect.left - tooltipWidth / 2 < 20) {
                                        target.classList.remove('left-1/2', '-translate-x-1/2');
                                        target.classList.add('left-0');
                                      }
                                      
                                      target.classList.remove('invisible', 'opacity-0');
                                      target.classList.add('visible', 'opacity-100');
                                      activeTooltip.current = target;
                                      
                                      // Hide after 3 seconds
                                      setTimeout(() => {
                                        if (activeTooltip.current === target) {
                                          target.classList.add('invisible', 'opacity-0');
                                          target.classList.remove('visible', 'opacity-100');
                                          // Reset positioning classes
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
                              <span className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 text-sm text-[var(--color-hero-text)] bg-[var(--color-primary)] rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none min-w-[200px] max-w-sm whitespace-normal">
                                {tooltip}
                                <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[var(--color-primary)]"></span>
                              </span>
                            )}
                          </span>
                        );
                      }
                      return <span key={wordIndex}>{word}</span>;
                    }).reduce((prev, curr, i) => [prev, ' ', curr] as any)}
                  </>
                ) : line.text}
                {line.note && (
                  <span className="ml-2 text-sm font-normal text-[var(--color-primary)]">
                    [{line.note}]
                  </span>
                )}
              </p>
              {translation && (
                <p className="text-lg text-[var(--color-muted)] italic">
                  "{translation.text}"
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
