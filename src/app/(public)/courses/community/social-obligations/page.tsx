import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Obligations in Shona — Kuremekedza | Duramazwi",
  description:
    "Learn Shona vocabulary for social obligations, respect, and the duties that hold communities together — including the concept of hunhu/ubuntu.",
};

const vocabulary = [
  {
    shona: "Kuremekedza",
    english: "To respect",
    pronunciation: "koo-reh-meh-KEH-dzah",
    example: "Tinofanira kuremekedza vakuru.",
    exampleTranslation: "We must respect our elders.",
  },
  {
    shona: "Kuita zvinodiwa",
    english: "To do what is required",
    pronunciation: "koo-EE-tah zvee-noh-DEE-wah",
    example: "Ndakuita zvinodiwa pamuchato.",
    exampleTranslation: "I did what was required at the wedding.",
  },
  {
    shona: "Basa",
    english: "Work / duty / obligation",
    pronunciation: "BAH-sah",
    example: "Basa rangu ndere kubatsira hama.",
    exampleTranslation: "My duty is to help the family.",
  },
  {
    shona: "Ndine basa",
    english: "I have an obligation",
    pronunciation: "ndee-neh BAH-sah",
    example: "Ndine basa rekuenda kumatete.",
    exampleTranslation: "I have an obligation to go to the funeral.",
  },
  {
    shona: "Kuona",
    english: "To see / witness — also to fulfil",
    pronunciation: "koo-OH-nah",
    example: "Akaona basa rake zvakanaka.",
    exampleTranslation: "He fulfilled his duty well.",
  },
  {
    shona: "Kupinda",
    english: "To participate / enter",
    pronunciation: "koo-PEEN-dah",
    example: "Kupinda muchato kunoremekedza mhuri.",
    exampleTranslation: "Attending the wedding honours the family.",
  },
  {
    shona: "Kusiya",
    english: "To leave / abandon (negative: abandoning obligations)",
    pronunciation: "koo-SEE-yah",
    example: "Kusiya hama pakushungurudzika kwakaipa.",
    exampleTranslation: "Abandoning family in hardship is bad.",
  },
  {
    shona: "Munhu mukuru",
    english: "Elder / important person",
    pronunciation: "MOO-nhoo moo-KOO-roo",
    example: "Munhu mukuru anofanira kuremekedza.",
    exampleTranslation: "An elder must be respected.",
  },
  {
    shona: "Simba",
    english: "Strength / authority",
    pronunciation: "SEEM-bah",
    example: "Simba remunhu mukuru rinobva pahunhu hwake.",
    exampleTranslation: "An elder's authority comes from their character.",
  },
  {
    shona: "Zvakanaka",
    english: "It is good / correct — affirming right behaviour",
    pronunciation: "zvah-kah-NAH-kah",
    example: "Zvakanaka kuenda kumuchato.",
    exampleTranslation: "It is correct to go to the wedding.",
  },
];

const culturalNotes = [
  {
    title: "Social Obligations Are Not Optional",
    body: "Attending funerals, weddings, and community ceremonies in Shona culture is not a matter of personal choice — it is a social obligation with real consequences. Failing to attend a neighbour's or relative's funeral, or not contributing at a community event, damages your reputation in ways that are long remembered. These obligations are the social glue of Shona community life.",
  },
  {
    title: "Contributing at Community Events",
    body: "Beyond physical attendance, there is an expectation to contribute materially — with money, food, or labour. This is called kushanda (working/contributing) for someone. When you attend a community event and contribute, you are building social capital that will be returned to you when your own time of need arrives. Those who attend events empty-handed and take without contributing are noted and remembered.",
  },
  {
    title: "Hunhu / Ubuntu — Being Human Through Community",
    body: "The concept of hunhu (or ubuntu in other Bantu languages) is the philosophical foundation of all social obligations. It is sometimes summarised as 'I am because we are.' A person without community — without fulfilling their obligations, without participating, without showing up — is considered less than fully human in the Shona moral framework. Hunhu is not performed for show; it is the daily practice of community membership.",
  },
];

export default function SocialObligationsPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Respect &amp; Social Obligations
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuremekedza neZvakanaka
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona society, social obligations are not suggestions — they are
            the fabric of community membership. To be a person of hunhu is to
            fulfil your duties without being asked, to show up when others
            need you, and to demonstrate that you understand your place within
            the community. The vocabulary here is the language of duty, respect,
            and right action.
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

        {/* Hunhu Spotlight */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Key Concept: Hunhu
          </h3>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            <strong>Hunhu</strong> (pronounced HOO-nhoo) is the Shona equivalent
            of the Nguni concept of ubuntu. It is the quality of being fully
            human — which in Shona thought is achieved only through community
            membership and fulfilment of one&apos;s obligations to others.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg">Munhu</p>
              <p className="text-sm text-[var(--color-text)] font-medium">A person</p>
              <p className="text-sm text-[var(--color-muted)] mt-1 italic">
                Not merely a human being — a person of character and community
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg">Hunhu</p>
              <p className="text-sm text-[var(--color-text)] font-medium">Humanness / personhood</p>
              <p className="text-sm text-[var(--color-muted)] mt-1 italic">
                Demonstrated through obligation, respect, and community presence
              </p>
            </div>
          </div>
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
            href="/courses/community/neighbours"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Neighbours
          </Link>
          <Link
            href="/courses/community/community-support"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Community Support Systems →
          </Link>
        </div>
      </div>
    </div>
  );
}
