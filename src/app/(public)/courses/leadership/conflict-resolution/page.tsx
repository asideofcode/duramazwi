import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conflict Resolution in Shona | Duramazwi",
  description:
    "Learn the Shona vocabulary of conflict resolution — forgiveness, reconciliation, the elder mediator, and how the dare restores community harmony.",
};

const vocabulary = [
  {
    shona: "Kugadzirisa",
    english: "To settle / to resolve",
    pronunciation: "koo-gah-dzee-REE-sah",
    note: "To fix or put right — the goal of every dare hearing is kugadzirisa, not punishment",
  },
  {
    shona: "Kutarisana",
    english: "To face each other — confronting an issue",
    pronunciation: "koo-tah-ree-SAH-nah",
    note: "To sit face to face and address a matter directly — the first step in formal resolution",
  },
  {
    shona: "Kuregerera",
    english: "To forgive",
    pronunciation: "koo-reh-geh-REH-rah",
    note: "Forgiveness — expected as the outcome of any successful resolution, not optional",
  },
  {
    shona: "Kuchema",
    english: "To complain / to accuse",
    pronunciation: "koo-CHEH-mah",
    note: "To bring a grievance — the act of formally raising a complaint at the dare",
  },
  {
    shona: "Kubvuma",
    english: "To agree / to confess",
    pronunciation: "koo-BVOO-mah",
    note: "To agree or acknowledge — in the dare, kubvuma is expected before resolution can proceed",
  },
  {
    shona: "Mhosva",
    english: "Wrongdoing / guilt",
    pronunciation: "MHOH-svah",
    note: "The wrong that has been done — establishing mhosva is central to any dare proceeding",
  },
  {
    shona: "Kusumudza",
    english: "To lift / to remove — lifting a burden or dispute",
    pronunciation: "koo-soo-MOO-dzah",
    note: "To lift off a burden — the feeling and act of having a grievance resolved and removed",
  },
  {
    shona: "Kuyanana",
    english: "To reconcile / to agree together",
    pronunciation: "koo-yah-NAH-nah",
    note: "Mutual reconciliation — the ideal outcome of any dispute, not just an agreement but restored relationship",
  },
  {
    shona: "Chiedzo",
    english: "Challenge / problem",
    pronunciation: "chee-EH-dzoh",
    note: "A difficulty or challenge — what brings parties to the dare in the first place",
  },
  {
    shona: "Mufananidzo",
    english: "Example / precedent — used in judgements",
    pronunciation: "moo-fah-nah-NEE-dzoh",
    note: "An example or comparison — elders use mufananidzo (precedents and analogies) to justify decisions",
  },
];

const culturalNotes = [
  {
    title: "Restoration, Not Punishment",
    body:
      "Shona conflict resolution begins from a different premise than Western legal thinking. The goal is not to establish guilt and impose punishment — it is to understand what went wrong and restore what was damaged. A person who has wronged another must acknowledge the wrong (kubvuma), make restitution where required, and seek the forgiveness (kuregerera) of the offended party. The relationship between the parties — neighbours, family members, members of the same community — must be liveable again after the dare ends.",
  },
  {
    title: "The Elder as Neutral Mediator",
    body:
      "The most important figure in Shona conflict resolution is often not the chief but the elder mediator — a respected community member who has no stake in the outcome and whose wisdom and impartiality are trusted by both parties. The elder knows the history of the families involved. He can speak to context that the dare may not know. His job is to help both sides understand each other — not to take sides. Communities that lose their elders lose this capacity.",
  },
  {
    title: "Public Apology and Restitution",
    body:
      "A private apology is not sufficient in Shona conflict resolution. Because wrongs are committed in community, their redress must also be communal. The person who wronged another is expected to acknowledge it before the gathered community, to say what they did and why it was wrong, and to commit to making it right. Restitution may involve livestock, labour, money, or formal ceremony depending on the nature of the wrong. Symbolic acknowledgement matters as much as material compensation.",
  },
  {
    title: "The Escalation Path",
    body:
      "Not every dispute goes to the chief's court. The path from complaint to resolution follows a hierarchy: first the family elder, then the sabhuku (village head), then the headman's dare, and only finally the chief's dare. Going directly to the chief without first attempting resolution at lower levels is considered a sign of bad faith. The chief's dare is a last resort — and its decisions carry the greatest weight and finality. Beyond the chief, statutory courts in town are an option, but using them for a community matter is often seen as a social escalation with its own costs.",
  },
  {
    title: "Holding Grudges — A Failure of Character",
    body:
      "In Shona cultural values, a person who cannot let go of a resolved grievance is understood to be failing personally, not standing on principle. Once the dare has spoken and restitution has been made, continuing to hold a grudge (kushaya mwoyo / not having a settled heart) reflects poorly on the person holding it. Reconciliation — kuyanana — is the expected and honourable outcome. This does not mean injustice must be swallowed, but it does mean that once addressed, it should be released.",
  },
];

export default function ConflictResolutionPage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Conflict Resolution
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kugadzirisa Nharo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, conflict is not a failure — it is an opportunity. The dare
            exists precisely because disputes arise. What matters is how they are resolved:
            with acknowledgement, restitution, and a return to relationship. The vocabulary
            of conflict resolution is also the vocabulary of community. These words describe
            what it means to live with others across time.
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
            href="/courses/leadership/governance"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Community Governance
          </Link>
          <Link
            href="/courses/leadership/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Practice: Leadership Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
