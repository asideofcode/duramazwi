import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birth Ceremonies in Shona Culture | Duramazwi",
  description:
    "Learn Shona vocabulary and traditions around birth — naming ceremonies, the grandmother's role, introducing a child to the ancestors, and the mutupo at birth.",
};

const vocabulary = [
  {
    shona: "Kubereka",
    english: "To give birth",
    pronunciation: "koo-beh-REH-kah",
    example: "Mai vakabereka mwana wakanaka.",
    exampleTranslation: "Mother gave birth to a beautiful child.",
  },
  {
    shona: "Mwana akaberekwa",
    english: "A child has been born",
    pronunciation: "MWAH-nah ah-kah-beh-REH-kwah",
    example: "Mwana akaberekwa usiku hwekutanga.",
    exampleTranslation: "A child was born in the early night.",
  },
  {
    shona: "Chirevo",
    english: "Birth announcement / celebration",
    pronunciation: "chee-REH-voh",
    example: "Chirevo cherufu yaiva nomufaro mukuru.",
    exampleTranslation: "The birth celebration was filled with great joy.",
  },
  {
    shona: "Zita",
    english: "Name — naming is a ceremony",
    pronunciation: "ZEE-tah",
    example: "Zita remwana rinopihwa nevakuru vemhuri.",
    exampleTranslation: "A child's name is given by the family elders.",
  },
  {
    shona: "Kukudzwa",
    english: "To be honoured — ceremony honouring a new birth",
    pronunciation: "koo-KOO-dzwah",
    example: "Mwana akakudzwa nevabereki nevakuru.",
    exampleTranslation: "The child was honoured by parents and elders.",
  },
  {
    shona: "Mudzimu",
    english: "Ancestral spirit — the child is welcomed to the lineage",
    pronunciation: "moo-DZEE-moo",
    example: "Mudzimu wemhuri unogamuchira mwana mutsva.",
    exampleTranslation: "The family's ancestral spirit receives the new child.",
  },
  {
    shona: "Mbuya",
    english: "Grandmother — plays a central role at birth",
    pronunciation: "MBOO-yah",
    example: "Mbuya ndiye anochengeta mai nemwana.",
    exampleTranslation: "The grandmother is the one who cares for mother and child.",
  },
  {
    shona: "Zvibereko",
    english: "Afterbirth — treated with great care",
    pronunciation: "zvee-beh-REH-koh",
    example: "Zvibereko zvinochengetwa nezvirango.",
    exampleTranslation: "The afterbirth is kept and handled according to custom.",
  },
  {
    shona: "Zuva rekuberekwa",
    english: "Birthday / birth day",
    pronunciation: "ZOO-vah reh-koo-beh-REH-kwah",
    example: "Zuva rekuberekwa rinofadza mhuri yose.",
    exampleTranslation: "A birthday brings joy to the whole family.",
  },
  {
    shona: "Mutupo",
    english: "Totem — confirmed at birth through the father's line",
    pronunciation: "moo-TOO-poh",
    example: "Mutupo wemwana unobva kuna baba.",
    exampleTranslation: "The child's totem comes from the father.",
  },
];

const culturalNotes = [
  {
    title: "Names are never random",
    body: "In Shona culture, a child's name carries meaning and weight. Names are typically given by grandparents or elders of the family — not chosen casually by the parents alone. Names may reflect the circumstances of the birth, the season, a deceased ancestor being remembered, a prayer or wish for the child's life, or events happening in the family at the time. A child named Tapiwa (we have been given) carries a statement of gratitude. A child named Tatenda (we are thankful) carries an act of thanksgiving. The name is a lifelong identity and a blessing.",
  },
  {
    title: "The child is introduced to the ancestors",
    body: "In traditional Shona practice, a newborn is not simply born into the human world — the child is formally introduced to the family's ancestral spirits (midzimu). This may involve the grandmother performing a small ritual, speaking to the ancestors to acknowledge the new arrival and ask for their protection. The child enters not just a family but a lineage stretching back through generations. The ancestors are told: this is the one who has come.",
  },
  {
    title: "The grandmother's central role",
    body: "Mbuya (the grandmother) holds the most important practical and spiritual role around a birth in traditional Shona life. She is typically present at the birth, she manages the first days and weeks of the mother and child's care, she performs the rituals of introduction, and she is often the one to name the child or assist the naming process. The grandmother carries the knowledge of the lineage, the customs, and the practical wisdom of raising children. Her authority during this period is unquestioned.",
  },
  {
    title: "The mutupo is confirmed at birth",
    body: "Every Shona child inherits the mutupo (totem/clan) of the father. This is confirmed and declared at birth — the child belongs to the father's clan from the moment of arrival. The mutupo governs which people the child can later marry (not within the same totem), which praises (zvidao) they recite, and how they are received when they introduce themselves in any Shona community. Two people of the same mutupo are considered family regardless of any blood connection.",
  },
];

export default function BirthCeremoniesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/ceremonies"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Ceremonies Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Birth Ceremonies
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Chirevo — Kukudzwa Kwemwana
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, the birth of a child is far more than a medical
            event — it is the arrival of a new spirit into the lineage, a moment
            that connects the living to the ancestors. The naming, the grandmother's
            authority, and the child's introduction to the ancestral world are all
            part of a carefully held tradition.
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

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="grid gap-5 mb-12">
          {culturalNotes.map((note, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Meaningful Names Box */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Meaningful Shona Birth Names
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { name: "Tapiwa", meaning: "We have been given" },
              { name: "Tatenda", meaning: "We are thankful" },
              { name: "Tawanda", meaning: "We have increased" },
              { name: "Chenai", meaning: "Be clean / pure" },
              { name: "Simbarashe", meaning: "Power of God" },
              { name: "Ruvimbo", meaning: "Trust / faith" },
              { name: "Chiedza", meaning: "Light" },
              { name: "Kudakwashe", meaning: "The will of God" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 flex items-center justify-between"
              >
                <p className="font-bold text-[var(--color-primary)]">{item.name}</p>
                <p className="text-sm text-[var(--color-muted)] italic">{item.meaning}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-muted)] mt-4 leading-relaxed">
            Every Shona name is a statement. These names are not decorative — they
            carry the prayer, the occasion, and the intention of the family at the
            time of the child's birth.
          </p>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/ceremonies"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/ceremonies/weddings"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Weddings →
          </Link>
        </div>
      </div>
    </div>
  );
}
