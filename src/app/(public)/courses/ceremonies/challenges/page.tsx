"use client";

import Link from "next/link";
import { useState, useCallback, ReactNode } from "react";
import { Challenge, ChallengeSession, ChallengeResult } from "@/types/challenge";
import { ceremoniesChallenges } from "@/components/challenge/ceremonies-challenges";
import { shuffleArray } from "@/utils/shuffle";
import ChallengeProgress from "@/components/challenge/ChallengeProgress";
import MultipleChoiceChallenge from "@/components/challenge/MultipleChoiceChallenge";
import TranslationChallenge from "@/components/challenge/TranslationChallenge";
import ChallengeComplete from "@/components/challenge/ChallengeComplete";

type Mode = "easy" | "medium" | "hard" | "mixed";

const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
  </svg>
);

const IconFire = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
  </svg>
);

const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
  </svg>
);

const IconSquares = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
  </svg>
);

const MODE_CONFIG: Record<
  Mode,
  { label: string; description: string; difficulty?: string; count: number; icon: ReactNode }
> = {
  easy: {
    label: "Easy",
    description: "12 beginner challenges. Ceremony vocabulary and identifying which ceremony is which.",
    difficulty: "beginner",
    count: 12,
    icon: <IconStar />,
  },
  medium: {
    label: "Medium",
    description: "12 intermediate challenges. Vocabulary in context and cultural knowledge.",
    difficulty: "intermediate",
    count: 12,
    icon: <IconFire />,
  },
  hard: {
    label: "Hard",
    description: "6 advanced challenges. Build ceremonial phrases and sentences.",
    difficulty: "advanced",
    count: 6,
    icon: <IconBolt />,
  },
  mixed: {
    label: "Mixed",
    description: "10 random challenges across all difficulties.",
    count: 10,
    icon: <IconSquares />,
  },
};

function prepareChallenge(raw: (typeof ceremoniesChallenges)[0]): Challenge {
  return {
    id: raw.id,
    type: raw.type as Challenge["type"],
    question: raw.question,
    correctAnswer: raw.correctAnswer,
    options: raw.options ? shuffleArray([...raw.options]) : undefined,
    distractors: raw.distractors ? shuffleArray([...raw.distractors]) : undefined,
    explanation: raw.explanation,
    difficulty: raw.difficulty as Challenge["difficulty"],
    points: raw.points,
    labels: raw.labels,
  };
}

function buildSet(mode: Mode): Challenge[] {
  const cfg = MODE_CONFIG[mode];
  const pool = cfg.difficulty
    ? ceremoniesChallenges.filter((c) => c.difficulty === cfg.difficulty)
    : shuffleArray([...ceremoniesChallenges]);
  const selected = pool.slice(0, cfg.count);
  return selected.map(prepareChallenge);
}

function makeSession(challenges: Challenge[]): ChallengeSession {
  return {
    date: "ceremonies-course",
    challenges,
    results: [],
    currentChallengeIndex: 0,
    startTime: Date.now(),
    isComplete: false,
    totalScore: 0,
  };
}

// ── Selection screen ──────────────────────────────────────────────────────────

function SelectionScreen({ onStart }: { onStart: (mode: Mode) => void }) {
  const [selected, setSelected] = useState<Mode | null>(null);

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-xl mx-auto">
          <Link
            href="/courses/ceremonies"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Ceremonies Course
          </Link>
          <h1 className="text-4xl font-bold text-[var(--color-hero-text)] mb-2">
            Ceremonies Challenges
          </h1>
          <p className="text-[var(--color-hero-text)] opacity-80">
            Pick a difficulty to begin
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 mt-10">
        <div className="grid gap-4">
          {(Object.entries(MODE_CONFIG) as [Mode, (typeof MODE_CONFIG)[Mode]][]).map(
            ([mode, cfg]) => (
              <button
                type="button"
                key={mode}
                onClick={() => setSelected(mode)}
                className={[
                  "flex items-center gap-4 w-full text-left rounded-2xl border p-5 transition-all",
                  selected === mode
                    ? "border-[var(--color-primary)] bg-[var(--color-surface-raised)] shadow-md"
                    : "border-[var(--color-border)] bg-[var(--color-surface-raised)] hover:shadow-md",
                ].join(" ")}
              >
                <div className="text-[var(--color-primary)] shrink-0">{cfg.icon}</div>
                <div className="flex-1">
                  <p className="font-bold text-[var(--color-text)]">
                    {cfg.label}
                    <span className="ml-2 text-xs font-normal text-[var(--color-muted)]">
                      {cfg.count} challenges
                    </span>
                  </p>
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">
                    {cfg.description}
                  </p>
                </div>
                <div
                  className={[
                    "w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center",
                    selected === mode
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                      : "border-[var(--color-border)]",
                  ].join(" ")}
                >
                  {selected === mode && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ),
          )}
        </div>

        <button
          type="button"
          disabled={!selected}
          onClick={() => selected && onStart(selected)}
          className="mt-6 w-full py-4 rounded-xl font-semibold text-lg transition-all theme-button-accent hover:brightness-95 disabled:opacity-40 disabled:cursor-not-allowed border-b-4 shadow-lg"
        >
          Start Challenge
        </button>
      </div>
    </div>
  );
}

