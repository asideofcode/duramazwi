import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Beliefs in Shona | Duramazwi",
  description:
    "Learn Shona words for Mwari, the vadzimu ancestors, ngozi, shave, and the n'anga — the language of traditional Shona spiritual life.",
};

const vocabulary = [
  {
    shona: "Mwari",
    english: "God — the supreme being",
    pronunciation: "MWAH-ree",
    note: "Transcendent creator — not the same concept as the Judeo-Christian God",
  },
  {
    shona: "Musikavanhu",
    english: "Creator of people — epithet for Mwari",
    pronunciation: "moo-see-kah-VAH-nhoo",
    note: "Literally 'one who created people' — a praise name for the supreme being",
  },
  {
    shona: "Vadzimu",
    english: "Ancestral spirits (plural)",
    pronunciation: "vah-DZEE-moo",
    note: "The collective ancestors of a family — active participants in family life",
  },
  {
    shona: "Mudzimu",
    english: "One ancestral spirit",
    pronunciation: "moo-DZEE-moo",
    note: "A single ancestor spirit — singular of vadzimu",
  },
  {
    shona: "Ngozi",
    english: "Avenging spirit",
    pronunciation: "NGOH-zee",
    note: "Spirit of someone who died wrongfully — brings misfortune until appeased",
  },
  {
    shona: "Shave",
    english: "Wandering or foreign spirit",
    pronunciation: "SHAH-veh",
    note: "A spirit not of one's own lineage — can bring skills or cause affliction",
  },
  {
    shona: "N'anga",
    english: "Traditional healer / spirit medium",
    pronunciation: "NGAH-ngah",
    note: "Expert in spiritual and medicinal matters — consulted for guidance and healing",
  },
  {
    shona: "Svikiro",
    english: "Spirit medium",
    pronunciation: "svee-KEE-roh",
    note: "A person through whom an ancestor spirit speaks directly",
  },
  {
    shona: "Mhepo",
    english: "Wind — also associated with spirit movement",
    pronunciation: "MHEH-poh",
    note: "Wind is understood as the movement or presence of spirits in the environment",
  },
  {
    shona: "Zvipfukuto",
    english: "Offerings to spirits",
    pronunciation: "zvee-pfoo-KOO-toh",
    note: "Items offered to the vadzimu — food, beer, grain — to honour and appease them",
  },
];

const culturalNotes = [
  {
    title: "Mwari Is Not the God of the Bible",
    body:
      "Mwari is the Shona supreme being — but the concept is not identical to the Judeo-Christian God. Mwari is the ultimate creator and source of all things, but is considered transcendent and remote from everyday human affairs. Mwari does not intervene directly; instead, communication flows through the vadzimu (ancestral spirits) who act as intermediaries. The title Musikavanhu — 'creator of people' — is one of many praise names used in prayer and ceremony.",
  },
  {
    title: "Vadzimu — Active Family Members",
    body:
      "The vadzimu are not merely remembered dead — they are transformed family members with ongoing roles in the living family. They protect, guide, warn, and when neglected or offended, cause misfortune. Dreams are a primary channel of communication. The senior woman of the household is often the first to notice when the vadzimu are restless, and she takes the lead in addressing them with offerings and ceremony.",
  },
  {
    title: "Ngozi — The Avenging Spirit",
    body:
      "Ngozi is among the most feared spiritual forces in Shona belief. It is the spirit of a person who died wrongfully — through murder, mistreatment, or injustice — that returns to afflict the family responsible. A ngozi will not rest until proper restitution has been made, which may include compensating the victim's family with cattle or another life. Ngozi cases are handled by n'anga and elders, never ignored.",
  },
  {
    title: "Consulting a N'anga Is Not Superstition",
    body:
      "In Western framing, visiting a traditional healer might seem superstitious. In Shona culture, it is seeking expert counsel. The n'anga is a specialist — in herbal medicine, in reading spiritual patterns, in mediating between the living and the ancestral world. A svikiro (spirit medium) serves a specific and more intense function: during a session, an ancestral spirit speaks directly through their body. Both roles are treated with serious respect.",
  },
];

export default function TraditionalBeliefsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/religion"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Religion Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Traditional Beliefs
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvitendero zvechivanhu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona traditional belief is not a relic — it is a living framework for understanding
            the world. Mwari created all things and remains supreme, but it is the vadzimu who
            walk alongside the living. Spirits have names, personalities, and needs. The n'anga
            speaks their language. This module introduces the vocabulary of that world.
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
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Note</th>
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
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell italic">
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
        <div className="grid gap-6 mb-12">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
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
            href="/courses/religion"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/religion/ancestors"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Ancestors →
          </Link>
        </div>
      </div>
    </div>
  );
}
