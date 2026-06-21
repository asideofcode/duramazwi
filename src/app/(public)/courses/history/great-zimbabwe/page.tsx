import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Great Zimbabwe | Duramazwi",
  description:
    "Learn about Great Zimbabwe — the largest stone structure in sub-Saharan Africa, built by the Shona people, and why it matters today.",
};

const vocabulary = [
  {
    shona: "Dzimbabwe",
    english: "Stone enclosures / great houses — origin of Zimbabwe's name",
    pronunciation: "dzeem-BAH-bweh",
    example: "Dzimbabwe ndiwo musha mukuru wevaShona.",
    exampleTranslation: "Great Zimbabwe was the great capital of the Shona.",
  },
  {
    shona: "Matombo",
    english: "Stones / rocks",
    pronunciation: "mah-TOM-boh",
    example: "Matombo akavakwa pasina semende.",
    exampleTranslation: "The stones were built without cement.",
  },
  {
    shona: "Mukaka",
    english: "Builder / mason",
    pronunciation: "moo-KAH-kah",
    example: "Vakaka vaiziwa kushanda matombo.",
    exampleTranslation: "The builders knew how to work stone.",
  },
  {
    shona: "Kukaura",
    english: "To quarry / hew stone",
    pronunciation: "koo-kah-OO-rah",
    example: "Vakaka vakakaurwa matombo pamakomo.",
    exampleTranslation: "The builders quarried stone from the hills.",
  },
  {
    shona: "Imba huru",
    english: "Great house — what Great Zimbabwe was",
    pronunciation: "EEM-bah HOO-roo",
    example: "Imba huru iyi yakavakwa makore mazhinji apfuura.",
    exampleTranslation: "This great house was built many years ago.",
  },
  {
    shona: "Nhaka",
    english: "Inheritance / heritage",
    pronunciation: "NHAH-kah",
    example: "Dzimbabwe inhaka yedu.",
    exampleTranslation: "Great Zimbabwe is our heritage.",
  },
  {
    shona: "Nhoroondo yedu",
    english: "Our history",
    pronunciation: "nhoh-ROON-doh YEH-doo",
    example: "Nhoroondo yedu inotiratidza simba.",
    exampleTranslation: "Our history shows us strength.",
  },
  {
    shona: "Vadzitateguru vedu",
    english: "Our forefathers",
    pronunciation: "vah-dzee-tah-teh-GOO-roo VEH-doo",
    example: "Vadzitateguru vedu ndivo vakavaka Dzimbabwe.",
    exampleTranslation: "Our forefathers built Great Zimbabwe.",
  },
  {
    shona: "Simba",
    english: "Power / strength — what the stone buildings symbolised",
    pronunciation: "SEEM-bah",
    example: "Matombo akaratidza simba ramambo.",
    exampleTranslation: "The stones showed the power of the king.",
  },
];

const facts = [
  {
    label: "Location",
    value: "Near Masvingo, southeastern Zimbabwe",
  },
  {
    label: "Built",
    value: "Approximately 11th–15th century CE",
  },
  {
    label: "Construction",
    value: "Dry-stone (no mortar) — granite blocks fitted without binding material",
  },
  {
    label: "Scale",
    value: "The Great Enclosure alone has a perimeter of 250 metres; walls up to 11 metres high",
  },
  {
    label: "Population",
    value: "Estimated 10,000–18,000 people at its height",
  },
  {
    label: "UNESCO Status",
    value: "World Heritage Site — listed 1986",
  },
];

const culturalNotes = [
  {
    title: "Colonial denial — and why it matters",
    body: "When European explorers and colonial officials first encountered Great Zimbabwe in the late 19th century, many refused to accept that Africans had built it. They attributed the stone walls to Phoenicians, ancient Arabs, the Queen of Sheba, or virtually anyone except the Shona people. This denial was not a matter of honest historical confusion — it was a racist refusal to accept African architectural achievement. It is now thoroughly and definitively debunked. Great Zimbabwe was built by the Shona people. Period.",
  },
  {
    title: "The name Zimbabwe",
    body: "The country's name comes directly from these ruins. 'Zimbabwe' derives from 'dzimba dzemabwe' (stone houses) or 'dzimba dzamabwe' (great stone houses), depending on dialect. When the country chose its name at independence in 1980, the choice was deliberate: a reclaiming of pre-colonial greatness.",
  },
  {
    title: "On the flag",
    body: "The Zimbabwe Bird — a carved soapstone bird found at the Great Zimbabwe ruins — appears on the national flag. There were eight such birds discovered; they are believed to represent a totemic bird, possibly a bateleur eagle, and they symbolise the connection between the living and the ancestors. Their presence on the flag is a statement of civilisational continuity.",
  },
  {
    title: "Visiting Great Zimbabwe",
    body: "For Zimbabweans, visiting Great Zimbabwe is not simply a tourist experience — it is a patriotic and sometimes emotional one. Standing inside the Great Enclosure, built by one's own ancestors without mortar and still standing after eight centuries, carries a weight that photographs cannot convey. The site is a place of pride, and it deserves to be treated as such.",
  },
];

export default function GreatZimbabwePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/history"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to History Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Great Zimbabwe
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Dzimbabwe Guru
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Great Zimbabwe is the largest stone structure in sub-Saharan Africa
            south of the Sahara. Built between the 11th and 15th centuries CE by
            the Shona people, using no mortar, it served as the capital of a
            powerful state that controlled the trade in gold and cattle across
            the region.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            The name <em>Zimbabwe</em> comes from these ruins — from the Shona
            phrase <strong className="text-[var(--color-primary)]">dzimba dzemabwe</strong>,
            meaning stone houses or great stone houses. When the independent
            nation chose its name in 1980, it was a deliberate act of
            reclaiming this heritage.
          </p>
        </div>

        {/* Fast Facts */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Key Facts
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <tbody>
              {facts.map((fact, i) => (
                <tr
                  key={fact.label}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-semibold text-[var(--color-primary)] w-40 align-top">
                    {fact.label}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">{fact.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vocabulary */}
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/history/kingdoms"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Kingdoms
          </Link>
          <Link
            href="/courses/history/colonial-modern"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Colonial & Modern History →
          </Link>
        </div>
      </div>
    </div>
  );
}
