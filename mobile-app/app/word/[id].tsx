import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'lucide-react-native';
import { dictionaryService } from '@/services/dictionary';

export default function WordDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const { data: word, isLoading, error } = useQuery({
    queryKey: ['word', id],
    queryFn: () => dictionaryService.getWordById(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <View className="flex-1 bg-white dark:bg-gray-900 items-center justify-center">
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (error || !word) {
    return (
      <View className="flex-1 bg-white dark:bg-gray-900">
        <View className="px-4 pt-12 pb-4 border-b border-gray-200 dark:border-gray-700">
          <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
            <ArrowLeft size={24} color="#2563eb" />
            <Text className="ml-2 text-base text-primary-600">Back</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-red-600 dark:text-red-400 text-center">
            Failed to load word details
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      {/* Header */}
      <View className="px-4 pt-12 pb-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <TouchableOpacity onPress={() => router.back()} className="flex-row items-center mb-4">
          <ArrowLeft size={24} color="#2563eb" />
          <Text className="ml-2 text-base text-primary-600">Back</Text>
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-gray-900 dark:text-white">
          {word.word}
        </Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4 py-4">
        {word.meanings.map((meaning, meaningIndex) => (
          <View key={meaningIndex} className="mb-6">
            {/* Part of Speech */}
            <View className="bg-primary-100 dark:bg-primary-900 px-3 py-1 rounded-full self-start mb-3">
              <Text className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                {meaning.partOfSpeech}
              </Text>
            </View>

            {/* Definitions */}
            {meaning.definitions.map((def, defIndex) => (
              <View key={defIndex} className="mb-4">
                <View className="flex-row">
                  <Text className="text-gray-600 dark:text-gray-400 mr-2">{defIndex + 1}.</Text>
                  <View className="flex-1">
                    <Text className="text-base text-gray-900 dark:text-white mb-2">
                      {def.definition}
                    </Text>
                    
                    {/* Example */}
                    {def.example && (
                      <View className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mt-2">
                        <Text className="text-sm text-gray-700 dark:text-gray-300 italic mb-1">
                          "{def.example}"
                        </Text>
                        {def.translation && (
                          <Text className="text-sm text-gray-600 dark:text-gray-400">
                            {def.translation}
                          </Text>
                        )}
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
