import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ordering Food in Shona | Duramazwi",
  description:
    "Learn how to ask for food in Shona — ndinoda, ndipei, marii mutengo, and the cultural difference between ordering at a tuck shop and eating in a home.",
};

const vocabulary = [
  {
    shona: "Ndinoda",
    english: "I want",
    pronunciation: "ndee-NOH-dah",
    example: "Ndinoda sadza nenyama.",
    exampleTranslation: "I want sadza with meat.",
  },
  {
    shona: "Ndipei",
    english: "Give me",
    pronunciation: "ndee-PEH-ee",
    example: "Ndipei bota, ndapota.",
    exampleTranslation: "Give me porridge, please.",
  },
  {
    shona: "Ndinokumbira",
    english: "I request / please (polite ask)",
    pronunciation: "ndee-noh-koom-BEE-rah",
    example: "Ndinokumbira mvura.",
    exampleTranslation: "I would like water, please.",
  },
  {
    shona: "Sadza nenyama",
    english: "Sadza with meat",
    pronunciation: "SAH-dzah neh-NYAH-mah",
    example: "Ndinoda sadza nenyama nevhejitabuzi.",
    exampleTranslation: "I want sadza with meat and vegetables.",
  },
  {
    shona: "Marii mutengo?",
    english: "What is the price?",
    pronunciation: "mah-REE moo-TEHN-goh",
    example: "Marii mutengo wesadza?",
    exampleTranslation: "What is the price of the sadza?",
  },
  {
    shona: "Handidi",
    english: "I don't want",
    pronunciation: "hahn-DEE-dee",
    example: "Handidi matemba nhasi.",
    exampleTranslation: "I don't want dried fish today.",
  },
  {
    shona: "Zvakwana",
    english: "Enough / that is sufficient",
    pronunciation: "zvah-KWAH-nah",
    example: "Zvakwana, ndatenda.",
    exampleTranslation: "That's enough, thank you.",
  },
  {
    shona: "Zvimwe",
    english: "More / other / another",
    pronunciation: "ZVEE-mweh",
    example: "Ndinoda zvimwe sadza.",
    exampleTranslation: "I want more sadza.",
  },
  {
    shona: "Ndinokuchema",
    english: "I am hungry (informal)",
    pronunciation: "ndee-noh-koo-CHEH-mah",
    example: "Ndinokuchema — handina kudya nhasi.",
    exampleTranslation: "I am hungry — I have not eaten today.",
  },
  {
    shona: "Ndinenzara",
    english: "I am hungry (formal)",
    pronunciation: "ndee-neh-NZAH-rah",
    example: "Ndinenzara zvikuru.",
    exampleTranslation: "I am very hungry.",
  },
  {
    shona: "Ndinegava",
    english: "I am thirsty",
    pronunciation: "ndee-neh-GAH-vah",
    example: "Ndinegava — ndipe mvura.",
    exampleTranslation: "I am thirsty — give me water.",
  },
];

const culturalNotes = [
  {
    title: "Ordering at a tuck shop",
    body: "At a roadside food stall or tuck shop (zvikiricho), the interaction is informal. Pointing at the food on display, saying 'ndipei' (give me), and stating the item is perfectly acceptable. Many tuck shops display their prices (mutengo), but asking 'marii mutengo?' is normal. Payment is typically made before or alongside serving. This is a practical, commercial transaction — the social rules are relaxed compared to eating in a home.",
  },
  {
    title: "You do not order food in a Shona home",
    body: "When you are a guest in a Shona home, you eat what is served. There is no menu. Asking 'what do you have?' or attempting to customise the meal is considered unusual or even rude. The correct response when food is placed before you is to eat it gratefully and thank the cook. If you have dietary restrictions, the polite approach is to communicate this quietly before the meal is prepared — not at the table.",
  },
  {
    title: "Refusing food is a serious matter",
    body: "In a Shona home, being offered food and saying 'no' sends a social message. It may imply that something is wrong with the food, that you distrust the host, or that you are angry with them. If you genuinely cannot eat, the polite phrase is 'zvakwana, ndatenda' (enough, thank you) accompanied by an explanation — 'handina nzara' (I'm not hungry) or 'ndabuda' (I've already eaten). Even so, the host will often insist at least once before accepting.",
  },
];

export default function OrderingPage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Ordering Food
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kukumbira Zvokudya
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            How you ask for food in Shona depends entirely on where you are. At
            a tuck shop or market, you use direct phrases. In a home, you do
            not order at all — you receive. This module gives you the vocabulary
            for both situations, plus the cultural knowledge to know which
            applies.
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
            href="/courses/food/cooking"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Cooking Vocabulary
          </Link>
          <Link
            href="/courses/food/customs"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Eating Customs →
          </Link>
        </div>
      </div>
    </div>
  );
}
