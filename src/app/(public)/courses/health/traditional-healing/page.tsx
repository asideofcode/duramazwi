import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Healing in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary for traditional healing — n'anga, muti, svikiro, and ancestral medicine — with cultural context on how traditional and modern healing work alongside each other.",
};

const vocabulary = [
  {
    shona: "N'anga",
    english: "Traditional healer",
    pronunciation: "NGAH-ngah",
    example: "N'anga akamurapira nekumfumura.",
    exampleTranslation: "The healer treated him by divining the cause.",
  },
  {
    shona: "Murapi",
    english: "Healer (general term)",
    pronunciation: "moo-RAH-pee",
    example: "Murapi uyu ane ruzivo rwakaita kunge gungwa.",
    exampleTranslation: "This healer has knowledge deep as an ocean.",
  },
  {
    shona: "Mushonga wechivanhu",
    english: "Traditional medicine",
    pronunciation: "moo-SHON-gah weh-chee-VAH-nhoo",
    example: "Mushonga wechivanhu wakamuporesa.",
    exampleTranslation: "The traditional medicine healed him.",
  },
  {
    shona: "Svikiro",
    english: "Spirit medium — channels ancestral spirits",
    pronunciation: "svee-KEE-roh",
    example: "Svikiro akataura nezwi remudzimu.",
    exampleTranslation: "The spirit medium spoke with the voice of the ancestor.",
  },
  {
    shona: "Gata",
    english: "Medicine horn",
    pronunciation: "GAH-tah",
    example: "Akaisa mushonga mugata.",
    exampleTranslation: "He placed the medicine in the horn.",
  },
  {
    shona: "Muti",
    english: "Medicine (from trees/plants)",
    pronunciation: "MOO-tee",
    example: "Muti uyu unobva musango.",
    exampleTranslation: "This medicine comes from the forest.",
  },
  {
    shona: "Kurapwa",
    english: "To be healed",
    pronunciation: "koo-RAHP-wah",
    example: "Akarapwa mushure mesvondo rimwe.",
    exampleTranslation: "He was healed after one week.",
  },
  {
    shona: "Kufumura",
    english: "To divine — find the cause of illness spiritually",
    pronunciation: "koo-foo-MOO-rah",
    example: "N'anga aifumura usiku hwose.",
    exampleTranslation: "The healer divined the whole night.",
  },
  {
    shona: "Chirwere chemidzimu",
    english: "Illness caused by ancestral spirits",
    pronunciation: "chee-RWEH-reh cheh-mee-DZEE-moo",
    example: "Vachiremba vakati chirwere chemidzimu.",
    exampleTranslation: "The elders said it was an illness caused by the ancestors.",
  },
  {
    shona: "Kupira midzimu",
    english: "To appease ancestors — part of healing",
    pronunciation: "koo-PEE-rah mee-DZEE-moo",
    example: "Vakafanira kupira midzimu kuti aporore.",
    exampleTranslation: "They needed to appease the ancestors so he could recover.",
  },
];

const culturalNotes = [
  {
    title: "Physical and Spiritual Health Are Inseparable",
    body: "In Shona traditional understanding, illness is never purely physical. Every illness has a physical dimension and potentially a spiritual one. A persistent illness that does not respond to physical treatment may be diagnosed as having a spiritual cause — arising from an ancestor's complaint, a broken taboo, or spiritual imbalance. A n'anga addresses both.",
  },
  {
    title: "How a N'anga Diagnoses",
    body: "A n'anga does not diagnose through symptoms alone. Through kufumura (divination), the n'anga consults ancestral spirits — either directly or through a svikiro (spirit medium) — to find the root cause of illness. This is considered a skilled and legitimate practice, respected alongside physical medicine. The community trusts the n'anga's diagnosis.",
  },
  {
    title: "Plants Are the Primary Medicines",
    body: "The word 'muti' (medicine) literally comes from 'muti' (tree) — because traditional medicine is derived from trees and plants. N'angas hold detailed, practised knowledge of which plants heal which conditions, how to prepare them, and in what doses. This knowledge is passed down through initiation and apprenticeship, not through books.",
  },
  {
    title: "Modern Hospitals and N'angas Are Not Enemies",
    body: "Many Zimbabweans use both modern clinics and traditional healers simultaneously or in alternation. This is not considered contradictory. The clinic addresses the physical body; the n'anga addresses the spiritual root. Families often consult a n'anga first, then visit the clinic, or use both concurrently for serious illness.",
  },
  {
    title: "Muti — A Word Across Southern Africa",
    body: "The word 'muti' (medicine) has spread across Southern Africa and is now used in Zulu, Sotho, Tswana, and other Bantu languages. In urban South Africa and Zimbabwe, 'muti' is widely understood to mean traditional medicine or herbal remedy. Its roots lie in the Shona and Nguni botanical healing traditions.",
  },
];

const keyRoles = [
  {
    role: "N'anga",
    description: "Traditional healer — diagnoses and treats using spiritual knowledge and plants",
  },
  {
    role: "Svikiro",
    description: "Spirit medium — becomes possessed by ancestral spirits to deliver diagnoses",
  },
  {
    role: "Murapi",
    description: "General healer — a broader term that can include herbalists and community healers",
  },
];

export default function TraditionalHealingPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/health"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Health Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Traditional Healing
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kurapwa kweChivanhu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Traditional healing is not superstition in Shona culture — it is a
            respected, sophisticated system of knowledge. The n&apos;anga is a
            specialist who combines deep knowledge of medicinal plants with
            spiritual discernment. Understanding this system is essential to
            understanding Shona culture and health.
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

        {/* Key roles card */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Key Healer Roles
          </h3>
          <div className="grid gap-4">
            {keyRoles.map((item) => (
              <div
                key={item.role}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                  {item.role}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/health/clinic"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Visiting a Clinic
          </Link>
          <Link
            href="/courses/health/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Practice: Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
