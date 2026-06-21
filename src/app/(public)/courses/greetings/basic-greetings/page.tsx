import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Greetings in Shona | Duramazwi",
  description:
    "Learn Shona greetings for morning, afternoon, and evening — plus Ndiripo, Tiripo, and Zvakanaka.",
};

const vocabulary = [
  {
    shona: "Mangwanani",
    english: "Good morning",
    pronunciation: "mahn-gwah-NAH-nee",
    example: "Mangwanani, makadii?",
    exampleTranslation: "Good morning, how are you?",
  },
  {
    shona: "Masikati",
    english: "Good afternoon",
    pronunciation: "mah-see-KAH-tee",
    example: "Masikati, tiripo.",
    exampleTranslation: "Good afternoon, we are well.",
  },
  {
    shona: "Manheru",
    english: "Good evening",
    pronunciation: "mah-NHEH-roo",
    example: "Manheru, makanaka here?",
    exampleTranslation: "Good evening, are you well?",
  },
  {
    shona: "Mhoro",
    english: "Hello (informal)",
    pronunciation: "MHOH-roh",
    example: "Mhoro, wakadii iwe?",
    exampleTranslation: "Hello, how are you? (to a friend)",
  },
  {
    shona: "Makadii?",
    english: "How are you? (formal / to elder or group)",
    pronunciation: "mah-KAH-dee",
    example: "Makadii imi?",
    exampleTranslation: "How are you, sir/ma'am?",
  },
  {
    shona: "Wakadii?",
    english: "How are you? (informal / to a peer)",
    pronunciation: "wah-KAH-dee",
    example: "Wakadii iwe?",
    exampleTranslation: "How are you? (to a friend)",
  },
  {
    shona: "Ndiripo",
    english: "I am well",
    pronunciation: "ndee-REE-poh",
    example: "Ndiripo, ndatenda.",
    exampleTranslation: "I am well, thank you.",
  },
  {
    shona: "Tiripo",
    english: "We are well",
    pronunciation: "tee-REE-poh",
    example: "Tiripo, masvita.",
    exampleTranslation: "We are well, thank you (formal).",
  },
  {
    shona: "Makanaka?",
    english: "Are you well? (formal)",
    pronunciation: "mah-kah-NAH-kah",
    example: "Makanaka here, ambuya?",
    exampleTranslation: "Are you well, grandmother?",
  },
  {
    shona: "Zvakanaka",
    english: "It is well / All is good",
    pronunciation: "zvah-kah-NAH-kah",
    example: "Zvakanaka, ndatenda.",
    exampleTranslation: "All is well, thank you.",
  },
];

const exchanges = [
  {
    label: "Morning greeting (formal)",
    lines: [
      { speaker: "You", shona: "Mangwanani, makadii imi?", english: "Good morning, how are you?" },
      { speaker: "Elder", shona: "Tiripo, masvita. Iwe wakadii?", english: "We are well, thank you. And you?" },
      { speaker: "You", shona: "Ndiripo, zvakanaka.", english: "I am well, all is good." },
    ],
  },
  {
    label: "Afternoon greeting (between peers)",
    lines: [
      { speaker: "Friend", shona: "Masikati, wakadii iwe?", english: "Good afternoon, how are you?" },
      { speaker: "You", shona: "Ndiripo, zvakanaka. Iwe wakadii?", english: "I am well, all good. And you?" },
      { speaker: "Friend", shona: "Ndiripo, ndatenda.", english: "I am well, thank you." },
    ],
  },
];

export default function BasicGreetingsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/greetings"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Greetings Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Basic Greetings
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kutaura Kwakajairwa
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona greetings are time-specific — there are different words for
            morning, afternoon, and evening, and using the wrong one is noticed.
            They are also layered: after the initial greeting comes an enquiry
            about wellbeing, then a response, then a follow-up. Learning these
            patterns makes you sound natural immediately.
          </p>
        </div>

        {/* Vocabulary Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Vocabulary
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Pronunciation</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Example</th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.shona}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.english}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell font-mono text-xs">
                    {word.pronunciation}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <span className="text-[var(--color-text)] font-medium">
                      {word.example}
                    </span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">
                      {word.exampleTranslation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sample Exchanges */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Sample Exchanges
        </h2>
        <div className="space-y-6 mb-12">
          {exchanges.map((exchange) => (
            <div
              key={exchange.label}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-4 uppercase tracking-wide">
                {exchange.label}
              </p>
              <div className="space-y-3">
                {exchange.lines.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-xs font-bold text-[var(--color-muted)] w-12 pt-0.5 shrink-0">
                      {line.speaker}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">
                        {line.shona}
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {line.english}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Greeting is obligatory
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Passing someone without greeting — even a stranger — is
                considered rude in Shona culture. A brief Mhoro or
                Mangwanani costs nothing and shows the other person they are
                seen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. Time-specific greetings matter
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Using Mangwanani in the evening or Manheru in the morning
                will be noticed and may draw a gentle correction. Shona
                speakers are attuned to getting the time right.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. The enquiry after the greeting is expected
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                It is unusual to greet and simply walk on. A Makadii? or
                Wakadii? after the initial greeting signals that you are
                genuinely engaging with the person, not just acknowledging them.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. &ldquo;Ndiripo&rdquo; means more than &ldquo;I am well&rdquo;
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Ndiripo literally means &ldquo;I am here&rdquo; — a declaration of
                presence and wellness. In Shona thought, being present and being
                well are closely linked.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/greetings"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/greetings/formal-informal"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Formal vs Informal →
          </Link>
        </div>
      </div>
    </div>
  );
}
