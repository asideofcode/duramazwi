import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Metadata } from "next/types";
import SimpleSearchBar from "@/component/simple-search-bar.component";
import ResultsPage from "../ResultsPage";
import Link from "next/link";
import WebsiteStructuredData from "@/component/website-structured-data.component";
import dataService from "@/services/dataService";
import { Meaning } from "@/components/dictionary-entry-clean";
import { createMetadata } from "@/utils/metadata";

export const dynamic = "force-dynamic"; // Need dynamic for search params

// Helper function to format word display for metadata (same as in word page)
const formatWordForMetadata = (word: string, meanings: Meaning[]) => {
  const hasVerbMeaning = meanings.some(meaning => 
    meaning.partOfSpeech && meaning.partOfSpeech.toLowerCase() === 'verb'
  );
  const hasNonVerbMeaning = meanings.some(meaning => 
    meaning.partOfSpeech && meaning.partOfSpeech.toLowerCase() !== 'verb'
  );
  
  // If it has both verb and non-verb meanings, show both forms
  if (hasVerbMeaning && hasNonVerbMeaning) {
    return `${word} / ku-${word}`;
  }
  
  // If it's only a verb, show ku- form
  if (hasVerbMeaning && !hasNonVerbMeaning) {
    return `ku-${word}`;
  }
  
  // Otherwise just the base word
  return word;
};

export async function generateMetadata({ searchParams }: { searchParams: { q?: string } }): Promise<Metadata> {
  const { q } = await searchParams;
  const searchQuery = q || "";
  
  if (searchQuery) {
    // Check if we have results for this search
    const searchResults = dataService.search(searchQuery);
    
    if (searchResults && searchResults.length > 0) {
      const firstResult = searchResults[0];
      const formattedWord = formatWordForMetadata(firstResult.word, firstResult.meanings);
      
      return createMetadata({
        title: `Search results for "${searchQuery}" - ${formattedWord} | Shona Dictionary`,
        description: `Found ${searchResults.length} result${searchResults.length > 1 ? 's' : ''} for "${searchQuery}". Including ${formattedWord} and more Shona words.`,
        keywords: `${searchQuery}, ${formattedWord}, Shona dictionary search, Shona words, Shona language, Shona definitions`,
      });
    } else {
      return createMetadata({
        title: `No results for "${searchQuery}" | Shona Dictionary`,
        description: `We couldn't find any results for "${searchQuery}". Try checking the spelling or searching for related words.`,
        keywords: `${searchQuery}, Shona dictionary search, Shona words not found`,
      });
    }
  }
  
  // Default homepage metadata
  return createMetadata({});
}

