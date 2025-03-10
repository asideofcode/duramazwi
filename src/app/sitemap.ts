import { MetadataRoute } from 'next';
import data from '@/data/data.json';

type wordObject = {//set the expected types for each property value
  url: string
  lastModified: string,
  changeFrequency: "daily" | "always" | "hourly" | "weekly" | "monthly" | "yearly" | "never" | undefined
  priority: number,
}

type wordObjectArray = wordObject[] //an array of objects containing information about each word

export default function sitemap(): MetadataRoute.Sitemap {
  const words: wordObjectArray = data.map((word) => ({
    url: `https://dictionary.chishona.org/word/${encodeURIComponent(word.word)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  return [
    {
      url: 'https://dictionary.chishona.org',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://dictionary.chishona.org/suggest',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...words
  ];
}
