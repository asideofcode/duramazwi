import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In the Village — Conversation in Shona | Duramazwi",
  description:
    "Learn the Shona of village life — communal work, the evening fire, farming together, and the more traditional Shona spoken at the musha.",
};

const vocabulary = [
  {
    shona: "Musha",
    english: "Village / Homestead",
    pronunciation: "MOO-shah",
    example: "Ndinoenda kumusha mwedzi uno.",
    exampleTranslation: "I am going to the village this month.",
  },
  {
    shona: "Dare",
    english: "Communal meeting space / Evening gathering",
    pronunciation: "DAH-reh",
    example: "Varume vanogara padare.",
    exampleTranslation: "The men sit at the dare.",
  },
  {
    shona: "Mbudzi",
    english: "Goat",
    pronunciation: "MBOO-dzee",
    example: "Mbudzi dzedu dziri mumunda.",
    exampleTranslation: "Our goats are in the field.",
  },
  {
    shona: "Mombe",
    english: "Cattle / Cow",
    pronunciation: "MOM-beh",
    example: "Mombe dzedu dziri gumi.",
    exampleTranslation: "Our cattle number ten.",
  },
  {
    shona: "Kurima",
    english: "To cultivate / to hoe",
    pronunciation: "koo-REE-mah",
    example: "Tinorima mangwanani kusati kwa pisa.",
    exampleTranslation: "We cultivate in the morning before it gets hot.",
  },
  {
    shona: "Mvura",
    english: "Rain / Water",
    pronunciation: "MVOO-rah",
    example: "Mvura yaka wanda gore rino.",
    exampleTranslation: "Rain was plentiful this year.",
  },
  {
    shona: "Mugoti",
    english: "Grinding stone",
    pronunciation: "moo-GOH-tee",
    example: "Ambuya anogaya pahugoti.",
    exampleTranslation: "Grandmother grinds at the grinding stone.",
  },
  {
    shona: "Nhimbe",
    english: "Community work party",
    pronunciation: "NHEEM-beh",
    example: "Nhimbe yanotibatsira kurima munda.",
    exampleTranslation: "The work party helps us cultivate the field.",
  },
  {
    shona: "Kurima pamwe",
    english: "Farming together",
    pronunciation: "koo-REE-mah PAM-weh",
    example: "Tinorima pamwe nevanotipoteredza.",
    exampleTranslation: "We farm together with our neighbours.",
  },
  {
    shona: "Vavakidzani",
    english: "Neighbours",
    pronunciation: "vah-vah-kee-DZAH-nee",
    example: "Vavakidzani vedu vakanaka chaizvo.",
    exampleTranslation: "Our neighbours are very good.",
  },
  {
    shona: "Moto",
    english: "Fire",
    pronunciation: "MOH-toh",
    example: "Tinarare pedyo nemoto manheru.",
    exampleTranslation: "We sit close to the fire in the evening.",
  },
  {
    shona: "Basa remusha",
    english: "Village work / Homestead work",
    pronunciation: "BAH-sah reh-MOO-shah",
    example: "Vana vanoita basa remusha.",
    exampleTranslation: "The children do the homestead work.",
  },
];

const dialogues = [
  {
    title: "Arriving at the Village",
    shona: "Kusvika Kumusha",
    lines: [
      { speaker: "Guest", shona: "Kwaziwa! Pane vanhu here?", english: "Greetings! Is there anyone at home?" },
      { speaker: "Elder", shona: "Hongu! Mauya! Garai pano!", english: "Yes! You have come! Sit here!" },
      { speaker: "Guest", shona: "Tauya. Vadzimu ngavamudzivirire.", english: "We have come. May the ancestors protect you." },
      { speaker: "Elder", shona: "Maita. Makafamba zvakanaka here?", english: "Thank you. Did you travel well?" },
      { speaker: "Guest", shona: "Takafamba zvakanaka. Kwakaita sei kumusha?", english: "We travelled well. How has it been in the village?" },
      { speaker: "Elder", shona: "Zvakaita zvakanaka. Mvura yakawanda gore rino.", english: "It has been well. Rain was plentiful this year." },
    ],
  },
  {
    title: "The Nhimbe — Community Work Party",
    shona: "Nhimbe",
    lines: [
      { speaker: "Host", shona: "Tichaitira nhimbe mangwana. Munouya here?", english: "We are holding a nhimbe tomorrow. Are you coming?" },
      { speaker: "Neighbour", shona: "Tichasvika. Tinouya nevamwe vavakidzani.", english: "We will be there. We will come with other neighbours." },
      { speaker: "Host", shona: "Zvakanaka. Tinotanga basa mangwanani.", english: "Good. We begin work in the morning." },
      { speaker: "Neighbour", shona: "Tichauya nevana vedu kuti titibatsire.", english: "We will come with our children to help us." },
      { speaker: "Host", shona: "Maita basa. Tichakuunzira sadza nemisi.", english: "Thank you. We will bring you sadza and relish." },
    ],
  },
  {
    title: "Around the Evening Fire",
    shona: "Padare Manheru",
    lines: [
      { speaker: "Elder", shona: "Vauye vose padare. Tine nyaya.", english: "Let everyone come to the dare. We have matters to discuss." },
      { speaker: "Young man", shona: "Zvakanaka, sekuru. Tiri kuuya.", english: "Yes, grandfather. We are coming." },
      { speaker: "Elder", shona: "Munda wedu unotoda kushandwa mangwana. Ndoda varume vose.", english: "Our field needs work tomorrow. I need all the men." },
      { speaker: "Young man", shona: "Tichasvika. Tingazvigona here kana tikatanga kwasimba?", english: "We will be there. Can we manage if we start early?" },
      { speaker: "Elder", shona: "Hongu. Kusvika shambadziro nhanho mbiri tingapedza masikati.", english: "Yes. If we reach the second section we can finish by midday." },
    ],
  },
];

const culturalNotes = [
  {
    heading: "Communal activity",
    body: "Village life is organised around communal activity — even private tasks become shared events. The nhimbe (community work party) means no one farms alone. Neighbours help each other and share meals afterwards.",
  },
  {
    heading: "The evening fire",
    body: "The dare — the evening fire and gathering space — is where stories are told, news is shared, and decisions are made. It is the village's parliament, library, and court. Children listen and learn by observing.",
  },
  {
    heading: "Greeting formally",
    body: "Arriving at a village home without food to share is acceptable — visitors are always welcome. But always greet formally — calling out \"Kwaziwa!\" before entering the yard is required. Walking straight in without greeting is disrespectful.",
  },
  {
    heading: "Traditional language",
    body: "Village language is often more traditional — richer in proverbs, respect forms, and ancestral references. You will hear proverbs (tsumo) used in everyday speech far more than in the city.",
  },
];

export default function InTheVillagePage() {
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
            Module 5
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            In the Village
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kumusha
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The village — musha — is where Shona culture is most intact.
            Language here is richer, slower, and more traditional. Proverbs
            punctuate conversation. Communal work structures the week. The
            evening fire (dare) is where decisions are made and history is
            passed down. This module equips you for village life as both a
            participant and an observer.
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
                    <span className="text-xs font-semibold text-[var(--color-muted)] w-20 shrink-0 pt-0.5">
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
          <div className="grid gap-4 md:grid-cols-2">
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
            href="/courses/conversation/in-church"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← In Church
          </Link>
          <Link
            href="/courses/conversation/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
