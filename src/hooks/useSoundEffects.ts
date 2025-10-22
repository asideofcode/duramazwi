'use client';

import { useCallback, useRef, useEffect } from 'react';
import { useSoundSettings } from '@/contexts/SoundSettingsContext';

type SoundType = 'correct' | 'incorrect' | 'challenge-complete' | 'challenge-failed';

interface SoundEffectsOptions {
  preload?: boolean;
  onPreloadComplete?: () => void;
  onPreloadError?: (errors: string[]) => void;
}

export const useSoundEffects = (options: SoundEffectsOptions = {}) => {
  const { settings } = useSoundSettings();
  const { preload = true, onPreloadComplete, onPreloadError } = options;

  const audioRefs = useRef<Map<SoundType, HTMLAudioElement>>(new Map());
  const isPlayingRef = useRef<Set<SoundType>>(new Set());

  // Initialize audio objects
  useEffect(() => {
    if (!settings.enabled) return;

    const sounds: SoundType[] = ['correct', 'incorrect', 'challenge-complete', 'challenge-failed'];
    const loadedSounds = new Set<SoundType>();
    const errorSounds: string[] = [];
    
    sounds.forEach(soundType => {
      const audio = new Audio(`/sounds/${soundType}.mp3`);
      audio.volume = settings.volume;
      audio.preload = preload ? 'auto' : 'none';
      
      // Add event listeners for cleanup
      audio.addEventListener('ended', () => {
        isPlayingRef.current.delete(soundType);
      });
      
      // Enhanced preload tracking
      audio.addEventListener('canplaythrough', () => {
        loadedSounds.add(soundType);
        
        // Check if all sounds are loaded
        if (loadedSounds.size === sounds.length && onPreloadComplete) {
          onPreloadComplete();
        }
      });
      
      audio.addEventListener('error', (e) => {
        console.warn(`🎵 Failed to load sound: ${soundType}`, e);
        errorSounds.push(soundType);
        isPlayingRef.current.delete(soundType);
        
        // Check if we've processed all sounds (loaded or errored)
        if (loadedSounds.size + errorSounds.length === sounds.length) {
          if (errorSounds.length > 0 && onPreloadError) {
            onPreloadError(errorSounds);
          } else if (onPreloadComplete) {
            onPreloadComplete();
          }
        }
      });

      audioRefs.current.set(soundType, audio);
    });

    // Cleanup function
    return () => {
      audioRefs.current.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        audio.removeEventListener('ended', () => {});
        audio.removeEventListener('error', () => {});
      });
      audioRefs.current.clear();
      isPlayingRef.current.clear();
    };
  }, [settings.volume, settings.enabled, preload]);

  // Update volume when settings change
  useEffect(() => {
    audioRefs.current.forEach(audio => {
      audio.volume = settings.volume;
    });
  }, [settings.volume]);

  const playSound = useCallback((soundType: SoundType, options?: { delay?: number; stopOthers?: boolean }) => {
    if (!settings.enabled) return;

    const { delay = 0, stopOthers = false } = options || {};

    const executePlay = () => {
      const audio = audioRefs.current.get(soundType);
      if (!audio) return;

      // Stop other sounds if requested
      if (stopOthers) {
        audioRefs.current.forEach((otherAudio, otherType) => {
          if (otherType !== soundType && isPlayingRef.current.has(otherType)) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
            isPlayingRef.current.delete(otherType);
          }
        });
      }

      // Reset and play the sound
      audio.currentTime = 0;
      isPlayingRef.current.add(soundType);
      
      audio.play().catch(error => {
        console.warn(`Failed to play sound: ${soundType}`, error);
        isPlayingRef.current.delete(soundType);
      });
    };

    if (delay > 0) {
      setTimeout(executePlay, delay);
    } else {
      executePlay();
    }
  }, [settings.enabled]);

  const stopSound = useCallback((soundType: SoundType) => {
    const audio = audioRefs.current.get(soundType);
    if (audio && isPlayingRef.current.has(soundType)) {
      audio.pause();
      audio.currentTime = 0;
      isPlayingRef.current.delete(soundType);
    }
  }, []);

  const stopAllSounds = useCallback(() => {
    audioRefs.current.forEach((audio, soundType) => {
      if (isPlayingRef.current.has(soundType)) {
        audio.pause();
        audio.currentTime = 0;
        isPlayingRef.current.delete(soundType);
      }
    });
  }, []);

  const isPlaying = useCallback((soundType: SoundType) => {
    return isPlayingRef.current.has(soundType);
  }, []);

  return {
    playSound,
    stopSound,
    stopAllSounds,
    isPlaying
  };
};
