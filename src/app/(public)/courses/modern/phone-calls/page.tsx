import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Conversations in Shona | Duramazwi",
  description:
    "Learn how to make and receive phone calls in Shona — greetings, WhatsApp etiquette, missed calls, and how to wrap up a call.",
};

const vocabulary = [
  {
    shona: "Foni",
    english: "Phone",
    pronunciation: "FOH-nee",
    example: "Foni yangu yakashaya bhethri.",
    exampleTranslation: "My phone has no battery.",
  },
  {
    shona: "Nharembozha",
    english: "Mobile phone (literally: thing that travels)",
    pronunciation: "nhah-reh-MBOH-zhah",
    example: "Nharembozha yangu itsva.",
    exampleTranslation: "My mobile phone is new.",
  },
  {
    shona: "Kufonera",
    english: "To call / to phone someone",
    pronunciation: "koo-foh-NEH-rah",
    example: "Ndinoda kukufonera mangwana.",
    exampleTranslation: "I want to call you tomorrow.",
  },
  {
    shona: "Ndiri kukufonera",
    english: "I am calling you",
    pronunciation: "ndi-ree koo-koo-foh-NEH-rah",
    example: "Ndiri kukufonera — tauriranai.",
    exampleTranslation: "I am calling you — speak to each other.",
  },
  {
    shona: "Wasvika sei?",
    english: "How did you get there? (asking about arrival by phone)",
    pronunciation: "wah-SVEE-kah seh-ee",
    example: "Wasvika sei? Taifunga newe.",
    exampleTranslation: "How did you get there? We were thinking about you.",
  },
  {
    shona: "Ndinzwa mwi",
    english: "I hear you / I can hear you",
    pronunciation: "ndi-nzwah MWEE",
    example: "Ndinzwa mwi — taura zvakare.",
    exampleTranslation: "I can hear you — say it again.",
  },
  {
    shona: "Ndinoenda",
    english: "I am going (wrapping up a call)",
    pronunciation: "ndi-no-EN-dah",
    example: "Ndinoenda — tichataura mangwana.",
    exampleTranslation: "I am going — we will talk tomorrow.",
  },
  {
    shona: "Chengeta",
    english: "Take care (phone farewell)",
    pronunciation: "chen-GEH-tah",
    example: "Chengeta — tichazoonana.",
    exampleTranslation: "Take care — we will see each other.",
  },
  {
    shona: "Misanganano",
    english: "WhatsApp group (modern usage: group/meeting)",
    pronunciation: "mee-sah-ngah-NAH-noh",
    example: "Ndinokutumira pamutumwa weWhatsApp — tiine misanganano.",
    exampleTranslation: "I will send you on the WhatsApp group — we have a group.",
  },
  {
    shona: "Ndinatsa foni",
    english: "I will fix my phone / my phone has issues",
    pronunciation: "ndi-NAH-tsah FOH-nee",
    example: "Ndinatsa foni — ndikufonere.",
    exampleTranslation: "I will fix my phone — call me back.",
  },
];

const phonePhrases = [
  {
    shona: "Ndiani?",
    english: "Who is it?",
    notes: "Common opening when answering a call from an unknown number.",
  },
  {
    shona: "Ndiyo [name] apo",
    english: "This is [name] here",
    notes: "How you identify yourself when answering. E.g. 'Ndiyo Tendai apo.'",
  },
  {
    shona: "Heh nhasi?",
    english: "Are you well today?",
    notes: "A casual check-in greeting used before getting to the point of the call.",
  },
  {
    shona: "Ndingatumire WhatsApp?",
    english: "Can I send you a WhatsApp?",
    notes: "Used when the call is too short or you want to follow up in writing.",
  },
  {
    shona: "Ndakufonera nekuti...",
    english: "I called you because...",
    notes: "How you introduce the reason for your call — after the greetings.",
  },
  {
    shona: "Taurirana",
    english: "Talk to each other (instructing two people to call each other)",
    notes: "A parent or elder says this to connect two people — 'You two, call each other.'",
  },
];

const culturalNotes = [
  {
    title: "The long greeting",
    body: "Phone calls in Zimbabwe often begin with a full greeting exchange before the actual topic is raised. Do not rush to your point — ask how the person is, how their family is, and listen to the answer. The greeting is not a formality; it is the call.",
  },
  {
    title: "WhatsApp is the default",
    body: "WhatsApp is the primary platform for communication — voice notes, messages, and calls all happen there. Calling on the regular phone line is reserved for urgent or important matters. If something can go on WhatsApp, it does.",
  },
  {
    title: "The missed call signal",
    body: "Calling someone and hanging up before they answer — 'kufonera misikoli' (a miss call) — is a common signal meaning 'call me back when you can.' It saves credit and communicates without a word.",
  },
  {
    title: "Family WhatsApp groups",
    body: "Every Zimbabwean family has a WhatsApp group — usually called something with 'mhuri' (family) in the name. These groups are central to diaspora family life: announcements, celebrations, debates, and prayers all happen there.",
  },
];

export default function PhoneCallsPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Phone Conversations
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kutaura neFoni
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A phone call in Shona is never just a quick transaction. There is a
            rhythm to it — greetings first, family second, business third. This
            module gives you the vocabulary and phrases to navigate calls
            confidently, from the first{" "}
            <strong>&ldquo;Ndiani?&rdquo;</strong> to the final{" "}
            <strong>&ldquo;Chengeta.&rdquo;</strong>
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

        {/* Key Phone Phrases */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Key Phone Phrases
        </h2>
        <div className="grid gap-4 mb-12">
          {phonePhrases.map((phrase) => (
            <div
              key={phrase.shona}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                {phrase.shona}
              </p>
              <p className="text-sm font-medium text-[var(--color-text)] mb-2">
                {phrase.english}
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed italic">
                {phrase.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Phone Calls
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note, i) => (
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
            href="/courses/modern"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/modern/social-media"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Social Media in Shona →
          </Link>
        </div>
      </div>
    </div>
  );
}
