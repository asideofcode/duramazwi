import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Language in Shona Culture | Duramazwi",
  description:
    "Learn how Shona people use body language to show respect — clapping, bowing, receiving with both hands, and why pointing a finger is rude.",
};

const vocabulary = [
  {
    shona: "Kuomba",
    english: "To clap in greeting — both hands",
    pronunciation: "koo-OHM-bah",
    example: "Tinoomba kana tikamukira vakuru.",
    exampleTranslation: "We clap when we greet elders.",
  },
  {
    shona: "Kukotama",
    english: "To bow / bend the knee",
    pronunciation: "koo-koh-TAH-mah",
    example: "Muroora anokotama pakutambira chipo.",
    exampleTranslation: "The daughter-in-law bows when receiving a gift.",
  },
  {
    shona: "Kutambira",
    english: "To receive respectfully — with both hands",
    pronunciation: "koo-tahm-BEE-rah",
    example: "Kutambira nemaoko maviri ndiwo mwero.",
    exampleTranslation: "Receiving with two hands is the proper way.",
  },
  {
    shona: "Kutipa",
    english: "To give respectfully — with both hands",
    pronunciation: "koo-TEE-pah",
    example: "Ndinopa baba nemaoko maviri.",
    exampleTranslation: "I give to father with both hands.",
  },
  {
    shona: "Kutarisira pasi",
    english: "To look down — respectful, not a challenge",
    pronunciation: "koo-tah-ree-SEE-rah PAH-see",
    example: "Kutarisira pasi kunoratidza ukudzwa.",
    exampleTranslation: "Looking down shows reverence.",
  },
  {
    shona: "Kunyemwerera",
    english: "To smile genuinely",
    pronunciation: "koo-nyehm-weh-REH-rah",
    example: "Kunyemwerera kwake kwakaratidza rufaro.",
    exampleTranslation: "His genuine smile showed joy.",
  },
  {
    shona: "Kumira",
    english: "To stand straight — when speaking to an elder",
    pronunciation: "koo-MEE-rah",
    example: "Kumira zvakanaka pane kana unotaura navakuru.",
    exampleTranslation: "Stand straight when you speak with elders.",
  },
  {
    shona: "Muviri",
    english: "Body",
    pronunciation: "moo-VEE-ree",
    example: "Muviri wako unoratidza chinhu chaunofunga.",
    exampleTranslation: "Your body shows what you are thinking.",
  },
  {
    shona: "Maoko",
    english: "Hands — critical for respectful interaction",
    pronunciation: "mah-OH-koh",
    example: "Maoko maviri ndiyo nzira yekutambira.",
    exampleTranslation: "Two hands is the way to receive.",
  },
];

const culturalNotes = [
  {
    title: "Receiving with both hands",
    body: "When someone gives you anything — food, money, a document, a gift — you receive it with both hands, or with the right hand supported by the left at the wrist or forearm. This applies across all contexts: at a ceremony, in an office, at the family dinner table. Reaching out with one hand and snatching is considered rude regardless of your age or theirs.",
  },
  {
    title: "Pointing with a finger is rude",
    body: "In Shona culture, pointing at someone with a single extended finger is considered disrespectful and aggressive. To indicate a person or direction, you use the whole open hand, or you gesture with your eyes and a subtle nod of the head. This is especially important in the presence of elders and in formal settings.",
  },
  {
    title: "Eye contact with elders is complex",
    body: "In Western cultures, direct eye contact signals engagement and honesty. In Shona culture, sustained direct eye contact with an elder can be read as challenging their authority — a sign of defiance rather than confidence. Looking slightly downward or to the side while listening to an elder is not evasiveness; it is deference. Children especially learn to drop their gaze when being corrected or when addressing seniors.",
  },
  {
    title: "Clapping differs by gender in formal settings",
    body: "While both men and women clap in greeting (kuomba), the style differs in formal and ceremonial settings. Women clap with the hands cupped, producing a softer, hollow sound. Men clap with flat palms. Children clap when greeting adults as a sign of submission and welcome. At ceremonies, clapping accompanies receiving gifts, welcoming elders, and acknowledging speakers.",
  },
];

const bodyGuide = [
  {
    action: "Receiving an item",
    correct: "Both hands extended, slight bow",
    avoid: "One-handed grab, no eye acknowledgement",
  },
  {
    action: "Greeting an elder",
    correct: "Clap (kuomba), slight bow, say their title first",
    avoid: "Casual wave, first name, no clap",
  },
  {
    action: "Speaking to an elder",
    correct: "Stand straight (kumira), soft tone, wait your turn",
    avoid: "Slouching, interrupting, arms crossed",
  },
  {
    action: "Pointing at something",
    correct: "Open hand, or indicate with eyes and a nod",
    avoid: "Single extended finger pointing at a person",
  },
  {
    action: "Eye contact",
    correct: "Brief, respectful — look down or aside when listening",
    avoid: "Prolonged direct stare at an elder",
  },
];

export default function BodyLanguagePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/respect"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Respect Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Body Language
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Muviri Unoreva
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, much of the communication about respect happens
            before a word is spoken. The way you hold your hands when receiving,
            the direction you look when listening, and whether you stand or sit
            all communicate your understanding of the relationship. This module
            covers the physical vocabulary of Shona respect.
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

        {/* Body Language Quick Guide */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Quick Reference Guide
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Situation</th>
                <th className="px-4 py-3 font-semibold">Respectful</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Avoid</th>
              </tr>
            </thead>
            <tbody>
              {bodyGuide.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {row.action}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {row.correct}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell">
                    {row.avoid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/respect/respecting-elders"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Respecting Elders
          </Link>
          <Link
            href="/courses/respect/visiting-homes"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Visiting Homes →
          </Link>
        </div>
      </div>
    </div>
  );
}
