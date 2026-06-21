import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Routines in Shona | Duramazwi",
  description:
    "Learn Shona words for waking up, eating breakfast, going to school, returning home, and the rhythms of a Shona family's daily life.",
};

const vocabulary = [
  {
    shona: "Kumuka",
    english: "To wake up",
    pronunciation: "koo-MOO-kah",
    example: "Ndinomuka mangwanani.",
    exampleTranslation: "I wake up in the morning.",
  },
  {
    shona: "Kugeza",
    english: "To wash / to bathe",
    pronunciation: "koo-GEH-zah",
    example: "Ndinogeza mangwanani.",
    exampleTranslation: "I bathe in the morning.",
  },
  {
    shona: "Kudya mambakwedza",
    english: "To eat breakfast",
    pronunciation: "KOO-dyah mahm-bah-KWEH-dzah",
    example: "Tinodya mambakwedza pamwechete.",
    exampleTranslation: "We eat breakfast together.",
  },
  {
    shona: "Kuenda kuchikoro",
    english: "To go to school",
    pronunciation: "koo-EH-ndah koo-chee-KOH-roh",
    example: "Vana vanoenda kuchikoro mangwanani.",
    exampleTranslation: "The children go to school in the morning.",
  },
  {
    shona: "Kudzoka",
    english: "To return home",
    pronunciation: "koo-DZOH-kah",
    example: "Ndinodzioka kumba masikati.",
    exampleTranslation: "I return home at midday.",
  },
  {
    shona: "Kudya masikati",
    english: "To eat lunch",
    pronunciation: "KOO-dyah mah-see-KAH-tee",
    example: "Tinodya masikati nenzara.",
    exampleTranslation: "We eat lunch hungrily.",
  },
  {
    shona: "Kushanda",
    english: "To work",
    pronunciation: "koo-SHAH-ndah",
    example: "Baba vanoshanda mudhorobha.",
    exampleTranslation: "Father works in town.",
  },
  {
    shona: "Kutamba",
    english: "To play",
    pronunciation: "koo-TAHM-bah",
    example: "Vana vanotamba mushure mekuchikoro.",
    exampleTranslation: "Children play after school.",
  },
  {
    shona: "Kunovaka",
    english: "To go to sleep",
    pronunciation: "koo-noh-VAH-kah",
    example: "Vana vanonovaka mangava manheru.",
    exampleTranslation: "The children go to sleep early in the evening.",
  },
  {
    shona: "Usiku",
    english: "Night",
    pronunciation: "oo-SEE-koo",
    example: "Usiku tinodya pamwechete.",
    exampleTranslation: "At night we eat together.",
  },
  {
    shona: "Pamberi",
    english: "Morning — first thing / early",
    pronunciation: "pahm-BEH-ree",
    example: "Pamberi moto unaitwa.",
    exampleTranslation: "First thing in the morning the fire is made.",
  },
  {
    shona: "Mangwana",
    english: "Tomorrow",
    pronunciation: "mahng-WAH-nah",
    example: "Mangwana tinoenda kushopping.",
    exampleTranslation: "Tomorrow we are going shopping.",
  },
];

const culturalNotes = [
  {
    title: "Waking before sunrise — the early household",
    body: "In most Zimbabwean households, especially rural ones, the day begins well before sunrise — often between 4 and 5am. The first person awake (usually the senior woman or muroora) starts the fire, begins heating water, and prepares for morning chores. This early rising is not about productivity in the Western sense — it is about fulfilling your role before the household needs you. A household that wakes late is considered poorly managed. Children are expected to rise with the household and contribute immediately.",
  },
  {
    title: "The evening meal as family anchor",
    body: "While breakfast and lunch may be informal or staggered, the evening meal (kudya manheru) is a family gathering point. When possible, everyone eats together — this is when the family reconnects after the day's work and school. It is a time for conversation, for elders to share wisdom, and for children to listen. The meal is served by the women of the household, and the order of serving follows seniority. In many families, this meal is the most important shared moment of the day.",
  },
  {
    title: "Education — the family's greatest investment",
    body: "Going to school (kuenda kuchikoro) is among the most valued activities in Shona family life. Zimbabwean families — even in poverty — make significant sacrifices to pay school fees. The phrase 'kushanda kwechikoro' (school work) carries great weight: it is the child's job, the equivalent of the parent's field work or paid employment. A child who performs well at school brings honour to the family. The connection between education and escape from poverty is deeply understood across generations.",
  },
];

export default function RoutinesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/home"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Home &amp; Household Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Daily Routines
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mabasa Ezuva Nezuva
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A Shona day follows a clear and purposeful rhythm — from the fire
            lit before sunrise to the family gathering at the evening meal.
            These verbs and time words are the backbone of daily conversation:
            describing your day, asking about someone's routine, or simply
            connecting the activities of household life to the language that
            names them.
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

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="flex flex-col gap-6 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
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

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/home/chores"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Household Chores
          </Link>
          <Link
            href="/courses/home/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Home Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
