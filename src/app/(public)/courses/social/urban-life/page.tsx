import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban Life in Zimbabwe in Shona | Duramazwi",
  description:
    "Learn Shona for city life in Zimbabwe — kombis, WhatsApp, shopping, football, and the language of Harare's urban townships.",
};

const vocabulary = [
  {
    shona: "Komboni / Musha weguta",
    english: "Urban neighbourhood / Township",
    pronunciation: "kohm-BOH-nee / MOO-shah weh-GOO-tah",
    example: "Ndinogara mukomboni.",
    exampleTranslation: "I live in the township.",
  },
  {
    shona: "Takkisi",
    english: "Taxi / Kombi",
    pronunciation: "tah-KEE-see",
    example: "Ndakakwira takkisi kuenda kubasa.",
    exampleTranslation: "I took a taxi to go to work.",
  },
  {
    shona: "Shoppindi",
    english: "Shopping",
    pronunciation: "shoh-PEEN-dee",
    example: "Ndinoenda kushoppindi Mugovera.",
    exampleTranslation: "I go shopping on Saturday.",
  },
  {
    shona: "Bhangi",
    english: "Bank",
    pronunciation: "BHAHN-gee",
    example: "Ndinoenda kubhangi nhasi.",
    exampleTranslation: "I am going to the bank today.",
  },
  {
    shona: "Spoti",
    english: "Sports (especially watching sport)",
    pronunciation: "SPOH-tee",
    example: "Tinoona spoti pamwe.",
    exampleTranslation: "We watch sports together.",
  },
  {
    shona: "Bhawa",
    english: "Bar / Pub",
    pronunciation: "BHAH-wah",
    example: "Ari kubhawa.",
    exampleTranslation: "He is at the bar.",
  },
  {
    shona: "Kuita taunimu",
    english: "To go to town",
    pronunciation: "koo-EE-tah tah-oo-NEE-moo",
    example: "Ndinoita taunimu mangwanani.",
    exampleTranslation: "I go to town in the morning.",
  },
  {
    shona: "Mhuri yemukombi",
    english: "Kombi family (people you travel with daily)",
    pronunciation: "MHOO-ree yeh-moo-KOHM-bee",
    example: "Ndine mhuri yemukombi yangu.",
    exampleTranslation: "I have my kombi family.",
  },
  {
    shona: "Nhamba yerunhare",
    english: "Phone number",
    pronunciation: "NHAM-bah yeh-roon-HAH-reh",
    example: "Ndipe nhamba yako yerunhare.",
    exampleTranslation: "Give me your phone number.",
  },
  {
    shona: "WhatsApp",
    english: "WhatsApp (used directly in Shona speech)",
    pronunciation: "WAHTS-ahp",
    example: "Nditumire WhatsApp.",
    exampleTranslation: "Send me a WhatsApp.",
  },
];

const kombiCulture = {
  heading: "The Kombi: Zimbabwe's Social Vehicle",
  body: `The kombi (minibus taxi) is not just transport in Zimbabwe — it is a social institution. In Harare, Bulawayo, and every other city, kombis carry most of the population from home to work and back every single day. Over time, regular commuters on the same route recognise each other. They greet each other. They look out for each other. Hence the phrase 'mhuri yemukombi' — your kombi family.

Inside a kombi, all of Zimbabwean social life is compressed into a small space. Conversations happen. News travels. Arguments break out about football. People share food. The music from the driver's radio sets the mood of the morning. If you want to understand how ordinary Zimbabweans live, ride a kombi.

Kombi conductors are known for their rapid, creative Shona-English call-outs as they hustle for passengers. Learning to understand them is a genuine language challenge — and a badge of urban knowledge.`,
};

const culturalNotes = [
  {
    title: "Urban Shona absorbs everything",
    body: "Harare Shona is one of the most linguistically creative dialects in southern Africa. It absorbs English, South African slang, and its own inventions with ease. 'Takkisi', 'bhangi', 'shoppindi', 'WhatsApp' — these are not failures of Shona; they are evidence of a living language adapting to urban life in real time.",
  },
  {
    title: "The high-density suburbs have distinct characters",
    body: "Mbare, Highfield, Budiriro, Glen Norah, Dzivarasekwa — each has its own social identity. Mbare is the oldest and most historic, known as the birthplace of mbira and chimurenga music. Highfield is politically significant. These are not interchangeable — Zimbabweans from the city know their suburb as part of their identity.",
  },
  {
    title: "WhatsApp is how Shona communities stay together",
    body: "WhatsApp family groups, church groups, and friend groups are the primary way Shona communities stay in contact globally — whether across Harare or across continents. A Zimbabwean in the UK is likely in the same WhatsApp group as their grandmother in Masvingo. The word 'WhatsApp' appears naturally in Shona sentences: 'Nditumire WhatsApp' (Send me a WhatsApp).",
  },
  {
    title: "Football unifies the country",
    body: "When the Warriors (Zimbabwe's national football team) play, the country stops. Matches are watched in bars, on street corners, on shared screens in kombis. Club football — particularly English Premier League — is followed passionately. Shared sports conversation is one of the fastest ways to connect with Zimbabwean strangers.",
  },
];

export default function UrbanLifePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/social"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Social Life Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Urban Life in Zimbabwe
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Upenyu Hwekuguta
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Harare Shona is its own dialect — faster, more mixed, more
            inventive than village Shona, borrowing freely from English and
            South African slang. This module covers the vocabulary of everyday
            urban Zimbabwe: getting around, the social spaces where life
            happens, and the technology that binds Zimbabwean communities
            across the world.
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

        {/* Kombi Culture */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-12">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            {kombiCulture.heading}
          </h3>
          <div className="space-y-4">
            {kombiCulture.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-[var(--color-muted)] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Life in the City
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
            href="/courses/social/village-urban"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Village vs Urban Life
          </Link>
          <Link
            href="/courses/social/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Social Life Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
