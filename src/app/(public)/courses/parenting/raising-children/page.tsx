import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raising Children in Shona — Kurera Vana | Duramazwi",
  description:
    "Learn Shona vocabulary for raising children — mwana, mbereko, kurera — and the village-wide participation in child-rearing that defines Shona culture.",
};

const vocabulary = [
  {
    shona: "Mwana",
    english: "Child",
    pronunciation: "MWAH-nah",
    example: "Mwana wangu anoenda kuchikoro.",
    exampleTranslation: "My child goes to school.",
  },
  {
    shona: "Vana",
    english: "Children",
    pronunciation: "VAH-nah",
    example: "Vana vari kutamba kunze.",
    exampleTranslation: "The children are playing outside.",
  },
  {
    shona: "Kurerwa",
    english: "To be raised / brought up",
    pronunciation: "koo-REHR-wah",
    example: "Ndakarerwa naambuya wangu.",
    exampleTranslation: "I was raised by my grandmother.",
  },
  {
    shona: "Kurera",
    english: "To raise / bring up",
    pronunciation: "koo-REH-rah",
    example: "Mai vangu vakarera vana vatatu.",
    exampleTranslation: "My mother raised three children.",
  },
  {
    shona: "Mbereko",
    english: "Back-cloth for carrying baby",
    pronunciation: "mbeh-REH-koh",
    example: "Akasunga mwana nembereko.",
    exampleTranslation: "She tied the baby with the back-cloth.",
  },
  {
    shona: "Kutakura mwana",
    english: "To carry a child",
    pronunciation: "koo-tah-KOO-rah MWAH-nah",
    example: "Vatete vakutakura mwana achangomuka.",
    exampleTranslation: "Aunt is carrying the baby who just woke up.",
  },
  {
    shona: "Kukura",
    english: "To grow up",
    pronunciation: "koo-KOO-rah",
    example: "Vana vanokura nekukurumidza.",
    exampleTranslation: "Children grow up quickly.",
  },
  {
    shona: "Kukudzwa",
    english: "To be raised with dignity",
    pronunciation: "koo-KOOD-zwah",
    example: "Mwana anofanira kukudzwa zvakanaka.",
    exampleTranslation: "A child should be raised with dignity.",
  },
  {
    shona: "Mhuri",
    english: "Family — the whole unit raising the child",
    pronunciation: "MHOO-ree",
    example: "Mhuri yose inobatsira kurera mwana.",
    exampleTranslation: "The whole family helps to raise the child.",
  },
  {
    shona: "Zano",
    english: "Wisdom / advice given to children",
    pronunciation: "ZAH-noh",
    example: "Ambuya vakapa vana mazano mazhinji.",
    exampleTranslation: "Grandmother gave the children much wisdom.",
  },
];

const culturalNotes = [
  {
    title: "It Takes a Village — Literally",
    body: "'It takes a village to raise a child' is not a metaphor in Shona culture — it is a description of how child-rearing actually works. Aunts (vatete, mainini, maiguru), grandmothers (ambuya), and neighbours all participate in disciplining, teaching, feeding, and forming the character of a child. A child does not belong only to its biological parents — it belongs to the whole extended network.",
  },
  {
    title: "Early Socialisation Into Obligation",
    body: "Children are socialised early into their family's obligations. From a young age, a Shona child learns to greet adults with clapping, to carry water and assist with household tasks, and to sit quietly when adults speak. This is not considered a burden — it is how a child learns hunhu (humanness) and their place in the social order. Chores and responsibilities are assigned early and are non-negotiable.",
  },
  {
    title: "The Grandmother's Role",
    body: "The ambuya (grandmother) holds a special teaching role in Shona child-rearing. It is often the grandmother who tells children the oral traditions, proverbs, and moral stories (ngano) that transmit Shona values across generations. Grandchildren are treated with more latitude by grandparents — the relationship is deliberately warmer and less strict than with parents, creating a safe space for learning.",
  },
  {
    title: "Physical Correction in Traditional Context",
    body: "Physical correction (kurovera) has been a traditional element of Shona child discipline. It was understood as an expression of care — 'you correct because you love.' However, this is a subject of active debate in modern Zimbabwe, with many families shifting toward non-physical discipline. The traditional view and modern practice exist in genuine tension, and both are part of the contemporary Shona parenting conversation.",
  },
];

export default function RaisingChildrenPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/parenting"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Parenting Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Raising Children
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kurera Vana
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, the word for raising a child — kurera — carries within it
            an entire philosophy. A child is not raised by parents alone; they
            are formed by aunts, grandmothers, neighbours, and the community.
            The mbereko (back-cloth) that ties mother and child together is also
            a symbol of how deeply the child is held — not just by one person,
            but by everyone around them.
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
            href="/courses/parenting"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/parenting/respect-for-elders"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Respect for Elders →
          </Link>
        </div>
      </div>
    </div>
  );
}
