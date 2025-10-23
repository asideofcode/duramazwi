import { useState, useEffect, useRef } from 'react';

export type AudioLoadState = 'loading' | 'loaded' | 'error';

export interface AudioPreloadResult {
  src: string;
  loadState: AudioLoadState;
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  play: () => Promise<void>;
  pause: () => void;
  progress: number; // 0-100 percentage
}

export function useAudioPreload(src: string): AudioPreloadResult {
  const [loadState, setLoadState] = useState<AudioLoadState>('loading');
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!src) {
      setLoadState('error');
      return;
    }

    setLoadState('loading');

    const audio = new Audio();
    audioRef.current = audio;
    
    const handleLoadedMetadata = () => {
      setLoadState('loaded');
      setDuration(audio.duration);
    };

    const handleCanPlay = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleDurationChange = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleError = () => {
      setLoadState('error');
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('error', handleError);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    
    audio.src = src;
    audio.preload = 'auto';

    // Cleanup
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const play = async () => {
    if (audioRef.current && loadState === 'loaded') {
      try {
        // Always restart from beginning
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        console.error('Failed to play audio:', error);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const progress = duration > 0 && !isNaN(duration) ? (currentTime / duration) * 100 : 0;

  return {
    src,
    loadState,
    duration,
    currentTime,
    isPlaying,
    play,
    pause,
    progress
  };
}
