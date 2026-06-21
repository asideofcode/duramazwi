import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asking Where Someone Is From in Shona | Duramazwi",
  description:
    "Learn how to ask and answer 'where are you from?' in Shona — and why kumusha (the home village) is so culturally significant.",
};

const vocabulary = [
  {
    shona: "Unobvepi?",
    english: "Where are you from? (informal)",
    pronunciation: "oo-noh-BVEH-pee",
    example: "Mhoro, unobvepi?",
    exampleTranslation: "Hello, where are you from?",
  },
  {
    shona: "Munobvepi?",
    english: "Where are you from? (formal)",
    pronunciation: "moo-noh-BVEH-pee",
    example: "Manheru, munobvepi imi?",
    exampleTranslation: "Good evening, where are you from? (respectful)",
  },
  {
    shona: "Ndinobva...",
    english: "I come from...",
    pronunciation: "ndee-NOH-bvah",
    example: "Ndinobva Harare.",
    exampleTranslation: "I come from Harare.",
  },
  {
    shona: "Ndinogara...",
    english: "I live in...",
    pronunciation: "ndee-noh-GAH-rah",
    example: "Ndinogara Bulawayo.",
    exampleTranslation: "I live in Bulawayo.",
  },
  {
    shona: "Kumusha",
    english: "The rural home / home village",
    pronunciation: "koo-MOO-shah",
    example: "Kumusha kwedu kuri Masvingo.",
    exampleTranslation: "Our home village is in Masvingo.",
  },
  {
    shona: "Kuguta",
    english: "In town / in the city",
    pronunciation: "koo-GOO-tah",
    example: "Ndinogara kuguta asi kumusha ndiHarare.",
    exampleTranslation: "I live in the city but my home is in Harare (area).",
  },
  {
    shona: "Harare",
    english: "Capital city of Zimbabwe",
    pronunciation: "hah-RAH-reh",
    example: "Ndinobva Harare.",
    exampleTranslation: "I come from Harare.",
  },
  {
    shona: "Bulawayo",
    english: "Second city of Zimbabwe",
    pronunciation: "boo-lah-WAH-yoh",
    example: "Ndinogara Bulawayo.",
    exampleTranslation: "I live in Bulawayo.",
  },
  {
    shona: "Mutare",
    english: "Eastern Highlands city",
    pronunciation: "moo-TAH-reh",
    example: "Ndinobva Mutare, Manicaland.",
    exampleTranslation: "I come from Mutare, Manicaland.",
  },
  {
    shona: "Mashonaland / Manicaland",
    english: "Shona provinces of Zimbabwe",
    pronunciation: "mah-SHOH-nah-land / mah-nee-KAH-land",
    example: "Ndinobva Mashonaland Chepakati.",
    exampleTranslation: "I come from Mashonaland Central.",
  },
];

const mushaFacts = [
  {
    title: "Musha is identity",
    body: "For Shona people, kumusha is not just where your grandparents live — it is where you belong. Even those born and raised in Harare will say their musha is in the village where the family originated.",
  },
  {
    title: "Asking musha builds connection",
    body: "Asking someone 'unobvepi?' is one of the quickest ways to find common ground. Discovering a shared musha or nearby village can instantly create a bond — 'ndisu!' (we are the same people!).",
  },
  {
    title: "Rural vs urban identity",
    body: "The tension between city life (kuguta) and the home village (kumusha) is a live social theme in Zimbabwe. People travel back for burials, ceremonies, and the New Year — these roots are maintained across generations.",
  },
];

export default function OriginsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/greetings"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Greetings Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 5
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Where Are You From?
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Unobvepi?
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona conversation, asking where someone is from is not nosy —
            it is one of the first steps in understanding who they are. The
            concept of <strong>kumusha</strong> (the home village) runs deep:
            even Zimbabweans who have never set foot in their ancestral village
            will claim it as home. Where you are from tells people your lineage,
            your totem, and your place in the world.
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

        {/* Musha cards */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Meaning of Kumusha
        </h2>
        <div className="grid gap-4 md:grid-cols-1 mb-12">
          {mushaFacts.map((fact) => (
            <div
              key={fact.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <p className="font-bold text-[var(--color-primary)] mb-2">
                {fact.title}
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {fact.body}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Musha is deeply important
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Even city-born Shona people identify strongly with their
                musha. It is where ancestors are buried, where ceremonies are
                held, and where family bonds are renewed. Saying &ldquo;I have no
                musha&rdquo; is almost unthinkable.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. Unobvepi? is an invitation, not an intrusion
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Do not hesitate to ask this question. In Shona culture it is a
                genuine attempt to connect — to find out if you share a
                village, a lineage, or a common ancestor. The answer opens
                doors.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Zimbabwe&apos;s provinces and regions matter
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Mashonaland (Zezuru dialect), Manicaland (Manyika dialect),
                Midlands and Masvingo (Karanga dialect) — regional identity
                matters within the broader Shona identity. Asking where
                someone is from can tell you which dialect variation to expect.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Kuguta vs kumusha
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Kuguta (in the city) is where many Shona people live and work,
                but kumusha (the village home) is where they are from. These
                two answers often differ in the same person: &ldquo;Ndinogara
                Harare asi kumusha ndiMasvingo&rdquo; — I live in Harare but
                my home is Masvingo.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/greetings/introductions"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Introducing Yourself
          </Link>
          <Link
            href="/courses/greetings/polite-expressions"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Polite Expressions →
          </Link>
        </div>
      </div>
    </div>
  );
}
