import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Verb Tenses | Duramazwi",
  description:
    "Learn present habitual, present progressive, simple past, recent past, future, and remote past tenses in Shona with examples.",
};

const tenses = [
  {
    name: "Present Habitual",
    shona: "Nguva yezuvazuva",
    structure: "Subject prefix + no + verb root",
    description:
      "Used for actions that happen regularly or as general truths. This is the most common present tense.",
    examples: [
      { shona: "Ndinodya sadza.", english: "I eat sadza." },
      { shona: "Tinotaura Shona.", english: "We speak Shona." },
      { shona: "Anotamba vana.", english: "He/she plays with children." },
      { shona: "Vanoshanda zuva rese.", english: "They work all day." },
    ],
  },
  {
    name: "Present Progressive",
    shona: "Nguva iri kuitika izvozvi",
    structure: "Subject prefix + ri + ku + verb infinitive",
    description:
      "Used for actions happening right now. The most useful tense for beginners — it maps closely to English \"I am doing.\"",
    examples: [
      { shona: "Ndiri kudya.", english: "I am eating." },
      { shona: "Uri kutaura.", english: "You are speaking." },
      { shona: "Tiri kuona.", english: "We are seeing / We are watching." },
      { shona: "Vari kufamba.", english: "They are walking." },
    ],
  },
  {
    name: "Simple Past",
    shona: "Nguva yakapfuura",
    structure: "Subject prefix + aka + verb root",
    description:
      "Used for completed actions in the past — whether yesterday or years ago.",
    examples: [
      { shona: "Ndakadya.", english: "I ate." },
      { shona: "Akaenda kuchikoro.", english: "He/she went to school." },
      { shona: "Takataura nesu.", english: "We spoke with each other." },
      { shona: "Vakabvunza mubvunzo.", english: "They asked a question." },
    ],
  },
  {
    name: "Recent Past",
    shona: "Nguva yatangopfuura",
    structure: "Subject prefix + ngo + verb root (or -ango-)",
    description:
      "Used for something that just happened — very recently, moments or hours ago.",
    examples: [
      { shona: "Ndangodya.", english: "I have just eaten." },
      { shona: "Aangouya.", english: "He/she has just come/arrived." },
      { shona: "Tangofamba.", english: "We have just set off." },
      { shona: "Vangoenda.", english: "They have just left." },
    ],
  },
  {
    name: "Future",
    shona: "Nguva ichauya",
    structure: "Subject prefix + icha + verb root",
    description:
      "Used for actions that will happen. The -icha- marker signals future tense.",
    examples: [
      { shona: "Ndichadya.", english: "I will eat." },
      { shona: "Uchaenda kuchikoro.", english: "You will go to school." },
      { shona: "Tichataura.", english: "We will speak." },
      { shona: "Vachaona.", english: "They will see." },
    ],
  },
  {
    name: "Remote Past",
    shona: "Nguva yakapfuura kure",
    structure: "Subject prefix + akanga + subject prefix + ichi + verb root",
    description:
      "Used for continuous or habitual actions in the distant past. Favoured in storytelling and oral tradition.",
    examples: [
      { shona: "Ndakanga ndichiudya.", english: "I was eating (long ago / in a story)." },
      { shona: "Akanga achienda.", english: "He/she was going." },
      { shona: "Takanga tichitaura.", english: "We were speaking." },
      { shona: "Vakanga vachiona.", english: "They were watching." },
    ],
  },
];

const culturalNotes = [
  {
    heading: "Shona time is precise",
    body: "Shona marks time very precisely — there are distinct tenses for \"just now,\" \"earlier today,\" \"yesterday,\" and \"long ago.\" This precision reflects how Shona people experience and communicate time.",
  },
  {
    heading: "Don't worry about tense errors",
    body: "Getting tense wrong rarely prevents understanding — context helps enormously. Focus on communicating; tense accuracy comes with exposure.",
  },
  {
    heading: "Present progressive for beginners",
    body: "The present progressive (Ndiri ku...) is the most useful tense for beginners. It is easy to form and immediately recognisable to native speakers.",
  },
  {
    heading: "Remote past in storytelling",
    body: "Remote past tense is used extensively in storytelling — ngano (folk tales) are told almost entirely in remote past. You will hear it whenever elders share family history or traditional stories.",
  },
];

export default function TensesPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Tenses
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nguva dzekutaura
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona has a rich tense system that marks not just past, present, and
            future — but how far in the past, and whether the action was
            habitual or happening right now. Each tense uses a specific infix
            inserted between the subject prefix and the verb root. The six
            tenses below cover everything you need for everyday and narrative
            Shona.
          </p>
        </div>

        {/* Tense Sections */}
        <div className="grid gap-8 mb-10">
          {tenses.map((tense, idx) => (
            <div
              key={tense.name}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-widest mb-1">
                      Tense {idx + 1}
                    </p>
                    <h3 className="text-xl font-bold text-[var(--color-text)]">
                      {tense.name}
                    </h3>
                    <p className="text-sm italic text-[var(--color-accent)] mt-0.5">
                      {tense.shona}
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-[var(--color-surface-raised)] border border-[var(--color-border)] px-2 py-1 rounded-lg text-[var(--color-muted)] shrink-0 hidden sm:block">
                    {tense.structure}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  {tense.description}
                </p>
                <div className="grid gap-2">
                  {tense.examples.map((ex) => (
                    <div
                      key={ex.shona}
                      className="flex items-baseline gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5"
                    >
                      <span className="font-bold text-[var(--color-primary)] text-sm">
                        {ex.shona}
                      </span>
                      <span className="text-[var(--color-muted)] text-xs">
                        {ex.english}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Language Notes
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
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
            href="/courses/verbs/conjugation"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Verb Conjugation
          </Link>
          <Link
            href="/courses/verbs/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Verb Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
