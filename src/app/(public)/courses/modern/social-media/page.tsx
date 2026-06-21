import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media in Shona | Duramazwi",
  description:
    "Learn the Shona of social media — posting, liking, sharing, and commenting, plus the platforms where Shona thrives online.",
};

const vocabulary = [
  {
    shona: "Kupostara",
    english: "To post (from 'post')",
    pronunciation: "koo-poh-STAH-rah",
    example: "Ndinopostara zifundo pana Facebook.",
    exampleTranslation: "I post lessons on Facebook.",
  },
  {
    shona: "Kulaikisha",
    english: "To like (from 'like')",
    pronunciation: "koo-lah-EE-kee-shah",
    example: "Ndalaikisha mufananidzo wako.",
    exampleTranslation: "I liked your photo.",
  },
  {
    shona: "Kushea",
    english: "To share (from 'share')",
    pronunciation: "koo-SHEH-ah",
    example: "Ndakushea nyaya iyi kumhuri yangu.",
    exampleTranslation: "I shared this story with my family.",
  },
  {
    shona: "Komenti",
    english: "Comment",
    pronunciation: "koh-MEN-tee",
    example: "Akanyora komenti rakanaka.",
    exampleTranslation: "He wrote a nice comment.",
  },
  {
    shona: "Pfungwa yangu",
    english: "My opinion (used in comment sections)",
    pronunciation: "PFOO-ngwah YAH-ngoo",
    example: "Pfungwa yangu, zvakanaka zvakadai.",
    exampleTranslation: "My opinion, this is very good like this.",
  },
  {
    shona: "Kuona chifundo",
    english: "To see something interesting (viral content)",
    pronunciation: "koo-OH-nah chee-FOO-ndoh",
    example: "Ndaona chifundo paWhatsApp nhasi.",
    exampleTranslation: "I saw something interesting on WhatsApp today.",
  },
  {
    shona: "Mazano",
    english: "Advice / tips (common caption word)",
    pronunciation: "mah-ZAH-noh",
    example: "Mazano ekubika sadza rakanaka.",
    exampleTranslation: "Tips for cooking good sadza.",
  },
  {
    shona: "Nziyo itsva",
    english: "New song (music sharing)",
    pronunciation: "nzee-YOH eet-SVAH",
    example: "Nziyo itsva yaSungura — inzwai!",
    exampleTranslation: "A new song by Sungura — listen to it!",
  },
  {
    shona: "Zvinotsa",
    english: "It is nice / it is good (Shona slang approval)",
    pronunciation: "zvee-NOH-tsah",
    example: "Mufananidzo uyu zvinotsa!",
    exampleTranslation: "This photo is nice!",
  },
];

const platforms = [
  {
    name: "WhatsApp",
    shona: "WhatsApp",
    use: "The dominant platform for all Zimbabwean communication — family groups, community groups, news sharing, and voice notes. Every family has a 'mhuri' group.",
  },
  {
    name: "Facebook",
    shona: "Facebook",
    use: "Shona Facebook groups are active spaces for news, recipes, debates, music, and cultural content. The diaspora stays connected through Facebook communities.",
  },
  {
    name: "TikTok",
    shona: "TikTok",
    use: "Young Zimbabwean creators are building a Shona TikTok presence — cooking, comedy, culture, and language content in Shona is growing fast.",
  },
  {
    name: "Twitter / X",
    shona: "Twitter / X",
    use: "Zimbabwean Twitter is vocal and politically engaged. Shona is used alongside English in discussions of national events, sport, and culture.",
  },
  {
    name: "Instagram",
    shona: "Instagram",
    use: "Food, fashion, and diaspora life are shared here. Captions often mix Shona and English — 'zvinotsa' and 'zvakanaka' appear constantly in comments.",
  },
];

const culturalNotes = [
  {
    title: "Shona social media communities",
    body: "Zimbabwean social media is extremely active — even in the diaspora, Shona communities on every platform are large, vibrant, and engaged. You are never far from Shona online.",
  },
  {
    title: "News travels through WhatsApp",
    body: "News about Zimbabwe — both good and difficult — often spreads through WhatsApp groups before it reaches traditional media. Family groups are the first source of everything.",
  },
  {
    title: "Shona TikTok is growing",
    body: "Shona TikTok has exploded in recent years. Young creators make content entirely in Shona — music reactions, language lessons, cooking videos, and comedic skits. It is a major force in keeping Shona alive among the second generation.",
  },
  {
    title: "Facebook groups as community",
    body: "Shona Facebook groups function as genuine community spaces — sharing job opportunities, celebrating births and marriages, mourning together, and keeping diaspora Zimbabweans connected to home culture.",
  },
];

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/modern"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Modern Shona
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Social Media in Shona
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Magetsi neWhatsApp
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Social media is where Shona is most alive outside Zimbabwe.
            WhatsApp groups keep families connected across continents.
            Facebook groups replace the village square. TikTok is teaching the
            next generation. This module gives you the language of Shona in
            these digital spaces — the words to post, react, and participate.
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

        {/* Platform Guide */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Where Shona Lives Online
        </h2>
        <div className="grid gap-4 mb-12">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <p className="font-bold text-[var(--color-primary)] text-lg mb-2">
                {p.name}
              </p>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                {p.use}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Shona Online
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note, i) => (
              <div key={i}>
                <p className="font-semibold text-[var(--color-primary)] mb-1">
                  {note.title}
                </p>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/modern/phone-calls"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Phone Conversations
          </Link>
          <Link
            href="/courses/modern/digital-shona"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Digital Shona Language →
          </Link>
        </div>
      </div>
    </div>
  );
}
