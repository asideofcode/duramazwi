import Label from "@/component/atom/label.component";
import SearchBar from "@/component/search-bar.component";
import dataService from "@/services/dataService";
import { createMetadata } from "@/utils/metadata";
// import { Courgette, Prata } from "next/font/google";
import { Metadata } from "next/types";
import DictionaryEntryClean, { DictionaryEntry } from "@/components/dictionary-entry-clean";

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

// TODO: use generateStaticParams and maybe make this static somehow ?
// See https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id: rawId } = await params;
  const id = decodeURIComponent(rawId);
  const wordDetails:any = dataService.getWordDetails(id);

  if (wordDetails && wordDetails.length > 0) {
    const firstDefinition = wordDetails[0].meanings[0].definitions[0].definition;
    return createMetadata(
      {
        title: `Meaning of ${id} in Shona | Shona Dictionary`,
        description: `The meaning of ${id} in Shona is ${firstDefinition}...`,
        keywords: `The meaning of ${id} in Shona, define ${id} in Shona, ${id} zvinorevei, Shona dictionary, Shona words, Shona language, Shona definitions, meanings, learn Shona, Shona-English dictionary, Shona translation, Shona pronunciation`,
        openGraph: {
          url: `https://dictionary.chishona.org/word/${id}`,
        }
      }
    );
  }
  return createMetadata({
    title: "Word not found",
    description: `We couldn't find the meaning of ${id} in Shona.`,
    openGraph: {
      url: `https://dictionary.chishona.org/word/${id}`,
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

  return (
    <div>
      <div id="search-bar">
        <SearchBar />
      </div>
      {wordDetails && wordDetails.length > 0 ? (
        <div className="mt-8">
          {wordDetails.map((word: DictionaryEntry, index: number) => (
            <div key={index} className="mb-12">
              <DictionaryEntryClean entry={word} />
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
