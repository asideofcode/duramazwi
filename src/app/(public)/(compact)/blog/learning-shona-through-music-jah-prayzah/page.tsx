import Link from 'next/link';
import SearchBar from '@/component/search-bar.component';
import LyricsDisplay, { LyricBlock } from '@/components/blog/LyricsDisplay';
import StickyVideo from '@/components/blog/StickyVideo';
import { Metadata } from 'next';

/* 
 * NEW STRUCTURED FORMAT EXAMPLE:
 * 
 * const lyricsBlocks: LyricBlock[] = [
 *   { type: 'section', title: '[Intro: Jah Prayzah]' },
 *   { 
 *     type: 'verse',
 *     lines: [
 *       { 
 *         shona: 'Wandinzwa ndichidaidzira dhiya',
 *         english: 'You hear me calling, dear',
 *         links: [{ word: 'nzwa', url: '/word/nzwa' }, { word: 'daidzira', url: '/word/daidzira' }]
 *       },
 *       { 
 *         shona: 'Ndikati dai wambotarisa nguva',
 *         english: "I wish you'd keep an eye on the time",
 *         links: [{ word: 'tarisa', url: '/word/tarisa' }, { word: 'nguva', url: '/word/nguva' }]
 *       }
 *     ]
 *   },
 *   { type: 'section', title: '[Chorus: Jah Prayzah]' },
 *   { 
 *     type: 'verse',
 *     lines: [
 *       { 
 *         shona: 'Vakanetsa unoti mdara vachauya ahaa',
 *         english: "They cause trouble—you'll say the old man will come, ah-ha",
 *         links: [{ word: 'vakanetsa', url: '/word/netsa' }]
 *       }
 *     ]
 *   }
 * ];
 * 
 * Then use: <LyricsDisplay blocks={lyricsBlocks} />
 */

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Learning Shona Through Music: "Mdhara Vachauya" by Jah Prayzah | Shona Dictionary',
  description: 'Full lyrics and translations for "Mdhara Vachauya" by Jah Prayzah. Interactive Shona lyrics with word-by-word meanings, translations, and language learning tools.',
  openGraph: {
    title: 'Learning Shona Through Music: "Mdhara Vachauya" by Jah Prayzah',
    description: 'Full lyrics and translations for "Mdhara Vachauya" by Jah Prayzah. Interactive Shona lyrics with word-by-word meanings and translations.',
    type: 'article',
    url: 'https://shonadictionary.com/blog/learning-shona-through-music-jah-prayzah',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning Shona Through Music: "Mdhara Vachauya"',
    description: 'Full lyrics and translations for "Mdhara Vachauya" by Jah Prayzah. Interactive Shona lyrics with meanings.',
  },
  keywords: [
    'Mdhara Vachauya lyrics',
    'Jah Prayzah Mdhara Vachauya',
    'Jah Prayzah lyrics',
    'Jah Prayzah',
    'Shona language',
    'Shona music',
    'Zimbabwean music',
    'Shona lyrics translation',
    'learn Shona through music',
    'Shona song lyrics'
  ],
};

