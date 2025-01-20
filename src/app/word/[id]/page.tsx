"use client";

import Label from "@/component/atom/label.component";
import SearchBar from "@/component/search-bar.component";
import dataService from "@/services/dataService";
import { Courgette, Prata } from "next/font/google";
import { useParams } from "next/navigation"; // Import hooks

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

export default function DetailsPage() {
  const { id } = useParams();
  const wordDetails = dataService.getWordDetails(id);

  return (
    <div>
      <SearchBar />
      {wordDetails ? (
        wordDetails.map((word: any, index: number) => (
          <Word key={index} word={word} />
        ))
      ) : (
        // TODO: maybe just turn this into a search?
        <div className="flex flex-col my-32 text-center">
          <Label size="h3" variant="t1">
            Ndineurombo, we couldn't find a meaning for &quot;{id}&quot;.
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

function Word({ word }: any) {
  return (
    <section className="flex flex-col my-11">
      <div className="flex place-content-between items-center">
        <div className="flex flex-col gap-1">
          <Label
            size="h1"
            variant="t1"
            className={`text-4xl first-letter:uppercase ${prata.className}`}
          >
            {word.meanings[0].partOfSpeech == "verb" ? "-" : ""}
            {word.word}
          </Label>
        </div>
      </div>
      <div className="flex flex-col">
        <Meanings meanings={word.meanings} />
      </div>
    </section>
  );
}

function Meanings({ meanings }) {
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
