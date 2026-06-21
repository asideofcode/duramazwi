import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Traditions in Shona | Duramazwi",
  description:
    "Learn the Shona language of hospitality — mauya, ndinokupai mvura, kutsva nenzara — and the deep cultural obligation to feed and welcome any visitor.",
};

const vocabulary = [
  {
    shona: "Mauya",
    english: "You have come — welcome",
    pronunciation: "mah-OO-yah",
    example: "Mauya, garai pano.",
    exampleTranslation: "Welcome, sit here.",
  },
  {
    shona: "Garai",
    english: "Sit / stay",
    pronunciation: "gah-RAH-ee",
    example: "Garai, ndinokupai mvura.",
    exampleTranslation: "Sit, let me give you water.",
  },
  {
    shona: "Ndinokupai mvura",
    english: "Let me give you water (the first thing offered)",
    pronunciation: "ndee-noh-koo-PAH-ee MVOO-rah",
    example: "Ndinokupai mvura kutanga.",
    exampleTranslation: "Let me give you water first.",
  },
  {
    shona: "Tinofarira kushanyira",
    english: "We love to receive visitors",
    pronunciation: "tee-noh-fah-REE-rah koo-shah-NYEE-rah",
    example: "Tinofarira kushanyira — mauya nguva dzose.",
    exampleTranslation: "We love visitors — come any time.",
  },
  {
    shona: "Mushandi",
    english: "Worker / guest helper",
    pronunciation: "moo-SHAH-ndee",
    example: "Mushandi anotibatsira pakushanyira.",
    exampleTranslation: "The helper assists us when hosting.",
  },
  {
    shona: "Kutsva nenzara",
    english: "To die of hunger (hyperbole for neglecting a guest)",
    pronunciation: "koot-SVAH neh-NZAH-rah",
    example: "Mueni haangasiye achiendwa kutsva nenzara.",
    exampleTranslation: "A guest must never leave dying of hunger.",
  },
  {
    shona: "Musha",
    english: "Homestead / home",
    pronunciation: "MOO-shah",
    example: "Musha wedu unogamuchira vaeni vose.",
    exampleTranslation: "Our home welcomes all visitors.",
  },
  {
    shona: "Mhomho",
    english: "Gathering / crowd of guests",
    pronunciation: "MHOHM-hoh",
    example: "Mhomho yauya nhasi.",
    exampleTranslation: "A gathering of guests has arrived today.",
  },
];

const culturalNotes = [
  {
    title: "Water before words — the first obligation",
    body: "When a visitor arrives at a Shona home, the very first act is to offer water or a drink — before any conversation, before asking about the purpose of the visit, before anything else. 'Ndinokupai mvura' is not just a phrase — it is the enactment of a fundamental duty. To let a visitor sit down and begin talking without offering something to drink is a noticeable failure of hospitality. Water is the baseline; food usually follows.",
  },
  {
    title: "A guest who leaves hungry has shamed the host",
    body: "In Shona culture, the phrase 'kutsva nenzara' (dying of hunger) is used hyperbolically to describe the worst outcome for a guest visit — leaving without being fed. This shame falls not on the guest but entirely on the host. It does not matter if the visit was unexpected or the pantry is nearly empty. Something must be offered. Even if it is only bota (thin porridge) or maputi (roasted maize), a guest must be fed. The host's pride is bound up in this act.",
  },
  {
    title: "Guests may stay for days — hospitality has no time limit",
    body: "In Shona culture, a visitor does not have a fixed 'acceptable' length of stay. Guests — especially family — may arrive and stay for days, weeks, or longer without it being remarkable. The family continues feeding them, making space, and accommodating their needs. Asking a guest when they plan to leave, or making them feel unwelcome, is a profound breach of Shona values. The homestead (musha) is always open.",
  },
  {
    title: "Even in poverty, you give what you have",
    body: "The obligation to feed a visitor is not conditional on having enough. A family that has very little is still expected to share what they have. This value — giving from your lack — is a central expression of Ubuntu philosophy: your worth as a person is tied to how you treat others, especially those who depend on your generosity in that moment. The one who gives from little is more honoured than the one who gives from abundance.",
  },
];

export default function HospitalityPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/food"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Food &amp; Drink Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 6
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Hospitality Traditions
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Tsika Dzekunamatira Vaeni
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Hospitality (kunamatira vaeni) is not a social nicety in Shona
            culture — it is a moral obligation. Feeding a visitor, offering
            water before any conversation, and ensuring that no one leaves
            hungry are expressions of who you are as a person and as a family.
            The language of welcome is inseparable from the act of sharing food.
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
        <div className="flex flex-col gap-6 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
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

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/food/customs"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Eating Customs
          </Link>
          <Link
            href="/courses/food/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Food Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
