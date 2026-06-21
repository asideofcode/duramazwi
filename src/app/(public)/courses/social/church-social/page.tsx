import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church & Social Life in Shona | Duramazwi",
  description:
    "Learn Shona for church and community life — prayer, pastor, worship, and the central role church plays in Zimbabwean social culture.",
};

const vocabulary = [
  {
    shona: "Kereke",
    english: "Church",
    pronunciation: "keh-REH-keh",
    example: "Ndinoenda kerekeni Svondo.",
    exampleTranslation: "I go to church on Sunday.",
  },
  {
    shona: "Munamato",
    english: "Prayer",
    pronunciation: "moo-nah-MAH-toh",
    example: "Munamato wedu unosimba.",
    exampleTranslation: "Our prayer is powerful.",
  },
  {
    shona: "Kuimba",
    english: "To sing",
    pronunciation: "koo-EEM-bah",
    example: "Tinofarira kuimba mukereke.",
    exampleTranslation: "We love singing in church.",
  },
  {
    shona: "Bhaibheri",
    english: "Bible",
    pronunciation: "bhai-BHEH-ree",
    example: "Ndinovenga bhaibheri rangu kumba.",
    exampleTranslation: "I always have my Bible at home.",
  },
  {
    shona: "Mugwagwa wekereke",
    english: "Church compound",
    pronunciation: "moo-GWAH-gwah weh-keh-REH-keh",
    example: "Vana vanodamba mugwagwa wekereke.",
    exampleTranslation: "Children play in the church compound.",
  },
  {
    shona: "Mufundisi",
    english: "Pastor / Reverend",
    pronunciation: "moo-foon-DEE-see",
    example: "Mufundisi wetu anofundisa neuchenjeri.",
    exampleTranslation: "Our pastor teaches with wisdom.",
  },
  {
    shona: "Bhudhi / Sister",
    english: "Brother / Sister (church address)",
    pronunciation: "BHOO-dee / SIS-tah",
    example: "Bhudhi Tendai, mhoroi.",
    exampleTranslation: "Brother Tendai, hello.",
  },
  {
    shona: "Kunzwa",
    english: "To listen (to the sermon)",
    pronunciation: "KOON-zwah",
    example: "Ndinokunzwa nemoyo wose.",
    exampleTranslation: "I listen with my whole heart.",
  },
  {
    shona: "Kupfira",
    english: "To offer / give an offering",
    pronunciation: "koo-PFEE-rah",
    example: "Tinopfira musi weSvondo.",
    exampleTranslation: "We give an offering on Sunday.",
  },
  {
    shona: "Chikoro chekereke",
    english: "Sunday school",
    pronunciation: "chee-KOH-roh cheh-keh-REH-keh",
    example: "Mwana wangu anoenda kuchikoro chekereke.",
    exampleTranslation: "My child goes to Sunday school.",
  },
  {
    shona: "Musasa",
    english: "Church gathering / Camp meeting",
    pronunciation: "moo-SAH-sah",
    example: "Musasa uno uri Svondo rinouya.",
    exampleTranslation: "The camp meeting is next Sunday.",
  },
];

const churchAsHub = {
  heading: "Church as Community Centre",
  body: `In Zimbabwe, going to church is rarely just a spiritual act — it is a social one. The church compound on a Sunday morning is one of the most active social spaces in the country. People dress well, greet each other, catch up on news, check on the sick, and arrange visits. Business is discussed. Marriages are facilitated. Community decisions are made.

This is why the phrase 'Ndinoenda kerekeni' (I'm going to church) carries so much more weight than it might in other contexts. You are going to your community — to see and be seen, to belong, to be accountable. People who stop going to church are noticed. People who move to a new city and find a church quickly feel rooted.

Women's fellowship groups (mabatiro) are particularly important — they function as mutual support networks, social clubs, and informal safety nets. If something happens to a family member, it is often the mabatiro who mobilise first.`,
};

const culturalNotes = [
  {
    title: "Church is a community hub, not just a religious space",
    body: "Church in Zimbabwe functions as community infrastructure. Social ties formed at church can be as strong as family ties — sometimes stronger. People refer to each other as 'Bhudhi' (Brother) and 'Sister' genuinely, not just as a convention.",
  },
  {
    title: "Church friendships can become family",
    body: "It is common for lifelong friendships to form at church — particularly among women in the same fellowship group. These friendships involve practical support: childcare, food sharing, hospital visits, and attending each other's family events.",
  },
  {
    title: "Women's groups (mabatiro) are social support structures",
    body: "Women's groups at church are not just prayer circles — they are organised mutual aid networks. They collect contributions for members in need, attend funerals together, and celebrate births and weddings as a group. Joining a mabatiro connects a woman to a real community.",
  },
  {
    title: "Church events are major social occasions",
    body: "Youth camps (musasa), conferences, revival meetings, and crusades are significant social events — not only religiously but socially. Young people meet potential partners. Families visit relatives in other towns. These events anchor the annual social calendar in many communities.",
  },
];

export default function ChurchSocialPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/social"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Social Life Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Church &amp; Social Life
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kereke neUpenyu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            To understand Zimbabwean social life, you need to understand church.
            Not just as a place of worship, but as the social centre of many
            communities — the place where people check in, care for each other,
            form friendships, and mark the major moments of their lives.
            Learning the vocabulary of the church is learning the vocabulary of
            community.
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

        {/* Church as Hub */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-12">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            {churchAsHub.heading}
          </h3>
          <div className="space-y-4">
            {churchAsHub.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-[var(--color-muted)] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Church in Zimbabwe
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note) => (
              <div key={note.title}>
                <p className="font-semibold text-[var(--color-text)] mb-1">
                  {note.title}
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
            href="/courses/social/dating"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Dating &amp; Romance
          </Link>
          <Link
            href="/courses/social/village-urban"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Village vs Urban Life →
          </Link>
        </div>
      </div>
    </div>
  );
}
