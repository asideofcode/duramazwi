import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visiting Homes in Shona Culture | Duramazwi",
  description:
    "Learn the Shona etiquette for visiting a home — announcing yourself, accepting the first drink, removing shoes, and the correct way to arrive and depart.",
};

const vocabulary = [
  {
    shona: "Kuvhura gonhi",
    english: "To open the door / gate",
    pronunciation: "koo-VHOO-rah GOH-nyee",
    example: "Ndapota, ndingakuvhura gonhi here?",
    exampleTranslation: "Please, may I open the door?",
  },
  {
    shona: "Kuburitsa",
    english: "To come out and greet a visitor",
    pronunciation: "koo-boo-REE-tsah",
    example: "Mai vakaburitsa kuti vakamukire muenzi.",
    exampleTranslation: "Mother came out to welcome the visitor.",
  },
  {
    shona: "Mauya",
    english: "You have come — welcome",
    pronunciation: "mah-OO-yah",
    example: "Mauya! Garai henyu.",
    exampleTranslation: "You have come! Please sit.",
  },
  {
    shona: "Garai",
    english: "Sit / please sit",
    pronunciation: "gah-RAH-ee",
    example: "Garai pano, tinotaurirane.",
    exampleTranslation: "Sit here, let us talk.",
  },
  {
    shona: "Mhoro",
    english: "Hello — initial greeting",
    pronunciation: "MHOH-roh",
    example: "Mhoro, ndauya kukushanywira.",
    exampleTranslation: "Hello, I have come to visit you.",
  },
  {
    shona: "Ndinoshanyira",
    english: "I am visiting",
    pronunciation: "ndee-noh-shah-NYEE-rah",
    example: "Ndinoshanyira shamwari yangu nhasi.",
    exampleTranslation: "I am visiting my friend today.",
  },
  {
    shona: "Ndinouya nezvimwe",
    english: "I have come with some things — when bringing gifts",
    pronunciation: "ndee-noh-OO-yah neh-ZVEE-mweh",
    example: "Ndinouya nezvimwe zvishoma.",
    exampleTranslation: "I have come with a few things.",
  },
  {
    shona: "Kunonoka",
    english: "To delay / be late arriving",
    pronunciation: "koo-noh-NOH-kah",
    example: "Ndanonoka, ndinokukumbirai ruregerero.",
    exampleTranslation: "I was delayed, I ask your forgiveness.",
  },
  {
    shona: "Pakufamba",
    english: "When departing / on going",
    pronunciation: "pah-koo-FAHM-bah",
    example: "Pakufamba, vakati kwaheri zvakare.",
    exampleTranslation: "On departing, they said farewell again.",
  },
];

const culturalNotes = [
  {
    title: "Never walk in uninvited",
    body: "A Shona home is not entered without announcing yourself first. You call out from the gate or entrance — typically \"Ko, ko!\" (a verbal knock) or the name of the person you are visiting. Walking directly into a compound without announcement is considered highly presumptuous, as if you have no regard for the privacy and dignity of those inside. This applies even to relatives you know well.",
  },
  {
    title: "The host brings water or a drink first — accept it",
    body: "When you arrive at a Shona home, the host will bring you water or a drink before any conversation begins in earnest. This is not optional for the host — it is a duty. For the guest, accepting the drink is equally important. Refusing the first drink offered can be read as a sign of distrust or pride. You may not be thirsty, but you accept the cup, drink a little, and thank your host. The drink signals that you are welcome and that the home is opening to you.",
  },
  {
    title: "Removing shoes is common",
    body: "In many Shona households, particularly in more traditional and rural homes, removing shoes before entering the main living area is expected. This keeps the home clean and also signals that you are entering a domestic, intimate space with appropriate humility. In urban homes the practice varies, but it is always safer to remove shoes or ask — never assume you may walk in with outdoor shoes.",
  },
  {
    title: "Sitting on the floor or a mat is not beneath guests",
    body: "In many Shona homes — especially during ceremonies, gatherings, or when space is limited — guests sit on mats on the floor. This is not an insult or a sign of poor hospitality. It is completely normal, and guests who refuse to sit on the floor or who visibly hesitate may cause their host embarrassment. The floor is clean, and sitting there together marks community and equality among those present.",
  },
];

export default function VisitingHomesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/respect"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Respect Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Visiting Homes
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kushanyira Kumba
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Visiting is central to Shona social life. But there is a right way
            to arrive, a right way to be received, and a right way to leave.
            Knowing the vocabulary and the customs means you will always be a
            guest who is welcomed back.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="grid gap-5 mb-12">
          {culturalNotes.map((note, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Arrival Sequence */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            A Typical Visit — Step by Step
          </h3>
          <ol className="space-y-3">
            {[
              "Announce yourself at the gate — \"Ko ko!\" or call the person's name.",
              "Wait for the host to come out (kuburitsa) and welcome you.",
              "Exchange greetings — \"Mhoro\" / \"Makadii?\" / \"Mauya!\"",
              "Remove shoes at the door if the home requires it.",
              "Accept the water or drink offered before conversation begins.",
              "Sit where directed — floor mat, chair, or bench — without complaint.",
              "When leaving, say a proper farewell — do not slip away quietly.",
              "Thank the host for their hospitality as you depart.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/respect/body-language"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Body Language
          </Link>
          <Link
            href="/courses/respect/gift-giving"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Gift Giving →
          </Link>
        </div>
      </div>
    </div>
  );
}
