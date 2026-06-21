import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Days of the Week in Shona | Duramazwi",
  description:
    "Learn the Shona names for all seven days — including why Sunday came from Portuguese and what Saturday really means.",
};

const vocabulary = [
  {
    day: "Sunday",
    shona: "Svondo",
    pronunciation: "SVOHN-doh",
    note: "From Portuguese 'domingo' — the traders' day of worship",
  },
  {
    day: "Monday",
    shona: "Muvhuro",
    pronunciation: "moo-VHOO-roh",
    note: "The first day of the working week",
  },
  {
    day: "Tuesday",
    shona: "Chipiri",
    pronunciation: "chee-PEE-ree",
    note: "Literally 'the second' — second day of the week",
  },
  {
    day: "Wednesday",
    shona: "Chitatu",
    pronunciation: "chee-TAH-too",
    note: "Literally 'the third'",
  },
  {
    day: "Thursday",
    shona: "China",
    pronunciation: "CHEE-nah",
    note: "Literally 'the fourth'",
  },
  {
    day: "Friday",
    shona: "Chishanu",
    pronunciation: "chee-SHAH-noo",
    note: "Literally 'the fifth'",
  },
  {
    day: "Saturday",
    shona: "Mugovera",
    pronunciation: "moo-goh-VEH-rah",
    note: "The gathering/celebration day — traditionally for brewing beer",
  },
];

const usefulPhrases = [
  {
    shona: "Nhasi ndeChipiri.",
    english: "Today is Tuesday.",
    pronunciation: "NHAH-see ndeh-chee-PEE-ree",
  },
  {
    shona: "Mugovera ndinoshanda.",
    english: "On Saturday I work.",
    pronunciation: "moo-goh-VEH-rah ndee-noh-SHAHN-dah",
  },
  {
    shona: "Svondo tinogara kumba.",
    english: "On Sunday we stay home.",
    pronunciation: "SVOHN-doh tee-noh-GAH-rah KOOM-bah",
  },
  {
    shona: "Zuva ripi nhasi?",
    english: "What day is today?",
    pronunciation: "ZOO-vah REE-pee NHAH-see",
  },
];

const culturalNotes = [
  {
    title: "Svondo — the Portuguese connection",
    body: "Svondo (Sunday) is a borrowing from the Portuguese word 'domingo' (Sunday). Portuguese traders and missionaries arrived in the Shona region from the 16th century, and their word for the Christian day of worship was adopted into Shona. This makes Svondo one of the oldest foreign borrowings in the language.",
  },
  {
    title: "Mugovera — Saturday as a gathering day",
    body: "Mugovera (Saturday) is arguably the most culturally loaded day name. The root refers to gathering and sharing — traditionally Saturday was the day for brewing and drinking beer (doro), community gatherings, and social life. Even today, Saturday retains its character as a social day across Zimbabwean culture.",
  },
  {
    title: "Numbered weekdays",
    body: "Tuesday through Friday are numbered days: Chipiri (second), Chitatu (third), China (fourth), Chishanu (fifth). Monday (Muvhuro) is the first working day. This numbering system reflects a week that begins on Monday for work purposes, with Sunday (Svondo) set apart as a rest day.",
  },
  {
    title: "Market days",
    body: "In rural Zimbabwe, market days are often set by the day of the week — and knowing the day matters for practical life. Roadside markets, livestock auctions, and communal gatherings are typically tied to specific days. Asking 'Mugovera kune musika here?' (Is there a market on Saturday?) is a common practical question.",
  },
];

export default function DaysPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/time"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Time Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Days of the Week
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mazuva esvondo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona day names carry history — Sunday is borrowed from Portuguese,
            Saturday reflects communal life, and Tuesday through Friday are
            simply numbered. Learning the seven days gives you an immediate
            window into the week and opens up conversations about plans,
            schedules, and social life.
          </p>
        </div>

        {/* Vocabulary Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Days of the Week
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Day</th>
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Pronunciation
                </th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.day}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.day}
                  </td>
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell font-mono text-xs">
                    {word.pronunciation}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-[var(--color-muted)] text-xs italic">
                    {word.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Useful Phrases */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Useful Phrases
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
              </tr>
            </thead>
            <tbody>
              {usefulPhrases.map((phrase, i) => (
                <tr
                  key={phrase.shona}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {phrase.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {phrase.english}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell font-mono text-xs">
                    {phrase.pronunciation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural &amp; Language Notes
        </h2>
        <div className="flex flex-col gap-5 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/time"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/time/months"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Months →
          </Link>
        </div>
      </div>
    </div>
  );
}
