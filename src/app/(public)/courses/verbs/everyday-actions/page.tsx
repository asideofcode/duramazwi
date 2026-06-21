import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everyday Actions — Shona Verbs | Duramazwi",
  description:
    "Learn the 24 most essential Shona verbs in their infinitive ku- form, with pronunciations and example sentences.",
};

const vocabulary = [
  {
    shona: "Kudya",
    english: "To eat",
    pronunciation: "koo-DYA",
    example: "Ndinodya sadza manheru.",
    exampleTranslation: "I eat sadza in the evening.",
  },
  {
    shona: "Kunwa",
    english: "To drink",
    pronunciation: "koo-NWA",
    example: "Vana vanwa mvura.",
    exampleTranslation: "The children drink water.",
  },
  {
    shona: "Kurara",
    english: "To sleep",
    pronunciation: "koo-RAH-rah",
    example: "Ndirara usiku.",
    exampleTranslation: "I sleep at night.",
  },
  {
    shona: "Kumuka",
    english: "To wake up",
    pronunciation: "koo-MOO-kah",
    example: "Anomuka mangwanani.",
    exampleTranslation: "He/she wakes up in the morning.",
  },
  {
    shona: "Kufamba",
    english: "To walk / to travel",
    pronunciation: "koo-FAM-bah",
    example: "Tinofamba zuva rese.",
    exampleTranslation: "We walk/travel all day.",
  },
  {
    shona: "Kutaura",
    english: "To speak / to talk",
    pronunciation: "koo-TAU-rah",
    example: "Anotaura Shona zvakanaka.",
    exampleTranslation: "He/she speaks Shona well.",
  },
  {
    shona: "Kunzwa",
    english: "To hear / to feel",
    pronunciation: "koo-NZWAH",
    example: "Ndinzwa izwi rake.",
    exampleTranslation: "I hear his/her voice.",
  },
  {
    shona: "Kuona",
    english: "To see",
    pronunciation: "koo-OH-nah",
    example: "Unoona nyika yakanaka.",
    exampleTranslation: "You see a beautiful country.",
  },
  {
    shona: "Kuenda",
    english: "To go",
    pronunciation: "koo-EN-dah",
    example: "Vaenda kuchikoro.",
    exampleTranslation: "They went to school.",
  },
  {
    shona: "Kuuya",
    english: "To come",
    pronunciation: "koo-OO-yah",
    example: "Uya pano!",
    exampleTranslation: "Come here!",
  },
  {
    shona: "Kushanda",
    english: "To work",
    pronunciation: "koo-SHAN-dah",
    example: "Baba vanoshanda hofisi.",
    exampleTranslation: "Father works at the office.",
  },
  {
    shona: "Kutamba",
    english: "To play / to dance",
    pronunciation: "koo-TAM-bah",
    example: "Vana vanotamba panze.",
    exampleTranslation: "The children play outside.",
  },
  {
    shona: "Kuseka",
    english: "To laugh",
    pronunciation: "koo-SEH-kah",
    example: "Tinoseka pamwe chete.",
    exampleTranslation: "We laugh together.",
  },
  {
    shona: "Kuchema",
    english: "To cry / to mourn",
    pronunciation: "koo-CHEH-mah",
    example: "Mwana anochema usiku.",
    exampleTranslation: "The child cries at night.",
  },
  {
    shona: "Kubvunza",
    english: "To ask",
    pronunciation: "koo-BVOON-zah",
    example: "Ndibvunze mubvunzo.",
    exampleTranslation: "Let me ask a question.",
  },
  {
    shona: "Kupindura",
    english: "To answer",
    pronunciation: "koo-peen-DOO-rah",
    example: "Anopindura mubvunzo.",
    exampleTranslation: "He/she answers the question.",
  },
  {
    shona: "Kutenga",
    english: "To buy",
    pronunciation: "koo-TEN-gah",
    example: "Ndinotenga chikafu mumusika.",
    exampleTranslation: "I buy food at the market.",
  },
  {
    shona: "Kutengesa",
    english: "To sell",
    pronunciation: "koo-ten-GEH-sah",
    example: "Anotengesa miriwo.",
    exampleTranslation: "She sells vegetables.",
  },
  {
    shona: "Kukura",
    english: "To grow",
    pronunciation: "koo-KOO-rah",
    example: "Vana vanokura nekukurumidza.",
    exampleTranslation: "Children grow quickly.",
  },
  {
    shona: "Kuda",
    english: "To want / to love",
    pronunciation: "koo-DAH",
    example: "Ndinokuda.",
    exampleTranslation: "I love you.",
  },
  {
    shona: "Kubata",
    english: "To hold / to catch",
    pronunciation: "koo-BAH-tah",
    example: "Bata musoro wako.",
    exampleTranslation: "Hold your head.",
  },
  {
    shona: "Kuviga",
    english: "To bury / to hide",
    pronunciation: "koo-VEE-gah",
    example: "Akaviga chinhu mudura.",
    exampleTranslation: "He/she hid something in the granary.",
  },
  {
    shona: "Kurima",
    english: "To cultivate / to hoe",
    pronunciation: "koo-REE-mah",
    example: "Tinorima munda mangwanani.",
    exampleTranslation: "We cultivate the field in the morning.",
  },
  {
    shona: "Kugarika",
    english: "To settle / to tidy up",
    pronunciation: "koo-gah-REE-kah",
    example: "Garika pasi.",
    exampleTranslation: "Settle down / Sit still.",
  },
];

const culturalNotes = [
  {
    heading: "The ku- infinitive prefix",
    body: "Shona verbs take the prefix \"ku-\" in the infinitive form — just like \"to...\" in English. Kudya = to eat. Kutaura = to speak. This is the base form you look up in a dictionary.",
  },
  {
    heading: "The verb root",
    body: "Remove \"ku-\" to get the verb root. Kudya → -dya. Kutaura → -taura. The root is what you attach subject prefixes to when conjugating. Ndi + no + dya = Ndinodya (I eat).",
  },
  {
    heading: "24 verbs, most conversations",
    body: "Understanding the 24 most common verbs unlocks the majority of basic Shona conversation. Combine them with a few nouns and you can express most everyday needs.",
  },
  {
    heading: "Multiple meanings",
    body: "Many Shona verbs carry more than one meaning depending on context. Kuchema means both \"to cry\" and \"to call out loudly.\" Kufamba means both \"to walk\" and \"to travel.\" Kuda means both \"to want\" and \"to love.\"",
  },
];

export default function EverydayActionsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/verbs"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Common Verbs Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Everyday Actions
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zviito Zvezuva nezuva
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            All Shona verbs in their base form begin with <strong>ku-</strong>.
            This is the infinitive — equivalent to saying &ldquo;to eat,&rdquo; &ldquo;to
            speak,&rdquo; &ldquo;to see.&rdquo; Learning these 24 verbs in their ku- form
            gives you the building blocks. In the next module, you will learn
            how to attach subject prefixes to make full sentences.
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
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Language Notes
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {culturalNotes.map((note) => (
              <div
                key={note.heading}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-2">
                  {note.heading}
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
            href="/courses/verbs"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/verbs/conjugation"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Verb Conjugation →
          </Link>
        </div>
      </div>
    </div>
  );
}
