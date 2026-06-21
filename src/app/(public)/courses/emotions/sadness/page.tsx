import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sadness & Grief in Shona | Duramazwi",
  description:
    "Learn Shona words for sadness, grief, and heartache — including the uniquely Shona concept of shungu and how grief is expressed communally.",
};

const vocabulary = [
  {
    shona: "Kuchema",
    english: "To cry / to weep",
    pronunciation: "koo-CHEH-mah",
    example: "Aichema usiku hwose.",
    exampleTranslation: "She was crying the whole night.",
  },
  {
    shona: "Shungu",
    english: "Deep sadness / heartache / longing",
    pronunciation: "SHOON-goo",
    example: "Ndine shungu nekuenda kwake.",
    exampleTranslation: "I have deep sadness at his departure.",
  },
  {
    shona: "Kutambudzika",
    english: "To suffer",
    pronunciation: "koo-tahm-bood-ZEE-kah",
    example: "Haafaniri kutambudzika ega.",
    exampleTranslation: "He should not suffer alone.",
  },
  {
    shona: "Kusuwa",
    english: "To miss someone / something",
    pronunciation: "koo-SOO-wah",
    example: "Ndinosuwa baba vangu.",
    exampleTranslation: "I miss my father.",
  },
  {
    shona: "Kuzvidzvinyirira",
    english: "To suppress grief — holding it in",
    pronunciation: "koo-zvid-zvee-nyee-REE-rah",
    example: "Airamba kuzvidzvinyirira — akatoichema.",
    exampleTranslation: "He refused to suppress it — he wept.",
  },
  {
    shona: "Ndine shungu",
    english: "I have sadness / I am heartbroken",
    pronunciation: "NDEE-neh SHOON-goo",
    example: "Ndine shungu chaizvo nhasi.",
    exampleTranslation: "I am truly heartbroken today.",
  },
  {
    shona: "Mwoyo unorwadza",
    english: "The heart hurts",
    pronunciation: "MWOH-yoh oo-noh-RWAH-dzah",
    example: "Mwoyo wangu unorwadza.",
    exampleTranslation: "My heart hurts.",
  },
  {
    shona: "Nhamo",
    english: "Hardship / trouble / grief",
    pronunciation: "NHAH-moh",
    example: "Vakanga vari munhamo.",
    exampleTranslation: "They were in hardship / grief.",
  },
  {
    shona: "Kumanikidza",
    english: "To be burdened",
    pronunciation: "koo-mah-nee-KID-zah",
    example: "Akamanikidza nezvakawanda.",
    exampleTranslation: "He was burdened by many things.",
  },
  {
    shona: "Ndiri pasi",
    english: "I am down — feeling low",
    pronunciation: "NDEE-ree PAH-see",
    example: "Ndiri pasi nhasi — handisi kunzwa zvakanaka.",
    exampleTranslation: "I am down today — I am not feeling well.",
  },
  {
    shona: "Zororo",
    english: "Peace / rest — what grief seeks",
    pronunciation: "zoh-ROH-roh",
    example: "Roorai zororo — mamirira nguva.",
    exampleTranslation: "Find rest — wait for a season.",
  },
];

const culturalNotes = [
  {
    title: "Communal Grief — You Do Not Mourn Alone",
    body: "In Shona culture, grief is never a private matter. When someone dies or a tragedy occurs, the community gathers — neighbours, relatives, and friends come to sit, cry, and mourn together. Grieving alone is seen as unnatural and even dangerous. The presence of others provides healing.",
  },
  {
    title: "Shungu — A Uniquely Shona Emotional Concept",
    body: "'Shungu' is one of the most important emotional words in Shona. It describes a deep inward longing or heartache — the ache of missing someone, of love lost, of unfulfilled longing. It has no exact English equivalent. 'Ndine shungu' captures a complex feeling that goes far beyond 'I am sad.'",
  },
  {
    title: "Expression Is Valued — Grief Should Be Released",
    body: "In Shona culture, suppressing grief publicly for extended periods is not the expected way. Crying openly is honourable — it shows love and authentic feeling. Kuzvidzvinyirira (to bottle grief up) is understood but not encouraged. Expression is seen as a path to healing.",
  },
  {
    title: "Comforting Through Presence",
    body: "When comforting someone in grief, the most important Shona response is presence — simply being there, sitting together, and not leaving the person alone. Words are secondary. The Shona comfort is embodied — you come, you sit, you stay. That is the deepest comfort.",
  },
];

export default function SadnessPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Sadness &amp; Grief
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Shungu neSorrow
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona has a deeply nuanced vocabulary for sadness and grief. The
            word <strong>shungu</strong> alone captures something that English
            requires a whole sentence to describe. Understanding these words
            also opens a window into how Shona culture handles loss — together,
            openly, and with presence.
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

        {/* Shungu Spotlight */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Word Spotlight: Shungu
          </h3>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Shungu is not simply sadness. It is the ache of longing — for a
            person who is gone, for a time that has passed, for a love that
            cannot be reached. It sits deeper than ordinary sadness and cannot
            always be explained. Many Shona songs are built around shungu.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { phrase: "Ndine shungu", meaning: "I have deep heartache" },
              { phrase: "Shungu dzangu", meaning: "My longing / my heartache" },
              { phrase: "Shungu dzinorwadza", meaning: "The longing hurts" },
            ].map((item) => (
              <div
                key={item.phrase}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center"
              >
                <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                  {item.phrase}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/emotions/happiness"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Happiness &amp; Joy
          </Link>
          <Link
            href="/courses/emotions/anger"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Anger &amp; Frustration →
          </Link>
        </div>
      </div>
    </div>
  );
}
