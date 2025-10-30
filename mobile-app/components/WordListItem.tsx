import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface WordListItemProps {
  wordDetail: {
    word: string;
    meanings?: Array<{
      partOfSpeech: string;
      definitions: Array<{
        definition: string;
        examples?: Array<{
          shona: string;
          english: string;
        }>;
      }>;
    }>;
  };
}

export default function WordListItem({ wordDetail }: WordListItemProps) {
  const router = useRouter();
  const firstMeaning = wordDetail?.meanings?.[0];
  const firstDefinition = firstMeaning?.definitions?.[0];

  const handlePress = () => {
    router.push(`/word/${encodeURIComponent(wordDetail.word)}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="px-6 py-5 border-b border-gray-200 dark:border-gray-700"
    >
      <View className="flex-row items-center mb-2">
        <Text className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
          {wordDetail.word}
        </Text>
        {firstMeaning && (
          <View className="ml-3 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
            <Text className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase">
              {firstMeaning.partOfSpeech}
            </Text>
          </View>
        )}
      </View>
      {firstDefinition && (
        <>
          <Text className="text-base text-gray-700 dark:text-gray-300 mb-2">
            {firstDefinition.definition}
          </Text>
          {firstDefinition.examples?.[0] && (
            <Text className="text-sm text-gray-500 dark:text-gray-400 italic">
              "{firstDefinition.examples[0].shona}"
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

export function WordListSkeleton() {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <View key={index} className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          {/* Word title skeleton */}
          <View className="flex-row items-center mb-2">
            <View className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            <View className="ml-3 h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
          </View>
          {/* Definition skeleton */}
          <View className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
          <View className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
          {/* Example skeleton */}
          <View className="h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
        </View>
      ))}
    </>
  );
}
