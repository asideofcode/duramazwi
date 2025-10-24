'use client';

import { useAudioPreload, type AudioPreloadResult } from '@/hooks/useAudioPreload';

interface AudioPlayerWithProgressProps {
  className?: string;
  // Either provide src directly or preload result from hook
  src: string | AudioPreloadResult;
  // Accessibility label for what audio this is
  ariaLabel?: string;
}

export default function AudioPlayerWithProgress({
  className = '',
  src,
  ariaLabel = 'Play audio'
}: AudioPlayerWithProgressProps) {
  // Detect if src is a string or preload result
  const isPreloadResult = typeof src === 'object' && 'loadState' in src;
  
  // Use internal hook only if src is a string
  const internalResult = useAudioPreload(isPreloadResult ? '' : src as string);
  
  // Get the actual values
  const { loadState, isPlaying, play, pause, progress } = isPreloadResult 
    ? (src as AudioPreloadResult)
    : internalResult;



  const handleClick = () => {
    // Always play from beginning, regardless of current state
    play();
  };

  const getAriaLabel = () => {
    if (loadState === 'loading') return `Loading ${ariaLabel}...`;
    if (loadState === 'error') return `Error loading ${ariaLabel}`;
    return ariaLabel;
  };

  return (
    <button
      onClick={handleClick}
      disabled={loadState !== 'loaded'}
      aria-label={getAriaLabel()}
      title={getAriaLabel()}
      aria-describedby={loadState !== 'loaded' ? 'audio-status' : undefined}
      className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg select-none ${
        loadState === 'loaded'
          ? 'bg-blue-500 hover:bg-blue-600 text-white'
          : 'bg-blue-400 text-white cursor-not-allowed'
      } ${className}`}
    >
      {/* Progress ring */}
      {loadState === 'loaded' && (
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 80 80"
        >
          {/* Background circle */}
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="4"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="226.19"
            strokeDashoffset={226.19 * (1 - progress / 100)}
            className="transition-all duration-75 ease-linear"
            style={{
              strokeDashoffset: `${226.19 * (1 - progress / 100)}`,
              transition: 'stroke-dashoffset 0.075s linear'
            }}
          />
        </svg>
      )}

      {/* Play/Loading icon */}
      <div className="relative z-10">
        {loadState === 'loading' ? (
          <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full" aria-hidden="true" />
        ) : loadState === 'error' ? (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M8 5v10l8-5-8-5z" />
          </svg>
        )}
      </div>
      
      {/* Screen reader status */}
      {loadState !== 'loaded' && (
        <span id="audio-status" className="sr-only">
          {loadState === 'loading' ? 'Audio loading...' : 'Audio failed to load'}
        </span>
      )}
    </button>
  );
}
