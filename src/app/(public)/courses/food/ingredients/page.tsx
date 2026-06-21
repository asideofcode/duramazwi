import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingredients in Shona | Duramazwi",
  description:
    "Learn Shona words for rice, potatoes, pumpkin leaves, groundnuts, chicken, fish, and the building blocks of Shona cooking.",
};

const vocabulary = [
  {
    shona: "Mupunga",
    english: "Rice",
    pronunciation: "moo-POON-gah",
    example: "Mupunga unobikwa nemvura.",
    exampleTranslation: "Rice is cooked with water.",
  },
  {
    shona: "Mbatata",
    english: "Potato",
    pronunciation: "mbah-TAH-tah",
    example: "Mbatata dzakabikwa dzakanaka.",
    exampleTranslation: "The cooked potatoes are nice.",
  },
  {
    shona: "Muriwo wemapinati",
    english: "Spinach",
    pronunciation: "moo-REE-woh weh-mah-pee-NAH-tee",
    example: "Muriwo wemapinati une simba.",
    exampleTranslation: "Spinach is nutritious (has strength).",
  },
  {
    shona: "Nyimo",
    english: "Bambara groundnuts",
    pronunciation: "NYEE-moh",
    example: "Nyimo dzinobikwa zvakanaka.",
    exampleTranslation: "Bambara groundnuts cook well.",
  },
  {
    shona: "Muriwo wepamberi",
    english: "Pumpkin leaves",
    pronunciation: "moo-REE-woh weh-pahm-BEH-ree",
    example: "Muriwo wepamberi unodyiwa nesadza.",
    exampleTranslation: "Pumpkin leaves are eaten with sadza.",
  },
  {
    shona: "Mupunga wechena",
    english: "White rice",
    pronunciation: "moo-POON-gah weh-CHEH-nah",
    example: "Mupunga wechena unodyiwa nemuto.",
    exampleTranslation: "White rice is eaten with sauce.",
  },
  {
    shona: "Hove",
    english: "Fish",
    pronunciation: "HOH-veh",
    example: "Hove inobikwa nemunyu.",
    exampleTranslation: "Fish is cooked with salt.",
  },
  {
    shona: "Huku",
    english: "Chicken",
    pronunciation: "HOO-koo",
    example: "Huku iri mune muto.",
    exampleTranslation: "Chicken is in the stew.",
  },
  {
    shona: "Mombe",
    english: "Cattle / beef",
    pronunciation: "MOHM-beh",
    example: "Nyama yemombe inononoka kubika.",
    exampleTranslation: "Beef takes a long time to cook.",
  },
  {
    shona: "Mafuta",
    english: "Fat / oil",
    pronunciation: "mah-FOO-tah",
    example: "Mafuta anoiswa mupoto.",
    exampleTranslation: "Oil is put in the pot.",
  },
  {
    shona: "Munyu",
    english: "Salt",
    pronunciation: "MOO-nyoo",
    example: "Munyu wakawanda unokanganisa chikafu.",
    exampleTranslation: "Too much salt spoils food.",
  },
  {
    shona: "Muto",
    english: "Sauce / gravy",
    pronunciation: "MOO-toh",
    example: "Muto une nyama unononaka.",
    exampleTranslation: "Sauce with meat is delicious.",
  },
  {
    shona: "Mvura",
    english: "Water",
    pronunciation: "MVOO-rah",
    example: "Mvura inoiswa pakubika sadza.",
    exampleTranslation: "Water is added when cooking sadza.",
  },
  {
    shona: "Muriwo wakaosha",
    english: "Washed vegetables",
    pronunciation: "moo-REE-woh wah-kah-OH-shah",
    example: "Muriwo wakaosha une utano.",
    exampleTranslation: "Washed vegetables are healthy.",
  },
];

const culturalNotes = [
  {
    title: "Pumpkin leaves — the original green",
    body: "Muriwo wepamberi (pumpkin leaves) are the most traditional vegetable in Shona cooking, found in almost every Shona garden. Unlike imported greens, pumpkin plants grow freely, provide shade, and the leaves, flowers, and fruit are all edible. A Shona garden without a pumpkin plant is unusual. The leaves are boiled, sometimes with peanut butter, and served as the main relish alongside sadza.",
  },
  {
    title: "Groundnuts at the centre of Shona food",
    body: "Nzungu (groundnuts) and nyimo (bambara groundnuts) are central to Shona cuisine. They appear roasted as a snack, ground into dovi (peanut butter stew), mixed into vegetable dishes, and boiled as a side. The groundnut harvest is a major agricultural event. Dovi — sadza eaten with peanut butter stew — is considered one of the most comforting and complete Shona meals.",
  },
  {
    title: "The agricultural calendar revolves around maize",
    body: "Maize (chibage/zviyo) is not just a food in Shona culture — it is the organising principle of the year. The planting season (November/December), the growing months, and the harvest (March/April) shape family movements, school calendars, and community rituals. The granary (dura) stores maize, and its fullness or emptiness signals a family's security. Everything else in the garden supports the maize.",
  },
];

export default function IngredientsPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Ingredients
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvinhu Zvekubikira
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona cooking uses simple, garden-grown ingredients that have fed
            families for centuries. Understanding ingredient vocabulary not
            only helps you follow recipes — it connects you to the agricultural
            rhythms of Shona life, where what grows in the garden determines
            what lands on the plate.
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
            href="/courses/food/traditional-foods"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Traditional Foods
          </Link>
          <Link
            href="/courses/food/cooking"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Cooking Vocabulary →
          </Link>
        </div>
      </div>
    </div>
  );
}
