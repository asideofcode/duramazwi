import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Giving in Shona Culture | Duramazwi",
  description:
    "Learn Shona vocabulary and customs around giving and receiving gifts — why gifts are not opened immediately, what to bring to a rural home, and reciprocal giving.",
};

const vocabulary = [
  {
    shona: "Chipo",
    english: "Gift",
    pronunciation: "CHEE-poh",
    example: "Ndauya nechipo chiduku.",
    exampleTranslation: "I have come with a small gift.",
  },
  {
    shona: "Kupa",
    english: "To give",
    pronunciation: "KOO-pah",
    example: "Ndakupa chipo nemaoko maviri.",
    exampleTranslation: "I gave you the gift with both hands.",
  },
  {
    shona: "Kutambira",
    english: "To receive respectfully",
    pronunciation: "koo-tahm-BEE-rah",
    example: "Akutambira chipo akatarisa pasi.",
    exampleTranslation: "She received the gift looking downward respectfully.",
  },
  {
    shona: "Kutenda",
    english: "To thank",
    pronunciation: "koo-TEH-ndah",
    example: "Ndatenda chipo chako zvikuru.",
    exampleTranslation: "I thank you greatly for your gift.",
  },
  {
    shona: "Ndatenda chipo",
    english: "I thank you for the gift",
    pronunciation: "ndah-TEH-ndah CHEE-poh",
    example: "Ndatenda chipo — Mwari vakukomborere.",
    exampleTranslation: "I thank you for the gift — may God bless you.",
  },
  {
    shona: "Kubvawo",
    english: "To also bring something in return",
    pronunciation: "koob-VAH-woh",
    example: "Ndakubvawo nezvimwe zvishoma.",
    exampleTranslation: "I have also brought a few things in return.",
  },
  {
    shona: "Muripo",
    english: "Reciprocal gift / payment in kind",
    pronunciation: "moo-REE-poh",
    example: "Muripo ndiyo nzira yekunyatsotenda.",
    exampleTranslation: "A reciprocal gift is the way to truly give thanks.",
  },
  {
    shona: "Mukwasha",
    english: "Son-in-law — often the one who brings gifts",
    pronunciation: "moo-KWAH-shah",
    example: "Mukwasha anouya nechipo nguva yose.",
    exampleTranslation: "The son-in-law always comes with a gift.",
  },
  {
    shona: "Nhau",
    english: "News / occasion — the reason for the gift",
    pronunciation: "NHAH-oo",
    example: "Nhau yakaita kuti auye nechipo.",
    exampleTranslation: "The occasion caused him to come with a gift.",
  },
];

const culturalNotes = [
  {
    title: "Always receive with two hands and a bow",
    body: "A gift is never snatched or grabbed. When someone hands you a gift, you extend both hands to receive it, often with a slight bow of the head or a bend of the knee if the giver is a significant elder. The act of receiving is as important as the gift itself. How you take something tells the giver whether you understood the gesture.",
  },
  {
    title: "Do not open a gift immediately in front of the giver",
    body: "This is one of the most striking differences from Western gift-giving customs. In Shona culture, opening a gift immediately in front of the giver — especially in a group setting — can appear greedy or overeager. The gift is typically set aside to be opened later, in private. This preserves everyone's dignity: neither giver nor receiver is put on the spot. An exception may occur in some modern, urban contexts, but the traditional norm holds widely.",
  },
  {
    title: "Food is always the right gift for a rural home",
    body: "When visiting someone in a rural home or a home you know is under strain, bringing food — sugar, mealie meal, cooking oil, salt, tea — is always appropriate and deeply valued. These are practical necessities, and the gift says \"I see your household and I am contributing to it.\" This type of giving is considered more culturally grounded than bringing a decorative or luxury item. The giver of mealie meal to a family in need will be remembered far longer than the giver of a branded gift.",
  },
  {
    title: "Gifts at ceremonies follow specific protocols",
    body: "At weddings, funerals, and birth celebrations, gift-giving is structured and often public. At a wedding, gifts may be presented formally with clapping and singing. At a funeral, contributions of money, food, and presence are all considered gifts. At birth ceremonies, bringing something for the mother and child is standard. The mukwasha (son-in-law) in particular carries a cultural obligation to always arrive with a gift when visiting his in-laws — appearing empty-handed as a son-in-law is considered disrespectful.",
  },
];

const giftGuide = [
  { occasion: "Visiting a rural home", ideal: "Mealie meal, sugar, cooking oil, salt, tea", note: "Practical and always welcomed" },
  { occasion: "Birth of a child", ideal: "Clothing for the baby, food for the mother", note: "Honour both mother and child" },
  { occasion: "Wedding", ideal: "Money, household items, fabric", note: "Follow the family's preference" },
  { occasion: "Funeral", ideal: "Money, food, physical presence", note: "Presence is itself the gift" },
  { occasion: "Mukwasha visiting in-laws", ideal: "Any food or household staple", note: "Arriving empty-handed is poor form" },
];

export default function GiftGivingPage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Gift Giving
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kupa Zipo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Gift-giving in Shona culture is about relationship, not transaction.
            The way you give, how you receive, what you choose to bring, and
            what you do with a gift once received all communicate whether you
            understand and honour the relationship you are in.
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

        {/* Gift Guide */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          What to Bring — by Occasion
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Occasion</th>
                <th className="px-4 py-3 font-semibold">Ideal Gift</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {giftGuide.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {row.occasion}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {row.ideal}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell italic text-xs">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/respect/visiting-homes"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Visiting Homes
          </Link>
          <Link
            href="/courses/respect/greetings-context"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Context Greetings →
          </Link>
        </div>
      </div>
    </div>
  );
}
