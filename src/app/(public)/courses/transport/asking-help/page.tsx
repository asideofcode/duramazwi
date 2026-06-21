import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asking for Help in Shona | Duramazwi",
  description:
    "Learn how to ask for directions and travel assistance in Shona — and why strangers in Zimbabwe will often walk you to your destination.",
};

const vocabulary = [
  {
    shona: "Ndibatsireiwo",
    english: "Please help me",
    pronunciation: "ndee-bah-TSEE-reh-ee-woh",
    example: "Ndibatsireiwo, ndinoda kuenda kuchipatara.",
    exampleTranslation: "Please help me, I want to go to the hospital.",
  },
  {
    shona: "Handizivi",
    english: "I don't know",
    pronunciation: "han-dee-ZEE-vee",
    example: "Handizivi nzvimbo yacho.",
    exampleTranslation: "I don't know that place.",
  },
  {
    shona: "Ndinozungumira",
    english: "I am lost — informal",
    pronunciation: "ndee-noh-ZOON-goo-mee-rah",
    example: "Ndinozungumira — ndibatsireiwo.",
    exampleTranslation: "I am lost — please help me.",
  },
  {
    shona: "Ndinobvunza",
    english: "I am asking",
    pronunciation: "ndee-noh-BVOON-zah",
    example: "Ndinobvunza nzira yeposvo.",
    exampleTranslation: "I am asking for the way to the post office.",
  },
  {
    shona: "Ndiudze",
    english: "Tell me / please tell me",
    pronunciation: "ndee-OOD-zeh",
    example: "Ndiudze nzira inoenda kunzvimbo iyi.",
    exampleTranslation: "Tell me the road that goes to this place.",
  },
  {
    shona: "Ndiratidze",
    english: "Show me / please show me",
    pronunciation: "ndee-rah-TEE-dzeh",
    example: "Ndiratidze panobuda bhazi.",
    exampleTranslation: "Show me where the bus departs.",
  },
  {
    shona: "Ngativambe tese",
    english: "Let us go together",
    pronunciation: "ngah-tee-VAHM-beh TEH-seh",
    example: "Ngativambe tese — ndinokutungamira.",
    exampleTranslation: "Let us go together — I will lead you.",
  },
  {
    shona: "Ndinokutendai",
    english: "I thank you — formal",
    pronunciation: "ndee-noh-koo-TEN-dah-ee",
    example: "Ndinokutendai nekubatsira kwenyu.",
    exampleTranslation: "I thank you for your help.",
  },
  {
    shona: "Ndipe nzira yakanaka",
    english: "Give me a good path — give me directions",
    pronunciation: "ndee-PEH N-ZEE-rah yah-kah-NAH-kah",
    example: "Ndipe nzira yakanaka kuenda kumauto.",
    exampleTranslation: "Give me good directions to the barracks.",
  },
  {
    shona: "Unondibatsira here?",
    english: "Can you help me?",
    pronunciation: "oo-nohn-dee-BAH-tsee-rah HEH-reh",
    example: "Unondibatsira here? Ndinoda kuenda kustation.",
    exampleTranslation: "Can you help me? I want to go to the station.",
  },
];

const culturalNotes = [
  {
    title: "Asking a stranger for help is expected",
    body: "In Zimbabwe, asking a stranger for directions or travel help is completely normal and expected. People are generally very willing to assist. There is no cultural wariness about approaching strangers with questions — in fact, not asking when you are lost can seem unnecessarily stubborn.",
  },
  {
    title: "They may walk you there",
    body: "It is genuinely common for someone you ask for help to physically walk you to your destination rather than simply pointing. This is not unusual — it is a natural expression of ubuntu, the pan-African ethic of communal care. Accept this graciously and thank them properly when you part.",
  },
  {
    title: "Children as guides",
    body: "In rural and semi-urban areas, it is common for a household to send a child ahead to help guide a visitor to the right path or homestead. Children running ahead of adults to show the way is a recognisable part of Zimbabwean hospitality.",
  },
  {
    title: "Thanking people matters",
    body: "Accepting help and then walking away with a brief or curt 'thank you' is considered rude. A proper thanks — 'Ndinokutendai' — with eye contact and genuine warmth is expected. In some contexts, a small gift or gesture of appreciation is appropriate if someone has gone significantly out of their way.",
  },
];

export default function AskingHelpPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/transport"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Transport Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Asking for Help
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kukumbira Rubatsiro
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Getting lost is not a failure — it is a chance to meet someone.
            Zimbabweans are remarkably generous with their time when it comes to
            helping travellers. These ten phrases will let you ask for help
            with confidence and thank those who assist you properly.
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
            Cultural Notes: Generosity on the Road
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
            href="/courses/transport/village-city"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Village vs City Travel
          </Link>
          <Link
            href="/courses/transport/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
