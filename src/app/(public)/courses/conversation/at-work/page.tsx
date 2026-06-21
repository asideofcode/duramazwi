import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "At Work — Conversation in Shona | Duramazwi",
  description:
    "Learn Shona for the workplace — greeting colleagues, navigating meetings, and the natural Shona-English mix of Zimbabwean professional life.",
};

const vocabulary = [
  {
    shona: "Basa",
    english: "Work / Job",
    pronunciation: "BAH-sah",
    example: "Ndinoshanda basa rangu nedhiro.",
    exampleTranslation: "I do my work carefully.",
  },
  {
    shona: "Hofisi",
    english: "Office",
    pronunciation: "hoh-FEE-see",
    example: "Ndiri muhofisi nhasi.",
    exampleTranslation: "I am in the office today.",
  },
  {
    shona: "Musangano",
    english: "Meeting",
    pronunciation: "moo-san-GAH-noh",
    example: "Musangano unotanga ngava yegumi.",
    exampleTranslation: "The meeting starts at ten o'clock.",
  },
  {
    shona: "Mutengo / Mubhadharo",
    english: "Salary / Payment",
    pronunciation: "moo-TEN-goh / moo-bhah-DHAH-roh",
    example: "Mubhadharo unosvika mwedzi uno here?",
    exampleTranslation: "Does the salary arrive this month?",
  },
  {
    shona: "Mushandirapamwe",
    english: "Colleague",
    pronunciation: "moo-shan-dee-rah-PAM-weh",
    example: "Mushandirapamwe wangu akandiudza.",
    exampleTranslation: "My colleague told me.",
  },
  {
    shona: "Mukuru webasa",
    english: "Supervisor / Boss",
    pronunciation: "moo-KOO-roo weh-BAH-sah",
    example: "Mukuru webasa anoda ndiripoti nhasi.",
    exampleTranslation: "The supervisor wants a report today.",
  },
  {
    shona: "Kubata basa",
    english: "To start work / To begin the job",
    pronunciation: "koo-BAH-tah BAH-sah",
    example: "Tinobata basa ngava yechisere.",
    exampleTranslation: "We start work at eight o'clock.",
  },
  {
    shona: "Kupedza basa",
    english: "To finish work",
    pronunciation: "koo-PEH-dzah BAH-sah",
    example: "Ndipedzei basa nguva yechishanu.",
    exampleTranslation: "Let me finish work at five o'clock.",
  },
  {
    shona: "Kureurura",
    english: "To report / To give feedback",
    pronunciation: "koo-reh-oo-ROO-rah",
    example: "Ndireurure kumukuru webasa.",
    exampleTranslation: "Let me report to the supervisor.",
  },
  {
    shona: "Ndinoda kuvhurira...",
    english: "I would like to raise the matter of...",
    pronunciation: "ndi-NOH-dah koo-VHOO-ree-rah",
    example: "Ndinoda kuvhurira nyaya yemari.",
    exampleTranslation: "I would like to raise the matter of money.",
  },
  {
    shona: "Muchandigadzira...",
    english: "Please prepare for me...",
    pronunciation: "moo-chan-dee-GAH-dzee-rah",
    example: "Muchandigadzira nhetembo yemusangano?",
    exampleTranslation: "Will you prepare the agenda for the meeting for me?",
  },
  {
    shona: "Poto yeruzhinji",
    english: "Canteen / Staff kitchen",
    pronunciation: "POH-toh yeh-roo-ZHIN-jee",
    example: "Tinoenda kupota yeruzhinji masikati.",
    exampleTranslation: "We go to the canteen at lunchtime.",
  },
];

