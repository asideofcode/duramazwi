import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Products in Shona | Duramazwi",
  description:
    "Learn the Shona names for clothes, vegetables, grains, and other goods sold at Zimbabwean markets.",
};

const vocabulary = [
  {
    shona: "Nguo",
    english: "Clothes",
    pronunciation: "N-gwoh",
    example: "Ndinoda kutengera nguo dzitsva.",
    exampleTranslation: "I want to buy new clothes.",
  },
  {
    shona: "Shangu",
    english: "Shoes",
    pronunciation: "SHAHN-goo",
    example: "Shangu dzenyu dzakanaka.",
    exampleTranslation: "Your shoes are nice.",
  },
  {
    shona: "Muriwo",
    english: "Vegetables",
    pronunciation: "moo-REE-woh",
    example: "Muriwo uyu wakasviba.",
    exampleTranslation: "This vegetable is fresh.",
  },
  {
    shona: "Mbesa",
    english: "Beans",
    pronunciation: "MBEH-sah",
    example: "Ndipe mbesa dzakawanda.",
    exampleTranslation: "Give me a lot of beans.",
  },
  {
    shona: "Zviyo",
    english: "Sorghum",
    pronunciation: "ZVEE-yoh",
    example: "Zviyo zvinozipa.",
    exampleTranslation: "Sorghum is sweet.",
  },
  {
    shona: "Mupunga",
    english: "Rice",
    pronunciation: "moo-POO-ngah",
    example: "Mupunga unowanikwa kumusika.",
    exampleTranslation: "Rice is found at the market.",
  },
  {
    shona: "Masvingo",
    english: "Bricks",
    pronunciation: "mah-SVEEN-goh",
    example: "Tinoda masvingo ekuvaka imba.",
    exampleTranslation: "We need bricks to build a house.",
  },
  {
    shona: "Mafuta",
    english: "Oil / fat / cooking fat",
    pronunciation: "mah-FOO-tah",
    example: "Mafuta ekubika anowanikwa pano.",
    exampleTranslation: "Cooking oil is available here.",
  },
  {
    shona: "Mupfu",
    english: "Flour",
    pronunciation: "MOO-pfoo",
    example: "Ndipe mupfu wemupunga.",
    exampleTranslation: "Give me rice flour.",
  },
  {
    shona: "Tsamba",
    english: "Letter / paper goods",
    pronunciation: "TSAHM-bah",
    example: "Tsamba iyi yakanyorwa zvakanaka.",
    exampleTranslation: "This letter is well written.",
  },
  {
    shona: "Zvivakwa",
    english: "Building materials",
    pronunciation: "zvee-VAH-kwah",
    example: "Zvivakwa zvinotengwa kumusika mukuru.",
    exampleTranslation: "Building materials are bought at the large market.",
  },
  {
    shona: "Mbatata",
    english: "Potatoes",
    pronunciation: "mbah-TAH-tah",
    example: "Mbatata dzinochipa kumusika.",
    exampleTranslation: "Potatoes are cheap at the market.",
  },
  {
    shona: "Tomato",
    english: "Tomatoes",
    pronunciation: "toh-MAH-toh",
    example: "Tomato dzakasviba dzinochipa.",
    exampleTranslation: "Fresh tomatoes are cheap.",
  },
  {
    shona: "Chibage",
    english: "Maize cobs",
    pronunciation: "chee-BAH-geh",
    example: "Chibage chinopisa pamoto.",
    exampleTranslation: "Maize cobs are roasted on the fire.",
  },
];

const culturalNotes = [
  {
    title: "Mabhero — the second-hand clothing market",
    body: "The 'mubhadharo' or flea market sells second-hand clothes known as mabhero — a corruption of 'bale', referring to the imported bales of second-hand clothing. Mabhero are hugely popular across Zimbabwe, offering affordable fashion and the thrill of finding something unique.",
  },
  {
    title: "Daily fresh produce markets",
    body: "Fresh produce markets (muriwo, mbatata, tomato, chibage) are open daily in most Zimbabwean towns, often from early morning. The best selections and prices are found in the first hours of the day. Returning vendors often greet regular customers warmly.",
  },
  {
    title: "Buying directly from the farmer",
    body: "Buying directly from a farmer — rather than a middleman — is widely preferred for both quality and price. Many market vendors are the farmers themselves, arriving early with produce harvested that morning. Asking where something was grown is a normal part of the conversation.",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/shopping"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Shopping Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Common Products
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvokutengesa
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            From fresh vegetables to second-hand clothes, from sorghum grain to
            building bricks — Zimbabwean markets sell a remarkable variety of
            goods. These fourteen words cover the most commonly bought and sold
            products you will encounter.
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
            Cultural Notes: What Gets Sold
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
            href="/courses/shopping/negotiation"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Negotiation & Prices
          </Link>
          <Link
            href="/courses/shopping/cultural-expectations"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Cultural Expectations →
          </Link>
        </div>
      </div>
    </div>
  );
}
