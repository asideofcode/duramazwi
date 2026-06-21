import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prices & Bargaining in Shona | Duramazwi",
  description:
    "Learn how to ask prices, make counter-offers, and close a deal at a Zimbabwean market in Shona.",
};

const vocabulary = [
  {
    shona: "Marii mutengo?",
    english: "What is the price?",
    pronunciation: "mah-REE moo-TEHN-goh",
    example: "Marii mutengo wemagwere aya?",
    exampleTranslation: "What is the price of these guavas?",
  },
  {
    shona: "Yakosha zvakawanda",
    english: "It is very expensive",
    pronunciation: "yah-KOH-shah zvah-kah-WAHN-dah",
    example: "Madhora gumi? Yakosha zvakawanda!",
    exampleTranslation: "Ten dollars? That is very expensive!",
  },
  {
    shona: "Regedzai mutengo",
    english: "Reduce the price",
    pronunciation: "reh-geh-DZAH-ee moo-TEHN-goh",
    example: "Regedzai mutengo, handina mari yakawanda.",
    exampleTranslation: "Reduce the price, I don't have much money.",
  },
  {
    shona: "Ini ndinopa...",
    english: "I will give...",
    pronunciation: "EE-nee ndee-NOH-pah",
    example: "Ini ndinopa madhora mashanu chete.",
    exampleTranslation: "I will give only five dollars.",
  },
  {
    shona: "Chinozviita here?",
    english: "Is that possible? / Can you do that?",
    pronunciation: "chee-noh-zvee-EE-tah HEH-reh",
    example: "Madhora matatu — chinozviita here?",
    exampleTranslation: "Three dollars — is that possible?",
  },
  {
    shona: "Zviripachena",
    english: "It's a fair deal / good price",
    pronunciation: "zvee-ree-pah-CHEH-nah",
    example: "Zviripachena, ndinotenga.",
    exampleTranslation: "That's a fair deal, I'll buy.",
  },
  {
    shona: "Ndabhadhara",
    english: "I have paid",
    pronunciation: "ndah-bhah-DHAH-rah",
    example: "Ndabhadhara madhora manomwe.",
    exampleTranslation: "I have paid seven dollars.",
  },
  {
    shona: "Tisungurirei",
    english: "Give us change",
    pronunciation: "tee-soon-goo-REE-reh-ee",
    example: "Tisungurirei — takupa madhora gumi.",
    exampleTranslation: "Give us change — we gave you ten dollars.",
  },
  {
    shona: "Kutya mutengo",
    english: "To fear the price (find it too high)",
    pronunciation: "koo-TYAH moo-TEHN-goh",
    example: "Ndinokutya mutengo wacho.",
    exampleTranslation: "I find that price too high.",
  },
  {
    shona: "Handisi kutenga",
    english: "I am not buying",
    pronunciation: "hahn-DEE-see koo-TEHN-gah",
    example: "Handisi kutenga mutengo uyu.",
    exampleTranslation: "I am not buying at this price.",
  },
];

const bargainingSteps = [
  {
    step: "1. Ask the price",
    shona: "Marii mutengo?",
    english: "What is the price?",
    tip: "Always ask before touching the goods in a serious way.",
  },
  {
    step: "2. React to the price",
    shona: "Yakosha zvakawanda!",
    english: "That is very expensive!",
    tip: "Even if it's reasonable, a reaction gives you room to negotiate.",
  },
  {
    step: "3. Make a counter-offer",
    shona: "Ini ndinopa madhora maviri.",
    english: "I will give two dollars.",
    tip: "Starting at around half the asking price is common practice.",
  },
  {
    step: "4. Request a reduction",
    shona: "Regedzai mutengo.",
    english: "Reduce the price.",
    tip: "If they reject your offer, ask for a reduction rather than restating your price.",
  },
  {
    step: "5. Walk away if needed",
    shona: "Handisi kutenga mutengo uyu.",
    english: "I am not buying at this price.",
    tip: "Sellers often call you back with a better offer once you start to leave.",
  },
  {
    step: "6. Accept and pay",
    shona: "Zviripachena. Ndabhadhara.",
    english: "Fair deal. I have paid.",
    tip: "Confirming the deal verbally avoids confusion.",
  },
];

const culturalNotes = [
  {
    title: "Bargaining is a social ritual",
    body: "In Zimbabwean markets, bargaining is not aggressive — it is a social interaction. Both buyer and seller expect it. Going back and forth on price is normal and even enjoyable. Jumping straight to your final price without any negotiation can actually seem suspicious to experienced market traders.",
  },
  {
    title: "The half-price counter-offer",
    body: "A common strategy is to counter-offer at roughly half the asking price, then meet somewhere in the middle. If a seller asks $10, offering $5 and settling at $7 or $8 is a typical transaction at a Zimbabwean market. Know your target price before you start.",
  },
  {
    title: "Walking away",
    body: "Walking away is one of the strongest negotiating moves. Sellers at market stalls will often call you back once you begin to leave, with a revised (lower) offer. This is normal — do not feel pressured to stay. If the price is not right, leaving is entirely acceptable.",
  },
  {
    title: "Limits of bargaining",
    body: "Bargaining has limits. Pushing a seller too far below a fair price is considered rude — especially for basic goods where the seller's margin is already thin. A good deal should work for both sides. Harassing a seller or making very insulting offers causes embarrassment and is frowned upon.",
  },
];

export default function BargainingPage() {
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
            Module 5
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Prices &amp; Bargaining
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mutengo nekutengesa
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Knowing how to bargain in Shona is one of the most immediately
            useful skills you can develop. Markets across Zimbabwe — from
            Mbare Musika to rural roadside stalls — expect negotiation. This
            module gives you the phrases to participate confidently.
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

        {/* Step-by-step bargaining */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          A Market Bargaining Exchange
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Step</th>
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  English
                </th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Tip
                </th>
              </tr>
            </thead>
            <tbody>
              {bargainingSteps.map((s, i) => (
                <tr
                  key={s.step}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs font-semibold">
                    {s.step}
                  </td>
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {s.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)] hidden md:table-cell">
                    {s.english}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden lg:table-cell text-xs italic">
                    {s.tip}
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
            href="/courses/numbers/money"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Money
          </Link>
          <Link
            href="/courses/numbers/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Numbers Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
