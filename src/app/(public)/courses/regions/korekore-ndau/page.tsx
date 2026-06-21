import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Korekore & Ndau Dialects | Duramazwi",
  description:
    "Learn about Korekore (northern Zimbabwe) and Ndau (far east) — the most distinctive dialects at the edges of the Shona family.",
};

const korekoreVocabulary = [
  {
    dialect: "Korwa",
    standard: "Kurwa",
    english: "To be born",
    note: "Korekore sound shift — 'ko-' prefix pattern",
  },
  {
    dialect: "Ndadzoka",
    standard: "Ndadzoka",
    english: "I have returned",
    note: "Consistent — shared verb form",
  },
  {
    dialect: "Nhasi",
    standard: "Nhasi",
    english: "Today",
    note: "Universal — consistent across all dialects",
  },
  {
    dialect: "Mbeva",
    standard: "Mbeva",
    english: "Mouse / rat",
    note: "Consistent — shared wildlife vocabulary",
  },
  {
    dialect: "Chando",
    standard: "Chando",
    english: "Cold / winter",
    note: "Shared — the north also gets cold seasons",
  },
  {
    dialect: "Nzizi",
    standard: "Mvura / Rwizi",
    english: "River / stream",
    note: "Korekore uses 'nzizi' for smaller streams — northern variant",
  },
  {
    dialect: "Kure",
    standard: "Kure",
    english: "Far away",
    note: "Consistent — universal distance marker",
  },
  {
    dialect: "Maoko",
    standard: "Maoko / Zvanza",
    english: "Hands",
    note: "Body vocabulary — Korekore form broadly consistent with Standard",
  },
];

const ndauVocabulary = [
  {
    dialect: "Haa",
    standard: "Hongu",
    english: "Yes",
    note: "Ndau affirmation — sounds entirely different from Standard",
  },
  {
    dialect: "Nhasi",
    standard: "Nhasi",
    english: "Today",
    note: "One of the consistent shared words",
  },
  {
    dialect: "Pfana",
    standard: "Moto",
    english: "Fire",
    note: "Ndau uses 'pfana' — a distinctive vocabulary divergence",
  },
  {
    dialect: "Doro",
    standard: "Doro",
    english: "Beer / traditional brew",
    note: "Consistent — important cultural vocabulary shared everywhere",
  },
  {
    dialect: "Kusima",
    standard: "Kusimuka",
    english: "To stand up / rise",
    note: "Ndau root variation — shortened form of Standard",
  },
  {
    dialect: "Ngwe",
    standard: "Hari",
    english: "Pot",
    note: "Household vocabulary diverges significantly in Ndau",
  },
  {
    dialect: "Ramba",
    standard: "Ramba / Kuramba",
    english: "To refuse / persist",
    note: "Shared root but Ndau has distinct tonal patterns",
  },
  {
    dialect: "Amai",
    standard: "Mai / Amai",
    english: "Mother",
    note: "Ndau uses 'Amai' — the formal form also used in respectful Standard",
  },
  {
    dialect: "Nda",
    standard: "Ndaka / Nda-",
    english: "I have (past prefix)",
    note: "Ndau shortens the past tense prefix — a key grammatical marker",
  },
];

const culturalNotes = [
  {
    title: "Korekore and the Mutapa legacy",
    body: "The Korekore people of northern Zimbabwe (Mashonaland Central and North) are historically associated with the territory of the Mutapa state — the great gold-trading empire of the 15th to 17th centuries. The Mwene Mutapa's court was in Korekore country, near the Zambezi escarpment. This history gives Korekore identity a particular connection to that powerful era.",
  },
  {
    title: "Is Ndau a dialect or a language?",
    body: "This is genuinely contested. Ndau has significant structural differences from Standard Shona — distinct tonal patterns, a large proportion of unique vocabulary, and Nguni-influenced elements that are not found in other Shona varieties. Some linguists classify it as a separate language; most Zimbabwean educators classify it as a Shona dialect. Ndau speakers themselves often resist the Shona classification, seeing their language as distinct. This debate mirrors similar controversies globally — it is as much political as linguistic.",
  },
  {
    title: "Nguni influences in Ndau",
    body: "Ndau has been significantly influenced by Nguni languages — specifically through the movement of Nguni-speaking groups through the Chimanimani area in the 19th century. This has left vocabulary, grammatical patterns, and tonal features in Ndau that are not found in other Shona varieties. The result is a language that sounds noticeably different to a Standard Shona speaker, even though the two share a common ancestor.",
  },
  {
    title: "The north-south axis",
    body: "Moving from Harare north toward Mvurwi and the Zambezi Valley, Shona gradually shifts toward Korekore. Moving from Harare south toward Masvingo, it shifts toward Karanga. Moving east toward Mutare, it shifts toward Manyika. And in the far corners — the far north and far east — you find Korekore and Ndau respectively, the most distant from the Standard Shona centre. The further from Harare, generally the more distinct the dialect.",
  },
];

export default function KorekoreNdauPage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Korekore &amp; Ndau
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            ChiKorekore neChiNdau — The Edges of Shona
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Korekore and Ndau occupy the northern and far eastern edges of the
            Shona-speaking world. Both are further from Standard Shona than
            Zezuru, Karanga, or Manyika — and Ndau in particular is different
            enough that some linguists classify it as a separate language
            rather than a dialect.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Understanding these edge dialects deepens your understanding of
            Shona as a living, diverse language — not a single monolith, but a
            family of related ways of speaking shaped by geography, history,
            and contact with neighbouring peoples.
          </p>
        </div>

        {/* Korekore Section */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
          Korekore
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Region</p>
              <p className="text-[var(--color-muted)]">Northern Zimbabwe — Mashonaland Central, Mvurwi, Zambezi escarpment</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Historical association</p>
              <p className="text-[var(--color-muted)]">Territory of the Mutapa state — the Zambezi trade routes</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
          Korekore vs Standard Shona
        </h3>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Korekore</th>
                <th className="px-4 py-3 font-semibold">Standard Shona</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {korekoreVocabulary.map((word, i) => (
                <tr
                  key={word.dialect + word.english}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.dialect}
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

        {/* Ndau Section */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
          Ndau
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Region</p>
              <p className="text-[var(--color-muted)]">Far eastern Zimbabwe — Chimanimani, Chipinge</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Status</p>
              <p className="text-[var(--color-muted)]">Classified as Shona dialect by Zimbabwe — considered separate language by many Ndau speakers</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Key influence</p>
              <p className="text-[var(--color-muted)]">Nguni languages — significant structural impact</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Intelligibility</p>
              <p className="text-[var(--color-muted)]">Difficult for Standard Shona speakers — the most distant Shona variety</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
          Ndau vs Standard Shona
        </h3>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Ndau</th>
                <th className="px-4 py-3 font-semibold">Standard Shona</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {ndauVocabulary.map((word, i) => (
                <tr
                  key={word.dialect + word.english}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.dialect}
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
            href="/courses/regions/manyika"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Manyika
          </Link>
          <Link
            href="/courses/regions/overview"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Understanding Dialects →
          </Link>
        </div>
      </div>
    </div>
  );
}
