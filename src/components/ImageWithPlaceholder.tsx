'use client';

import { useImagePreload, type ImagePreloadResult } from '@/hooks/useImagePreload';

interface ImageWithPlaceholderProps {
  alt: string;
  className?: string;
  placeholderClassName?: string;
  fallbackIcon?: React.ReactNode;
  // Smart src prop - accepts either string or preload result
  src: string | ImagePreloadResult;
}

export default function ImageWithPlaceholder({
  alt,
  className = '',
  placeholderClassName = '',
  fallbackIcon = '🎯',
  src
}: ImageWithPlaceholderProps) {
  // Detect if src is a string or preload result
  const isPreloadResult = typeof src === 'object' && 'loadState' in src;
  
  // Use internal hook only if src is a string
  const internalResult = useImagePreload(isPreloadResult ? '' : src as string);
  
  // Get the actual values
  const { src: imageSrc, loadState } = isPreloadResult 
    ? (src as ImagePreloadResult)
    : internalResult;

  return (
    <div className="relative">
      {/* Placeholder - crossfades out when image loads */}
      <div className={`rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-opacity duration-500 ${
        loadState === 'loaded' ? 'opacity-0' : 'opacity-100'
      } ${loadState === 'loading' ? 'animate-pulse' : ''} ${placeholderClassName}`}>
        {loadState === 'loading' ? (
          <div className="text-gray-400 dark:text-gray-500">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        ) : loadState === 'error' ? (
          <div className="text-4xl">
            {fallbackIcon}
          </div>
        ) : null}
      </div>

      {/* Actual image - crossfades in when loaded */}
      {loadState === 'loaded' && (
        <img
          src={imageSrc}
          alt={alt}
          className={`absolute top-0 left-0 rounded-lg transition-opacity duration-500 opacity-100 ${className}`}
        />
      )}
    </div>
  );
}
