import ResultsPage from "../ResultsPage";
import Link from "next/link";
import { Suspense } from "react";
import SimpleSearchBar from "@/component/simple-search-bar.component";

export const dynamic = "force-dynamic"; // Need dynamic for search params

export default async function HomePage({ searchParams }: { searchParams: { q?: string } }) {
  const { q } = await searchParams; // Extract query parameter
  const searchQuery = q || ""; // Extract query parameter
  
  console.log("HomePage searchQuery:", searchQuery); // Debug log

  return (
    <div>
      {/* Hero Section - Oxford Dictionary Style */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-500 mb-4">
          Shona Dictionary
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          Duramazwi
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          Explore the meanings of Shona words or find Shona equivalents for English words. 
          Your comprehensive guide to the Shona language.
        </p>
        
        {/* Prominent Search */}
        <div id="search-bar" className="max-w-2xl mx-auto mb-6">
          <SimpleSearchBar initialQuery={searchQuery} />
        </div>
        
        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 text-base">
          <Link 
            href="/browse" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            Browse all entries
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/random" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            Random word
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/suggest" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            Suggest a word
          </Link>
        </div>
      </div>

      {/* Search Results or Welcome Content */}
      {searchQuery ? (
        <Suspense fallback={<div className="flex items-center justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
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
          <Link href="/suggest" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-medium">
            Your suggestions
          </Link>{" "}
          play a vital role in shaping this project. Contribute today and be part of the journey!
        </p>
      </div>

      {/* Featured Words Preview */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
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
            >
              {word}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/browse"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Browse All Words
          </Link>
        </div>
      </div>
    </div>
  );
}
