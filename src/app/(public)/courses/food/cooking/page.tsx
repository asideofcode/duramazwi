import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooking Vocabulary in Shona | Duramazwi",
  description:
    "Learn Shona verbs and nouns for cooking — kubika, kumutsa, kuchemera — and the cultural traditions around fire, pots, and who cooks in a Shona household.",
};

const vocabulary = [
  {
    shona: "Kubika",
    english: "To cook",
    pronunciation: "koo-BEE-kah",
    example: "Ndinobika sadza mangwanani.",
    exampleTranslation: "I cook sadza in the morning.",
  },
  {
    shona: "Kuisa pamoto",
    english: "To put on fire / to put on the stove",
    pronunciation: "koo-EE-sah pah-MOH-toh",
    example: "Isa poto pamoto.",
    exampleTranslation: "Put the pot on the fire.",
  },
  {
    shona: "Kumutsa",
    english: "To stir",
    pronunciation: "koo-MOOT-sah",
    example: "Mutsa sadza kuti irege kupisa.",
    exampleTranslation: "Stir the sadza so it does not burn.",
  },
  {
    shona: "Kuisa mvura",
    english: "To add water",
    pronunciation: "koo-EE-sah MVOO-rah",
    example: "Isa mvura mupoto.",
    exampleTranslation: "Add water to the pot.",
  },
  {
    shona: "Kutisa",
    english: "To let simmer / to keep on low heat",
    pronunciation: "koo-TEE-sah",
    example: "Tisa nyama kweawa imwe.",
    exampleTranslation: "Let the meat simmer for one hour.",
  },
  {
    shona: "Kurasa moto",
    english: "To remove from fire / to take off the heat",
    pronunciation: "koo-RAH-sah MOH-toh",
    example: "Rasa poto pamoto zvino.",
    exampleTranslation: "Take the pot off the fire now.",
  },
  {
    shona: "Kuchemera",
    english: "To serve / pour out (food)",
    pronunciation: "koo-cheh-MEH-rah",
    example: "Chemereka sadza pane.",
    exampleTranslation: "Serve the sadza on the plate.",
  },
  {
    shona: "Kugadzira",
    english: "To prepare food",
    pronunciation: "koo-gah-DZEE-rah",
    example: "Ndinogadzira chikafu masikati.",
    exampleTranslation: "I prepare food at midday.",
  },
  {
    shona: "Moto",
    english: "Fire",
    pronunciation: "MOH-toh",
    example: "Moto une simba nhasi.",
    exampleTranslation: "The fire is strong today.",
  },
  {
    shona: "Mabwe",
    english: "Cooking stones (the three-stone fire)",
    pronunciation: "mah-BWEH",
    example: "Poto inogara pamabwe atatu.",
    exampleTranslation: "The pot sits on three cooking stones.",
  },
  {
    shona: "Poto",
    english: "Cooking pot",
    pronunciation: "POH-toh",
    example: "Poto yakakura inobikira mhuri yose.",
    exampleTranslation: "The big pot cooks for the whole family.",
  },
  {
    shona: "Kapu",
    english: "Cup / ladle / scoop",
    pronunciation: "KAH-poo",
    example: "Shandisa kapu kuchemera muto.",
    exampleTranslation: "Use the ladle to serve the gravy.",
  },
];

const culturalNotes = [
  {
    title: "Three stones — the original stove",
    body: "The traditional Shona cooking setup is three stones (mabwe atatu) arranged in a triangle, with a fire built between them. The pot (poto) balances on top. This method has been used for centuries and continues in rural and peri-urban homes today. The three stones are deliberately uneven in size so the pot tilts towards the cook for easier stirring. When Shona people describe cooking from a young age, the memory of the three-stone fire is nearly always present.",
  },
  {
    title: "Who cooks — hierarchy in the kitchen",
    body: "In a traditional Shona household, the eldest woman of the household is responsible for the cooking and directs its preparation. A younger daughter-in-law (muroora) helps but follows the senior woman's lead. She typically wakes earliest to start the fire, fetches water, and prepares the morning meal. This arrangement is not about servitude — it is about the muroora learning the household's preferences and earning her place in the family through demonstrated care.",
  },
  {
    title: "Modern kitchens, unchanged sadza technique",
    body: "While gas and electric stoves have replaced open fires in most urban Zimbabwean homes, the technique for making sadza has not changed. The maize meal is added to boiling water, stirred continuously to prevent lumps, then the heat is turned down to simmer until it thickens to the correct consistency. A good sadza should pull cleanly from the pot walls and hold its shape when turned out. Knowing how to make sadza is still considered essential — regardless of where you grew up.",
  },
];

export default function CookingPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Cooking Vocabulary
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mazwi Ekubika
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Cooking vocabulary in Shona goes beyond recipes — it is embedded in
            the rhythms of daily life. From the moment the fire is lit before
            sunrise to the careful stirring of sadza, these words carry the
            weight of generations of household knowledge. Master these verbs
            and you can follow, describe, and take part in any Shona kitchen.
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
            href="/courses/food/ingredients"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Ingredients
          </Link>
          <Link
            href="/courses/food/ordering"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Ordering Food →
          </Link>
        </div>
      </div>
    </div>
  );
}
