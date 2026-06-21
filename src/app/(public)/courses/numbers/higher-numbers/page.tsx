import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Higher Numbers in Shona | Duramazwi",
  description:
    "Learn tens, hundreds, thousands and millions in Shona — and how to build compound numbers like 45 and 123.",
};

const vocabulary = [
  { number: "30", shona: "Makumi matatu", pronunciation: "mah-KOO-mee mah-TAH-too" },
  { number: "40", shona: "Makumi mana", pronunciation: "mah-KOO-mee MAH-nah" },
  { number: "50", shona: "Makumi mashanu", pronunciation: "mah-KOO-mee mah-SHAH-noo" },
  { number: "60", shona: "Makumi matanhatu", pronunciation: "mah-KOO-mee mah-tahn-HAH-too" },
  { number: "70", shona: "Makumi manomwe", pronunciation: "mah-KOO-mee mah-NOH-mweh" },
  { number: "80", shona: "Makumi masere", pronunciation: "mah-KOO-mee mah-SEH-reh" },
  { number: "90", shona: "Makumi mapfumbamwe", pronunciation: "mah-KOO-mee mah-pfoom-BAH-mweh" },
  { number: "100", shona: "Zana", pronunciation: "ZAH-nah" },
  { number: "200", shona: "Mazana maviri", pronunciation: "mah-ZAH-nah mah-VEE-ree" },
  { number: "1,000", shona: "Churu", pronunciation: "CHOO-roo" },
  { number: "10,000", shona: "Mazvuru gumi", pronunciation: "mah-ZVOO-roo GOO-mee" },
  { number: "1,000,000", shona: "Mirioni", pronunciation: "mee-ree-OH-nee" },
];

const compounds = [
  {
    number: "21",
    shona: "Makumi maviri nerimwe",
    breakdown: "twenty and one",
  },
  {
    number: "45",
    shona: "Makumi mana neshanu",
    breakdown: "forty and five",
  },
  {
    number: "63",
    shona: "Makumi matanhatu natatu",
    breakdown: "sixty and three",
  },
  {
    number: "99",
    shona: "Makumi mapfumbamwe napfumbamwe",
    breakdown: "ninety and nine",
  },
  {
    number: "100",
    shona: "Zana",
    breakdown: "one hundred (standalone word)",
  },
  {
    number: "123",
    shona: "Zana namakumi maviri natatu",
    breakdown: "hundred and twenty and three",
  },
  {
    number: "1,500",
    shona: "Churu nezana neshanu",
    breakdown: "thousand and hundred and five",
  },
];

const culturalNotes = [
  {
    title: "Large numbers in traditional contexts",
    body: "Large numbers — thousands and millions — were rarely used in traditional village life, where transactions involved livestock, grain, and small goods. They became more common with colonial commerce, wage labour, and administration. Today they are completely normalised, especially in urban areas.",
  },
  {
    title: "The makumi pattern",
    body: "Tens in Shona all follow the same pattern: makumi (tens) plus the single-digit multiplier. So 30 = makumi matatu (tens three), 40 = makumi mana (tens four), 70 = makumi manomwe (tens seven). Notice how the multiplier takes its own prefix form — this is noun class agreement in action.",
  },
  {
    title: "Shona schoolchildren and bilingual numbers",
    body: "Shona schoolchildren across Zimbabwe learn numbers in both Shona and English simultaneously. In practice, many Zimbabweans code-switch freely — you will hear \"fifty dollars\" and \"madhora makumi mashanu\" used interchangeably in the same conversation.",
  },
  {
    title: "Building compound numbers",
    body: "All compound numbers in Shona are built additively using the conjunction \"na\" (and). 123 = zana (100) + namakumi maviri (and 20) + natatu (and 3). There is no subtraction pattern like in some languages. Practice building numbers aloud — the pattern becomes natural quickly.",
  },
];

export default function HigherNumbersPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/numbers"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Numbers Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Higher Numbers
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nhamba Huru
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Once you know 1–20, higher numbers follow a consistent and
            learnable pattern. Tens are formed with <strong>makumi</strong>{" "}
            plus a multiplier, hundreds with <strong>zana/mazana</strong>, and
            thousands with <strong>churu</strong>. Compound numbers are built
            by linking units with <strong>na</strong> (and).
          </p>
        </div>

        {/* Vocabulary Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Tens, Hundreds &amp; Thousands
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Number</th>
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Pronunciation
                </th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.number}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.number}
                  </td>
                  <td className="px-4 py-3 font-semibold text-[var(--color-text)]">
                    {word.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell font-mono text-xs">
                    {word.pronunciation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Compound Numbers */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Building Compound Numbers
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Number</th>
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Breakdown
                </th>
              </tr>
            </thead>
            <tbody>
              {compounds.map((c, i) => (
                <tr
                  key={c.number}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {c.number}
                  </td>
                  <td className="px-4 py-3 font-semibold text-[var(--color-text)]">
                    {c.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs italic">
                    {c.breakdown}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural &amp; Language Notes
        </h2>
        <div className="flex flex-col gap-5 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/numbers/counting"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Counting 1–20
          </Link>
          <Link
            href="/courses/numbers/counting-objects"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Counting Objects →
          </Link>
        </div>
      </div>
    </div>
  );
}