// ── Active challenge screen ───────────────────────────────────────────────────

function ActiveChallenge({
  session,
  onAnswer,
  onAnswerChecked,
}: {
  session: ChallengeSession;
  onAnswer: (answer: string | string[], isCorrect: boolean) => void;
  onAnswerChecked: (isCorrect: boolean) => void;
}) {
  const challenge = session.challenges[session.currentChallengeIndex];

  const handleComplete = useCallback(
    (answer: string | string[], isCorrect: boolean) => {
      onAnswer(answer, isCorrect);
    },
    [onAnswer],
  );

  if (!challenge) return null;

  return (
    <>
      {challenge.type === "multiple_choice" && (
        <MultipleChoiceChallenge
          key={challenge.id}
          challenge={challenge}
          onComplete={(a, ok) => handleComplete(a, ok)}
          onAnswerChecked={onAnswerChecked}
        />
      )}
      {challenge.type === "translation_builder" && (
        <TranslationChallenge
          key={challenge.id}
          challenge={challenge}
          onComplete={(a, ok) => handleComplete(a, ok)}
          onAnswerChecked={onAnswerChecked}
        />
      )}
    </>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function CeremoniesChallengesPage() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [session, setSession] = useState<ChallengeSession | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [currentAnswerCorrect, setCurrentAnswerCorrect] = useState<boolean | null>(null);
  const [justCompleted, setJustCompleted] = useState(false);

  const handleStart = useCallback((m: Mode) => {
    const challenges = buildSet(m);
    setMode(m);
    setSession(makeSession(challenges));
    setHasAnswered(false);
    setCurrentAnswerCorrect(null);
    setJustCompleted(false);
  }, []);

  const handleAnswer = useCallback(
    (answer: string | string[], isCorrect: boolean) => {
      if (!session) return;
      const challenge = session.challenges[session.currentChallengeIndex];
      const isLast = session.currentChallengeIndex === session.challenges.length - 1;

      const result: ChallengeResult = {
        challengeId: challenge.id,
        userAnswer: answer,
        isCorrect,
        pointsEarned: isCorrect ? challenge.points : 0,
        timeSpent: Math.floor((Date.now() - session.startTime) / 1000),
      };

      setSession((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          results: [...prev.results, result],
          totalScore: prev.totalScore + result.pointsEarned,
          currentChallengeIndex: isLast
            ? prev.currentChallengeIndex
            : prev.currentChallengeIndex + 1,
          isComplete: isLast,
          endTime: isLast ? Date.now() : prev.endTime,
        };
      });

      setHasAnswered(false);
      setCurrentAnswerCorrect(null);
      if (isLast) setJustCompleted(true);
    },
    [session],
  );

  const handleAnswerChecked = useCallback((isCorrect: boolean) => {
    setHasAnswered(true);
    setCurrentAnswerCorrect(isCorrect);
  }, []);

  const handleRestart = useCallback(() => {
    if (!mode) return;
    handleStart(mode);
  }, [mode, handleStart]);

  const handleNewSet = useCallback(() => {
    setMode(null);
    setSession(null);
  }, []);

  // ── No mode selected yet
  if (!mode || !session) {
    return <SelectionScreen onStart={handleStart} />;
  }

  // ── Complete screen
  if (session.isComplete) {
    return (
      <div className="py-8 px-4 max-w-xl mx-auto">
        <ChallengeComplete
          session={session}
          onRestart={handleRestart}
          playCompletionSound={justCompleted}
        />
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={handleNewSet}
            className="flex-1 py-3 rounded-xl border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface-raised)] hover:shadow-md transition-all"
          >
            ← Choose difficulty
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="flex-1 py-3 rounded-xl border-b-4 text-sm font-medium theme-button-accent hover:brightness-95 transition-all shadow"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // ── Active challenge
  return (
    <div className="py-8 px-4 max-w-xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={handleNewSet}
          className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
        >
          ← Change difficulty
        </button>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
          {MODE_CONFIG[mode].label}
        </span>
      </div>

      <ChallengeProgress
        current={session.currentChallengeIndex + 1}
        completed={
          hasAnswered
            ? session.currentChallengeIndex + 1
            : session.currentChallengeIndex
        }
        total={session.challenges.length}
        score={session.totalScore}
        results={session.results}
        currentAnswerCorrect={currentAnswerCorrect}
      />

      <div className="mt-8">
        <ActiveChallenge
          session={session}
          onAnswer={handleAnswer}
          onAnswerChecked={handleAnswerChecked}
        />
      </div>
    </div>
  );
}