const lyricsBlocks: LyricBlock[] = [
  { type: 'section', title: '[Intro: Jah Prayzah]' },
  {
    type: 'verse',
    lines: [
      {
        shona: 'Wandinzwa ndichidaidzira dhiya',
        english: 'You hear me calling, dear',
        links: [{ word: 'nzwa', url: '/word/nzwa' }, { word: 'daidzira', url: '/word/daidzira' }]
      },
      {
        shona: 'Ndikati dai wambotarisa nguva',
        english: "I wish you'd keep an eye on the time",
        links: [{ word: 'tarisa', url: '/word/tarisa' }, { word: 'nguva', url: '/word/nguva' }]
      },
      {
        shona: 'Nekuti zvimwe pamwe mhepo ichauya',
        english: 'Because maybe a sudden wind might rise',
        links: [{ word: 'mhepo', url: '/word/mhepo' }, { word: 'ichauya', url: '/word/uya' }]
      },
      {
        shona: 'Asi ramba uchingopenya kunge zuva',
        english: 'But keep on shining like the sun',
        links: [{ word: 'ramba', url: '/word/ramba' }, { word: 'penya', url: '/word/penya' }, { word: 'zuva', url: '/word/zuva' }]
      }
    ]
  },

  { type: 'section', title: '[Chorus 1: Jah Prayzah]' },
  {
    type: 'verse',
    lines: [
      {
        shona: 'Vakanetsa unoti mdara vachauya ahaa',
        english: "They cause trouble—you'll say the old man will come, ah-ha",
        links: [{ word: 'vakanetsa', url: '/word/netsa' }, { word: 'mdara', url: '/word/mdara' }, { word: 'vachauya', url: '/word/uuya' }]
      },
      {
        shona: 'Mudhara wacho ishumba inoruma ahaa',
        english: "That man's a lion—his bite is real, ah-ha",
        links: [{ word: 'mudhara', url: '/word/mdara' }, { word: 'shumba', url: '/word/shumba' }, { word: 'ruma', url: '/word/ruma' }]
      },
      {
        shona: 'Unyerere uchingoshaina ahaa',
        english: 'Hush now and keep on glowing, ah-ha',
        links: [{ word: 'nyarara', url: '/word/nyarara' }, { word: 'shaina', url: '/word/shaina' }]
      },
      {
        shona: 'Unyerere uchingoshaina ahaa',
        english: 'Hush now and keep on glowing, ah-ha',
        links: [{ word: 'nyarara', url: '/word/nyarara' }, { word: 'shaina', url: '/word/shaina' }]
      }
    ]
  },

  { type: 'section', title: '[Verse 1: Jah Prayzah]' },
  {
    type: 'verse',
    lines: [
      {
        shona: 'Kangoma kadii kakede-kede aiwa tamba',
        english: 'Little drum, how sweet—come on, dance',
        links: [{ word: 'ngoma', url: '/word/ngoma' }, { word: 'tamba', url: '/word/tamba' }]
      },
      {
        shona: 'Chirega kuramba uchingonanaira kunge kamba',
        english: 'Stop resisting, stop clinging like a tortoise',
        links: [{ word: 'rega', url: '/word/regai' }, { word: 'ramba', url: '/word/ramba' }, { word: 'kamba', url: '/word/kamba' }]
      },
      {
        shona: 'Kamoto kerudo kamberevere musazokadzima',
        english: "This little flame of love flickers—don't ever put it out",
        links: [{ word: 'moto', url: '/word/moto' }, { word: 'rudo', url: '/word/rudo' }, { word: 'dzima', url: '/word/dzima' }]
      },
      {
        shona: 'Vanosara vachingoringa ringa ndanovhima',
        english: "Let the others circle and stare—me, I'm hunting (I pursue)",
        links: [{ word: 'sara', url: '/word/sara' }, { word: 'vhima', url: '/word/vhima' }]
      }
    ]
  },

  { type: 'section', title: '[Bridge: Jah Prayzah]' },
  {
    type: 'verse',
    lines: [
      {
        shona: 'Kuti dzive ngano',
        english: 'So this becomes a tale to tell',
        links: [{ word: 'ngano', url: '/word/ngano' }]
      },
      {
        shona: 'Haiwa isungano',
        english: "No—it's a covenant",
        links: [{ word: 'sungano', url: '/word/sungano' }]
      },
      {
        shona: 'Ichi chirangano',
        english: 'This is a vow',
        links: [{ word: 'chirangano', url: '/word/chirango' }]
      },
      {
        shona: 'Chibvumirano',
        english: 'An agreement of hearts',
        links: [{ word: 'bvumirana', url: '/word/bvumirana' }]
      }
    ]
  },

  { type: 'section', title: '[Chorus 2: Jah Prayzah]' },
  {
    type: 'verse',
    lines: [
      {
        shona: 'Vanoziva kuti mdara vachauya ahaa',
        english: 'They know the old man will come, ah-ha',
        links: [{ word: 'ziva', url: '/word/ziva' }, { word: 'mdara', url: '/word/mdara' }, { word: 'vachauya', url: '/word/uuya' }]
      },
      {
        shona: 'Mudhara wacho ishumba inoruma ahaa',
        english: "That man's a lion—his bite is real, ah-ha",
        links: [{ word: 'mudhara', url: '/word/mdara' }, { word: 'shumba', url: '/word/shumba' }, { word: 'ruma', url: '/word/ruma' }]
      },
      {
        shona: 'Unyerere uchingoshaina ahaa',
        english: 'Quiet—keep glittering, ah-ha',
        links: [{ word: 'nyarara', url: '/word/nyarara' }, { word: 'shaina', url: '/word/shaina' }]
      },
      {
        shona: 'Unyerere uchingoshaina ahaa',
        english: 'Quiet—keep glittering, ah-ha',
        links: [{ word: 'nyarara', url: '/word/nyarara' }, { word: 'shaina', url: '/word/shaina' }]
      }
    ]
  },

  { type: 'section', title: '[Verse 2: Jah Prayzah]' },
  {
    type: 'verse',
    lines: [
      {
        shona: 'Ukandipa rudo ndogamuchira nemoyo wangu',
        english: "If you give me love, I'll welcome it with all my heart",
        links: [{ word: 'ipa', url: '/word/pa' }, { word: 'rudo', url: '/word/rudo' }, { word: 'moyo', url: '/word/mwoyo' }]
      },
      {
        shona: 'Ukaramba angova madzikirira kuhope dzangu',
        english: 'If you refuse, it will sink deep into my dreams',
        links: [{ word: 'ramba', url: '/word/ramba' }, { word: 'hope', url: '/word/hope' }]
      },
      {
        shona: 'Maona here chisikana chakachangamuka? Iruva rangu',
        english: 'Have you seen that lively girl?—she is my flower',
        links: [{ word: 'ona', url: '/word/ona' }, { word: 'chisikana', url: '/word/musikana' }, { word: 'ruva', url: '/word/ruva' }]
      },
      {
        shona: 'Vakanetsa ramba uchingotsika-tsika dhiya wangu',
        english: 'Troubles will come—keep stepping steady, my dear',
        links: [{ word: 'netsa', url: '/word/netsa' }, { word: 'ramba', url: '/word/ramba' }, { word: 'tsika', url: '/word/tsika' }]
      }
    ]
  },

  { type: 'section', title: '[Outro: Jah Prayzah]' },
  {
    type: 'verse',
    lines: [
      {
        shona: 'Ndanga ndina Oskid',
        english: 'I was with Oskid',
        links: [{ word: 'ndanga', url: '/word/danga' }, { word: 'ndina', url: '/word/na' }]
      }
    ]
  }
];

