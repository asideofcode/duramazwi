import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Support Systems in Shona — Nhimbe & Jangano | Duramazwi",
  description:
    "Learn Shona vocabulary for community support — the nhimbe work party, jangano savings clubs, and the zunde raMambo communal fields.",
};

const vocabulary = [
  {
    shona: "Nhimbe",
    english: "Community work party — everyone helps one person's field",
    pronunciation: "NHEEM-beh",
    example: "Nhimbe yatichashanda musi weSvondo.",
    exampleTranslation: "The community work party is on Sunday.",
  },
  {
    shona: "Zunde raMambo",
    english: "The chief's communal field — fed the poor",
    pronunciation: "ZOON-deh rah-MAM-boh",
    example: "Zunde raMambo rakabatsira varombo.",
    exampleTranslation: "The chief's communal field helped the poor.",
  },
  {
    shona: "Humwe",
    english: "Communal labour",
    pronunciation: "HOO-mweh",
    example: "Humwe ndihwo hunhu hwedu.",
    exampleTranslation: "Communal labour is our way of being.",
  },
  {
    shona: "Kubatsira",
    english: "To help",
    pronunciation: "koo-bah-TSEE-rah",
    example: "Tinofanira kubatsira vanoda rubatsiro.",
    exampleTranslation: "We must help those who need assistance.",
  },
  {
    shona: "Chipo",
    english: "Gift / contribution",
    pronunciation: "CHEE-poh",
    example: "Akauyisa chipo pamuchato.",
    exampleTranslation: "He brought a contribution to the wedding.",
  },
  {
    shona: "Kuungana",
    english: "To gather together",
    pronunciation: "koo-oong-GAH-nah",
    example: "Tichakuungana manheru asvika.",
    exampleTranslation: "We will gather this evening.",
  },
  {
    shona: "Mhangura",
    english: "Collection / contribution pool",
    pronunciation: "mhan-GOO-rah",
    example: "Mhangura yedu inobatsira vose.",
    exampleTranslation: "Our contribution pool helps everyone.",
  },
  {
    shona: "Kutumira",
    english: "To send / contribute — sending resources to those in need",
    pronunciation: "koo-too-MEE-rah",
    example: "Vakamutumira zvokudya.",
    exampleTranslation: "They sent him food.",
  },
  {
    shona: "Jangano",
    english: "Women's support group / savings club",
    pronunciation: "jahn-GAH-noh",
    example: "Jangano redu rinosangana gore rose.",
    exampleTranslation: "Our savings club meets throughout the year.",
  },
];

const culturalNotes = [
  {
    title: "Nhimbe — The Community Work Party",
    body: "Nhimbe is one of the most important Shona social institutions. When a household needs a large task done — ploughing a field, building a hut, harvesting — they invite neighbours and community members to come and work together for a day. In return, the household provides food and drink for everyone. The work rotates: today everyone helps your field, tomorrow you help theirs. Nhimbe is not charity — it is mutual investment.",
  },
  {
    title: "Jangano — Women's Savings and Support Clubs",
    body: "Jangano (sometimes called round-robin savings clubs or ROSCAs) are still widely practised among Shona women in Zimbabwe and the diaspora. A group of women contributes a fixed amount of money regularly, and each month the full pool goes to one member in rotation. Beyond the financial function, jangano provides emotional support, a social network, and collective problem-solving. It is one of the most resilient community institutions in Shona culture.",
  },
  {
    title: "Zunde raMambo — The Traditional Safety Net",
    body: "Zunde raMambo (the chief's granary or communal field) was a traditional social safety net managed by the chief. Community members contributed labour to this shared field, and the harvest was stored to feed the poor, orphans, widows, and the elderly in times of shortage. This was not voluntary in the modern sense — it was a community obligation and the chief's responsibility as leader. Some communities are reviving this institution today.",
  },
  {
    title: "No One Suffers Alone",
    body: "The underlying principle of all these systems is that no person should suffer alone while the community has capacity to help. Whether through nhimbe labour, jangano savings, or spontaneous contributions at times of crisis, the community is expected to close around those in need. Isolation and suffering in silence are considered failures of community — not just personal misfortune.",
  },
];

export default function CommunitySupportPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/community"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Community Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Community Support Systems
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nhimbe neJangano
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Before banks, welfare systems, or NGOs, Shona communities built
            their own systems to ensure collective survival. Nhimbe work parties,
            jangano savings clubs, and zunde raMambo communal fields are not
            historical artefacts — they are still practised today. This module
            gives you the vocabulary to talk about these systems and the
            cultural understanding to appreciate what they represent.
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

        {/* Challenges CTA */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
            Ready to test your knowledge?
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Practice all four community modules with 30 graded challenges.
          </p>
          <Link
            href="/courses/community/challenges"
            className="inline-block rounded-xl px-5 py-3 text-sm font-semibold theme-button-accent hover:brightness-95 transition-all shadow"
          >
            Start Community Challenges →
          </Link>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/community/social-obligations"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Social Obligations
          </Link>
          <Link
            href="/courses/community/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Community Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
