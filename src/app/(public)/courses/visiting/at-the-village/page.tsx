import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "At the Village — Shona for Travellers | Duramazwi",
  description:
    "Learn the Shona of village hospitality — greetings at the homestead, accepting food and water, and the evening fire conversation.",
};

const vocabulary = [
  {
    shona: "Kumusha",
    english: "To the village / the homestead",
    pronunciation: "koo-MOO-shah",
    example: "Tiri kuenda kumusha.",
    exampleTranslation: "We are going to the village.",
  },
  {
    shona: "Dare",
    english: "Communal courtyard / gathering space",
    pronunciation: "DAH-reh",
    example: "Dare ndirenzvimbo yokugara.",
    exampleTranslation: "The dare is a place to sit and gather.",
  },
  {
    shona: "Mauya!",
    english: "You have come! (welcome)",
    pronunciation: "mah-OO-yah",
    example: "Mauya! Garai pano.",
    exampleTranslation: "You have come! Sit here.",
  },
  {
    shona: "Garai!",
    english: "Sit! (welcoming command)",
    pronunciation: "gah-RAH-ee",
    example: "Garai, tinotaura.",
    exampleTranslation: "Sit, let us talk.",
  },
  {
    shona: "Ndikupei mvura",
    english: "Let me give you water",
    pronunciation: "ndi-koo-PEH-ee mvoo-rah",
    example: "Ndikupei mvura — wasvika nenzira refu.",
    exampleTranslation: "Let me give you water — you have come a long way.",
  },
  {
    shona: "Bonde",
    english: "Mat (what you may be seated on)",
    pronunciation: "BON-deh",
    example: "Garai pabonde.",
    exampleTranslation: "Sit on the mat.",
  },
  {
    shona: "Kupikwa",
    english: "To be cooked for",
    pronunciation: "koo-PEE-kwah",
    example: "Tichapikwa nhasi.",
    exampleTranslation: "We will be cooked for today.",
  },
  {
    shona: "Doro",
    english: "Traditional beer",
    pronunciation: "DOH-roh",
    example: "Doro rwakapikwa neAmbuya.",
    exampleTranslation: "The traditional beer was brewed by grandmother.",
  },
  {
    shona: "Hurukuro",
    english: "Conversation / discussion",
    pronunciation: "hoo-roo-KOO-roh",
    example: "Hurukuro dzaitika husiku.",
    exampleTranslation: "Conversations happened in the evening.",
  },
];

const culturalNotes = [
  {
    title: "Arriving unannounced",
    body: "Arriving at a village unannounced is completely fine — hospitality in Shona culture is unconditional. You will be welcomed regardless. Calling ahead is appreciated but never required.",
  },
  {
    title: "Shoes and thresholds",
    body: "Remove your shoes if the family does so, or if you are entering certain rooms. Watch what others do and follow their lead.",
  },
  {
    title: "Accept with both hands",
    body: "When water, food, or anything else is offered, accept it with both hands and a thank-you. Refusing an offer of food or water is considered rude — take at least a small amount.",
  },
  {
    title: "The introductions",
    body: "You will be formally introduced to every person in the homestead, and their relationship to the host will be explained. Pay attention — this is important and shows respect.",
  },
  {
    title: "Evening fire",
    body: "Evening conversations around the fire (hurukuro) are one of the most memorable experiences of visiting Zimbabwe. Stories, laughter, and wisdom are shared here. Stay as long as you can.",
  },
];

export default function AtTheVillagePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/visiting"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Visiting Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            At the Village
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kumusha
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Nothing prepares you for your first arrival at a Zimbabwean
            homestead. <strong>Mauya!</strong> will ring out before you have
            even stepped through the gate. The dare — the communal gathering
            space — becomes the centre of your world. Water will come first.
            Then food. Then talk. This module prepares you for every part of it.
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
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Pronunciation
                </th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Example
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

        {/* Greetings Note */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Who Will Greet You
          </h3>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            How you are greeted will depend on your relationship to the family.
            The same words carry different weight from different people:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg">Muroora</p>
              <p className="text-sm text-[var(--color-text)] font-medium">
                Daughter-in-law
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">
                Will greet with deep respect — clapping and kneeling in
                traditional households. Her welcome is formal and warm.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg">Vatete</p>
              <p className="text-sm text-[var(--color-text)] font-medium">
                Father's sister (paternal aunt)
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">
                Greets with authority and joy — Vatete&apos;s welcome carries
                ceremonial weight. Her presence signals you are truly received.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Village Life
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note, i) => (
              <div key={i}>
                <p className="font-semibold text-[var(--color-primary)] mb-1">
                  {note.title}
                </p>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/visiting/arriving"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Arriving in Zimbabwe
          </Link>
          <Link
            href="/courses/visiting/navigating"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Navigating Zimbabwe →
          </Link>
        </div>
      </div>
    </div>
  );
}
