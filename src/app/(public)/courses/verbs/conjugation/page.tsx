import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verb Conjugation — Shona Verbs | Duramazwi",
  description:
    "Learn how Shona verbs conjugate for person — subject prefixes Ndi-, U-, A-, Ti-, Mu-, Va- — with examples for kudya, kutaura, and kuona.",
};

const subjectPrefixes = [
  { prefix: "Ndi-", person: "I (first person singular)", example: "Ndinodya", meaning: "I eat" },
  { prefix: "U- / Wa-", person: "You (second person singular)", example: "Unodya", meaning: "You eat" },
  { prefix: "A- / Ano-", person: "He / She / It (third person singular)", example: "Anodya", meaning: "He/she eats" },
  { prefix: "Ti-", person: "We (first person plural)", example: "Tinodya", meaning: "We eat" },
  { prefix: "Mu-", person: "You all (second person plural)", example: "Munodya", meaning: "You all eat" },
  { prefix: "Va-", person: "They (third person plural)", example: "Vanodya", meaning: "They eat" },
];

const kudyaForms = [
  { shona: "Ndinodya", english: "I eat", prefix: "Ndi-" },
  { shona: "Unodya", english: "You eat", prefix: "U-" },
  { shona: "Anodya", english: "He / She eats", prefix: "A-" },
  { shona: "Tinodya", english: "We eat", prefix: "Ti-" },
  { shona: "Munodya", english: "You all eat", prefix: "Mu-" },
  { shona: "Vanodya", english: "They eat", prefix: "Va-" },
];

const kutauraForms = [
  { shona: "Ndinotaura", english: "I speak", prefix: "Ndi-" },
  { shona: "Unotaura", english: "You speak", prefix: "U-" },
  { shona: "Anotaura", english: "He / She speaks", prefix: "A-" },
  { shona: "Tinotaura", english: "We speak", prefix: "Ti-" },
  { shona: "Munotaura", english: "You all speak", prefix: "Mu-" },
  { shona: "Vanotaura", english: "They speak", prefix: "Va-" },
];

const kuonaForms = [
  { shona: "Ndinoona", english: "I see", prefix: "Ndi-" },
  { shona: "Unoona", english: "You see", prefix: "U-" },
  { shona: "Anoona", english: "He / She sees", prefix: "A-" },
  { shona: "Tinoona", english: "We see", prefix: "Ti-" },
  { shona: "Munoona", english: "You all see", prefix: "Mu-" },
  { shona: "Vanoona", english: "They see", prefix: "Va-" },
];

const objectInfixes = [
  {
    shona: "Ndinokuona",
    english: "I see you",
    breakdown: "Ndi- (I) + no + ku- (you/object infix) + ona",
  },
  {
    shona: "Andindiyi / Andidzori",
    english: "He sees me / He calls me back",
    breakdown: "A- (he/she) + ndi- (me/object infix) + verb root",
  },
  {
    shona: "Ndinomuona",
    english: "I see him/her",
    breakdown: "Ndi- (I) + no + mu- (him/her — object infix) + ona",
  },
  {
    shona: "Anovaona",
    english: "He/she sees them",
    breakdown: "A- (he/she) + no + va- (them — object infix) + ona",
  },
];

const culturalNotes = [
  {
    heading: "Regular and predictable",
    body: "Shona verb agreement is more complex than English but very regular once you learn the six subject prefixes. The same prefixes apply to almost every verb — learn them once and they work everywhere.",
  },
  {
    heading: "The -no- infix",
    body: "The -no- infix inserted between the subject prefix and the verb root marks present habitual tense. Ndinodya (I eat / I habitually eat) vs Ndiri kudya (I am eating right now). This small difference carries real meaning.",
  },
  {
    heading: "Gateway to full sentences",
    body: "Mastery of subject prefixes is the single most important step in Shona grammar. Once you control Ndi-, U-, A-, Ti-, Mu-, Va-, you can conjugate any of the 24 verbs from Module 1 into 144 basic sentence forms.",
  },
];

function ConjugationTable({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: { shona: string; english: string; prefix: string }[];
}) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">{title}</h3>
      <p className="text-sm italic text-[var(--color-accent)] mb-3">{subtitle}</p>
      <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
              <th className="px-4 py-3 font-semibold">Prefix</th>
              <th className="px-4 py-3 font-semibold">Shona</th>
              <th className="px-4 py-3 font-semibold">English</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.shona}
                className={
                  i % 2 === 0
                    ? "bg-[var(--color-surface-raised)]"
                    : "bg-[var(--color-surface)]"
                }
              >
                <td className="px-4 py-3 font-mono text-xs text-[var(--color-muted)]">
                  {row.prefix}
                </td>
                <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                  {row.shona}
                </td>
                <td className="px-4 py-3 text-[var(--color-text)]">
                  {row.english}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ConjugationPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/verbs"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Common Verbs Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Verb Conjugation
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kupinda kwechiverb
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, every verb must agree with its subject. Six subject
            prefixes handle this — one for each person (I, you, he/she, we,
            you all, they). The prefix attaches to the front of the verb root,
            often with a -{" "}
            <strong>no-</strong> infix to form present tense. Once you know
            these prefixes, you can conjugate any of the verbs in Module 1.
          </p>
        </div>

        {/* Subject Prefix Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Subject Prefixes
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Prefix</th>
                <th className="px-4 py-3 font-semibold">Person</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Example</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {subjectPrefixes.map((row, i) => (
                <tr
                  key={row.prefix}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)] font-mono">
                    {row.prefix}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {row.person}
                  </td>
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)] hidden md:table-cell">
                    {row.example}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Conjugation examples */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Conjugation Examples
        </h2>

        <ConjugationTable
          title="Kudya — To Eat"
          subtitle="Root: -dya"
          rows={kudyaForms}
        />
        <ConjugationTable
          title="Kutaura — To Speak"
          subtitle="Root: -taura"
          rows={kutauraForms}
        />
        <ConjugationTable
          title="Kuona — To See"
          subtitle="Root: -ona"
          rows={kuonaForms}
        />

        {/* Object infixes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4 mt-4">
          Object Infixes
        </h2>
        <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
          Shona can also embed the object directly inside the verb. The object
          infix sits between the subject prefix and the verb root.
        </p>
        <div className="grid gap-4 mb-10">
          {objectInfixes.map((item) => (
            <div
              key={item.shona}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
            >
              <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                {item.shona}
              </p>
              <p className="text-sm text-[var(--color-text)] font-medium mb-1">
                {item.english}
              </p>
              <p className="text-xs text-[var(--color-muted)] font-mono">
                {item.breakdown}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Language Notes
          </h3>
          <div className="grid gap-4">
            {culturalNotes.map((note) => (
              <div
                key={note.heading}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-2">
                  {note.heading}
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
            href="/courses/verbs/everyday-actions"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Everyday Actions
          </Link>
          <Link
            href="/courses/verbs/tenses"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Tenses →
          </Link>
        </div>
      </div>
    </div>
  );
}
