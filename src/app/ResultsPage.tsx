"use client";

import Label from "@/component/atom/label.component";
import Loading from "@/component/atom/loader.component";
import dataService from "@/services/dataService";
import { SearchResultsSkeleton } from "@/component/skeleton-loader.component";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { DictionaryEntryCompact, DictionaryEntry } from "@/components/dictionary-entry-clean";

type Error = {
  message: string;
  resolution: string;
};

export default function ResultsPage({searchQuery}: {searchQuery: (Promise<string> | string)}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = React.useState<Error | null>(null);

  // Get query directly from URL parameters
  const actualQuery = searchParams.get("q") || "";
  
  console.log("ResultsPage actualQuery:", actualQuery); // Debug log

  React.useEffect(() => {
    globalThis.gtag?.("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
    });
  }, [actualQuery]);

  React.useEffect(() => {
    setError(null);
  }, [actualQuery]);

  return error ? (
    <div className="flex flex-col my-32 text-center">
      <Label size="h3" variant="t1">
        {error.message}
      </Label>
      <Label variant="s1">{error.resolution}</Label>
    </div>
  ) : (
    <SearchResults
      searchQuery={actualQuery}
      onError={setError}
      router={router}
    />
  );
}

function SearchResults({ searchQuery, onError, router }: any) {
  const searchParams = useSearchParams();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "failed">("idle");
  const [searchResults, setSearchResults] = React.useState<any>(null);
  
  // Get current page from URL params, default to 1
  const requestedPage = parseInt(searchParams.get("page") || "1", 10);
  const RESULTS_PER_PAGE = 10;
  
  // Calculate total pages based on search results
  const totalPages = searchResults ? Math.ceil(searchResults.length / RESULTS_PER_PAGE) : 1;
  
  // Clamp the current page to valid bounds
  const currentPage = Math.max(1, Math.min(requestedPage, totalPages));
  
  // Redirect to correct page if URL has invalid page number
  React.useEffect(() => {
    if (searchResults && requestedPage !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      if (currentPage === 1) {
        params.delete("page");
      } else {
        params.set("page", currentPage.toString());
      }
      router.push(`?${params.toString()}`, { scroll: false });
    }
  }, [searchResults, requestedPage, currentPage, searchParams, router]);
  
  // Function to navigate to a specific page
  const navigateToPage = (page: number, shouldScroll: boolean = true) => {
    // Clamp the target page to valid bounds
    const clampedPage = Math.max(1, Math.min(page, totalPages));
    
    const params = new URLSearchParams(searchParams.toString());
    if (clampedPage === 1) {
      params.delete("page"); // Remove page param for page 1 (cleaner URLs)
    } else {
      params.set("page", clampedPage.toString());
    }
    router.push(`?${params.toString()}`, { scroll: shouldScroll });
  };

  React.useEffect(() => {
    setSearchResults(null);
    if (searchQuery) {
      makeSearchQuery(searchQuery);
    }
  }, [searchQuery]);

  async function makeSearchQuery(query: string) {
    try {
      if (query === "") return;
      setStatus("loading");
      setSearchResults(null);
      onError(null);

      setTimeout(() => {
        const matchedData = dataService.search(query);

        // Track all searches in database (production only)
        fetch('/api/track-search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query,
            resultCount: matchedData.length
          })
        }).catch(err => console.error('Failed to track search:', err));

        if (matchedData.length === 0) {
          globalThis.gtag?.("event", "search_performed", {
            search_term: query,
            result_status: "no_results",
            result_count: 0,
          });

          // Set empty results to show the "Tineurombo" message in SearchResults component
          setSearchResults([]);
          setStatus("success");
        } else {
          globalThis.gtag?.("event", "search_performed", {
            search_term: query,
            result_status: "success",
            result_count: matchedData.length,
          });

          // Always show results, no automatic redirect
          setSearchResults(matchedData);
          setStatus("success");
        }
      }, 1000);
    } catch (error) {
      onError({ message: "An error occurred", resolution: "Try again later" });
      setStatus("failed");
    }
  }

  if (status === "loading" || (status === "idle" && searchQuery)) {
    return <SearchResultsSkeleton />;
  }

  // Don't render anything if no search query
  if (!searchQuery) {
    return null;
  }

  // Always show the search results header, even when no results
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Search Results Header with inline X button */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Search results</h1>
        <Link 
          href="/"
          className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          aria-label="Clear search"
          title="Clear search and go home"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
      </div>
      
      {searchResults && searchResults.length > 0 ? (
        <>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}". Click on a word to view more.
          </p>
      
      {/* Top Pagination */}
      {(() => {
        const totalPages = Math.ceil(searchResults.length / RESULTS_PER_PAGE);
        const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
        const endIndex = startIndex + RESULTS_PER_PAGE;
        
        return (
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              {/* Left side - Previous button (always reserve space) */}
              <div className="w-20">
                {currentPage > 1 ? (
                  <button
                    onClick={() => navigateToPage(currentPage - 1, false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none"
                    title={`Go to page ${currentPage - 1}`}
                    aria-label={`Go to previous page ${currentPage - 1}`}
                  >
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
              
              {/* Center - Page info */}
              <div className="flex flex-col items-center space-y-1">
                <span className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                  Page {currentPage} of {totalPages}
                </span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {startIndex + 1}-{Math.min(endIndex, searchResults.length)} of {searchResults.length} results
                </div>
              </div>
              
              {/* Right side - Next button (always reserve space) */}
              <div className="w-20 flex justify-end">
                {currentPage < totalPages ? (
                  <button
                    onClick={() => navigateToPage(currentPage + 1, false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none"
                    title={`Go to page ${currentPage + 1}`}
                    aria-label={`Go to next page ${currentPage + 1}`}
                  >
                    Next
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
      
      {/* Paginated Results */}
      {(() => {
        const totalPages = Math.ceil(searchResults.length / RESULTS_PER_PAGE);
        const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
        const endIndex = startIndex + RESULTS_PER_PAGE;
        const currentResults = searchResults.slice(startIndex, endIndex);
        
        return (
          <>
            <div className="space-y-6 mb-8">
              {currentResults.map((word: DictionaryEntry, index: number) => (
                <Link
                  key={startIndex + index}
                  prefetch={false}
                  href={`/word/${encodeURIComponent(word.word)}`}
                  onClick={() => {
                    globalThis.gtag?.("event", "word_clicked", {
                      word: word.word,
                      source: "search_results",
                    });
                  }}
                  className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500"
                >
                  <DictionaryEntryCompact entry={word} />
                </Link>
              ))}
            </div>
            
            {/* Pagination Controls */}
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  {/* Left side - Previous button (always reserve space) */}
                  <div className="w-20">
                    {currentPage > 1 ? (
                      <button
                        onClick={() => navigateToPage(currentPage - 1)}
                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none"
                        title={`Go to page ${currentPage - 1}`}
                        aria-label={`Go to previous page ${currentPage - 1}`}
                      >
                        Previous
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  
                  {/* Center - Page info */}
                  <div className="flex flex-col items-center space-y-1">
                    <span className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Showing {startIndex + 1}-{Math.min(endIndex, searchResults.length)} of {searchResults.length} results
                    </div>
                  </div>
                  
                  {/* Right side - Next button (always reserve space) */}
                  <div className="w-20 flex justify-end">
                    {currentPage < totalPages ? (
                      <button
                        onClick={() => navigateToPage(currentPage + 1)}
                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none"
                        title={`Go to page ${currentPage + 1}`}
                        aria-label={`Go to next page ${currentPage + 1}`}
                      >
                        Next
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
          </>
        );
      })()}
        </>
      ) : (
        /* No results - show the "Tineurombo" message with original styling */
        <div className="flex flex-col my-32 text-center">
          <span className="text-lg font-bold theme-text-h1">
            Tineurombo, we couldn't find a meaning for "{searchQuery}".
          </span>
          <span className="theme-text-sub1">
            Try checking the spelling or searching for related words.
          </span>
        </div>
      )}
    </div>
  );
}


function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-24">
      <Loading className="h-8 w-8" />
    </div>
  );
}
