import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Religious Practice in Shona | Duramazwi",
  description:
    "Learn the vocabulary of Apostolic churches, prophetic healing, fasting, and how traditional and Christian beliefs interweave in Shona practice today.",
};

const vocabulary = [
  {
    shona: "Chechi yeapostora",
    english: "Apostolic church",
    pronunciation: "CHEH-chee yeh-ah-poh-STOH-rah",
    note: "The Apostolic tradition — one of the dominant Christian forms in Zimbabwe",
  },
  {
    shona: "Muapostora",
    english: "Apostolic church member",
    pronunciation: "moo-ah-poh-STOH-rah",
    note: "A member of an Apostolic congregation — often identifiable by white garments",
  },
  {
    shona: "Baba mupristi",
    english: "Father priest — Catholic priest",
    pronunciation: "BAH-bah moo-PREE-stee",
    note: "The Catholic form of address — combining 'father' with the borrowed word 'priest'",
  },
  {
    shona: "Muvhuri / Muparidzi",
    english: "Pastor / preacher",
    pronunciation: "moo-VHOO-ree / moo-pah-REE-dzee",
    note: "Muparidzi is the preacher; muvhuri is used in some traditions for the senior pastor",
  },
  {
    shona: "Kuprofita",
    english: "To prophesy",
    pronunciation: "koo-proh-FEE-tah",
    note: "Prophesying — declaring spiritual revelation — is central to Apostolic and Pentecostal practice",
  },
  {
    shona: "Kurapa",
    english: "To heal — central to Apostolic practice",
    pronunciation: "koo-RAH-pah",
    note: "Healing through prayer and spiritual power — physical healing is expected, not hoped for",
  },
  {
    shona: "Kupamba",
    english: "To fast",
    pronunciation: "koo-PAH-mbah",
    note: "Fasting is a common spiritual discipline — extended fasts during times of prayer or crisis",
  },
  {
    shona: "Zvitendero",
    english: "Religious beliefs / practices (plural)",
    pronunciation: "zvee-teh-NDEH-roh",
    note: "The totality of one's religious practices — can refer to any faith tradition",
  },
  {
    shona: "Kunamata",
    english: "To worship",
    pronunciation: "koo-nah-MAH-tah",
    note: "To worship or pray — used across all Christian traditions and traditional practice",
  },
  {
    shona: "Mweya",
    english: "Spirit — in religious context",
    pronunciation: "MWEH-yah",
    note: "Mweya means wind, breath, and spirit — the Holy Spirit is Mweya Mutsvene (holy spirit)",
  },
];

const culturalNotes = [
  {
    title: "ZAOGA and AFM — The Largest Indigenous Churches",
    body:
      "The Zimbabwe Assemblies of God Africa (ZAOGA), founded by Ezekiel Guti in the 1960s, is one of the largest Pentecostal movements in Africa. The Apostolic Faith Mission (AFM) is similarly influential. These are not imported churches — they were shaped by Shona leadership, Shona spiritual culture, and Shona musical traditions. Their theology emphasises the Holy Spirit, healing, and direct encounter with God in ways that resonate with Shona spiritual sensibility.",
  },
  {
    title: "Healing Is Expected, Not Optional",
    body:
      "In Apostolic and Pentecostal churches, physical healing through prayer is not a peripheral hope — it is a central promise. Kurapa (healing) ministries draw enormous crowds. A prophet who accurately identifies ailments and prays for healing gains tremendous authority. This overlaps significantly with the role of the n'anga in traditional culture: both are consulted for healing, both work in the spiritual dimension, and both are expected to produce results.",
  },
  {
    title: "White Garments — Mapfumo Machena",
    body:
      "One of the most visible features of Zimbabwe's Apostolic churches is the white garment (mapfumo machena) worn by members. These pure white robes signal spiritual status, purity, and belonging. In rural areas, groups of white-robed Apostolics gathering at rivers for baptism or prayer are a familiar sight. The garments are practical statements of identity: members are immediately recognisable as part of their congregation.",
  },
  {
    title: "Where the N'anga and the Prophet Overlap",
    body:
      "An honest observer of Shona religious life notices that the traditional n'anga and the Apostolic prophet serve remarkably similar social functions. Both diagnose the spiritual causes of misfortune. Both prescribe remedies — whether herbal preparations or prayer rituals. Both hold authority in their community. Many Shona people consult both without a sense of contradiction. Traditional belief and Christian practice do not compete in many households — they layer.",
  },
];

export default function ModernPracticePage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Modern Religious Practice
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvitendero zvanhasi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Zimbabwe's religious landscape today is dynamic and layered. Apostolic churches
            have reshaped the meaning of Christianity. Prophets draw thousands. Healing prayer
            and traditional medicine occupy overlapping spaces. Understanding modern religious
            practice means holding the traditional and the contemporary in the same frame —
            the way Shona people themselves do.
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
            href="/courses/religion/christianity"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Christianity in Shona Society
          </Link>
          <Link
            href="/courses/religion/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Practice: Religion Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
