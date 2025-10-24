export interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbStructuredData {
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

const BASE_URL = "https://shonadictionary.com";

/**
 * Creates breadcrumb structured data for different page types
 */
export const createBreadcrumbs = {
  /**
   * Home page - no breadcrumbs needed
   */
  home: (): null => null,

  /**
   * Word detail pages: Home > Browse > [Word]
   */
  word: (wordId: string): BreadcrumbStructuredData => ({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      {
        "@type": "ListItem", 
        position: 2,
        name: "Browse",
        item: `${BASE_URL}/browse`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: wordId,
        item: `${BASE_URL}/word/${encodeURIComponent(wordId)}`
      }
    ]
  }),

  /**
   * Browse pages: Home > Browse
   */
  browse: (letter?: string): BreadcrumbStructuredData => {
    const breadcrumbs: BreadcrumbItem[] = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home", 
        item: BASE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Browse",
        item: `${BASE_URL}/browse`
      }
    ];

    // Add letter-specific breadcrumb if provided
    if (letter) {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 3,
        name: `Letter ${letter.toUpperCase()}`,
        item: `${BASE_URL}/browse?letter=${letter.toLowerCase()}`
      });
    }

    return {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs
    };
  },

  /**
   * Daily Challenge: Home > Daily Challenge
   */
  dailyChallenge: (): BreadcrumbStructuredData => ({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Daily Challenge",
        item: `${BASE_URL}/challenge/daily`
      }
    ]
  }),

  /**
   * Random word: Home > Random Word
   */
  random: (): BreadcrumbStructuredData => ({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Random Word",
        item: `${BASE_URL}/random`
      }
    ]
  }),

  /**
   * Suggest page: Home > Suggest
   */
  suggest: (): BreadcrumbStructuredData => ({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Suggest",
        item: `${BASE_URL}/suggest`
      }
    ]
  }),

  /**
   * Translate page: Home > Translate
   */
  translate: (): BreadcrumbStructuredData => ({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Translate",
        item: `${BASE_URL}/translate`
      }
    ]
  })
};

/**
 * Generate JSON-LD string for breadcrumb structured data
 */
export function generateBreadcrumbJsonLd(breadcrumbs: BreadcrumbStructuredData | null): string | null {
  if (!breadcrumbs) return null;
  return JSON.stringify(breadcrumbs).replace(/</g, '\\u003c');
}
