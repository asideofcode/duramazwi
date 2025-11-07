import Link from 'next/link';
import { Metadata } from 'next';
import DailyChallengeContainer from '@/components/challenge/DailyChallengeContainer';
import SoundControls from '@/components/SoundControls';
import SearchBar from "@/component/search-bar.component";
import { createBreadcrumbs } from "@/utils/breadcrumbs";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import { getDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { getTodayInTimezone, isToday } from '@/utils/timezone';
import { headers } from 'next/headers';
import { DailyChallenge, Challenge } from '@/types/challenge';
import { shuffleArray } from '@/utils/shuffle';
import { createMetadata } from '@/utils/metadata';

// Force dynamic rendering since we use searchParams
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  // Check if there's a challenge available for better SEO
  const todaysChallenge = await getTodaysChallenge();
  
  const hasChallenge = !!todaysChallenge;
  const challengeCount = todaysChallenge?.challenges?.length || 0;
  
  return createMetadata({
    title: hasChallenge 
      ? 'Daily Shona Challenge | Shona Dictionary'
      : 'Daily Shona Challenge - Coming Soon | Shona Dictionary',
    description: hasChallenge
      ? 'Test your Shona language skills with today\'s challenge. Improve your vocabulary, pronunciation, and comprehension with interactive exercises.'
      : 'Daily Shona language challenge coming soon! Test your knowledge with interactive exercises including multiple choice, audio recognition, and translation challenges.',
    keywords: 'Shona challenge, daily Shona quiz, learn Shona, Shona exercises, Shona practice, Shona language learning, interactive Shona lessons',
    alternates: {
      canonical: 'https://shonadictionary.com/challenge/daily'
    },
    openGraph: {
      title: hasChallenge ? 'Daily Shona Challenge - Test Your Skills' : 'Daily Shona Challenge - Coming Soon',
      description: hasChallenge 
        ? `Take on today's ${challengeCount}-question Shona language challenge`
        : 'Daily Shona language challenges coming soon',
      url: 'https://shonadictionary.com/challenge/daily',
      type: 'website',
      images: [
        {
          url: 'https://shonadictionary.com/daily-challenge-og.png',
          width: 1200,
          height: 630,
          alt: 'Daily Shona Challenge',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: hasChallenge ? 'Daily Shona Challenge' : 'Daily Shona Challenge - Coming Soon',
      description: hasChallenge 
        ? `Take on today's ${challengeCount}-question challenge`
        : 'Daily Shona challenges coming soon',
      images: ['https://shonadictionary.com/daily-challenge-og.png'],
    }
  });
}

async function getTodaysChallenge(dateOverride?: string, timezone?: string, isPreview?: boolean): Promise<DailyChallenge | null> {
  try {
    const db = await getDatabase();
    const targetDate = dateOverride || getTodayInTimezone(timezone || 'UTC');
    
    // Get the daily challenge from the daily_challenges collection
    // In preview mode (development only), show draft challenges too
    const query: any = { date: targetDate };
    if (!isPreview) {
      query.status = 'published';
    }
    
    const dailyChallenge = await db.collection('daily_challenges').findOne(query);
    
    if (!dailyChallenge) {
      return null;
    }
    
    // Get the individual challenges referenced in the daily challenge
    const challengeObjectIds = dailyChallenge.challengeIds.map((id: string) => new ObjectId(id));
    const challenges = await db.collection('challenges').find({
      _id: { $in: challengeObjectIds }
    }).toArray();
    
    if (challenges.length === 0) {
      return null;
    }
    
    // Preserve the order from challengeIds
    const challengeMap = new Map(
      challenges.map(doc => [doc._id.toString(), doc])
    );
    
    const orderedChallenges = dailyChallenge.challengeIds
      .map((id: string) => challengeMap.get(id))
      .filter((doc: any) => doc !== undefined);
    
    // Map and shuffle options/distractors for each challenge
    const shuffledChallenges: Challenge[] = orderedChallenges.map(dbChallenge => ({
      id: dbChallenge._id.toString(),
      type: dbChallenge.type,
      question: dbChallenge.question,
      correctAnswer: dbChallenge.correctAnswer,
      options: dbChallenge.options ? shuffleArray([...dbChallenge.options]) : undefined,
      distractors: dbChallenge.distractors ? shuffleArray([...dbChallenge.distractors]) : undefined,
      audioUrl: dbChallenge.audioUrl,
      explanation: dbChallenge.explanation,
      difficulty: dbChallenge.difficulty,
      points: dbChallenge.points
    }));
    
    return {
      date: dailyChallenge.date,
      challenges: shuffledChallenges,
      totalPoints: dailyChallenge.totalPoints,
      estimatedTime: dailyChallenge.estimatedTime,
      status: dailyChallenge.status || 'published' // Default to published for backward compatibility
    };
  } catch (error) {
    console.error('Failed to get daily challenge:', error);
    return null;
  }
}

interface DailyChallengePageProps {
  searchParams: Promise<{ date?: string; preview?: string }>;
}

export default async function DailyChallengePage({ searchParams }: DailyChallengePageProps) {
  // Await searchParams as required by Next.js 15
  const params = await searchParams;
  
  // Get timezone from headers or cookies (if client sent it)
  const headersList = await headers();
  const cookieHeader = headersList.get('cookie');
  const timezoneCookie = cookieHeader?.split(';')
    .find(c => c.trim().startsWith('timezone='))
    ?.split('=')[1];
  
  const clientTimezone = headersList.get('x-timezone') || timezoneCookie || 'UTC';
  
  // Validate date format if provided (YYYY-MM-DD)
  const dateOverride = params.date && /^\d{4}-\d{2}-\d{2}$/.test(params.date) 
    ? params.date 
    : undefined;
  
  // Preview mode - only works in development
  const isPreview = process.env.NODE_ENV === 'development' && params.preview === 'true';
    
  const todaysChallenge = await getTodaysChallenge(dateOverride, clientTimezone, isPreview);

  if (!todaysChallenge) {
    return (
      <div className="min-h-screen dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center p-8 max-w-2xl mx-auto">
          {/* Animated Icon */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Floating sparkles */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-4 -left-4 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-500"></div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            A fun challenge is on its way! ✨
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            We're preparing an exciting new daily challenge just for you!
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              What to Expect:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">🧠</span>
                <span className="text-gray-600 dark:text-gray-400">Brain-teasing questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-500">🎵</span>
                <span className="text-gray-600 dark:text-gray-400">Audio challenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">🔤</span>
                <span className="text-gray-600 dark:text-gray-400">Word building</span>
              </div>
            </div>
          </div>

          {/* Countdown or motivational message */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-4 mb-6">
            <p className="font-medium">
              💡 <strong>Pro Tip:</strong> While you wait, explore the dictionary to discover new Shona words!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              🔍 Explore Dictionary
            </Link>
            <Link
              href="/random"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              🎲 Random Word
            </Link>
          </div>

          {/* Fun fact or teaser */}
          <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Did you know?</strong> Shona is spoken by over 10 million people! 
              Tomorrow's challenge will help you join this amazing community of speakers. 🌍
            </p>
          </div>

          {/* Subtle call to action */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Check back tomorrow for your daily dose of Shona learning! 🚀
          </p>
        </div>
      </div>
    );
  }

  const isViewingPastChallenge = dateOverride && !isToday(dateOverride, clientTimezone);

  return (
    <div className="min-h-screen">
      <BreadcrumbStructuredData breadcrumbs={createBreadcrumbs.dailyChallenge()} />
      {/* Search Bar */}
      <header>
        <div id="search-bar">
          <SearchBar />
        </div>
      </header>

      {isPreview && (
        <div className="bg-purple-50 dark:bg-purple-900/20 border-b border-purple-200 dark:border-purple-800 mb-6">
          <div className="container mx-auto px-4 py-3 max-w-2xl">
            <div className="flex items-center justify-center space-x-2 text-purple-800 dark:text-purple-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                👁️ Preview Mode - Progress will not be saved (Development only)
              </span>
            </div>
          </div>
        </div>
      )}

      {isViewingPastChallenge && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 mb-6">
          <div className="container mx-auto px-4 py-3 max-w-2xl">
            <div className="flex items-center justify-center space-x-2 text-amber-800 dark:text-amber-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                📅 Viewing challenge from {new Date(dateOverride).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      )}
      
      <DailyChallengeContainer challenge={todaysChallenge} isPreview={isPreview} />
    </div>
  );
}
