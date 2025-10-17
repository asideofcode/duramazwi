import { DictionaryEntry } from "@/components/dictionary-entry-clean";

interface StructuredDataProps {
  entry: DictionaryEntry;
  url: string;
}


export default function StructuredData({ entry, url }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": entry.word,
    "description": entry.meanings[0]?.definitions[0]?.definition || "",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Shona Dictionary",
      "description": "A comprehensive dictionary of Shona words and their meanings",
      "url": "https://dictionary.chishona.org"
    },
    "termCode": entry.word,
    "url": url,
    "additionalType": "https://schema.org/Word",
    "inLanguage": {
      "@type": "Language",
      "name": "Shona",
      "alternateName": "sn"
    },
    "definition": entry.meanings.map(meaning => ({
      "@type": "Definition",
      "text": meaning.definitions.map(def => def.definition).join("; "),
      "partOfSpeech": meaning.partOfSpeech || "unknown"
    })),
    "example": entry.meanings
      .flatMap(meaning => meaning.definitions)
      .filter(def => def.examples && def.examples.length > 0)
      .flatMap(def => def.examples)
      .slice(0, 3), // Limit to 3 examples
    "isPartOf": {
      "@type": "WebSite",
      "name": "Shona Dictionary",
      "url": "https://dictionary.chishona.org",
      "description": "Your comprehensive guide to the Shona language",
      "inLanguage": "en",
      "about": {
        "@type": "Language",
        "name": "Shona"
      }
    },
    "mainEntity": {
      "@type": "Dictionary",
      "name": "Shona Dictionary",
      "description": "A comprehensive dictionary of Shona words and their meanings",
      "inLanguage": ["sn", "en"],
      "url": "https://dictionary.chishona.org"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
