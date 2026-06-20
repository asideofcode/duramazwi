import Link from "next/link";
import { Metadata } from "next";
import DailyChallengeContainer from "@/components/challenge/DailyChallengeContainer";
import SoundControls from "@/components/SoundControls";
import SearchBar from "@/component/search-bar.component";
import { createBreadcrumbs } from "@/utils/breadcrumbs";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import CollapsibleEmailSignup from "@/components/challenge/CollapsibleEmailSignup";
import DailyChallengeHeader from "@/components/challenge/DailyChallengeHeader";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getTodayInTimezone, isToday } from "@/utils/timezone";
import { headers } from "next/headers";
import { DailyChallenge, Challenge } from "@/types/challenge";
import { shuffleArray } from "@/utils/shuffle";
import { createMetadata } from "@/utils/metadata";
import InlineIcon from "@/components/InlineIcon";

// Force dynamic rendering since we use searchParams
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  // Check if there's a challenge available for better SEO
  const todaysChallenge = await getTodaysChallenge();

  const hasChallenge = !!todaysChallenge;
  const challengeCount = todaysChallenge?.challenges?.length || 0;

  return createMetadata({
    title: hasChallenge
      ? "Daily Shona Challenge | Shona Dictionary"
      : "Daily Shona Challenge - Coming Soon | Shona Dictionary",
    description: hasChallenge
      ? "Test your Shona language skills with today's challenge. Improve your vocabulary, pronunciation, and comprehension with interactive exercises."
      : "Daily Shona language challenge coming soon! Test your knowledge with interactive exercises including multiple choice, audio recognition, and translation challenges.",
    keywords:
      "Shona challenge, daily Shona quiz, learn Shona, Shona exercises, Shona practice, Shona language learning, interactive Shona lessons",
    alternates: {
      canonical: "https://shonadictionary.com/challenge/daily",
    },
    openGraph: {
      title: hasChallenge
        ? "Daily Shona Challenge - Test Your Skills"
        : "Daily Shona Challenge - Coming Soon",
      description: hasChallenge
        ? `Take on today's ${challengeCount}-question Shona language challenge`
        : "Daily Shona language challenges coming soon",
      url: "https://shonadictionary.com/challenge/daily",
      type: "website",
      images: [
        {
          url: "https://shonadictionary.com/daily-challenge-og.png",
          width: 1200,
          height: 630,
          alt: "Daily Shona Challenge",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: hasChallenge
        ? "Daily Shona Challenge"
        : "Daily Shona Challenge - Coming Soon",
      description: hasChallenge
        ? `Take on today's ${challengeCount}-question challenge`
        : "Daily Shona challenges coming soon",
      images: ["https://shonadictionary.com/daily-challenge-og.png"],
    },
  });
}

async function getTodaysChallenge(
  dateOverride?: string,
  timezone?: string,
  isPreview?: boolean,
): Promise<DailyChallenge | null> {
  try {
    const db = await getDatabase();
    const targetDate = dateOverride || getTodayInTimezone(timezone || "UTC");

    // Get the daily challenge from the daily_challenges collection
    // In preview mode (development only), show draft challenges too
    const query: any = { date: targetDate };
    if (!isPreview) {
      query.status = "published";
    }

    const dailyChallenge = await db
      .collection("daily_challenges")
      .findOne(query);

    if (!dailyChallenge) {
      return null;
    }

    // Get the individual challenges referenced in the daily challenge
    const challengeObjectIds = dailyChallenge.challengeIds.map(
      (id: string) => new ObjectId(id),
    );
    const challenges = await db
      .collection("challenges")
      .find({
        _id: { $in: challengeObjectIds },
      })
      .toArray();

    if (challenges.length === 0) {
      return null;
    }

    // Preserve the order from challengeIds
    const challengeMap = new Map(
      challenges.map((doc) => [doc._id.toString(), doc]),
    );

    const orderedChallenges: any[] = dailyChallenge.challengeIds
      .map((id: string) => challengeMap.get(id))
      .filter((doc: any) => doc !== undefined);

    // Map and shuffle options/distractors for each challenge
    const shuffledChallenges: Challenge[] = orderedChallenges.map(
      (dbChallenge: any) => ({
        id: dbChallenge._id.toString(),
        type: dbChallenge.type,
        question: dbChallenge.question,
        correctAnswer: dbChallenge.correctAnswer,
        options: dbChallenge.options
          ? shuffleArray([...dbChallenge.options])
          : undefined,
        distractors: dbChallenge.distractors
          ? shuffleArray([...dbChallenge.distractors])
          : undefined,
        audioUrl: dbChallenge.audioUrl,
        explanation: dbChallenge.explanation,
        difficulty: dbChallenge.difficulty,
        points: dbChallenge.points,
      }),
    );

    return {
      date: dailyChallenge.date,
      challenges: shuffledChallenges,
      totalPoints: dailyChallenge.totalPoints,
      estimatedTime: dailyChallenge.estimatedTime,
      status: dailyChallenge.status || "published", // Default to published for backward compatibility
    };
  } catch (error) {
    console.error("Failed to get daily challenge:", error);
    return null;
  }
}

interface DailyChallengePageProps {
  searchParams: Promise<{ date?: string; preview?: string }>;
}

export default async function DailyChallengePage({
  searchParams,
}: DailyChallengePageProps) {
  // Await searchParams as required by Next.js 15
  const params = await searchParams;

  // Get timezone from headers or cookies (if client sent it)
  const headersList = await headers();
  const cookieHeader = headersList.get("cookie");
  const timezoneCookie = cookieHeader
    ?.split(";")
    .find((c) => c.trim().startsWith("timezone="))
    ?.split("=")[1];

  const clientTimezone =
    headersList.get("x-timezone") || timezoneCookie || "UTC";

  // Validate date format if provided (YYYY-MM-DD)
  const dateOverride =
    params.date && /^\d{4}-\d{2}-\d{2}$/.test(params.date)
      ? params.date
      : undefined;

  // Preview mode - only works in development
  const isPreview =
    process.env.NODE_ENV === "development" && params.preview === "true";

  const todaysChallenge = await getTodaysChallenge(
    dateOverride,
    clientTimezone,
    isPreview,
  );

  if (!todaysChallenge) {
    const targetDate = dateOverride || getTodayInTimezone(clientTimezone);

    return (
      <div className="min-h-screen">
        <BreadcrumbStructuredData
          breadcrumbs={createBreadcrumbs.dailyChallenge()}
        />

        {/* Search Bar */}
        <header>
          <div id="search-bar">
            <SearchBar />
          </div>
        </header>

        {/* Header with date and navigation */}
        <div className="py-8">
          <DailyChallengeHeader date={targetDate} />

          {/* No Challenge Content */}
          <div className="theme-card rounded-lg p-8 text-center">
            {/* Animated Icon */}
            <div className="mb-8 relative text-center">
              <div className="w-32 h-32 mx-auto bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <svg
                  className="w-16 h-16 text-[var(--color-hero-text)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* Floating sparkles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--color-accent)] rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[var(--color-danger)] rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-4 -left-4 w-3 h-3 bg-[var(--color-primary)] rounded-full animate-bounce delay-500"></div>
            </div>

            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4 text-center">
              <span className="inline-flex items-center justify-center gap-2">
                A fun challenge is on its way!
                <InlineIcon
                  className="h-8 w-8 text-[var(--color-accent)]"
                  name="sparkle"
                />
              </span>
            </h2>

            <p className="text-xl text-[var(--color-text)] mb-6 leading-relaxed text-center">
              We're preparing an exciting new daily challenge just for you!
            </p>

            {/* Email Notification Signup */}
            <div className="my-8">
              <CollapsibleEmailSignup />
            </div>

            <div className="bg-[var(--color-surface-raised)] rounded-xl p-6 shadow-xl mb-8 border border-[var(--color-border)]">
              <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                What to Expect:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <InlineIcon
                    className="h-5 w-5 text-[var(--color-primary)]"
                    name="brain"
                  />
                  <span className="text-[var(--color-muted)]">
                    Brain-teasing questions
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <InlineIcon
                    className="h-5 w-5 text-[var(--color-accent)]"
                    name="music"
                  />
                  <span className="text-[var(--color-muted)]">
                    Audio challenges
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <InlineIcon
                    className="h-5 w-5 text-[var(--color-primary)]"
                    name="text"
                  />
                  <span className="text-[var(--color-muted)]">
                    Word building
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown or motivational message */}
            <div className="bg-[var(--color-primary)] text-[var(--color-hero-text)] rounded-lg p-4 mb-6">
              <p className="font-medium inline-flex items-center gap-2">
                <InlineIcon
                  className="h-5 w-5 text-[var(--color-accent)]"
                  name="tip"
                />
                <span>
                  <strong>Pro Tip:</strong> While you wait, explore the
                  dictionary to discover new Shona words!
                </span>
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 theme-button-accent hover:brightness-95 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:bg-[var(--color-primary)] hover:text-white
                "
              >
                <span className="inline-flex items-center gap-2">
                  <InlineIcon className="h-5 w-5" name="search" />
                  Explore Dictionary
                </span>
              </Link>
              <Link
                scroll={false}
                href="/random"
                className="px-6 py-3 theme-button-accent hover:brightness-95 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]
              "
              >
                <span className="inline-flex items-center gap-2">
                  <InlineIcon className="h-5 w-5" name="dice" />
                  Random Word
                </span>
              </Link>
            </div>

            {/* Fun fact or teaser */}
            <div className="mt-8 p-4 bg-[var(--color-surface-raised)] border border-[var(--color-accent)] rounded-lg">
              <p className="text-sm text-[var(--color-muted)]">
                <strong>Did you know?</strong> Shona is spoken by over 10
                million people!
                <span className="inline-flex items-center gap-2">
                  The challenge will help you join this amazing community of
                  speakers.
                  <InlineIcon className="h-4 w-4" name="globe" />
                </span>
              </p>
            </div>

            {/* Subtle call to action */}
            <p className="text-sm text-[var(--color-muted)] mt-6">
              <span className="inline-flex items-center justify-center gap-2">
                Check back soon for your daily dose of Shona learning!
                <InlineIcon className="h-4 w-4" name="rocket" />
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const isViewingPastChallenge =
    dateOverride && !isToday(dateOverride, clientTimezone);

  return (
    <div className="min-h-screen">
      <BreadcrumbStructuredData
        breadcrumbs={createBreadcrumbs.dailyChallenge()}
      />
      {/* Search Bar */}
      <header>
        <div id="search-bar">
          <SearchBar />
        </div>
      </header>

      {isPreview && (
        <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] mb-6">
          <div className="container mx-auto px-4 py-3 max-w-2xl">
            <div className="flex items-center justify-center space-x-2 text-[var(--color-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">
                <span className="inline-flex items-center gap-2">
                  <InlineIcon className="h-4 w-4" name="eye" />
                  Preview Mode - Progress will not be saved (Development only)
                </span>
              </span>
            </div>
          </div>
        </div>
      )}

      <DailyChallengeContainer
        challenge={todaysChallenge}
        isPreview={isPreview}
      />
    </div>
  );
}
