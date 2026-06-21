import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiefs (Madzishe) in Shona | Duramazwi",
  description:
    "Learn Shona words for chiefs, the king, the chief's court, and symbols of authority — and how traditional chiefly power works in Zimbabwe.",
};

const vocabulary = [
  {
    shona: "Ishe",
    english: "Chief (singular)",
    pronunciation: "EE-sheh",
    note: "The standard Shona word for a chief — a person with hereditary authority over a territory",
  },
  {
    shona: "Madzishe",
    english: "Chiefs (plural)",
    pronunciation: "mah-DZEE-sheh",
    note: "The plural of ishe — used when referring to multiple chiefs collectively",
  },
  {
    shona: "Mambo",
    english: "King / paramount chief",
    pronunciation: "MAH-mboh",
    note: "A higher-ranking chief with authority over multiple village chiefs — also used as a respectful title",
  },
  {
    shona: "Sabhuku",
    english: "Village head / bookman",
    pronunciation: "sah-BHOO-koo",
    note: "The chief's representative at village level — literally 'one who holds the book' (of village records)",
  },
  {
    shona: "Dare raMambo",
    english: "The chief's court",
    pronunciation: "DAH-reh rah-MAH-mboh",
    note: "The formal gathering place where the chief hears disputes and makes decisions",
  },
  {
    shona: "Chipande",
    english: "The chief's staff — symbol of authority",
    pronunciation: "chee-PAH-ndeh",
    note: "A ceremonial staff carried by or presented to a chief as a symbol of legitimate authority",
  },
  {
    shona: "Zvipfukuto",
    english: "Tribute or offerings to the chief",
    pronunciation: "zvee-pfoo-KOO-toh",
    note: "Community members bring tribute to the chief — grain, livestock — in recognition of his authority",
  },
  {
    shona: "Hunhu hwaMambo",
    english: "The conduct befitting a chief",
    pronunciation: "HOO-nhoo hwah-MAH-mboh",
    note: "The ethical standard expected of a chief — dignity, fairness, and service to the community",
  },
  {
    shona: "Hurumende",
    english: "Government (modern term)",
    pronunciation: "hoo-roo-MEH-ndeh",
    note: "The modern government — borrowed into Shona. Traditional chiefs operate alongside the hurumende.",
  },
  {
    shona: "Chieftaincy",
    english: "Chieftainship — the institution",
    pronunciation: "chieftaincy (English loanword)",
    note: "Used in both English and Shona contexts to refer to the office and institution of the chief",
  },
];

const culturalNotes = [
  {
    title: "The Chief's Real Authority",
    body:
      "In rural Zimbabwe, the chief (ishe or mambo) is not a ceremonial figure — he holds real authority over land allocation, community disputes, and cultural practice. His court (dare) is where serious disputes are brought when village-level resolution fails. The national government (hurumende) operates alongside traditional leadership, not instead of it. Chiefs sit on government-established local councils but derive their deeper authority from lineage and community recognition.",
  },
  {
    title: "Lineage, Not Election",
    body:
      "A chief does not campaign for office. The position passes through lineage — typically through the male line of a founding family. When a chief dies, the succession follows traditional rules, sometimes involving consultation with clan elders, spirit mediums, and the senior women of the lineage. The government has formal powers to recognise or derecognise chiefs, which creates occasional tension between state and tradition.",
  },
  {
    title: "The Paramount Chief — Mambo",
    body:
      "Above village chiefs sits the mambo — the paramount chief with authority over a wider territory encompassing multiple village chiefs. The mambo's dare is the highest traditional court. His decisions carry greater weight and finality. The relationship between ishe and mambo parallels the relationship between a ward councillor and a senior politician — but with the added dimension of spiritual legitimacy drawn from ancestral connection.",
  },
  {
    title: "Tribute as Relationship",
    body:
      "Zvipfukuto — the tribute brought to a chief — is not taxation in the Western sense. It is a relational act: an acknowledgement of the chief's authority and a claim on the chief's protection in return. When community members bring grain or livestock to the chief's homestead, they are not simply paying — they are affirming the covenant between leader and community. A chief who receives tribute is expected to protect, arbitrate, and provide for those who brought it.",
  },
  {
    title: "Hunhu hwaMambo — The Ethics of Leadership",
    body:
      "A chief is expected to embody hunhu (the Shona concept of humanity and dignity — related to ubuntu). Hunhu hwaMambo — the conduct befitting a chief — demands composure, fairness, accessibility, and self-restraint. A chief who is hot-tempered, partial in judgment, or self-serving violates his role in a way that cannot be hidden. The community watches constantly, and a chief who loses moral authority loses real authority with it.",
  },
];

export default function ChiefsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/leadership"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Leadership Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Chiefs
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Madzishe
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The chief is the centre of traditional authority in Shona society. Not elected,
            not appointed by government — inherited through lineage, confirmed by elders,
            and legitimised by the ancestral spirits of the founding family. The dare
            (court) still sits. Disputes still come. The mambo still speaks. This module
            gives you the vocabulary of that world.
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
            href="/courses/leadership"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/leadership/headmen"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Headmen &amp; Village Structure →
          </Link>
        </div>
      </div>
    </div>
  );
}
