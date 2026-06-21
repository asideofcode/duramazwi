import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formal vs Informal Greetings in Shona | Duramazwi",
  description:
    "Learn when to use Imi (respectful you) versus Iwe (informal you) — a distinction that shapes all Shona speech.",
};

const vocabulary = [
  {
    shona: "Imi",
    english: "You — formal / respectful plural",
    pronunciation: "EE-mee",
    example: "Makadii imi?",
    exampleTranslation: "How are you? (respectful)",
  },
  {
    shona: "Iwe",
    english: "You — informal / peer",
    pronunciation: "EE-weh",
    example: "Wakadii iwe?",
    exampleTranslation: "How are you? (to a friend)",
  },
  {
    shona: "Makadii imi?",
    english: "How are you? (formal)",
    pronunciation: "mah-KAH-dee EE-mee",
    example: "Mangwanani, makadii imi sekuru?",
    exampleTranslation: "Good morning, how are you grandfather?",
  },
  {
    shona: "Wakadii iwe?",
    english: "How are you? (informal)",
    pronunciation: "wah-KAH-dee EE-weh",
    example: "Mhoro, wakadii iwe?",
    exampleTranslation: "Hello, how are you? (to a friend)",
  },
  {
    shona: "Zvauya",
    english: "Greetings on arrival (informal)",
    pronunciation: "zvah-OO-yah",
    example: "Zvauya! Wakadii?",
    exampleTranslation: "You have arrived! How are you? (informal welcome)",
  },
  {
    shona: "Mauya",
    english: "You have come (formal welcome)",
    pronunciation: "mah-OO-yah",
    example: "Mauya, makadii imi?",
    exampleTranslation: "Welcome, how are you? (formal welcome)",
  },
  {
    shona: "Ndatenda",
    english: "Thank you",
    pronunciation: "ndah-TEH-ndah",
    example: "Ndatenda, zvakanaka.",
    exampleTranslation: "Thank you, all is well.",
  },
  {
    shona: "Masvita",
    english: "Thank you (formal)",
    pronunciation: "mah-SVEE-tah",
    example: "Masvita, tiripo.",
    exampleTranslation: "Thank you (formal), we are well.",
  },
];

const comparisonRows = [
  {
    context: "Greeting an elder",
    formal: "Mangwanani, makadii imi?",
    informal: "— (do not use informal with elders)",
  },
  {
    context: "Greeting a peer",
    formal: "Masikati, makadii?",
    informal: "Mhoro, wakadii iwe?",
  },
  {
    context: "Welcoming a visitor (elder)",
    formal: "Mauya, makadii imi?",
    informal: "— (use formal only)",
  },
  {
    context: "Welcoming a friend",
    formal: "Mauya",
    informal: "Zvauya!",
  },
  {
    context: "Saying thank you (to elder)",
    formal: "Masvita",
    informal: "— (use formal only)",
  },
  {
    context: "Saying thank you (to peer)",
    formal: "Ndatenda",
    informal: "Ndatenda",
  },
];

export default function FormalInformalPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Formal vs Informal
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Imi naIwe
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, the word you use for &ldquo;you&rdquo; reveals the relationship
            between speaker and listener. <strong>Imi</strong> is the
            respectful, plural &ldquo;you&rdquo; — used always for elders, parents,
            in-laws, and respected figures. <strong>Iwe</strong> is the
            informal singular — for friends, peers, and those younger than
            you. This is not just grammatical; using Iwe with an elder is a
            real breach of respect.
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

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Formal vs Informal at a Glance
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Situation</th>
                <th className="px-4 py-3 font-semibold">Formal (Imi)</th>
                <th className="px-4 py-3 font-semibold">Informal (Iwe)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.context}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-medium text-[var(--color-text)]">
                    {row.context}
                  </td>
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {row.formal}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)]">
                    {row.informal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Using Iwe with an elder is a serious breach
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                This is not a minor grammar mistake — it signals disrespect.
                Imi must always be used for elders, parents, in-laws, and
                any authority figure, regardless of context.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. The formal/informal split runs through all speech
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                The Imi/Iwe distinction does not stop at greetings — verbs,
                possessives, and forms of address all shift depending on who
                you are speaking to. Once you grasp this pair, the rest of
                the register system begins to make sense.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Young people switch registers fluidly
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Shona speakers — especially the young — move between formal
                and informal registers naturally. The same person may use
                Imi with their grandmother and Iwe with their cousin in the
                same conversation without thinking about it.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Mauya vs Zvauya — both mean &ldquo;welcome&rdquo;
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Mauya (formal: you have come, using the ma- prefix) is
                for elders and respected guests. Zvauya (informal) is the
                warm, casual welcome between friends. Getting this right
                immediately signals social awareness.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/greetings/basic-greetings"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Basic Greetings
          </Link>
          <Link
            href="/courses/greetings/greeting-elders"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Greeting Elders →
          </Link>
        </div>
      </div>
    </div>
  );
}
