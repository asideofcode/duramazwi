import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Parts in Shona | Duramazwi",
  description:
    "Learn Shona words for body parts — head, hands, heart, and more — with cultural context on how Shona uses body part vocabulary in idiom and emotional expression.",
};

const vocabulary = [
  {
    english: "Head",
    shona: "Musoro",
    pronunciation: "moo-SOH-roh",
  },
  {
    english: "Hair",
    shona: "Mvere",
    pronunciation: "MVEH-reh",
  },
  {
    english: "Eye",
    shona: "Ziso (pl: Meso)",
    pronunciation: "ZEE-soh / MEH-soh",
  },
  {
    english: "Ear",
    shona: "Nzeve",
    pronunciation: "NZEH-veh",
  },
  {
    english: "Nose",
    shona: "Mhino",
    pronunciation: "MHEE-noh",
  },
  {
    english: "Mouth",
    shona: "Muromo",
    pronunciation: "moo-ROH-moh",
  },
  {
    english: "Tooth",
    shona: "Zino (pl: Meno)",
    pronunciation: "ZEE-noh / MEH-noh",
  },
  {
    english: "Tongue",
    shona: "Rurimi",
    pronunciation: "roo-REE-mee",
  },
  {
    english: "Neck",
    shona: "Mutsipa",
    pronunciation: "moo-TSEE-pah",
  },
  {
    english: "Shoulder",
    shona: "Bendekete",
    pronunciation: "ben-deh-KEH-teh",
  },
  {
    english: "Arm / Hand",
    shona: "Ruoko",
    pronunciation: "ROO-oh-koh",
  },
  {
    english: "Finger",
    shona: "Zvigunwe",
    pronunciation: "zvee-GOON-weh",
  },
  {
    english: "Chest",
    shona: "Chipfuva",
    pronunciation: "chip-FOO-vah",
  },
  {
    english: "Stomach",
    shona: "Dumbu",
    pronunciation: "DOOM-boo",
  },
  {
    english: "Back",
    shona: "Musana",
    pronunciation: "moo-SAH-nah",
  },
  {
    english: "Leg",
    shona: "Gumbo",
    pronunciation: "GOOM-boh",
  },
  {
    english: "Knee",
    shona: "Bondo",
    pronunciation: "BON-doh",
  },
  {
    english: "Foot",
    shona: "Tsoka",
    pronunciation: "TSOH-kah",
  },
  {
    english: "Toe",
    shona: "Zvigunwe zvetsoka",
    pronunciation: "zvee-GOON-weh zveh-TSOH-kah",
  },
  {
    english: "Skin",
    shona: "Ganda",
    pronunciation: "GAHN-dah",
  },
  {
    english: "Blood",
    shona: "Ropa",
    pronunciation: "ROH-pah",
  },
  {
    english: "Bone",
    shona: "Gonzo",
    pronunciation: "GON-zoh",
  },
  {
    english: "Heart",
    shona: "Mwoyo",
    pronunciation: "MWOH-yoh",
  },
];

const culturalNotes = [
  {
    title: "Rich Vocabulary and Metaphorical Use",
    body: "Shona body part vocabulary is not just anatomical — many parts have both functional and metaphorical roles in the language. 'Musoro' (head) also appears in expressions about leadership and authority. 'Rurimi' (tongue) features in proverbs about speech and honesty. The body is a metaphor for how life is lived.",
  },
  {
    title: "Mwoyo — Heart as the Seat of Character",
    body: "'Mwoyo' (heart) is used extensively in Shona emotional, spiritual, and moral language. It is far more than the physical organ. 'Mwoyo wakanaka' (a good heart) means a person of good character. 'Mwoyo unorwadza' (the heart hurts) describes emotional pain. In Shona, the heart is the centre of who you are.",
  },
  {
    title: "Ruoko — The Hand in Shona Culture",
    body: "'Ruoko' (hand/arm) carries deep cultural weight. It is the same word for both arm and hand — context distinguishes meaning. The hand is central to Shona greeting (handshaking), generosity ('ruoko refu' — open/generous hand), and work ethic. Hands also appear in blessings: 'Ruoko rwako ruripo' (may your hand remain / be blessed).",
  },
];

const bodyIdioms = [
  {
    shona: "Mwoyo wakanaka",
    meaning: "A good heart — a person of good character",
  },
  {
    shona: "Rurimi rwakaipa",
    meaning: "A bad tongue — someone who speaks harmfully",
  },
  {
    shona: "Musoro wemhuri",
    meaning: "Head of the family — the leader",
  },
  {
    shona: "Ruoko refu",
    meaning: "A long/open hand — generosity",
  },
  {
    shona: "Meso akanaka",
    meaning: "Good eyes — someone with perception and wisdom",
  },
  {
    shona: "Nzeve dzinopindura",
    meaning: "Ears that respond — someone who listens",
  },
];

export default function BodyPartsPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Body Parts
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nhengo dzemuviri
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Learning body part vocabulary in Shona opens more than just health
            conversations. Many Shona idioms, proverbs, and expressions of
            emotion use body parts as their foundation. The heart, the hand, the
            tongue — each carries cultural weight far beyond the physical.
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
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Pronunciation
                </th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.english}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.english}
                  </td>
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell font-mono text-xs">
                    {word.pronunciation}
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

        {/* Body Idioms */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Body Part Idioms
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-5 leading-relaxed">
            Shona body part words appear in rich idiomatic expressions. Here are
            some to learn alongside the vocabulary:
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {bodyIdioms.map((idiom) => (
              <div
                key={idiom.shona}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-1">
                  {idiom.shona}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {idiom.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/health"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/health/illnesses"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Illnesses &amp; Symptoms →
          </Link>
        </div>
      </div>
    </div>
  );
}
