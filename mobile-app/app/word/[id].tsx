import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { dictionaryService } from '@/services/dictionary';

export default function WordDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const { data: word, isLoading, error } = useQuery({
    queryKey: ['word', id],
    queryFn: async () => {
      console.log('Fetching word:', id);
      const result = await dictionaryService.getWordById(id as string);
      console.log('Word result:', result);
      return result;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <>
        <Stack.Screen 
          options={{
            title: 'Loading...',
            headerBackTitle: 'Back',
          }} 
        />
        <View className="flex-1 bg-white dark:bg-gray-900 items-center justify-center">
          <ActivityIndicator size="large" color="#2563eb" />
          <Text className="text-gray-600 dark:text-gray-400 mt-4">Loading word...</Text>
        </View>
      </>
    );
  }

  if (error || !word) {
    return (
      <>
        <Stack.Screen 
          options={{
            title: 'Error',
            headerBackTitle: 'Back',
          }} 
        />
        <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-red-600 dark:text-red-400 text-center">
              Failed to load word details
            </Text>
          </View>
        </SafeAreaView>
      </>
    );
  }

  // Helper function to format word for specific meaning (like web version)
  const formatWordForMeaning = (word: string, partOfSpeech: string) => {
    if (partOfSpeech.toLowerCase() === 'verb') {
      return {
        prefix: 'ku-',
        word: word,
        hasPrefix: true
      };
    }
    return {
      prefix: '',
      word: word,
      hasPrefix: false
    };
  };

  // Get part of speech colors (matching web version)
  const getPartOfSpeechColor = (partOfSpeech: string) => {
    const colors: { [key: string]: string } = {
      'noun': 'bg-blue-100 dark:bg-blue-900',
      'verb': 'bg-green-100 dark:bg-green-900',
      'adjective': 'bg-purple-100 dark:bg-purple-900',
      'adverb': 'bg-yellow-100 dark:bg-yellow-900',
    };
    return colors[partOfSpeech.toLowerCase()] || 'bg-gray-100 dark:bg-gray-800';
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: word?.word || 'Word',
          headerBackTitle: 'Back',
        }} 
      />
      <View className="flex-1 bg-white dark:bg-gray-900">
        {/* Header with word title */}
        <View className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-base text-gray-600 dark:text-gray-400 mb-2">
            Meaning of:
          </Text>
          <Text className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            {word.word}
          </Text>
        </View>

      {/* Content */}
      <ScrollView className="flex-1 px-6 py-6">
        {word.meanings?.map((meaning, meaningIndex) => {
          const wordForm = formatWordForMeaning(word.word, meaning.partOfSpeech);
          
          return (
            <View key={meaningIndex} className="mb-10">
              {/* Part of Speech Badge with Word Form */}
              <View className="flex-row items-center mb-5">
                <View className={`px-4 py-2 rounded-full ${getPartOfSpeechColor(meaning.partOfSpeech)}`}>
                  <Text className="text-base font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    {meaning.partOfSpeech}
                  </Text>
                </View>
                
                {/* Word form for this specific meaning */}
                <View className="flex-row items-center ml-4">
                  {wordForm.hasPrefix && (
                    <Text className="text-xl font-semibold text-green-600 dark:text-green-400">
                      {wordForm.prefix}
                    </Text>
                  )}
                  <Text className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {wordForm.word}
                  </Text>
                </View>
              </View>

            {/* Definitions */}
            {meaning.definitions.map((def, defIndex) => (
              <View key={defIndex} className="mb-8">
                {/* Definition Text */}
                <Text className="text-xl text-gray-800 dark:text-gray-200 leading-7 mb-4">
                  {def.definition}
                </Text>
                
                {/* Examples */}
                {(def as any).examples && (def as any).examples.length > 0 && (
                  <View className="ml-4 space-y-3">
                    {(def as any).examples.map((example: any, exampleIndex: number) => (
                      <View key={exampleIndex} className="mb-4">
                        <View className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
                          <Text className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-3 uppercase">
                            Example {exampleIndex + 1}
                          </Text>
                          {/* Shona Example */}
                          <Text className="text-lg text-gray-800 dark:text-gray-200 font-medium italic mb-3 leading-6">
                            "{example.shona}"
                          </Text>
                          {/* English Translation */}
                          <Text className="text-base text-gray-600 dark:text-gray-400 italic leading-6">
                            "{example.english}"
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                )}

                {/* Synonyms */}
                {def.synonyms && def.synonyms.length > 0 && (
                  <View className="ml-6 mb-2">
                    <Text className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase">
                      Synonyms
                    </Text>
                    <View className="flex-row flex-wrap gap-2">
                      {def.synonyms.map((syn: string, idx: number) => (
                        <View key={idx} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          <Text className="text-sm text-gray-700 dark:text-gray-300">{syn}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}

                {/* Antonyms */}
                {def.antonyms && def.antonyms.length > 0 && (
                  <View className="ml-6 mb-2">
                    <Text className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase">
                      Antonyms
                    </Text>
                    <View className="flex-row flex-wrap gap-2">
                      {def.antonyms.map((ant: string, idx: number) => (
                        <View key={idx} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          <Text className="text-sm text-gray-700 dark:text-gray-300">{ant}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
    </>
  );
}
