import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manyika Dialect | Duramazwi",
  description:
    "Learn about the Manyika dialect of Shona — spoken in Manicaland, shaped by the mountains and the Mozambican border.",
};

const vocabulary = [
  {
    manyika: "Mamwe",
    standard: "Zvimwe",
    english: "Some / other things",
    note: "Manyika particle — very common in eastern speech",
  },
  {
    manyika: "Ndichibva",
    standard: "Kubva",
    english: "Coming from",
    note: "Manyika aspectual form — directional origin marker",
  },
  {
    manyika: "Hoyo",
    standard: "Ehe / Hongu",
    english: "Yes (casual affirmation)",
    note: "Manyika informal agreement — rarely heard in Harare",
  },
  {
    manyika: "Hatina",
    standard: "Hatina",
    english: "We don't have",
    note: "Consistent negative across dialects",
  },
  {
    manyika: "Musha",
    standard: "Musha",
    english: "Home / village",
    note: "Universal — the concept of musha is the same everywhere",
  },
  {
    manyika: "Muchena",
    standard: "Chena",
    english: "White / clean",
    note: "Manyika may prefix 'mu-' differently in certain compounds",
  },
  {
    manyika: "Bonde",
    standard: "Bonde / Munda",
    english: "Field / farmland",
    note: "Agricultural vocabulary — slightly different emphasis",
  },
  {
    manyika: "Usiku",
    standard: "Usiku",
    english: "Night",
    note: "Consistent — shared fully",
  },
  {
    manyika: "Mhuri",
    standard: "Mhuri",
    english: "Family",
    note: "Universal — one of the most important words in any dialect",
  },
  {
    manyika: "Matoro",
    standard: "Matoro / Magaro",
    english: "Buttocks",
    note: "Body vocabulary varies — Manyika form differs from Zezuru",
  },
  {
    manyika: "Chibhakera",
    standard: "Kubhakera",
    english: "To bake (from Portuguese 'pão')",
    note: "Portuguese loanword via Mozambique — unique to eastern dialects",
  },
  {
    manyika: "Ndeipi",
    standard: "Ndeipi / Ipi",
    english: "Which one? / What?",
    note: "Interrogative — Manyika form is widely used",
  },
];

const culturalNotes = [
  {
    title: "The border runs through the people",
    body: "The Zimbabwe-Mozambique border was drawn by colonial powers in the 19th century through the middle of Manyika-speaking territory. Today there are Manyika communities on both sides of the border. Zimbabwean Manyika speakers and Mozambican Manyika speakers can understand each other, though the Mozambican variety has been more heavily influenced by Portuguese. This cross-border identity is a living example of how borders are politically drawn but culturally porous.",
  },
  {
    title: "The mountains and Manyika culture",
    body: "Manyika territory encompasses the Eastern Highlands — Nyanga, Chimanimani, Vumba, and the Bvumba mountains. This landscape shapes the culture and vocabulary. The mountains bring mist, cooler temperatures, tea and coffee growing, and a way of life distinct from the central plateau. Manyika people identify strongly with their highland landscape, and this geography inflects everything from cuisine to ceremony.",
  },
  {
    title: "Portuguese loanwords",
    body: "Because of centuries of contact across the Mozambican border — first through trade, then through colonial administration, then through migration — Manyika has absorbed some Portuguese-influenced vocabulary. Words for baking, certain foods, and some tools carry traces of this contact. This layering of influences makes Manyika one of the most linguistically interesting Shona dialects.",
  },
  {
    title: "'Soft' sounds",
    body: "Manyika is sometimes described as a 'softer' dialect — some consonant sounds that are harder in Zezuru or Karanga are softened or elided in Manyika speech. This gives Manyika a melodic quality to ears accustomed to Standard Shona. Manyika speakers sometimes notice that their speech is perceived as gentler, and they wear this as a cultural marker of their eastern identity.",
  },
];

export default function ManyikaPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Manyika
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            ChiManyika — The Dialect of the Eastern Highlands
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Manyika is spoken in Manicaland — the eastern province of Zimbabwe,
            centred on Mutare and extending into the highlands of Nyanga and
            Chimanimani. Because the Zimbabwe-Mozambique border runs through
            Manyika-speaking territory, there are Manyika speakers on both
            sides, and the dialect has been shaped by centuries of cross-border
            contact.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Manyika is fully intelligible with Standard Shona, but it has
            distinct vocabulary, softer sounds in some areas, and traces of
            Mozambican and Portuguese influence that make it recognisably
            eastern.
          </p>
        </div>

        {/* Dialect Region Card */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Region</p>
              <p className="text-[var(--color-muted)]">Manicaland — Mutare, Nyanga, Chimanimani, Chipinge</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Cross-border</p>
              <p className="text-[var(--color-muted)]">Manyika speakers also in Mozambique — both sides of the border</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">External influences</p>
              <p className="text-[var(--color-muted)]">Ndau (southeast), Mozambican languages, Portuguese loanwords</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Perception</p>
              <p className="text-[var(--color-muted)]">'Soft' dialect — some sounds gentler than central Shona forms</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Comparison */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Manyika vs Standard Shona
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Manyika</th>
                <th className="px-4 py-3 font-semibold">Standard Shona</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.manyika + word.english}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.manyika}
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
            href="/courses/regions/karanga"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Karanga
          </Link>
          <Link
            href="/courses/regions/korekore-ndau"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Korekore &amp; Ndau →
          </Link>
        </div>
      </div>
    </div>
  );
}
