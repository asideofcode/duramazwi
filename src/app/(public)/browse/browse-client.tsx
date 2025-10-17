"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import dataService from "@/services/dataService";
import BrowseEntries from "@/component/browse-entries.component";

const ENTRIES_PER_PAGE = 10;

function BrowseContent() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const letter = searchParams.get("letter") || "";
  const currentPage = parseInt(page, 10);
  
  // Get all words and filter by letter if specified
  const allWords = dataService.getAllWords();
  const filteredWords = letter 
    ? allWords.filter((word: string) => word.toLowerCase().startsWith(letter.toLowerCase()))
    : allWords;
  
  // Calculate pagination
  const totalEntries = filteredWords.length;
  const totalPages = Math.ceil(totalEntries / ENTRIES_PER_PAGE);
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
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Top Pagination */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          {/* Left side - Previous button (always reserve space) */}
          <div className="w-20">
            {currentPage > 1 ? (
              <Link
                href={`/browse?page=${currentPage - 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title={`Go to page ${currentPage - 1}`}
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
              >
                Next
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      {/* Entries List */}
      <BrowseEntries currentWords={currentWords} />

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          {/* Left side - Previous button (always reserve space) */}
          <div className="w-20">
            {currentPage > 1 ? (
              <Link
                href={`/browse?page=${currentPage - 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title={`Go to page ${currentPage - 1}`}
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
              >
                Next
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
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
