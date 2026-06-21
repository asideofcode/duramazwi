import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Spelling Patterns | Duramazwi",
  description:
    "Understand Shona noun class prefixes, the ku- infinitive, possessives, and how plurals work — the grammar hiding inside spelling.",
};

const nounClasses = [
  {
    prefix: "mu-",
    plural: "va-",
    category: "People",
    singular: "munhu",
    singularEnglish: "person",
    pluralForm: "vanhu",
    pluralEnglish: "people",
    notes: "The core human class. Also covers some trees (muti → miti uses a different class).",
  },
  {
    prefix: "chi-",
    plural: "zvi-",
    category: "Things / Objects",
    singular: "chikoro",
    singularEnglish: "school",
    pluralForm: "zvikoro",
    pluralEnglish: "schools",
    notes: "Also covers many abstract and manufactured objects.",
  },
  {
    prefix: "mu- / mi-",
    plural: "mi-",
    category: "Trees / Plants",
    singular: "muti",
    singularEnglish: "tree (or medicine)",
    pluralForm: "miti",
    pluralEnglish: "trees",
    notes: "The mu/mi class. Same prefix as people-class but different plural.",
  },
  {
    prefix: "i- / ri-",
    plural: "ma-",
    category: "Eyes, body parts, abstract",
    singular: "ziso",
    singularEnglish: "eye",
    pluralForm: "meso",
    pluralEnglish: "eyes",
    notes: "Sometimes irregular — ziso → meso is a vowel change, not a prefix swap.",
  },
  {
    prefix: "ku-",
    plural: "(verbal noun)",
    category: "Verb infinitives",
    singular: "kurima",
    singularEnglish: "to farm",
    pluralForm: "—",
    pluralEnglish: "—",
    notes: "Ku- turns any verb root into the infinitive: ku + rima = kurima.",
  },
];

const pluralPatterns = [
  {
    singular: "musha",
    singularEnglish: "village",
    plural: "mishna / misho",
    pluralEnglish: "villages",
    classNote: "mu/mi class (place names)",
  },
  {
    singular: "muti",
    singularEnglish: "tree",
    plural: "miti",
    pluralEnglish: "trees",
    classNote: "mu/mi class (plants)",
  },
  {
    singular: "chikoro",
    singularEnglish: "school",
    plural: "zvikoro",
    pluralEnglish: "schools",
    classNote: "chi/zvi class (things)",
  },
  {
    singular: "munhu",
    singularEnglish: "person",
    plural: "vanhu",
    pluralEnglish: "people",
    classNote: "mu/va class (people)",
  },
  {
    singular: "ziso",
    singularEnglish: "eye",
    plural: "meso",
    pluralEnglish: "eyes",
    classNote: "i/ma class (body parts — irregular vowel change)",
  },
  {
    singular: "imba",
    singularEnglish: "house",
    plural: "dzimba",
    pluralEnglish: "houses",
    classNote: "i/dzi class (houses, rivers)",
  },
  {
    singular: "ngano",
    singularEnglish: "story",
    plural: "ngano",
    pluralEnglish: "stories",
    classNote: "Same form singular and plural (nga- class)",
  },
];

const possessives = [
  { pronoun: "wangu", meaning: "my", nounClass: "mu/mi class nouns", example: "baba wangu (my father)" },
  { pronoun: "yangu", meaning: "my", nounClass: "i/dzi class nouns", example: "hanzvadzi yangu (my sister)" },
  { pronoun: "rangu", meaning: "my", nounClass: "ri/ma class nouns", example: "zita rangu (my name)" },
  { pronoun: "zangu", meaning: "my", nounClass: "some classes", example: "meso zangu (my eyes)" },
  { pronoun: "vangu", meaning: "my (plural people)", nounClass: "va- class nouns", example: "vabereki vangu (my parents)" },
  { pronoun: "zvangu", meaning: "my (things)", nounClass: "zvi- class nouns", example: "zvikoro zvangu (my schools)" },
];

export default function SpellingPatternsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/pronunciation"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Pronunciation Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Spelling Patterns
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Maitiro ekuNyora
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona spelling is not arbitrary — it follows a noun class system
            that organises all nouns into categories. Each class has a
            singular prefix and a plural prefix, and every adjective, verb,
            and possessive in the sentence must agree with the noun&apos;s class.
            Learning the main classes gives you a skeleton that you can hang
            vocabulary on.
          </p>
        </div>

        {/* Noun classes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Major Noun Classes
        </h2>
        <div className="space-y-4 mb-12">
          {nounClasses.map((cls) => (
            <div
              key={cls.prefix}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-[var(--color-primary)] font-mono">
                    {cls.prefix} → {cls.plural}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  {cls.category}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl bg-[var(--color-surface)] px-3 py-2">
                  <p className="text-xs text-[var(--color-muted)] font-semibold uppercase mb-0.5">
                    Singular
                  </p>
                  <p className="font-bold text-[var(--color-text)]">
                    {cls.singular}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {cls.singularEnglish}
                  </p>
                </div>
                <div className="rounded-xl bg-[var(--color-surface)] px-3 py-2">
                  <p className="text-xs text-[var(--color-muted)] font-semibold uppercase mb-0.5">
                    Plural
                  </p>
                  <p className="font-bold text-[var(--color-text)]">
                    {cls.pluralForm}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {cls.pluralEnglish}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-muted)] italic">
                {cls.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Plural table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Singular → Plural Patterns
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Singular</th>
                <th className="px-4 py-3 font-semibold">Plural</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Class note</th>
              </tr>
            </thead>
            <tbody>
              {pluralPatterns.map((row, i) => (
                <tr
                  key={row.singular}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3">
                    <p className="font-bold text-[var(--color-primary)]">
                      {row.singular}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {row.singularEnglish}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-bold text-[var(--color-text)]">
                      {row.plural}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {row.pluralEnglish}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-xs text-[var(--color-muted)] hidden md:table-cell">
                    {row.classNote}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Possessives */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Possessives — &ldquo;My&rdquo; in Different Classes
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Possessive</th>
                <th className="px-4 py-3 font-semibold">Meaning</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Used with</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Example</th>
              </tr>
            </thead>
            <tbody>
              {possessives.map((pos, i) => (
                <tr
                  key={pos.pronoun}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)] font-mono">
                    {pos.pronoun}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {pos.meaning}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs">
                    {pos.nounClass}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden lg:table-cell text-xs italic">
                    {pos.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Noun classes are the key to Shona grammar
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Every sentence in Shona adjusts its adjectives, verbs, and
                possessives to agree with the noun class of the subject. Once
                you internalise the major classes, large parts of the grammar
                become predictable.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. The ku- prefix is very productive
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Any verb root can be turned into a verbal noun by adding ku-.
                Kurima = to farm / the act of farming. Kutaura = to speak /
                the act of speaking. This makes it easy to expand vocabulary
                once you know verb roots.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Bantu noun class systems are widespread
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                The noun class system is a feature shared across all Bantu
                languages. Swahili, Zulu, Sotho, and Shona all organise nouns
                by class and require agreement. If you have learned any other
                Bantu language, this system will feel familiar.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Learning class patterns accelerates vocabulary
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                When you encounter a new word, its prefix tells you its class
                — and therefore its plural, its possessive form, and which
                agreement prefixes to use with adjectives and verbs. Pattern
                recognition is more powerful than memorising each word
                individually.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/pronunciation/rules"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Pronunciation Rules
          </Link>
          <Link
            href="/courses/pronunciation/tone"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Tone &amp; Emphasis →
          </Link>
        </div>
      </div>
    </div>
  );
}
