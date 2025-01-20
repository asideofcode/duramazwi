"use client";

import Label from "@/component/atom/label.component";
import Loading from "@/component/atom/loader.component";
import { useSearch } from "@/context/search-context";
import dataService from "@/services/dataService";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const router = useRouter();
  const { setQuery } = useSearch();
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    globalThis.gtag?.("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
    });
  }, [searchQuery]);

  React.useEffect(() => {
    setQuery(searchQuery);
    setError(null);
  }, [searchQuery]);

  return error ? (
    <div className="flex flex-col my-32 text-center">
      <Label size="h3" variant="t1">
        {error.message}
      </Label>
      <Label variant="s1">{error.resolution}</Label>
    </div>
  ) : (
    <SearchResults
      searchQuery={searchQuery}
      onError={setError}
      router={router}
    />
  );
}

function SearchResults({ searchQuery, onError, router }: any) {
  const { status, setStatus } = useSearch();
  const [searchResults, setSearchResults] = React.useState<any>(null);

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

        if (matchedData.length === 0) {
          globalThis.gtag?.("event", "search_performed", {
            search_term: query,
            result_status: "no_results",
            result_count: 0,
          });

          onError({
            message: `Ndineurombo, we couldn't find a meaning for "${query}".`,
            resolution:
              "Try checking the spelling or searching for related words.",
          });
          setStatus("failed");
        } else {
          globalThis.gtag?.("event", "search_performed", {
            search_term: query,
            result_status: "success",
            result_count: matchedData.length,
          });

          if (
            matchedData.length === 1 &&
            matchedData[0].word.toLowerCase() === query.toLowerCase()
          ) {
            router.push(`/word/${encodeURIComponent(query)}`);
            setStatus("idle");
          } else {
            setSearchResults(matchedData);
            setStatus("success");
          }
        }
      }, 1000);
    } catch (error) {
      onError({ message: "An error occurred", resolution: "Try again later" });
      setStatus("failed");
    }
  }

  if (status === "loading" || (status === "idle" && searchQuery)) {
    return <LoadingFallback />;
  }

  return searchResults ? (
    <ul className="mt-6 flex flex-col  list-disc list-outside pl-4">
      {searchResults.map((word: any, index: number) => (
        <li
          key={index}
          className="cursor-pointer text-blue-600 hover:underline"
        >
          <Link
            prefetch={false}
            href={`/word/${encodeURIComponent(word.word)}`}
            onClick={() => {
              globalThis.gtag?.("event", "word_clicked", {
                word: word.word,
                source: "search_results",
              });
            }}
            className="text-lg font-medium text-blue-600 hover:text-blue-400 transition-colors duration-200 focus:outline-none"
          >
            {word.word}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <WordIndex groupedWords={dataService.getAllWords()} router={router} />
  );
}

function WordIndex({ groupedWords, router }: any) {
  const groups = React.useMemo(() => {
    const sortedWords = groupedWords;

    const groupByFirstLetter = {};
    sortedWords.forEach((word) => {
      const firstLetter = word[0].toUpperCase();
      if (!groupByFirstLetter[firstLetter]) {
        groupByFirstLetter[firstLetter] = [];
      }
      groupByFirstLetter[firstLetter].push(word);
    });
    return groupByFirstLetter;
  }, [groupedWords]);

  return (
    <div className="my-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <Label
        size="h2"
        variant="t1"
        className="text-center text-gray-800 dark:text-gray-200 mb-8"
      >
        Word Index
      </Label>
      <div className="space-y-6">
        {Object.entries(groups).map(([letter, words]) => (
          <div key={letter}>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              {letter.toUpperCase()}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {words.map((word, index) => (
                <Link
                  prefetch={false}
                  href={`/word/${encodeURIComponent(word)}`}
                  key={index}
                  onClick={() => {
                    globalThis.gtag?.("event", "word_clicked", {
                      word: word,
                      source: "index",
                    });
                  }}
                  className="text-lg font-medium text-blue-600 hover:text-blue-400 transition-colors duration-200 focus:outline-none"
                >
                  {word}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
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
