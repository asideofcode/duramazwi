import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counting 1–20 in Shona | Duramazwi",
  description:
    "Learn to count from one to twenty in Shona — including why there are two words for one, and the historical base-5 counting system.",
};

const vocabulary = [
  { number: 1, shona: "Rimwe / Poshi", pronunciation: "RIM-weh / POH-shee" },
  { number: 2, shona: "Piri", pronunciation: "PEE-ree" },
  { number: 3, shona: "Tatu", pronunciation: "TAH-too" },
  { number: 4, shona: "Ina", pronunciation: "EE-nah" },
  { number: 5, shona: "Shanu", pronunciation: "SHAH-noo" },
  { number: 6, shona: "Tanhatu", pronunciation: "tahn-HAH-too" },
  { number: 7, shona: "Nomwe", pronunciation: "NOH-mweh" },
  { number: 8, shona: "Sere", pronunciation: "SEH-reh" },
  { number: 9, shona: "Pfumbamwe", pronunciation: "pfoom-BAH-mweh" },
  { number: 10, shona: "Gumi", pronunciation: "GOO-mee" },
  { number: 11, shona: "Gumi nerimwe", pronunciation: "GOO-mee neh-RIM-weh" },
  { number: 12, shona: "Gumi napiri", pronunciation: "GOO-mee nah-PEE-ree" },
  { number: 13, shona: "Gumi natatu", pronunciation: "GOO-mee nah-TAH-too" },
  { number: 14, shona: "Gumi naina", pronunciation: "GOO-mee NAH-ee-nah" },
  { number: 15, shona: "Gumi nashanu", pronunciation: "GOO-mee nah-SHAH-noo" },
  { number: 16, shona: "Gumi nenhatu", pronunciation: "GOO-mee nehn-HAH-too" },
  { number: 17, shona: "Gumi nanomwe", pronunciation: "GOO-mee nah-NOH-mweh" },
  { number: 18, shona: "Gumi nasere", pronunciation: "GOO-mee nah-SEH-reh" },
  {
    number: 19,
    shona: "Gumi napfumbamwe",
    pronunciation: "GOO-mee nah-pfoom-BAH-mweh",
  },
  { number: 20, shona: "Makumi maviri", pronunciation: "mah-KOO-mee mah-VEE-ree" },
];

const culturalNotes = [
  {
    title: "Two words for one",
    body: "\"Rimwe\" and \"poshi\" both mean one — but they are used differently. Rimwe changes form to agree with the noun class of the object being counted (e.g. muti umwe, chikoro chimwe). Poshi is a standalone number, used when counting independently or answering \"how many?\" without a noun.",
  },
  {
    title: "A base-5 counting history",
    body: "Shona counting historically had strong base-5 structure — five fingers on a hand, ten on two hands. This is visible in the word for 6 (tanhatu — literally \"three-two\" in older analysis), and in the way numbers above ten are built as \"gumi ne...\" (ten and...). Colonial administration introduced a more rigid decimal system, but the historical pattern is still embedded in the words.",
  },
  {
    title: "Counting at the market",
    body: "Fingers are still widely used for counting in markets and everyday settings across Zimbabwe. Holding up fingers while saying numbers is normal and expected in transactions — especially useful when background noise makes hearing difficult.",
  },
  {
    title: "Numbers above ten",
    body: "From 11 onwards, Shona builds numbers by saying gumi (ten) plus ne (and) plus the remaining digit. So 11 is \"gumi nerimwe\" (ten and one), 15 is \"gumi nashanu\" (ten and five). This additive pattern continues all the way up.",
  },
];

export default function CountingPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Counting 1–20
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuverenga 1–20
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona numbers from one to twenty form the foundation of everything
            else — shopping, telling time, giving your age, and counting
            livestock. Before learning higher numbers, master these twenty
            words. Pay close attention to the difference between rimwe and
            poshi, and notice how numbers 11–20 are built by adding to gumi
            (ten).
          </p>
        </div>

        {/* Vocabulary Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Numbers 1–20
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

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural & Language Notes
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
            href="/courses/numbers"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/numbers/higher-numbers"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Higher Numbers →
          </Link>
        </div>
      </div>
    </div>
  );
}
