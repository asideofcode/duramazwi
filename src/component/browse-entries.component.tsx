"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DictionaryEntryCompact, DictionaryEntry } from "@/components/dictionary-entry-clean";
import { DictionaryEntrySkeleton } from "./skeleton-loader.component";
import dataService from "@/services/dataService";

interface BrowseEntriesProps {
  currentWords: string[];
}

export default function BrowseEntries({ currentWords }: BrowseEntriesProps) {
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEntries = async () => {
      setLoading(true);
      
      // Simulate loading delay to show skeleton
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const loadedEntries = currentWords.map((word: string) => {
        const details = dataService.getWordDetails(word);
        return details ? (Array.isArray(details) ? details[0] : details) : { word, meanings: [] };
      }).filter(Boolean);
      
      setEntries(loadedEntries);
      setLoading(false);
    };

    loadEntries();
  }, [currentWords]);

  if (loading) {
    return (
      <div className="space-y-6 mb-8">
        {Array.from({ length: Math.min(currentWords.length, 10) }).map((_, index) => (
          <DictionaryEntrySkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 mb-8">
      {entries.map((entry: DictionaryEntry, index: number) => (
        <Link
          key={`${entry.word}-${index}`}
          prefetch={false}
          href={`/word/${encodeURIComponent(entry.word)}`}
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500"
          title={`View full definition of "${entry.word}"`}
        >
          <DictionaryEntryCompact entry={entry} />
        </Link>
      ))}
    </div>
  );
}
