import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friendship in Shona — Ushamwari | Duramazwi",
  description:
    "Learn Shona words for friendship, companionship, and solidarity — plus the deep mutual obligations that Shona friendships carry.",
};

const vocabulary = [
  {
    shona: "Shamwari",
    english: "Friend",
    pronunciation: "sha-MWA-ree",
    example: "Shamwari yangu inogara pedyo.",
    exampleTranslation: "My friend lives nearby.",
  },
  {
    shona: "Hama",
    english: "Relative / close person",
    pronunciation: "HAH-mah",
    example: "Iye hama yangu.",
    exampleTranslation: "He is my close person (relative).",
  },
  {
    shona: "Mubvandiripo",
    english: "Companion / someone who is there for you",
    pronunciation: "moo-bvan-dee-REE-poh",
    example: "Iye mubvandiripo wangu pakutambudzika.",
    exampleTranslation: "He is my companion in difficulty.",
  },
  {
    shona: "Kushamwaridzana",
    english: "To befriend each other",
    pronunciation: "koo-sha-mwa-ree-DZA-nah",
    example: "Takashamwaridzana kuchikoro.",
    exampleTranslation: "We befriended each other at school.",
  },
  {
    shona: "Rudo",
    english: "Love / affection",
    pronunciation: "ROO-doh",
    example: "Shamwari chaiyo ine rudo.",
    exampleTranslation: "A true friend has love.",
  },
  {
    shona: "Kutarisana",
    english: "To look out for each other",
    pronunciation: "koo-tah-ree-SAH-nah",
    example: "Tinofanira kutarisana.",
    exampleTranslation: "We must look out for each other.",
  },
  {
    shona: "Kushanda pamwe",
    english: "To work together",
    pronunciation: "koo-SHA-ndah PAH-mweh",
    example: "Tichashanda pamwe kubaka imba.",
    exampleTranslation: "We will work together to build the house.",
  },
  {
    shona: "Kubatana",
    english: "To hold together / solidarity",
    pronunciation: "koo-bah-TAH-nah",
    example: "Kubatana kwedu kunotipa simba.",
    exampleTranslation: "Our solidarity gives us strength.",
  },
  {
    shona: "Mufaro",
    english: "Happiness / joy",
    pronunciation: "moo-FAH-roh",
    example: "Shamwari yangu inondipa mufaro.",
    exampleTranslation: "My friend gives me joy.",
  },
  {
    shona: "Kuseka",
    english: "To laugh",
    pronunciation: "koo-SEH-kah",
    example: "Tinoda kuseka pamwe chete.",
    exampleTranslation: "We love to laugh together.",
  },
  {
    shona: "Kusekana",
    english: "To laugh together",
    pronunciation: "koo-seh-KAH-nah",
    example: "Takasekana nguva dzose.",
    exampleTranslation: "We always laughed together.",
  },
];

const culturalNotes = [
  {
    title: "Friendship as Mutual Obligation",
    body: "Friendship in Shona culture extends far beyond shared interests or companionship. A true shamwari is expected to help at funerals, weddings, and times of hardship — without being asked. Failing to show up for a friend in genuine need is considered a serious character failure, not merely an inconvenience.",
  },
  {
    title: "'Shamwari' as a Warm Address",
    body: "'Shamwari' can refer to a close friend, but it is also used to address a stranger warmly — the way an English speaker might say 'friend' to someone they've just met. In Zimbabwe, you will hear 'Shamwari!' as a greeting between strangers, expressing openness and goodwill.",
  },
  {
    title: "Friends Who Become Family",
    body: "Long-term friendships in Shona culture often evolve into something indistinguishable from family. A close friend of many years may be introduced to others as 'hama yangu' (my relative) — not because they share blood, but because they have earned that status through loyalty and presence. When a friend reaches this level, they are expected to be treated — and treated — as kin.",
  },
];

export default function FriendshipPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Friendship
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Ushamwari
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, friendship is not a casual relationship. A shamwari
            carries obligations that most Western friendships do not — to show
            up, to contribute, to work alongside, and to grieve with. The
            vocabulary of friendship in Shona is also the vocabulary of community,
            solidarity, and mutual care.
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
            href="/courses/community"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/community/neighbours"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Neighbours →
          </Link>
        </div>
      </div>
    </div>
  );
}
