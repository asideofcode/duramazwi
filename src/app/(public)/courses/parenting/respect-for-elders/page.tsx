import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Respect for Elders in Shona — Kuremekedza Vakuru | Duramazwi",
  description:
    "Learn how Shona children show respect to elders — through clapping greetings, respectful speech, and honouring the authority of vadzimu (ancestors).",
};

const vocabulary = [
  {
    shona: "Mukazukuru",
    english: "Grandchild / niece / nephew — the one who shows respect",
    pronunciation: "moo-kah-zoo-KOO-roo",
    example: "Mukazukuru anofanira kuomba sekuru.",
    exampleTranslation: "A grandchild must clap in greeting for grandfather.",
  },
  {
    shona: "Kuremekedza",
    english: "To show respect",
    pronunciation: "koo-reh-meh-KEH-dzah",
    example: "Vana vanofanira kuremekedza vakuru vose.",
    exampleTranslation: "Children must respect all elders.",
  },
  {
    shona: "Kuomba",
    english: "To clap in greeting — done by children for adults",
    pronunciation: "koo-OHM-bah",
    example: "Musikana akaomba baba wake.",
    exampleTranslation: "The girl clapped in greeting for her father.",
  },
  {
    shona: "Kutaurira zvine hunhu",
    english: "To speak respectfully",
    pronunciation: "koo-tau-REE-rah zvee-neh HOO-nhoo",
    example: "Mwana anofanira kutaurira zvine hunhu.",
    exampleTranslation: "A child must speak with respect.",
  },
  {
    shona: "Zviporeswa",
    english: "Humble gestures",
    pronunciation: "zvee-poh-REH-swah",
    example: "Zviporeswa zvinoratidzika pakuomba.",
    exampleTranslation: "Humble gestures are shown through clapping.",
  },
  {
    shona: "Simba",
    english: "Authority / power of elders",
    pronunciation: "SEEM-bah",
    example: "Simba remudhara rinobva pakuona kwake.",
    exampleTranslation: "An elder's authority comes from his experience.",
  },
  {
    shona: "Vadzimu",
    english: "Ancestors — the ultimate elders",
    pronunciation: "vah-DZEE-moo",
    example: "Vadzimu vanorinda mhuri.",
    exampleTranslation: "The ancestors protect the family.",
  },
  {
    shona: "Ukama",
    english: "Relationship — shapes how much respect is owed",
    pronunciation: "oo-KAH-mah",
    example: "Ukama ndihwo unoratidza kuremekedza.",
    exampleTranslation: "Relationship is what shows respect.",
  },
  {
    shona: "Ndakudzwa",
    english: "I am humbled — a respectful response",
    pronunciation: "ndah-KOOD-zwah",
    example: "Ndakudzwa neshoko renyu.",
    exampleTranslation: "I am humbled by your words.",
  },
];

const culturalNotes = [
  {
    title: "Learning to Clap From Infancy",
    body: "Children in Shona culture are taught from infancy that all adults are to be greeted with clapping (kuomba). Girls clap with cupped hands, boys with flat hands — the gesture is gender-specific and is one of the earliest bodily practices of social respect a Shona child learns. Clapping is not merely polite; it acknowledges the elder's status and your own humility in relation to them.",
  },
  {
    title: "Talking Back Is Virtually Unacceptable",
    body: "Answering back to an elder — especially in a challenging or dismissive tone — is considered one of the most serious breaches of Shona social norms for children. This applies not just to parents and grandparents, but to any adult in the community. A child who talks back is seen as poorly raised, reflecting badly on the whole family. The correct posture when being corrected by an elder is to listen, face the ground, and respond with 'Ndinzwisisa' (I understand) or similar.",
  },
  {
    title: "An Elder's Words Carry Weight",
    body: "Even if a child privately disagrees with an elder, they listen respectfully. This is not considered suppression — it is considered wisdom. The Shona proverb says 'Zano remusoro haripi' (advice from the head does not fail). Elders are presumed to have experience and wisdom that the young do not yet possess. A child who acts on this understanding earns the respect of the community over time.",
  },
  {
    title: "Vadzimu — The Ancestors as the Ultimate Elders",
    body: "Respect for elders extends beyond the living. The vadzimu (ancestors) are considered the most senior members of the family. They are consulted through spirit mediums, honoured at ceremonies, and invoked in prayer. A family that neglects its ancestors risks misfortune — a family that honours them is protected. This means that the chain of respect stretches not just up to the elderly, but all the way back through the generations.",
  },
];

export default function RespectForEldersPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/parenting"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Parenting Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Respect for Elders
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuremekedza Vakuru
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Respect for elders in Shona culture is not a rule — it is a
            practice embodied in every greeting, every posture, and every word.
            From clapping to the careful use of respectful language, children
            learn from their earliest years that age and experience carry
            authority. This module gives you the vocabulary of respect and the
            cultural context to understand why it matters so deeply.
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

        {/* Greeting Spotlight */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            The Clapping Greeting: Kuomba
          </h3>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Kuomba is the physical act of respect in Shona greetings. The gender
            difference matters:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg">Girls / Women</p>
              <p className="text-sm text-[var(--color-text)] font-medium">
                Clap with cupped hands
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-1 italic">
                A soft, hollow sound — gentle and submissive
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-bold text-[var(--color-primary)] text-lg">Boys / Men</p>
              <p className="text-sm text-[var(--color-text)] font-medium">
                Clap with flat palms
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-1 italic">
                A sharper sound — firm and respectful
              </p>
            </div>
          </div>
          <p className="text-[var(--color-muted)] text-sm mt-5 leading-relaxed">
            Both forms are taught to children early. The clapping greeting is
            used when meeting an elder, receiving something from an elder, or
            thanking them for a gift or words of wisdom.
          </p>
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="flex flex-col gap-5 mb-12">
          {culturalNotes.map((note, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/parenting/raising-children"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Raising Children
          </Link>
          <Link
            href="/courses/parenting/family-roles"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Family Roles →
          </Link>
        </div>
      </div>
    </div>
  );
}
