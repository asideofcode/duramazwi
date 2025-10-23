import { useState, useEffect } from 'react';

export type ImageLoadState = 'loading' | 'loaded' | 'error';

export interface ImagePreloadResult {
  src: string;
  loadState: ImageLoadState;
}

export function useImagePreload(src: string): ImagePreloadResult {
  const [loadState, setLoadState] = useState<ImageLoadState>('loading');

  useEffect(() => {
    if (!src) {
      setLoadState('error');
      return;
    }

    setLoadState('loading');

    const img = new Image();
    
    const handleLoad = () => {
      setLoadState('loaded');
    };

    const handleError = () => {
      setLoadState('error');
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    img.src = src;

    // Cleanup
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  return { src, loadState };
}
