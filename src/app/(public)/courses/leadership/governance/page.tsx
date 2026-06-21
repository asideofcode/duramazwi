import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Governance in Shona | Duramazwi",
  description:
    "Learn the Shona vocabulary of community governance — customary law, the chief's court, the munyai spokesperson, and how decisions are reached.",
};

const vocabulary = [
  {
    shona: "Kutonga",
    english: "To rule / to govern",
    pronunciation: "koo-TOH-ngah",
    note: "The act of governing or ruling — what the ishe and headmen do",
  },
  {
    shona: "Mutemo",
    english: "Law / rule",
    pronunciation: "moo-TEH-moh",
    note: "A law or rule — applies equally to customary law and modern statutory law",
  },
  {
    shona: "Mutemo wechivanhu",
    english: "Customary law",
    pronunciation: "moo-TEH-moh weh-chee-VAH-nhoo",
    note: "The traditional legal system — governing marriage, inheritance, land, and disputes",
  },
  {
    shona: "Kutaura",
    english: "To speak — in court",
    pronunciation: "koo-TAH-oo-rah",
    note: "To speak or testify — the act of presenting one's case before the dare",
  },
  {
    shona: "Musangano",
    english: "Meeting / gathering",
    pronunciation: "moo-sah-NGAH-noh",
    note: "A formal community meeting or gathering — for governance, discussion, or decision-making",
  },
  {
    shona: "Kutaura pane dare",
    english: "To speak in court / at a gathering",
    pronunciation: "koo-TAH-oo-rah PAH-neh DAH-reh",
    note: "To formally address the court — a recognised, regulated act in traditional governance",
  },
  {
    shona: "Kuviga hana",
    english: "To keep the peace",
    pronunciation: "koo-VEE-gah HAH-nah",
    note: "Literally 'to bury the heart' — suppressing grievance for the sake of community harmony",
  },
  {
    shona: "Tsiga",
    english: "Punishment",
    pronunciation: "TSEE-gah",
    note: "A penalty or punishment — but in the dare, restoration is the goal, not punishment",
  },
  {
    shona: "Mhosva",
    english: "Wrongdoing / offence",
    pronunciation: "MHOH-svah",
    note: "A wrong committed against another person or the community — the subject of a dare hearing",
  },
  {
    shona: "Mutongi",
    english: "Judge / ruler",
    pronunciation: "moo-TOH-ngee",
    note: "The one who rules or judges — in the dare, this is the chief or headman",
  },
  {
    shona: "Munyai",
    english: "Spokesperson / negotiator",
    pronunciation: "moo-NYAH-ee",
    note: "A formal intermediary who speaks on behalf of a party — essential in formal proceedings and negotiations",
  },
];

const culturalNotes = [
  {
    title: "Customary Law Governs Everyday Life",
    body:
      "Mutemo wechivanhu — customary law — is not a relic. In rural Zimbabwe, it governs marriage formation and dissolution, land use and inheritance, compensation for harm, and the resolution of family disputes. The chief's court applies customary law alongside the formal statutory legal system. For many rural communities, the dare is the only court they will ever use — more accessible, faster, and culturally intelligible than the formal courts in town.",
  },
  {
    title: "The Dare Is Not a Trial",
    body:
      "A hearing at the dare does not resemble a Western courtroom. There is no prosecution and defence. There is no adversarial structure. The goal is not to convict but to understand — to hear all parties, establish what happened, and determine what must be done to restore harmony. Elders speak. The parties speak. The munyai (spokesperson) ensures each side is heard fairly. The chief or headman deliberates and speaks last. The decision is not a verdict — it is a prescription for restoration.",
  },
  {
    title: "The Munyai — Voice of the Party",
    body:
      "In formal dare proceedings and in negotiations like roora (bride price), a munyai speaks on behalf of a party. He is a skilled communicator who knows protocol, knows when to speak and when to be silent, and frames his principal's case in culturally appropriate terms. A good munyai can de-escalate a tense situation through the careful choice of words. A bad munyai — or no munyai — can inflame one. The role is deeply respected.",
  },
  {
    title: "Women's Voices in the Dare",
    body:
      "Traditionally, women had restricted speaking roles in formal dare proceedings — matters were presented by male relatives or a munyai. This is evolving. Women now speak directly in many dare settings, and female headmen and even chiefs exist in some areas. The tension between customary gender norms and constitutional rights is one of the live legal and social debates in Zimbabwe's traditional governance structures.",
  },
  {
    title: "Zimbabwe's Dual Legal System",
    body:
      "Zimbabwe operates a dual legal system: statutory law (Parliament-enacted, courts-administered) and customary law (chief's court-administered, community-recognised). The two systems sometimes conflict — particularly on matters of inheritance, where customary law may disadvantage women and children, and on land rights. The courts have grappled with when to uphold customary practice and when to override it on constitutional grounds. The relationship between the two systems is ongoing and contested.",
  },
];

export default function GovernancePage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Community Governance
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kutonga neMutemo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona communities are governed at multiple levels — from the family, through the
            village, to the ward, to the chief's court, and beyond. Customary law shapes
            how land is allocated, how marriages are contracted, and how wrongs are addressed.
            This module gives you the vocabulary of Shona governance and the cultural logic
            behind it.
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
            href="/courses/leadership/headmen"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Headmen &amp; Village Structure
          </Link>
          <Link
            href="/courses/leadership/conflict-resolution"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Conflict Resolution →
          </Link>
        </div>
      </div>
    </div>
  );
}
