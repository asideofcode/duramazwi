import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-Laws & Marriage in Shona | Duramazwi",
  description:
    "Learn how Shona marriage works — roora, how you address in-laws, and how a wife becomes Muroora to the whole family.",
};

const vocabulary = [
  {
    shona: "Muroora",
    english: "Daughter-in-law / brother's wife",
    pronunciation: "moo-ROH-rah",
    note: "She belongs to the whole family — all brothers call her Muroora",
  },
  {
    shona: "Muruwe",
    english: "Son-in-law / sister's husband",
    pronunciation: "moo-ROO-weh",
    note: "He is a son to the whole family",
  },
  {
    shona: "Muramu",
    english: "Spouse's sibling (same generation)",
    pronunciation: "moo-RAH-moo",
    note: "Your husband's or wife's brother or sister at your generational level",
  },
  {
    shona: "Tezvara",
    english: "Father-in-law",
    pronunciation: "teh-ZVAH-rah",
    note: "Addressed as Baba — same as your own father",
  },
  {
    shona: "Vahosi",
    english: "Mother-in-law",
    pronunciation: "vah-HOH-see",
    note: "Also addressed as Ambuya or simply Amai — same as your own mother",
  },
  {
    shona: "Roora",
    english: "Bride price (lobola)",
    pronunciation: "ROH-rah",
    note: "The formal payment that creates the family bond — sacred, not just financial",
  },
  {
    shona: "Kutizira",
    english: "To elope",
    pronunciation: "koo-tee-ZEE-rah",
    note: "Running away to marry without formal roora — the marriage exists but lacks full recognition",
  },
];

const respectTerms = [
  {
    person: "Husband's older brothers",
    term: "Mukoma",
    explanation: "She calls them by the same term as her own older siblings",
  },
  {
    person: "Husband's younger brothers",
    term: "Munin'ina",
    explanation: "She calls them by the same term as her own younger siblings",
  },
  {
    person: "Husband's sisters",
    term: "Vatete",
    explanation: "They become her Vatete — with all the ceremonial weight that holds",
  },
  {
    person: "Father-in-law",
    term: "Baba",
    explanation: "Never his first name — always Baba, same as your own father",
  },
  {
    person: "Mother-in-law",
    term: "Amai / Ambuya",
    explanation: "Never her first name — always Amai or Ambuya, same as your own mother",
  },
];

const culturalNotes = [
  {
    title: "Roora — More Than a Payment",
    body:
      "Roora (lobola) is often described as a bride price, but this misses its depth. Roora is a covenant between two families. It honours the bride's family for raising her, legitimises the marriage, and gives the wife her full status in her husband's family. Without roora, a marriage exists informally but carries no complete family recognition. Many Shona families insist it must be paid — even partially — before the couple moves in together.",
  },
  {
    title: "Muroora Belongs to Everyone",
    body:
      "When a woman marries into a Shona family, she does not just marry her husband — she marries his entire family. All his brothers call her Muroora. All his sisters become her Vatete. She calls all older brothers-in-law Mukoma and all younger ones Munin'ina. This is not metaphorical — these people have real obligations to her, and she to them.",
  },
  {
    title: "You Never Say Their Names",
    body:
      "Using your in-laws' first names is a serious breach of respect in Shona culture. A daughter-in-law would never say 'John' or 'Grace' when referring to her parents-in-law. They are Baba and Amai — her second parents. This principle of name avoidance (called kutiza zita) extends across many in-law relationships and is a sign of deep respect.",
  },
  {
    title: "Imi vs Iwe — The Language of Respect",
    body:
      "Shona has two words for 'you': iwe (singular, informal) and imi (plural, respectful). When speaking to in-laws and elders, you always use imi — even when speaking to just one person. Using iwe with your father-in-law would be as jarring as calling a teacher by their first name. This respectful plural form carries throughout all formal family relationships.",
  },
  {
    title: "Kutizira — When Couples Elope",
    body:
      "Kutizira (eloping) has existed in Shona culture for generations. A couple may run away and begin living together, bypassing the formal roora process. This sometimes happens when families cannot agree on terms, or when a couple is impatient. The marriage is recognised socially — the children are legitimate — but it lacks full honour. Roora is expected to follow eventually, even years later.",
  },
];

export default function InLawsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/family"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Family Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            In-Laws & Marriage
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Varoora neVaruwe
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona, marriage does not join two individuals — it joins two
            families. The language of in-laws reflects this: you call your
            parents-in-law Baba and Amai, your brothers-in-law Mukoma and
            Munin'ina, and your sisters-in-law Vatete. You do not gain a
            spouse; you gain a second family.
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
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Note</th>
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
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell italic">
                    {word.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How a wife addresses her husband's family */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          How a wife addresses her husband's family
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Family member</th>
                <th className="px-4 py-3 font-semibold">Shona term used</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Why</th>
              </tr>
            </thead>
            <tbody>
              {respectTerms.map((row, i) => (
                <tr
                  key={row.person}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 text-[var(--color-text)] font-medium">
                    {row.person}
                  </td>
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {row.term}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden md:table-cell italic">
                    {row.explanation}
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
        <div className="grid gap-6 mb-12">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
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
            href="/courses/family/extended"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Extended Family
          </Link>
          <Link
            href="/courses/family/roora"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Roora →
          </Link>
        </div>
      </div>
    </div>
  );
}
