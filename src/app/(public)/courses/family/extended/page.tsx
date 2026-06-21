import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extended Family in Shona | Duramazwi",
  description:
    "Learn Shona words for grandparents, aunts, uncles, cousins, and nephews — and the cultural roles of Vatete and Muzukuru.",
};

const vocabulary = [
  {
    shona: "Sekuru",
    english: "Grandfather / Maternal uncle",
    pronunciation: "seh-KOO-roo",
    note: "Context tells you which — grandfather or mother's brother",
  },
  {
    shona: "Ambuya",
    english: "Grandmother",
    pronunciation: "ahm-BOO-yah",
    note: "Also used respectfully for elderly women and mothers-in-law",
  },
  {
    shona: "Vatete",
    english: "Father's sister (paternal aunt)",
    pronunciation: "vah-TEH-teh",
    note: "Has a special ceremonial and protective role over nieces and nephews",
  },
  {
    shona: "Babamukuru",
    english: "Father's older brother",
    pronunciation: "bah-bah-moo-KOO-roo",
    note: "Literally 'big father' — addressed as Baba",
  },
  {
    shona: "Babamunini",
    english: "Father's younger brother",
    pronunciation: "bah-bah-moo-NEE-nee",
    note: "Literally 'small father' — also addressed as Baba",
  },
  {
    shona: "Maiguru",
    english: "Mother's older sister",
    pronunciation: "mah-ee-GOO-roo",
    note: "Addressed as Mai — she is a mother to you",
  },
  {
    shona: "Mainini",
    english: "Mother's younger sister",
    pronunciation: "mah-ee-NEE-nee",
    note: "Addressed as Mai — also a mother to you",
  },
  {
    shona: "Muzukuru",
    english: "Nephew / Niece / Grandchild",
    pronunciation: "moo-zoo-KOO-roo",
    note: "Bidirectional — your muzukuru's muzukuru is sekuru's muzukuru",
  },
  {
    shona: "Mwana wemukoma",
    english: "Cousin (child of older sibling)",
    pronunciation: "mwah-nah weh-moo-KOH-mah",
    note: "Shona has no single word for cousin — cousins are treated as siblings",
  },
  {
    shona: "Mwana wehanzvadzi",
    english: "Cousin (child of sister)",
    pronunciation: "mwah-nah weh-han-ZVAH-dzee",
    note: "Also treated as a sibling in practice",
  },
];

const culturalNotes = [
  {
    title: "Vatete — The Guardian Aunt",
    body:
      "Vatete (your father's sister) holds a unique and powerful role in Shona culture. She is not just an aunt — she is a ritual guardian. At her muzukuru's (niece or nephew's) wedding, Vatete presides over the ceremony, receives gifts on behalf of the family, and gives her blessing. Without Vatete's presence, a wedding is considered incomplete. She is also a mediator and protector throughout the muzukuru's life.",
  },
  {
    title: "Muzukuru & Sekuru — A Relaxed Bond",
    body:
      "The relationship between a muzukuru (grandchild/nephew/niece) and their sekuru (grandfather/maternal uncle) is one of the most relaxed in Shona culture. A muzukuru can joke freely with sekuru, take food from sekuru's plate without asking, and even inherit property from sekuru. This warmth is by design — sekuru and muzukuru are considered each other's equals across generations.",
  },
  {
    title: "Multiple Mothers",
    body:
      "Every maternal aunt is also called Mai (mother). Maiguru is your mother's older sister — 'guru' meaning big or great. Mainini is her younger sister — 'nini' meaning small. Both are real mothers to you, with responsibilities in your upbringing. If your biological mother is absent, Maiguru or Mainini steps in. The child is never motherless while aunts are alive.",
  },
  {
    title: "Cousins Are Siblings",
    body:
      "Shona has no distinct word for 'cousin' because cousins on the paternal side are not cousins — they are brothers and sisters. The children of Babamukuru and Babamunini are your vakoma (older siblings) or vanin'ina (younger siblings) depending on age. Calling them cousins would be an insult in many Shona families.",
  },
];

export default function ExtendedFamilyPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Extended Family
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Hama dzose
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, the extended family is not "extended" at all — it is simply family. Grandparents,
            aunts, uncles, and cousins all hold named roles with real responsibilities.
            The words below are not titles of distance; they are bonds of duty.
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
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Note</th>
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
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell italic">
                    {word.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="grid gap-6 mb-12">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
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
            href="/courses/family/immediate"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Immediate Family
          </Link>
          <Link
            href="/courses/family/in-laws"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: In-Laws & Marriage →
          </Link>
        </div>
      </div>
    </div>
  );
}