const dialogues = [
  {
    title: "Morning Arrival",
    shona: "Kusvika Mangwanani",
    lines: [
      { speaker: "A", shona: "Mangwanani! Wakadini?", english: "Good morning! How are you?" },
      { speaker: "B", shona: "Ndiripo zvakanaka, mazvita. Iwewe wakadini?", english: "I am well, thank you. And you?" },
      { speaker: "A", shona: "Zvakanaka. Mai vako vakadini?", english: "Well. How is your mother?" },
      { speaker: "B", shona: "Varikomboka — vanotumira minamato. Maita basa.", english: "They are alright — they send greetings. Thank you." },
      { speaker: "A", shona: "Tiriwo. Basa rakanaka nhasi.", english: "Same from us. Have a good day's work." },
    ],
  },
  {
    title: "In a Meeting",
    shona: "Mumusangano",
    lines: [
      { speaker: "Chair", shona: "Tinotanga musangano. Pane anoda kutaura chimwe?", english: "We begin the meeting. Does anyone want to raise something?" },
      { speaker: "Staff A", shona: "Ndinoda kuvhurira nyaya yedelivery schedule.", english: "I would like to raise the matter of the delivery schedule." },
      { speaker: "Chair", shona: "Zvakanaka. Taurai.", english: "Good. Go ahead and speak." },
      { speaker: "Staff A", shona: "Tine dambudziko nezuva rechishanu — tinofanira kuchinja zuva.", english: "We have a problem with Friday — we need to change the day." },
      { speaker: "Chair", shona: "Tinozvinzwa. Tichazviongororawo. Maita basa.", english: "We hear you. We will also look into it. Thank you." },
    ],
  },
  {
    title: "Asking a Colleague",
    shona: "Kubvunza Mushandirapamwe",
    lines: [
      { speaker: "A", shona: "Ndapotawo — unoziva here kana mukuru aripo?", english: "Sorry to bother — do you know if the supervisor is in?" },
      { speaker: "B", shona: "Aiwa, akaenda kumusangano. Anosvika masikati.", english: "No, he has gone to a meeting. He arrives at lunchtime." },
      { speaker: "A", shona: "Maita basa. Ndichamirira.", english: "Thank you. I will wait." },
      { speaker: "B", shona: "Kana uchida, ungarega meseji yako neni.", english: "If you like, you can leave your message with me." },
      { speaker: "A", shona: "Zvakanaka. Ndinokuonga.", english: "That is good. I thank you." },
    ],
  },
];

const culturalNotes = [
  {
    heading: "Shona-English code switching",
    body: "Workplace Shona often mixes English loanwords freely — hofisi (office), musangano (meeting), delivery, report. This is normal and not considered \"bad Shona.\" It reflects the reality of working in a bilingual country.",
  },
  {
    heading: "Greet everyone",
    body: "Greeting every colleague in the morning is expected — walking past someone silently is considered cold and can damage working relationships. A brief \"Mangwanani, wakadini?\" goes a long way.",
  },
  {
    heading: "Family small talk is normal",
    body: "Asking about a colleague's family — \"Mudzimai wakadini?\" (How is your wife?) or \"Vana vakadini?\" (How are the children?) — is normal workplace small talk, not intrusive. It builds the relationship.",
  },
  {
    heading: "Titles in Shona",
    body: "Supervisors and managers are often addressed in Shona form — Mukuru (senior), or by their position title. First names alone in a senior context can seem overly familiar.",
  },
];

export default function AtWorkPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/conversation"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Conversation Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            At Work
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kubasa
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The Zimbabwean workplace is a natural mix of Shona and English.
            Shona holds the relational fabric — greetings, asking about
            families, small talk — while English often handles formal
            documentation and technical discussion. This module teaches you
            the Shona that keeps workplace relationships warm.
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

        {/* Dialogues */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Dialogues
        </h2>
        <div className="grid gap-6 mb-10">
          {dialogues.map((dialogue) => (
            <div
              key={dialogue.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <h3 className="font-bold text-[var(--color-text)]">
                  {dialogue.title}
                </h3>
                <p className="text-sm italic text-[var(--color-accent)] mt-0.5">
                  {dialogue.shona}
                </p>
              </div>
              <div className="p-6 grid gap-3">
                {dialogue.lines.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-xs font-semibold text-[var(--color-muted)] w-16 shrink-0 pt-0.5">
                      {line.speaker}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--color-primary)] text-sm">
                        {line.shona}
                      </p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">
                        {line.english}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {culturalNotes.map((note) => (
              <div
                key={note.heading}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-2">
                  {note.heading}
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
            href="/courses/conversation/at-school"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← At School
          </Link>
          <Link
            href="/courses/conversation/in-church"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: In Church →
          </Link>
        </div>
      </div>
    </div>
  );
}
