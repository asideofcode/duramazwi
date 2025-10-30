import { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAudioPlayer } from 'expo-audio';

interface AudioPlayerButtonProps {
  audioUrl?: string;
  size?: number;
  color?: string;
}

export default function AudioPlayerButton({ 
  audioUrl, 
  size = 32,
  color = '#3b82f6'
}: AudioPlayerButtonProps) {
  const [loadError, setLoadError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Create player - don't wait for duration, just create it
  const player = useAudioPlayer(audioUrl || '');

  // Log player creation
  useEffect(() => {
    console.log('🎵 AudioPlayerButton mounted, player:', {
      hasPlayer: !!player,
      audioUrl,
      playerPlaying: player?.playing,
      playerDuration: player?.duration
    });
  }, []);

  // Simple approach - just assume it's ready and let play() handle errors
  useEffect(() => {
    if (!audioUrl) {
      setLoadError(true);
      return;
    }
    console.log('AudioPlayerButton URL changed to:', audioUrl);
  }, [audioUrl]);

  // Monitor playing state
  useEffect(() => {
    setIsPlaying(player.playing);
  }, [player.playing]);

  const handlePlayAudio = () => {
    if (loadError) {
      console.log('Cannot play - loadError:', loadError);
      return;
    }

    console.log('Attempting to play audio:', audioUrl);
    console.log('Player state:', { playing: player.playing, duration: player.duration });

    try {
      if (player.playing) {
        console.log('Pausing audio');
        player.pause();
      } else {
        console.log('Playing audio');
        // Seek to start and play (like AudioChallenge does)
        player.seekTo(0);
        player.play();
        console.log('Audio play started successfully');
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      console.error('Audio URL:', audioUrl);
      setLoadError(true);
    }
  };

  // Don't render if no audio URL
  if (!audioUrl) {
    return null;
  }

  // Show error state
  if (loadError) {
    return (
      <View className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center">
        <Ionicons name="volume-mute" size={size * 0.6} color="#9ca3af" />
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={handlePlayAudio}
      className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center active:opacity-70"
      activeOpacity={0.7}
    >
      <Ionicons 
        name={isPlaying ? "pause" : "play"} 
        size={size * 0.6} 
        color={color} 
      />
    </TouchableOpacity>
  );
}
