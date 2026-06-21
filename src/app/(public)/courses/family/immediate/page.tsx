import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immediate Family in Shona | Duramazwi",
  description:
    "Learn Shona words for mother, father, siblings, and children — plus the concept of Babamukuru and Babamunini.",
};

const vocabulary = [
  {
    shona: "Mai",
    english: "Mother",
    pronunciation: "MAH-ee",
    example: "Mai wangu vanondida.",
    exampleTranslation: "My mother loves me.",
  },
  {
    shona: "Baba",
    english: "Father",
    pronunciation: "BAH-bah",
    example: "Baba wangu anoshanda.",
    exampleTranslation: "My father works.",
  },
  {
    shona: "Mukoma",
    english: "Older sibling",
    pronunciation: "moo-KOH-mah",
    example: "Mukoma wangu ane makore gumi nematanhatu.",
    exampleTranslation: "My older sibling is sixteen years old.",
  },
  {
    shona: "Munin'ina",
    english: "Younger sibling",
    pronunciation: "moo-nin-EE-nah",
    example: "Munin'ina wangu ndiye mudiki.",
    exampleTranslation: "My younger sibling is the youngest.",
  },
  {
    shona: "Hanzvadzi",
    english: "Sibling / Sister",
    pronunciation: "han-ZVAH-dzee",
    example: "Hanzvadzi yangu inogara pedyo.",
    exampleTranslation: "My sister lives nearby.",
  },
  {
    shona: "Mwanakomana",
    english: "Son",
    pronunciation: "mwah-nah-koh-MAH-nah",
    example: "Mwanakomana wangu ane makore manomwe.",
    exampleTranslation: "My son is seven years old.",
  },
  {
    shona: "Mwanasikana",
    english: "Daughter",
    pronunciation: "mwah-nah-see-KAH-nah",
    example: "Mwanasikana wangu anofara.",
    exampleTranslation: "My daughter is happy.",
  },
  {
    shona: "Mwana",
    english: "Child",
    pronunciation: "MWAH-nah",
    example: "Mwana wangu anoenda kuchikoro.",
    exampleTranslation: "My child goes to school.",
  },
  {
    shona: "Vana",
    english: "Children (plural)",
    pronunciation: "VAH-nah",
    example: "Vana vari kumba.",
    exampleTranslation: "The children are at home.",
  },
];

const extendedFathers = [
  {
    shona: "Babamukuru",
    english: "Father's older brother",
    pronunciation: "bah-bah-moo-KOO-roo",
    meaning: "\"Big father\" — addressed simply as Baba",
  },
  {
    shona: "Babamunini",
    english: "Father's younger brother",
    pronunciation: "bah-bah-moo-NEE-nee",
    meaning: "\"Small father\" — also addressed as Baba",
  },
];

export default function ImmediateFamilyPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/family"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Family Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Immediate Family
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mhuri Yepedyo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, the immediate family forms the foundation — but it is
            wider than you might expect. A father's brothers are also called
            Baba, and a mother's sisters are also called Mai. This means a Shona
            child grows up with multiple fathers and multiple mothers, each
            with real responsibilities in the child's life.
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
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
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
                    <span className="text-[var(--color-text)] font-medium">{word.example}</span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">{word.exampleTranslation}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: Multiple Fathers
          </h3>
          <p className="text-[var(--color-text)] leading-relaxed mb-5">
            In Shona culture, a father's brothers are not called "uncle" — they
            are also called <strong>Baba</strong> (father). Age modifiers
            distinguish them:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {extendedFathers.map((f) => (
              <div
                key={f.shona}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] text-lg">{f.shona}</p>
                <p className="text-sm text-[var(--color-text)] font-medium">{f.english}</p>
                <p className="text-xs text-[var(--color-muted)] mt-1 font-mono">{f.pronunciation}</p>
                <p className="text-sm text-[var(--color-muted)] mt-2 italic">{f.meaning}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-muted)] text-sm mt-5 leading-relaxed">
            This is not just a linguistic quirk — Babamukuru and Babamunini hold
            real fatherly roles. If your father passes away, Babamukuru steps
            in as head of household. The family is a collective, and every
            father's brother is a father.
          </p>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/family"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/family/extended"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Extended Family →
          </Link>
        </div>
      </div>
    </div>
  );
}
