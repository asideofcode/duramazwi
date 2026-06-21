import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zezuru Dialect | Duramazwi",
  description:
    "Learn about the Zezuru dialect of Shona — the basis of Standard Shona, spoken in Harare and the central plateau.",
};

const vocabulary = [
  {
    zezuru: "Hongu",
    standard: "Hongu",
    english: "Yes",
    note: "Standard Shona follows Zezuru here",
  },
  {
    zezuru: "Mhoro",
    standard: "Mhoro",
    english: "Hello (informal)",
    note: "Zezuru form is now universal",
  },
  {
    zezuru: "Makadii",
    standard: "Makadii",
    english: "How are you? (respectful, plural)",
    note: "Standard Shona greeting follows Zezuru",
  },
  {
    zezuru: "Ndinofara",
    standard: "Ndinofara",
    english: "I am happy",
    note: "Core verb forms are shared across dialects",
  },
  {
    zezuru: "Mvura",
    standard: "Mvura",
    english: "Water / rain",
    note: "Consistent across all dialects",
  },
  {
    zezuru: "Mbuya",
    standard: "Ambuya",
    english: "Grandmother",
    note: "Zezuru may drop the 'A-' prefix in casual speech",
  },
  {
    zezuru: "Iwe",
    standard: "Iwe",
    english: "You (singular, informal)",
    note: "Zezuru pronoun — imi is the respectful form",
  },
  {
    zezuru: "Ehe / Ee",
    standard: "Hongu",
    english: "Yes (casual)",
    note: "Casual affirmation — Zezuru speakers often say 'ehe' informally",
  },
  {
    zezuru: "Gava",
    standard: "Imbwa",
    english: "Dog",
    note: "Regional vocabulary — Zezuru 'gava' is well understood",
  },
  {
    zezuru: "Mbichana",
    standard: "Musikana mudiki",
    english: "Young girl",
    note: "Zezuru colloquial term, widely understood in urban Harare",
  },
];

const culturalNotes = [
  {
    title: "Why Zezuru became Standard",
    body: "Standard Shona is not purely Zezuru — it was constructed by language committees in the 20th century drawing on multiple dialects. But Harare is in Zezuru territory, and as the capital city grew, Zezuru speech patterns naturally influenced what became the 'educated' or 'standard' form. This is a common pattern globally: the dialect of the capital tends to become the prestige variety.",
  },
  {
    title: "Urban Zezuru vs rural Zezuru",
    body: "Harare Zezuru — the urban variety — has absorbed significant English loanwords and code-switching patterns. Rural Zezuru, spoken in areas like Goromonzi or Murewa, is often considered more 'pure' by purists. Urban Shona mixes freely, and this is simply how living languages work.",
  },
  {
    title: "Dialect pride cuts both ways",
    body: "Zezuru speakers being associated with the urban educated class has at times created resentment from speakers of other dialects, who feel their speech is unfairly treated as 'incorrect'. This is a social and political dynamic, not a linguistic one — no dialect is inherently more correct. Karanga, Manyika, and Korekore are equally valid forms of Shona.",
  },
];

export default function ZezuruPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/regions"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Regions Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Zezuru
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            ChiZezuru — The Dialect of Harare
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Zezuru is spoken across the central plateau of Zimbabwe — Harare and
            its surrounding districts, including Goromonzi, Murewa, Mazowe, and
            extending north toward Bindura. It forms the largest component of
            what linguists and educators call &ldquo;Standard Shona&rdquo; —
            the form of the language used in schools, textbooks, broadcasting,
            and formal writing.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Because Harare is in Zezuru territory, learning Standard Shona
            effectively means learning a form very close to Zezuru. For most
            learners, Zezuru is the entry point to the language.
          </p>
        </div>

        {/* Dialect Region Card */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Region</p>
              <p className="text-[var(--color-muted)]">Central plateau — Harare, Goromonzi, Murewa, Mazowe, Bindura</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Standard Shona basis</p>
              <p className="text-[var(--color-muted)]">Largest contributor to written and broadcast Standard Shona</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Associated with</p>
              <p className="text-[var(--color-muted)]">Urban, educated speech — Harare's lingua franca</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Perception</p>
              <p className="text-[var(--color-muted)]">Considered 'standard' or 'clean' — contested by other dialect speakers</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Comparison */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Zezuru Vocabulary Notes
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Zezuru</th>
                <th className="px-4 py-3 font-semibold">Standard</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.zezuru}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.zezuru}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.standard}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.english}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs italic">
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
        <div className="flex flex-col gap-4 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/regions"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/regions/karanga"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Karanga →
          </Link>
        </div>
      </div>
    </div>
  );
}
