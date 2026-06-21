import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Foods in Shona | Duramazwi",
  description:
    "Learn Shona words for sadza, muriwo, dovi, matemba, and the staple foods of Zimbabwean culture — plus why sadza is the meal, not just a side dish.",
};

const vocabulary = [
  {
    shona: "Sadza",
    english: "Thick maize porridge — the staple",
    pronunciation: "SAH-dzah",
    example: "Ndinoda sadza nenyama.",
    exampleTranslation: "I want sadza with meat.",
  },
  {
    shona: "Muriwo",
    english: "Cooked greens / vegetables",
    pronunciation: "moo-REE-woh",
    example: "Muriwo wakabikwa zvakanaka.",
    exampleTranslation: "The vegetables were cooked well.",
  },
  {
    shona: "Nyama",
    english: "Meat",
    pronunciation: "NYAH-mah",
    example: "Nyama iri pano inonaka.",
    exampleTranslation: "The meat here is delicious.",
  },
  {
    shona: "Hocho",
    english: "Boiled leaves (e.g. pumpkin leaves)",
    pronunciation: "HOH-choh",
    example: "Hocho inodya nesadza.",
    exampleTranslation: "Boiled leaves are eaten with sadza.",
  },
  {
    shona: "Dovi",
    english: "Peanut butter stew",
    pronunciation: "DOH-vee",
    example: "Dovi nenyama inononoka.",
    exampleTranslation: "Peanut butter stew with meat takes time.",
  },
  {
    shona: "Bota",
    english: "Thin porridge",
    pronunciation: "BOH-tah",
    example: "Bota inodyiwa mangwanani.",
    exampleTranslation: "Thin porridge is eaten in the morning.",
  },
  {
    shona: "Maheu",
    english: "Fermented maize drink",
    pronunciation: "mah-HEH-oo",
    example: "Maheu inodzora nyota.",
    exampleTranslation: "Maheu quenches thirst.",
  },
  {
    shona: "Mazondo",
    english: "Cow's trotters",
    pronunciation: "mah-ZOHN-doh",
    example: "Mazondo anobikwa kwenguva refu.",
    exampleTranslation: "Cow's trotters are cooked for a long time.",
  },
  {
    shona: "Mufushwa",
    english: "Dried/pounded vegetables",
    pronunciation: "moo-FOOSH-wah",
    example: "Mufushwa unogara kwenguva refu.",
    exampleTranslation: "Dried vegetables keep for a long time.",
  },
  {
    shona: "Matemba",
    english: "Small dried fish",
    pronunciation: "mah-TEHM-bah",
    example: "Matemba ane munyu wakawanda.",
    exampleTranslation: "Dried fish has a lot of salt.",
  },
  {
    shona: "Maputi",
    english: "Roasted maize / popcorn",
    pronunciation: "mah-POO-tee",
    example: "Vana vanoda maputi.",
    exampleTranslation: "Children love roasted maize.",
  },
  {
    shona: "Nhopi",
    english: "Pumpkin porridge",
    pronunciation: "NHOH-pee",
    example: "Nhopi inobikwa necheese.",
    exampleTranslation: "Pumpkin porridge is cooked with groundnuts.",
  },
];

const culturalNotes = [
  {
    title: "Sadza IS the meal",
    body: "In Shona culture, sadza is not a side dish or accompaniment — it is the meal itself. Everything else (muriwo, nyama, dovi, matemba) is called 'relish' and exists to make the sadza more enjoyable. When someone says 'I have not eaten,' they typically mean they have not eaten sadza, even if they have had other food. Refusing sadza when it is served to you is considered strange at best, rude at worst.",
  },
  {
    title: "Eating sadza with your hands",
    body: "Sadza is traditionally eaten with the right hand only. You pinch off a small ball, press your thumb into it to create a small cup, then scoop up relish and eat it in one motion. The left hand is never used for eating. This technique is called 'kukanya sadza' (kneading the sadza). Visitors who eat sadza with a fork are gently tolerated but quietly noted.",
  },
  {
    title: "A woman's sadza was her reputation",
    body: "Historically, the quality of a woman's sadza was treated as one of the key markers of domestic skill. Sadza that was too thin, lumpy, or burnt was a subject of serious household comment. A muroora (daughter-in-law) entering a new household would be carefully observed on how she made sadza. This standard has softened in modern urban households but persists in many rural communities.",
  },
];

export default function TraditionalFoodsPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Traditional Foods
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvokudya Zvechivanhu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona cuisine is built around maize. From the thick sadza that
            anchors every meal to the thin bota eaten at breakfast, to the
            fermented maheu that refreshes on a hot day — maize is present at
            every table. But the richness comes from the relishes: peanut
            butter stew, dried fish, pumpkin leaves, and the slow-cooked meats
            that have fed families for generations.
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
            href="/courses/food"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/food/ingredients"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Ingredients →
          </Link>
        </div>
      </div>
    </div>
  );
}
