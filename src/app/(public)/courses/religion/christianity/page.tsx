import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christianity in Shona Society | Duramazwi",
  description:
    "Learn Shona church vocabulary — prayer, worship, scripture, Sunday — and understand how Christianity became woven into Shona cultural identity.",
};

const vocabulary = [
  {
    shona: "Kereke",
    english: "Church",
    pronunciation: "keh-REH-keh",
    note: "From Afrikaans 'kerk' — the standard Shona word for church building and congregation",
  },
  {
    shona: "Mwari",
    english: "God",
    pronunciation: "MWAH-ree",
    note: "The same word used for the traditional supreme being — Christianity adopted it",
  },
  {
    shona: "Mwanakomana",
    english: "Son — referring to Jesus",
    pronunciation: "mwah-nah-koh-MAH-nah",
    note: "Literally 'male child' — used in Trinitarian language: Mwari, Mwanakomana, Mweya Mutsvene",
  },
  {
    shona: "Munamato",
    english: "Prayer",
    pronunciation: "moo-nah-MAH-toh",
    note: "A prayer — the act or content of praying",
  },
  {
    shona: "Kunamata",
    english: "To pray / to worship",
    pronunciation: "koo-nah-MAH-tah",
    note: "Both prayer and worship use this word — the two acts are closely linked in Shona Christian practice",
  },
  {
    shona: "Rugwaro",
    english: "Scripture / the Bible",
    pronunciation: "roo-GWAH-roh",
    note: "Literally 'writing' or 'scripture' — used for the Bible and sacred texts",
  },
  {
    shona: "Muparidzi",
    english: "Preacher / pastor",
    pronunciation: "moo-pah-REE-dzee",
    note: "The person who preaches — also mupristi (priest) in Catholic contexts",
  },
  {
    shona: "Zuva reSvondo",
    english: "Sunday — church day",
    pronunciation: "ZOO-vah reh-SVOHN-doh",
    note: "Literally 'day of Sunday' — the established day of worship across denominations",
  },
  {
    shona: "Rumbidza Mwari",
    english: "Praise God",
    pronunciation: "room-BEE-dzah MWAH-ree",
    note: "A common expression of praise — used in worship, testimony, and daily speech",
  },
  {
    shona: "Mweya Mutsvene",
    english: "Holy Spirit",
    pronunciation: "MWEH-yah moot-SVEH-neh",
    note: "Literally 'holy spirit/wind' — mweya means both spirit and wind",
  },
];

const culturalNotes = [
  {
    title: "A Predominantly Christian Country",
    body:
      "Zimbabwe is one of the most Christian countries in sub-Saharan Africa — over 85% of the population identifies as Christian. This is not a shallow identification: church is central to social life, family events, funerals, and community identity. Even in rural areas where traditional beliefs remain strong, most families also attend church. Christianity arrived through mission work in the 1800s and 1900s — and took root with extraordinary depth.",
  },
  {
    title: "Mission Churches and Their Legacy",
    body:
      "The Anglican, Catholic, and Methodist mission churches established schools, hospitals, and community institutions alongside their churches. This created an association between Christianity and education that persists today. Many of Zimbabwe's most prominent families were educated in mission schools. The missions also produced the first Shona-language Bibles, literacy materials, and written grammar — a gift and a complicated legacy.",
  },
  {
    title: "The Growth of Apostolic and Pentecostal Movements",
    body:
      "The fastest-growing Christian communities in Zimbabwe are the Apostolic and Pentecostal churches — many of them syncretic, blending Christian theology with traditional spiritual practice. The Zimbabwe Assemblies of God Africa (ZAOGA) and the Apostolic Faith Mission (AFM) are among the largest. These churches emphasise the Holy Spirit, prophecy, healing, and direct spiritual experience — elements that resonate with the spiritual framework of Shona traditional belief.",
  },
  {
    title: "Shona Gospel — A Cultural Force",
    body:
      "Shona-language gospel music is not a niche — it is one of the most commercially and spiritually significant music genres in Zimbabwe. Artists like Oliver Mtukudzi recorded gospel; dedicated gospel choirs perform at funerals, weddings, and graduations. The music blends Shona rhythms, mbira patterns, and Christian lyrics in ways that feel wholly indigenous. To hear Shona gospel is to hear a culture that has made Christianity its own.",
  },
  {
    title: "Church as Social Hub",
    body:
      "In many Zimbabwean communities — urban and rural — church attendance is the social backbone. It is where people find community, where marriages are announced and celebrated, where deaths are mourned collectively, where news travels. A church member is embedded in a network of mutual support. The muparidzi (pastor) is often the most influential figure in a community, combining spiritual authority with social leadership.",
  },
];

export default function ChristianityPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/religion"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Religion Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Christianity in Shona Society
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kereke nechiKristu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Christianity came to Zimbabwe in the 1800s — and Shona people did not merely receive
            it, they transformed it. The same Mwari who created the world in traditional belief
            now receives prayers in Shona in thousands of churches. Gospel music carries mbira
            rhythms. Sunday is the week's most important day. This module gives you the
            vocabulary of Shona Christian life.
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
            href="/courses/religion/ancestors"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Ancestors
          </Link>
          <Link
            href="/courses/religion/modern-practice"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Modern Religious Practice →
          </Link>
        </div>
      </div>
    </div>
  );
}
