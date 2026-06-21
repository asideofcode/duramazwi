import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Vocabulary in Shona | Duramazwi",
  description:
    "Learn the essential Shona words for navigating a Zimbabwean market — vendors, buyers, prices, and goods.",
};

const vocabulary = [
  {
    shona: "Musika",
    english: "Market",
    pronunciation: "moo-SEE-kah",
    example: "Ndinoenda kumusika mangwanani.",
    exampleTranslation: "I go to the market in the morning.",
  },
  {
    shona: "Takkisi / Magumo",
    english: "Market stall / seller area",
    pronunciation: "tah-KEE-see / mah-GOO-moh",
    example: "Takkisi rake rine nguo dzakawanda.",
    exampleTranslation: "His market stall has many clothes.",
  },
  {
    shona: "Mutengesi",
    english: "Seller / vendor",
    pronunciation: "moo-ten-GEH-see",
    example: "Mutengesi uya anotengesa muriwo.",
    exampleTranslation: "That vendor sells vegetables.",
  },
  {
    shona: "Mubvunzi / Mutengi",
    english: "Buyer / customer",
    pronunciation: "moo-BVOON-zee / moo-TEN-gee",
    example: "Mutengi akauya mangwanani.",
    exampleTranslation: "The customer came in the morning.",
  },
  {
    shona: "Mutengo",
    english: "Price",
    pronunciation: "moo-TEN-goh",
    example: "Mutengo wake wakadhura.",
    exampleTranslation: "Its price is expensive.",
  },
  {
    shona: "Chipo",
    english: "Gift / item",
    pronunciation: "CHEE-poh",
    example: "Ndinoda kutengera mwana wangu chipo.",
    exampleTranslation: "I want to buy my child a gift.",
  },
  {
    shona: "Zvokutengesa",
    english: "Things to sell / goods",
    pronunciation: "zvoh-koo-ten-GEH-sah",
    example: "Zvokutengesa zvake zvakanaka.",
    exampleTranslation: "Her goods are good quality.",
  },
  {
    shona: "Kuwana",
    english: "To find / to get",
    pronunciation: "koo-WAH-nah",
    example: "Ndakuwana mutengo wakanaka.",
    exampleTranslation: "I found a good price.",
  },
  {
    shona: "Kuchema",
    english: "To want / to ask for",
    pronunciation: "koo-CHEH-mah",
    example: "Anochema mbesa.",
    exampleTranslation: "She is asking for beans.",
  },
  {
    shona: "Tsvaga",
    english: "To search for",
    pronunciation: "TSVAH-gah",
    example: "Ndinotsvaga shangu dzitsva.",
    exampleTranslation: "I am searching for new shoes.",
  },
  {
    shona: "Rakwana",
    english: "It is finished / sold out",
    pronunciation: "rah-KWAH-nah",
    example: "Muriwo rakwana.",
    exampleTranslation: "The vegetables are sold out.",
  },
  {
    shona: "Zvimwe",
    english: "More / another one",
    pronunciation: "ZVEEM-weh",
    example: "Ndipe zvimwe.",
    exampleTranslation: "Give me more.",
  },
];

const culturalNotes = [
  {
    title: "Markets as social spaces",
    body: "Zimbabwean markets are loud, lively, and deeply social. Going to the musika is not merely an errand — it is a chance to catch up with neighbours, hear news, and engage with the community. Expect noise, colour, and conversation.",
  },
  {
    title: "Women who made what they sell",
    body: "Most vendors are women who have farmed, cooked, or made the goods they are selling. Buying from them is a direct transaction with the producer — there is no middleman. This gives the musika a personal, human quality.",
  },
  {
    title: "Fixed prices vs. negotiation",
    body: "Fixed-price shops (supermarkets, hardware stores) exist but traditional open-air markets always expect negotiation. Walking in and accepting the first price marks you as inexperienced. The art of the deal is part of the transaction.",
  },
];

export default function MarketVocabPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Market Vocabulary
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mazwi eMusika
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The musika (market) is one of the most important public spaces in
            Zimbabwean life. To participate confidently, you need the words for
            the people, goods, prices, and actions that make up a market
            interaction. These twelve words are your foundation.
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
            Cultural Notes: The Zimbabwean Market
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
            href="/courses/shopping"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/shopping/negotiation"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Negotiation & Prices →
          </Link>
        </div>
      </div>
    </div>
  );
}
