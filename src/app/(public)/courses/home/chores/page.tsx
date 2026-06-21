import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Household Chores in Shona | Duramazwi",
  description:
    "Learn Shona verbs for sweeping, fetching water, washing dishes, cultivating, and more — plus the cultural context of chores in Shona family life.",
};

const vocabulary = [
  {
    shona: "Kushambidza",
    english: "To wash / to clean",
    pronunciation: "koo-shahm-BEE-dzah",
    example: "Kushambidza imba ndeimba basa.",
    exampleTranslation: "Cleaning the house is a household task.",
  },
  {
    shona: "Kukuya",
    english: "To sweep",
    pronunciation: "koo-KOO-yah",
    example: "Kukuya pane mangwanani.",
    exampleTranslation: "Sweeping the floor in the morning.",
  },
  {
    shona: "Kutakura mvura",
    english: "To fetch / carry water",
    pronunciation: "koo-tah-KOO-rah MVOO-rah",
    example: "Vasikana vanoenda kutakura mvura.",
    exampleTranslation: "The girls go to fetch water.",
  },
  {
    shona: "Kutaura dura",
    english: "To clean the granary",
    pronunciation: "koo-TAH-oo-rah DOO-rah",
    example: "Kutaura dura kunoitwa kuchirimo.",
    exampleTranslation: "Cleaning the granary is done in spring.",
  },
  {
    shona: "Kurima",
    english: "To cultivate / to hoe",
    pronunciation: "koo-REE-mah",
    example: "Vana vakomana vanorima munda.",
    exampleTranslation: "The boys cultivate the field.",
  },
  {
    shona: "Kusuka",
    english: "To wash dishes",
    pronunciation: "koo-SOO-kah",
    example: "Ndiri kusuka midziyo.",
    exampleTranslation: "I am washing the dishes.",
  },
  {
    shona: "Kugarika",
    english: "To tidy up / to arrange",
    pronunciation: "koo-gah-REE-kah",
    example: "Garika nzvimbo yekugara.",
    exampleTranslation: "Tidy up the living room.",
  },
  {
    shona: "Kubata",
    english: "To carry / to handle",
    pronunciation: "koo-BAH-tah",
    example: "Batai zvipfuko.",
    exampleTranslation: "Carry the bundles.",
  },
  {
    shona: "Kukanya",
    english: "To knead dough",
    pronunciation: "koo-KAH-nyah",
    example: "Amai vari kukanya bota.",
    exampleTranslation: "Mother is kneading the porridge mixture.",
  },
  {
    shona: "Kubatanidza",
    english: "To fold / to collect together",
    pronunciation: "koo-bah-tah-NEE-dzah",
    example: "Batanidza machira.",
    exampleTranslation: "Fold the blankets.",
  },
  {
    shona: "Kugeza",
    english: "To wash oneself / to bathe",
    pronunciation: "koo-GEH-zah",
    example: "Vana vanogeza mangwanani.",
    exampleTranslation: "The children bathe in the morning.",
  },
];

const culturalNotes = [
  {
    title: "Children and chores — socialisation through work",
    body: "In Shona culture, children are given household chores from a very young age — sometimes as young as four or five. This is not considered exploitation but a core part of socialisation (kurera). A child who does not contribute to the household is considered poorly raised. Girls might help with cooking, sweeping, and fetching water. Boys help with fetching firewood, tending livestock, and field work. Chores teach children their roles, their capabilities, and their responsibility to the family group.",
  },
  {
    title: "Fetching water — a daily ritual",
    body: "Before piped water reached most rural homes, kutakura mvura (fetching water) was a daily necessity. Girls and women walked to the nearest stream, borehole, or well — sometimes kilometres away — carrying 20-litre containers on their heads. The walk itself was a social occasion: women and girls talked, shared news, and built community. Today, many rural homes still have limited piped access, and water-fetching remains part of daily life for millions of Zimbabwean households.",
  },
  {
    title: "Gendered labour and collective work",
    body: "Traditional Shona household labour had clear gender divisions: women and girls managed the home, cooking, and water; men and boys managed livestock, fields, and building. But all chores were understood as collective — no family member worked entirely alone. Neighbours helped each other during harvests (nhimbe), and extended family members shared major tasks. This collectivism meant that the concept of 'my chores only' did not exist — you worked for the household, and the household worked for you.",
  },
  {
    title: "The importance of early rising",
    body: "A well-managed Shona home begins before sunrise. Sweeping (kukuya), lighting the fire, and beginning breakfast preparations happen in the dark hours before dawn. A household that sleeps late is noted unfavourably. The phrase 'kuka mangwana' (waking in the morning) carries connotations of diligence and preparedness. Guests who stay over observe that they are typically woken early — not to be rude, but because the household day starts early and involves everyone.",
  },
];

export default function ChoresPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Household Chores
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mabasa Eimba
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, household work (mabasa) is not a burden assigned
            to individuals — it is the shared effort that holds the family
            together. Children learn chores young, neighbours help each other
            at harvest, and no task belongs to one person alone. These verbs
            are the language of that daily, collective labour.
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
            href="/courses/home/furniture"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Furniture &amp; Objects
          </Link>
          <Link
            href="/courses/home/routines"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Daily Routines →
          </Link>
        </div>
      </div>
    </div>
  );
}
