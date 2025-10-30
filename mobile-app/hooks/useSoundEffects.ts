import { useEffect, useState, useRef } from 'react';
import { useAudioPlayer } from 'expo-audio';

// Local sound assets - much more reliable than remote URLs!
const SOUND_ASSETS = {
  correct: require('@/assets/sounds/correct.mp3'),
  incorrect: require('@/assets/sounds/incorrect.mp3'),
  completion: require('@/assets/sounds/challenge-complete.mp3'),
};

export function useSoundEffects() {
  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // Create audio players for each sound using local assets
  const correctPlayer = useAudioPlayer(SOUND_ASSETS.correct);
  const incorrectPlayer = useAudioPlayer(SOUND_ASSETS.incorrect);
  const completionPlayer = useAudioPlayer(SOUND_ASSETS.completion);

  // Track if sounds are loaded
  const soundsLoadedRef = useRef(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    // Check if all sounds are loaded
    const checkLoaded = () => {
      if (soundsLoadedRef.current) return; // Already loaded, stop checking
      
      const correctLoaded = correctPlayer.duration > 0;
      const incorrectLoaded = incorrectPlayer.duration > 0;
      const completionLoaded = completionPlayer.duration > 0;
      
      console.log('Sound loading status:', {
        correct: correctLoaded ? `${correctPlayer.duration}s` : 'loading...',
        incorrect: incorrectLoaded ? `${incorrectPlayer.duration}s` : 'loading...',
        completion: completionLoaded ? `${completionPlayer.duration}s` : 'loading...',
      });

      const allLoaded = correctLoaded && incorrectLoaded && completionLoaded;

      if (allLoaded) {
        soundsLoadedRef.current = true;
        setIsReady(true);
        console.log('✅ Sound effects loaded and ready');
        if (interval) clearInterval(interval); // Stop checking once loaded
      }
    };

    // Check periodically
    interval = setInterval(checkLoaded, 500);
    
    // Timeout after 10 seconds (give more time)
    const timeout = setTimeout(() => {
      if (!soundsLoadedRef.current) {
        console.warn('⚠️ Sound effects failed to load after 10s');
        console.warn('Using local assets:', Object.keys(SOUND_ASSETS));
        console.warn('Durations:', {
          correct: correctPlayer.duration,
          incorrect: incorrectPlayer.duration,
          completion: completionPlayer.duration,
        });
        setIsReady(true);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const playCorrect = async () => {
    if (isMuted || !isReady) return;
    
    try {
      correctPlayer.seekTo(0);
      correctPlayer.play();
    } catch (error) {
      console.error('Error playing correct sound:', error);
    }
  };

  const playIncorrect = async () => {
    if (isMuted || !isReady) return;
    
    try {
      incorrectPlayer.seekTo(0);
      incorrectPlayer.play();
    } catch (error) {
      console.error('Error playing incorrect sound:', error);
    }
  };

  const playCompletion = async () => {
    if (isMuted || !isReady) return;
    
    try {
      completionPlayer.seekTo(0);
      completionPlayer.play();
    } catch (error) {
      console.error('Error playing completion sound:', error);
    }
  };

  return {
    playCorrect,
    playIncorrect,
    playCompletion,
    isReady,
    isMuted,
    setIsMuted,
  };
}
