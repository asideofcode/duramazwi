import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Kingdoms | Duramazwi",
  description:
    "Learn about the great Shona kingdoms — Mapungubwe, Great Zimbabwe, the Mutapa state, and the Rozvi Empire — and the vocabulary of kingship.",
};

const vocabulary = [
  {
    shona: "Mambo",
    english: "King / paramount chief",
    pronunciation: "MAM-boh",
    example: "Mambo ndiye mukuru wenyika.",
    exampleTranslation: "The king is the head of the land.",
  },
  {
    shona: "Ushe",
    english: "Chieftainship / kingdom",
    pronunciation: "OO-sheh",
    example: "Ushe hweRozvi hwakanga hukuru.",
    exampleTranslation: "The Rozvi kingdom was great.",
  },
  {
    shona: "Rozvi",
    english: "The Rozvi people — a Shona dynasty",
    pronunciation: "ROH-zvee",
    example: "VaRozvi vakadzinga VaPortugisi.",
    exampleTranslation: "The Rozvi drove out the Portuguese.",
  },
  {
    shona: "Mutapa",
    english: "Mwene Mutapa — title of the great ruler of the Mutapa state",
    pronunciation: "moo-TAH-pah",
    example: "Mutapa akaita gwaro nevatereri vake.",
    exampleTranslation: "The Mutapa made treaties with his subjects.",
  },
  {
    shona: "Dzimbabwe",
    english: "Stone house / great house — origin of 'Zimbabwe'",
    pronunciation: "dzeem-BAH-bweh",
    example: "Dzimbabwe dzakavakwa nematombo chete.",
    exampleTranslation: "The stone houses were built with stones alone.",
  },
  {
    shona: "Hwange",
    english: "A major Rozvi centre",
    pronunciation: "HWAHN-geh",
    example: "Hwange ndiyo nzvimbo yavaRozvi.",
    exampleTranslation: "Hwange is the place of the Rozvi.",
  },
  {
    shona: "Nehanda",
    english: "Famous spirit medium — and the national heroine",
    pronunciation: "neh-HAN-dah",
    example: "Nehanda akarwa nokuda kwenyika.",
    exampleTranslation: "Nehanda fought for the land.",
  },
  {
    shona: "Sekuru",
    english: "Grandfather / elder — honorific for ancestors",
    pronunciation: "seh-KOO-roo",
    example: "Sekuru wedu akachengeta nhoroondo.",
    exampleTranslation: "Our grandfather preserved the history.",
  },
  {
    shona: "Chimurenga",
    english: "Spirit of resistance — taken from the warrior Murenga",
    pronunciation: "chee-moo-REHN-gah",
    example: "Chimurenga chakabatanidza vanhu.",
    exampleTranslation: "Chimurenga united the people.",
  },
];

const kingdoms = [
  {
    name: "Mapungubwe",
    period: "11th–13th century CE",
    description:
      "The earliest major state on the Zimbabwe Plateau. Mapungubwe (in present-day Limpopo, South Africa near the Zimbabwe border) was the first gold-trading kingdom and established the pattern of elite control over cattle and gold that would continue in later states.",
    significance: "First gold-trading state — the template for all that followed.",
  },
  {
    name: "Great Zimbabwe State",
    period: "13th–15th century CE",
    description:
      "The successor to Mapungubwe and the most famous Shona state. Great Zimbabwe was the capital — a city of stone enclosures that controlled the gold trade. At its height, it may have housed 18,000 people. The state's ruler held both political and spiritual authority.",
    significance: "Built the famous stone enclosures; gave Zimbabwe its name.",
  },
  {
    name: "Mutapa State (Mwene Mutapa)",
    period: "15th–17th century CE",
    description:
      "When the Great Zimbabwe state declined, power shifted north to the Mutapa. The Mwene Mutapa (Great Ruler of the Mutapa) controlled the gold trade with Arab merchants and, later, Portuguese traders. The Portuguese tried to manipulate the Mutapa court but were ultimately driven back.",
    significance: "Gold trade with Arabs and Portuguese; diplomatic and military power.",
  },
  {
    name: "Rozvi Empire",
    period: "17th–19th century CE",
    description:
      "The Rozvi — a Shona military aristocracy — drove out Portuguese influence from the plateau in the 17th century and built their own empire. They were known for their military skill (their name, Rozvi, relates to destroying or raiding) and maintained the tradition of stone building.",
    significance: "Expelled the Portuguese; last great independent Shona empire before colonialism.",
  },
];

const culturalNotes = [
  {
    title: "Gold shaped everything",
    body: "Gold was not just trade — it was political power. Whoever controlled the gold trade controlled alliances, military capacity, and prestige goods. The Mutapa's relationship with Arab and Portuguese merchants was rooted in gold, and the competition for that control shaped centuries of history.",
  },
  {
    title: "The great chiefs were both political and spiritual",
    body: "In Shona tradition, the Mambo was not simply a political ruler. He mediated between the living and the ancestors, performed rituals to bring rain and fertility, and his authority was considered sacred. Spiritual legitimacy and political power were inseparable.",
  },
  {
    title: "The Rozvi and the Portuguese",
    body: "The Portuguese attempted several times to control the Zimbabwe Plateau through military campaigns and manipulation of the Mutapa court. The Rozvi military force ultimately expelled them in the 1690s — a rare African military victory over a European colonial power at that time. This is a source of deep historical pride.",
  },
];

export default function KingdomsPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Kingdoms
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Madzimambo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The Zimbabwe Plateau was home to several major Shona states spanning
            nearly a thousand years. Each was built on cattle wealth, gold
            trade, and a hierarchical political system crowned by the Mambo.
            These were not simple chiefdoms — they were complex states with
            long-distance trade networks, diplomatic relationships, and
            architectural achievements that still stand today.
          </p>
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

        {/* Kingdoms Timeline */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Great Shona States
        </h2>
        <div className="flex flex-col gap-5 mb-12">
          {kingdoms.map((kingdom, i) => (
            <div
              key={kingdom.name}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-start justify-between mb-3 gap-4">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {kingdom.name}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] shrink-0">
                  {kingdom.period}
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                {kingdom.description}
              </p>
              <p className="text-xs font-semibold text-[var(--color-accent)] italic">
                {kingdom.significance}
              </p>
            </div>
          ))}
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
            href="/courses/history/origins"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Origins
          </Link>
          <Link
            href="/courses/history/great-zimbabwe"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Great Zimbabwe →
          </Link>
        </div>
      </div>
    </div>
  );
}
