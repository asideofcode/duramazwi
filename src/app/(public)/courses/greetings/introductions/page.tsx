import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introducing Yourself in Shona | Duramazwi",
  description:
    "Learn how to say your name and introduce yourself in Shona — including the tradition of sharing your mutupo (totem).",
};

const vocabulary = [
  {
    shona: "Zita rangu ndi...",
    english: "My name is...",
    pronunciation: "ZEE-tah RAH-ngoo ndee",
    example: "Zita rangu ndi Tinashe.",
    exampleTranslation: "My name is Tinashe.",
  },
  {
    shona: "Ndinonzi...",
    english: "I am called...",
    pronunciation: "ndee-NOH-nzee",
    example: "Ndinonzi Chido.",
    exampleTranslation: "I am called Chido.",
  },
  {
    shona: "Ndinodaidwa...",
    english: "I am known as...",
    pronunciation: "ndee-noh-dah-EE-dwah",
    example: "Ndinodaidwa kuti Tino.",
    exampleTranslation: "I am known as Tino.",
  },
  {
    shona: "Ndiri...",
    english: "I am...",
    pronunciation: "NDEE-ree",
    example: "Ndiri mudzidzi.",
    exampleTranslation: "I am a student.",
  },
  {
    shona: "Chii zita rako?",
    english: "What is your name? (informal)",
    pronunciation: "chee ZEE-tah RAH-koh",
    example: "Mhoro, chii zita rako?",
    exampleTranslation: "Hello, what is your name?",
  },
  {
    shona: "Zita renyu ndiani?",
    english: "What is your name? (formal)",
    pronunciation: "ZEE-tah REH-nyoo ndee-AH-nee",
    example: "Manheru, zita renyu ndiani?",
    exampleTranslation: "Good evening, what is your name? (formal)",
  },
  {
    shona: "Ndinofara kukuziva",
    english: "I am happy to know you",
    pronunciation: "ndee-noh-FAH-rah koo-koo-ZEE-vah",
    example: "Ndinofara kukuziva, zita rangu ndi Rudo.",
    exampleTranslation: "I am happy to know you, my name is Rudo.",
  },
  {
    shona: "Tafara kukuziva",
    english: "We are happy to know you",
    pronunciation: "tah-FAH-rah koo-koo-ZEE-vah",
    example: "Tafara kukuziva, mauya.",
    exampleTranslation: "We are happy to know you, welcome.",
  },
];

const introductionSteps = [
  {
    step: "1",
    label: "Give your name",
    shona: "Zita rangu ndi Tapiwa.",
    english: "My name is Tapiwa.",
  },
  {
    step: "2",
    label: "State your mutupo (totem) — traditional",
    shona: "Mutupo wangu ndiShumba.",
    english: "My totem is Lion.",
  },
  {
    step: "3",
    label: "Mention where you are from",
    shona: "Ndinobva Masvingo.",
    english: "I come from Masvingo.",
  },
  {
    step: "4",
    label: "Express pleasure at meeting",
    shona: "Ndinofara kukuziva.",
    english: "I am happy to know you.",
  },
];

export default function IntroductionsPage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Introducing Yourself
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuzvizivisa
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A Shona introduction is more than a name exchange. Traditionally
            it includes your totem (mutupo) and often a mention of where your
            family is from. These details allow the other person to immediately
            locate you in the broader social web — finding shared lineages,
            common villages, and whether you might be clan family.
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

        {/* Traditional Introduction Steps */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          A Traditional Introduction
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-12">
          <p className="text-sm text-[var(--color-muted)] mb-5">
            In a traditional or semi-formal context, a full Shona introduction
            might follow these steps:
          </p>
          <div className="space-y-4">
            {introductionSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wide mb-0.5">
                    {step.label}
                  </p>
                  <p className="font-semibold text-[var(--color-text)]">
                    {step.shona}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {step.english}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Giving your mutupo alongside your name
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Traditionally, introducing yourself includes your totem clan
                (mutupo). Saying &ldquo;Zita rangu ndi Tendai, ndiShumba&rdquo; (My
                name is Tendai, I am of the Lion clan) immediately tells the
                other person who your ancestors are and whether you share
                lineage.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. First meetings often include family background
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Questions like &ldquo;Unobvepi?&rdquo; (where do you come from?) are
                not intrusive — they are how Shona people locate each other
                socially. Knowing someone&apos;s musha (home village) and family
                creates an instant sense of connection or distance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Social rank matters in how you introduce yourself
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                When introducing yourself to an elder, you would not simply
                state your name — you would do so with the appropriate
                clapping, use Imi when asking their name, and allow them to
                lead the conversation rather than taking turns equally.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Shona names carry meaning
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Most Shona given names are full sentences or meaningful words.
                Tinashe (we are with God), Chido (desire/wish), Rudo (love),
                Tapiwa (we have been given) — names express the family&apos;s story
                at the time of birth.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/greetings/greeting-elders"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Greeting Elders
          </Link>
          <Link
            href="/courses/greetings/origins"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Where Are You From? →
          </Link>
        </div>
      </div>
    </div>
  );
}
