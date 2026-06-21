import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Village vs Urban Social Life in Shona | Duramazwi",
  description:
    "Learn Shona for village and city life — and understand why every urban Zimbabwean still has a musha to go back to.",
};

const vocabulary = [
  {
    shona: "Kumusha",
    english: "To / at the village (rural home)",
    pronunciation: "koo-MOO-shah",
    example: "Ndinoenda kumusha Kirisimasyi.",
    exampleTranslation: "I go to the village at Christmas.",
  },
  {
    shona: "Kuguta",
    english: "In town / city",
    pronunciation: "koo-GOO-tah",
    example: "Ndinogara kuguta.",
    exampleTranslation: "I live in the city.",
  },
  {
    shona: "Kunzwana",
    english: "To understand each other",
    pronunciation: "koon-ZWAH-nah",
    example: "Vanhu vemusha vanozwana.",
    exampleTranslation: "Village people understand each other.",
  },
  {
    shona: "Hunhu",
    english: "Personhood / Ubuntu (core village value)",
    pronunciation: "HOO-nhoo",
    example: "Hunhu ndiwo musoro weupenyu hwakanakaS.",
    exampleTranslation: "Ubuntu is the foundation of good life.",
  },
  {
    shona: "Mhuri huru",
    english: "Extended family (more visible in village)",
    pronunciation: "MHOO-ree HOO-roo",
    example: "Mhuri huru yangu inogara kumusha.",
    exampleTranslation: "My extended family lives in the village.",
  },
  {
    shona: "Zvimiro",
    english: "Customs / Ways of doing things",
    pronunciation: "zvee-MEE-roh",
    example: "Zvimiro zvemusha zvakakosha.",
    exampleTranslation: "Village customs are important.",
  },
  {
    shona: "Kutaura chizezuru / chikaranga",
    english: "Speaking urban / rural Shona (code switching)",
    pronunciation: "koo-tah-oo-rah chee-zeh-ZOO-roo / chee-kah-RAH-ngah",
    example: "Anotaura chizezuru muHarare.",
    exampleTranslation: "He speaks urban Shona in Harare.",
  },
  {
    shona: "Kugara kumusha",
    english: "To live in the village (permanently)",
    pronunciation: "koo-GAH-rah koo-MOO-shah",
    example: "Ambuya vangu vanogara kumusha.",
    exampleTranslation: "My grandmother lives in the village.",
  },
  {
    shona: "Kupinda mudunhu",
    english: "To enter a community / village",
    pronunciation: "koo-PEEN-dah moo-DOON-hoo",
    example: "Kupinda mudunhu kunoda tsika.",
    exampleTranslation: "Entering a community requires respect.",
  },
];

const comparisonTable = [
  {
    aspect: "Privacy",
    village: "Low — your business is the community's business",
    urban: "High — city life is more anonymous",
  },
  {
    aspect: "Extended family",
    village: "Constant presence — grandparents, uncles, cousins nearby",
    urban: "Scattered — family contact by phone and visits",
  },
  {
    aspect: "Social life",
    village: "Anchored in neighbourhood, family, and church",
    urban: "Chosen communities — work, church, neighbourhood",
  },
  {
    aspect: "Language",
    village: "Deeper Shona, proverbs, traditional expressions",
    urban: "English-Shona mix, current slang, code-switching",
  },
  {
    aspect: "Values",
    village: "Communal, traditional, hunhu-centred",
    urban: "Mix of traditional and modern, more individualist",
  },
  {
    aspect: "Christmas / funerals",
    village: "Hosting role — everyone comes to musha",
    urban: "Travelling role — going back to musha",
  },
];

const culturalNotes = [
  {
    title: "Village life is communal — and that is safety",
    body: "In the village, your neighbours know your business and you know theirs. This is not gossip culture (though gossip exists) — it is a safety net. If someone is sick, everyone knows. If a family is struggling, the community responds. The visibility cuts both ways: it constrains, but it also protects.",
  },
  {
    title: "Urban Shona life clusters in chosen communities",
    body: "City life is more anonymous — you can live next to someone for years without knowing their name. Urban Zimbabweans find community in their church, their workplace, and tight friend groups. Social life does not disappear; it just happens in smaller, chosen circles rather than across a whole village.",
  },
  {
    title: "Every urban Zimbabwean has a musha",
    body: "Even Zimbabweans born in Harare have a musha — a village origin, a place of belonging. Going kumusha (to the village) for Christmas, for a funeral, or just to visit grandparents is a near-universal experience. The musha is where you are known by your family name, your totem, your history. It anchors identity in ways the city cannot.",
  },
  {
    title: "The tension between village and urban values is live and real",
    body: "The pull between 'modern' urban values (individualism, privacy, different gender norms) and 'traditional' village values (communalism, hierarchy, family obligation) is one of the defining tensions of contemporary Zimbabwean life. It is not resolved — most Zimbabweans navigate it constantly, switching registers and expectations depending on context.",
  },
];

export default function VillageUrbanPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/social"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Social Life Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Village vs Urban Life
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kumusha neKuguta
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Most Zimbabweans live between two worlds — the city where they work
            and build their lives, and the village that remains the place of
            belonging, the anchor of identity, the destination at Christmas and
            funerals. Understanding this duality is essential to understanding
            Shona social life.
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

        {/* Comparison Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Village vs Urban: Side by Side
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Aspect</th>
                <th className="px-4 py-3 font-semibold">Village (Kumusha)</th>
                <th className="px-4 py-3 font-semibold">City (Kuguta)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr
                  key={row.aspect}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {row.aspect}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)] text-xs leading-relaxed">
                    {row.village}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)] text-xs leading-relaxed">
                    {row.urban}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: The Two Worlds
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note) => (
              <div key={note.title}>
                <p className="font-semibold text-[var(--color-text)] mb-1">
                  {note.title}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/social/church-social"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Church &amp; Social Life
          </Link>
          <Link
            href="/courses/social/urban-life"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Urban Life in Zimbabwe →
          </Link>
        </div>
      </div>
    </div>
  );
}
