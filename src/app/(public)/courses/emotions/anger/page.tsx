import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anger & Frustration in Shona | Duramazwi",
  description:
    "Learn Shona words for anger, frustration, and conflict — and how Shona culture approaches the expression and resolution of anger through forgiveness.",
};

const vocabulary = [
  {
    shona: "Kutsamwa",
    english: "To be angry",
    pronunciation: "koo-TSAMH-wah",
    example: "Baba vaitsamwa nekunonoka kwangu.",
    exampleTranslation: "Father was angry at my lateness.",
  },
  {
    shona: "Kukatyamadza",
    english: "To be annoyed / frustrated",
    pronunciation: "koo-kah-tyah-MAD-zah",
    example: "Zvakamutya­madza zvakadzika.",
    exampleTranslation: "It frustrated him deeply.",
  },
  {
    shona: "Hasha",
    english: "Anger (noun)",
    pronunciation: "HAH-shah",
    example: "Ane hasha dzakakura.",
    exampleTranslation: "He has great anger.",
  },
  {
    shona: "Ndine hasha",
    english: "I am angry",
    pronunciation: "NDEE-neh HAH-shah",
    example: "Ndine hasha asi ndinoziva kuti ndiregere.",
    exampleTranslation: "I am angry but I know I must forgive.",
  },
  {
    shona: "Kutsamwisa",
    english: "To make angry / to provoke",
    pronunciation: "koo-tsamh-WEE-sah",
    example: "Taura zvisina kumutsamwisa.",
    exampleTranslation: "Speak without provoking him.",
  },
  {
    shona: "Kutinyura",
    english: "To boil over — extreme anger",
    pronunciation: "koo-tee-NYOO-rah",
    example: "Akatinyura pakuona izvi.",
    exampleTranslation: "He boiled over when he saw this.",
  },
  {
    shona: "Kukanganiswa",
    english: "To be disturbed / upset",
    pronunciation: "koo-kahn-gah-NEES-wah",
    example: "Ndinokanganiswa nezvinofamba.",
    exampleTranslation: "I am disturbed by what is happening.",
  },
  {
    shona: "Muromo wakaipa",
    english: "Bad / sharp mouth — harsh speech from anger",
    pronunciation: "moo-ROH-moh wah-kah-EE-pah",
    example: "Muromo wakaipa unorwadza vanhu.",
    exampleTranslation: "A sharp mouth hurts people.",
  },
  {
    shona: "Kutukana",
    english: "To insult each other",
    pronunciation: "koo-too-KAH-nah",
    example: "Vakaramba kutukana pamberi pevana.",
    exampleTranslation: "They kept insulting each other in front of the children.",
  },
  {
    shona: "Kuregera",
    english: "To let go / forgive — the resolution of anger",
    pronunciation: "koo-reh-GEH-rah",
    example: "Ndinoregera nekuti rudo ndirwo runondibata.",
    exampleTranslation: "I forgive because love is what holds me.",
  },
  {
    shona: "Kuroora",
    english: "To cool down — after anger",
    pronunciation: "koo-roh-OH-rah",
    example: "Ngaaroore pamberi pokutaura.",
    exampleTranslation: "Let him cool down before speaking.",
  },
];

const culturalNotes = [
  {
    title: "Indirect Expression — Avoiding Direct Confrontation",
    body: "Direct confrontation in anger is generally avoided in Shona culture. If you have a grievance, the preferred approach is to express it privately or through a trusted third party — a mediator or senior family member. Confronting someone publicly in anger, especially an elder, is seen as deeply disrespectful.",
  },
  {
    title: "Public Anger Toward Elders Is Deeply Shameful",
    body: "Displaying anger openly toward a parent, elder, or in-law is one of the most serious social offences in Shona culture. The Shona concept of respect (kukudza / kuremekedza) demands that even if you are wronged by an elder, you express your feelings through appropriate channels — not through public outburst.",
  },
  {
    title: "The Ideal Cycle: Anger, Expression, Forgiveness",
    body: "In Shona emotional culture, the ideal arc of anger is: feel it honestly, express it appropriately (privately or through a third party), and then resolve it through kuregera (forgiveness). Anger that is expressed and then released is healthy. Anger that is bottled up or never resolved is considered dangerous.",
  },
  {
    title: "Hasha and Spiritual Danger",
    body: "In Shona spiritual understanding, hasha (anger) that is held for too long is believed to create spiritual vulnerability. Unresolved anger can open a person to negative influences and even illness. This belief reinforces the cultural emphasis on forgiveness — kuregera is not just moral, it is protective.",
  },
];

export default function AngerPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Anger &amp; Frustration
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Hasha neTsamwa
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Anger vocabulary in Shona ranges from the mild (kukatyamadza —
            being annoyed) to the extreme (kutinyura — boiling over). But
            equally important are the words for resolution — kuregera
            (forgiveness) and kuroora (cooling down). Understanding anger in
            Shona means understanding how the culture moves through it.
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

        {/* Anger to Forgiveness card */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            The Shona Arc: Anger to Forgiveness
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {[
              { shona: "Ndine hasha", step: "1. Feel it", sub: "I am angry" },
              {
                shona: "Kuroora",
                step: "2. Cool down",
                sub: "Step away, breathe",
              },
              {
                shona: "Kuregera",
                step: "3. Forgive",
                sub: "Let it go",
              },
            ].map((item) => (
              <div
                key={item.shona}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="text-xs font-semibold text-[var(--color-accent)] mb-1 uppercase tracking-wide">
                  {item.step}
                </p>
                <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                  {item.shona}
                </p>
                <p className="text-xs text-[var(--color-muted)]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/emotions/sadness"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Sadness &amp; Grief
          </Link>
          <Link
            href="/courses/emotions/gratitude"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Gratitude &amp; Love →
          </Link>
        </div>
      </div>
    </div>
  );
}
