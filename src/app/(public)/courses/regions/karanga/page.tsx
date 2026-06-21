import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karanga Dialect | Duramazwi",
  description:
    "Learn about the Karanga dialect of Shona — the speech of Masvingo, Great Zimbabwe, and the Rozvi people.",
};

const vocabulary = [
  {
    karanga: "Ehe",
    standard: "Hongu",
    english: "Yes",
    note: "Karanga affirmation — 'ehe' is its signature word",
  },
  {
    karanga: "Maswera sei",
    standard: "Maswera sei",
    english: "Good afternoon (how has your day been?)",
    note: "Shared across dialects — Karanga preserves this greeting formally",
  },
  {
    karanga: "Ndasvika",
    standard: "Ndasvika",
    english: "I have arrived",
    note: "Shared — Karanga uses the same core verb forms",
  },
  {
    karanga: "Mwana",
    standard: "Mwana",
    english: "Child",
    note: "Consistent — Karanga uses identical form",
  },
  {
    karanga: "Chokwadi",
    standard: "Chokwadi",
    english: "Truth / truly",
    note: "Widely shared — used emphatically in Karanga speech",
  },
  {
    karanga: "Kuno",
    standard: "Pano / Apo",
    english: "Here",
    note: "Karanga 'kuno' vs Standard 'pano' — place prefix class differs",
  },
  {
    karanga: "Kumbo",
    standard: "Kumberi",
    english: "Forward / ahead",
    note: "Karanga directional — slightly different from Standard form",
  },
  {
    karanga: "Handidi",
    standard: "Handidi",
    english: "I don't want",
    note: "Consistent negative — shared fully",
  },
  {
    karanga: "Nhai",
    standard: "Nhai / Shuwa",
    english: "Really? / Is that so?",
    note: "Karanga exclamation of surprise — also used in Zezuru",
  },
  {
    karanga: "Sekuru",
    standard: "Sekuru",
    english: "Grandfather / maternal uncle",
    note: "Consistent — a core kinship term across all dialects",
  },
  {
    karanga: "Chirandu",
    standard: "Mhuno",
    english: "Nose",
    note: "Body part vocabulary differs — Karanga 'chirandu' is distinctive",
  },
  {
    karanga: "Nhengo",
    standard: "Nhengo / Tsoka",
    english: "Foot / leg",
    note: "Karanga may emphasise different parts of the leg",
  },
];

const culturalNotes = [
  {
    title: "The historical heartland",
    body: "Karanga speakers live in Masvingo Province — and Masvingo is where Great Zimbabwe stands. This means Karanga speakers can legitimately claim to be the direct descendants of the people who built one of Africa's most impressive pre-colonial structures. This heritage is not abstract — it is deeply felt, and Karanga identity carries a particular historical weight.",
  },
  {
    title: "The Rozvi subgroup",
    body: "The Rozvi people — who drove the Portuguese from the Zimbabwe Plateau in the 17th century — are a Karanga subgroup. Their military and political achievements are a source of pride in Karanga culture. The Rozvi maintained the tradition of stone building (dzimbabwe) and established the last great independent Shona empire before British colonisation.",
  },
  {
    title: "Karanga pronunciation differences",
    body: "Karanga has some distinct pronunciation patterns compared to Standard Shona. The retroflex consonant sounds and certain vowel qualities differ. Some Karanga words use sound patterns that Zezuru speakers might find unfamiliar. This is why Karanga is sometimes described as 'harder' — but hardness is relative to what you grew up with. To a Karanga speaker, Zezuru sounds equally foreign.",
  },
  {
    title: "Karanga and Standard Shona",
    body: "Karanga vocabulary was an important contributor to Standard Shona, particularly for vocabulary related to the land, cattle, and traditional authority. However, Zezuru's association with Harare gave it greater influence over the spoken standard. Karanga speakers who have been educated entirely in Standard Shona sometimes describe switching back to Karanga at home as 'speaking from the heart'.",
  },
];

export default function KarangaPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/regions"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Regions Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Karanga
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            ChiKaranga — The Dialect of Masvingo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Karanga is spoken across Masvingo Province, parts of the Midlands,
            and surrounding areas in southern Zimbabwe. It is the dialect most
            closely associated with the historical heartland of Shona
            civilisation — Great Zimbabwe stands in Karanga territory, the Rozvi
            Empire was built by Karanga people, and the deep roots of Shona
            culture are often traced to this region.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Karanga is generally mutually intelligible with Standard Shona, but
            it has distinct vocabulary, some unique sounds, and grammatical
            patterns that mark a speaker immediately as Karanga. That
            distinctiveness is worn with pride.
          </p>
        </div>

        {/* Dialect Region Card */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Region</p>
              <p className="text-[var(--color-muted)]">Masvingo Province, southern Midlands, parts of Matabeleland South</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Historical association</p>
              <p className="text-[var(--color-muted)]">Great Zimbabwe, Rozvi Empire — historical heartland of Shona civilisation</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Key subgroup</p>
              <p className="text-[var(--color-muted)]">The Rozvi — military aristocracy who expelled the Portuguese</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">Signature word</p>
              <p className="text-[var(--color-muted)]">'Ehe' for yes — immediately marks a Karanga speaker</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Comparison */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Karanga vs Standard Shona
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Karanga</th>
                <th className="px-4 py-3 font-semibold">Standard Shona</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {vocabulary.map((word, i) => (
                <tr
                  key={word.karanga + word.english}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {word.karanga}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.standard}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {word.english}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs italic">
                    {word.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/regions/zezuru"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Zezuru
          </Link>
          <Link
            href="/courses/regions/manyika"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Manyika →
          </Link>
        </div>
      </div>
    </div>
  );
}
