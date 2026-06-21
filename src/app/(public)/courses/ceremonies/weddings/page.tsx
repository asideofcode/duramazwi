import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Wedding Ceremonies | Duramazwi",
  description:
    "Learn the vocabulary and traditions of Shona weddings — the Vatete's presiding role, the delegation's significance, songs, feasting, and honouring the new daughter-in-law.",
};

const vocabulary = [
  {
    shona: "Kuroorana",
    english: "To marry / to wed",
    pronunciation: "koo-roh-oh-RAH-nah",
    example: "Vakuroorana nomufaro mukuru.",
    exampleTranslation: "They married with great celebration.",
  },
  {
    shona: "Muchato",
    english: "Wedding celebration",
    pronunciation: "moo-CHAH-toh",
    example: "Muchato waiva mazuva maviri.",
    exampleTranslation: "The wedding celebration lasted two days.",
  },
  {
    shona: "Roora",
    english: "Bride wealth — creates the family covenant",
    pronunciation: "ROH-oh-rah",
    example: "Roora yakabhadharwa zvakanaka.",
    exampleTranslation: "The bride wealth was paid properly.",
  },
  {
    shona: "Vatete",
    english: "Paternal aunt — presides over the ceremony",
    pronunciation: "vah-TEH-teh",
    example: "Vatete ndiye anopresider pamuchato.",
    exampleTranslation: "The paternal aunt presides at the wedding.",
  },
  {
    shona: "Kukudzwa kwemuroora",
    english: "Honouring of the new daughter-in-law",
    pronunciation: "koo-KOO-dzwah kweh-moo-ROH-oh-rah",
    example: "Kukudzwa kwemuroora ndiyo nzira yemuchato.",
    exampleTranslation: "The honouring of the daughter-in-law is the way of the wedding.",
  },
  {
    shona: "Pemberero",
    english: "Celebration / festivities",
    pronunciation: "pehm-beh-REH-roh",
    example: "Pemberero yakaramba usiku hwose.",
    exampleTranslation: "The celebration continued all night.",
  },
  {
    shona: "Rumbidzai",
    english: "Praises / songs of celebration",
    pronunciation: "room-bee-DZAH-ee",
    example: "Rumbidzai dzakapembera muroora mutsva.",
    exampleTranslation: "Celebratory praises honoured the new daughter-in-law.",
  },
  {
    shona: "Kukurudzirana",
    english: "To encourage each other — wedding speeches",
    pronunciation: "koo-koo-roo-dzee-RAH-nah",
    example: "Vakuru vakakurudzirana muroorani.",
    exampleTranslation: "The elders encouraged one another and the couple.",
  },
  {
    shona: "Kukara",
    english: "To feast",
    pronunciation: "koo-KAH-rah",
    example: "Vose vakakara nomufaro pamuchato.",
    exampleTranslation: "Everyone feasted with joy at the wedding.",
  },
  {
    shona: "Nguvo dzomuchato",
    english: "Wedding clothes / dress",
    pronunciation: "NGOO-voh dzoh-moo-CHAH-toh",
    example: "Nguvo dzomuchato dzaipenya zuva iroro.",
    exampleTranslation: "The wedding clothes shone that day.",
  },
];

const culturalNotes = [
  {
    title: "A Shona wedding is a multi-day event",
    body: "A traditional Shona wedding is not a single afternoon event. It typically spans two or more days — sometimes extending over a weekend or longer if the ceremony involves both civil and traditional elements. The first phase often involves the completion of roora negotiations and formal introductions between families. The second is the celebration itself. Each phase has its own structure, its own participants, and its own obligations.",
  },
  {
    title: "Vatete's role is non-negotiable",
    body: "The Vatete — the father's sister — presides over the wedding ceremony. Her presence and blessing are not symbolic; they are required. She is the ritual guardian of her brother's daughter or of the groom's family, depending on perspective. Without Vatete, the ceremony lacks its proper authority. She formally blesses the union, receives gifts on behalf of the family, and speaks over the bride. No wedding is considered properly done without her active participation.",
  },
  {
    title: "The size of your delegation signals respect",
    body: "At a Shona wedding, both families send delegations. The size of the delegation you bring is a direct expression of how much you honour the occasion and the other family. Coming with a large group of relatives, elders, and community members says: this marriage matters to us. A small or poorly represented delegation can be quietly noted as a slight. Elders who travel long distances to attend are especially honoured, and their arrival may be greeted with singing and ululation.",
  },
  {
    title: "Traditional music, singing, and dancing are central",
    body: "A Shona wedding without music is not a Shona wedding. Traditional songs (rumbidzai), singing, clapping, and dancing run through the entire ceremony. Women ululate (hwindindindi) at significant moments — the arrival of important guests, the presentation of the bride, and the formal completion of the ceremony. The songs are not background — they are part of the ceremony itself, communicating to everyone present what is happening and what is being honoured.",
  },
];

const weddingStages = [
  {
    stage: "Kufamba kwemukwasha",
    meaning: "The groom's delegation arrives",
    note: "The groom's family comes formally — a large delegation honours the occasion.",
  },
  {
    stage: "Kuonana kwemhuri",
    meaning: "The families meet and speak",
    note: "Elders from both sides exchange formal greetings and introductions.",
  },
  {
    stage: "Kupedza roora",
    meaning: "Completing the bride wealth",
    note: "The final negotiations and payment of roora are concluded.",
  },
  {
    stage: "Vatete presides",
    meaning: "The paternal aunt takes her role",
    note: "Vatete formally receives the bride, blesses the union, and speaks over the couple.",
  },
  {
    stage: "Kukudzwa kwemuroora",
    meaning: "Honouring the new daughter-in-law",
    note: "The muroora is presented, praised, and received by the new family.",
  },
  {
    stage: "Pemberero — the feast",
    meaning: "Celebration, music, and feasting",
    note: "Singing, dancing, ululation, and communal feasting continue into the night.",
  },
];

export default function WeddingsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/ceremonies"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Ceremonies Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Weddings
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Muchato
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A Shona wedding is a community event that joins two families, honours
            the ancestors, and publicly establishes a new lineage connection.
            It is not a private celebration for two people — it is a covenant
            between clans, witnessed by both the living and the departed.
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

        {/* Wedding Stages */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Stages of a Shona Wedding
        </h2>
        <div className="space-y-4 mb-10">
          {weddingStages.map((stage, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-[var(--color-primary)]">{stage.stage}</p>
                <p className="text-sm text-[var(--color-text)] font-medium mt-0.5">{stage.meaning}</p>
                <p className="text-xs text-[var(--color-muted)] mt-1 leading-relaxed">{stage.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/ceremonies/birth"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Birth Ceremonies
          </Link>
          <Link
            href="/courses/ceremonies/funerals"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Funerals →
          </Link>
        </div>
      </div>
    </div>
  );
}
