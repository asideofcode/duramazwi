import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headmen & Village Structure in Shona | Duramazwi",
  description:
    "Learn about the sabhuku, dunhu, and village governance structure — how Shona communities are organised and administered at the local level.",
};

const vocabulary = [
  {
    shona: "Sabhuku",
    english: "Village head — bookman",
    pronunciation: "sah-BHOO-koo",
    note: "Literally 'one who holds the book' — the chief's representative who knows every family",
  },
  {
    shona: "Dunhu",
    english: "Ward — administrative area under a headman",
    pronunciation: "DOO-nhoo",
    note: "A dunhu is a collection of villages under a headman's authority, below a chief's chieftaincy",
  },
  {
    shona: "Musha",
    english: "Homestead / village",
    pronunciation: "MOO-shah",
    note: "The basic unit of Shona settlement — a family homestead or small village cluster",
  },
  {
    shona: "Mhuri",
    english: "Family unit within the village",
    pronunciation: "MHOO-ree",
    note: "The family — the foundational social unit that the musha is built around",
  },
  {
    shona: "Musvo",
    english: "Lineage group",
    pronunciation: "MOO-svoh",
    note: "A sub-clan or lineage group — related families who trace descent from a common ancestor",
  },
  {
    shona: "Dunhurirwo",
    english: "Ward council",
    pronunciation: "doo-nhoo-REE-rwoh",
    note: "The formal council at ward level — a gathering of headmen and community representatives",
  },
  {
    shona: "Hwishe",
    english: "Praise name for a chief",
    pronunciation: "HWEE-sheh",
    note: "A ceremonial title or praise name — used when addressing or honouring a chief formally",
  },
  {
    shona: "Gurukota",
    english: "Minister / key advisor in the chief's court",
    pronunciation: "goo-roo-KOH-tah",
    note: "A senior advisor or minister in the chief's dare — plays a key role in deliberations",
  },
  {
    shona: "Dare",
    english: "Court — meeting place of the headman",
    pronunciation: "DAH-reh",
    note: "The dare is the open meeting space where the headman or chief hears cases and leads discussion",
  },
];

const culturalNotes = [
  {
    title: "The Sabhuku — Everyone's First Authority",
    body:
      "The sabhuku (village head or headman) is the first port of call for almost any community matter. He knows every family in his area — who owns which land, who has disputes with whom, which families are new arrivals. The word sabhuku literally means 'holder of the book' — referring to the village register he traditionally maintained. His approval is required before anyone settles on land in his area. When families quarrel, they go first to the sabhuku, not to the chief.",
  },
  {
    title: "The Dunhu — Ward as Administrative Unit",
    body:
      "A dunhu (ward) is the administrative layer between the individual village and the chief's chieftaincy. A headman governs a dunhu containing multiple mushas (homesteads). Zimbabwe's post-independence local government built its rural district council system partly on the existing dunhu structure, recognising that traditional boundaries already organised communities in functional ways. The dunhu headman sits between the sabhuku and the ishe in the hierarchy.",
  },
  {
    title: "Lineage Governs the Position",
    body:
      "Like the chieftaincy, the headman's position passes through lineage — not through election or government appointment, though government recognition is now formally required. When a headman dies, the succession follows the same clan lineage rules as the chieftaincy. This means that family politics, succession disputes, and clan dynamics can all affect who becomes sabhuku. The community's acceptance matters as much as any formal appointment.",
  },
  {
    title: "Urban Irrelevance and Rural Persistence",
    body:
      "In Zimbabwe's cities and larger towns, the sabhuku has no formal role — urban land is administered by municipalities. Yet for many urban Zimbabweans, particularly those with rural roots, the sabhuku of their home village remains a real authority. When someone dies in the city, the body often goes home — and the sabhuku and dare are involved. When land back home is disputed, the sabhuku arbitrates. The urban-rural connection keeps traditional authority alive even in people who have lived in Harare for decades.",
  },
  {
    title: "Gurukota — The Advisor Behind the Chief",
    body:
      "No chief rules alone. The gurukota is the chief's senior advisor or minister — a trusted figure in the dare who shapes how cases are heard and how decisions are framed. In Shona oral tradition, skilled gurukota are celebrated as much as the chiefs they served. They are the ones who knew the law, remembered precedents, and knew how to phrase a difficult decision in a way the community could accept. The chief spoke, but the gurukota had usually already shaped the words.",
  },
];

export default function HeadmenPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Headmen &amp; Village Structure
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Sabhuku neDunhu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Below the chief, community life is organised through headmen and villages.
            The sabhuku knows every family. The dunhu is the ward that holds them together.
            The dare is where they come to be heard. Understanding this structure is to
            understand how governance actually works in rural Zimbabwe — in layers,
            through lineage, and always in community.
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
            href="/courses/leadership/chiefs"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Chiefs
          </Link>
          <Link
            href="/courses/leadership/governance"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Community Governance →
          </Link>
        </div>
      </div>
    </div>
  );
}
