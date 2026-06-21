import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Roles in Shona — Mabasa eMhuri | Duramazwi",
  description:
    "Learn the Shona vocabulary for family roles — muzukuru, muroora, mukomana, musikana — and the complementary expectations placed on boys and girls as they grow.",
};

const vocabulary = [
  {
    shona: "Muzukuru",
    english: "Grandchild — carries special ritual responsibilities",
    pronunciation: "moo-zoo-KOO-roo",
    example: "Muzukuru anofanira kutungamira pamhuri.",
    exampleTranslation: "The grandchild must lead in the family.",
  },
  {
    shona: "Muroora",
    english: "Daughter-in-law — has household duties",
    pronunciation: "moo-ROH-rah",
    example: "Muroora anobika kudya kwemhuri.",
    exampleTranslation: "The daughter-in-law cooks for the family.",
  },
  {
    shona: "Mukomana",
    english: "Boy / young man",
    pronunciation: "moo-KOH-mah-nah",
    example: "Mukomana anofanira kushanda mumunda.",
    exampleTranslation: "The boy must work in the field.",
  },
  {
    shona: "Musikana",
    english: "Girl / young woman",
    pronunciation: "moo-see-KAH-nah",
    example: "Musikana anodzidziswa kugadzira imba.",
    exampleTranslation: "A girl is taught to maintain the home.",
  },
  {
    shona: "Huwo",
    english: "Son's responsibility to inherit and continue lineage",
    pronunciation: "HOO-woh",
    example: "Huwo hwomwanakomana mukuru ndirwo hunofambisa mhuri.",
    exampleTranslation: "The first son's duty carries the family forward.",
  },
  {
    shona: "Baba",
    english: "Father's authority role",
    pronunciation: "BAH-bah",
    example: "Baba ndiye musoro wemhuri.",
    exampleTranslation: "Father is the head of the family.",
  },
  {
    shona: "Mai",
    english: "Mother's nurturing and disciplinary role",
    pronunciation: "MAH-ee",
    example: "Mai ndiye anorinda vana.",
    exampleTranslation: "Mother is the one who watches over the children.",
  },
  {
    shona: "Mbuya",
    english: "Grandmother's teaching role",
    pronunciation: "MBOO-yah",
    example: "Mbuya vanotiudza ngano dzedu.",
    exampleTranslation: "Grandmother tells us our traditional stories.",
  },
  {
    shona: "Sekuru",
    english: "Grandfather's advisory role",
    pronunciation: "seh-KOO-roo",
    example: "Sekuru vanopa mazano emhuri.",
    exampleTranslation: "Grandfather gives the family guidance.",
  },
];

const culturalNotes = [
  {
    title: "Boys and Girls — Different But Complementary",
    body: "Boys and girls are raised with different but complementary role expectations in Shona culture. Boys are oriented toward fields, cattle, building, and — ultimately — providing for and protecting a household. Girls are oriented toward home management, cooking, and child-rearing. Both sets of skills are considered essential and neither is considered inferior to the other. A boy who cannot work and a girl who cannot cook are both seen as poorly raised — regardless of gender.",
  },
  {
    title: "The First Son's Special Burden",
    body: "The mwanakomana mukuru (first/eldest son) carries particular responsibility in Shona family life. He is the one who will inherit the family name, manage the homestead when the father passes, and ensure the continuity of the lineage. This means he is often given more education, more responsibility, and more scrutiny than younger siblings. The weight of huwo (family continuation) rests most heavily on his shoulders.",
  },
  {
    title: "Daughters Never Fully Leave",
    body: "In Shona culture, daughters continue to care for their birth family even after marriage. A married daughter will return to help at her parents' funeral, contribute to her birth family's needs, and maintain emotional ties. This is unlike some cultures where daughters are considered 'transferred' fully to their husband's family upon marriage. The Shona understanding is that a daughter's love and duty to her birth home never ends — it merely becomes shared with her new family.",
  },
  {
    title: "The Grandparents' Home — A Place of Safety",
    body: "Grandparents, particularly mbuya (grandmother), treat grandchildren with noticeably more latitude than parents do. The grandparents' home is considered a place of safety, stories, and indulgence — grandchildren are expected to enjoy a warmer and less strict relationship there. This is by cultural design: grandparents are the memory-keepers and story-tellers, not the primary disciplinarians. Their authority comes through love and wisdom, not correction.",
  },
];

export default function FamilyRolesPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Family Roles
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mabasa eMhuri
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Every Shona child grows into a role. Not a cage — a position in a
            network of care and responsibility. The muzukuru holds ritual duties.
            The muroora serves and is served. The first son inherits a weight.
            The daughter carries love across households. Understanding these
            roles gives you the vocabulary — and the framework — to understand
            how Shona families actually function.
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

        {/* Role Snapshot */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Role Snapshot
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { role: "Baba", desc: "Authority, provision, and family leadership" },
              { role: "Mai", desc: "Nurturing, discipline, and household management" },
              { role: "Mbuya", desc: "Teaching, storytelling, and warm indulgence" },
              { role: "Sekuru", desc: "Wisdom, guidance, and ancestral knowledge" },
              { role: "Muroora", desc: "Service, integration, and learning from in-laws" },
              { role: "Muzukuru", desc: "Ritual duties and the joy of the grandchild bond" },
            ].map((item) => (
              <div
                key={item.role}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] text-lg">
                  {item.role}
                </p>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
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

        {/* Challenges CTA */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
            Ready to test your knowledge?
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Practice all three parenting modules with 20 graded challenges.
          </p>
          <Link
            href="/courses/parenting/challenges"
            className="inline-block rounded-xl px-5 py-3 text-sm font-semibold theme-button-accent hover:brightness-95 transition-all shadow"
          >
            Start Parenting Challenges →
          </Link>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/parenting/respect-for-elders"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Respect for Elders
          </Link>
          <Link
            href="/courses/parenting/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Parenting Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
