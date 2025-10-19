export default function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shona Dictionary",
    "alternateName": "Duramazwi",
    "url": "https://shonadictionary.com",
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
      "url": "https://shonadictionary.com",
      "publisher": {
        "@type": "Organization",
        "name": "Shona Dictionary",
        "url": "https://shonadictionary.com"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://shonadictionary.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://shonadictionary.com"
    ],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://shonadictionary.com"
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
