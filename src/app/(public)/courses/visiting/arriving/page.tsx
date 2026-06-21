import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arriving in Zimbabwe — Shona for Travellers | Duramazwi",
  description:
    "Learn the Shona phrases you need when you land in Zimbabwe — at the airport, customs, changing money, and your first words on the ground.",
};

const vocabulary = [
  {
    shona: "Ndisvika",
    english: "I have arrived",
    pronunciation: "ndi-SVEE-kah",
    example: "Ndisvika Harare mangwanani.",
    exampleTranslation: "I arrived in Harare this morning.",
  },
  {
    shona: "Kusvika",
    english: "To arrive",
    pronunciation: "koo-SVEE-kah",
    example: "Ndinofara kusvika kumba.",
    exampleTranslation: "I am happy to arrive home.",
  },
  {
    shona: "Zim",
    english: "Zimbabwe (affectionate short form)",
    pronunciation: "ZIM",
    example: "Ndisvika Zim!",
    exampleTranslation: "I have arrived in Zim!",
  },
  {
    shona: "Harare",
    english: "Capital city of Zimbabwe",
    pronunciation: "hah-RAH-reh",
    example: "Harare ndiko kunogarwa nevakawanda.",
    exampleTranslation: "Harare is where many people live.",
  },
  {
    shona: "Airport",
    english: "Airport (used directly in Shona speech)",
    pronunciation: "AIR-port",
    example: "Ndiri kuenda kuAirport.",
    exampleTranslation: "I am going to the airport.",
  },
  {
    shona: "Passport",
    english: "Passport (used directly in Shona speech)",
    pronunciation: "PASS-port",
    example: "Passport yangu iri mubeji.",
    exampleTranslation: "My passport is in the bag.",
  },
  {
    shona: "Border",
    english: "Border crossing (used directly in Shona speech)",
    pronunciation: "BOR-der",
    example: "Tapfura border takabva South Africa.",
    exampleTranslation: "We crossed the border coming from South Africa.",
  },
  {
    shona: "Kupinda muZimbabwe",
    english: "To enter Zimbabwe",
    pronunciation: "koo-PEE-ndah moo-zim-BAB-weh",
    example: "Ndafara kupinda muZimbabwe.",
    exampleTranslation: "I am glad to enter Zimbabwe.",
  },
  {
    shona: "Mureiteri",
    english: "Visitor / tourist",
    pronunciation: "moo-reh-EH-teh-ree",
    example: "Ndiri mureiteri kubva kuUK.",
    exampleTranslation: "I am a visitor from the UK.",
  },
  {
    shona: "Ndinouya",
    english: "I am coming / I am on my way",
    pronunciation: "ndi-no-OO-yah",
    example: "Ndinouya — ndiri kuAirport iye zvino.",
    exampleTranslation: "I am on my way — I am at the airport right now.",
  },
  {
    shona: "Imwe nzvimbo",
    english: "A place / somewhere",
    pronunciation: "EEM-weh nzVEEM-boh",
    example: "Ndinoda kuenda imwe nzvimbo.",
    exampleTranslation: "I need to go somewhere.",
  },
];

const arrivalPhrases = [
  {
    shona: "Ndisvika Harare",
    english: "I have arrived in Harare",
    notes: "Send this to family the moment the plane lands.",
  },
  {
    shona: "Ndinoda bhadharo rekumhanya",
    english: "I need to change money",
    notes: "Use at forex bureaus or banks.",
  },
  {
    shona: "Ndinoda zvokudya",
    english: "I need food",
    notes: "Direct and clear — used anywhere you are hungry.",
  },
  {
    shona: "Ndinofanira kuenda kupi?",
    english: "Where must I go?",
    notes: "Ask at immigration or when you are lost inside the airport.",
  },
  {
    shona: "Ndinoshanyira",
    english: "I am visiting / I am a visitor",
    notes: "Use this to explain your status to officials or hosts.",
  },
];

const culturalNotes = [
  {
    title: "Currency",
    body: "Zimbabwe uses USD as the primary currency alongside the ZiG. The situation changes — always confirm the current preferred currency before your trip and carry USD in small denominations.",
  },
  {
    title: "Airport arrivals",
    body: "Harare International Airport arrivals are typically lively. Family delegations come to meet visitors — sometimes dozens of people. Do not be startled. You are being honoured.",
  },
  {
    title: "The warmth is real",
    body: "First-time visitors are often struck by how warm and welcoming people are at every step — immigration, taxi ranks, shops. This is not performance. It is culture.",
  },
  {
    title: "The pace",
    body: "The pace in Zimbabwe is different from Western cities. Queues move at their own speed. Conversations happen before transactions. Relax — you will get there.",
  },
];

export default function ArrivingPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Arriving in Zimbabwe
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kusvika muZimbabwe
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The moment you land, you will want to tell someone. Whether it is a
            WhatsApp to family or a greeting to the person beside you,{" "}
            <strong>Ndisvika</strong> — I have arrived — is one of the most
            satisfying words to say. This module covers what you need from
            arrival to your first meal on Zimbabwean soil.
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
          Key Arrival Phrases
        </h2>
        <div className="grid gap-4 mb-12">
          {arrivalPhrases.map((phrase) => (
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
            Cultural Notes: Arriving in Zimbabwe
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
            href="/courses/visiting"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/visiting/at-the-village"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: At the Village →
          </Link>
        </div>
      </div>
    </div>
  );
}
