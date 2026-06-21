import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hosting Guests — Shona for Travellers | Duramazwi",
  description:
    "Learn the Shona of Zimbabwean hospitality — how to host well, farewell phrases, and the gifts that earn respect.",
};

const vocabulary = [
  {
    shona: "Muenzi",
    english: "Guest",
    pronunciation: "moo-EN-zee",
    example: "Muenzi wetu asvika.",
    exampleTranslation: "Our guest has arrived.",
  },
  {
    shona: "Kushanyira",
    english: "To visit (the act of the guest)",
    pronunciation: "koo-shah-NYEE-rah",
    example: "Ndafara kushanyira imba yenyu.",
    exampleTranslation: "I am glad to visit your home.",
  },
  {
    shona: "Kushandira muenzi",
    english: "To serve a guest",
    pronunciation: "koo-shah-NDEE-rah moo-EN-zee",
    example: "Tinofara kushandira muenzi wose.",
    exampleTranslation: "We are happy to serve every guest.",
  },
  {
    shona: "Musha une mufaro",
    english: "A home with happiness (compliment for good hosting)",
    pronunciation: "MOO-shah oo-neh moo-FAH-roh",
    example: "Musha wenyu une mufaro.",
    exampleTranslation: "Your home has happiness.",
  },
  {
    shona: "Kugadzira",
    english: "To prepare",
    pronunciation: "koo-gah-DZEE-rah",
    example: "Vaigadzira zvokudya kubva mangwanani.",
    exampleTranslation: "They were preparing food since morning.",
  },
  {
    shona: "Kudya pamwe",
    english: "To eat together",
    pronunciation: "koo-DYAH PAH-mweh",
    example: "Kudya pamwe ndiko kunaka.",
    exampleTranslation: "Eating together is what is good.",
  },
  {
    shona: "Dare renyu rakanaka",
    english: "Your home / space is good (compliment)",
    pronunciation: "DAH-reh reh-NYOO rah-kah-NAH-kah",
    example: "Dare renyu rakanaka — ndinofara.",
    exampleTranslation: "Your space is good — I am happy.",
  },
  {
    shona: "Ndinoenda",
    english: "I am leaving",
    pronunciation: "ndi-no-EN-dah",
    example: "Ndinoenda — tatenda zvikuru.",
    exampleTranslation: "I am leaving — thank you very much.",
  },
  {
    shona: "Safara",
    english: "Go well (said to the departing guest)",
    pronunciation: "sah-FAH-rah",
    example: "Safara — uuye zvakare.",
    exampleTranslation: "Go well — come again.",
  },
  {
    shona: "Gara zvakanaka",
    english: "Stay well (said by the departing guest to the host)",
    pronunciation: "GAH-rah zvah-kah-NAH-kah",
    example: "Gara zvakanaka — tatenda.",
    exampleTranslation: "Stay well — thank you.",
  },
  {
    shona: "Tikasangana zvakare",
    english: "May we meet again",
    pronunciation: "tee-kah-sah-NGAH-nah zvah-KAH-reh",
    example: "Tikasangana zvakare — Mwari ngaakuchengetedze.",
    exampleTranslation: "May we meet again — may God keep you.",
  },
];

const giftSuggestions = [
  {
    item: "Sugar",
    shona: "Shuga",
    why: "A practical and always-appreciated staple. Bring a 2kg bag.",
  },
  {
    item: "Mealie meal",
    shona: "Hupfu",
    why: "Sadza is the staple food. Bringing mealie meal is a generous and practical gift.",
  },
  {
    item: "Cooking oil",
    shona: "Mafuta okubika",
    why: "Cooking oil is used daily and always needed.",
  },
  {
    item: "Money for the children",
    shona: "Mari yevana",
    why: "Giving a small amount to the children of the home is a warm gesture that is always appreciated.",
  },
];

const culturalNotes = [
  {
    title: "Hosting reputation",
    body: "A host who provides well for a guest earns lasting community respect. Bad hosting is remembered and talked about. Good hosting is a point of pride.",
  },
  {
    title: "Offer to help",
    body: "As a guest, you should offer to help with preparation. The offer will be politely declined — but the gesture matters. It shows you are not being waited upon passively.",
  },
  {
    title: "Long farewells",
    body: "When it is time to leave, the farewell can take a very long time — sometimes thirty minutes of walking back and forth to the gate. This is not indecision. It is warmth. Do not rush it.",
  },
  {
    title: "Gifts for a first visit",
    body: "Bringing a gift to a village home on your first visit is the right thing to do. Practical items (below) are more appreciated than decorative ones.",
  },
];

export default function HostingGuestsPage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Hosting Guests
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kushandira Muenzi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Zimbabwean hospitality is not a performance — it is a deep value.
            Whether you are the host or the guest, there are words and gestures
            that make the difference between being merely present and being
            truly welcome. This module covers the language of hosting and being
            hosted well.
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

        {/* Gift Guide */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Appropriate First-Visit Gifts
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-5 leading-relaxed">
            When visiting a village home for the first time, bring something
            practical. These are the most appreciated options:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {giftSuggestions.map((gift) => (
              <div
                key={gift.item}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] text-base">
                  {gift.item}
                </p>
                <p className="text-xs font-medium text-[var(--color-accent)] italic mb-2">
                  {gift.shona}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {gift.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Hosting
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
            href="/courses/visiting/navigating"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Navigating Zimbabwe
          </Link>
          <Link
            href="/courses/visiting/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Visiting Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
