import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Months of the Year in Shona | Duramazwi",
  description:
    "Learn the twelve months in Shona — names rooted in agriculture, rainfall, animals, and the natural cycles of Zimbabwe.",
};

const vocabulary = [
  {
    number: 1,
    english: "January",
    shona: "Ndira",
    meaning: "Meaning uncertain — possibly from Portuguese",
    season: "Rainy (peak)",
  },
  {
    number: 2,
    english: "February",
    shona: "Kukadzi",
    meaning: "The feminine/female month",
    season: "Rainy",
  },
  {
    number: 3,
    english: "March",
    shona: "Kurume",
    meaning: "The male month",
    season: "Late rains",
  },
  {
    number: 4,
    english: "April",
    shona: "Kubvumbi",
    meaning: "Month of rains / germination",
    season: "End of rains",
  },
  {
    number: 5,
    english: "May",
    shona: "Chivabvu",
    meaning: "Month of corn husks / drying maize",
    season: "Harvest / cool",
  },
  {
    number: 6,
    english: "June",
    shona: "Chikumi",
    meaning: "The sixth",
    season: "Winter",
  },
  {
    number: 7,
    english: "July",
    shona: "Chikunguru",
    meaning: "Uncertain — possibly a place or ancestor name",
    season: "Winter (coldest)",
  },
  {
    number: 8,
    english: "August",
    shona: "Nyamavhuvhu",
    meaning: "Month of wind",
    season: "Dry / windy",
  },
  {
    number: 9,
    english: "September",
    shona: "Gunyana",
    meaning: "Month of young animals / calves",
    season: "Spring / hot",
  },
  {
    number: 10,
    english: "October",
    shona: "Gumiguru",
    meaning: "Month of pumpkins",
    season: "Hot / pre-rain",
  },
  {
    number: 11,
    english: "November",
    shona: "Mbudzi",
    meaning: "Goat month — goats give birth",
    season: "First rains",
  },
  {
    number: 12,
    english: "December",
    shona: "Zvita",
    meaning: "Things have arrived — crops, rain, abundance",
    season: "Rainy / festive",
  },
];

const culturalNotes = [
  {
    title: "Names rooted in nature and agriculture",
    body: "Unlike English month names (which honour Roman emperors and gods), Shona month names reflect the natural and agricultural world: corn husks in May (Chivabvu), pumpkins in October (Gumiguru), goats giving birth in November (Mbudzi), and the triumphant arrival of rain and crops in December (Zvita — 'things have arrived'). Each name is a window into Shona seasonal life.",
  },
  {
    title: "The rain calendar",
    body: "The rainy season (November through March) is the organizing principle of the Shona agricultural calendar. It determines when to plant, when to weed, and when to harvest. A good rainy season means food security and prosperity — a poor one means hardship. This is why month names in the rainy season carry such weight.",
  },
  {
    title: "Kukadzi and Kurume — the gendered months",
    body: "February (Kukadzi) means 'the female month' and March (Kurume) means 'the male month'. These gendered pairs appear in several Shona naming traditions and reflect the complementary nature of the seasons — February is softer, wetter, nurturing; March brings the transition toward drying and harvest.",
  },
  {
    title: "Organising life around seasons, not dates",
    body: "Many Shona communities — especially in rural areas — still organise their lives primarily around seasons and agricultural events rather than specific calendar dates. Elders may not know their exact birth date but can tell you precisely which season they were born, which planting cycle, or whether a drought had occurred that year.",
  },
];

export default function MonthsPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Months of the Year
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mwedzi wegore
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona month names are a compact history of life in Zimbabwe — rain,
            harvest, animals, wind, and abundance. Learning them gives you far
            more than calendar vocabulary. You gain an understanding of how
            Shona people have always measured the year.
          </p>
        </div>

        {/* Vocabulary Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Twelve Months
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Month</th>
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Meaning / Origin
                </th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Season
                </th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.english}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.english}
                  </td>
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs italic">
                    {word.meaning}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-[var(--color-muted)] text-xs">
                    {word.season}
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
            href="/courses/time/days"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Days of the Week
          </Link>
          <Link
            href="/courses/time/seasons"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Seasons →
          </Link>
        </div>
      </div>
    </div>
  );
}
