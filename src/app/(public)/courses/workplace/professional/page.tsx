import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Communication in Shona | Duramazwi",
  description:
    "Learn how to write formally, make requests, introduce yourself, and navigate professional Shona with the right register.",
};

const vocabulary = [
  {
    shona: "Kunyora tsamba",
    english: "To write a letter / email",
    pronunciation: "koo-NYOH-rah TSAM-bah",
    example: "Ndanyora tsamba kubasa.",
    exampleTranslation: "I wrote a letter to work.",
  },
  {
    shona: "Kufonera",
    english: "To call / phone",
    pronunciation: "koo-foh-NEH-rah",
    example: "Ndafonera mukuru webasa.",
    exampleTranslation: "I called my supervisor.",
  },
  {
    shona: "Kukumbira kubatana",
    english: "To request a meeting",
    pronunciation: "koo-KOOM-bee-rah koo-bah-TAH-nah",
    example: "Ndakukumbira kubatana nemi.",
    exampleTranslation: "I am requesting a meeting with you.",
  },
  {
    shona: "Ndinokutendai",
    english: "I thank you (formal)",
    pronunciation: "ndee-noh-koo-TEN-dai",
    example: "Ndinokutendai nekubatsira kwenyu.",
    exampleTranslation: "I thank you for your help.",
  },
  {
    shona: "Zita rangu ndi...",
    english: "My name is...",
    pronunciation: "ZEE-tah RAHN-goo ndee",
    example: "Zita rangu ndiTendai Moyo.",
    exampleTranslation: "My name is Tendai Moyo.",
  },
  {
    shona: "Ndiri kubva ku...",
    english: "I am from / representing...",
    pronunciation: "NDEE-ree koob-VAH koo",
    example: "Ndiri kubva kuMasvingo.",
    exampleTranslation: "I am from Masvingo.",
  },
  {
    shona: "Chinangwa",
    english: "Goal / Objective",
    pronunciation: "chee-NAHN-gwah",
    example: "Chinangwa chedu ndechekushanda nesimba.",
    exampleTranslation: "Our objective is to work hard.",
  },
  {
    shona: "Mhinduro yako",
    english: "Your response",
    pronunciation: "mhin-DOO-roh YAH-koh",
    example: "Ndinomirira mhinduro yako.",
    exampleTranslation: "I am waiting for your response.",
  },
  {
    shona: "Pindurai",
    english: "Please reply / respond",
    pronunciation: "peen-doo-RAI",
    example: "Ndapota pindurai nekukurumidza.",
    exampleTranslation: "Please reply promptly.",
  },
  {
    shona: "Zvikumbiro",
    english: "Requests / Formal asks",
    pronunciation: "zvee-koom-BEE-roh",
    example: "Zvikumbiro zvangu zviri mutsamba.",
    exampleTranslation: "My requests are in the letter.",
  },
];

const formalStructure = [
  {
    step: "Opening",
    shona: "Kubva kuna...",
    english: "From...",
    notes: "Formal letters always begin by identifying the sender.",
  },
  {
    step: "Greeting",
    shona: "Ndinokutendai nekusiya nguva yenyu...",
    english: "I thank you for sparing your time...",
    notes: "Acknowledging the recipient's time before the request is standard courtesy.",
  },
  {
    step: "Introduction",
    shona: "Zita rangu ndi... Ndiri kubva ku...",
    english: "My name is... I am from...",
    notes: "State who you are and your affiliation or origin.",
  },
  {
    step: "Purpose",
    shona: "Chinangwa chetsamba iyi ndeche...",
    english: "The purpose of this letter is...",
    notes: "State your reason clearly — formal Shona values directness in purpose.",
  },
  {
    step: "Request",
    shona: "Ndine zvikumbiro...",
    english: "I have the following requests...",
    notes: "List your formal asks before closing.",
  },
  {
    step: "Closing",
    shona: "Ndinokutendai, Ndinemi...",
    english: "I thank you, Yours faithfully...",
    notes: "'Ndinemi' literally means 'I am with you' — a warm, respectful closing.",
  },
];

const culturalNotes = [
  {
    title: "Formal letters follow structured conventions",
    body: "Professional Shona writing has specific expectations — opening greetings matter, identifying yourself is necessary, and the purpose must be stated with care. Jumping straight to a request without a greeting can read as abrupt or disrespectful.",
  },
  {
    title: "English terms are normal in professional Shona",
    body: "Formal professional Shona increasingly uses English loan words — 'imeyiri' (email), 'musangano' (meeting), 'purojekiti' (project). This is not a failure of Shona; it is the language adapting to modern professional contexts, just as English borrows from everywhere.",
  },
  {
    title: "Code-switching is common but written Shona stays formal",
    body: "In spoken professional settings, switching between Shona and English mid-sentence is completely natural. However, when writing formally — whether a letter, an official email, or a report — the expectation tends to be Standard Shona without mid-sentence switches.",
  },
];

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/workplace"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Work &amp; School Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Professional Communication
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kutaura Kwepabasa
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Professional Shona has its own register — a formal, respectful way
            of speaking and writing that differs from everyday conversation.
            Knowing how to introduce yourself, make a formal request, and close
            a letter correctly marks you as educated and respectful in
            Zimbabwean professional culture. This module covers the building
            blocks of that register.
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

        {/* Formal Letter Structure */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Formal Letter Structure
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Part</th>
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">English</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {formalStructure.map((item, i) => (
                <tr
                  key={item.step}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {item.step}
                  </td>
                  <td className="px-4 py-3 font-medium text-[var(--color-text)]">
                    {item.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell">
                    {item.english}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden lg:table-cell text-xs italic">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Professional Shona
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note) => (
              <div key={note.title}>
                <p className="font-semibold text-[var(--color-text)] mb-1">
                  {note.title}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/workplace/classroom"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← In the Classroom
          </Link>
          <Link
            href="/courses/workplace/teamwork"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Teamwork &amp; Collaboration →
          </Link>
        </div>
      </div>
    </div>
  );
}
