import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Figurative Language in Shona | Duramazwi",
  description:
    "How Shona uses body parts, animals, and nature as metaphor — the lion means courage, the elephant means wisdom, and the heart holds emotion.",
};

const bodyMetaphors = [
  {
    shona: "Mwoyo",
    english: "Heart",
    abstractMeaning: "Emotion, courage, desire, inner state",
    examples: [
      { phrase: "Mwoyo uri pasi", meaning: "Heart is down — feeling sad/discouraged" },
      { phrase: "Mwoyo weshumba", meaning: "Heart of a lion — brave and courageous" },
      { phrase: "Mwoyo wakanaka", meaning: "Good heart — kind-hearted, generous" },
    ],
  },
  {
    shona: "Ruoko",
    english: "Hand",
    abstractMeaning: "Generosity, ability, action",
    examples: [
      { phrase: "Ruoko rwakatendeka", meaning: "Trustworthy hand — reliable and giving" },
      { phrase: "Ruoko rukuru", meaning: "Big hand — generous person" },
      { phrase: "Kutsigira ruoko", meaning: "To support with the hand — to assist" },
    ],
  },
  {
    shona: "Muromo",
    english: "Mouth",
    abstractMeaning: "Speech, reputation, communication",
    examples: [
      { phrase: "Muromo ndiwo musoro", meaning: "The mouth is the head — speech defines you" },
      { phrase: "Muromo hauzi nhamo", meaning: "The mouth brings no poverty — speak up" },
      { phrase: "Muromo wakanaka", meaning: "Good mouth — speaks well, diplomatic" },
    ],
  },
  {
    shona: "Pfungwa",
    english: "Thoughts / Mind",
    abstractMeaning: "Intelligence, intention, mental state",
    examples: [
      { phrase: "Kutsvaga pfungwa", meaning: "Looking for thoughts — taking time to think" },
      { phrase: "Pfungwa dzakaipa", meaning: "Bad thoughts — negative intentions" },
      { phrase: "Pfungwa dzakajeka", meaning: "Clear thoughts — clear-minded, focused" },
    ],
  },
];

const animalMetaphors = [
  {
    animal: "Shumba",
    english: "Lion",
    qualities: "Courage, royalty, strength",
    symbolic: "The most prestigious animal in Shona culture. To have the shumba's qualities is the highest praise.",
    example: "Mwoyo weshumba — heart of a lion (brave)",
    positive: true,
  },
  {
    animal: "Nzou",
    english: "Elephant",
    qualities: "Wisdom, memory, power",
    symbolic: "The elephant never forgets — in Shona symbolism it carries accumulated wisdom. One of the most respected animals.",
    example: "Nzou hairevi tumwe twayo — an elephant doesn't feel its own tusk",
    positive: true,
  },
  {
    animal: "Gava",
    english: "Hyena",
    qualities: "Cowardice, greed, opportunism",
    symbolic: "The hyena eats what others have killed. In Shona thought it represents taking without contributing — cowardice and greed.",
    example: "Kuita gava — to act like a hyena (to take others' credit or effort)",
    positive: false,
  },
  {
    animal: "Huku",
    english: "Hen / Chicken",
    qualities: "Nurturing, domestic (positive) / Cowardice (negative)",
    symbolic: "Dual meaning — the hen is domestic and nurturing in one context, cowardly in another. 'Kuita huku' means to be cowardly.",
    example: "Kuita huku — to act like a chicken (cowardly)",
    positive: false,
  },
];

