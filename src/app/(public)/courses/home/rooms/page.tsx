import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms of the House in Shona | Duramazwi",
  description:
    "Learn Shona words for kitchen, bedroom, living room, bathroom, dare, and granary — plus the cultural significance of the courtyard and the granary in Shona life.",
};

const vocabulary = [
  {
    shona: "Imba",
    english: "House / home",
    pronunciation: "EEM-bah",
    example: "Imba yedu ine nzvimbo nhatu.",
    exampleTranslation: "Our house has three rooms.",
  },
  {
    shona: "Kicheni / Nzvimbo yekubikira",
    english: "Kitchen",
    pronunciation: "kee-CHEH-nee / nzveem-BOH yeh-koo-bee-KEE-rah",
    example: "Mai vanobika mukicheni.",
    exampleTranslation: "Mother cooks in the kitchen.",
  },
  {
    shona: "Nzvimbo yekurara",
    english: "Bedroom",
    pronunciation: "nzveem-BOH yeh-koo-RAH-rah",
    example: "Vana vanorara munzvimbo yekurara.",
    exampleTranslation: "The children sleep in the bedroom.",
  },
  {
    shona: "Nzvimbo yekugara",
    english: "Living room / lounge",
    pronunciation: "nzveem-BOH yeh-koo-GAH-rah",
    example: "Tinogara pamwechete munzvimbo yekugara.",
    exampleTranslation: "We sit together in the living room.",
  },
  {
    shona: "Chimbuzi",
    english: "Toilet / bathroom",
    pronunciation: "cheem-BOO-zee",
    example: "Chimbuzi chiri kunze.",
    exampleTranslation: "The toilet is outside.",
  },
  {
    shona: "Dare",
    english: "Courtyard / outdoor gathering space",
    pronunciation: "DAH-reh",
    example: "Baba vanogara padare.",
    exampleTranslation: "Father sits in the courtyard.",
  },
  {
    shona: "Gonhi",
    english: "Door (general)",
    pronunciation: "GOH-nhee",
    example: "Vhara gonhi.",
    exampleTranslation: "Close the door.",
  },
  {
    shona: "Hwindo",
    english: "Window",
    pronunciation: "HWEE-ndoh",
    example: "Vhura hwindo kuti mhepo ipinde.",
    exampleTranslation: "Open the window so air can enter.",
  },
  {
    shona: "Musiwo",
    english: "Main door / entrance",
    pronunciation: "moo-SEE-woh",
    example: "Mueni anopinda nomusiwo.",
    exampleTranslation: "The visitor enters through the main door.",
  },
  {
    shona: "Dhura / Dura",
    english: "Storage room / granary",
    pronunciation: "DHOO-rah",
    example: "Dura rakazara chibage.",
    exampleTranslation: "The granary is full of maize.",
  },
  {
    shona: "Mutsigo",
    english: "Veranda",
    pronunciation: "moo-TSEE-goh",
    example: "Tinogara pamutsigo manheru.",
    exampleTranslation: "We sit on the veranda in the evening.",
  },
  {
    shona: "Pane",
    english: "The floor",
    pronunciation: "PAH-neh",
    example: "Pane rakagadziridzwa.",
    exampleTranslation: "The floor has been swept and prepared.",
  },
];

const culturalNotes = [
  {
    title: "The dare — where community lives",
    body: "The dare (courtyard) is the social heart of a Shona homestead. It is where visitors are received, where the men of the household gather in the evenings to talk, where stories (ngano) are told to children around the fire, and where meals are eaten during warm weather. In traditional homesteads, the dare was a defined space — often a cleared area with smoothed earth under a large tree. Even in modern houses, families that have a courtyard use it as an outdoor living room.",
  },
  {
    title: "Round houses and their meaning",
    body: "Traditional Shona houses were round (imba yedenderedzwa) with thatched roofs, built from a mix of mud, clay, and dung that created cool walls in summer and warm walls in winter. The circular shape was not just practical — it held symbolic meaning: no corners meant no hiding places, and the communal structure encouraged openness. In rural Zimbabwe today, round thatched-roof buildings still serve as cooking huts, storage rooms, and sleeping quarters alongside more modern rectangular structures.",
  },
  {
    title: "The granary — the family's security",
    body: "The dura (granary) held a status equal to or greater than the main house in traditional Shona life. A full granary meant security through the dry season. An empty granary was a matter of shame and urgency. Grain (especially maize) was stored in raised granaries to keep it dry and away from pests. The state of a family's dura was a direct indicator of their prosperity and planning. Traditional Shona culture had strong norms against wasting grain or being careless with the harvest.",
  },
];

export default function RoomsPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Rooms of the House
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nzvimbo Dzeimba
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, every space in the home has a name and a social meaning.
            The dare (courtyard) is not just an outdoor area — it is the space
            where community is made. The dura (granary) is not just storage —
            it is the family's life security. Learning these words is the first
            step to understanding how Shona people organise space and life.
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
            href="/courses/home"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/home/furniture"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Furniture &amp; Objects →
          </Link>
        </div>
      </div>
    </div>
  );
}
