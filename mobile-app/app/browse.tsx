import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import WordListItem, { WordListSkeleton } from '@/components/WordListItem';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ENTRIES_PER_PAGE = 20;

export default function BrowseScreen() {
  const router = useRouter();
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch words with details from API (includes pagination)
  const { data, isLoading } = useQuery({
    queryKey: ['browse', selectedLetter, currentPage],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: ENTRIES_PER_PAGE.toString(),
      });
      if (selectedLetter) {
        params.append('letter', selectedLetter);
      }
      
      // Add artificial delay to see loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const response = await fetch(
        `http://192.168.1.216:3000/api/mobile/browse?${params.toString()}`
      );
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const wordsWithDetails = data?.words || [];
  const totalEntries = data?.total || 0;
  const totalPages = data?.totalPages || 1;

  const handleLetterPress = (letter: string) => {
    setSelectedLetter(letter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleClearFilter = () => {
    setSelectedLetter('');
    setCurrentPage(1);
  };


  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Browse',
          headerBackTitle: 'Back',
        }} 
      />
      <View className="flex-1 bg-white dark:bg-gray-900">
        {/* Header - Just show count */}
        <View className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-base text-gray-600 dark:text-gray-400">
            {selectedLetter
              ? `Showing entries starting with "${selectedLetter}" (${totalEntries} entries)`
              : `${totalEntries} dictionary entries`
            }
          </Text>
        </View>

        {/* Alphabet Filter */}
        <View className="border-b border-gray-200 dark:border-gray-700">
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 16 }}
          >
            <TouchableOpacity
              onPress={handleClearFilter}
              className={`px-4 py-2 rounded-lg mr-2 ${
                !selectedLetter
                  ? 'bg-blue-100 dark:bg-blue-900'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              <Text className={`text-base font-medium ${
                !selectedLetter
                  ? 'text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300'
              }`}>
                All
              </Text>
            </TouchableOpacity>
            {ALPHABET.map((letter) => (
              <TouchableOpacity
                key={letter}
                onPress={() => handleLetterPress(letter)}
                className={`px-4 py-2 rounded-lg mr-2 ${
                  selectedLetter === letter
                    ? 'bg-blue-100 dark:bg-blue-900'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                <Text className={`text-base font-medium ${
                  selectedLetter === letter
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {letter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Words List */}
        {isLoading ? (
          <>
            <ScrollView className="flex-1">
              <WordListSkeleton />
            </ScrollView>
            
            {/* Pagination placeholder during loading */}
            <View className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex-row items-center justify-between">
              <View className="px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Text className="text-base font-medium text-gray-400">
                  Previous
                </Text>
              </View>
              <View className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
              <View className="px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Text className="text-base font-medium text-gray-400">
                  Next
                </Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <FlatList
              data={wordsWithDetails}
              keyExtractor={(item) => item.word}
              renderItem={({ item: wordDetail }) => (
                <WordListItem wordDetail={wordDetail} />
              )}
              ListEmptyComponent={() => (
                <View className="flex-1 items-center justify-center py-20 px-6">
                  <Text className="text-6xl mb-4">📚</Text>
                  <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {selectedLetter
                      ? `No entries starting with "${selectedLetter}"`
                      : 'No entries found'
                    }
                  </Text>
                  <Text className="text-base text-gray-600 dark:text-gray-400 text-center">
                    {selectedLetter
                      ? `We don't have any Shona words that start with "${selectedLetter}" yet.`
                      : 'No dictionary entries match your current filter.'
                    }
                  </Text>
                </View>
              )}
            />
            
            {/* Pagination - Always visible at bottom */}
            {totalPages > 0 && (
              <View className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex-row items-center justify-between">
                <TouchableOpacity
                  onPress={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-5 py-3 rounded-lg ${
                    currentPage === 1
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'bg-primary-600'
                  }`}
                >
                  <Text className={`text-base font-medium ${
                    currentPage === 1
                      ? 'text-gray-400'
                      : 'text-white'
                  }`}>
                    Previous
                  </Text>
                </TouchableOpacity>
                <Text className="text-base text-gray-600 dark:text-gray-400 font-medium">
                  Page {currentPage} of {totalPages}
                </Text>
                <TouchableOpacity
                  onPress={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-5 py-3 rounded-lg ${
                    currentPage === totalPages
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'bg-primary-600'
                  }`}
                >
                  <Text className={`text-base font-medium ${
                    currentPage === totalPages
                      ? 'text-gray-400'
                      : 'text-white'
                  }`}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </View>
    </>
  );
}
