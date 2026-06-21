import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happiness & Joy in Shona | Duramazwi",
  description:
    "Learn Shona words for happiness, joy, laughter, and celebration — and how Shona culture expresses happiness through singing, ululating, and communal sharing.",
};

const vocabulary = [
  {
    shona: "Mufaro",
    english: "Happiness / joy",
    pronunciation: "moo-FAH-roh",
    example: "Mufaro uri mumwoyo mangu.",
    exampleTranslation: "There is happiness in my heart.",
  },
  {
    shona: "Kufara",
    english: "To be happy",
    pronunciation: "koo-FAH-rah",
    example: "Ndinofara kuona mhuri yangu.",
    exampleTranslation: "I am happy to see my family.",
  },
  {
    shona: "Pemberera",
    english: "To celebrate",
    pronunciation: "pem-beh-REH-rah",
    example: "Tinopemberera zuva rako.",
    exampleTranslation: "We are celebrating your day.",
  },
  {
    shona: "Kuseka",
    english: "To laugh",
    pronunciation: "koo-SEH-kah",
    example: "Vana vanoseka pamwe chete.",
    exampleTranslation: "The children laugh together.",
  },
  {
    shona: "Kunakidzwa",
    english: "To enjoy / to be pleased",
    pronunciation: "koo-nah-kid-ZWAH",
    example: "Ndinakidzwa nemimhanzi.",
    exampleTranslation: "I am pleased by / I enjoy music.",
  },
  {
    shona: "Muromo murefu",
    english: "Broad smile (literally: long mouth)",
    pronunciation: "moo-ROH-moh moo-REH-foo",
    example: "Ane muromo murefu nhasi.",
    exampleTranslation: "He has a broad smile today.",
  },
  {
    shona: "Kufurwa",
    english: "To be excited / elated",
    pronunciation: "koo-FOOR-wah",
    example: "Ndinofurwa nezvaakataura.",
    exampleTranslation: "I am excited by what he said.",
  },
  {
    shona: "Zororo",
    english: "Rest / peace / contentment",
    pronunciation: "zoh-ROH-roh",
    example: "Ndine zororo mumwoyo mangu.",
    exampleTranslation: "I have peace / contentment in my heart.",
  },
  {
    shona: "Rudo",
    english: "Love / affection (a source of happiness)",
    pronunciation: "ROO-doh",
    example: "Rudo ndiwo mufaro wechokwadi.",
    exampleTranslation: "Love is true happiness.",
  },
  {
    shona: "Nyeredzi",
    english: "Star (used metaphorically for happiness and beauty)",
    pronunciation: "nyeh-REH-dzee",
    example: "Mwanasikana wangu inyeredzi yangu.",
    exampleTranslation: "My daughter is my star.",
  },
  {
    shona: "Zviri nani",
    english: "It is better / things are good",
    pronunciation: "zvee-ree NAH-nee",
    example: "Zviri nani nhasi kupfuura nezuro.",
    exampleTranslation: "Things are better today than yesterday.",
  },
  {
    shona: "Tinofara",
    english: "We are happy",
    pronunciation: "tee-noh-FAH-rah",
    example: "Tinofara nekuuya kwenyu.",
    exampleTranslation: "We are happy at your coming / arrival.",
  },
];

const culturalNotes = [
  {
    title: "Joy Through Song, Dance, and Ululation",
    body: "In Shona expressive culture, happiness is not just a feeling — it is performed. Joy is communicated through singing (kuimba), dancing (kutamba), and ululating (hwindindindi). Simply smiling is the quietest expression of happiness; the fullest expression is communal celebration.",
  },
  {
    title: "Hwindindindi — The Sound of Great Joy",
    body: "Women ululate (hwindindindi) at moments of intense communal happiness — when a relative arrives home, at weddings, when a child is born, and at celebrations. Ululating is one of the most distinctly Shona expressions of joy and signals that something wonderful is happening.",
  },
  {
    title: "Communal Happiness Over Individual Joy",
    body: "In Shona culture, good news is meant to be shared — keeping joy to yourself is unusual. If something wonderful happens, you tell others so they can share in it. The Shona phrase 'tinofara' (we are happy) reflects this — happiness is naturally communal, not private.",
  },
  {
    title: "Kufara — Generous Happiness",
    body: "'Kufara' (to be happy) is used generously in Shona social life. Expressing happiness at someone's arrival — 'Ndinofara kukuona' (I am happy to see you) — is both polite and genuine. Happiness at the presence of others is a social value, not mere politeness.",
  },
];

export default function HappinessPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/emotions"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Emotions Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Happiness &amp; Joy
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mufaro neMufaro Mukuru
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Happiness in Shona is not a private emotion — it is something that
            overflows into community. The vocabulary of joy includes words for
            celebration, laughter, singing, and the kind of contentment that
            comes from peace of heart. Learning these words opens the door to
            understanding how joy is lived in Shona culture.
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

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="grid gap-5 mb-12">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/emotions"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/emotions/sadness"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Sadness &amp; Grief →
          </Link>
        </div>
      </div>
    </div>
  );
}
