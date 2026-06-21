import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In Church — Conversation in Shona | Duramazwi",
  description:
    "Learn the Shona vocabulary and phrases for church — worship, prayer, hymns, testimonies, and the expressive faith language of Zimbabwe.",
};

const vocabulary = [
  {
    shona: "Kereke",
    english: "Church",
    pronunciation: "keh-REH-keh",
    example: "Tinoenda kukereke Svondo.",
    exampleTranslation: "We go to church on Sunday.",
  },
  {
    shona: "Munamato",
    english: "Prayer",
    pronunciation: "moo-nah-MAH-toh",
    example: "Munamato ndihwo unopa simba.",
    exampleTranslation: "Prayer is what gives strength.",
  },
  {
    shona: "Kuimba",
    english: "To sing",
    pronunciation: "koo-EEM-bah",
    example: "Tinofarira kuimba mukereke.",
    exampleTranslation: "We love to sing in church.",
  },
  {
    shona: "Kunamata",
    english: "To worship / to pray",
    pronunciation: "koo-nah-MAH-tah",
    example: "Tinonamata Mwari nemwoyo wose.",
    exampleTranslation: "We worship God with all our heart.",
  },
  {
    shona: "Mharidzo",
    english: "Sermon / Preaching",
    pronunciation: "mhah-REE-dzoh",
    example: "Mharidzo yaive refu nhasi.",
    exampleTranslation: "The sermon was long today.",
  },
  {
    shona: "Nziyo",
    english: "Hymn / Praise song",
    pronunciation: "NZEE-yoh",
    example: "Nziyo yaive inofadza.",
    exampleTranslation: "The hymn was beautiful.",
  },
  {
    shona: "Kupira",
    english: "To offer / to give an offering",
    pronunciation: "koo-PEE-rah",
    example: "Tinopira nerombo redu.",
    exampleTranslation: "We give an offering with gladness.",
  },
  {
    shona: "Chipo cherudo",
    english: "Love offering",
    pronunciation: "CHEE-poh che-ROO-doh",
    example: "Chipo cherudo chichaendeswa kuvarombo.",
    exampleTranslation: "The love offering will be sent to the poor.",
  },
  {
    shona: "Kuprofita",
    english: "To prophesy",
    pronunciation: "koo-proh-FEE-tah",
    example: "Muprofita akataura mashoko edenga.",
    exampleTranslation: "The prophet spoke heavenly words.",
  },
  {
    shona: "Bhaibheri",
    english: "Bible",
    pronunciation: "bhah-ee-BHEH-ree",
    example: "Verenga Bhaibheri zuva nezuva.",
    exampleTranslation: "Read the Bible every day.",
  },
  {
    shona: "Zvitsidzo",
    english: "Testimonies / Promises",
    pronunciation: "zvee-TSEE-dzoh",
    example: "Zvitsidzo zvakaratidza Simba raMwari.",
    exampleTranslation: "The testimonies showed the power of God.",
  },
  {
    shona: "Rumbidza Mwari",
    english: "Praise God",
    pronunciation: "room-BEE-dzah MWAH-ree",
    example: "Rumbidza Mwari, vadiwa!",
    exampleTranslation: "Praise God, beloved ones!",
  },
];

const dialogues = [
  {
    title: "Arriving at Church",
    shona: "Kusvika Mukereke",
    lines: [
      { speaker: "Greeter", shona: "Mauya! Mauya zvakanaka, vadiwa.", english: "You have come! You are very welcome, beloved ones." },
      { speaker: "Visitor", shona: "Maita basa. Tinofarira kuva pano.", english: "Thank you. We are glad to be here." },
      { speaker: "Greeter", shona: "Ivai neramangwana rakanaka. Tinonamata pamwe chete.", english: "Have a blessed morning. We worship together." },
      { speaker: "Visitor", shona: "Amen. Rumbidza Mwari.", english: "Amen. Praise God." },
    ],
  },
  {
    title: "Sharing a Testimony",
    shona: "Chitsidzo",
    lines: [
      { speaker: "Leader", shona: "Pane ane chitsidzo here — anoda kutaura?", english: "Is there anyone with a testimony — who wants to speak?" },
      { speaker: "Member", shona: "Ndinoda kutenda Mwari. Ndaiva urwere, asi Mwari akandirapa.", english: "I want to thank God. I was sick, but God healed me." },
      { speaker: "Congregation", shona: "Amen! Rumbidza Mwari!", english: "Amen! Praise God!" },
      { speaker: "Member", shona: "Munamato wenyu wese wakandisvika. Ndinokutendai.", english: "All your prayers reached me. I thank you." },
      { speaker: "Leader", shona: "Tichaimirai nguva yose. Mwari ngaakudzivirire.", english: "We will always stand with you. May God protect you." },
    ],
  },
  {
    title: "After the Service",
    shona: "Mushure Mekereke",
    lines: [
      { speaker: "A", shona: "Mharidzo yaive inobaya mwoyo nhasi.", english: "The sermon was really touching today." },
      { speaker: "B", shona: "Ndinotenda. Muparidzi akataura zvakanaka chaizvo.", english: "I agree. The preacher spoke really well." },
      { speaker: "A", shona: "Nziyo yaichema mwoyo wangu. Ndinofurira kuimba.", english: "The hymn moved my heart. I love to sing." },
      { speaker: "B", shona: "Tionana svondo rinouya. Fambai zvakanaka.", english: "See you next Sunday. Go well." },
      { speaker: "A", shona: "Chisarai zvakanaka. Mwari ngaamudzivirire.", english: "Stay well. May God protect you." },
    ],
  },
];

const culturalNotes = [
  {
    heading: "Long and expressive services",
    body: "Church services in Zimbabwe are often long — three to four hours — and very expressive. Clapping, dancing, shouting praise, and weeping are all normal. Visitors sometimes find this surprising at first.",
  },
  {
    heading: "Singing with full participation",
    body: "Singing is central to Shona church services and done with full participation — not passive listening. The congregation leads the songs, not just the choir. You are expected to join in.",
  },
  {
    heading: "Testimony sharing",
    body: "Testimony sharing (zvitsidzo) is a key part of most Shona church services. Members share healings, answered prayers, and experiences of God's help. It builds community and encourages faith.",
  },
  {
    heading: "Dress formally",
    body: "Dress is always formal for church — the house of God is treated with high respect. Women often cover their heads during prayer. Men wear their best clothes. Casual dress would be considered disrespectful.",
  },
];

export default function InChurchPage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            In Church
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mukereke
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Church is one of the most important social institutions in
            Zimbabwean life. For many Shona speakers, the richest and most
            emotionally full use of the language happens in worship. This
            module teaches the vocabulary of faith and the phrases you will
            hear and need across any Shona church service.
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
            href="/courses/conversation/at-work"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← At Work
          </Link>
          <Link
            href="/courses/conversation/in-the-village"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: In the Village →
          </Link>
        </div>
      </div>
    </div>
  );
}
