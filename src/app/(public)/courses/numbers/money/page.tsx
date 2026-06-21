import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary for money, prices, buying and selling — plus the history of Zimbabwe's multiple currencies.",
};

const vocabulary = [
  {
    shona: "Mari",
    english: "Money",
    pronunciation: "MAH-ree",
    example: "Une mari here?",
    exampleTranslation: "Do you have money?",
  },
  {
    shona: "Dora",
    english: "Dollar (USD)",
    pronunciation: "DOH-rah",
    example: "Madhora mashanu.",
    exampleTranslation: "Five dollars.",
  },
  {
    shona: "Madhora",
    english: "Dollars (plural)",
    pronunciation: "mah-DHOH-rah",
    example: "Ndinoda madhora gumi.",
    exampleTranslation: "I need ten dollars.",
  },
  {
    shona: "Senti",
    english: "Cent",
    pronunciation: "SEH-ntee",
    example: "Masenti makumi mashanu.",
    exampleTranslation: "Fifty cents.",
  },
  {
    shona: "Mutengo",
    english: "Price",
    pronunciation: "moo-TEHN-goh",
    example: "Mutengo wakawanda.",
    exampleTranslation: "The price is high.",
  },
  {
    shona: "Kutenga",
    english: "To buy",
    pronunciation: "koo-TEHN-gah",
    example: "Ndinotenga zevengu.",
    exampleTranslation: "I am buying tomatoes.",
  },
  {
    shona: "Kutengesa",
    english: "To sell",
    pronunciation: "koo-tehn-GEH-sah",
    example: "Anotengesa mbatata.",
    exampleTranslation: "He/she sells potatoes.",
  },
  {
    shona: "Kubhadhara",
    english: "To pay",
    pronunciation: "koo-bhah-DHAH-rah",
    example: "Ndabhadhara.",
    exampleTranslation: "I have paid.",
  },
  {
    shona: "Kusunungura",
    english: "To give change",
    pronunciation: "koo-soo-noon-GOO-rah",
    example: "Ndisunungure, ndakupa madhora gumi.",
    exampleTranslation: "Give me change, I gave you ten dollars.",
  },
  {
    shona: "Regedza",
    english: "Discount / reduce",
    pronunciation: "reh-GEH-dzah",
    example: "Regedza mutengo.",
    exampleTranslation: "Reduce the price.",
  },
  {
    shona: "Zvimwe",
    english: "Change / leftover",
    pronunciation: "ZVEE-mweh",
    example: "Ndipawo zvimwe.",
    exampleTranslation: "Give me the change too.",
  },
  {
    shona: "Pfuma",
    english: "Wealth",
    pronunciation: "PFOO-mah",
    example: "Pfuma haiuyi nekugara.",
    exampleTranslation: "Wealth does not come from sitting idle.",
  },
];

const culturalNotes = [
  {
    title: "Zimbabwe's currency history",
    body: "Zimbabwe has used multiple currencies in modern history — the Zimbabwean dollar (ZWD), US dollar (USD), RTGS dollar, and most recently the ZiG (Zimbabwe Gold). Despite these shifts, the US dollar remains the most common reference currency for everyday transactions, especially at informal markets. \"Dora\" (dollar) in Shona almost always means USD.",
  },
  {
    title: "Price negotiation is normal",
    body: "In Zimbabwean markets — from Mbare Musika in Harare to rural roadside stalls — the quoted price is rarely the final price. Price negotiation is a standard social interaction, not a confrontation. Asking \"regedza mutengo\" (reduce the price) is not rude; it is expected.",
  },
  {
    title: "Always ask the price first",
    body: "Asking the price before agreeing to buy (\"Marii mutengo?\" — what is the price?) is standard practice and not considered rude. In fact, picking up goods without asking first can imply you are ready to pay any price. Asking signals that you are a savvy buyer.",
  },
  {
    title: "Change and trust",
    body: "Getting correct change (kusunungura) can sometimes require patience at smaller market stalls where small change is scarce. Saying \"ndisunungure\" (give me change) firmly but politely is perfectly acceptable. Building a relationship with a regular seller (kuwana muchengeti wako) usually means better prices and reliable change.",
  },
];

export default function MoneyPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/numbers"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Numbers Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Money
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mari
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Money vocabulary is some of the most practical Shona you can learn.
            Whether you are buying tomatoes at the market, paying a taxi, or
            bargaining for cloth, these words will serve you immediately. Learn
            the verbs — kutenga, kutengesa, kubhadhara — not just the nouns.
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
            href="/courses/numbers/counting-objects"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Counting Objects
          </Link>
          <Link
            href="/courses/numbers/bargaining"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Prices &amp; Bargaining →
          </Link>
        </div>
      </div>
    </div>
  );
}
