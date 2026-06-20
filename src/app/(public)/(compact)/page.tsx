import { Suspense } from "react";
import { Metadata } from "next/types";
import SimpleSearchBar from "@/component/simple-search-bar.component";
import ResultsPage from "@/app/ResultsPage";
import Link from "next/link";
import WebsiteStructuredData from "@/component/website-structured-data.component";
import SvgIcon from "@/component/icons/svg-icon";
import { IoLanguage } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import dataService from "@/services/dataService";
import { Meaning } from "@/components/dictionary-entry-clean";
import { createMetadata } from "@/utils/metadata";
import SocialLinks from "@/components/SocialLinks";
import InlineIcon from "@/components/InlineIcon";

export const dynamic = "force-dynamic"; // Need dynamic for search params

// Helper function to format word display for metadata (same as in word page)
const formatWordForMetadata = (word: string, meanings: Meaning[]) => {
  const hasVerbMeaning = meanings.some(
    (meaning) =>
      meaning.partOfSpeech && meaning.partOfSpeech.toLowerCase() === "verb",
  );
  const hasNonVerbMeaning = meanings.some(
    (meaning) =>
      meaning.partOfSpeech && meaning.partOfSpeech.toLowerCase() !== "verb",
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

function getTwoHourRandomWord() {
  const words = dataService.getAllWords();

  if (words.length === 0) {
    return null;
  }

  const twoHourBucket = Math.floor(Date.now() / (1000 * 60 * 60 * 2));
  const index = ((twoHourBucket * 2654435761) >>> 0) % words.length;
  const word = words[index];
  const details = dataService.getWordDetails(word);
  const firstEntry = Array.isArray(details) ? details[0] : null;
  const definition = firstEntry?.meanings?.[0]?.definitions?.[0]?.definition;

  return {
    definition: definition || "Explore this Shona word",
    word,
  };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { q?: string };
}): Promise<Metadata> {
  const { q } = await searchParams;
  const searchQuery = q || "";

  if (searchQuery) {
    // Check if we have results for this search
    const searchResults = dataService.search(searchQuery);

    if (searchResults && searchResults.length > 0) {
      const firstResult = searchResults[0];
      const formattedWord = formatWordForMetadata(
        firstResult.word,
        firstResult.meanings,
      );

      return createMetadata({
        title: `Search results for "${searchQuery}" - ${formattedWord} | Shona Dictionary`,
        description: `Found ${searchResults.length} result${searchResults.length > 1 ? "s" : ""} for "${searchQuery}". Including ${formattedWord} and more Shona words.`,
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

export default async function HomePage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const { q } = await searchParams; // Extract query parameter
  const searchQuery = q || ""; // Extract query parameter

  // Development logging only
  if (process.env.NODE_ENV === "development" && searchQuery) {
    console.log("HomePage searchQuery:", searchQuery);
  }

  const randomHeroWord = getTwoHourRandomWord();

  return (
    <div>
      <WebsiteStructuredData />
      {/* Animated Header - transitions between full hero and compact search */}
      <header
        className={`transition-all duration-500 ease-in-out ${searchQuery ? "py-0 mb-0" : "mb-10"}`}
      >
        {searchQuery ? (
          <div className="mx-auto w-full transition-all duration-500 ease-in-out">
            <div id="search-bar">
              <SimpleSearchBar initialQuery={searchQuery} />
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
            <div className="relative overflow-hidden bg-[var(--color-primary)] px-6 py-8 text-[var(--color-hero-text)] sm:px-8 sm:py-10">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[var(--color-accent)]" />
              <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-[var(--color-danger)]" />

              <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="text-left">
                  <div className="theme-hero-pill mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur">
                    <span aria-hidden="true">
                      <IoLanguage />
                    </span>
                    <span>English ↔ ChiShona</span>
                  </div>
                  <h1 className="text-4xl font-black tracking-normal md:text-6xl capitalize">
                    Shona dictionary
                  </h1>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-[var(--color-hero-text)]/90">
                    Explore the meanings of Shona words or find Shona
                    equivalents for English words.
                  </p>
                </div>

                {randomHeroWord && (
                  <Link
                    href={`/word/${encodeURIComponent(randomHeroWord.word)}`}
                    className="w-full max-w-sm rotate-[-2deg] rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 text-[var(--color-text)] shadow-[var(--shadow-card)] transition-transform duration-300 hover:rotate-0 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] dark:bg-[var(--color-surface)] md:w-72"
                    title={`View definition of "${randomHeroWord.word}"`}
                    aria-label={`View random word "${randomHeroWord.word}"`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-primary)]">
                      <span aria-hidden="true" className="text-xl">
                        <CiBookmark />
                      </span>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)] dark:text-[var(--color-primary)]">
                      Random word
                    </p>
                    <p className="text-3xl font-black text-[var(--color-primary)] dark:text-[var(--color-text)]">
                      {randomHeroWord.word}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[var(--color-muted)]">
                      {randomHeroWord.definition}
                    </p>
                    <p className="mt-4 inline-flex rounded-full text-[var(--color-accent)] px-3 py-1 text-sm font-semibold ">
                      Refreshes every 2 hours
                    </p>
                  </Link>
                )}
              </div>
            </div>

            <div className="px-4 pb-6 pt-5 sm:px-8">
              <div className="mx-auto max-w-2xl">
                <div id="search-bar">
                  <SimpleSearchBar
                    initialQuery={searchQuery}
                    className="mb-4"
                  />
                </div>
              </div>

              <div className="flex flex-row flex-wrap justify-center items-center gap-1 sm:gap-2 text-base">
                <Link
                  href="/browse"
                  className="text-[var(--color-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)] transition-colors duration-200 px-2 py-1 rounded-md"
                  title="Browse all dictionary entries"
                  aria-label="Browse all dictionary entries"
                >
                  Browse all entries
                </Link>
                <span className="text-[var(--color-border)] text-sm">•</span>
                <Link
                  href="/random"
                  className="text-[var(--color-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)] transition-colors duration-200 px-2 py-1 rounded-md"
                  title="Get a random Shona word"
                  aria-label="Get a random Shona word"
                >
                  Random word
                </Link>
                <span className="text-[var(--color-border)] text-sm">•</span>
                <Link
                  href="/suggest"
                  className="text-[var(--color-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)] transition-colors duration-200 px-2 py-1 rounded-md"
                  title="Suggest a new word for the dictionary"
                  aria-label="Suggest a new word for the dictionary"
                >
                  Suggest a word
                </Link>
                <span className="text-[var(--color-border)] text-sm">•</span>
                <Link
                  href="/challenge/daily"
                  className="text-[var(--color-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)] transition-colors duration-200 px-2 py-1 rounded-md"
                  title="Take the daily challenge"
                  aria-label="Take the daily challenge"
                >
                  Daily Shona Challenge
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Separator for search results */}
      {searchQuery && (
        <hr className="h-px my-4 bg-[var(--color-border)] border-0" />
      )}

      {/* Search Results or Welcome Content */}
      {searchQuery ? (
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center py-12"
              role="status"
              aria-label="Loading search results"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-primary)]"></div>
              <span className="sr-only">Loading search results...</span>
            </div>
          }
        >
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
      <Link
        href="/challenge/daily"
        className="block mb-8 group hover:underline hover:text-[--color-accent] text-white"
      >
        <div className="relative overflow-hidden bg-[var(--color-primary)] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"></div>
          </div>

          <div className="relative flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[#1B1B1B] shadow-[var(--shadow-card)]"
                >
                  <SvgIcon className="h-8 w-8" icon="Trophy" />
                </span>
                <div>
                  <h2 className="text-3xl font-bold  mb-1">
                    Daily Shona Challenge
                  </h2>
                  <p className=" text-lg">Test your Shona knowledge today!</p>
                </div>
              </div>
              <p className="text-lg mb-4 max-w-xl">
                Take on fun challenges to improve your vocabulary. New
                challenges every day!
              </p>
              <div className="inline-flex items-center gap-2 theme-button-accent px-4 py-2 rounded-lg font-semibold group-hover:brightness-95 transition-colors border">
                <span>Start Challenge</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block">
              <InlineIcon
                className="h-20 w-20 opacity-20 transform rotate-12 text-[var(--color-hero-text)]"
                name="flash"
              />
            </div>
          </div>
        </div>
      </Link>

      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
        Explore the Shona Dictionary
      </h2>

      <div className="space-y-6 text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
        <p>
          Welcome to our growing repository of words from the rich and vibrant
          Shona lexicon. This project is a community-driven effort to document
          and celebrate the language.
        </p>
        {/* Social Media Links */}
        <div className="mb-6 text-center">
          <div className="flex justify-center  mb-2">
            <SocialLinks variant="compact" />
          </div>
          <h3 className="text-sm font-medium text-[var(--color-muted)] underline">
            Follow us for daily Shona content
          </h3>
        </div>
        <p>
          Our ambition is to build the most comprehensive dataset of Shona
          words, making it a valuable resource for speakers and learners alike.
        </p>
        <p>
          <Link
            href="/suggest"
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)] underline font-medium"
            title="Contribute to the dictionary"
            aria-label="Contribute to the dictionary"
          >
            Your suggestions
          </Link>{" "}
          play a vital role in shaping this project. Contribute today and be
          part of the journey!
        </p>
      </div>

      {/* Featured Words Preview */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 shadow-[var(--shadow-card)]">
        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
          Featured Words
        </h3>
        <p className="text-lg text-[var(--color-muted)] mb-4">
          Discover some words from our dictionary:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Sample featured words - you can make this dynamic later */}
          {[
            "adhiresi",
            "aina",
            "aini",
            "aisi",
            "bako",
            "chitima",
            "gumbeze",
            "mweya",
          ].map((word) => (
            <Link
              key={word}
              href={`/word/${encodeURIComponent(word)}`}
              className="text-lg text-[var(--color-primary)] hover:underline hover:text-[var(--color-accent)] font-medium transition-colors"
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
            className="inline-flex items-center px-4 py-2 theme-button-accent hover:brightness-95 rounded-md transition-colors hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)]"
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
