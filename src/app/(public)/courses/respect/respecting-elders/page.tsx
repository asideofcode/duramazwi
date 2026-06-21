import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Respecting Elders in Shona | Duramazwi",
  description:
    "Learn the Shona vocabulary and obligations around respecting elders — why 'imi' matters, why children greet first, and how authority is recognised.",
};

const vocabulary = [
  {
    shona: "Munhu mukuru",
    english: "Elder / important person",
    pronunciation: "MOO-nhoo moo-KOO-roo",
    example: "Munhu mukuru anofanira kuremekedza.",
    exampleTranslation: "An elder deserves respect.",
  },
  {
    shona: "Kuremekedza",
    english: "To show respect",
    pronunciation: "koo-reh-meh-KEH-dzah",
    example: "Tinofanira kuremekedza vakuru.",
    exampleTranslation: "We must respect our elders.",
  },
  {
    shona: "Imi",
    english: "Respectful second person — use for elders",
    pronunciation: "EE-mee",
    example: "Imi mauya here?",
    exampleTranslation: "Have you arrived? (respectful — to an elder)",
  },
  {
    shona: "Kuombera",
    english: "To clap in greeting — children for adults",
    pronunciation: "koo-ohm-BEH-rah",
    example: "Vana vanoombera vabereki.",
    exampleTranslation: "Children clap to greet their parents.",
  },
  {
    shona: "Kufamba zvinyoronyoro",
    english: "To walk quietly / carefully near elders",
    pronunciation: "koo-FAHm-bah zvee-nyoh-roh-NYOH-roh",
    example: "Kufamba zvinyoronyoro pakati pevakuru.",
    exampleTranslation: "Walk quietly among the elders.",
  },
  {
    shona: "Kutaura zvinyoronyoro",
    english: "To speak softly / carefully",
    pronunciation: "koo-TAH-oo-rah zvee-nyoh-roh-NYOH-roh",
    example: "Mwana anofanira kutaura zvinyoronyoro.",
    exampleTranslation: "A child must speak softly.",
  },
  {
    shona: "Ndatenda",
    english: "I thank you",
    pronunciation: "ndah-TEH-ndah",
    example: "Ndatenda, Baba.",
    exampleTranslation: "I thank you, Father.",
  },
  {
    shona: "Ndinokutendai",
    english: "I thank you — formal / respectful plural",
    pronunciation: "ndee-noh-koo-teh-NDAH-ee",
    example: "Ndinokutendai zvikuru.",
    exampleTranslation: "I thank you very much (formal).",
  },
  {
    shona: "Ndapota",
    english: "Please — respectful request",
    pronunciation: "ndah-POH-tah",
    example: "Ndapota, ndinokumbirawo mvumo.",
    exampleTranslation: "Please, I am also requesting permission.",
  },
  {
    shona: "Simba",
    english: "Authority / strength of elders",
    pronunciation: "SEEM-bah",
    example: "Vakuru vane simba rekunyaradza.",
    exampleTranslation: "Elders have the authority to bring peace.",
  },
];

const culturalNotes = [
  {
    title: "\"Iwe\" is a serious breach",
    body: "Using \"iwe\" (informal you) with an elder is one of the most common and serious mistakes a Shona learner can make. The correct form is always \"imi\" — the plural/respectful second person. This is not optional politeness; it signals whether you recognise someone's status. Even when speaking to one elder, you use \"imi\" and conjugate the verb accordingly.",
  },
  {
    title: "Children greet adults first",
    body: "In Shona culture, it is always the child's obligation to greet the adult first — never the other way around. An adult waiting for a child to notice them and greet is a sign of good upbringing. A child who must be greeted first is considered unmannered. This applies at home, at church, on the road, and anywhere a child encounters an adult.",
  },
  {
    title: "Interrupting an elder is very disrespectful",
    body: "When an elder is speaking, you do not speak. You wait. Interrupting is considered a sign that you believe your words matter more than theirs — which is deeply disrespectful. In formal settings, elders often speak at length before yielding the floor. Younger people signal readiness to receive by listening quietly and not shifting position.",
  },
  {
    title: "Do not sit while an elder stands",
    body: "If an elder is standing in your presence, you stand too — unless they specifically invite you to sit. Sitting comfortably while an elder stands is inappropriate. In many homes, young people stand until the eldest person in the room has taken a seat. This is not about discomfort for the young person; it is about honouring the elder's precedence.",
  },
];

export default function RespectingEldersPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Respecting Elders
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuremekedza Vakuru
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Respect for elders is the foundation of Shona social life. It is
            expressed through the words you choose, where you stand, when you
            speak, and even how you walk into a room. The vocabulary in this
            module gives you the tools — the cultural notes explain the
            reasoning that Shona people live by every day.
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

        {/* Quick Reference */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Iwe vs Imi — Quick Reference
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg mb-1">Iwe</p>
              <p className="text-sm text-[var(--color-text)] font-medium">Informal / peer-level</p>
              <p className="text-xs text-[var(--color-muted)] mt-2 leading-relaxed">
                Use with friends your own age, children younger than you, and
                peers in casual contexts. Using it with an elder is a sign of
                poor upbringing.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg mb-1">Imi</p>
              <p className="text-sm text-[var(--color-text)] font-medium">Respectful / elder-level</p>
              <p className="text-xs text-[var(--color-muted)] mt-2 leading-relaxed">
                Use with parents, in-laws, any elder, teachers, and people in
                authority. Also used when addressing a group. Always the safe
                choice when in doubt.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/respect"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/respect/body-language"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Body Language →
          </Link>
        </div>
      </div>
    </div>
  );
}