const natureMetaphors = [
  {
    element: "Mvura",
    english: "Water",
    meaning: "Life, flow, adaptability, change",
    example: "Kuita mvura — to be water (to be adaptable, to go with the flow)",
    note: "Water shapes itself to any container and finds a way through any obstacle — the ideal model for resilience and adaptability.",
  },
  {
    element: "Moto",
    english: "Fire",
    meaning: "Passion, danger, intensity, destruction",
    example: "Moto haupedzi uswa — fire doesn't finish grass (even great force has limits)",
    note: "Fire is powerful but finite. In Shona imagery it represents both passionate intensity and the warning that burning too hot is unsustainable.",
  },
  {
    element: "Denga",
    english: "Sky",
    meaning: "Aspiration, the divine, limitlessness",
    example: "Mafaro ake asvika kudenga — her joy reached the sky (overwhelming joy)",
    note: "The sky in Shona thought represents both the heavens (midzimu — ancestral spirits) and the furthest limit of aspiration.",
  },
];

const culturalNotes = [
  "Animals in Shona culture carry consistent symbolic weight that maps onto human behaviour. These meanings are stable across generations.",
  "The lion and elephant are the most respected animals symbolically — they appear in totems (mutupo), proverbs, and praise poetry.",
  "Shona poetry (nhetembo) relies heavily on these figurative patterns — understanding them unlocks the deeper layers of Shona literary culture.",
];

export default function FigurativeLanguagePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/idioms"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Idioms Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Figurative Language
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mutauro Wemifananidzo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona uses three primary systems of figurative language: the body,
            animals, and nature. Each system maps concrete images onto abstract
            qualities — courage, generosity, adaptability, greed. Mastering
            these patterns gives you access not just to idioms but to the entire
            symbolic world that Shona speakers share.
          </p>
        </div>

        {/* Body Metaphors */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Body Metaphors
        </h2>
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {bodyMetaphors.map((bm) => (
            <div
              key={bm.shona}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <p className="font-bold text-[var(--color-primary)] text-lg">
                  {bm.shona}
                </p>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  {bm.english}
                </span>
              </div>
              <p className="text-xs text-[var(--color-muted)] italic mb-3">
                {bm.abstractMeaning}
              </p>
              <ul className="space-y-1.5">
                {bm.examples.map((ex) => (
                  <li key={ex.phrase} className="text-sm">
                    <span className="font-medium text-[var(--color-text)]">
                      {ex.phrase}
                    </span>{" "}
                    <span className="text-[var(--color-muted)]">
                      — {ex.meaning}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Animal Metaphors */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Animal Metaphors
        </h2>
        <div className="space-y-4 mb-12">
          {animalMetaphors.map((am) => (
            <div
              key={am.animal}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold text-[var(--color-primary)] text-lg">
                    {am.animal}
                    <span className="ml-2 font-normal text-sm text-[var(--color-muted)]">
                      ({am.english})
                    </span>
                  </p>
                  <p className="text-xs text-[var(--color-muted)] italic">
                    {am.qualities}
                  </p>
                </div>
                <span
                  className={[
                    "text-xs font-semibold px-2 py-1 rounded-full shrink-0",
                    am.positive
                      ? "bg-[var(--color-surface)] text-[var(--color-primary)]"
                      : "bg-[var(--color-surface)] text-[var(--color-muted)]",
                  ].join(" ")}
                >
                  {am.positive ? "Positive" : "Negative"}
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                {am.symbolic}
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
                <p className="text-sm font-medium text-[var(--color-primary)] italic">
                  {am.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nature Metaphors */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Nature Metaphors
        </h2>
        <div className="space-y-4 mb-12">
          {natureMetaphors.map((nm) => (
            <div
              key={nm.element}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-[var(--color-primary)] text-lg">
                  {nm.element}
                </p>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  {nm.english}
                </span>
              </div>
              <p className="text-xs text-[var(--color-muted)] italic mb-2">
                {nm.meaning}
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                {nm.note}
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
                <p className="text-sm font-medium text-[var(--color-primary)] italic">
                  {nm.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <ul className="space-y-3">
            {culturalNotes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold mt-0.5 shrink-0">
                  ·
                </span>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/idioms/common-sayings"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Common Sayings
          </Link>
          <Link
            href="/courses/idioms/modern-expressions"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Modern Expressions →
          </Link>
        </div>
      </div>
    </div>
  );
}
