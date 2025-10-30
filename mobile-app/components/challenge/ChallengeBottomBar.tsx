import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

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
  
  return (
    <View className="absolute bottom-0 left-0 right-0" style={{ bottom: -insets.bottom }}>
      {/* Background container - extends to bottom of screen including safe area */}
      <View className={`${
        hasChecked
          ? isCorrect 
            ? 'bg-green-50 dark:bg-green-900/20' 
            : 'bg-red-50 dark:bg-red-900/20'
          : 'bg-transparent'
      }`}>
        {hasChecked && (
          // Feedback Section - only shown when checked
          <View className="px-6 pt-4 pb-3">
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
          </View>
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
              <Text className={`font-bold text-lg ${
                hasAnswer 
                  ? 'text-white' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                CHECK
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
              <Text className="text-white font-bold text-lg">
                CONTINUE
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
