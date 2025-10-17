import { MetadataRoute } from 'next';
import data from '@/data/data.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const words: MetadataRoute.Sitemap = data.map((word) => ({
    url: `https://dictionary.chishona.org/word/${encodeURIComponent(word.word)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Generate alphabet browse pages
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const browsePages: MetadataRoute.Sitemap = alphabet.map((letter) => ({
    url: `https://dictionary.chishona.org/browse?letter=${letter.toLowerCase()}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    {
      url: 'https://dictionary.chishona.org',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://dictionary.chishona.org/browse',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://dictionary.chishona.org/random',
      lastModified: new Date().toISOString(),
      changeFrequency: 'always',
      priority: 0.5,
    },
    {
      url: 'https://dictionary.chishona.org/suggest',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    ...browsePages,
    ...words
  ];
}
