import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counting Objects in Shona | Duramazwi",
  description:
    "Learn how Shona numbers change to agree with noun classes — why 'one tree' and 'one person' use different forms.",
};

const nounClassExamples = [
  {
    class: "Mu-/Mi- (trees, rivers, people)",
    singular: "muti umwe",
    singularEn: "one tree",
    plural: "miti miviri",
    pluralEn: "two trees",
    pattern: "u- / mi-",
  },
  {
    class: "Mu-/Va- (people)",
    singular: "munhu mumwe",
    singularEn: "one person",
    plural: "vanhu vaviri",
    pluralEn: "two people",
    pattern: "mu- / va-",
  },
  {
    class: "Chi-/Zvi- (things, schools)",
    singular: "chikoro chimwe",
    singularEn: "one school",
    plural: "zvikoro zviviri",
    pluralEn: "two schools",
    pattern: "chi- / zvi-",
  },
  {
    class: "I-/Dzi- (houses, rivers)",
    singular: "imba imwe",
    singularEn: "one house",
    plural: "dzimba mbiri",
    pluralEn: "two houses",
    pattern: "i- / dzi-",
  },
];

const vocabulary = [
  {
    shona: "Ngombe imwe",
    english: "One cow",
    pronunciation: "NGOH-mbeh EEM-weh",
    note: "Ngombe takes the i- class prefix",
  },
  {
    shona: "Mombe mbiri",
    english: "Two cattle",
    pronunciation: "MOH-mbeh MBEE-ree",
    note: "Plural shifts to dzi- agreement pattern",
  },
  {
    shona: "Huku nhatu",
    english: "Three chickens",
    pronunciation: "HOO-koo NHAH-too",
    note: "Huku (chicken) uses the n- class",
  },
  {
    shona: "Bhuku rimwe",
    english: "One book",
    pronunciation: "BHOO-koo RIM-weh",
    note: "Bhuku takes the ri- class (ri-/ma-)",
  },
  {
    shona: "Maoko maviri",
    english: "Two hands",
    pronunciation: "mah-OH-koh mah-VEE-ree",
    note: "Maoko is the plural of boko — uses ma- prefix",
  },
  {
    shona: "Maziso maviri",
    english: "Two eyes",
    pronunciation: "mah-ZEE-soh mah-VEE-ree",
    note: "Maziso (eyes) — another ma- plural class",
  },
  {
    shona: "Mwana mumwe",
    english: "One child",
    pronunciation: "MWAH-nah MOOM-weh",
    note: "Mwana uses the mu- person class",
  },
  {
    shona: "Vana vashanu",
    english: "Five children",
    pronunciation: "VAH-nah vah-SHAH-noo",
    note: "Vana (children) — plural shifts to va- agreement",
  },
];

const culturalNotes = [
  {
    title: "Noun class agreement — the key to Shona grammar",
    body: "In Shona, a number is not just a number — it must agree with the noun class of the object being counted. Each noun belongs to a class marked by a prefix (mu-, chi-, i-, n-, etc.), and the number takes a matching prefix. This is one of the defining features of Bantu languages.",
  },
  {
    title: "The most common learner mistake",
    body: "Getting noun class agreement wrong is the most common mistake made by Shona learners. Saying \"miti umwe\" instead of \"miti miviri\" (or similar mismatches) will be understood — native speakers are patient — but mastering agreement is the clearest marker of genuine fluency.",
  },
  {
    title: "Fluency comes from exposure",
    body: "Native Shona speakers learn noun class agreement naturally through childhood exposure, not by memorising rules. As a learner, the most effective approach is to learn nouns in phrases rather than isolation — always learning a word alongside its class prefix and a number example.",
  },
  {
    title: "Why this matters at the market",
    body: "When buying or selling, you will say things like \"ngombe mbiri\" (two cows), \"mabhuku mashanu\" (five books), or \"huku nhatu\" (three chickens). Getting the agreement wrong in a market context may cause confusion or unintended humour — and local traders will gently correct you.",
  },
];

export default function CountingObjectsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/numbers"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Numbers Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Counting Objects
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuverenga Zvinhu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, the number you use changes depending on what you are
            counting. Every noun belongs to a class, and the number must match
            that class through a process called{" "}
            <strong>noun class agreement</strong>. This is not optional — it
            is fundamental to how the language works.
          </p>
        </div>

        {/* Noun Class Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Noun Class Agreement — Key Patterns
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Class
                </th>
                <th className="px-4 py-3 font-semibold">Singular</th>
                <th className="px-4 py-3 font-semibold">Plural</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Pattern
                </th>
              </tr>
            </thead>
            <tbody>
              {nounClassExamples.map((ex, i) => (
                <tr
                  key={ex.class}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden lg:table-cell text-xs">
                    {ex.class}
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-bold text-[var(--color-primary)]">
                      {ex.singular}
                    </span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">
                      {ex.singularEn}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-bold text-[var(--color-primary)]">
                      {ex.plural}
                    </span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">
                      {ex.pluralEn}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell font-mono text-xs">
                    {ex.pattern}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vocabulary */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Vocabulary Examples
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
                  Note
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
                  <td className="px-4 py-3 hidden lg:table-cell text-[var(--color-muted)] text-xs italic">
                    {word.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural &amp; Language Notes
        </h2>
        <div className="flex flex-col gap-5 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
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
            href="/courses/numbers/higher-numbers"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Higher Numbers
          </Link>
          <Link
            href="/courses/numbers/money"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Money →
          </Link>
        </div>
      </div>
    </div>
  );
}
