import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polite Expressions in Shona | Duramazwi",
  description:
    "Learn Shona words for thank you, sorry, excuse me, and the elaborate farewell distinctions — who says what when parting.",
};

const vocabulary = [
  {
    shona: "Ndatenda",
    english: "Thank you",
    pronunciation: "ndah-TEH-ndah",
    example: "Ndatenda, ndiripo.",
    exampleTranslation: "Thank you, I am well.",
  },
  {
    shona: "Masvita",
    english: "Thank you (formal)",
    pronunciation: "mah-SVEE-tah",
    example: "Masvita sekuru.",
    exampleTranslation: "Thank you, grandfather.",
  },
  {
    shona: "Pamusoroi",
    english: "Excuse me / I am sorry (minor interruption)",
    pronunciation: "pah-moo-soh-ROH-ee",
    example: "Pamusoroi, munobvepi?",
    exampleTranslation: "Excuse me, where are you from?",
  },
  {
    shona: "Ndine urombo",
    english: "I am sorry / I have sadness",
    pronunciation: "ndee-neh oo-ROH-mboh",
    example: "Ndine urombo, hapana dambudziko.",
    exampleTranslation: "I am sorry, no problem.",
  },
  {
    shona: "Hapana dambudziko",
    english: "No problem",
    pronunciation: "hah-PAH-nah dahm-boo-DZEE-koh",
    example: "Hapana dambudziko, zvakanaka.",
    exampleTranslation: "No problem, all is good.",
  },
  {
    shona: "Ndinokumbira",
    english: "I request / Please",
    pronunciation: "ndee-noh-KOOM-bee-rah",
    example: "Ndinokumbira mvura.",
    exampleTranslation: "I request / please may I have water.",
  },
  {
    shona: "Zvakanaka",
    english: "It is fine / All good",
    pronunciation: "zvah-kah-NAH-kah",
    example: "Zvakanaka, ndatenda.",
    exampleTranslation: "All is fine, thank you.",
  },
  {
    shona: "Tikasangane",
    english: "May we meet again",
    pronunciation: "tee-kah-sahn-GAH-neh",
    example: "Safara, tikasangane.",
    exampleTranslation: "Go well, may we meet again.",
  },
  {
    shona: "Safara",
    english: "Go well (said to the person leaving)",
    pronunciation: "sah-FAH-rah",
    example: "Safara, gara zvakanaka.",
    exampleTranslation: "Go well, stay well.",
  },
  {
    shona: "Gara zvakanaka",
    english: "Stay well (to one person remaining)",
    pronunciation: "GAH-rah zvah-kah-NAH-kah",
    example: "Gara zvakanaka ambuya.",
    exampleTranslation: "Stay well, grandmother.",
  },
  {
    shona: "Chisarai zvakanaka",
    english: "Stay well (to a group remaining)",
    pronunciation: "chee-sah-RAH-ee zvah-kah-NAH-kah",
    example: "Chisarai zvakanaka, tiripo.",
    exampleTranslation: "Stay well everyone, we are well.",
  },
];

const farewellPairs = [
  {
    scenario: "You are leaving, one person stays",
    leaving: "Safara (said by the one staying: go well)",
    staying: "Gara zvakanaka (said by the one leaving: stay well)",
  },
  {
    scenario: "You are leaving, a group stays",
    leaving: "Safara (said by those staying)",
    staying: "Chisarai zvakanaka (said by the one leaving: you all stay well)",
  },
  {
    scenario: "Both parties wish each other well",
    leaving: "Tikasangane (said by either: may we meet again)",
    staying: "Ndatenda / Masvita (thank you for visiting)",
  },
];

export default function PoliteExpressionsPage() {
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
            Module 6
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Polite Expressions
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mazwi Erudo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona politeness is woven through everyday speech. Saying thank
            you is reflexive — Ndatenda flows out constantly. Apologising for
            minor things is expected. And farewells in Shona are elaborate:
            there are specific words for the person leaving and the person
            staying, and using the wrong one will raise eyebrows.
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

        {/* Farewell pairs */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Shona Farewell — Who Says What
        </h2>
        <div className="space-y-4 mb-12">
          {farewellPairs.map((pair) => (
            <div
              key={pair.scenario}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-3">
                {pair.scenario}
              </p>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <span className="text-xs font-bold text-[var(--color-muted)] w-16 shrink-0 pt-0.5">
                    Leaving
                  </span>
                  <p className="text-sm text-[var(--color-text)]">
                    {pair.leaving}
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-xs font-bold text-[var(--color-muted)] w-16 shrink-0 pt-0.5">
                    Staying
                  </span>
                  <p className="text-sm text-[var(--color-text)]">
                    {pair.staying}
                  </p>
                </div>
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
                1. Farewells in Shona are elaborate
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                The English &ldquo;bye!&rdquo; has no real Shona equivalent. A proper
                farewell acknowledges the person staying, wishes them well,
                expresses hope of future meeting, and is not rushed. Abrupt
                departures feel cold.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. Ndatenda is used constantly
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Unlike in some cultures where excessive thanks can feel
                insincere, in Shona speech Ndatenda flows freely. Saying it
                after receiving anything — food, information, a greeting
                response — is normal and expected.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Apologising for minor inconveniences is expected
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Pamusoroi (excuse me) is used freely when interrupting, asking
                someone to move, or beginning a conversation with a stranger.
                It acknowledges that you are imposing on someone&apos;s space or
                time, however briefly.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Safara vs Gara zvakanaka — a key distinction
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Safara literally means &ldquo;be joyful&rdquo; and is addressed to the
                person going. Gara zvakanaka means &ldquo;stay well&rdquo; — addressed to
                the person remaining. Mixing these up (wishing someone to
                &ldquo;stay well&rdquo; when they are leaving) will confuse the exchange.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/greetings/origins"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Where Are You From?
          </Link>
          <Link
            href="/courses/greetings/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Practice: Greetings Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
