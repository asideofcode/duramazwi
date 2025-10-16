"use client";

import { useState, useEffect } from "react";
import dataService from "@/services/dataService";
import DictionaryEntryClean from "@/components/dictionary-entry-clean";
import Loading from "@/component/atom/loader.component";
import Link from "next/link";

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const performSearch = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Add a small delay to show loading state
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const searchResults = dataService.search(query);
        setResults(searchResults);
        
        // Analytics
        globalThis.gtag?.("event", "search_performed", {
          search_term: query,
          result_status: searchResults.length > 0 ? "results_found" : "no_results",
          result_count: searchResults.length,
        });
      } catch (err) {
        setError("An error occurred while searching. Please try again.");
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loading className="h-8 w-8" />
        <span className="ml-3 text-gray-600 dark:text-gray-400">Searching...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 mb-4">
          {error}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!query.trim()) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 dark:text-gray-400 mb-4">
          No results found for "{query}"
        </div>
        <div className="space-y-2 text-sm">
          <p>Try:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-500 dark:text-gray-500">
            <li>Checking your spelling</li>
            <li>Using different keywords</li>
            <li>Searching for a simpler term</li>
          </ul>
        </div>
        <div className="mt-6">
          <Link
            href="/browse"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            Browse all entries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Search Results
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
        </p>
      </div>
      
      <div className="space-y-6">
        {results.map((entry, index) => (
          <div
            key={`${entry.word}-${index}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <DictionaryEntryClean entry={entry} />
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                href={`/word/${encodeURIComponent(entry.word.toLowerCase())}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
              >
                View full entry →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
