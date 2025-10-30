import Link from 'next/link';
import SearchBar from '@/component/search-bar.component';
import LyricsDisplay from './LyricsDisplay';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Pote Lyrics - Learn Shona & Takura ft Tamy Moyo | Shona Dictionary',
  description: 'Full lyrics and translations for "Pote" by Learn Shona & Takura ft Tamy Moyo. Interactive Shona lyrics with word-by-word meanings, translations, and language learning tools.',
  openGraph: {
    title: 'Pote Lyrics - Learn Shona & Takura ft Tamy Moyo',
    description: 'Full lyrics and translations for "Pote" by Learn Shona & Takura ft Tamy Moyo. Interactive Shona lyrics with word-by-word meanings and translations.',
    type: 'article',
    url: 'https://shonadictionary.com/blog/learning-shona-through-music-pote',
    images: [
      {
        url: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/public/pote_music_video_thumbnail.webp',
        width: 1280,
        height: 720,
        alt: 'Pote Music Video - Learn Shona & Takura ft Tamy Moyo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pote Lyrics - Learn Shona & Takura ft Tamy Moyo',
    description: 'Full lyrics and translations for "Pote" by Learn Shona & Takura ft Tamy Moyo. Interactive Shona lyrics with meanings.',
    images: ['https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/public/pote_music_video_thumbnail.webp'],
  },
  keywords: [
    'Pote lyrics',
    'Learn Shona Pote lyrics',
    'Takura Pote lyrics',
    'Tamy Moyo Pote lyrics',
    'Pote song lyrics',
    'Pote Shona lyrics',
    'Learn Shona & Takura ft Tamy Moyo',
    'Shona language',
    'Shona music',
    'Zimbabwean music',
    'Shona lyrics translation',
    'learn Shona through music',
    'Pote meaning',
    'Shona song lyrics'
  ],
};

interface LyricLine {
  text: string;
  isShona: boolean;
  note?: string;
  links?: Array<{ word: string; url: string; tooltip?: string }>;
}

const lyrics: LyricLine[] = [
  { text: 'Akangoti Pote', isShona: true, links: [{ word: 'ti', url: '/word/ti' }, { word: 'pote', url: '/word/ti%20pote' }] },
  { text: 'When she leaves my side', isShona: false },
  { text: 'Hana yotorova', isShona: true, links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
  { text: 'My heart skips a beat', isShona: false },
  { text: 'Akangoti Simu', isShona: true, links: [{ word: 'ti', url: '/word/ti' }, { word: 'Simu', url: '/word/simuka' }] },
  { text: 'If she just stands up', isShona: false },
  { text: 'Hana yotorova', isShona: true, links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
  { text: 'My heart skips a beat', isShona: false },
  { text: 'Ndokufunga ndichikumuka', isShona: true, links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
  { text: 'I think about you when I wake up', isShona: false },
  { text: 'Ndokurinda uchisuka', isShona: true, links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
  { text: 'I will watch you as you do the dishes', isShona: false },
  { text: 'Tiri bhande nebhurugwa', isShona: true, links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
  { text: 'We are like a belt and trousers', isShona: false },
  { text: 'Ngatisa paradzane', isShona: true, links: [{ word: 'paradzane', url: '/word/parara' }] },
  { text: "May we be together forever/let's not destroy each other", isShona: false },
  { text: 'Ndokufunga ndichikumuka', isShona: true, links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
  { text: 'I think about you when I wake up', isShona: false },
  { text: 'Ndokurinda uchisuka', isShona: true, links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
  { text: 'I will watch you as you do the dishes', isShona: false },
  { text: 'If you teach me how to love better', isShona: false },
  { text: 'Ukandidzidzisa kukupa rudo', isShona: true, links: [{ word: 'dzidzisa', url: '/word/dzidza' }] },
  { text: 'Ndotodzidzira', isShona: true, links: [{ word: 'dzidzira', url: '/word/dzidza' }] },
  { text: 'I can learn from you/I will surely learn from you', isShona: false },
  { text: 'Moyo wako wave wangy bhebhi', isShona: true, links: [{ word: 'Moyo', url: '/word/mwoyo' }] },
  { text: 'Your hide is mine, babe', isShona: false },
  { text: 'Wotopfigira', isShona: true, links: [{ word: 'pfigira', url: '/word/pfigira' }] },
  { text: 'Keep it safe', isShona: false },
  { text: 'Themba Lami, Ungakhali ntombi', isShona: true, note: 'Zulu' },
  { text: "Trust me, don't cry", isShona: false },
  { text: "We gon live it up", isShona: false },
  { text: 'Tichanakidzwa', isShona: true },
  { text: 'Nyangwe zvikadini', isShona: true },
  { text: 'No matter what happens', isShona: false },
  { text: 'I will never leave you wega (alone)', isShona: false },
  { text: 'Handikusiye', isShona: true },
  { text: 'When the bass line kicking', isShona: false },
  { text: 'Mangoma achirira', isShona: true },
  { text: 'Girl your wasteline wicked', isShona: false },
  { text: 'Chiuno chako chakaipa', isShona: true },
  { text: 'I will be working', isShona: false },
  { text: 'Ndinenge nichishanda', isShona: true },
  { text: 'Through the weekend', isShona: false },
  { text: 'Panopera vhiki', isShona: true },
  { text: "Till I'm earning 6 digits", isShona: false },
  { text: 'Kusvika ndabata million', isShona: true },
  { text: 'Got me feeling like Romeo', isShona: false },
  { text: 'Ndakunzwa kunge ndiri Romeo', isShona: true },
  { text: "And you're my juliet,", isShona: false },
  { text: 'Iwewe uri Juliet wangu', isShona: true },
  { text: 'Every minute, every second, I wanna know', isShona: false },
  { text: 'Nguva dzose, ndoda kuziva', isShona: true },
  { text: 'Kuti (that) where you at', isShona: false },
  { text: 'Kuti uripi', isShona: true, links: [{ word: 'Kuti', url: '/word/ti' }] },
  { text: 'Akangoti Pote', isShona: true, links: [{ word: 'ti', url: '/word/ti' }, { word: 'pote', url: '/word/ti%20pote' }] },
  { text: 'When she leaves my side', isShona: false },
  { text: 'Hana yotorova', isShona: true, links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
  { text: 'My heart skips a beat', isShona: false },
  { text: 'Akangoti Simu', isShona: true, links: [{ word: 'ti', url: '/word/ti' }, { word: 'Simu', url: '/word/simuka' }] },
  { text: 'If she just stands up', isShona: false },
  { text: 'Hana yotorova', isShona: true, links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
  { text: 'My heart skips a beat', isShona: false },
  { text: 'Ndokufunga ndichikumuka', isShona: true, links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
  { text: 'I think about you when I wake up', isShona: false },
  { text: 'Ndokurinda uchisuka', isShona: true, links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
  { text: 'I will watch you as you do the dishes', isShona: false },
  { text: 'Tiri bhande nebhurugwa', isShona: true, links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
  { text: 'We are like a belt and trousers', isShona: false },
  { text: 'Ngatisa paradzane', isShona: true, links: [{ word: 'paradzane', url: '/word/parara' }] },
  { text: "May we be together forever/let's not destroy each other", isShona: false },
  { text: 'Ndokufunga ndichikumuka', isShona: true, links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
  { text: 'I think about you when I wake up', isShona: false },
  { text: 'Ndokurinda uchisuka', isShona: true, links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
  { text: 'I will watch you as you do the dishes', isShona: false },
  { text: "Handimbo zvipotse maziso anoona", isShona: true },
  { text: "I won't miss it the eyes can see", isShona: false },
  { text: 'Unotombo zvivhunza kuti ndini?', isShona: true },
  { text: 'I ask myself is this me?', isShona: false },
  { text: 'I kiss your lips then you believe me', isShona: false },
  { text: 'Ndokutsvoda wobva wabeliever', isShona: true },
  { text: 'Never leave me', isShona: false },
  { text: 'Usandisiye', isShona: true },
  { text: 'Now stuck to you like glue', isShona: false },
  { text: 'Ndanamira pauri kunge pashanda glue', isShona: true },
  { text: 'You are my everything', isShona: false },
  { text: 'Uri zvese kwandiri', isShona: true },
  { text: 'Tiri bhande nebhurugwa', isShona: true, links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
  { text: 'We are like a belt and trousers', isShona: false },
  { text: 'Whenever you leave', isShona: false },
  { text: 'Pese paunoenda', isShona: true },
  { text: 'Ndinozviziva unodzoka', isShona: true, links: [{ word: 'ziva', url: '/word/ziva' }, { word: 'dzoka', url: '/word/dzoka' }] },
  { text: "I know you're always come back", isShona: false },
  { text: 'Muhana unodzoka mumoyo maangu', isShona: true, links: [{ word: 'Muhana', url: '/word/hana' }, { word: 'dzoka', url: '/word/dzoka' }, { word: 'moyo', url: '/word/mwoyo' }] },
  { text: 'In my heart i know you will come back to me', isShona: false },
  { text: 'Kundishaya babe haugone', isShona: true },
  { text: "You can't live without me/You won't be able to not find me", isShona: false },
  { text: 'Vamwe avo ini handimbode', isShona: true },
  { text: "I don't want any other person", isShona: false },
  { text: 'Huya paduze coz', isShona: true, links: [{ word: 'Huya', url: '/word/uya' }] },
  { text: 'Come closer because', isShona: false },
  { text: 'The street are lonely', isShona: false },
  { text: 'Hakuna vanhu muround', isShona: true },
  { text: 'Pandinoti pote babe hande', isShona: true, links: [{ word: 'pote', url: '/word/ti%20pote' }] },
  { text: "When I make a move lets go babe", isShona: false },
  { text: 'Akangoti Pote', isShona: true, links: [{ word: 'ti', url: '/word/ti' }, { word: 'pote', url: '/word/ti%20pote' }] },
  { text: 'When she leaves my side', isShona: false },
  { text: 'Hana yotorova', isShona: true, links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
  { text: 'My heart skips a beat', isShona: false },
  { text: 'Akangoti Simu', isShona: true, links: [{ word: 'ti', url: '/word/ti' }, { word: 'Simu', url: '/word/simuka' }] },
  { text: 'If she just stands up', isShona: false },
  { text: 'Hana yotorova', isShona: true, links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
  { text: 'My heart skips a beat', isShona: false },
  { text: 'Ndokufunga ndichikumuka', isShona: true, links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
  { text: 'I think about you when I wake up', isShona: false },
  { text: 'Ndokurinda uchisuka', isShona: true, links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
  { text: 'I will watch you as you do the dishes', isShona: false },
  { text: 'Tiri bhande nebhurugwa', isShona: true, links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
  { text: 'We are like a belt and trousers', isShona: false },
  { text: 'Ngatisa paradzane', isShona: true, links: [{ word: 'paradzane', url: '/word/parara' }] },
  { text: "May we be together forever/let's not destroy each other", isShona: false },
  { text: 'Ndokufunga ndichikumuka', isShona: true, links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
  { text: 'I think about you when I wake up', isShona: false },
  { text: 'Ndokurinda uchisuka', isShona: true, links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
  { text: 'I will watch you as you do the dishes', isShona: false },
];

export default function PoteBlogPost() {
  return (
    <div className="min-h-screen">
      {/* Search Bar */}
      <header>
        <div id="search-bar">
          <SearchBar />
        </div>
      </header>

      {/* Separator */}
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      {/* Blog Post Content */}
      <article className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">Learning Shona Through Music</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Shona Through Music: "Pote"
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Explore the beautiful Shona language through the lyrics of "Pote" by Learn Shona ft. Shona Prince & Tamy Moyo
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime="2025-10-28">October 28, 2025</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Music is one of the most powerful tools for language learning. "Pote" is a beautiful modern love song that 
            seamlessly blends Shona, English, and even some Zulu, making it perfect for learners who want to understand 
            how these languages flow naturally in contemporary Zimbabwean music.
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="mb-12">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/SUrDImJ7v0M"
              title="Pote (Official Lyric Video) - Learn Shona & Shona Prince ft Tamy Moyo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Key Phrases Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Phrases to Learn
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Cultural Note: "Tiri bhande nebhurugwa"
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              This beautiful metaphor compares a couple to "a belt and trousers" - inseparable and essential to each other. 
              It's a common Shona expression that captures the interdependence of a strong relationship.
            </p>
          </div>
        </div>

        {/* Lyrics Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Lyrics with Translations
          </h2>
          
          <LyricsDisplay lyrics={lyrics} />
        </div>

        {/* Learning Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Learning Tips
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
              <span>Listen to the song multiple times while reading the lyrics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
              <span>Try singing along to improve your pronunciation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
              <span>Focus on the repeated phrases - they're easier to memorize</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
              <span>Notice how Shona and English blend naturally in modern music</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to learn more Shona?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore our dictionary and take the daily challenge to improve your skills!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Browse Dictionary
            </Link>
            <Link
              href="/challenge/daily"
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              Take Daily Challenge
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
