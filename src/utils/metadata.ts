import { Metadata } from "next/types";

const createBaseMetadata = (): Metadata => {
  const base = {
    title: "Shona Dictionary - Discover the Meaning of Shona Words",
    description:
      "Your go-to resource for understanding Shona. Find accurate definitions, meanings, and examples of Shona words to enhance your language skills and cultural knowledge.",
    keywords:
      "Shona dictionary, Shona words, Shona language, Shona definitions, meanings, learn Shona, Shona-English dictionary, Shona translation, Shona pronunciation",
    google: "notranslate",
    alternates: {
      canonical: "https://dictionary.chishona.org"
    },
    openGraph: {
      type: "website",
      locale: "en_ZW",
      url: "https://dictionary.chishona.org",
      title: undefined, // Fallback logic applied below
      description: undefined, // Fallback logic applied below
      images: [
        {
          url: "https://dictionary.chishona.org/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shona Dictionary - Discover the Meaning of Shona Words",
        },
      ],
    },
    twitter: {
      // handle: "@duramazwi",
      // site: "@duramazwi",
      card: "summary_large_image" as const
    },
  };

  return mergeMetadata(base, {});
};

function mergeMetadata(base: Metadata, overrides: Partial<Metadata>): Metadata {
  return {
    ...base,
    ...overrides,
    alternates: {
      ...base.alternates,
      ...overrides.alternates,
    },
    openGraph: {
      ...base.openGraph,
      ...overrides.openGraph,
      // Apply fallbacks for title and description in OpenGraph
      title:
        overrides.openGraph?.title ||
        overrides?.title ||
        base.openGraph?.title ||
        base?.title || '',
      description:
        overrides.openGraph?.description ||
        overrides?.description ||
        base.openGraph?.description ||
        base?.description || '',
    },
    twitter: {
      ...base.twitter,
      ...overrides.twitter,
    },
  };
}

export const createMetadata = async (
  overrides: Partial<Metadata>
): Promise<Metadata> => {
  const base = createBaseMetadata();
  return mergeMetadata(base, overrides);
};
