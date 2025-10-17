export default function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shona Dictionary",
    "alternateName": "Duramazwi",
    "url": "https://dictionary.chishona.org",
    "description": "Your comprehensive guide to the Shona language. Explore the meanings of Shona words or find Shona equivalents for English words.",
    "inLanguage": ["en", "sn"],
    "about": {
      "@type": "Language",
      "name": "Shona",
      "alternateName": "sn",
      "description": "A Bantu language of the Shona people of Zimbabwe"
    },
    "mainEntity": {
      "@type": "Dictionary",
      "name": "Shona Dictionary",
      "description": "A comprehensive dictionary of Shona words and their meanings",
      "inLanguage": ["sn", "en"],
      "url": "https://dictionary.chishona.org",
      "publisher": {
        "@type": "Organization",
        "name": "Shona Dictionary",
        "url": "https://dictionary.chishona.org"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dictionary.chishona.org/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://dictionary.chishona.org"
    ],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dictionary.chishona.org"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  );
}
