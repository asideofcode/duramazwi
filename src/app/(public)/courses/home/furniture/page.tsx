import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture & Objects in Shona | Duramazwi",
  description:
    "Learn Shona words for chairs, tables, beds, plates, pots, grass mats, and traditional household objects — and the cultural stories behind them.",
};

const vocabulary = [
  {
    shona: "Chigaro",
    english: "Chair",
    pronunciation: "chee-GAH-roh",
    example: "Garai pachigaro.",
    exampleTranslation: "Sit on the chair.",
  },
  {
    shona: "Tafura",
    english: "Table",
    pronunciation: "tah-FOO-rah",
    example: "Chikafu chiri patafura.",
    exampleTranslation: "The food is on the table.",
  },
  {
    shona: "Mubhedha",
    english: "Bed",
    pronunciation: "moo-BHEH-dhah",
    example: "Mubhedha mutsva wakapiwa mueni.",
    exampleTranslation: "A new bed was given to the guest.",
  },
  {
    shona: "Machira / Machakare",
    english: "Blankets",
    pronunciation: "mah-CHEE-rah / mah-chah-KAH-reh",
    example: "Machira anodziya usiku.",
    exampleTranslation: "Blankets keep you warm at night.",
  },
  {
    shona: "Ndiro",
    english: "Plate / dish",
    pronunciation: "NDEE-roh",
    example: "Isa sadza pandiro.",
    exampleTranslation: "Put the sadza on the plate.",
  },
  {
    shona: "Kapu",
    english: "Cup",
    pronunciation: "KAH-poo",
    example: "Kapu ine mvura.",
    exampleTranslation: "The cup has water.",
  },
  {
    shona: "Bonde / Mutsago",
    english: "Mat / grass mat for sitting",
    pronunciation: "BOHN-deh / moo-TSAH-goh",
    example: "Garai pabonde.",
    exampleTranslation: "Sit on the mat.",
  },
  {
    shona: "Mbiya",
    english: "Clay pot",
    pronunciation: "MBEE-yah",
    example: "Mbiya inochengeta mvura inotonhora.",
    exampleTranslation: "The clay pot keeps water cool.",
  },
  {
    shona: "Tsaga",
    english: "Traditional basket",
    pronunciation: "TSAH-gah",
    example: "Tsaga yakagadzirwa naamai.",
    exampleTranslation: "The basket was made by mother.",
  },
  {
    shona: "Mufuriro",
    english: "Cooking stand / pot stand",
    pronunciation: "moo-foo-REE-roh",
    example: "Poto inogara pamufuriro.",
    exampleTranslation: "The pot rests on the cooking stand.",
  },
  {
    shona: "Mupanda",
    english: "Shelf",
    pronunciation: "moo-PAH-ndah",
    example: "Zvinhu zviripo pamupanda.",
    exampleTranslation: "The things are on the shelf.",
  },
  {
    shona: "Girazi",
    english: "Glass (drinking glass)",
    pronunciation: "gee-RAH-zee",
    example: "Nipe girazi remvura.",
    exampleTranslation: "Give me a glass of water.",
  },
  {
    shona: "Foroko",
    english: "Fork",
    pronunciation: "foh-ROH-koh",
    example: "Foroko inoshandiswa kudya.",
    exampleTranslation: "A fork is used for eating.",
  },
  {
    shona: "Musungo",
    english: "Knife",
    pronunciation: "moo-SOON-goh",
    example: "Musungo unocheka nyama.",
    exampleTranslation: "A knife cuts meat.",
  },
  {
    shona: "Chipunu",
    english: "Spoon",
    pronunciation: "chee-POO-noo",
    example: "Shandisa chipunu kubata muto.",
    exampleTranslation: "Use a spoon to scoop gravy.",
  },
];

const culturalNotes = [
  {
    title: "The grass mat — seating before chairs",
    body: "The bonde or mutsago (grass mat) is the original Shona seating. Before chairs and tables became common, families sat on grass mats spread on the floor of the home or dare (courtyard). Mats are still widely used today — at ceremonies, gatherings, in rural homes, and in many urban households for informal seating. Offering someone a mat to sit on is a genuine act of welcome. The skill of weaving mats was passed down through generations of women.",
  },
  {
    title: "Clay pots — natural cooling technology",
    body: "The mbiya (clay pot) is not just a historical artefact — it is functional technology. The porous clay allows tiny amounts of water to seep through and evaporate on the surface, cooling the water inside by several degrees. In homes without refrigerators, mbiya remains the best way to keep drinking water cool. Clay pots are also used for brewing traditional drinks and for storing dried foods. Their use represents centuries of material knowledge.",
  },
  {
    title: "Baskets — craft, trade, and identity",
    body: "Traditional Shona baskets (tsaga) are crafted by women using local grasses, reeds, and natural dyes. Basket-weaving is a significant craft tradition — certain regions of Zimbabwe are known for their distinctive patterns and techniques. The baskets are used for carrying food, storing grain, presenting gifts, and as ceremonial items. They are also a significant export craft and source of income. A well-made tsaga carries the identity and skill of the woman who made it.",
  },
];

export default function FurniturePage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Furniture &amp; Objects
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvinhu Zveimba
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The objects inside a Shona home tell the story of its family.
            Traditional items like the clay pot, the grass mat, and the woven
            basket sit alongside modern furniture — each carrying its own
            history and function. Learning these words connects you to both the
            everyday reality and the deeper material culture of Shona life.
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
            href="/courses/home/rooms"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Rooms of the House
          </Link>
          <Link
            href="/courses/home/chores"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Household Chores →
          </Link>
        </div>
      </div>
    </div>
  );
}
