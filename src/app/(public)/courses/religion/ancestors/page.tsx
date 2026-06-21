import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadzimu — Ancestors in Shona | Duramazwi",
  description:
    "Learn about the Shona ancestor spirits — how they are honoured, the kurova guva ceremony, offerings, and what happens when they are neglected.",
};

const vocabulary = [
  {
    shona: "Vadzimu",
    english: "Ancestors (plural)",
    pronunciation: "vah-DZEE-moo",
    note: "The family's ancestral spirits — not dead, but transformed and still present",
  },
  {
    shona: "Mudzimu",
    english: "One ancestor spirit",
    pronunciation: "moo-DZEE-moo",
    note: "Singular — the spirit of one specific ancestor",
  },
  {
    shona: "Kupira midzimu",
    english: "To honour or appease ancestors",
    pronunciation: "koo-PEE-rah mee-DZEE-moo",
    note: "The act of making offerings and prayers to the ancestral spirits",
  },
  {
    shona: "Doro rechivanhu",
    english: "Traditional beer for ancestors",
    pronunciation: "DOH-roh reh-chee-VAH-nhoo",
    note: "Sorghum or millet beer brewed specifically for ancestral ceremonies",
  },
  {
    shona: "Kurova guva",
    english: "Memorial ceremony — welcoming back the ancestor",
    pronunciation: "koo-ROH-vah GOO-vah",
    note: "Held one year after death — the ceremony that formally brings the spirit home",
  },
  {
    shona: "Kurira",
    english: "To cry out — what neglected ancestors may do",
    pronunciation: "koo-REE-rah",
    note: "When ancestors are ignored, they 'cry out' through illness or misfortune",
  },
  {
    shona: "Kurangarira",
    english: "To remember — the act of honouring",
    pronunciation: "koo-rahn-gah-REE-rah",
    note: "Remembering the ancestors actively through ceremony and offering",
  },
  {
    shona: "Musha wevadzimu",
    english: "The home of the ancestors",
    pronunciation: "MOO-shah weh-vah-DZEE-moo",
    note: "The spiritual realm where ancestors dwell — connected to the family homestead",
  },
  {
    shona: "Chingwa",
    english: "Food offering to ancestors",
    pronunciation: "CHING-wah",
    note: "Bread or grain left as an offering — the ancestors share in the family's food",
  },
  {
    shona: "Zvibereko",
    english: "Offerings to spirits",
    pronunciation: "zvee-beh-REH-koh",
    note: "Can include grain, beer, or animals — given to maintain the bond with ancestors",
  },
];

const culturalNotes = [
  {
    title: "The Vadzimu Are Not Dead",
    body:
      "In Shona understanding, the vadzimu are not gone — they have entered a different state of being. They remain members of the family with ongoing roles. They observe the living, protect them from danger, and guide family decisions. A family that neglects its ancestors is spiritually exposed. The bond between living and dead is active, not ceremonial.",
  },
  {
    title: "Kurova Guva — Bringing the Spirit Home",
    body:
      "When a person dies, their spirit is not yet settled in the family. About a year after death, the family holds kurova guva — literally 'to strike the grave' — a ceremony that formally welcomes the spirit of the deceased back into the home as a mudzimu. Traditional beer is brewed, the family gathers, and elders speak to the spirit directly. Without this ceremony, the spirit may wander and cause harm.",
  },
  {
    title: "How Ancestors Communicate",
    body:
      "Dreams are the primary way the vadzimu reach the living. A dream of a deceased relative is not dismissed as coincidence — it is taken seriously as a message. The content matters: a dream of an ancestor looking well may be reassurance; a dream of an ancestor appearing thin or distressed signals a need for attention. A n'anga or svikiro may be consulted to interpret the message and advise on what offering or ceremony is needed.",
  },
  {
    title: "The Senior Woman's Role",
    body:
      "While men often lead formal ceremonies, the senior woman of the household — typically the eldest wife — is understood to have the closest daily relationship with the vadzimu. She is the first to notice when something is spiritually wrong in the home: unexplained illness, persistent bad luck, quarrels that won't resolve. She speaks to the ancestors quietly, pours a little beer by the threshold, and monitors the household's spiritual temperature.",
  },
  {
    title: "The Cost of Neglect",
    body:
      "In traditional belief, failing to honour the vadzimu has consequences: illness, crop failure, marital breakdown, death of livestock. This is not punishment in the Western sense — it is more like the natural effect of cutting off a living relationship. When problems accumulate, the question a family asks is not only 'what went wrong medically?' but 'have we been neglecting our ancestors?' Both questions matter.",
  },
];

export default function AncestorsPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Ancestors
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Vadzimu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The vadzimu are not a metaphor. In Shona belief, they are the family — transformed
            by death into a more powerful form, but still present, still watching, still
            expecting to be remembered. To know the language of the ancestors is to understand
            the spiritual backbone of Shona life.
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
            href="/courses/religion/traditional-beliefs"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Traditional Beliefs
          </Link>
          <Link
            href="/courses/religion/christianity"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Christianity in Shona Society →
          </Link>
        </div>
      </div>
    </div>
  );
}
