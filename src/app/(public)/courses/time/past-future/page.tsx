import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past & Future in Shona | Duramazwi",
  description:
    "Learn Shona words for yesterday, today, tomorrow, last week, next year, and how Shona expresses past and future time.",
};

const vocabulary = [
  {
    shona: "Nhasi",
    english: "Today",
    pronunciation: "NHAH-see",
    example: "Nhasi ndeChina.",
    exampleTranslation: "Today is Thursday.",
  },
  {
    shona: "Nezuro",
    english: "Yesterday",
    pronunciation: "neh-ZOO-roh",
    example: "Nezuro takachema.",
    exampleTranslation: "Yesterday we cooked.",
  },
  {
    shona: "Mangwana",
    english: "Tomorrow",
    pronunciation: "mahn-GWAH-nah",
    example: "Mangwana ndinoenda kuHarare.",
    exampleTranslation: "Tomorrow I am going to Harare.",
  },
  {
    shona: "Usiku hwakagara",
    english: "Last night",
    pronunciation: "oo-SEE-koo hwah-kah-GAH-rah",
    example: "Usiku hwakagara hwakachema.",
    exampleTranslation: "Last night it rained.",
  },
  {
    shona: "Mangwana manheru",
    english: "Tomorrow evening",
    pronunciation: "mahn-GWAH-nah mahn-HEH-roo",
    example: "Mangwana manheru tinodya pamwe.",
    exampleTranslation: "Tomorrow evening we will eat together.",
  },
  {
    shona: "Svondo rapfuura",
    english: "Last week",
    pronunciation: "SVOHN-doh rah-PFOO-rah",
    example: "Svondo rapfuura ndakashanda.",
    exampleTranslation: "Last week I worked.",
  },
  {
    shona: "Svondo rinouya",
    english: "Next week",
    pronunciation: "SVOHN-doh ree-noh-OO-yah",
    example: "Svondo rinouya tinosangana.",
    exampleTranslation: "Next week we will meet.",
  },
  {
    shona: "Gore rapfuura",
    english: "Last year",
    pronunciation: "GOH-reh rah-PFOO-rah",
    example: "Gore rapfuura mvura yakauya.",
    exampleTranslation: "Last year the rains came.",
  },
  {
    shona: "Gore rinouya",
    english: "Next year",
    pronunciation: "GOH-reh ree-noh-OO-yah",
    example: "Gore rinouya ndinovaka imba.",
    exampleTranslation: "Next year I will build a house.",
  },
  {
    shona: "Kare",
    english: "Long ago / In the past",
    pronunciation: "KAH-reh",
    example: "Kare kwaiwa nzou iyi mugwagwa.",
    exampleTranslation: "Long ago, this elephant walked this path.",
  },
  {
    shona: "Ramangwana",
    english: "The future / Tomorrow (figurative)",
    pronunciation: "rah-mahn-GWAH-nah",
    example: "Ramangwana rakanaka.",
    exampleTranslation: "The future is good / Have a good future.",
  },
  {
    shona: "Panguva ino",
    english: "Right now / At this time",
    pronunciation: "pahn-GOO-vah EE-noh",
    example: "Panguva ino ndiri kushanda.",
    exampleTranslation: "Right now I am working.",
  },
];

const culturalNotes = [
  {
    title: "Future tense in Shona",
    body: "Shona does not have a simple future tense the way English does with 'will' or 'shall'. Instead, the future is expressed through verb prefixes (like 'ndi-' in first person) combined with context, the particle 'cha-', or implied time markers like 'mangwana' (tomorrow). This means the same verb form can express present or future depending on context — listening to surrounding words is essential.",
  },
  {
    title: "'Kare' — once upon a time",
    body: "Kare is used in storytelling to mean 'long ago' — similar to the English 'once upon a time'. Traditional Shona folk tales (ngano) often begin with 'Kare kare kare...' (Long, long ago...). It signals a shift into narrative mode — a cue that what follows is a story. Knowing kare helps you recognise when someone has moved from ordinary speech into storytelling.",
  },
  {
    title: "Respect for the past and ancestors",
    body: "The Shona worldview places great weight on the past — especially on the ancestral spirits (midzimu) who watch over the living. The past is not 'dead' in Shona thought; it is active and present. This shapes how time language works: the past is not something to be discarded but honoured. Phrases like 'zvakaitwa naVatete' (what was done by the aunts — what the ancestors established) carry this weight.",
  },
  {
    title: "Pfuura — the verb of passing",
    body: "The root 'pfuura' (to pass) appears in both 'svondo rapfuura' (last week) and 'gore rapfuura' (last year). It literally means 'the week/year that has passed by'. This same root is used in many Shona expressions of time passing — kufamba kwenguva (the walking/passing of time). Time in Shona moves; it walks.",
  },
];

export default function PastFuturePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/time"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Time Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 5
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Past &amp; Future
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kare neRamangwana
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, time flows — it walks (kufamba). The past is not gone
            but honoured; the future is not guaranteed but hoped for.
            Yesterday, last week, long ago, and next year all have distinct
            expressions. Learn these and you can navigate conversations about
            plans, memories, and stories.
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
            href="/courses/time/telling-time"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Telling Time
          </Link>
          <Link
            href="/courses/time/special-occasions"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Special Occasions →
          </Link>
        </div>
      </div>
    </div>
  );
}
