import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Occasions in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary for birthdays, Christmas, New Year, weddings, and how Shona culture marks significant life events.",
};

const vocabulary = [
  {
    shona: "Zuva rekuberekwa",
    english: "Birthday",
    pronunciation: "ZOO-vah reh-koo-beh-REH-kwah",
    example: "Zuva rako rekuberekwa rakanaka!",
    exampleTranslation: "Happy birthday! (lit: your day of birth is good)",
  },
  {
    shona: "Kuberekwa",
    english: "To be born",
    pronunciation: "koo-beh-REH-kwah",
    example: "Ndakaberekerwa muna Zvita.",
    exampleTranslation: "I was born in December.",
  },
  {
    shona: "Gore",
    english: "Year",
    pronunciation: "GOH-reh",
    example: "Ndine makore makumi maviri.",
    exampleTranslation: "I am twenty years old.",
  },
  {
    shona: "Makore mangani?",
    english: "How many years? (asking age)",
    pronunciation: "mah-KOH-reh mahn-GAH-nee",
    example: "Une makore mangani?",
    exampleTranslation: "How old are you?",
  },
  {
    shona: "Ndine makore...",
    english: "I am ... years old",
    pronunciation: "NDEE-neh mah-KOH-reh",
    example: "Ndine makore makumi maviri nematatu.",
    exampleTranslation: "I am twenty-three years old.",
  },
  {
    shona: "Chriisimasi",
    english: "Christmas",
    pronunciation: "chree-see-MAH-see",
    example: "Chriisimasi yakanaka!",
    exampleTranslation: "Happy Christmas! / Merry Christmas!",
  },
  {
    shona: "Nyore",
    english: "New Year",
    pronunciation: "NYO-reh",
    example: "Nyore ipi inouya!",
    exampleTranslation: "Happy New Year! (lit: a good New Year is coming!)",
  },
  {
    shona: "Muteuro",
    english: "Anniversary / Celebration",
    pronunciation: "moo-teh-OO-roh",
    example: "Muteuro wechirongwa chavo.",
    exampleTranslation: "Their anniversary celebration.",
  },
  {
    shona: "Kuroorana",
    english: "To get married (the wedding event)",
    pronunciation: "koo-roh-oh-RAH-nah",
    example: "Vakuroorana gore rapfuura.",
    exampleTranslation: "They got married last year.",
  },
  {
    shona: "Ramangwana rakanaka",
    english: "Have a good future (blessing)",
    pronunciation: "rah-mahn-GWAH-nah rah-kah-NAH-kah",
    example: "Ndinokutendai — ramangwana rakanaka.",
    exampleTranslation: "I thank you — may your future be good.",
  },
  {
    shona: "Farai!",
    english: "Rejoice! / Be happy!",
    pronunciation: "fah-RAH-ee",
    example: "Farai! Zuva rako rakanaka.",
    exampleTranslation: "Rejoice! Your day is good.",
  },
  {
    shona: "Tinofara nawe",
    english: "We celebrate with you",
    pronunciation: "tee-noh-FAH-rah nah-weh",
    example: "Tinofara nawe nezuva rako.",
    exampleTranslation: "We celebrate with you on your day.",
  },
];

const culturalNotes = [
  {
    title: "Birthdays — a modern concept",
    body: "Birthdays as annual celebrations with cakes, candles, and parties are a relatively modern concept in Shona culture, associated with urban life and Western influence. Traditionally, age was tracked by harvests, seasons, and significant events — not specific calendar dates. An elder might say they were born 'the year of the great drought' or 'when the ndebele raided'. This does not mean age was unimportant — it was tracked differently.",
  },
  {
    title: "Christmas in Zimbabwe",
    body: "Christmas (Chriisimasi) is widely and enthusiastically celebrated across Zimbabwe, which is a predominantly Christian country. It is a time for family gatherings, church services, new clothes, and — in urban areas — significant feasting. Families travel from cities to rural areas for Christmas, making it one of the major movement events of the year. 'Kuenda kumusha' (going to the rural home) is a Christmas tradition.",
  },
  {
    title: "New Year and family",
    body: "New Year (Nyore) is a significant occasion — families come together, there are prayers and gatherings, and there is a sense of collective renewal. In Shona communities, the blessing 'ramangwana rakanaka' (may your future be good) is commonly exchanged. New Year marks not just the turning of the calendar but a spiritual moment of hope and intention-setting.",
  },
  {
    title: "Asking someone's age",
    body: "Asking someone's age in Shona ('Une makore mangani?') is not considered rude in the same way it might be in some Western contexts. Age is a marker of respect — older people are addressed differently, their contributions are weighted more heavily, and their blessings carry more meaning. Knowing someone's age helps you understand how to relate to them appropriately.",
  },
];

export default function SpecialOccasionsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/time"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Time Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 6
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Special Occasions
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mazuva Akakosha
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Celebrations in Shona culture centre on people, not just events.
            A birthday is a day your family gathers. A wedding is a union of
            families. Christmas is the time to go home. This module gives you
            the vocabulary to participate — and to give the blessings that
            matter.
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
          Cultural &amp; Language Notes
        </h2>
        <div className="flex flex-col gap-5 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/time/past-future"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Past &amp; Future
          </Link>
          <Link
            href="/courses/time/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Time Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
