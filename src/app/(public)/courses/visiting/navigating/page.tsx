import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navigating Zimbabwe — Shona for Travellers | Duramazwi",
  description:
    "Learn the Shona for getting around Zimbabwe — kombis, ranks, road blocks, and asking for directions.",
};

const vocabulary = [
  {
    shona: "Mugwagwa",
    english: "Road / highway",
    pronunciation: "moo-GWAH-gwah",
    example: "Mugwagwa uyu unoenda kupi?",
    exampleTranslation: "Where does this road go?",
  },
  {
    shona: "Rank",
    english: "Bus / kombi terminus",
    pronunciation: "RANK",
    example: "Tinoenda kuRank kutora kombi.",
    exampleTranslation: "We are going to the rank to get a kombi.",
  },
  {
    shona: "Kombi",
    english: "Minibus (primary public transport)",
    pronunciation: "KOM-bee",
    example: "Kombi inoendera Chitungwiza.",
    exampleTranslation: "The kombi goes to Chitungwiza.",
  },
  {
    shona: "Pinda",
    english: "Get in (kombi conductor's call)",
    pronunciation: "PEE-ndah",
    example: "Pinda, pinda! Tinoenda!",
    exampleTranslation: "Get in, get in! We are going!",
  },
  {
    shona: "Buda",
    english: "Get out (kombi conductor's call)",
    pronunciation: "BOO-dah",
    example: "Buda pano kana wasvika.",
    exampleTranslation: "Get out here when you have arrived.",
  },
  {
    shona: "Imari?",
    english: "How much?",
    pronunciation: "ee-MAH-ree",
    example: "Imari kuenda kutown?",
    exampleTranslation: "How much to go to town?",
  },
  {
    shona: "Ndiniburuke pano",
    english: "Drop me here",
    pronunciation: "ndi-ni-BOO-roo-keh PAH-noh",
    example: "Ndiniburuke pano — ndasvika.",
    exampleTranslation: "Drop me here — I have arrived.",
  },
  {
    shona: "Enda mberi",
    english: "Go straight",
    pronunciation: "EN-dah MBEH-ree",
    example: "Enda mberi usvike pachikoro.",
    exampleTranslation: "Go straight until you reach the school.",
  },
  {
    shona: "Tendeuka",
    english: "Turn",
    pronunciation: "ten-deh-OO-kah",
    example: "Tendeuka kurudyi pachurch.",
    exampleTranslation: "Turn right at the church.",
  },
  {
    shona: "Petrol",
    english: "Petrol (used directly in Shona)",
    pronunciation: "PEH-trol",
    example: "Ndoda petrol — tank yakaoma.",
    exampleTranslation: "I need petrol — the tank is empty.",
  },
  {
    shona: "Bhazi",
    english: "Long-distance bus",
    pronunciation: "BAH-zee",
    example: "Tinobhazi kubva Harare kuBulawayo.",
    exampleTranslation: "We take a bus from Harare to Bulawayo.",
  },
  {
    shona: "Road block",
    english: "Police roadblock",
    pronunciation: "ROHD-blok",
    example: "Kune road block pamberi — mira.",
    exampleTranslation: "There is a road block ahead — stop.",
  },
];

const navigationPhrases = [
  {
    shona: "Nzira yaenda kupi?",
    english: "Which way does this road go?",
    notes: "Ask any local — people are genuinely helpful with directions.",
  },
  {
    shona: "Ndinoda kuenda ku...",
    english: "I want to go to...",
    notes: "Complete with the destination. Works for kombis, taxis, and asking locals.",
  },
  {
    shona: "Zviri kure zvakadini?",
    english: "How far is it?",
    notes: "Distances in Zimbabwe are often given in time, not kilometres.",
  },
  {
    shona: "Kombi inoendera...?",
    english: "Does a kombi go to...?",
    notes: "Ask at the rank before you get in — confirm the route.",
  },
  {
    shona: "Ndiudze pandanoburuka",
    english: "Tell me where to get off",
    notes: "Say this to the conductor when you board — they will let you know.",
  },
];

const culturalNotes = [
  {
    title: "Road blocks",
    body: "Police road blocks are very common in Zimbabwe — documentation checks happen on most major routes. Be polite, cooperative, and have your passport or ID ready. They are routine.",
  },
  {
    title: "Kombis and departure times",
    body: "Kombis leave when they are full — not on a schedule. Do not ask when it is departing. Sit, be patient, and it will fill up and leave.",
  },
  {
    title: "Long-distance buses",
    body: "For major routes (Harare to Bulawayo, Harare to Victoria Falls), Intercape, Eagle Liner, and other coach services are more reliable and have fixed departure times. Book ahead.",
  },
  {
    title: "Petrol stations",
    body: "Petrol station attendants fill your car for you — you do not pump your own fuel. A small tip for the attendant is appreciated and normal.",
  },
];

export default function NavigatingPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Navigating Zimbabwe
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kufamba muZimbabwe
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Getting around Zimbabwe is an experience in itself. The{" "}
            <strong>kombi</strong> — a minibus packed full of people, music, and
            conversation — is the heartbeat of public transport. This module
            gives you the language for ranks, kombis, road blocks, and asking
            for directions from anyone willing to help.
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

        {/* Key Phrases */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Key Navigation Phrases
        </h2>
        <div className="grid gap-4 mb-12">
          {navigationPhrases.map((phrase) => (
            <div
              key={phrase.shona}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                {phrase.shona}
              </p>
              <p className="text-sm font-medium text-[var(--color-text)] mb-2">
                {phrase.english}
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed italic">
                {phrase.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Getting Around
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
            href="/courses/visiting/at-the-village"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← At the Village
          </Link>
          <Link
            href="/courses/visiting/hosting-guests"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Hosting Guests →
          </Link>
        </div>
      </div>
    </div>
  );
}
