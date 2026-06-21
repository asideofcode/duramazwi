import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Directions in Shona | Duramazwi",
  description:
    "Learn how to give and receive directions in Shona — left, right, forward, back, and the landmark-based system Zimbabweans use.",
};

const vocabulary = [
  {
    shona: "Nzira",
    english: "Path / road / way",
    pronunciation: "N-ZEE-rah",
    example: "Nzira iyi inoenda kupi?",
    exampleTranslation: "Where does this road go?",
  },
  {
    shona: "Kwaenda sei?",
    english: "How do you go? / How do I get there?",
    pronunciation: "kwah-EN-dah SEH-ee",
    example: "Nzira yechipatara kwaenda sei?",
    exampleTranslation: "How do I get to the hospital?",
  },
  {
    shona: "Enda mberi",
    english: "Go forward / go straight",
    pronunciation: "EN-dah MBEH-ree",
    example: "Enda mberi kusvika pamuchinjikwa.",
    exampleTranslation: "Go straight until you reach the crossroads.",
  },
  {
    shona: "Tendeuka kuruboshwe",
    english: "Turn left",
    pronunciation: "ten-deh-OO-kah koo-roo-BOH-shweh",
    example: "Tendeuka kuruboshwe pamberi pechikoro.",
    exampleTranslation: "Turn left in front of the school.",
  },
  {
    shona: "Tendeuka kurudyi",
    english: "Turn right",
    pronunciation: "ten-deh-OO-kah koo-roo-DYEE",
    example: "Tendeuka kurudyi pamusangano wenziyo.",
    exampleTranslation: "Turn right at the junction.",
  },
  {
    shona: "Dzokera shure",
    english: "Go back",
    pronunciation: "dzoh-KEH-rah SHOO-reh",
    example: "Dzokera shure, wapfuura.",
    exampleTranslation: "Go back, you have passed it.",
  },
  {
    shona: "Mabvazuva",
    english: "East — where the sun rises",
    pronunciation: "mah-bvah-ZOO-vah",
    example: "Guta riri kumabvazuva.",
    exampleTranslation: "The town is to the east.",
  },
  {
    shona: "Mavirira",
    english: "West — where the sun sets",
    pronunciation: "mah-vee-REE-rah",
    example: "Musha wavo uri kumavirira.",
    exampleTranslation: "Their home is to the west.",
  },
  {
    shona: "Pedyo",
    english: "Near / close",
    pronunciation: "PEH-dyoh",
    example: "Chitoro chiri pedyo.",
    exampleTranslation: "The shop is nearby.",
  },
  {
    shona: "Kure",
    english: "Far",
    pronunciation: "KOO-reh",
    example: "Chipatara chiri kure here?",
    exampleTranslation: "Is the hospital far?",
  },
  {
    shona: "Svika",
    english: "Arrive / reach",
    pronunciation: "SVEE-kah",
    example: "Unosvika ipapo mushure mekupfuura chitoro.",
    exampleTranslation: "You reach there after passing the shop.",
  },
  {
    shona: "Mberi",
    english: "In front / ahead",
    pronunciation: "MBEH-ree",
    example: "Imba yavo iri mberi kwako.",
    exampleTranslation: "Their house is ahead of you.",
  },
];

const culturalNotes = [
  {
    title: "Landmarks, not street names",
    body: "Shona directions are almost always given using landmarks — a tree, a school, a shop, a church — rather than street names. Street names are often unknown or irrelevant. 'Turn left at the big mango tree' is more useful and more typical than any street address.",
  },
  {
    title: "Ask again when you get there",
    body: "It is perfectly normal — and expected — to give directions in stages: 'go to the junction, then ask again.' This is not evasive; it reflects the practical reality that long-distance directions are easier to manage in steps. Each person you ask gives you the next leg of the journey.",
  },
  {
    title: "Wrong directions are worse than none",
    body: "In Shona culture, it is considered more honourable to say 'I don't know' (Handizivi) than to give incorrect directions. Sending someone the wrong way wastes their time and causes real inconvenience — admitting ignorance is the respectful choice.",
  },
];

export default function DirectionsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/transport"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Transport Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Directions
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nzira
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Getting directions in Zimbabwe works differently from GPS navigation.
            Roads are identified by landmarks, stages, and well-known buildings
            rather than street names and numbers. These twelve words give you
            the toolkit to ask for, understand, and give directions in Shona.
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
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Pronunciation</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Example</th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.shona}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
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
                    <span className="text-[var(--color-text)] font-medium">{word.example}</span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">{word.exampleTranslation}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Finding Your Way
          </h3>
          <div className="grid gap-4">
            {culturalNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-1">{note.title}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{note.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/transport"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/transport/public-transport"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Public Transport →
          </Link>
        </div>
      </div>
    </div>
  );
}