export default function JahPrayzahBlogPost() {
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
            Learning Shona Through Music: "Mdhara Vachauya"
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Explore the beautiful Shona language through "Mdhara Vachauya" by Jah Prayzah, Zimbabwe's musical icon
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime="2025-11-06">November 6, 2025</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Jah Prayzah, known as "Musoja" (The Soldier), is one of Zimbabwe's most celebrated musicians. His songs 
            blend traditional Shona wisdom with contemporary sounds, making them perfect for language learners who 
            want to understand the depth and beauty of Shona poetry and metaphor.
          </p>
        </div>
      </div>

      {/* YouTube Video Embed */}
      <div className="container mx-auto max-w-4xl">
        <StickyVideo
          videoUrl="https://www.youtube.com/embed/90LRHf9sDOk"
          title="Jah Prayzah - Mdhara Vachauya (Official Video)"
          triggerElementId="lyrics-section"
        />
      </div>

      <article className="container mx-auto max-w-4xl">

        {/* Key Phrases Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Phrases to Learn
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Cultural Note: "Mudhara wacho ishumba inoruma"
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              This powerful metaphor compares a man to a lion whose bite is real. It speaks to strength, 
              authority, and the consequences of one's actions.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Poetic Language: "Kamoto kerudo"
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              "The little flame of love" - Jah Prayzah uses diminutives (ka-) to create tender, intimate imagery. 
              This is a hallmark of Shona love poetry, where small things carry great emotional weight.
            </p>
          </div>
        </div>

        {/* Lyrics Section */}
        <div id="lyrics-section" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Lyrics with Translations
          </h2>
          
          <LyricsDisplay blocks={lyricsBlocks} />
        </div>

        {/* Learning Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Learning Tips
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
              <span>Pay attention to the metaphors—Shona uses nature imagery extensively</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
              <span>Notice the diminutives (ka-, chi-) that add emotional nuance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
              <span>Listen for the rhythm—Shona is a tonal language and music helps with pronunciation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
              <span>Click on the blue words to see their dictionary definitions and usage examples</span>
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
              Take Daily Shona Challenge
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
