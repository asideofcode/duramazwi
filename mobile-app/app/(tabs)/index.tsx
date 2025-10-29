import { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import { dictionaryService, WordPreview } from '@/services/dictionary';

export default function DictionaryTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Search query with debouncing
  const { data: results, isLoading, error } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => dictionaryService.searchWords(searchQuery),
    enabled: searchQuery.length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const handleWordPress = (word: WordPreview) => {
    router.push(`/word/${encodeURIComponent(word.id)}`);
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      {/* Search Bar */}
      <View className="px-4 pt-4 pb-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
          <Search size={20} color="#9ca3af" />
          <TextInput
            className="flex-1 ml-2 text-base text-gray-900 dark:text-white"
            placeholder="Search Shona words..."
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>

      {/* Results */}
      <View className="flex-1">
        {searchQuery.length === 0 ? (
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Search for Shona words
            </Text>
            <Text className="text-center text-gray-600 dark:text-gray-400">
              Type a word in Shona or English to find definitions and examples
            </Text>
          </View>
        ) : isLoading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#2563eb" />
          </View>
        ) : error ? (
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-red-600 dark:text-red-400 text-center">
              Failed to search. Please check your connection.
            </Text>
          </View>
        ) : results && results.length > 0 ? (
          <FlatList
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleWordPress(item)}
                className="px-4 py-4 border-b border-gray-200 dark:border-gray-700"
              >
                <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {item.word}
                </Text>
                <Text className="text-sm text-gray-600 dark:text-gray-400" numberOfLines={2}>
                  {item.briefDefinition}
                </Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-gray-600 dark:text-gray-400 text-center">
              No results found for "{searchQuery}"
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
