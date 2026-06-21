import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasons in Shona | Duramazwi",
  description:
    "Learn the Shona words for seasons — the rainy season, winter, and spring — and why the agricultural calendar shapes Shona life.",
};

const vocabulary = [
  {
    shona: "Zhizha",
    english: "Summer / Rainy season",
    pronunciation: "ZHEE-zhah",
    detail: "November – March",
    example: "Zhizha inotipa mvura.",
    exampleTranslation: "The rainy season gives us rain.",
  },
  {
    shona: "Chirimo",
    english: "Spring / Dry season transition",
    pronunciation: "chee-REE-moh",
    detail: "August – October",
    example: "Chirimo inotanga muna Nyamavhuvhu.",
    exampleTranslation: "Spring begins in August.",
  },
  {
    shona: "Chando",
    english: "Winter / Cold season",
    pronunciation: "CHAHN-doh",
    detail: "June – July",
    example: "Chando chinodhisa.",
    exampleTranslation: "Winter is cold.",
  },
  {
    shona: "Kugumhana kwemwaka",
    english: "Change of season",
    pronunciation: "koo-goom-HAH-nah kweh-MWAH-kah",
    detail: "The seasonal transition",
    example: "Kugumhana kwemwaka kunoita ngozi.",
    exampleTranslation: "The change of seasons can cause illness.",
  },
  {
    shona: "Mvura",
    english: "Rain",
    pronunciation: "MVOO-rah",
    detail: "Also used for water in some contexts",
    example: "Mvura yauya!",
    exampleTranslation: "The rain has come!",
  },
  {
    shona: "Kutonhora",
    english: "To be cold",
    pronunciation: "koo-tohn-HOH-rah",
    detail: "Verb — to feel cold",
    example: "Ndinotonhora mangwanani.",
    exampleTranslation: "I am cold in the morning.",
  },
  {
    shona: "Kupisa",
    english: "To be hot",
    pronunciation: "koo-PEE-sah",
    detail: "Verb — to be hot",
    example: "Zuva rinopisa muna Gumiguru.",
    exampleTranslation: "The sun is hot in October.",
  },
  {
    shona: "Mhepo",
    english: "Wind",
    pronunciation: "MHEH-poh",
    detail: "Also used metaphorically for spirit/breeze",
    example: "Mhepo iri kuridza nhasi.",
    exampleTranslation: "The wind is blowing today.",
  },
  {
    shona: "Rutivi rwezuva",
    english: "Direction of the sun",
    pronunciation: "roo-TEE-vee rweh-ZOO-vah",
    detail: "Used for time-telling by sun position",
    example: "Ndinoziva nguva narutivi rwezuva.",
    exampleTranslation: "I know the time by the direction of the sun.",
  },
  {
    shona: "Gororo",
    english: "Harvest season",
    pronunciation: "goh-ROH-roh",
    detail: "Late April – May — the gathering of crops",
    example: "Gororo rinotifadza.",
    exampleTranslation: "The harvest season makes us happy.",
  },
];

const culturalNotes = [
  {
    title: "The rainy season is the most important",
    body: "Zhizha (the rainy season, November–March) is the axis around which Shona agricultural life revolves. The arrival of the first rains is celebrated — it signals the time to plant. A failed rainy season means crop failure, food insecurity, and hardship. Songs, proverbs, and prayers across Shona culture reference the rains. When someone says 'mvura yauya' (the rain has come), there is joy in the saying.",
  },
  {
    title: "Winter is short but significant",
    body: "Chando (winter/cold season, June–July) is brief by global standards but very real. Cold snaps in July can be severe in highland Zimbabwe — particularly in Mutare and the eastern districts. Blankets become essential, fires are lit, and people layer their clothing. The idiom 'kutonhora kweChando' (the coldness of winter) is used to describe any kind of cold — emotional or physical.",
  },
  {
    title: "Proverbs and songs full of seasons",
    body: "Shona oral tradition — proverbs (tsumo), songs, and stories — is saturated with seasonal imagery. 'Makaka hazvimeri muna Chando' (creeping vines don't grow in winter) is a proverb about timing and patience. Understanding seasons unlocks this layer of the culture. When an elder uses a seasonal metaphor, you will understand what they mean.",
  },
  {
    title: "Telling time by the sun",
    body: "Traditional Shona time-telling relied on the position and direction of the sun (rutivi rwezuva) rather than clocks. Sunrise, midday sun, and sunset were the key reference points. The phrase for afternoon in Shona — masikati (when the sun is at its strongest) — carries this history. Even today, in rural areas, many people orient their day by the sun's position.",
  },
];

export default function SeasonsPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Seasons
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mwaka
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Zimbabwe has three main seasons — a long rainy season
            (Zhizha), a dry and windy spring transition (Chirimo), and a short
            but cold winter (Chando). Each shapes life, language, and culture
            in ways that go far beyond just temperature. Learn these words and
            you learn how Shona people feel the year.
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
                    <span>{word.english}</span>
                    <span className="block text-xs text-[var(--color-muted)] mt-0.5">
                      {word.detail}
                    </span>
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
            href="/courses/time/months"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Months
          </Link>
          <Link
            href="/courses/time/telling-time"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Telling Time →
          </Link>
        </div>
      </div>
    </div>
  );
}
