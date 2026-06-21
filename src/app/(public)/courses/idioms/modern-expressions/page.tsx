import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern & Youth Shona Expressions | Duramazwi",
  description:
    "Contemporary Shona slang, urban expressions, and code-switching — from Sharp sharp to Hameno. The language as it is actually spoken today.",
};

const modernExpressions = [
  {
    expression: "Sharp sharp!",
    origin: "SA township slang — now universal in Zimbabwe",
    meaning: "All good / understood / everything is fine",
    example: "Sharp sharp, I'll see you tomorrow.",
    note: "Borrowed from South African township slang, now widespread across Zimbabwe. Used by all age groups.",
  },
  {
    expression: "Zvakanaka bro",
    origin: "Shona + English blend",
    meaning: "It's fine brother — casual agreement or reassurance",
    example: "Zvakanaka bro, don't stress about it.",
    note: "A code-switching expression that pairs the Shona 'zvakanaka' (it's good/fine) with the English 'bro.' Very common in urban settings.",
  },
  {
    expression: "Hameno",
    origin: "Pure Shona — hama + no (I don't know)",
    meaning: "I don't know",
    example: "Hameno, I wasn't there when it happened.",
    note: "Probably the most universally recognised Shona word among all Zimbabweans. Used even in mostly English conversations — it crosses all language barriers.",
  },
  {
    expression: "Ah nhai",
    origin: "Pure Shona",
    meaning: "Expression of surprise or disbelief — 'Really? No way!'",
    example: "Ah nhai, is that actually true?",
    note: "Dropped mid-sentence when something unexpected is said. Works in both Shona and English conversations seamlessly.",
  },
  {
    expression: "Mhani",
    origin: "Pure Shona",
    meaning: "Thing / what's-it — a filler for something unnamed",
    example: "Ndipa mhani iyo — give me that thing.",
    note: "Used the way English speakers say 'thing' or 'whatsit.' A versatile filler word for any unnamed or half-remembered object.",
  },
  {
    expression: "Tsvaga",
    origin: "Pure Shona (to find/seek)",
    meaning: "Let's get this / I'll sort it — slang for action or acquisition",
    example: "Tsvaga mari — let's get money / I'll find money.",
    note: "The literal meaning is 'to find or seek.' In youth slang it has become an action word — a declaration of hustle or intent.",
  },
  {
    expression: "Kudhura zvakanyanya",
    origin: "Pure Shona",
    meaning: "It's too expensive — literally 'it has dried too much'",
    example: "Kudhura zvakanyanya — that price is way too high.",
    note: "Kudhura literally means to become dry or expensive. Zvakanyanya means excessively/too much. The image of drying is used for prices rising beyond reach.",
  },
  {
    expression: "Hazvina basa",
    origin: "Pure Shona",
    meaning: "It doesn't matter — it has no relevance",
    example: "Hazvina basa, just leave it.",
    note: "Literally 'it has no work.' One of the most used Shona dismissal expressions — versatile, casual, and universally understood.",
  },
];

const codeSwitchingExamples = [
  {
    example: "I'm going to the shops, hameno when I'll be back.",
    breakdown: "English sentence with 'hameno' (I don't know) dropped in naturally.",
  },
  {
    example: "Zvakanaka bro, I'll sort it out.",
    breakdown: "'Zvakanaka' (it's fine) + English — starts Shona, ends English.",
  },
  {
    example: "She's acting all fancy, ah nhai — who does she think she is?",
    breakdown: "'Ah nhai' (really?) inserted into an English sentence for emphasis.",
  },
  {
    example: "Ndoda that one — mhani iyo pa shelf.",
    breakdown: "Mixed throughout — 'I want that one — that thing on the shelf.'",
  },
];

const culturalNotes = [
  {
    heading: "Urban Harare Shona mixes freely",
    body: "Modern Shona, especially in Harare, blends freely with English. This is not lazy speaking — it is a distinct urban dialect with its own grammar and social register.",
  },
  {
    heading: "Youth Shona has its own vocabulary",
    body: "Young urban Zimbabweans have developed expressions that older generations sometimes don't follow. This generational gap in language is a feature of a living, evolving language.",
  },
  {
    heading: "Code-switching is normal and educated",
    body: "Moving between Shona and English mid-sentence is completely normal in educated urban Zimbabwe. It signals fluency in both languages, not failure of either.",
  },
  {
    heading: "Hameno is universal",
    body: "Hameno is probably the most recognised Shona word among Zimbabweans of all generations, regions, and education levels. If you know one Shona word, this is it.",
  },
];

export default function ModernExpressionsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/idioms"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Idioms Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Modern & Youth Expressions
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mashoko Matsva
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona is not a museum language. In Harare, Bulawayo, and the
            diaspora, Shona is alive — absorbing English, generating new slang,
            and being remixed by a generation that moves fluidly between both
            languages. This module covers the expressions you will actually hear
            in contemporary Zimbabwe.
          </p>
        </div>

        {/* Expressions Grid */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Modern Expressions
        </h2>
        <div className="space-y-4 mb-12">
          {modernExpressions.map((expr) => (
            <div
              key={expr.expression}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-bold text-[var(--color-primary)] text-lg italic">
                  {expr.expression}
                </p>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-muted)] shrink-0">
                  {expr.origin}
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--color-text)] mb-2">
                {expr.meaning}
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 mb-3">
                <p className="text-sm text-[var(--color-muted)] italic">
                  &ldquo;{expr.example}&rdquo;
                </p>
              </div>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                {expr.note}
              </p>
            </div>
          ))}
        </div>

        {/* Code-switching examples */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Code-Switching in Practice
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Example sentence</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">What's happening</th>
              </tr>
            </thead>
            <tbody>
              {codeSwitchingExamples.map((ex, i) => (
                <tr
                  key={ex.example}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-medium text-[var(--color-text)] italic">
                    &ldquo;{ex.example}&rdquo;
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs">
                    {ex.breakdown}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-5">
            Cultural Notes
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {culturalNotes.map((note) => (
              <div
                key={note.heading}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-2">
                  {note.heading}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/idioms/figurative-language"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Figurative Language
          </Link>
          <Link
            href="/courses/idioms/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
