import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Origins of the Shona People | Duramazwi",
  description:
    "Learn how the Shona people came to the Zimbabwe Plateau — Bantu migrations, oral tradition, and how the name 'Shona' was a colonial invention.",
};

const vocabulary = [
  {
    shona: "Shona",
    english: "The Shona people and their language",
    pronunciation: "SHOH-nah",
    example: "Ini ndiri muShona.",
    exampleTranslation: "I am a Shona person.",
  },
  {
    shona: "Bantu",
    english: "Linguistic family the Shona belong to",
    pronunciation: "BAN-too",
    example: "VaShona vanobva murudzi rweBantu.",
    exampleTranslation: "The Shona come from the Bantu people.",
  },
  {
    shona: "Nhoroondo",
    english: "History",
    pronunciation: "nhoh-ROON-doh",
    example: "Nhoroondo yedu ine simba.",
    exampleTranslation: "Our history has power.",
  },
  {
    shona: "Vadzitateguru",
    english: "Forefathers / ancestors (the distant ones)",
    pronunciation: "vah-dzee-tah-teh-GOO-roo",
    example: "Vadzitateguru vedu vakakwira padenga.",
    exampleTranslation: "Our forefathers went on ahead.",
  },
  {
    shona: "Kudebuka",
    english: "Migration — to move as a people",
    pronunciation: "koo-deh-BOO-kah",
    example: "Vadzitateguru vakadebuka kubva kuchamhembe.",
    exampleTranslation: "The forefathers migrated from the north.",
  },
  {
    shona: "Musha",
    english: "Home / settlement",
    pronunciation: "MOO-shah",
    example: "Musha wangu uri kuMasvingo.",
    exampleTranslation: "My home is in Masvingo.",
  },
  {
    shona: "Rwizi",
    english: "River",
    pronunciation: "RWEE-zee",
    example: "Vadzitateguru vakafamba narwizi.",
    exampleTranslation: "The forefathers travelled along the river.",
  },
  {
    shona: "Munhu wekutanga",
    english: "The first person — in origin stories",
    pronunciation: "MOO-nhoo weh-koo-TAN-gah",
    example: "Munhu wekutanga akasikwa naMwari.",
    exampleTranslation: "The first person was created by God.",
  },
  {
    shona: "Mwari",
    english: "God — in Shona belief and creation accounts",
    pronunciation: "MWAH-ree",
    example: "Mwari ndiye akasika vanhu.",
    exampleTranslation: "Mwari is the one who created people.",
  },
  {
    shona: "Musikavanhu",
    english: "Creator of people — Shona name for the creator",
    pronunciation: "moo-see-kah-VAH-nhoo",
    example: "Musikavanhu ndiye Mwari.",
    exampleTranslation: "Musikavanhu is God.",
  },
];

const culturalNotes = [
  {
    title: "The name 'Shona' was a colonial label",
    body: "Before British colonisation, the people now called Shona did not use that name for themselves. Identity was expressed through mutupo (totem clan) and chieftaincy. The colonial administration grouped diverse but related peoples under the single administrative label 'Shona' — a label that, over time, became accepted and embraced.",
  },
  {
    title: "Oral tradition preserves origins",
    body: "Shona oral tradition carries the history of origins through clan praises (zvidao) — genealogical poetry that traces lineages back generations. Elders who know the full zvidao of their clan carry knowledge no written archive holds. These praises are recited at ceremonies, births, marriages, and deaths.",
  },
  {
    title: "Archaeology confirms the deep past",
    body: "Archaeological evidence — especially the stone enclosures of Great Zimbabwe and the earlier Mapungubwe culture — shows that highly organised societies existed on the Zimbabwe Plateau centuries before European contact. The Shona did not arrive recently; their civilisation was already ancient when the first Europeans reached the region.",
  },
];

export default function OriginsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/history"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to History Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Origins
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nhoroondo Yekutanga
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The Shona are a Bantu-speaking people whose ancestors migrated onto
            the Zimbabwe Plateau from the north, probably between 200 and 300 CE.
            By around 1000 CE, complex and organised societies had developed —
            long before any European arrived. The term &ldquo;Shona&rdquo; was
            applied by colonial administrators; the people themselves identified
            through clan, totem, and chieftaincy. Understanding these origins
            begins with the vocabulary of migration, ancestry, and creation.
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
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
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
                    <span className="text-[var(--color-text)] font-medium">{word.example}</span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">{word.exampleTranslation}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Historical Content */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Story of Origins
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Archaeological and linguistic evidence shows that Bantu-speaking
            peoples began migrating into the Zimbabwe Plateau from the north and
            west around 200&ndash;300 CE. They brought with them knowledge of
            iron smelting, farming, and cattle herding — technologies that
            allowed larger, more settled communities to develop.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            By 1000 CE, complex societies had formed. These were not scattered
            villages but organised polities with trade networks, hierarchical
            political structures, and sophisticated material culture. The
            famous stone enclosures that would give Zimbabwe its name were
            products of this long development.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Migrations followed rivers — the Zambezi, the Limpopo, the Sabi —
            and the fertility of the plateau made it a destination worth
            settling. The word <strong className="text-[var(--color-primary)]">rwizi</strong> (river)
            points to how central water was to every aspect of Shona life,
            from migration to settlement to ceremony.
          </p>
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
            href="/courses/history"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/history/kingdoms"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Kingdoms →
          </Link>
        </div>
      </div>
    </div>
  );
}
