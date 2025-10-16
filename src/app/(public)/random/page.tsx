import { redirect } from 'next/navigation';
import dataService from "@/services/dataService";

export const dynamic = 'force-dynamic';

interface DictionaryEntry {
  word: string;
  meanings: any[];
}

export default async function RandomWordPage() {
  // Get a random word from the data service
  const randomEntry = dataService.getRandomWord() as DictionaryEntry | null;

  if (!randomEntry) {
    // If no random word found, redirect to home page
    redirect('/');
  }

  // Redirect to the actual word page
  // Use the word itself as the slug since that's what the word/[id] route expects
  redirect(`/word/${encodeURIComponent(randomEntry.word.toLowerCase())}`);
}
