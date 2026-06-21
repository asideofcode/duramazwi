import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Village vs City Travel in Shona | Duramazwi",
  description:
    "Learn the Shona vocabulary for rural and urban travel — and why going kumusha is one of Zimbabwe's most important annual journeys.",
};

const vocabulary = [
  {
    shona: "Guta",
    english: "City / town",
    pronunciation: "GOO-tah",
    example: "Guta rino riri nani.",
    exampleTranslation: "This city is big.",
  },
  {
    shona: "Musha",
    english: "Village / rural home",
    pronunciation: "MOO-shah",
    example: "Musha wangu uri kuBuhera.",
    exampleTranslation: "My village is in Buhera.",
  },
  {
    shona: "Kumusha",
    english: "To the village / going home to the village",
    pronunciation: "koo-MOO-shah",
    example: "Ndinoenda kumusha Krisimasi.",
    exampleTranslation: "I go to the village at Christmas.",
  },
  {
    shona: "Kuenda kumusha",
    english: "Going home to the village",
    pronunciation: "koo-EN-dah koo-MOO-shah",
    example: "Kuenda kumusha kwakanaka.",
    exampleTranslation: "Going home to the village is wonderful.",
  },
  {
    shona: "Mugwagwa",
    english: "Main road / highway",
    pronunciation: "moo-GWAH-gwah",
    example: "Mugwagwa unoenda kuHarare.",
    exampleTranslation: "The main road goes to Harare.",
  },
  {
    shona: "Nzira yemakomo",
    english: "Mountain path",
    pronunciation: "N-ZEE-rah yeh-mah-KOH-moh",
    example: "Nzira yemakomo inotora nguva refu.",
    exampleTranslation: "The mountain path takes a long time.",
  },
  {
    shona: "Bhidhi",
    english: "Ridge / hill",
    pronunciation: "BHEE-dhee",
    example: "Imba yavo iri pabhidhi.",
    exampleTranslation: "Their house is on the ridge.",
  },
  {
    shona: "Rwizi",
    english: "River — often needs crossing",
    pronunciation: "RWEE-zee",
    example: "Rwizi rwakafamba nemvura yakawanda.",
    exampleTranslation: "The river is flowing with a lot of water.",
  },
  {
    shona: "Chikwama",
    english: "Bag for travelling",
    pronunciation: "chee-KWAH-mah",
    example: "Ndaisa zvose muchikwama changu.",
    exampleTranslation: "I packed everything in my travel bag.",
  },
  {
    shona: "Kuenda nebhazi",
    english: "To travel by bus",
    pronunciation: "koo-EN-dah neh-BHAH-zee",
    example: "Tinoenda nebhazi kumusha.",
    exampleTranslation: "We travel by bus to the village.",
  },
];

const culturalNotes = [
  {
    title: "Kumusha — going home",
    body: "Going 'kumusha' (to the rural home) is one of the most important events in an urban Zimbabwean's calendar. It typically happens at Christmas and Easter, when entire cities partially empty as people return to their ancestral homes. For many, musha is where they were born, where their parents are buried, and where they truly belong — regardless of how long they have lived in the city.",
  },
  {
    title: "Unpaved roads and uncertain travel",
    body: "Roads leading to many rural areas of Zimbabwe are unpaved, and travel to remote villages can be slow and uncertain. Vehicles may get stuck, bridges may be washed out, and distances that look short on a map can take hours. This is normal. Patience and flexibility are part of rural travel culture.",
  },
  {
    title: "Greet every household along the way",
    body: "When travelling through a rural area, you do not pass a homestead without stopping to greet. Passing without acknowledging people is considered extremely rude. The greeting may be brief — a simple 'Mangwanani' and a wave — but it must happen. This custom reinforces community bonds and keeps travellers safe through networks of mutual recognition.",
  },
  {
    title: "The rainy season changes everything",
    body: "The Zimbabwean rainy season (roughly November to March) transforms rural travel. Rivers flood, dirt roads become impassable, and some villages become temporarily cut off. Travellers planning to go kumusha during this period build in extra time and have contingency plans. Local knowledge is invaluable.",
  },
];

export default function VillageCityPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/transport"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Transport Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Village vs City Travel
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kumusha neGuta
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            For most Zimbabweans, life is split between two worlds — guta (city)
            and musha (village). Each has its own pace, its own rules, and its
            own vocabulary. The annual journey kumusha is one of the most
            emotionally important events in the Zimbabwean calendar.
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
            Cultural Notes: Two Worlds of Travel
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
            href="/courses/transport/public-transport"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Public Transport
          </Link>
          <Link
            href="/courses/transport/asking-help"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Asking for Help →
          </Link>
        </div>
      </div>
    </div>
  );
}
