import Label from "@/component/atom/label.component";
import SearchBar from "@/component/search-bar.component";
import dataService from "@/services/dataService";
import { audioDataService } from "@/services/audioDataService";
import { createMetadata } from "@/utils/metadata";
// import { Courgette, Prata } from "next/font/google";
import { Metadata } from "next/types";
import DictionaryEntryClean, { DictionaryEntry, Meaning } from "@/components/dictionary-entry-clean";
import StructuredData from "@/component/structured-data.component";
import { createBreadcrumbs } from "@/utils/breadcrumbs";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";

// Helper function to format word display for metadata
const formatWordForMetadata = (word: string, meanings: Meaning[]) => {
  const hasVerbMeaning = meanings.some(meaning => 
    meaning.partOfSpeech && meaning.partOfSpeech.toLowerCase() === 'verb'
  );
  const hasNonVerbMeaning = meanings.some(meaning => 
    meaning.partOfSpeech && meaning.partOfSpeech.toLowerCase() !== 'verb'
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


// const spaceMono = Courgette({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
// });

// const prata = Prata({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
// });

// Generate static params for all words at build time
export async function generateStaticParams() {
  const allWords = dataService.getAllWords();
  return allWords.map((word) => ({
    id: word,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id: rawId } = await params;
  const id = decodeURIComponent(rawId);
  const wordDetails: DictionaryEntry[] | null = dataService.getWordDetails(id) as DictionaryEntry[] | null;

  if (wordDetails && wordDetails.length > 0) {
    const firstEntry = wordDetails[0];
    const firstDefinition = firstEntry.meanings[0].definitions[0].definition;
    const formattedWord = formatWordForMetadata(firstEntry.word, firstEntry.meanings);
    const partOfSpeech = firstEntry.meanings[0].partOfSpeech || 'noun';
    
    // Check if word has multiple meanings or can be used as verb
    const hasVerbMeaning = firstEntry.meanings.some(m => m.partOfSpeech?.toLowerCase() === 'verb');
    const hasNonVerbMeaning = firstEntry.meanings.some(m => m.partOfSpeech?.toLowerCase() !== 'verb');
    const hasBothForms = hasVerbMeaning && hasNonVerbMeaning;
    const totalMeanings = firstEntry.meanings.reduce((sum, m) => sum + m.definitions.length, 0);
    
    // Generate dynamic OG image URL
    const ogImageParams = new URLSearchParams({
      word: firstEntry.word,
      definition: firstDefinition,
      pos: partOfSpeech,
    });
    
    if (hasBothForms) {
      ogImageParams.set('hasBothForms', 'true');
    }
    
    if (totalMeanings > 1) {
      ogImageParams.set('totalMeanings', totalMeanings.toString());
    }
    
    const ogImageUrl = `https://shonadictionary.com/api/og/word?${ogImageParams.toString()}`;
    
    return createMetadata(
      {
        title: `Meaning of ${formattedWord} in Shona | Shona Dictionary`,
        description: `The meaning of ${formattedWord} in Shona is ${firstDefinition}...`,
        keywords: `The meaning of ${formattedWord} in Shona, define ${formattedWord} in Shona, ${id} zvinorevei, ku${id}, Shona dictionary, Shona words, Shona language, Shona definitions, meanings, learn Shona, Shona-English dictionary, Shona translation, Shona pronunciation`,
        alternates: {
          canonical: `https://shonadictionary.com/word/${encodeURIComponent(id)}`
        },
        openGraph: {
          url: `https://shonadictionary.com/word/${encodeURIComponent(id)}`,
          images: [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: `Meaning of ${formattedWord} in Shona`,
              // type: 'image/png',
            }
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: `Meaning of ${formattedWord} in Shona`,
          description: firstDefinition,
          images: [ogImageUrl],
        }
      }
    );
  }
  return createMetadata({
    title: "Word not found",
    description: `We couldn't find the meaning of ${id} in Shona.`,
    openGraph: {
      url: `https://shonadictionary.com/word/${id}`,
    }
  });
}

export const dynamic = "force-static";
export const revalidate = false; // Forces static rendering

export default async function DetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: rawId } = await params;
  const id = decodeURIComponent(rawId);
  const wordDetails: DictionaryEntry[] | null = dataService.getWordDetails(id) as DictionaryEntry[] | null;
  
  // Pre-resolve audio data at build time (like wordDetails)
  const audioRecords = wordDetails && wordDetails.length > 0 
    ? audioDataService.getRecordsForEntry(id)
    : [];
  
  // Development logging only
  if (process.env.NODE_ENV === 'development' && audioRecords.length === 0) {
    console.log(`🎵 No audio found for: ${id}`);
  }

  return (
    <div>
      {wordDetails && wordDetails.length > 0 && (
        <StructuredData 
          entry={wordDetails[0]} 
          url={`https://shonadictionary.com/word/${encodeURIComponent(id)}`} 
        />
      )}
      <BreadcrumbStructuredData breadcrumbs={createBreadcrumbs.word(id)} />
      <header>
        <div id="search-bar">
          <SearchBar />
        </div>
      </header>
      {wordDetails && wordDetails.length > 0 ? (
        <div className="">
          {wordDetails.map((word: DictionaryEntry, index: number) => (
            <div key={index} className="mb-12">
              <DictionaryEntryClean entry={word} audioRecords={audioRecords} />
            </div>
          ))}
        </div>
      ) : (
        // TODO: maybe just turn this into a search?
        <div className="flex flex-col my-32 text-center">
          <Label size="h3" variant="t1">
            Tineurombo, we couldn't find a meaning for &quot;{id}&quot;.
          </Label>
          <Label variant="s1">
            If it's a Shona word, try checking the spelling. If it's an English
            word, we might not have its Shona equivalent yet. Alternatively,
            head to the web for more information.
          </Label>
        </div>
      )}
    </div>
  );
}

// Old components removed - now using DictionaryEntryClean component
