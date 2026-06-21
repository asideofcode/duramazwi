import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Context-Appropriate Greetings in Shona | Duramazwi",
  description:
    "Learn how Shona greetings change depending on who you are speaking to — elders, peers, groups, and special welcomes for grandmothers and fathers.",
};

const vocabulary = [
  {
    shona: "Maswera sei?",
    english: "How has your day been? — afternoon, to an elder",
    pronunciation: "mah-SWEH-rah SEH-ee",
    example: "Maswera sei, Ambuya?",
    exampleTranslation: "How has your day been, Grandmother?",
  },
  {
    shona: "Waswera sei?",
    english: "How has your day been? — informal, to a peer",
    pronunciation: "wah-SWEH-rah SEH-ee",
    example: "Waswera sei, shamwari?",
    exampleTranslation: "How has your day been, friend?",
  },
  {
    shona: "Ambuya mauya!",
    english: "Grandmother you have come! — special welcome for an elderly woman",
    pronunciation: "ahm-BOO-yah mah-OO-yah",
    example: "Ambuya mauya! Tigamuchirei Ambuya!",
    exampleTranslation: "Grandmother has come! Let us receive Grandmother!",
  },
  {
    shona: "Baba mauya!",
    english: "Father you have come! — welcoming a father or elder man",
    pronunciation: "BAH-bah mah-OO-yah",
    example: "Baba mauya! Makafamba sei?",
    exampleTranslation: "Father has come! How was your journey?",
  },
  {
    shona: "Kusvika kwako",
    english: "Your arrival — acknowledging someone has arrived",
    pronunciation: "koo-SVEE-kah KWAH-koh",
    example: "Kusvika kwako kwafadza mwoyo wedu.",
    exampleTranslation: "Your arrival has gladdened our hearts.",
  },
  {
    shona: "Kwaziwai",
    english: "Greetings — to a group",
    pronunciation: "kwah-ZEE-wah-ee",
    example: "Kwaziwai, vadiwa vose.",
    exampleTranslation: "Greetings, all beloved ones.",
  },
  {
    shona: "Muroi here?",
    english: "Is the traditional healer in? — context-specific enquiry",
    pronunciation: "moo-ROH-ee HEH-reh",
    example: "Ko, muroi here kuno?",
    exampleTranslation: "Is there a traditional healer here?",
  },
];

const culturalNotes = [
  {
    title: "Different greetings for different relationships",
    body: "Shona has distinct registers for greeting — you cannot use the same phrase for a peer and a father-in-law. The main axis is formality: \"waswera sei\" (informal second person singular) for friends and peers of the same age; \"maswera sei\" (formal/respectful) for elders, in-laws, and those in authority. Getting this wrong is not a minor slip — it signals whether you understand who you are talking to.",
  },
  {
    title: "Greetings are longer and more elaborate for respected people",
    body: "The more respected the person, the more elaborate the greeting exchange. When a grandmother arrives, you do not simply say hello and move on — you announce her arrival, come to meet her, express joy at her coming, ask about her journey, ask after her health and comfort, and seat her before anything else happens. Greeting an elder can take several minutes, and rushing it is rude. The length of a greeting is proportional to the honour you are showing.",
  },
  {
    title: "Shona people read the relationship and adjust",
    body: "Fluent Shona speakers are highly attuned to context — they read the age gap, the relationship type, and the setting and adjust their language accordingly. Learners should know that this is a skill developed over time, but the principle is simple: when in doubt, use the more respectful form. Imi over iwe. Maswera over waswera. A small over-formality is easily forgiven; under-formality with an elder is noticed and remembered.",
  },
];

const greetingMatrix = [
  {
    person: "Close friend (same age)",
    morning: "Mangwanani / Waswera sei?",
    afternoon: "Waswera sei?",
    arrival: "Mauya!",
    note: "Informal throughout",
  },
  {
    person: "Parent or parent's age",
    morning: "Mangwanani (with clap)",
    afternoon: "Maswera sei?",
    arrival: "Mauya! / Baba/Mai mauya!",
    note: "Always use imi",
  },
  {
    person: "Grandparent",
    morning: "Mangwanani (with clap + bow)",
    afternoon: "Maswera sei, Ambuya/Sekuru?",
    arrival: "Ambuya/Sekuru mauya! (elaborate)",
    note: "Full elaborate welcome",
  },
  {
    person: "Group of people",
    morning: "Mangwanani vose",
    afternoon: "Maswera sei vose?",
    arrival: "Kwaziwai!",
    note: "Always plural form",
  },
  {
    person: "Father-in-law or mother-in-law",
    morning: "Mangwanani (with clap)",
    afternoon: "Maswera sei?",
    arrival: "Mauya! (elaborate welcome)",
    note: "Treat as own parent",
  },
];

export default function GreetingsContextPage() {
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
            Module 5
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Context-Appropriate Greetings
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kukwazisana Zvakanaka
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A greeting in Shona is never just "hello." The words you choose, the
            length of the exchange, and the form of the second person pronoun all
            communicate the relationship between you and the other person. This
            module teaches you to read the context and choose correctly.
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

        {/* Greeting Matrix */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Greeting by Relationship
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Person</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Morning</th>
                <th className="px-4 py-3 font-semibold">Afternoon</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">On Arrival</th>
                <th className="px-4 py-3 font-semibold hidden xl:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {greetingMatrix.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {row.person}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)] hidden sm:table-cell">
                    {row.morning}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {row.afternoon}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)] hidden lg:table-cell">
                    {row.arrival}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden xl:table-cell italic text-xs">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/respect/gift-giving"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Gift Giving
          </Link>
          <Link
            href="/courses/respect/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Take the Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
