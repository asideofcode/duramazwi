import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telling Time in Shona | Duramazwi",
  description:
    "Learn how to say what time it is in Shona — hours, half past, minutes, times of day, and the cultural concept of African time.",
};

const hoursVocabulary = [
  {
    shona: "Nguva yekutanga",
    english: "1 o'clock",
    pronunciation: "NGOO-vah yeh-koo-TAHN-gah",
    note: "Literally 'the first hour'",
  },
  {
    shona: "Nguva mbiri",
    english: "2 o'clock",
    pronunciation: "NGOO-vah MBEE-ree",
    note: "Two hours",
  },
  {
    shona: "Nguva nhatu",
    english: "3 o'clock",
    pronunciation: "NGOO-vah NHAH-too",
    note: "Three hours",
  },
  {
    shona: "Nguva ina",
    english: "4 o'clock",
    pronunciation: "NGOO-vah EE-nah",
    note: "Four hours",
  },
  {
    shona: "Nguva shanu",
    english: "5 o'clock",
    pronunciation: "NGOO-vah SHAH-noo",
    note: "Five hours",
  },
  {
    shona: "Nguva tanhatu",
    english: "6 o'clock",
    pronunciation: "NGOO-vah tahn-HAH-too",
    note: "Six hours",
  },
  {
    shona: "Nguva nomwe",
    english: "7 o'clock",
    pronunciation: "NGOO-vah NOH-mweh",
    note: "Seven hours",
  },
  {
    shona: "Nguva sere",
    english: "8 o'clock",
    pronunciation: "NGOO-vah SEH-reh",
    note: "Eight hours",
  },
  {
    shona: "Nguva pfumbamwe",
    english: "9 o'clock",
    pronunciation: "NGOO-vah pfoom-BAH-mweh",
    note: "Nine hours",
  },
  {
    shona: "Nguva gumi",
    english: "10 o'clock",
    pronunciation: "NGOO-vah GOO-mee",
    note: "Ten hours",
  },
  {
    shona: "Nguva gumi nerimwe",
    english: "11 o'clock",
    pronunciation: "NGOO-vah GOO-mee neh-RIM-weh",
    note: "Eleven hours",
  },
  {
    shona: "Nguva gumi napiri",
    english: "12 o'clock",
    pronunciation: "NGOO-vah GOO-mee nah-PEE-ree",
    note: "Twelve hours — noon or midnight",
  },
];

const timeExpressions = [
  {
    shona: "Iri nguva ngani?",
    english: "What time is it?",
    pronunciation: "EE-ree NGOO-vah ngah-NEE",
  },
  {
    shona: "Nguva yakwana",
    english: "On the hour / exactly",
    pronunciation: "NGOO-vah yah-KWAH-nah",
  },
  {
    shona: "Hafu yenguva",
    english: "Half past",
    pronunciation: "HAH-foo yeh-NGOO-vah",
  },
  {
    shona: "Matsimba / Maminiti",
    english: "Minutes",
    pronunciation: "mah-TSEEM-bah / mah-mee-NEE-tee",
  },
  {
    shona: "Mangwanani",
    english: "Morning",
    pronunciation: "mahn-gwah-NAH-nee",
  },
  {
    shona: "Masikati",
    english: "Afternoon",
    pronunciation: "mah-see-KAH-tee",
  },
  {
    shona: "Manheru",
    english: "Evening",
    pronunciation: "mahn-HEH-roo",
  },
  {
    shona: "Usiku",
    english: "Night",
    pronunciation: "oo-SEE-koo",
  },
];

const culturalNotes = [
  {
    title: "Traditional time by the sun",
    body: "Before clocks were widespread, Shona communities told time entirely by the position of the sun (rutivi rwezuva). Sunrise (mangwanani), midday heat (masikati), late afternoon, and sunset were the key reference points. Shona time expressions like masikati (when the sun is strong — afternoon) preserve this sun-based heritage.",
  },
  {
    title: "African time",
    body: "'African time' is a well-known and genuinely real cultural phenomenon across Zimbabwe and many African countries — arriving significantly later than the stated time. This is not laziness but a different understanding of punctuality: in informal and social contexts, precise clock-time is less important than being present and participating. Formal, professional, and church settings have stricter punctuality expectations.",
  },
  {
    title: "How to ask and tell the time",
    body: "The standard question is 'Iri nguva ngani?' (What time is it?). To answer, say 'Iri nguva [number]' — for example, 'Iri nguva nhatu' (It is 3 o'clock). For half past, say 'Iri hafu yenguva nhatu' (It is half past three). For specific minutes, use 'matsimba' or the loanword 'maminiti': 'Iri nguva nhatu nemaminiti gumi' (It is 3:10).",
  },
  {
    title: "Times of day in conversation",
    body: "Shona greetings change with the time of day: 'Mangwanani' (good morning), 'Masikati' (good afternoon), 'Manheru' (good evening). These are not just hellos — they orient the conversation in time. Using the correct greeting shows awareness and cultural competence. Saying 'Mangwanani' in the afternoon will get a gentle correction.",
  },
];

export default function TellingTimePage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Telling Time
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nguva
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona clock time is straightforward once you know the numbers —
            hours are simply <strong>nguva</strong> followed by the number. But
            time in Shona culture carries deeper meaning: the time of day
            determines your greeting, and punctuality has different cultural
            weight in different contexts.
          </p>
        </div>

        {/* Hours Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Hours (1–12)
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
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {hoursVocabulary.map((word, i) => (
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
                  <td className="px-4 py-3 hidden lg:table-cell text-[var(--color-muted)] text-xs italic">
                    {word.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Time Expressions */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Time Expressions
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
              {timeExpressions.map((expr, i) => (
                <tr
                  key={expr.shona}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {expr.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {expr.english}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell font-mono text-xs">
                    {expr.pronunciation}
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
            href="/courses/time/seasons"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Seasons
          </Link>
          <Link
            href="/courses/time/past-future"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Past &amp; Future →
          </Link>
        </div>
      </div>
    </div>
  );
}