export default async function HomePage({ searchParams }: { searchParams: { q?: string } }) {
  const { q } = await searchParams; // Extract query parameter
  const searchQuery = q || ""; // Extract query parameter
  
  // Development logging only
  if (process.env.NODE_ENV === 'development' && searchQuery) {
    console.log("HomePage searchQuery:", searchQuery);
  }

  return (
    <div>
      <WebsiteStructuredData />
      {/* Animated Header - transitions between full hero and compact search */}
      <header className={`text-center transition-all duration-500 ease-in-out ${
        searchQuery 
          ? 'py-0 mb-0' 
          : 'py-12 mb-0'
      }`}>
        {/* Title - fades out in search mode */}
        <div className={`transition-all duration-500 ease-in-out ${
          searchQuery 
            ? 'hidden max-h-0 overflow-hidden' 
            : 'opacity-100 max-h-20 mb-4'
        }`}>
          <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-500 transition-all duration-500">
            Shona Dictionary
          </h1>
        </div>

        {/* Subtitle and Description - fade out when searching */}
        <div className={`transition-all duration-500 ease-in-out ${
          searchQuery 
            ? 'hidden max-h-0 overflow-hidden' 
            : 'opacity-100 max-h-96'
        }`}>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2 transition-all duration-300">
            Duramazwi
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed transition-all duration-300">
            Explore the meanings of Shona words or find Shona equivalents for English words. 
            Your comprehensive guide to the Shona language.
          </p>
        </div>
        
        {/* Search Bar - animates width and positioning */}
        <div className={`mx-auto transition-all duration-500 ease-in-out ${
          searchQuery ? 'w-full mb-0' : 'max-w-2xl mb-6'
        }`}>
          <div id="search-bar">
            <SimpleSearchBar initialQuery={searchQuery} />
          </div>
        </div>
        
        {/* Quick Actions - fade out when searching */}
        <div className={`transition-all duration-500 ease-in-out ${
          searchQuery 
            ? 'hidden max-h-0 overflow-hidden' 
            : 'opacity-100 mb-0'
        }`}>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap sm:gap-2 text-base">
            <Link 
              href="/browse" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200 px-2 py-1"
              title="Browse all dictionary entries"
              aria-label="Browse all dictionary entries"
            >
              Browse all entries
            </Link>
            <span className="text-gray-400 text-sm">•</span>
            <Link 
              href="/random" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200 px-2 py-1"
              title="Get a random Shona word"
              aria-label="Get a random Shona word"
            >
              Random word
            </Link>
            <span className="text-gray-400 text-sm">•</span>
            <Link 
              href="/suggest" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200 px-2 py-1"
              title="Suggest a new word for the dictionary"
              aria-label="Suggest a new word for the dictionary"
            >
              Suggest a word
            </Link>
            <span className="text-gray-400 text-sm">•</span>
            <Link 
              href="/challenge" 
              className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 underline transition-colors duration-200 px-2 py-1 font-semibold"
              title="Take the daily challenge"
              aria-label="Take the daily challenge"
            >
              🏆 Daily Challenge
            </Link>
          </div>
        </div>
      </header>

      {/* Separator for search results */}
      {searchQuery && (
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      )}

      {/* Search Results or Welcome Content */}
      {searchQuery ? (
        <Suspense fallback={
          <div className="flex items-center justify-center py-12" role="status" aria-label="Loading search results">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="sr-only">Loading search results...</span>
          </div>
        }>
          <ResultsPage searchQuery={searchQuery} />
        </Suspense>
      ) : (
        <WelcomeContent />
      )}
    </div>
  );
}

function WelcomeContent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Daily Challenge Card - Prominent and Inviting */}
      <Link href="/challenge/daily" className="block mb-8 group">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 dark:from-purple-700 dark:via-purple-600 dark:to-pink-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"></div>
          </div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-5xl">🏆</span>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Daily Challenge
                  </h2>
                  <p className="text-purple-100 text-lg">
                    Test your Shona knowledge today!
                  </p>
                </div>
              </div>
              <p className="text-white/90 text-lg mb-4 max-w-xl">
                Take on fun challenges to improve your vocabulary. New challenges every day!
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold group-hover:bg-white/30 transition-colors">
                <span>Start Challenge</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block">
              <div className="text-8xl opacity-20 transform rotate-12">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </Link>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Explore the Shona Dictionary
      </h2>
      <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        <p>
          Welcome to our growing repository of words from the rich and vibrant
          Shona lexicon. This project is a community-driven effort to document and
          celebrate the language.
        </p>
        <p>
          Our ambition is to build the most comprehensive dataset of Shona words,
          making it a valuable resource for speakers and learners alike.
        </p>
        <p>
          <Link href="/suggest" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-medium" title="Contribute to the dictionary" aria-label="Contribute to the dictionary">
            Your suggestions
          </Link>{" "}
          play a vital role in shaping this project. Contribute today and be part of the journey!
        </p>
      </div>

      {/* Featured Words Preview */}
      <div className="bg-blue-50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Featured Words
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Discover some words from our dictionary:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Sample featured words - you can make this dynamic later */}
          {['adhiresi', 'aina', 'aini', 'aisi', 'bako', 'chitima', 'gumbeze', 'mweya'].map((word) => (
            <Link
              key={word}
              href={`/word/${encodeURIComponent(word)}`}
              className="text-lg text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              title={`View definition of "${word}"`}
              aria-label={`View definition of "${word}"`}
            >
              {word}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/browse"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            title="Browse all dictionary entries"
            aria-label="Browse all dictionary entries"
          >
            Browse All Words
          </Link>
        </div>
      </div>
    </div>
  );
}
