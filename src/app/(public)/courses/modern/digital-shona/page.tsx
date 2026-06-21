import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Shona Language | Duramazwi",
  description:
    "How Shona is written in texts and online — abbreviations, vowel-dropping, code-switching, and what digital Shona means for the language.",
};

const abbreviations = [
  {
    full: "Hameno",
    short: "hmn",
    meaning: "I do not know",
    context: "Used in text when you are unsure — a shrug in written form.",
  },
  {
    full: "Zvakanaka",
    short: "zvk",
    meaning: "It is good / fine / okay",
    context: "Dropped to its consonants in casual texts. Confirms something is fine.",
  },
  {
    full: "Ndinokudai",
    short: "ndnkdai",
    meaning: "I love you",
    context: "Vowels dropped in affectionate texts — the feeling is clear even abbreviated.",
  },
  {
    full: "Mhoro, makadii?",
    short: "mhr, mkdi?",
    meaning: "Hello, how are you?",
    context: "Common informal text greeting — shortened but recognisable.",
  },
  {
    full: "Tatenda",
    short: "ttnd",
    meaning: "Thank you",
    context: "Quick text sign-off or reaction.",
  },
  {
    full: "Ndinofara",
    short: "ndnfr",
    meaning: "I am happy",
    context: "Reaction to good news — vowels dropped, consonant skeleton retained.",
  },
];

const codeSwitchExamples = [
  {
    sentence: "Ndinoda kuenda kutown kuti nditenge zvimwe stuff.",
    breakdown: "Ndinoda kuenda ku[town] kuti nditenge zvimwe [stuff].",
    translation: "I want to go to town to buy some stuff.",
    note: "Town and stuff are borrowed English — no Shona equivalent is used in casual speech.",
  },
  {
    sentence: "Ndakufonera but line yakaoma.",
    breakdown: "Ndakufonera [but] line yakaoma.",
    translation: "I called you but the line was bad.",
    note: "'But' slips in naturally — Shona speakers switch mid-thought without interrupting flow.",
  },
  {
    sentence: "Masikati vanhu — nhasi tinopostara zvinotsa.",
    breakdown: "Masikati vanhu — nhasi tinopostara zvinotsa.",
    translation: "Good afternoon everyone — today we are posting something nice.",
    note: "Classic social media post opener. Full Shona, warm, inviting — typical caption style.",
  },
  {
    sentence: "WhatsApp group yemhuri yakatumwa message.",
    breakdown: "[WhatsApp] group ye[mhuri] yakatumwa [message].",
    translation: "The family WhatsApp group was sent a message.",
    note: "Platform names stay in English; Shona grammar wraps around them.",
  },
];

const digitalNotes = [
  {
    title: "Informal vs formal written Shona",
    body: "Written Shona in informal digital contexts — texts, WhatsApp, social media — is heavily abbreviated and mixed with English. Formal written Shona in official documents and letters remains close to Standard Shona grammar and spelling.",
  },
  {
    title: "YouTube, podcasts, and TikTok",
    body: "The emergence of Shona content on YouTube, podcasts, and TikTok is one of the most significant forces in language preservation among diaspora youth. Creators who grew up outside Zimbabwe are relearning the language and teaching it to their peers.",
  },
  {
    title: "The debate about digital Shona",
    body: "There is active debate among Shona scholars and speakers about whether the heavily anglicised 'digital Shona' is harming the language. The majority view among linguists is that it is simply evolution — every living language code-switches and borrows. The alternative is silence.",
  },
  {
    title: "Vowel-dropping is a feature",
    body: "Dropping vowels in informal Shona text (ndnkdai for ndinokudai) is not laziness — it is a consistent feature of digital written Shona. Shona speakers instantly recognise the consonant skeletons of words they know.",
  },
];

export default function DigitalShonaPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/modern"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Modern Shona
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Digital Shona Language
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Shona yeMagetsi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The Shona you see in a textbook and the Shona you see in a WhatsApp
            message are two different things. Digital Shona is shortened,
            code-switched, vowel-dropped, and shot through with English. This
            module is your guide to reading and writing it — because if you
            want to understand Zimbabwean texts and social media, you need to
            understand how the language actually works online.
          </p>
        </div>

        {/* Abbreviations */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Common Abbreviations
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Full form</th>
                <th className="px-4 py-3 font-semibold">Digital short</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Meaning
                </th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Context
                </th>
              </tr>
            </thead>
            <tbody>
              {abbreviations.map((row, i) => (
                <tr
                  key={row.full}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {row.full}
                  </td>
                  <td className="px-4 py-3 font-mono text-[var(--color-accent)] font-semibold">
                    {row.short}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)] hidden md:table-cell">
                    {row.meaning}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell leading-relaxed">
                    {row.context}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Code-switching */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Code-Switching in Practice
        </h2>
        <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
          Code-switching — moving between Shona and English in the same
          sentence — is natural and widespread in Zimbabwean speech and
          writing. Here are real examples:
        </p>
        <div className="grid gap-5 mb-12">
          {codeSwitchExamples.map((ex, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <p className="font-bold text-[var(--color-primary)] text-base mb-1">
                &ldquo;{ex.sentence}&rdquo;
              </p>
              <p className="text-sm font-medium text-[var(--color-text)] mb-1">
                {ex.translation}
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed italic">
                {ex.note}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Digital Shona
          </h3>
          <div className="grid gap-5">
            {digitalNotes.map((note, i) => (
              <div key={i}>
                <p className="font-semibold text-[var(--color-primary)] mb-1">
                  {note.title}
                </p>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/modern/social-media"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Social Media in Shona
          </Link>
          <Link
            href="/courses/modern/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Modern Shona Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
