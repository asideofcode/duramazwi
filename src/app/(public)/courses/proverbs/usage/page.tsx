import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Using Tsumo in Conversation — Shona Proverbs | Duramazwi",
  description:
    "Learn when and how to deploy Shona proverbs — in dispute resolution, advice-giving, consolation, and celebration.",
};

const contexts = [
  {
    title: "In Dispute Resolution",
    shona: "Mupauro",
    description:
      "A well-placed proverb ends an argument without direct accusation. Instead of saying 'you are wrong,' an elder drops a tsumo and lets the wisdom land on its own. The argument is deflated without anyone losing face.",
    example: "Usarove imbga isingakurumwi.",
    exampleTranslation: "Don't beat a dog that doesn't bite you.",
    exampleNote: "Said to someone who has started an unnecessary conflict.",
  },
  {
    title: "In Advice-Giving",
    shona: "Kupa Zano",
    description:
      "A proverb makes a point without lecturing. Rather than telling someone what to do, you offer a tsumo and let them arrive at the lesson themselves. This is considered a more sophisticated and respectful form of guidance.",
    example: "Munda unorima uri padivi.",
    exampleTranslation: "A field is farmed while it is near.",
    exampleNote: "Said to someone hesitating over an opportunity.",
  },
  {
    title: "In Consolation",
    shona: "Kudzorera",
    description:
      "Proverbs comfort indirectly. Rather than offering sympathy with words that can feel hollow, a tsumo places the person's suffering in the context of universal human experience — which is a deeper form of comfort.",
    example: "Nyota hairegi munhu.",
    exampleTranslation: "Hunger doesn't spare anyone.",
    exampleNote: "Said to someone who feels singled out by hardship.",
  },
  {
    title: "In Celebration",
    shona: "Mufaro",
    description:
      "A proverb at a celebration adds cultural weight and roots the moment in Shona tradition. It marks the occasion as significant and connects it to the accumulated wisdom of the community.",
    example: "Zvawakadya ndizvo zvakakupa simba.",
    exampleTranslation: "What you ate is what gave you strength.",
    exampleNote: "Said to praise someone whose past hard work has now paid off.",
  },
];

const additionalProverbs = [
  {
    shona: "Zvawakadya ndizvo zvakakupa simba.",
    literal: "What you ate is what gave you strength.",
    meaning: "Past investment pays off — your preparation has made you who you are.",
    context: "Celebration / praise — affirming hard work that is now bearing fruit.",
  },
  {
    shona: "Moto haupedzi uswa.",
    literal: "Fire doesn't finish grass.",
    meaning: "Even the strongest force has limits — courage and persistence can run out. Sometimes strategic retreat is wisdom.",
    context: "Conflict or hardship — counselling restraint when someone is burning themselves out.",
  },
  {
    shona: "Shiri inoruka dendere neshinda dzayo.",
    literal: "A bird builds its nest with its own fibres.",
    meaning: "You build your life with your own resources and effort. Self-reliance is strength.",
    context: "Encouragement — especially for someone starting something new from nothing.",
  },
  {
    shona: "Gore harina musha.",
    literal: "A year has no home.",
    meaning: "Time passes — the future is open and unpredictable. Used in times of transition.",
    context: "Transitions — a new year, a move, a change in life. The future belongs to no one yet.",
  },
];

const practiceNotes = [
  "You don't explain a proverb after saying it. If the listener needs an explanation, the proverb has already lost its power.",
  "Tsumo are often spoken softly — almost under the breath. The quieter the delivery, the more weight it carries.",
  "A single, well-timed proverb can end a heated argument. The collective wisdom it invokes is difficult to contradict.",
  "Using a proverb at the right moment is a social skill. It takes cultural fluency — knowing the proverb is only the first step.",
];

export default function ProverbsUsagePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/proverbs"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Proverbs Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Using Tsumo in Conversation
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kushandisa Tsumo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Knowing a proverb is only half the skill. The other half is knowing
            when and how to use it. A tsumo dropped at the wrong moment falls
            flat — or worse, causes offence. Deployed perfectly, it can silence
            a room, heal a wound, or honour an achievement. This module covers
            the four key contexts where tsumo are used in Shona life.
          </p>
        </div>

        {/* Contexts */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Four Contexts for Tsumo
        </h2>
        <div className="grid gap-6 mb-12">
          {contexts.map((ctx) => (
            <div
              key={ctx.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {ctx.title}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] ml-3 shrink-0">
                  {ctx.shona}
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                {ctx.description}
              </p>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="font-bold text-[var(--color-primary)] italic mb-1">
                  {ctx.example}
                </p>
                <p className="text-sm text-[var(--color-text)] mb-1">
                  {ctx.exampleTranslation}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {ctx.exampleNote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Proverbs */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Additional Proverbs for Conversation
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Proverb</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Literal</th>
                <th className="px-4 py-3 font-semibold">Meaning</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Context</th>
              </tr>
            </thead>
            <tbody>
              {additionalProverbs.map((p, i) => (
                <tr
                  key={p.shona}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)] italic">
                    {p.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell">
                    {p.literal}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {p.meaning}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell">
                    {p.context}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Practice Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            The Art of Delivering a Tsumo
          </h3>
          <ul className="space-y-3">
            {practiceNotes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold mt-0.5 shrink-0">
                  ·
                </span>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/proverbs/meanings"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Meanings of Tsumo
          </Link>
          <Link
            href="/courses/proverbs/cultural-lessons"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Cultural Lessons →
          </Link>
        </div>
      </div>
    </div>
  );
}
