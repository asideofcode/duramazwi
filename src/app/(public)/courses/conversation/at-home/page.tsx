import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "At Home — Conversation in Shona | Duramazwi",
  description:
    "Learn the Shona phrases and dialogues for everyday household conversations — waking family, meals, discussing the day, and bedtime.",
};

const vocabulary = [
  {
    shona: "Zvakadini?",
    english: "How are things?",
    pronunciation: "zvah-kah-DEE-nee",
    example: "Zvakadini nhasi?",
    exampleTranslation: "How are things today?",
  },
  {
    shona: "Baba vakadini?",
    english: "How is father?",
    pronunciation: "BAH-bah vah-kah-DEE-nee",
    example: "Baba vakadini mangwanani?",
    exampleTranslation: "How is father this morning?",
  },
  {
    shona: "Mai vakadini?",
    english: "How is mother?",
    pronunciation: "MAH-ee vah-kah-DEE-nee",
    example: "Mai vakadini — vakamuka here?",
    exampleTranslation: "How is mother — has she woken up?",
  },
  {
    shona: "Vana vakadini?",
    english: "How are the children?",
    pronunciation: "VAH-nah vah-kah-DEE-nee",
    example: "Vana vakadini? Vakadya here?",
    exampleTranslation: "How are the children? Have they eaten?",
  },
  {
    shona: "Ndinotsvaga",
    english: "I am looking for",
    pronunciation: "ndi-noh-TSVAH-gah",
    example: "Ndinotsvaga bhegi rangu.",
    exampleTranslation: "I am looking for my bag.",
  },
  {
    shona: "Ane nzara here?",
    english: "Are they hungry?",
    pronunciation: "AH-neh NZAH-rah HEH-reh",
    example: "Mwana ane nzara here?",
    exampleTranslation: "Is the child hungry?",
  },
  {
    shona: "Garai",
    english: "Sit / Settle down",
    pronunciation: "gah-RAH-ee",
    example: "Garai pasi, tizorore.",
    exampleTranslation: "Sit down, let us rest.",
  },
  {
    shona: "Tawona mangwana",
    english: "We will see tomorrow / We will deal with it tomorrow",
    pronunciation: "tah-WOH-nah mahn-GWAH-nah",
    example: "Tawona mangwana — usamanikidzika.",
    exampleTranslation: "We will deal with it tomorrow — don't stress.",
  },
  {
    shona: "Chikafu chagadzirwa here?",
    english: "Is food ready?",
    pronunciation: "chi-KAH-foo cha-gah-DZEER-wah HEH-reh",
    example: "Chikafu chagadzirwa here, Mai?",
    exampleTranslation: "Is the food ready, mother?",
  },
  {
    shona: "Ndinoda mvura",
    english: "I want water",
    pronunciation: "ndi-NOH-dah MVOO-rah",
    example: "Ndinoda mvura, ndapota.",
    exampleTranslation: "I want water, please.",
  },
];

const dialogues = [
  {
    title: "Morning Wake-Up",
    shona: "Mangwanani",
    lines: [
      { speaker: "Parent", shona: "Kumuka! Kumuka! Mangwanani!", english: "Wake up! Wake up! Good morning!" },
      { speaker: "Child", shona: "Mangwanani, Mai.", english: "Good morning, mother." },
      { speaker: "Parent", shona: "Wakadini? Warara zvakanaka here?", english: "How are you? Did you sleep well?" },
      { speaker: "Child", shona: "Ndarara zvakanaka, mazvita.", english: "I slept well, thank you." },
      { speaker: "Parent", shona: "Enda ushambe, chikafu chiri pamoto.", english: "Go and wash up, food is on the fire." },
    ],
  },
  {
    title: "Discussing the Day at Dinner",
    shona: "Manheru",
    lines: [
      { speaker: "Father", shona: "Vana vakadini kuchikoro nhasi?", english: "How were the children at school today?" },
      { speaker: "Mother", shona: "Vakashanda zvakanaka. Mwanakomana akawana makwikwi.", english: "They worked well. The son got a competition." },
      { speaker: "Father", shona: "Zvakanaka! Urikufarira here, mwanangu?", english: "That is good! Are you enjoying it, my child?" },
      { speaker: "Child", shona: "Ehe, Baba. Ndinofara chaizvo.", english: "Yes, father. I am very happy." },
      { speaker: "Father", shona: "Shandawo zvakanaka — tichakuona iwe uchikura.", english: "Keep working hard — we will see you grow." },
    ],
  },
  {
    title: "Bedtime",
    shona: "Usiku",
    lines: [
      { speaker: "Parent", shona: "Nguva yekurara! Namata urarare.", english: "Time to sleep! Pray and sleep." },
      { speaker: "Child", shona: "Baba, ndinoda mvura yekumwa.", english: "Father, I want drinking water." },
      { speaker: "Parent", shona: "Ndinokuuya nayo. Garai pasi.", english: "I am bringing it. Settle down." },
      { speaker: "Child", shona: "Maita basa, Baba. Usiku wakanaka.", english: "Thank you, father. Good night." },
      { speaker: "Parent", shona: "Usiku wakanaka, mwanangu. Rara zvakanaka.", english: "Good night, my child. Sleep well." },
    ],
  },
];

const culturalNotes = [
  {
    heading: "Home as training ground",
    body: "Conversations at home are the training ground for all Shona social skills. The way you greet, respond, and show respect to parents at home shapes how you interact with everyone outside it.",
  },
  {
    heading: "Children participate",
    body: "Children are expected to participate in family conversations respectfully — listening carefully, responding when spoken to, and not interrupting elders. Silence when an elder speaks is not rudeness; it is attention.",
  },
  {
    heading: "Evening conversations",
    body: "Evening conversations — around the fire or at dinner — are the time for storytelling, teaching, and family decisions. The father often speaks last, and his words carry the most weight.",
  },
];

export default function AtHomePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/conversation"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Conversation Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            At Home
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kumba
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The home is where Shona is most naturally and freely spoken. This
            module teaches the phrases that structure daily household life —
            from waking up to going to bed — plus three dialogues showing how
            real conversations unfold between family members.
          </p>
        </div>

        {/* Vocabulary Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Key Phrases
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

        {/* Dialogues */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Dialogues
        </h2>
        <div className="grid gap-6 mb-10">
          {dialogues.map((dialogue) => (
            <div
              key={dialogue.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <h3 className="font-bold text-[var(--color-text)]">
                  {dialogue.title}
                </h3>
                <p className="text-sm italic text-[var(--color-accent)] mt-0.5">
                  {dialogue.shona}
                </p>
              </div>
              <div className="p-6 grid gap-3">
                {dialogue.lines.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-xs font-semibold text-[var(--color-muted)] w-16 shrink-0 pt-0.5">
                      {line.speaker}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--color-primary)] text-sm">
                        {line.shona}
                      </p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">
                        {line.english}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="grid gap-4">
            {culturalNotes.map((note) => (
              <div
                key={note.heading}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-2">
                  {note.heading}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/conversation"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/conversation/at-school"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: At School →
          </Link>
        </div>
      </div>
    </div>
  );
}
