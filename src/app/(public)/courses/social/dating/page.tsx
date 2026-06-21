import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dating & Romantic Relationships in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary for love, courtship, and romance — from traditional terms to modern expressions of affection in Zimbabwean culture.",
};

const vocabulary = [
  {
    shona: "Rudo",
    english: "Love",
    pronunciation: "ROO-doh",
    example: "Ndinokuda nerudo.",
    exampleTranslation: "I love you with love.",
  },
  {
    shona: "Kushandana",
    english: "To court / pursue romantically",
    pronunciation: "koo-shan-DAH-nah",
    example: "Anondishandana.",
    exampleTranslation: "He/she is courting me.",
  },
  {
    shona: "Mhandara",
    english: "Unmarried girl (traditional term)",
    pronunciation: "mhan-DAH-rah",
    example: "Mhandara iyi ine tsika.",
    exampleTranslation: "This young woman has good character.",
  },
  {
    shona: "Mukomana",
    english: "Young man / Boyfriend",
    pronunciation: "moo-koh-MAH-nah",
    example: "Mukomana wake akanaka.",
    exampleTranslation: "Her boyfriend is good.",
  },
  {
    shona: "Musikana",
    english: "Young woman / Girlfriend",
    pronunciation: "moo-see-KAH-nah",
    example: "Musikana wake ane moyo wakanaka.",
    exampleTranslation: "His girlfriend has a good heart.",
  },
  {
    shona: "Ndinokudai",
    english: "I love you",
    pronunciation: "ndee-noh-koo-DAI",
    example: "Ndinokudai zvakanyanya.",
    exampleTranslation: "I love you very much.",
  },
  {
    shona: "Ndinokufungira",
    english: "I think about you",
    pronunciation: "ndee-noh-koo-foon-GEE-rah",
    example: "Ndinokufungira zuva nezuva.",
    exampleTranslation: "I think about you every day.",
  },
  {
    shona: "Shamwari yangu",
    english: "My friend (also affectionate)",
    pronunciation: "sham-WAH-ree YAHN-goo",
    example: "Shamwari yangu, ndinokuda.",
    exampleTranslation: "My dear, I love you.",
  },
  {
    shona: "Kufara naye",
    english: "To be happy with them",
    pronunciation: "koo-FAH-rah NAH-yeh",
    example: "Ndinofara naye nguva dzose.",
    exampleTranslation: "I am happy with them always.",
  },
  {
    shona: "Bhebhi",
    english: "Baby / Babe (term of endearment)",
    pronunciation: "BHEH-bhee",
    example: "Bhebhi, ndakusuwa.",
    exampleTranslation: "Babe, I missed you.",
  },
  {
    shona: "Chako",
    english: "Yours (possessive affection)",
    pronunciation: "CHAH-koh",
    example: "Moyo wangu chako.",
    exampleTranslation: "My heart is yours.",
  },
];

const culturalNotes = [
  {
    title: "Public displays of affection are discreet",
    body: "Holding hands and brief contact in public may be acceptable between couples in urban areas, but kissing or embracing publicly — especially around elders — is considered improper. Shona romantic culture is private. What happens between a couple happens away from scrutiny.",
  },
  {
    title: "Courtship was historically through intermediaries",
    body: "Traditionally, direct romantic approaches were rare. A young man would send a trusted go-between to express his interest to the woman's family. This is less common now in urban settings, but the principle of measured, considered courtship rather than casual hookup culture remains influential — especially where family introductions are concerned.",
  },
  {
    title: "Introducing a partner to family is serious",
    body: "Bringing someone home to meet your family is not a casual step in Shona culture. It signals clear intention toward marriage. A man who introduces a woman to his parents is understood to be saying something definitive. This is why many Zimbabwean couples date privately for a long time before any family introduction.",
  },
  {
    title: "The concept of 'boyfriend' is relatively recent",
    body: "The idea of a long-term boyfriend or girlfriend relationship as distinct from courtship toward marriage is modern in Shona culture. Traditionally, one moved more directly from being a mukomana (interested young man) to beginning roora negotiations. Urban life has changed this — but the traditional model still shapes expectations, especially from older family members.",
  },
];

export default function DatingPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/social"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Social Life Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Dating &amp; Romantic Relationships
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Rudo neKushandana
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Romance in Shona culture moves differently from Western norms. It is
            measured, private, family-conscious — and ultimately oriented toward
            commitment. The vocabulary in this module gives you the language of
            love and affection, grounded in the cultural context that shapes how
            relationships form and how they are expressed.
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

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Romance in Shona Culture
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note) => (
              <div key={note.title}>
                <p className="font-semibold text-[var(--color-text)] mb-1">
                  {note.title}
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
            href="/courses/social"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/social/church-social"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Church &amp; Social Life →
          </Link>
        </div>
      </div>
    </div>
  );
}
