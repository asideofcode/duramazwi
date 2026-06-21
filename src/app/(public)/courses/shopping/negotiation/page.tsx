import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Negotiation & Prices in Shona | Duramazwi",
  description:
    "Learn how to negotiate prices in Shona — from asking the price to closing the deal with confidence.",
};

const vocabulary = [
  {
    shona: "Marii mutengo?",
    english: "What is the price?",
    pronunciation: "mah-REE-ee moo-TEN-goh",
    example: "Marii mutengo wenguo iyi?",
    exampleTranslation: "What is the price of this clothing?",
  },
  {
    shona: "Yakosha",
    english: "It is expensive",
    pronunciation: "yah-KOH-shah",
    example: "Yakosha zvikuru. Regedzai.",
    exampleTranslation: "It is very expensive. Please reduce it.",
  },
  {
    shona: "Regedzai",
    english: "Reduce / lower it",
    pronunciation: "reh-ged-ZAH-ee",
    example: "Regedzai mutengo.",
    exampleTranslation: "Lower the price.",
  },
  {
    shona: "Ndikupe...",
    english: "Let me give you...",
    pronunciation: "ndee-KOO-peh",
    example: "Ndikupe marii mashanu.",
    exampleTranslation: "Let me give you five dollars.",
  },
  {
    shona: "Haufikiri here?",
    english: "Aren't you thinking? / Is that reasonable?",
    pronunciation: "hah-oo-fee-KEE-ree HEH-reh",
    example: "Haufikiri here kuti mutengo uyu wakadhura?",
    exampleTranslation: "Don't you think this price is too high?",
  },
  {
    shona: "Tichambotaura",
    english: "Let us discuss",
    pronunciation: "tee-cham-boh-TAH-oo-rah",
    example: "Tichambotaura mutengo wakanaka.",
    exampleTranslation: "Let us discuss a good price.",
  },
  {
    shona: "Bvuma",
    english: "Agree / accept",
    pronunciation: "BVOO-mah",
    example: "Bvuma mutengo uyu.",
    exampleTranslation: "Accept this price.",
  },
  {
    shona: "Handibvumi",
    english: "I don't agree",
    pronunciation: "han-dee-BVOO-mee",
    example: "Handibvumi. Wakadhura zvikuru.",
    exampleTranslation: "I don't agree. It is far too expensive.",
  },
  {
    shona: "Mwari nekutenda",
    english: "God and thank you — closing a deal",
    pronunciation: "MWAH-ree neh-koo-TEN-dah",
    example: "Mwari nekutenda. Tichazoonana.",
    exampleTranslation: "God and thank you. We will see each other again.",
  },
  {
    shona: "Zvakatanga",
    english: "That is agreed / it is a deal",
    pronunciation: "zvah-kah-TAN-gah",
    example: "Zvakatanga. Ndikupe zvino.",
    exampleTranslation: "It is a deal. Let me pay you now.",
  },
];

const culturalNotes = [
  {
    title: "The first price is never final",
    body: "Opening offers at a Zimbabwean market are expected to be high — both parties know the final price will be lower. Never assume the first price is the real price. Accepting immediately without negotiating may even offend the vendor, who expects the back-and-forth.",
  },
  {
    title: "Negotiation builds rapport",
    body: "A good negotiation is a social event. Humour, light teasing, and friendly conversation are all part of the process. The vendor who laughs with you is the one who gives you the best price. Being cold or transactional is counterproductive.",
  },
  {
    title: "Walking away is a tactic",
    body: "If you cannot reach a price you are happy with, walk away slowly and decisively. This is a recognised and respected negotiating move — the vendor will often call you back with a better offer. Do not rush it.",
  },
  {
    title: "Aggression is disrespectful",
    body: "There is a difference between confident negotiation and rudeness. Being too aggressive, dismissive, or condescending — especially to older women vendors — is deeply frowned upon. The goal is a deal that feels fair to both sides.",
  },
];

export default function NegotiationPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Negotiation & Prices
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kutaura Mutengo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Negotiating a price in Shona is not confrontational — it is
            collaborative. The vendor expects you to push back, and you should
            expect them to hold firm at first. These ten phrases are the tools
            of a confident market-goer.
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
            Cultural Notes: The Art of Negotiation
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
            href="/courses/shopping/market-vocab"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Market Vocabulary
          </Link>
          <Link
            href="/courses/shopping/products"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Common Products →
          </Link>
        </div>
      </div>
    </div>
  );
}
