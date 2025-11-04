import { Metadata } from 'next';
import DiscoverFeed from '@/components/discover/DiscoverFeed';
import { createMetadata } from '@/utils/metadata';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetadata({
  title: 'Discover Random Shona Words | Shona Dictionary',
  description: 'Explore and learn Shona words through an engaging infinite scroll experience. Discover new vocabulary, meanings, examples, and pronunciation. Perfect for language learners and enthusiasts.',
  keywords: 'discover Shona words, random Shona words, learn Shona, Shona vocabulary, Shona language learning, Shona dictionary, Shona-English, explore Shona, Shona meanings, Shona examples',
  alternates: {
    canonical: 'https://shonadictionary.com/random'
  },
  openGraph: {
    title: 'Discover Random Shona Words | Shona Dictionary',
    description: 'Explore and learn Shona words through an engaging infinite scroll experience. Discover new vocabulary, meanings, and examples.',
    url: 'https://shonadictionary.com/random',
    images: [
      {
        url: 'https://shonadictionary.com/api/og/random',
        width: 1200,
        height: 630,
        alt: 'Discover Random Shona Words',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Random Shona Words',
    description: 'Explore and learn Shona words through an engaging infinite scroll experience.',
    images: ['https://shonadictionary.com/api/og/random'],
  }
});

export default function RandomPage() {
  return (
    <main className="flex-1 overflow-hidden">
      <DiscoverFeed />
    </main>
  );
}
