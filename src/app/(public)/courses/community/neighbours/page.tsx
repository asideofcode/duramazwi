import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neighbours in Shona — Vavakidzani | Duramazwi",
  description:
    "Learn Shona words for neighbours and neighbourhood life — and why living close to someone in Shona culture means real mutual obligation.",
};

const vocabulary = [
  {
    shona: "Musha",
    english: "Homestead / home",
    pronunciation: "MOO-sha",
    example: "Musha wangu uri pedyo negomo.",
    exampleTranslation: "My homestead is near the hill.",
  },
  {
    shona: "Vavakidzani",
    english: "Neighbours",
    pronunciation: "vah-vah-kee-DZA-nee",
    example: "Vavakidzani vedu vanotifarira.",
    exampleTranslation: "Our neighbours rejoice with us.",
  },
  {
    shona: "Pedyo",
    english: "Nearby",
    pronunciation: "PEH-dyoh",
    example: "Vanogara pedyo nesu.",
    exampleTranslation: "They live nearby.",
  },
  {
    shona: "Kugara pedyo",
    english: "To live nearby",
    pronunciation: "koo-GAH-rah PEH-dyoh",
    example: "Tinofara kugara pedyo.",
    exampleTranslation: "We are glad to live nearby.",
  },
  {
    shona: "Kubatsirana",
    english: "To help each other",
    pronunciation: "koo-bah-tsee-RAH-nah",
    example: "Vavakidzani vanofanira kubatsirana.",
    exampleTranslation: "Neighbours must help each other.",
  },
  {
    shona: "Kubva",
    english: "To come from (used of neighbours visiting)",
    pronunciation: "KOO-bvah",
    example: "Vavakidzani vakabva kuzoona mwana mutsva.",
    exampleTranslation: "The neighbours came to see the new baby.",
  },
  {
    shona: "Mhuri yemusha",
    english: "Homestead family",
    pronunciation: "MHOO-ree yeh-MOO-sha",
    example: "Mhuri yemusha inoshanda pamwe.",
    exampleTranslation: "The homestead family works together.",
  },
  {
    shona: "Kutarisirana",
    english: "To watch out for each other",
    pronunciation: "koo-tah-ree-see-RAH-nah",
    example: "Tinofanira kutarisirana nguva dzose.",
    exampleTranslation: "We must watch out for each other always.",
  },
  {
    shona: "Kufanotaura",
    english: "To agree / pre-arrange",
    pronunciation: "koo-fah-noh-TAU-rah",
    example: "Takafanotaura nezve basa.",
    exampleTranslation: "We pre-arranged about the work.",
  },
];

const culturalNotes = [
  {
    title: "Neighbours With Real Obligations",
    body: "In Shona culture, vavakidzani are not simply people who happen to live nearby. They carry real duties — attending births, deaths, weddings, and harvests. When a neighbour's cow dies, you help. When there is illness, you bring food. The physical proximity of homesteads means that life is shared in ways that most modern urban cultures have abandoned.",
  },
  {
    title: "Knowing Your Neighbours Deeply",
    body: "You are expected to know your neighbours well — their children, their hardships, their planting calendar. Remaining a stranger to those who live near you is unusual and even considered suspicious. Participating in a neighbour's life events — no matter how inconvenient — is part of being a person of character (munhu).",
  },
  {
    title: "Refusing to Help Is a Character Failure",
    body: "Refusing to help a neighbour who is in genuine need is considered far more than rudeness in Shona culture — it is a failure of character. Stories of neighbours who abandoned their obligations during hardship are remembered for generations. Conversely, a neighbour who shows up consistently becomes like family and may be spoken of as hama.",
  },
  {
    title: "Disputes Resolved by Community Elders",
    body: "When conflict arises between neighbours, the culturally expected first step is not a legal authority — it is the community elder. A mudhara (respected elder) from the village acts as arbitrator, hearing both sides and restoring harmony. This community-based conflict resolution is still practised widely and is often preferred over formal legal processes.",
  },
];

export default function NeighboursPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/community"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Community Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Neighbours
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Vavakidzani
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, your neighbours are not strangers you happen to
            live beside — they are participants in your life. The musha
            (homestead) exists in a web of neighbouring households, each with
            obligations to the others. The vocabulary for neighbours in Shona
            reflects this — many of the words are about mutual action, not just
            proximity.
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
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Pronunciation
                </th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Example
                </th>
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="flex flex-col gap-5 mb-12">
          {culturalNotes.map((note, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/community/friendship"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Friendship
          </Link>
          <Link
            href="/courses/community/social-obligations"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Social Obligations →
          </Link>
        </div>
      </div>
    </div>
  );
}
