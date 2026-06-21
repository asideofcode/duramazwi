import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Transport in Shona | Duramazwi",
  description:
    "Learn the Shona vocabulary for Zimbabwe's kombi minibus system — how to board, pay, and get off at the right stop.",
};

const vocabulary = [
  {
    shona: "Kombi",
    english: "Minibus — the main public transport",
    pronunciation: "KOM-bee",
    example: "Ndinokwira kombi kuenda kuGuta.",
    exampleTranslation: "I board a kombi to go to town.",
  },
  {
    shona: "Bhazi",
    english: "Bus",
    pronunciation: "BHAH-zee",
    example: "Bhazi rinoenda kuHarare mangwanani.",
    exampleTranslation: "The bus goes to Harare in the morning.",
  },
  {
    shona: "Kudhiraivha",
    english: "To drive",
    pronunciation: "koo-dhee-RAH-ee-vhah",
    example: "Anodhiraivha kombi nezvo.",
    exampleTranslation: "He drives a kombi carefully.",
  },
  {
    shona: "Musinjiri / Mujibha",
    english: "Kombi conductor — calls out the route",
    pronunciation: "moo-sin-JEE-ree / moo-JEE-bhah",
    example: "Mujibha anodana vanhu kombini.",
    exampleTranslation: "The conductor calls people to board the kombi.",
  },
  {
    shona: "Nzira yekuenda",
    english: "Route / destination",
    pronunciation: "N-ZEE-rah yeh-koo-EN-dah",
    example: "Nzira yekuenda yekombi iyi ndeipi?",
    exampleTranslation: "What is the route of this kombi?",
  },
  {
    shona: "Ndiende kupi?",
    english: "Where am I going? — asking at a rank",
    pronunciation: "ndee-EN-deh KOO-pee",
    example: "Ndiende kupi kana ndinoda kuenda kuMbare?",
    exampleTranslation: "Which one do I take if I want to go to Mbare?",
  },
  {
    shona: "Ndiudze pandanoburuka",
    english: "Tell me where to get off",
    pronunciation: "ndee-OOD-zeh pan-dah-noh-BOO-roo-kah",
    example: "Ndiudze pandanoburuka, handizivi nzvimbo iyi.",
    exampleTranslation: "Tell me where to get off — I don't know this area.",
  },
  {
    shona: "Imari kubhirana?",
    english: "How much to get to...?",
    pronunciation: "ee-MAH-ree koo-BHEE-rah-nah",
    example: "Imari kubhirana kuGuta?",
    exampleTranslation: "How much to get to town?",
  },
  {
    shona: "Rank",
    english: "Bus / kombi rank or terminus",
    pronunciation: "RANK",
    example: "Tinosangana kurank.",
    exampleTranslation: "We meet at the rank.",
  },
  {
    shona: "Ticket",
    english: "Fare receipt",
    pronunciation: "TEEKIT",
    example: "Ndipe tiket yangu.",
    exampleTranslation: "Give me my ticket.",
  },
];

const culturalNotes = [
  {
    title: "The kombi is Zimbabwe's heartbeat",
    body: "The kombi (minibus) is by far the most used form of public transport in Zimbabwe's towns and cities. There is no significant underground or rail system — if you are moving in an urban area, you are almost certainly using a kombi. Learning to navigate it is essential.",
  },
  {
    title: "Overcrowding is normal",
    body: "Kombis are routinely filled well beyond what might seem comfortable. Standing passengers, overlapping knees, and bags on laps are standard. Complaining about overcrowding signals you are not familiar with the system. This is not neglect — it is how the economics of mass transit work in Zimbabwe.",
  },
  {
    title: "The conductor (mujibha / hwindi)",
    body: "The mujibha or hwindi is the conductor who hangs out of the door, shouts the destination to attract passengers, collects fares, and keeps the kombi moving. His loud, rhythmic calling of the route is one of the most recognisable sounds of a Zimbabwean city. Building a friendly rapport with him often gets you good service.",
  },
  {
    title: "Kombis leave when full",
    body: "Kombis do not run to a fixed timetable — they leave when they are full. At busy times this means frequent departures. At quiet times you may wait. This is widely understood and accepted. Asking when the next kombi leaves is less useful than asking how busy the rank is.",
  },
];

export default function PublicTransportPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/transport"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Transport Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Public Transport
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kombi neBhazi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The kombi is not just transport — it is a Zimbabwean institution.
            Loud, efficient, crowded, and fast when full, it connects every
            corner of the city. Learning these ten words will let you board,
            navigate, pay, and disembark without confusion.
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
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: The Kombi Culture
          </h3>
          <div className="grid gap-4">
            {culturalNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-1">{note.title}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{note.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/transport/directions"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Directions
          </Link>
          <Link
            href="/courses/transport/village-city"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Village vs City Travel →
          </Link>
        </div>
      </div>
    </div>
  );
}
