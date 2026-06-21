import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Shona Sayings | Duramazwi",
  description:
    "Learn 14 essential Shona idioms and expressions — literal meanings, actual meanings, and example uses.",
};

const expressions = [
  {
    expression: "Kufamba nekurova",
    literal: "To walk and strike",
    meaning: "To be proactive and assertive — going out and making things happen",
    example: "Anofamba nekurova — he is always on the move, making things happen.",
  },
  {
    expression: "Kuita musoro",
    literal: "To make a head",
    meaning: "To succeed — to make something of yourself",
    example: "Aita musoro zvino — he has made something of himself now.",
  },
  {
    expression: "Kukanda mwana",
    literal: "To throw the child",
    meaning: "To give birth (informal/rural expression)",
    example: "Akakanda mwana nezuro — she gave birth yesterday.",
  },
  {
    expression: "Mwoyo uri pasi",
    literal: "Heart is down",
    meaning: "Feeling discouraged or sad",
    example: "Mwoyo wake uri pasi nhasi — his heart is down today (he is sad).",
  },
  {
    expression: "Kutsigira makumbo",
    literal: "To support the legs",
    meaning: "To support someone financially",
    example: "Anomutsigira makumbo — he supports her financially.",
  },
  {
    expression: "Kumba kwake",
    literal: "His/her home",
    meaning: "Their territory or area of expertise",
    example: "Zvinhu izvi kumba kwake — these things are his area of expertise.",
  },
  {
    expression: "Kuita nguva",
    literal: "To make time",
    meaning: "To be late or to take a long time",
    example: "Akaita nguva — he took a long time / he was late.",
  },
  {
    expression: "Kuruma mutezo",
    literal: "To bite the finger",
    meaning: "To regret an action",
    example: "Ava kuruma mutezo — she is now regretting what she did.",
  },
  {
    expression: "Pasi nehasha",
    literal: "Down with anger",
    meaning: "Extremely angry — overwhelmed by anger",
    example: "Ari pasi nehasha — he is absolutely furious.",
  },
  {
    expression: "Kufunga shure",
    literal: "To think behind",
    meaning: "To be nostalgic — to dwell on the past",
    example: "Anofunga shure nguva dzose — she is always thinking about the past.",
  },
  {
    expression: "Kutsvaga pfungwa",
    literal: "To look for thoughts",
    meaning: "To think / to take time to reflect before responding",
    example: "Ndiri kutsvaga pfungwa — I am thinking / I need a moment to think.",
  },
  {
    expression: "Nzou hairevi tumwe twayo",
    literal: "An elephant doesn't feel its own tusk",
    meaning: "We don't see our own faults — our blind spots are invisible to us",
    example: "Nzou hairevi tumwe twayo — said when someone cannot see their own behaviour.",
  },
  {
    expression: "Kutsvaga gore",
    literal: "To look for a year",
    meaning: "To plan ahead — to look toward the future",
    example: "Anofunga nezvekutsvaga gore — he is planning for the future.",
  },
  {
    expression: "Hazvina basa",
    literal: "It has no work",
    meaning: "It doesn't matter — it is irrelevant",
    example: "Hazvina basa — it doesn't matter / forget about it.",
  },
];

const culturalNotes = [
  {
    heading: "Idioms are visual and physical",
    body: "Shona idioms describe abstract states — emotions, decisions, regrets — through physical actions. The heart goes down. You bite your finger. This makes them vivid and memorable.",
  },
  {
    heading: "The heart and mind in Shona",
    body: "Mwoyo (heart) and pfungwa (thoughts/mind) are central in Shona figurative language. How you feel and how you think are both described through these words — reflecting how central inner life is.",
  },
  {
    heading: "Idioms are easier to remember",
    body: "Learners often find idioms easier to remember than vocabulary lists because the images are so strong. The moment you picture biting your own finger, you won't forget what regret looks like in Shona.",
  },
];

export default function CommonSayingsPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Common Shona Sayings
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mashoko eChiShona
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona idioms are not just colourful language — they are the way
            Shona speakers think about emotion, action, and experience. They
            work by taking something abstract and grounding it in a vivid
            physical image. Once you know them, you will start to hear them
            everywhere.
          </p>
        </div>

        {/* Expressions Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          14 Essential Expressions
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Expression</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Literal Meaning</th>
                <th className="px-4 py-3 font-semibold">Actual Meaning</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Example Use</th>
              </tr>
            </thead>
            <tbody>
              {expressions.map((expr, i) => (
                <tr
                  key={expr.expression}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)] italic">
                    {expr.expression}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell">
                    {expr.literal}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {expr.meaning}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell">
                    {expr.example}
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
          <div className="grid gap-4 md:grid-cols-3">
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
            href="/courses/idioms"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/idioms/figurative-language"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Figurative Language →
          </Link>
        </div>
      </div>
    </div>
  );
}
