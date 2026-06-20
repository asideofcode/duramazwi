"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import dataService from "@/services/dataService";
import BrowseEntries from "@/component/browse-entries.component";
import InlineIcon from "@/components/InlineIcon";

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
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">
          Browse Dictionary Entries
        </h1>
        <p className="text-lg text-[var(--color-muted)] mb-6">
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
                ? "bg-[var(--color-surface)] text-[var(--color-primary)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
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
                  ? "bg-[var(--color-surface)] text-[var(--color-primary)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
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
                className="px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-surface)] transition-colors"
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
            <span className="px-4 py-2 text-sm text-[var(--color-text)]">
              Page {currentPage} of {totalPages}
            </span>
            <div className="text-sm text-[var(--color-muted)]">
              {totalEntries} total entries
            </div>
          </div>
          
          {/* Right side - Next button (always reserve space) */}
          <div className="w-20 flex justify-end">
            {currentPage < totalPages ? (
              <Link
                href={`/browse?page=${currentPage + 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-surface)] transition-colors"
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
          <InlineIcon className="mx-auto mb-4 h-16 w-16 text-[var(--color-primary)]" name="book" />
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
            {letter 
              ? `No entries starting with "${letter.toUpperCase()}"` 
              : "No entries found"
            }
          </h3>
          <p className="text-[var(--color-muted)] mb-4">
            {letter 
              ? `We don't have any Shona words that start with the letter "${letter.toUpperCase()}" yet.`
              : "No dictionary entries match your current filter."
            }
          </p>
          <p className="text-sm text-[var(--color-muted)]">
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
                className="px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-surface)] transition-colors"
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
            <span className="px-4 py-2 text-sm text-[var(--color-text)]">
              Page {currentPage} of {totalPages}
            </span>
            <div className="text-sm text-[var(--color-muted)]">
              {totalEntries} total entries
            </div>
          </div>
          
          {/* Right side - Next button (always reserve space) */}
          <div className="w-20 flex justify-end">
            {currentPage < totalPages ? (
              <Link
                href={`/browse?page=${currentPage + 1}${letter ? `&letter=${letter}` : ''}`}
                className="px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-surface)] transition-colors"
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
