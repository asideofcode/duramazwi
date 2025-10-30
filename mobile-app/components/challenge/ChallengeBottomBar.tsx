import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';

interface ChallengeBottomBarProps {
  hasAnswer: boolean;
  hasChecked: boolean;
  isCorrect: boolean | null;
  explanation?: string;
  onCheck: () => void;
  onContinue: () => void;
}

export default function ChallengeBottomBar({
  hasAnswer,
  hasChecked,
  isCorrect,
  explanation,
  onCheck,
  onContinue,
}: ChallengeBottomBarProps) {
  const insets = useSafeAreaInsets();
  const feedbackHeight = useRef(new Animated.Value(0)).current;
  const feedbackOpacity = useRef(new Animated.Value(0)).current;

  // Animate feedback appearance
  useEffect(() => {
    if (hasChecked) {
      Animated.parallel([
        Animated.spring(feedbackHeight, {
          toValue: 1,
          useNativeDriver: false,
          tension: 80,
          friction: 10,
        }),
        Animated.timing(feedbackOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false, // Changed to false to match feedbackHeight
        }),
      ]).start();
    } else {
      feedbackHeight.setValue(0);
      feedbackOpacity.setValue(0);
    }
  }, [hasChecked]);
  
  return (
    <View className="absolute bottom-0 left-0 right-0" style={{ bottom: -insets.bottom }}>
      {/* Background container - extends to bottom of screen including safe area */}
      <View className={`${
        hasChecked
          ? isCorrect 
            ? 'bg-green-50 dark:bg-green-950' 
            : 'bg-red-50 dark:bg-red-950'
          : 'bg-white dark:bg-gray-900'
      }`}>
        {hasChecked && (
          // Feedback Section - animated appearance
          <Animated.View 
            className="px-6 pt-4 pb-3"
            style={{
              opacity: feedbackOpacity,
              maxHeight: feedbackHeight.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            }}
          >
            <View className="flex-row items-start mb-2">
              <Ionicons 
                name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                size={24} 
                color={isCorrect ? '#10b981' : '#ef4444'} 
                style={{ marginRight: 8 }} 
              />
              <Text className={`font-bold text-lg ${
                isCorrect 
                  ? 'text-green-900 dark:text-green-300' 
                  : 'text-red-900 dark:text-red-300'
              }`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </Text>
            </View>
            {explanation && (
              <Text className={`text-base leading-6 ${
                isCorrect 
                  ? 'text-green-800 dark:text-green-200' 
                  : 'text-red-800 dark:text-red-200'
              }`}>
                {explanation}
              </Text>
            )}
          </Animated.View>
        )}
        
        {/* Button - always shown */}
        <View className="px-6" style={{ paddingBottom: Math.max(insets.bottom, 16) }}>
          {!hasChecked ? (
            <TouchableOpacity
              onPress={onCheck}
              disabled={!hasAnswer}
              activeOpacity={hasAnswer ? 0.7 : 1}
              className={`py-5 rounded-2xl items-center w-full ${
                hasAnswer 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
            >
              <Text className={`font-semibold text-lg ${
                hasAnswer 
                  ? 'text-white' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                Check
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={onContinue}
              activeOpacity={0.7}
              className={`py-5 rounded-2xl items-center w-full ${
                isCorrect 
                  ? 'bg-green-600' 
                  : 'bg-red-600'
              }`}
            >
              <Text className="text-white font-semibold text-lg">
                Continue
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
