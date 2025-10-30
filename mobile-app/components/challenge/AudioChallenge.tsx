import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAudioPlayer } from 'expo-audio';
import Svg, { Circle } from 'react-native-svg';
import { Challenge } from '@/types/challenge';

interface AudioChallengeProps {
  challenge: Challenge;
  selectedAnswer: string | null;
  onAnswerChange: (answer: string | null) => void;
  hasChecked: boolean;
  isCorrect: boolean | null;
}

export default function AudioChallenge({ 
  challenge, 
  selectedAnswer,
  onAnswerChange,
  hasChecked,
  isCorrect
}: AudioChallengeProps) {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  // Use the new expo-audio hook
  const player = useAudioPlayer(challenge.audioUrl || '');

  // Monitor player state
  useEffect(() => {
    if (!challenge.audioUrl) {
      setLoadError(true);
      setIsLoading(false);
      return;
    }

    console.log('Loading audio from:', challenge.audioUrl);
    let hasLoaded = false;

    // Check if player is ready
    const checkReady = () => {
      try {
        if (!hasLoaded && player.duration > 0) {
          console.log('Audio loaded successfully, duration:', player.duration);
          hasLoaded = true;
          setIsLoading(false);
          setLoadError(false);
        }
      } catch (error) {
        console.error('Error checking audio status:', error);
      }
    };

    // Set up a timeout to detect loading failures
    const timeout = setTimeout(() => {
      if (!hasLoaded) {
        console.error('Audio failed to load (timeout)');
        console.error('Audio URL:', challenge.audioUrl);
        setLoadError(true);
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout

    // Check periodically if audio is ready
    const interval = setInterval(checkReady, 100);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [challenge.audioUrl]); // Remove player.duration from dependencies!

  // Track playback progress
  useEffect(() => {
    if (!player.playing || player.duration === 0) {
      // Reset progress when not playing
      if (!player.playing && playbackProgress > 0) {
        setPlaybackProgress(0);
      }
      return;
    }

    const interval = setInterval(() => {
      const progress = (player.currentTime / player.duration) * 100;
      setPlaybackProgress(progress);

      // Reset when playback finishes
      if (progress >= 99) {
        setPlaybackProgress(0);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [player.playing, player.currentTime, player.duration, playbackProgress]);

  const handlePlay = () => {
    try {
      // Always restart from beginning
      player.seekTo(0);
      setPlaybackProgress(0); // Reset progress before playing
      player.play();
      setHasPlayedOnce(true);
    } catch (error) {
      console.error('Error playing audio:', error);
      setLoadError(true);
    }
  };

  const handleSelectAnswer = (answer: string) => {
    if (hasChecked) return;
    onAnswerChange(answer);
  };

  // Debug logging
  useEffect(() => {
    console.log('AudioChallenge - Challenge data:', {
      hasOptions: !!challenge.options,
      optionsCount: challenge.options?.length || 0,
      audioUrl: challenge.audioUrl,
      correctAnswer: challenge.correctAnswer
    });
  }, []);

  return (
    <View className="flex-1">
      <ScrollView className="px-6 py-8" contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Question */}
      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-8 leading-8">
        {challenge.question}
      </Text>

      {/* Audio Player */}
      <View className="mb-10 items-center">
        {/* Progress Circle with SVG */}
        <View className="relative w-32 h-32 items-center justify-center">
          {/* SVG Progress Circle */}
          <Svg width={128} height={128} style={{ position: 'absolute' }}>
            {/* Background Circle */}
            <Circle
              cx="64"
              cy="64"
              r="60"
              stroke="#d1d5db"
              strokeWidth="4"
              fill="none"
            />
            {/* Progress Circle */}
            {playbackProgress > 0 && (
              <Circle
                cx="64"
                cy="64"
                r="60"
                stroke="#3b82f6"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 60}`}
                strokeDashoffset={`${2 * Math.PI * 60 * (1 - playbackProgress / 100)}`}
                strokeLinecap="round"
                rotation="-90"
                origin="64, 64"
              />
            )}
          </Svg>
          
          {/* Play Button */}
          <TouchableOpacity
            onPress={handlePlay}
            disabled={isLoading || loadError}
            className={`w-24 h-24 rounded-full items-center justify-center ${
              isLoading
                ? 'bg-gray-300 dark:bg-gray-700'
                : loadError
                ? 'bg-red-400 dark:bg-red-600'
                : 'bg-blue-500'
            }`}
            style={{ elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }}
          >
            {isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : loadError ? (
              <Ionicons name="close" size={48} color="white" />
            ) : (
              <Ionicons
                name="play"
                size={48}
                color="white"
                style={{ marginLeft: 4 }}
              />
            )}
          </TouchableOpacity>
        </View>

        {/* Reserve space for text to prevent jumping */}
        <View style={{ height: 32, marginTop: 24 }}>
          {!hasPlayedOnce && !isLoading && !loadError && (
            <Text className="text-base text-gray-600 dark:text-gray-400 text-center font-medium">
              🎧 Tap to listen
            </Text>
          )}
        </View>
        
        {loadError && (
          <View className="mt-6 bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
            <Text className="text-red-600 dark:text-red-400 text-center font-medium mb-2">
              ⚠️ Audio failed to load
            </Text>
            <Text className="text-red-500 dark:text-red-300 text-base text-center">
              WebM format may not be supported. Try answering based on the options below.
            </Text>
          </View>
        )}
      </View>

      {/* Options */}
      <View className="mb-8">
        {challenge.options?.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const showCorrect = hasChecked && option === challenge.correctAnswer;
          const showIncorrect = hasChecked && isSelected && !isCorrect;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectAnswer(option)}
              disabled={hasChecked}
              className={`p-6 rounded-xl border-2 mb-4 ${
                showCorrect
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : showIncorrect
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : isSelected
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              }`}
              style={{ minHeight: 60 }}
            >
              <View className="flex-row items-center justify-between">
                <Text
                  className={`flex-1 text-lg leading-6 ${
                    showCorrect
                      ? 'text-green-700 dark:text-green-300 font-semibold'
                      : showIncorrect
                      ? 'text-red-700 dark:text-red-300 font-semibold'
                      : isSelected
                      ? 'text-blue-700 dark:text-blue-300 font-semibold'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {option}
                </Text>
                
                {showCorrect && (
                  <Ionicons name="checkmark-circle" size={24} color="#10b981" />
                )}
                {showIncorrect && (
                  <Ionicons name="close-circle" size={24} color="#ef4444" />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      </ScrollView>
      {/* Bottom bar now managed by session */}
    </View>
  );
}
