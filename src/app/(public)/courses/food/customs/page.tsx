import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eating Customs in Shona | Duramazwi",
  description:
    "Learn the customs around eating in Shona culture — who eats first, how to thank the cook, and what to say after a meal.",
};

const vocabulary = [
  {
    shona: "Kudya",
    english: "To eat",
    pronunciation: "KOO-dyah",
    example: "Ndinodya masikati.",
    exampleTranslation: "I eat at midday.",
  },
  {
    shona: "Kunwa",
    english: "To drink",
    pronunciation: "KOON-wah",
    example: "Ndinwa mvura.",
    exampleTranslation: "I drink water.",
  },
  {
    shona: "Kusanganisira",
    english: "To share / to mix together",
    pronunciation: "koo-san-gah-nee-SEE-rah",
    example: "Tinodya tichisanganisira.",
    exampleTranslation: "We eat while sharing together.",
  },
  {
    shona: "Ndatenda",
    english: "Thank you",
    pronunciation: "ndah-TEH-ndah",
    example: "Ndatenda zvokudya.",
    exampleTranslation: "Thank you for the food.",
  },
  {
    shona: "Zvakasimbisa",
    english: "It was strengthening (said after eating)",
    pronunciation: "zvah-kah-seem-BEE-sah",
    example: "Zvakasimbisa — wakabika zvakanaka.",
    exampleTranslation: "It was strengthening — you cooked well.",
  },
  {
    shona: "Waita basa",
    english: "You did good work (compliment to the cook)",
    pronunciation: "wah-EE-tah BAH-sah",
    example: "Waita basa, chikafu chakanaka.",
    exampleTranslation: "You did good work, the food was great.",
  },
  {
    shona: "Nyange zvazvo",
    english: "Even so / thank you anyway",
    pronunciation: "NYAHN-geh ZVAH-zvoh",
    example: "Nyange zvazvo, ndatenda zvokudya.",
    exampleTranslation: "Thank you anyway for the food.",
  },
  {
    shona: "Kunyengetedza",
    english: "To serve in order of seniority",
    pronunciation: "koo-nyehn-geh-TEH-dzah",
    example: "Vanhu vakuru vanoserviwa kutanga.",
    exampleTranslation: "Elders are served first.",
  },
];

const culturalNotes = [
  {
    title: "Elders and guests are always served first",
    body: "In a Shona household, food is not distributed randomly — it follows a strict order of seniority. Guests and elders (vakuru) are served first, and the eldest present receives the first and best portion. This is not merely politeness — it is a fundamental expression of respect (kuremekedzera). Children eating before adults, or a younger person helping themselves before an elder, would be considered a serious breach of conduct.",
  },
  {
    title: "Men and women may eat separately",
    body: "In traditional Shona households, men and women often eat in separate groups. The men eat together at the dare (courtyard), and women and children eat together in or near the kitchen. This is not exclusion — it reflects the social structure of traditional Shona life, where gender roles had distinct spaces. In urban and modern households this practice has largely dissolved, but it remains common at rural gatherings and ceremonies.",
  },
  {
    title: "Thanking the cook is essential",
    body: "After a meal in a Shona home, it is expected that you thank the cook specifically. 'Ndatenda' (thank you) is the minimum. 'Waita basa' (you did good work) and 'zvakasimbisa' (it was strengthening) are warm, culturally rich compliments. Eating and leaving without acknowledgement is considered ungrateful. These phrases are small but they carry significant social weight — they honour the labour and care that went into the meal.",
  },
  {
    title: "Food is always offered to any visitor",
    body: "Even if a visitor has just arrived unexpectedly, or if there is barely enough food, you offer what you have. Not offering food to someone who enters a Shona home would be a serious failure of hospitality. The visitor may decline — and it is polite to decline once before accepting — but the offer must be made. This is not optional social behaviour; it is a core expression of Ubuntu (humaneness and community).",
  },
];

export default function CustomsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/food"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Food &amp; Drink Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 5
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Eating Customs
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Tsika Dzekudya
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Eating in Shona culture is a social act with rules, rhythms, and
            obligations. Knowing what to say after a meal, who to serve first,
            and how to acknowledge the cook are not merely polite gestures —
            they are expressions of identity and relationship. These customs
            carry the values of the culture in every mouthful.
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
            href="/courses/food/ordering"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Ordering Food
          </Link>
          <Link
            href="/courses/food/hospitality"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Hospitality Traditions →
          </Link>
        </div>
      </div>
    </div>
  );
}
