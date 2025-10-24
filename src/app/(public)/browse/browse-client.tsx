"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import dataService from "@/services/dataService";
import BrowseEntries from "@/component/browse-entries.component";

const ENTRIES_PER_PAGE = 10;

function BrowseContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || "1";
  const letter = searchParams.get("letter") || "";
  const requestedPage = parseInt(page, 10);
  
  // Get all words and filter by letter if specified
  const allWords = dataService.getAllWords();
  const filteredWords = letter 
    ? allWords.filter((word: string) => word.toLowerCase().startsWith(letter.toLowerCase()))
    : allWords;
  
  // Calculate pagination
  const totalEntries = filteredWords.length;
  const totalPages = Math.ceil(totalEntries / ENTRIES_PER_PAGE);
  
  // Clamp the current page to valid bounds
  const currentPage = Math.max(1, Math.min(requestedPage, totalPages || 1));
  
  // Redirect to correct page if URL has invalid page number
  useEffect(() => {
    if (requestedPage !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      if (currentPage === 1) {
        params.delete("page");
      } else {
        params.set("page", currentPage.toString());
      }
      const newUrl = `/browse${params.toString() ? `?${params.toString()}` : ''}`;
      router.replace(newUrl);
    }
  }, [requestedPage, currentPage, searchParams, router]);
  
  const startIndex = (currentPage - 1) * ENTRIES_PER_PAGE;
  const endIndex = startIndex + ENTRIES_PER_PAGE;
  const currentWords = filteredWords.slice(startIndex, endIndex);
  
  // Generate alphabet filter
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Browse Dictionary Entries
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {letter 
            ? `Showing entries starting with "${letter.toUpperCase()}" (${totalEntries} entries)`
            : `Browse all ${totalEntries} dictionary entries`
          }
        </p>
      </div>

      {/* Alphabet Filter */}
      <nav className="mb-8" aria-label="Filter by letter">
        <h2 className="sr-only">Filter entries by letter</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Alphabet filter">
          <Link
            href="/browse"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              !letter
                ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            title="Show all dictionary entries"
          >
            All
          </Link>
          {alphabet.map((char) => (
            <Link
              key={char}
              href={`/browse?letter=${char.toLowerCase()}`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                letter?.toLowerCase() === char.toLowerCase()
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              title={`Show words starting with "${char}"`}
            >
              {char}
            </Link>
          ))}
        </div>
      </nav>

      {/* Top Pagination - Only show if there are entries */}
      {totalEntries > 0 && (
        <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          {/* Left side - Previous button (always reserve space) */}
          <div className="w-20">
            {currentPage > 1 ? (
              <Link
                href={`/browse?page=${currentPage - 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title={`Go to page ${currentPage - 1}`}
                aria-label={`Go to previous page ${currentPage - 1}${letter ? ` of entries starting with ${letter.toUpperCase()}` : ''}`}
                scroll={false}
              >
                Previous
              </Link>
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
              {totalEntries} total entries
            </div>
          </div>
          
          {/* Right side - Next button (always reserve space) */}
          <div className="w-20 flex justify-end">
            {currentPage < totalPages ? (
              <Link
                href={`/browse?page=${currentPage + 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title={`Go to page ${currentPage + 1}`}
                aria-label={`Go to next page ${currentPage + 1}${letter ? ` of entries starting with ${letter.toUpperCase()}` : ''}`}
                scroll={false}
              >
                Next
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        </div>
      )}

      {/* Entries List or Empty State */}
      {currentWords.length > 0 ? (
        <BrowseEntries currentWords={currentWords} />
      ) : (
        <div className="flex flex-col my-16 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {letter 
              ? `No entries starting with "${letter.toUpperCase()}"` 
              : "No entries found"
            }
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {letter 
              ? `We don't have any Shona words that start with the letter "${letter.toUpperCase()}" yet.`
              : "No dictionary entries match your current filter."
            }
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Try selecting a different letter or browse all entries.
          </p>
        </div>
      )}

      {/* Bottom Pagination - Only show if there are entries */}
      {totalEntries > 0 && (
        <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          {/* Left side - Previous button (always reserve space) */}
          <div className="w-20">
            {currentPage > 1 ? (
              <Link
                href={`/browse?page=${currentPage - 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title={`Go to page ${currentPage - 1}`}
                aria-label={`Go to previous page ${currentPage - 1}${letter ? ` of entries starting with ${letter.toUpperCase()}` : ''}`}
              >
                Previous
              </Link>
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
              {totalEntries} total entries
            </div>
          </div>
          
          {/* Right side - Next button (always reserve space) */}
          <div className="w-20 flex justify-end">
            {currentPage < totalPages ? (
              <Link
                href={`/browse?page=${currentPage + 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title={`Go to page ${currentPage + 1}`}
                aria-label={`Go to next page ${currentPage + 1}${letter ? ` of entries starting with ${letter.toUpperCase()}` : ''}`}
              >
                Next
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default function BrowseClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowseContent />
    </Suspense>
  );
}
