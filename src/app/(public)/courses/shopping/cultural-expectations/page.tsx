import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Expectations at the Market | Duramazwi",
  description:
    "Learn the unwritten rules of Zimbabwean market etiquette — how to greet vendors, handle goods, and shop with respect.",
};

const vocabulary = [
  {
    shona: "Kuremekedzwa",
    english: "To be respected",
    pronunciation: "koo-reh-meh-KEDZ-wah",
    example: "Mutengesi anoda kuremekedzwa.",
    exampleTranslation: "The vendor deserves to be respected.",
  },
  {
    shona: "Kutenda",
    english: "To thank",
    pronunciation: "koo-TEN-dah",
    example: "Ndinokutenda nekutenga.",
    exampleTranslation: "I thank you for buying.",
  },
  {
    shona: "Kuudza",
    english: "To tell / to advise",
    pronunciation: "koo-OOD-zah",
    example: "Mutengesi anokuudza nezvemutengo wakanaka.",
    exampleTranslation: "The vendor advises you about a good price.",
  },
  {
    shona: "Kubata",
    english: "To touch / to handle",
    pronunciation: "koo-BAH-tah",
    example: "Kubvunza musati mabata.",
    exampleTranslation: "Ask before you touch.",
  },
  {
    shona: "Kuita nharo",
    english: "To haggle aggressively / rudely",
    pronunciation: "koo-EE-tah N-hah-roh",
    example: "Kuita nharo hakufadzi mutengesi.",
    exampleTranslation: "Being rude when haggling does not please the vendor.",
  },
  {
    shona: "Kusunga bhegi",
    english: "To wrap up / bag the purchase",
    pronunciation: "koo-SOON-gah BHEH-gee",
    example: "Mutengesi akasunga bhegi rangu.",
    exampleTranslation: "The vendor bagged my purchase.",
  },
  {
    shona: "Mukadzi wekumusika",
    english: "Market woman — a respected term",
    pronunciation: "moo-KAH-dzee weh-koo-moo-SEE-kah",
    example: "Mukadzi wekumusika ane ruzivo rwakawanda.",
    exampleTranslation: "The market woman has much knowledge.",
  },
];

const culturalNotes = [
  {
    title: "Greet before you ask",
    body: "Walking up to a vendor and immediately asking for a price — without first greeting — is considered rude. The correct approach is always to greet first: 'Mangwanani' (good morning) or 'Masikati' (good afternoon). Only after the greeting do you move to business. The greeting signals respect and sets a friendly tone.",
  },
  {
    title: "Ask before you touch produce",
    body: "It is polite to ask permission before picking up or handling fresh produce, especially food. Simply handling goods without asking suggests a lack of respect for the vendor's livelihood. A brief 'ndingabata here?' (may I touch?) is all that is needed.",
  },
  {
    title: "Respect for older women vendors",
    body: "Vendors who are older women — the archetypal 'mukadzi wekumusika' — command significant cultural respect. They are not just sellers; they are community figures. Being dismissive, impatient, or condescending to them is considered deeply disrespectful and will earn you a cold reception across the whole market.",
  },
  {
    title: "Spread your buying across vendors",
    body: "Taking all your purchases from a single vendor, when you could spread them across multiple sellers, is poor market etiquette. Buying small amounts from several vendors shows generosity and community spirit — a practice deeply valued in Zimbabwean social culture.",
  },
];

export default function CulturalExpectationsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/shopping"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Shopping Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Cultural Expectations
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Tsika dzeMusika
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Knowing the words is only half the story. At a Zimbabwean market,
            there are unwritten rules that experienced shoppers follow
            instinctively. These seven words and four cultural notes will help
            you navigate the musika with genuine respect — and you will likely
            get a better price as a result.
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
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
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
                    <span className="text-[var(--color-text)] font-medium">{word.example}</span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">{word.exampleTranslation}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Market Etiquette
          </h3>
          <div className="grid gap-4">
            {culturalNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-1">{note.title}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{note.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/shopping/products"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Common Products
          </Link>
          <Link
            href="/courses/shopping/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
