import { useState, useEffect, useRef } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, ActivityIndicator, ScrollView, TouchableWithoutFeedback, Keyboard, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { dictionaryService } from '@/services/dictionary';
import WordListItem, { WordListSkeleton } from '@/components/WordListItem';

const FEATURED_WORDS = ['adhiresi', 'aina', 'aini', 'aisi', 'bako', 'chitima', 'gumbeze', 'mweya'];

const ENTRIES_PER_PAGE = 20;

export default function DictionaryTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const router = useRouter();
  const searchInputRef = useRef<TextInput>(null);
  
  // Animation values for position transition
  const searchBarPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const searchBarOpacity = useRef(new Animated.Value(1)).current;
  const searchBarScale = useRef(new Animated.Value(1)).current;
  
  // Refs to measure positions
  const inlineSearchRef = useRef<View>(null);
  const headerSearchRef = useRef<View>(null);
  const [inlinePosition, setInlinePosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [headerPosition, setHeaderPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // Reset page when search query changes
  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    setSearchPage(1);
  };

  // Search query with pagination
  const { data, isLoading, error } = useQuery({
    queryKey: ['search', searchQuery, searchPage],
    queryFn: async () => {
      const params = new URLSearchParams({
        q: searchQuery,
        page: searchPage.toString(),
        limit: ENTRIES_PER_PAGE.toString(),
      });
      
      // Add artificial delay to see loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const response = await fetch(`http://192.168.1.216:3000/api/mobile/search?${params.toString()}`);
      return response.json();
    },
    enabled: searchQuery.length > 0,
    staleTime: 5 * 60 * 1000,
  });

  const results = data?.words || [];
  const totalResults = data?.total || 0;
  const totalPages = data?.totalPages || 1;


  const handleRandomWord = async () => {
    try {
      const randomWord = await dictionaryService.getRandomWord();
      router.push(`/word/${encodeURIComponent(randomWord.word)}`);
    } catch (error) {
      console.error('Failed to get random word:', error);
    }
  };

  const handleBrowse = () => {
    router.push('/browse' as any);
  };

  const renderHomepage = () => (
    <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
        <View style={{ flex: 1 }}>
        {/* Hero Section */}
        <View className="px-6 py-10 items-center">
        <Text className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-3">
          Shona Dictionary
        </Text>
        <Text className="text-xl text-gray-600 dark:text-gray-400 text-center mb-6">
          Duramazwi
        </Text>
        <Text className="text-center text-base text-gray-700 dark:text-gray-300 leading-6 px-4">
          Explore the meanings of Shona words or find Shona equivalents for English words.
        </Text>
      </View>

      {/* Search Bar - Embedded in content (only when not expanded) */}
      {!isSearchExpanded && (
        <View 
          ref={inlineSearchRef}
          className="px-6 mb-8"
          onLayout={(event) => {
            const { x, y, width, height } = event.nativeEvent.layout;
            setInlinePosition({ x, y, width, height });
          }}
        >
          <SearchBar />
        </View>
      )}

      {/* Quick Actions */}
      <View className="px-6 mb-8">
        <View className="flex-row justify-around">
          <TouchableOpacity 
            className="items-center flex-1"
            onPress={handleBrowse}
          >
            <View className="bg-primary-100 dark:bg-primary-900 p-5 rounded-full mb-3">
              <Ionicons name="book-outline" size={28} color="#2563eb" />
            </View>
            <Text className="text-base font-medium text-gray-900 dark:text-white">Browse</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="items-center flex-1"
            onPress={handleRandomWord}
          >
            <View className="bg-primary-100 dark:bg-primary-900 p-5 rounded-full mb-3">
              <Ionicons name="shuffle-outline" size={28} color="#2563eb" />
            </View>
            <Text className="text-base font-medium text-gray-900 dark:text-white">Random</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="items-center flex-1"
            onPress={() => router.push('/challenge' as any)}
          >
            <View className="bg-primary-100 dark:bg-primary-900 p-5 rounded-full mb-3">
              <Ionicons name="trophy-outline" size={28} color="#2563eb" />
            </View>
            <Text className="text-base font-medium text-gray-900 dark:text-white">Challenge</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured Words */}
      <View className="px-6 mb-8">
        <View className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Words
          </Text>
          <Text className="text-base text-gray-600 dark:text-gray-400 mb-5 leading-6">
            Discover some words from our dictionary:
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {FEATURED_WORDS.map((word) => (
              <TouchableOpacity
                key={word}
                onPress={() => router.push(`/word/${encodeURIComponent(word)}`)}
                className="bg-primary-600 px-5 py-3 rounded-lg"
              >
                <Text className="text-white font-medium text-base">{word}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* About Section */}
      <View className="px-6 pb-10">
        <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Explore the Shona Dictionary
        </Text>
        <Text className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-6">
          Welcome to our growing repository of words from the rich and vibrant Shona lexicon. 
          This project is a community-driven effort to document and celebrate the language.
        </Text>
        <Text className="text-base text-gray-700 dark:text-gray-300 leading-6">
          Our ambition is to build the most comprehensive dataset of Shona words, making it a 
          valuable resource for speakers and learners alike.
        </Text>
      </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );

  const handleOpenSearch = () => {
    if (!isSearchExpanded) {
      // Measure positions and animate
      inlineSearchRef.current?.measure((x, y, width, height, pageX, pageY) => {
        const startY = pageY;
        const endY = 0; // Header position
        
        // Start from inline position
        searchBarPosition.setValue({ x: 0, y: startY });
        searchBarScale.setValue(1);
        
        setIsSearchExpanded(true);
        
        // Animate to header position
        Animated.spring(searchBarPosition.y, {
          toValue: endY,
          useNativeDriver: true,
          tension: 50,
          friction: 8,
        }).start();
      });
    }
  };

  const handleCloseSearch = () => {
    // Collapse first
    setIsSearchExpanded(false);
    searchBarPosition.setValue({ x: 0, y: 0 });
    
    // Then clear search after collapse animation
    setTimeout(() => {
      handleSearchChange('');
    }, 50);
  };

  const handleBlur = () => {
    // Collapse if there's no search query
    if (searchQuery.length === 0) {
      // Small delay to allow the blur event to complete
      setTimeout(() => {
        handleCloseSearch();
      }, 100);
    }
  };

  const handleDismissKeyboard = () => {
    // Blur the input explicitly
    searchInputRef.current?.blur();
    Keyboard.dismiss();
    // After keyboard dismisses, check if we should collapse
    setTimeout(() => {
      if (searchQuery.length === 0) {
        handleCloseSearch();
      }
    }, 150);
  };

  // Shared search bar component
  const SearchBar = () => (
    <View className="flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3">
      <Ionicons name="search" size={24} color="#9ca3af" />
      <TextInput
        ref={searchInputRef}
        className="flex-1 ml-3 text-lg text-gray-900 dark:text-white"
        placeholder="Search Shona meanings or translations..."
        placeholderTextColor="#9ca3af"
        value={searchQuery}
        onChangeText={handleSearchChange}
        onFocus={handleOpenSearch}
        onBlur={handleBlur}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={isSearchExpanded}
        style={{ 
          padding: 0, 
          margin: 0, 
          height: 24,
          lineHeight: 24,
          textAlignVertical: 'center', 
          includeFontPadding: false 
        }}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={handleCloseSearch}>
          <Ionicons name="close-circle" size={24} color="#9ca3af" />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      {/* Search Bar in header - Animated when expanded */}
      {isSearchExpanded && (
        <View 
          ref={headerSearchRef}
          className="px-6 pb-4 pt-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
        >
          <Animated.View
            style={{
              transform: [
                { translateY: searchBarPosition.y },
              ],
            }}
          >
            <SearchBar />
          </Animated.View>
        </View>
      )}

      {/* Content */}
      {searchQuery.length === 0 ? (
        renderHomepage()
      ) : (
        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <View className="flex-1">
            {isLoading ? (
            <View className="flex-1">
              <WordListSkeleton />
            </View>
          ) : error ? (
            <View className="flex-1 items-center justify-center px-6">
              <Text className="text-red-600 dark:text-red-400 text-center">
                Failed to search. Please check your connection.
              </Text>
            </View>
          ) : results && results.length > 0 ? (
          <>
            <FlatList
              data={results}
              keyExtractor={(item) => item.word}
              renderItem={({ item }) => (
                <WordListItem wordDetail={item} />
              )}
            />
            
            {/* Pagination for search results */}
            {totalPages > 0 && (
              <View className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex-row items-center justify-between">
                <TouchableOpacity
                  onPress={() => setSearchPage(Math.max(1, searchPage - 1))}
                  disabled={searchPage === 1}
                  className={`px-5 py-3 rounded-lg ${
                    searchPage === 1
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'bg-primary-600'
                  }`}
                >
                  <Text className={`text-base font-medium ${
                    searchPage === 1
                      ? 'text-gray-400'
                      : 'text-white'
                  }`}>
                    Previous
                  </Text>
                </TouchableOpacity>
                <Text className="text-base text-gray-600 dark:text-gray-400 font-medium">
                  Page {searchPage} of {totalPages}
                </Text>
                <TouchableOpacity
                  onPress={() => setSearchPage(Math.min(totalPages, searchPage + 1))}
                  disabled={searchPage === totalPages}
                  className={`px-5 py-3 rounded-lg ${
                    searchPage === totalPages
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'bg-primary-600'
                  }`}
                >
                  <Text className={`text-base font-medium ${
                    searchPage === totalPages
                      ? 'text-gray-400'
                      : 'text-white'
                  }`}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        ) : (
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-gray-600 dark:text-gray-400 text-center">
              No results found for "{searchQuery}"
            </Text>
          </View>
        )}
          </View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView>
  );
}
