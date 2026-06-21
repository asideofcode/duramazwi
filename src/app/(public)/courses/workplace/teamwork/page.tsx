import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teamwork & Collaboration in Shona | Duramazwi",
  description:
    "Learn the Shona vocabulary and cultural values of working together — from the traditional nhimbe work party to the modern office team.",
};

const vocabulary = [
  {
    shona: "Kushanda pamwe",
    english: "To work together",
    pronunciation: "koo-SHAN-dah PAM-weh",
    example: "Tinofanira kushanda pamwe.",
    exampleTranslation: "We need to work together.",
  },
  {
    shona: "Kubatana",
    english: "Solidarity / Working as one",
    pronunciation: "koo-bah-TAH-nah",
    example: "Kubatana kwedu kunobatsira.",
    exampleTranslation: "Our solidarity helps us.",
  },
  {
    shona: "Nhimbe",
    english: "Community work party",
    pronunciation: "NHIM-beh",
    example: "Taiita nhimbe mumunda.",
    exampleTranslation: "We held a nhimbe in the field.",
  },
  {
    shona: "Basa remubatanidzwa",
    english: "Collaborative work",
    pronunciation: "BAH-sah reh-moo-bah-tah-NIDZ-wah",
    example: "Basa remubatanidzwa rinobatsira vose.",
    exampleTranslation: "Collaborative work benefits everyone.",
  },
  {
    shona: "Mufambisi",
    english: "Project leader",
    pronunciation: "moo-fahm-BEE-see",
    example: "Mufambisi wedu ane ruzivo.",
    exampleTranslation: "Our project leader is knowledgeable.",
  },
  {
    shona: "Mutsigiri",
    english: "Supporter / Backer",
    pronunciation: "moo-tsee-GEE-ree",
    example: "Mutsigiri wangu andibatsira nguva dzose.",
    exampleTranslation: "My supporter always helps me.",
  },
  {
    shona: "Kutsigirana",
    english: "To support each other",
    pronunciation: "koo-tsee-gee-RAH-nah",
    example: "Tinofanira kutsigirana.",
    exampleTranslation: "We must support each other.",
  },
  {
    shona: "Chipo chemunhu",
    english: "Person's contribution / gift",
    pronunciation: "CHEE-poh cheh-MOO-nhoo",
    example: "Chipo chemunhu wese chinobatsira.",
    exampleTranslation: "Each person's contribution matters.",
  },
  {
    shona: "Kubvumirana",
    english: "To agree / reach consensus",
    pronunciation: "koo-bvoo-mee-RAH-nah",
    example: "Takabvumirana musarudzo.",
    exampleTranslation: "We agreed on the decision.",
  },
  {
    shona: "Kukurudzirana",
    english: "To encourage each other",
    pronunciation: "koo-koo-roo-dzee-RAH-nah",
    example: "Tinofanira kukurudzirana nguva dzose.",
    exampleTranslation: "We must always encourage each other.",
  },
];

const nhimbeExplainer = {
  heading: "What is a Nhimbe?",
  body: `A nhimbe is a traditional Shona community work party. When a family needs to plough a field, build a home, or complete any large task, they call on the community to help — neighbours, relatives, and friends all come and work together. In return, the host provides food and drink for everyone who helped.

The nhimbe is not just a practical arrangement — it is a social contract. It builds relationships, demonstrates generosity, and reinforces the idea that no one works alone in Shona culture. The word 'nhimbe' carries all of that meaning: shared effort, shared reward, and mutual care.

In modern workplaces, the spirit of nhimbe lives on — the expectation that team members pull together, that credit is shared, and that the group's success belongs to everyone involved.`,
};

const culturalNotes = [
  {
    title: "Nhimbe is the cultural template for teamwork",
    body: "When Shona people talk about working together, the nhimbe is the unconscious reference point. It explains why collective effort is valued over individual achievement, and why taking sole credit for group work is frowned upon.",
  },
  {
    title: "Credit for collective work is shared",
    body: "Taking individual credit for work done by a group is culturally awkward at best, offensive at worst. The expectation is that success is attributed to the team. Someone who consistently claims personal credit for collective work will lose trust and standing.",
  },
  {
    title: "Decisions involve everyone affected",
    body: "Shona decision-making culture tends toward consensus — decisions that affect a group should involve that group. Imposing decisions from outside without consultation is resisted. This is why team meetings in Zimbabwean organisations often feel more deliberative than elsewhere.",
  },
  {
    title: "Food after work is a gesture of unity",
    body: "Buying food and drink for teammates after a long push is a genuine act of thanks in Shona culture — not just a nice thing to do, but a real signal of appreciation. It echoes the host feeding the nhimbe workers. Acknowledging people's effort materially is taken seriously.",
  },
];

export default function TeamworkPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/workplace"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Work &amp; School Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Teamwork &amp; Collaboration
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kushanda Pamwe
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, there is no word for a person who succeeds alone —
            because that story is not considered complete. Every achievement
            sits within a web of support, effort, and collective labour. The
            traditional nhimbe work party is the clearest expression of this
            value: everyone comes, everyone works, everyone eats. This module
            teaches you the language and the culture of working together the
            Shona way.
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

        {/* Nhimbe Explainer */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-12">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            {nhimbeExplainer.heading}
          </h3>
          <div className="space-y-4">
            {nhimbeExplainer.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-[var(--color-muted)] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Shona Teamwork Values
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
            href="/courses/workplace/professional"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Professional Communication
          </Link>
          <Link
            href="/courses/workplace/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Workplace Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
