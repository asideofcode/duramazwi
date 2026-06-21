import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratitude & Love in Shona | Duramazwi",
  description:
    "Learn Shona words for gratitude, love, and compassion — and how Shona culture expresses thankfulness and why tsitsi (compassion) is the highest virtue.",
};

const vocabulary = [
  {
    shona: "Ndatenda",
    english: "I thank you (informal)",
    pronunciation: "ndah-TEH-ndah",
    example: "Ndatenda nezvawakaita.",
    exampleTranslation: "I thank you for what you did.",
  },
  {
    shona: "Masvita",
    english: "Thank you (formal)",
    pronunciation: "mah-SVEE-tah",
    example: "Masvita, vadzimu vakupei zororo.",
    exampleTranslation: "Thank you — may the ancestors give you rest.",
  },
  {
    shona: "Ndinokutendai",
    english: "I thank you deeply (formal)",
    pronunciation: "ndee-noh-koo-ten-DAH-ee",
    example: "Ndinokutendai nekubatsira kwenyu.",
    exampleTranslation: "I thank you deeply for your help.",
  },
  {
    shona: "Ndinokudai",
    english: "I love you (informal)",
    pronunciation: "ndee-noh-koo-DAH-ee",
    example: "Ndinokudai, mai vangu.",
    exampleTranslation: "I love you, my mother.",
  },
  {
    shona: "Ndinokudai chaizvo",
    english: "I truly love you",
    pronunciation: "ndee-noh-koo-DAH-ee chah-EEZ-voh",
    example: "Ndinokudai chaizvo — hapana achakuchinja.",
    exampleTranslation: "I truly love you — nothing will change that.",
  },
  {
    shona: "Rudo",
    english: "Love",
    pronunciation: "ROO-doh",
    example: "Rudo ndiwo musimboti wemhuri.",
    exampleTranslation: "Love is the foundation of the family.",
  },
  {
    shona: "Tsitsi",
    english: "Compassion / mercy",
    pronunciation: "TSEE-tsee",
    example: "Ane tsitsi vanhu vose.",
    exampleTranslation: "He has compassion for all people.",
  },
  {
    shona: "Kuda",
    english: "To want / to love (context dependent)",
    pronunciation: "KOO-dah",
    example: "Ndinokuda zvakanyanya.",
    exampleTranslation: "I love / want it very much.",
  },
  {
    shona: "Kufarira",
    english: "To like / to appreciate",
    pronunciation: "koo-fah-REE-rah",
    example: "Ndinofarira nzira yaunongotaura.",
    exampleTranslation: "I appreciate the way you speak.",
  },
  {
    shona: "Kunakidzwa",
    english: "To be pleased with",
    pronunciation: "koo-nah-kid-ZWAH",
    example: "Vakanakidzwa nezvawakaita.",
    exampleTranslation: "They were pleased with what you did.",
  },
  {
    shona: "Zvokutenda",
    english: "Reasons for thanks",
    pronunciation: "zvoh-koo-TEH-ndah",
    example: "Zvokutenda zvakawanda.",
    exampleTranslation: "The reasons for thanks are many.",
  },
  {
    shona: "Zvakanaka chaizvo",
    english: "It is truly good — gratitude for a situation",
    pronunciation: "zvah-kah-NAH-kah chah-EEZ-voh",
    example: "Zvakanaka chaizvo! Ndatenda Mwari.",
    exampleTranslation: "It is truly good! I thank God.",
  },
];

const culturalNotes = [
  {
    title: "'I Love You' — Shown More Than Spoken",
    body: "In traditional Shona culture, saying 'Ndinokudai' (I love you) is more reserved than in Western cultures. Love is understood to be demonstrated through actions — providing food, protecting the family, being present, working hard. When 'Ndinokudai' is spoken, it carries weight precisely because it is not said casually.",
  },
  {
    title: "Public Gratitude Brings Honour",
    body: "Gratitude in Shona is expressed frequently and openly. Thanking someone publicly — at a gathering, in front of family — is an honour to both the giver and the receiver. The Shona culture of ndatenda (thanking) is generous — you give thanks for small kindnesses, for presence, for effort, and for life itself.",
  },
  {
    title: "Tsitsi — Compassion Above Individual Love",
    body: "'Tsitsi' (compassion/mercy) is considered a virtue above personal rudo (love) in Shona moral understanding. Rudo can be selective — you love your family. But tsitsi extends to strangers, enemies, and those in need. A person described as 'ane tsitsi' (having compassion) is highly honoured.",
  },
  {
    title: "Thanking God — Woven Into Daily Speech",
    body: "Gratitude toward Mwari (God) is expressed regularly in everyday Shona conversation — not just in prayer or church. 'Ndatenda Mwari' (I thank God), 'Mwari akatikomborera' (God has blessed us), and 'Zvakanaka chaizvo' (it is truly good) are woven into how Shona speakers describe their lives.",
  },
];

export default function GratitudePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/emotions"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Emotions Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Gratitude &amp; Love
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kutenda neRudo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Gratitude and love are at the heart of Shona social life. Saying
            <strong> ndatenda</strong> (I thank you) is a constant presence in
            daily conversation. And love — both rudo (personal love) and tsitsi
            (compassion for all) — shapes how Shona people relate to family,
            community, and God.
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
        <div className="grid gap-5 mb-12">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Ways to Say Thank You */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Ways to Say Thank You
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                shona: "Ndatenda",
                register: "Everyday / informal",
                note: "Most common — used daily",
              },
              {
                shona: "Masvita",
                register: "Formal",
                note: "For elders and official settings",
              },
              {
                shona: "Ndinokutendai",
                register: "Deep / formal",
                note: "Expresses profound gratitude",
              },
            ].map((item) => (
              <div
                key={item.shona}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                  {item.shona}
                </p>
                <p className="text-xs font-semibold text-[var(--color-accent)] mb-1">
                  {item.register}
                </p>
                <p className="text-xs text-[var(--color-muted)]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/emotions/anger"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Anger &amp; Frustration
          </Link>
          <Link
            href="/courses/emotions/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Practice: Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
