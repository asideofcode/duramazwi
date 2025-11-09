import { useState, useEffect, useRef } from 'react';
import { json } from 'stream/consumers';

export type AudioLoadState = 'loading' | 'loaded' | 'error';

const safeLog = (...rest) => {
  if (process.env.NODE_ENV != 'production') {
    console.log(...rest)
  }
}

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
      safeLog('🚨 Audio Error: No src provided');
      setLoadState('error');
      return;
    }

    safeLog(`🎵 Loading audio: ${src}`);
    setLoadState('loading');

    const audio = new Audio();
    audioRef.current = audio;
    
    const handleLoadedMetadata = () => {
      safeLog(`✅ Metadata loaded! Duration: ${audio.duration}s`);
      setLoadState('loaded');
      // Only set duration if it's valid
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      } else {
        safeLog(`⚠️ Invalid duration: ${audio.duration}`);
      }
    };

    const handleCanPlay = () => {
      safeLog(`▶️ Can play! Duration: ${audio.duration}s`);
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleDurationChange = () => {
      safeLog(`⏱️ Duration changed: ${audio.duration}s`);
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleError = (e) => {
      const error = e.currentTarget.error;
      const errorDetails = {
        code: error?.code,
        message: error?.message,
        src: src,
        networkState: audio.networkState,
        readyState: audio.readyState
      };
      safeLog(`❌ Audio Error:\n${JSON.stringify(errorDetails, null, 2)}`);
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
