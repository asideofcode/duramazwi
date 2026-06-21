import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colonial & Modern History of Zimbabwe | Duramazwi",
  description:
    "From Cecil Rhodes and the first Chimurenga to Nehanda, independence in 1980, and the complex story of modern Zimbabwe — in Shona.",
};

const vocabulary = [
  {
    shona: "Koloni",
    english: "Colony",
    pronunciation: "koh-LOH-nee",
    example: "Zimbabwe yaive koloni yeBritain.",
    exampleTranslation: "Zimbabwe was a British colony.",
  },
  {
    shona: "Chimurenga",
    english: "Liberation war / spirit of resistance",
    pronunciation: "chee-moo-REHN-gah",
    example: "Chimurenga chekutanga chaive muna 1896.",
    exampleTranslation: "The first Chimurenga was in 1896.",
  },
  {
    shona: "Nehanda",
    english: "Nehanda Charwe Nyakasikana — spirit medium and national heroine",
    pronunciation: "neh-HAN-dah",
    example: "Nehanda akati mapfupa angu achamuka.",
    exampleTranslation: "Nehanda said my bones will rise again.",
  },
  {
    shona: "Uhuru",
    english: "Freedom / independence",
    pronunciation: "oo-HOO-roo",
    example: "Uhuru hwakauya muna 1980.",
    exampleTranslation: "Independence came in 1980.",
  },
  {
    shona: "Murambatsvina",
    english: "Operation to clear urban slums — 2005",
    pronunciation: "moo-ram-bah-TSVEE-nah",
    example: "Murambatsvina wakakanganisa vanhu vazhinji.",
    exampleTranslation: "Murambatsvina harmed many people.",
  },
  {
    shona: "Sarudzai",
    english: "Vote / choose — elections",
    pronunciation: "sah-roo-DZAH-ee",
    example: "Sarudzai ndiyo nzira yehurumende.",
    exampleTranslation: "Voting is the way of government.",
  },
  {
    shona: "Independence",
    english: "Independence — 18 April 1980",
    pronunciation: "in-deh-PEN-dens",
    example: "Independence yakaita muna April gumi nesere.",
    exampleTranslation: "Independence happened on April eighteenth.",
  },
  {
    shona: "Svikiro",
    english: "Spirit medium — a person who channels ancestor spirits",
    pronunciation: "svee-KEE-roh",
    example: "Svikiro anotaura nezwi revadzimu.",
    exampleTranslation: "The spirit medium speaks with the voice of the ancestors.",
  },
];

const timeline = [
  {
    year: "1890",
    event: "Colonisation",
    description:
      "Cecil Rhodes's British South Africa Company sends the Pioneer Column into Mashonaland. They raise the British flag at Fort Salisbury (now Harare) on 13 September 1890. This marks the formal beginning of colonial rule over what would become Southern Rhodesia.",
  },
  {
    year: "1896–97",
    event: "First Chimurenga",
    description:
      "The Shona and Ndebele people rise against colonial rule in the first Chimurenga. Spirit mediums — especially Nehanda Charwe Nyakasikana and Sekuru Kaguvi — play a central organising role, providing the resistance with spiritual authority. The uprising is brutally suppressed. Nehanda is executed in 1898. Her last words — 'my bones will rise again' — become a prophecy that echoes through the liberation war seven decades later.",
  },
  {
    year: "1964–1980",
    event: "Second Chimurenga — Liberation War",
    description:
      "The long liberation war, fought by ZANLA (Zimbabwe African National Liberation Army) and ZIPRA (Zimbabwe People's Revolutionary Army) against the Rhodesian state. Spirit mediums again play a crucial role — providing moral authority, guidance, and organisational legitimacy to the fighters. The war ends with the Lancaster House Agreement.",
  },
  {
    year: "18 April 1980",
    event: "Independence",
    description:
      "Zimbabwe becomes an independent nation, with Robert Mugabe as its first Prime Minister (later President). The date — 18 April — becomes the most important national holiday. Bob Marley plays at the independence celebrations, writing 'Zimbabwe' for the occasion.",
  },
  {
    year: "1980s–2000s",
    event: "The Mugabe Era",
    description:
      "Zimbabwe begins with high hopes — one of the best-educated populations in Africa, a functioning economy, and international goodwill. The 1980s see genuine development. But political violence (especially Gukurahundi, 1983–87, in Matabeleland), then land reform (fast-track from 2000), economic collapse, hyperinflation (the world's worst, 2007–09), and political repression follow. The history is painful and contested.",
  },
  {
    year: "2017–present",
    event: "The New Dispensation",
    description:
      "Robert Mugabe is removed in a military-assisted transition in November 2017. Emmerson Mnangagwa takes power. Economic and political challenges continue. Zimbabweans inside the country and in the diaspora navigate a complex relationship with home — marked by resilience, pride, and grief in equal measure.",
  },
];

const culturalNotes = [
  {
    title: "Nehanda's bones",
    body: "Nehanda Charwe Nyakasikana is perhaps the most revered figure in Zimbabwean history. As a spirit medium possessed by the Nehanda ancestral spirit, she helped coordinate the first Chimurenga uprising. Executed by hanging in 1898, her dying words — 'my bones will rise again' — were understood as a prophecy. Liberation war fighters in the 1970s explicitly invoked her spirit. A statue of Nehanda now stands in Harare's CBD — placed in 2021 — as a permanent national symbol.",
  },
  {
    title: "Spirit mediums and the liberation war",
    body: "The second Chimurenga was not only a military struggle — it had a profound spiritual dimension. Spirit mediums (svikiro) in rural areas provided fighters with guidance, moral authority, and practical support. Mediums communicating ancestral instructions about where to fight, what to eat, and how to behave gave the war a cultural legitimacy that purely political framing could not. This is why Shona religious and political history cannot be separated.",
  },
  {
    title: "Independence Day",
    body: "18 April is not just a public holiday — it is the day Zimbabwe was reborn. For Zimbabweans who lived through colonialism, the liberation war, and the early years of independence, 18 April 1980 carries enormous emotional weight. The independence celebrations at Rufaro Stadium, with Bob Marley on stage, represent a unique moment in African and world history.",
  },
  {
    title: "Resilience and diaspora",
    body: "Zimbabwe's economic collapse in the 2000s created one of the world's largest diaspora communities — millions of Zimbabweans in South Africa, the UK, the United States, Australia, and elsewhere. This diaspora maintains language, culture, and deep ties to home. Shona is spoken in living rooms in London, Johannesburg, and Toronto — and that is also part of modern Shona history.",
  },
];

export default function ColonialModernPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/history"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to History Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Colonial &amp; Modern History
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nhoroondo yeKoloni neNhasi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Zimbabwe&rsquo;s modern history begins with British colonisation in
            1890 and runs through resistance, liberation, independence, and the
            complicated decades that followed. It is a history of immense
            courage and immense suffering, of prophets and warriors, of
            ordinary people who endured extraordinary things.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Understanding this history is essential for understanding the Shona
            people today — why certain words carry weight, why certain figures
            are revered, and why language and identity are inseparable from
            politics.
          </p>
        </div>

        {/* Vocabulary */}
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

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Timeline
        </h2>
        <div className="flex flex-col gap-4 mb-12">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--color-primary)] text-white shrink-0">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-[var(--color-text)]">
                  {item.event}
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/history/great-zimbabwe"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Great Zimbabwe
          </Link>
          <Link
            href="/courses/history/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Take the challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
