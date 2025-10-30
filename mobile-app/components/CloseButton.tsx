import { TouchableOpacity, View, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CloseButtonProps {
  onPress: () => void;
}

export default function CloseButton({ onPress }: CloseButtonProps) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#d1d5db' : '#1f2937';

  return (
    <View className="absolute left-6 z-10" style={{ top: insets.top + 16 }}>
      <TouchableOpacity 
        onPress={onPress} 
        className="w-11 h-11 items-center justify-center bg-gray-100/90 dark:bg-gray-800/90 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        activeOpacity={0.6}
      >
        <Ionicons name="close" size={24} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
}
