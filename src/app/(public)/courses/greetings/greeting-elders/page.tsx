import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greeting Elders in Shona | Duramazwi",
  description:
    "Learn the words and physical gestures for greeting grandparents, uncles, and village elders in Shona culture.",
};

const vocabulary = [
  {
    shona: "Mhoro sekuru",
    english: "Hello grandfather / uncle",
    pronunciation: "MHOH-roh seh-KOO-roo",
    example: "Mhoro sekuru, makadii imi?",
    exampleTranslation: "Hello grandfather, how are you?",
  },
  {
    shona: "Mhoro ambuya",
    english: "Hello grandmother",
    pronunciation: "MHOH-roh ahm-BOO-yah",
    example: "Mhoro ambuya, makanaka here?",
    exampleTranslation: "Hello grandmother, are you well?",
  },
  {
    shona: "Mhoro babamukuru",
    english: "Hello big father (father's older brother)",
    pronunciation: "MHOH-roh bah-bah-moo-KOO-roo",
    example: "Mhoro babamukuru, masikati.",
    exampleTranslation: "Hello big father, good afternoon.",
  },
  {
    shona: "Kuombera",
    english: "To clap in greeting",
    pronunciation: "kwoh-MBEH-rah",
    example: "Vana vanokuombera vakuru.",
    exampleTranslation: "Children clap hands when greeting adults.",
  },
  {
    shona: "Kukotama",
    english: "To bow / kneel in greeting",
    pronunciation: "koo-koh-TAH-mah",
    example: "Musikana anokotama pakukwazisa.",
    exampleTranslation: "A girl kneels slightly when greeting.",
  },
  {
    shona: "Zvakanaka sekuru",
    english: "All is well, grandfather",
    pronunciation: "zvah-kah-NAH-kah seh-KOO-roo",
    example: "Zvakanaka sekuru, masvita.",
    exampleTranslation: "All is well grandfather, thank you.",
  },
  {
    shona: "Maswera sei?",
    english: "How has your day been?",
    pronunciation: "mah-SWEH-rah say",
    example: "Maswera sei ambuya?",
    exampleTranslation: "How has your day been, grandmother?",
  },
  {
    shona: "Ndafera zvakanaka",
    english: "I have had a good day",
    pronunciation: "ndah-FEH-rah zvah-kah-NAH-kah",
    example: "Ndafera zvakanaka, ndatenda.",
    exampleTranslation: "I had a good day, thank you.",
  },
];

const clappingGuide = [
  {
    who: "Boys / Men",
    how: "Hollow clap — cup the hands so they produce a deeper sound",
    note: "Done two or three times when greeting an adult or receiving something",
  },
  {
    who: "Girls / Women",
    how: "Flat clap with hands turned at an angle — lighter, softer sound",
    note: "Often accompanied by a slight knee dip or bow of the head",
  },
];

export default function GreetingEldersPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Greeting Elders
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kukwazisa Vakuru
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Greeting an elder in Shona is not just about words — it involves
            the whole body. Children clap their hands, women may kneel
            slightly, and everyone uses the respectful Imi form without
            exception. These gestures are not optional formalities; they are
            how respect is made visible and felt.
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

        {/* Clapping guide */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Kuombera — The Clapping Greeting
        </h2>
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {clappingGuide.map((guide) => (
            <div
              key={guide.who}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <p className="font-bold text-[var(--color-primary)] text-lg mb-2">
                {guide.who}
              </p>
              <p className="text-sm text-[var(--color-text)] font-medium mb-2">
                {guide.how}
              </p>
              <p className="text-sm text-[var(--color-muted)] italic">
                {guide.note}
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
                1. Clapping is the body language of respect
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Children learn to clap when greeting adults from a very young
                age. The hollow clap for boys and the angled clap for girls
                are distinct — observant elders will notice which a child uses.
                It is also done when receiving food or a gift from an elder.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. Young women may kneel slightly
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                A gentle knee dip or slight lowering of the body when greeting
                an elder or receiving something is a traditional feminine
                gesture of respect. It is less common in urban areas but
                deeply appreciated in rural and traditional contexts.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Eye contact with elders
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Direct, sustained eye contact with elders can be considered
                challenging or disrespectful in traditional Shona settings.
                A respectful gaze that is attentive but not staring is the
                appropriate register.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Never eat in front of an elder without offering first
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                If you are eating or have food and an elder is present, you
                must offer them first — even if they decline. Eating in front
                of an elder without acknowledgement is a significant breach of
                Shona etiquette.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/greetings/formal-informal"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Formal vs Informal
          </Link>
          <Link
            href="/courses/greetings/introductions"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Introducing Yourself →
          </Link>
        </div>
      </div>
    </div>
  );
}
