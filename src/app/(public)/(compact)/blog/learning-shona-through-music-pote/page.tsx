import Link from 'next/link';
import SearchBar from '@/component/search-bar.component';
import LyricsDisplay, { LyricBlock } from '@/components/blog/LyricsDisplay';
import StickyVideo from '@/components/blog/StickyVideo';
import { Metadata } from 'next';
import InlineIcon from '@/components/InlineIcon';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Learning Shona Through Music: "Pote" | Shona Dictionary',
  description: 'Full lyrics and translations for "Pote" by Learn Shona & Takura ft Tamy Moyo. Interactive Shona lyrics with word-by-word meanings, translations, and language learning tools.',
  openGraph: {
    title: 'Learning Shona Through Music: "Pote"',
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
    title: 'Learning Shona Through Music: "Pote"',
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

const lyricsBlocks: LyricBlock[] = [
  {
    type: 'verse',
    lines: [
      { shona: 'Akangoti Pote', english: 'When she leaves my side', links: [{ word: 'ti', url: '/word/ti' }, { word: 'pote', url: '/word/ti%20pote' }] },
      { shona: 'Hana yotorova', english: 'My heart skips a beat', links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
      { shona: 'Akangoti Simu', english: 'If she just stands up', links: [{ word: 'ti', url: '/word/ti' }, { word: 'Simu', url: '/word/simuka' }] },
      { shona: 'Hana yotorova', english: 'My heart skips a beat', links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
      { shona: 'Ndokufunga ndichimuka', english: 'I think about you when I wake up', links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
      { shona: 'Ndokurinda uchisuka', english: 'I will watch you as you do the dishes', links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
      { shona: 'Tiri bhande nebhurugwa', english: 'We are like a belt and trousers', links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
      { shona: 'Ngatisa paradzane', english: "May we be together forever/let's not destroy each other", links: [{ word: 'paradzane', url: '/word/parara' }] },
      { shona: 'Ndokufunga ndichimuka', english: 'I think about you when I wake up', links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
      { shona: 'Ndokurinda uchisuka', english: 'I will watch you as you do the dishes', links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
      { shona: 'Ukandidzidzisa kukupa rudo', english: 'If you teach me how to love better', links: [{ word: 'dzidzisa', url: '/word/dzidza' }], displayOrder: 'english-first' },
      { shona: 'Ndotodzidzira', english: 'I can learn from you/I will surely learn from you', links: [{ word: 'dzidzira', url: '/word/dzidza' }] },
      { shona: 'Moyo wako wave wangy bhebhi', english: 'Your hide is mine, babe', links: [{ word: 'Moyo', url: '/word/mwoyo' }] },
      { shona: 'Wotopfigira', english: 'Keep it safe', links: [{ word: 'pfigira', url: '/word/pfigira' }] },
      { shona: 'Themba Lami, Ungakhali ntombi', english: "Trust me, don't cry", note: 'Zulu' },
      { shona: 'Tichanakidzwa', english: 'We gon live it up', displayOrder: 'english-first' },
      { shona: 'Nyangwe zvikadini', english: 'No matter what happens' },
      { shona: 'Handikusiye', english: 'I will never leave you wega (alone)', displayOrder: 'english-first' },
      { shona: 'Mangoma achirira', english: 'When the bass line kicking', displayOrder: 'english-first' },
      { shona: 'Chiuno chako chakaipa', english: 'Girl your wasteline wicked', displayOrder: 'english-first' },
      { shona: 'Ndinenge nichishanda', english: 'I will be working', displayOrder: 'english-first' },
      { shona: 'Panopera vhiki', english: 'Through the weekend', displayOrder: 'english-first' },
      { shona: 'Kusvika ndabata million', english: "Till I'm earning 6 digits", displayOrder: 'english-first' },
      { shona: 'Ndakunzwa kunge ndiri Romeo', english: 'Got me feeling like Romeo', displayOrder: 'english-first' },
      { shona: 'Iwewe uri Juliet wangu', english: "And you're my juliet,", displayOrder: 'english-first' },
      { shona: 'Nguva dzose, ndoda kuziva', english: 'Every minute, every second, I wanna know', displayOrder: 'english-first' },
      { shona: 'Kuti uripi', english: 'Kuti (that) where you at', links: [{ word: 'Kuti', url: '/word/ti' }],  displayOrder: 'english-first' },
      { shona: 'Akangoti Pote', english: 'When she leaves my side', links: [{ word: 'ti', url: '/word/ti' }, { word: 'pote', url: '/word/ti%20pote' }] },
      { shona: 'Hana yotorova', english: 'My heart skips a beat', links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
      { shona: 'Akangoti Simu', english: 'If she just stands up', links: [{ word: 'ti', url: '/word/ti' }, { word: 'Simu', url: '/word/simuka' }] },
      { shona: 'Hana yotorova', english: 'My heart skips a beat', links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
      { shona: 'Ndokufunga ndichimuka', english: 'I think about you when I wake up', links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
      { shona: 'Ndokurinda uchisuka', english: 'I will watch you as you do the dishes', links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
      { shona: 'Tiri bhande nebhurugwa', english: 'We are like a belt and trousers', links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
      { shona: 'Ngatisa paradzane', english: "May we be together forever/let's not destroy each other", links: [{ word: 'paradzane', url: '/word/parara' }] },
      { shona: 'Ndokufunga ndichimuka', english: 'I think about you when I wake up', links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
      { shona: 'Ndokurinda uchisuka', english: 'I will watch you as you do the dishes', links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
      { shona: 'Handimbo zvipotse maziso anoona', english: "I won't miss it the eyes can see" },
      { shona: 'Unotombo zvivhunza kuti ndini?', english: 'I ask myself is this me?' },
      { shona: 'Ndokutsvoda wobva wabeliever', english: 'I kiss your lips then you believe me', displayOrder: 'english-first' },
      { shona: 'Usandisiye', english: 'Never leave me', displayOrder: 'english-first' },
      { shona: 'Ndanamira pauri kunge pashanda glue', english: 'Now stuck to you like glue', displayOrder: 'english-first' },
      { shona: 'Uri zvese kwandiri', english: 'You are my everything', displayOrder: 'english-first' },
      { shona: 'Tiri bhande nebhurugwa', english: 'We are like a belt and trousers', links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
      { shona: 'Pese paunoenda', english: 'Whenever you leave', displayOrder: 'english-first' },
      { shona: 'Ndinozviziva unodzoka', english: "I know you're always come back", links: [{ word: 'ziva', url: '/word/ziva' }, { word: 'dzoka', url: '/word/dzoka' }] },
      { shona: 'Muhana unodzoka mumoyo maangu', english: 'In my heart i know you will come back to me', links: [{ word: 'Muhana', url: '/word/hana' }, { word: 'dzoka', url: '/word/dzoka' }, { word: 'moyo', url: '/word/mwoyo' }] },
      { shona: 'Kundishaya babe haugone', english: "You can't live without me/You won't be able to not find me" },
      { shona: 'Vamwe avo ini handimbode', english: "I don't want any other person" },
      { shona: 'Huya paduze coz', english: 'Come closer because', links: [{ word: 'Huya', url: '/word/uya' }] },
      { shona: 'Hakuna vanhu muround', english: 'The street are lonely', displayOrder: 'english-first' },
      { shona: 'Pandinoti pote babe hande', english: "When I make a move lets go babe", links: [{ word: 'pote', url: '/word/ti%20pote' }] },
      { shona: 'Akangoti Pote', english: 'When she leaves my side', links: [{ word: 'ti', url: '/word/ti' }, { word: 'pote', url: '/word/ti%20pote' }] },
      { shona: 'Hana yotorova', english: 'My heart skips a beat', links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
      { shona: 'Akangoti Simu', english: 'If she just stands up', links: [{ word: 'ti', url: '/word/ti' }, { word: 'Simu', url: '/word/simuka' }] },
      { shona: 'Hana yotorova', english: 'My heart skips a beat', links: [{ word: 'Hana', url: '/word/hana' }, { word: 'rova', url: '/word/rova' }] },
      { shona: 'Ndokufunga ndichimuka', english: 'I think about you when I wake up', links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
      { shona: 'Ndokurinda uchisuka', english: 'I will watch you as you do the dishes', links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] },
      { shona: 'Tiri bhande nebhurugwa', english: 'We are like a belt and trousers', links: [{ word: 'bhande', url: '/word/bhande' }, { word: 'bhurugwa', url: '/word/bhurugwa' }] },
      { shona: 'Ngatisa paradzane', english: "May we be together forever/let's not destroy each other", links: [{ word: 'paradzane', url: '/word/parara' }] },
      { shona: 'Ndokufunga ndichimuka', english: 'I think about you when I wake up', links: [{ word: 'funga', url: '/word/funga' }, { word: 'muka', url: '/word/muka' }] },
      { shona: 'Ndokurinda uchisuka', english: 'I will watch you as you do the dishes', links: [{ word: 'rinda', url: '/word/rinda' }, { word: 'suka', url: '/word/suka' }] }
    ]
  }
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

      {/* Blog Post Content */}
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[var(--color-primary)]">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-text)]">Learning Shona Through Music</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Learning Shona Through Music: "Pote"
          </h1>
          <p className="text-xl text-[var(--color-muted)] mb-6">
            Explore the beautiful Shona language through the lyrics of "Pote" by Learn Shona ft. Shona Prince & Tamy Moyo
          </p>
          <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
            <time dateTime="2025-10-28">October 28, 2025</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-[var(--color-text)] leading-relaxed">
            Music is one of the most powerful tools for language learning. "Pote" is a beautiful modern love song that 
            seamlessly blends Shona, English, and even some Zulu, making it perfect for learners who want to understand 
            how these languages flow naturally in contemporary Zimbabwean music.
          </p>
        </div>
      </div>

      {/* YouTube Video Embed */}
      <div className="container mx-auto max-w-4xl">
        <StickyVideo 
          videoUrl="https://www.youtube.com/embed/SUrDImJ7v0M"
          title="Pote - Akangoti Pote"
          triggerElementId="lyrics-section"
        />
      </div>

      <article className="container mx-auto max-w-4xl">

        {/* Key Phrases Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
            Key Phrases to Learn
          </h2>
          
          <div className="bg-[var(--color-surface)] border-l-4 border-[var(--color-primary)] p-6 mb-8">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              Cultural Note: "Tiri bhande nebhurugwa"
            </h3>
            <p className="text-[var(--color-text)]">
              This beautiful metaphor compares a couple to "a belt and trousers" - inseparable and essential to each other. 
              It's a common Shona expression that captures the interdependence of a strong relationship.
            </p>
          </div>
        </div>

        {/* Lyrics Section */}
        <div id="lyrics-section" className="mb-12">
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">
            Lyrics with Translations
          </h2>
          
          <LyricsDisplay blocks={lyricsBlocks} />
        </div>

        {/* Learning Tips */}
        <div className="bg-[var(--color-surface)] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
            <span className="inline-flex items-center gap-2">
              <InlineIcon className="h-6 w-6 text-[var(--color-accent)]" name="tip" />
              Learning Tips
            </span>
          </h2>
          <ul className="space-y-3 text-[var(--color-text)]">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">1.</span>
              <span>Listen to the song multiple times while reading the lyrics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">2.</span>
              <span>Try singing along to improve your pronunciation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">3.</span>
              <span>Focus on the repeated phrases - they're easier to memorize</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">4.</span>
              <span>Notice how Shona and English blend naturally in modern music</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 border-t border-[var(--color-border)]">
          <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
            Want to learn more Shona?
          </h3>
          <p className="text-[var(--color-muted)] mb-6">
            Explore our dictionary and take the daily challenge to improve your skills!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 theme-button-accent hover:brightness-95 rounded-lg font-medium transition-colors"
            >
              Browse Dictionary
            </Link>
            <Link
              href="/challenge/daily"
              className="px-6 py-3 bg-[var(--color-primary)] hover:brightness-95 text-[var(--color-hero-text)] rounded-lg font-medium transition-colors"
            >
              Take Daily Shona Challenge
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
