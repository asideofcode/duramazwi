import { MetadataRoute } from 'next';
import data from '@/data/data.json';


export default function sitemap(): MetadataRoute.Sitemap {
  const words = data.map((word) => ({
    url: `https://dictionary.chishona.org/word/${encodeURIComponent(word.word)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  return [
    {
      url: 'https://dictionary.chishona.org',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dictionary.chishona.org/suggest',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...words
  ];
}
