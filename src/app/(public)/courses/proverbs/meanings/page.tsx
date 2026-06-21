import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meanings of Tsumo — Shona Proverbs | Duramazwi",
  description:
    "Learn what a tsumo is and explore 15 essential Shona proverbs with their literal translations, meanings, and cultural context.",
};

const proverbs = [
  {
    shona: "Chara chimwe hachitswanyi inda.",
    literal: "One finger cannot crush a louse.",
    meaning: "Teamwork and unity are essential — no one succeeds alone.",
    whenUsed: "When calling for collective action or community effort.",
  },
  {
    shona: "Muromo hauzi nhamo.",
    literal: "The mouth brings no poverty.",
    meaning: "Asking or speaking up brings no shame — silence is the real loss.",
    whenUsed: "To encourage someone to ask for help or speak their needs.",
  },
  {
    shona: "Huku haina meno inonhonga ura.",
    literal: "A hen has no teeth but pecks a bone.",
    meaning: "Work with what you have — limitations are not excuses.",
    whenUsed: "To encourage ingenuity and perseverance despite disadvantage.",
  },
  {
    shona: "Akaseka hove nemvura haazivi kuti mvura inomutya.",
    literal: "He who laughs at a fish in water doesn't know that the fish fears water.",
    meaning: "Don't mock what you don't understand — everyone has their own fears.",
    whenUsed: "When someone is judging others unfairly or without understanding.",
  },
  {
    shona: "Maoko mazhinji anosimudza mwana.",
    literal: "Many hands lift a child.",
    meaning: "Community raises children — it is a shared responsibility, not a parent's burden alone.",
    whenUsed: "In parenting discussions and community responsibility contexts.",
  },
  {
    shona: "Kudzidza hakuperi.",
    literal: "Learning never ends.",
    meaning: "Wisdom grows throughout life — no one knows everything.",
    whenUsed: "To encourage continued education, humility, and growth.",
  },
  {
    shona: "Nyota hairegi munhu.",
    literal: "Hunger doesn't spare anyone.",
    meaning: "Hardship is universal — it comes to everyone regardless of status.",
    whenUsed: "In empathy contexts — to remind someone their suffering is shared humanity.",
  },
  {
    shona: "Nhasi ndewako, mangwana ndewangu.",
    literal: "Today is yours, tomorrow is mine.",
    meaning: "The future is uncertain — what benefits you now may benefit me later. Generosity flows both ways.",
    whenUsed: "To encourage generosity and discourage hoarding.",
  },
  {
    shona: "Tsoka inogona itsoka yakaenda kumukati.",
    literal: "The foot that knows is the foot that has gone inside.",
    meaning: "Experience is the best teacher — lived knowledge outranks theory.",
    whenUsed: "To affirm the wisdom of someone who has lived through something.",
  },
  {
    shona: "Usarove imbga isingakurumwi.",
    literal: "Don't beat a dog that doesn't bite you.",
    meaning: "Don't provoke or harm someone who has done nothing to you.",
    whenUsed: "In conflict situations to counsel restraint and proportionality.",
  },
  {
    shona: "Muromo ndiwo musoro.",
    literal: "The mouth is the head.",
    meaning: "How you speak determines how you are perceived — your words are your reputation.",
    whenUsed: "To encourage careful, dignified speech.",
  },
  {
    shona: "Munda unorima uri padivi.",
    literal: "A field is farmed while it is near.",
    meaning: "Opportunity must be seized when available — delay and the moment passes.",
    whenUsed: "To motivate action and discourage procrastination.",
  },
  {
    shona: "Akasatana nashe haasati afa.",
    literal: "One who has not fallen out with a chief has not yet lived.",
    meaning: "Life inevitably involves conflict with authority — it is part of human experience.",
    whenUsed: "When someone encounters trouble with authority or power.",
  },
  {
    shona: "Rambai makasimba.",
    literal: "Keep being strong.",
    meaning: "Encouragement and blessing — a cultural standard farewell and affirmation.",
    whenUsed: "As a blessing, farewell, or general encouragement.",
  },
  {
    shona: "Pfuma haina musha.",
    literal: "Wealth has no home.",
    meaning: "Wealth is temporary and cannot be the foundation of identity — it does not stay.",
    whenUsed: "To discourage materialism and warn against building your life on possessions.",
  },
];

const culturalNotes = [
  {
    heading: "Tsumo are compressed wisdom",
    body: "An elder drops a tsumo into conversation as an authoritative final word. It speaks for the whole community, not just one person — which is why it carries such weight.",
  },
  {
    heading: "Knowing tsumo marks you as educated",
    body: "In Shona culture, recognising and using proverbs correctly signals that you have been raised well and think deeply. It is a mark of cultural fluency, not just language ability.",
  },
  {
    heading: "Grandparents teach tsumo",
    body: "Children learn tsumo from grandparents — usually through stories and conversation rather than formal lessons. The knowledge passes in the natural flow of family life.",
  },
  {
    heading: "Using a proverb is a social skill",
    body: "Dropping the right proverb at the right moment is considered sophisticated. It allows you to make a point, end an argument, or teach a lesson without being confrontational or direct.",
  },
];

export default function ProverbsMeaningsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/proverbs"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Proverbs Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Meanings of Tsumo
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvinoreva Tsumo
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A tsumo is a proverb — a short, traditional saying that contains a
            compressed life lesson. They are used by elders to teach, by parents
            to correct children, and in conversation to express wisdom without
            being direct. Reading a tsumo requires two layers: the literal
            image, and the deeper meaning beneath it.
          </p>
        </div>

        {/* Proverbs Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          15 Essential Tsumo
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Shona Proverb</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Literal Translation</th>
                <th className="px-4 py-3 font-semibold">Meaning / Lesson</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">When Used</th>
              </tr>
            </thead>
            <tbody>
              {proverbs.map((p, i) => (
                <tr
                  key={p.shona}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)] italic">
                    {p.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell">
                    {p.literal}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {p.meaning}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell">
                    {p.whenUsed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-5">
            Cultural Notes: How Tsumo Work
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
            href="/courses/proverbs"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/proverbs/usage"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Using Tsumo →
          </Link>
        </div>
      </div>
    </div>
  );
}
