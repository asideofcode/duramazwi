"use client";

import React, { Suspense } from "react";
// import { useRouter } from "next/navigation";
import Appbar from "./((component))/appbar.component";
import SearchBar from "./((component))/search-bar.component";
import Label from "@/component/atom/label.component";
import { Prata, Courgette } from "next/font/google";
import allMyDataRaw from "./data.json";
import Fuse from "fuse.js";
import { useRouter, useSearchParams } from "next/navigation"; // Import hooks

const allMyData = allMyDataRaw.flat(); // Flatten the data
allMyData.forEach((item) => {
  item.meanings.forEach((meaning) => {
    meaning.definitions[0].example = meaning.example;
  });
});
const spaceMono = Courgette({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

// Fuzzy search setup
const options = {
  keys: ["word", "meanings.definitions.definition"], // Fields to search
  includeScore: true,
  threshold: 0.1, // Adjust threshold for fuzziness
};

const fuse = new Fuse(allMyData, options);

export default function SearchPageWrapper() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-0">
      <Appbar />
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
          Duramazwi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore the meanings of Shona words or find Shona equivalents for
          English words.
        </p>
      </div>
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchSection />
      </Suspense>
    </main>
  );
}

function SearchSection() {
  const router = useRouter();
  const searchParams = React.useDeferredValue(useSearchParams()); // Use deferred value for smoother updates
  const searchQuery = searchParams.get("q") || ""; // Get 'q' parameter

  const [keyword, setKeyword] = React.useState<string>(searchQuery);
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "failed" | "success"
  >("idle");
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    globalThis.gtag?.("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
    });
  }, [searchQuery]);

  
  React.useEffect(() => {
    setKeyword(searchQuery); // Update the keyword whenever the query changes
    setError(undefined);

    if (searchQuery) {
      makeSearchQuery(searchQuery); // Trigger search if query exists
    }
  }, [searchQuery]);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/?q=${keyword}`); // Navigate to the route with the search query
  }

  async function makeSearchQuery(query: string) {
    try {
      if (query === "") return;
      setStatus("loading");
      setData(undefined);
      setError(undefined);

      // Simulate fetching data
      setTimeout(() => {
        // Perform fuzzy search
        const result = fuse.search(query);

        const matchedData = result.map((item) => item.item);
        if (matchedData.length === 0) {
          globalThis.gtag?.("event", "search_performed", {
            search_term: query,
            result_status: "no_results",
            result_count: 0,
          });
          // No matches found
          setData(undefined);
          setError({
            message: `Ndineurombo, we couldn't find a meaning for "${query}".`,
            resolution: `If it's a Shona word, try checking the spelling. If it's an English word, we might not have its Shona equivalent yet. Alternatively, head to the web for more information.`,
          });
          setStatus("failed");
        } else {
          globalThis.gtag?.("event", "search_performed", {
            search_term: query,
            result_status: "success",
            result_count: matchedData.length,
          });

          // Matches found
          setData(matchedData); // Replace with real API call if needed
          setError(undefined);
          setStatus("success");
        }
      }, 1000);
    } catch (error) {
      console.error(error);
      setStatus("failed");
      setError({ message: "An error occurred", resolution: "Try again later" });
      globalThis.gtag?.("event", "search_error", {
        search_term: query,
        error_message: error.message,
      });
    }
  }

  const sortedWords = React.useMemo(() => {
    const uniqueWords = [...new Set(allMyData.map((item) => item.word))];
    return uniqueWords.sort((a, b) => a.localeCompare(b));
  }, []);

  const groupedWords = React.useMemo(() => {
    const groups = {};
    sortedWords.forEach((word) => {
      const firstLetter = word[0].toUpperCase(); // Get the first letter, uppercase
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(word);
    });
    return groups;
  }, [sortedWords]);

  return (
    <div>
      <SearchBar
        status={status}
        keyword={keyword}
        setKeyword={setKeyword}
        search={handleSearch}
      />
      {searchQuery ? (
        // Show search results
        data &&
        data.map((word: any, index: number) => (
          <Word
            key={index}
            word={word}
            setKeyword={setKeyword}
            makeSearchQuery={makeSearchQuery}
          />
        ))
      ) : (
        // Show index of words when no search query
        <WordIndex groupedWords={groupedWords} setKeyword={setKeyword} router={router} />
      )}
      {error && (
        <div className="flex flex-col my-32 text-center">
          <Label size="h3" variant="t1">
            {error.message}
          </Label>
          <Label variant="s1">{error.resolution}</Label>
        </div>
      )}
    </div>
  );
}

function WordIndex({ groupedWords, setKeyword, router }: any) {
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
        {Object.entries(groupedWords).map(([letter, words]) => (
          <div key={letter}>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              {letter.toUpperCase()}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {words.map((word, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setKeyword(word); // Update the keyword state
                    router.push(`/?q=${word}`); // Update the query parameter
                    globalThis.gtag?.("event", "word_clicked", {
                      word: word,
                      source: "index",
                    });
                  }}
                  className="text-lg font-medium text-blue-600 hover:text-blue-400 transition-colors duration-200 focus:outline-none"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Word({ word, setKeyword, makeSearchQuery }: any) {
  return (
    <section className="flex flex-col my-11">
      <div className="flex place-content-between items-center">
        <div className="flex flex-col gap-1">
          <Label
            size="h1"
            variant="t1"
            className={`text-4xl first-letter:uppercase ${prata.className}`}
          >
            {word.meanings[0].partOfSpeech == "verb" ? "-" : ""}{word.word}
          </Label>
        </div>
      </div>
      <div className="flex flex-col">
        <Meanings
          meanings={word.meanings}
          setQuery={(query: string) => {
            setKeyword(query);
            makeSearchQuery(query);
          }}
        />
      </div>
    </section>
  );
}

function Meanings({ meanings, setQuery = () => {} }: any) {
  return meanings.map((meaning: any, index: number) => {
    const { partOfSpeech } = meaning;
    return (
      <div key={index}>
        <div className="flex gap-4 items-center my-4">
          <Label size="h3" variant="t3" className={spaceMono.className}>
            {partOfSpeech}
          </Label>
          <div className="flex-1 border-b h-1 " />
        </div>
        <Definition definitions={meaning.definitions} />
      </div>
    );
  });
}

function Definition({ definitions }: any) {
  return (
    <div className="flex flex-col gap-2">
      <Label variant="s1">Meaning </Label>
      <div className="flex flex-col gap-1">
        {definitions.map((item: any, index: number) => (
          <ul
            key={index}
            className="flex flex-col  list-disc list-outside pl-4"
          >
            <li key={index}>
              <Label size="h3" variant="t3">
                {item.definition}
              </Label>

              {item.example && (
                <div className="ml-4">
                  <Label size="body" variant="s2">
                    Example:{" "}
                  </Label>
                  <Label size="body" variant="s2" className="italic">
                    {item.example}
                  </Label>
                </div>
              )}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}