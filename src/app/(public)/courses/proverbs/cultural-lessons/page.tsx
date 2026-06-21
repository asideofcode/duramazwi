import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Lessons in Tsumo — Shona Proverbs | Duramazwi",
  description:
    "Shona proverbs organised by the cultural values they encode — unity, humility, speech, hardship, wealth, and time.",
};

const categories = [
  {
    title: "Unity & Community",
    shona: "Kubatana neVanhu",
    description:
      "These proverbs reflect the Shona belief that the individual exists within the community — not apart from it. Collective action is not just encouraged; it is the natural order.",
    proverbs: [
      {
        shona: "Chara chimwe hachitswanyi inda.",
        translation: "One finger cannot crush a louse.",
        lesson: "No single person can accomplish what a group can. Collective effort is the natural response to challenge.",
      },
      {
        shona: "Maoko mazhinji anosimudza mwana.",
        translation: "Many hands lift a child.",
        lesson: "Child-rearing, like all important work, belongs to the community — not just the parents.",
      },
      {
        shona: "Nhasi ndewako, mangwana ndewangu.",
        translation: "Today is yours, tomorrow is mine.",
        lesson: "Generosity sustains community. What you give freely today flows back to you later.",
      },
    ],
  },
  {
    title: "Humility & Learning",
    shona: "Kuzvininipisa neKudzidza",
    description:
      "Shona culture prizes the person who knows they do not know everything — who keeps learning, keeps listening, keeps growing. These proverbs cut against arrogance.",
    proverbs: [
      {
        shona: "Kudzidza hakuperi.",
        translation: "Learning never ends.",
        lesson: "No stage of life graduates you from the need to learn. Humility and curiosity are lifelong.",
      },
      {
        shona: "Tsoka inogona itsoka yakaenda kumukati.",
        translation: "The foot that knows is the foot that has gone inside.",
        lesson: "Lived experience gives knowledge that cannot come from theory or observation alone.",
      },
      {
        shona: "Akaseka hove nemvura haazivi kuti mvura inomutya.",
        translation: "He who laughs at a fish in water doesn't know that the fish fears water.",
        lesson: "Mocking what you don't understand reveals your own ignorance, not another's weakness.",
      },
    ],
  },
  {
    title: "Respect & Caution in Speech",
    shona: "Kuremekedza Kutaura",
    description:
      "Speech is power in Shona culture. The way you speak — with whom, in what register, and when you choose silence — defines you. These proverbs encode the ethics of language.",
    proverbs: [
      {
        shona: "Muromo ndiwo musoro.",
        translation: "The mouth is the head.",
        lesson: "Your words are your reputation. Speak with dignity and care.",
      },
      {
        shona: "Muromo hauzi nhamo.",
        translation: "The mouth brings no poverty.",
        lesson: "Asking for help is not weakness. Staying silent out of pride is the real poverty.",
      },
    ],
  },
  {
    title: "Hardship & Resilience",
    shona: "Matambudziko neKusimba",
    description:
      "Life involves suffering. These proverbs do not deny that — they reframe it. Hardship is universal, and the Shona response is not complaint but perseverance and creative adaptation.",
    proverbs: [
      {
        shona: "Nyota hairegi munhu.",
        translation: "Hunger doesn't spare anyone.",
        lesson: "Hardship is part of human experience — shared by everyone regardless of status.",
      },
      {
        shona: "Huku haina meno inonhonga ura.",
        translation: "A hen has no teeth but pecks a bone.",
        lesson: "Work with what you have. Limitations are real but they are not final.",
      },
      {
        shona: "Moto haupedzi uswa.",
        translation: "Fire doesn't finish grass.",
        lesson: "Even the strongest force has limits. Knowing when to hold back is wisdom, not weakness.",
      },
      {
        shona: "Shiri inoruka dendere neshinda dzayo.",
        translation: "A bird builds its nest with its own fibres.",
        lesson: "You build your life from your own resources and effort. Self-reliance is not isolation — it is strength.",
      },
    ],
  },
  {
    title: "Wealth & Materialism",
    shona: "Pfuma neMhinduro Yayo",
    description:
      "Shona proverbs treat wealth with great ambivalence. It is not condemned outright — but clinging to it, or letting it define you, is treated as a spiritual and social failure.",
    proverbs: [
      {
        shona: "Pfuma haina musha.",
        translation: "Wealth has no home.",
        lesson: "Wealth is impermanent — it cannot settle, it cannot define you. Your character and community are what last.",
      },
      {
        shona: "Zvawakadya ndizvo zvakakupa simba.",
        translation: "What you ate is what gave you strength.",
        lesson: "What you invest — in relationships, knowledge, work — returns to you. Real wealth is built, not hoarded.",
      },
    ],
  },
  {
    title: "Time & Opportunity",
    shona: "Nguva neChance",
    description:
      "Shona proverbs treat time as alive — it moves, it passes, and it cannot be recalled. Opportunities are like fields or seasons: present now, gone if you wait too long.",
    proverbs: [
      {
        shona: "Munda unorima uri padivi.",
        translation: "A field is farmed while it is near.",
        lesson: "Opportunity is available now — delay and the season passes. Act while you can.",
      },
      {
        shona: "Gore harina musha.",
        translation: "A year has no home.",
        lesson: "Time passes and does not return. The future belongs to no one — it is open.",
      },
    ],
  },
];

const bigPicture = [
  "Shona proverbs cover every aspect of life — there is a tsumo for almost every situation a person can face.",
  "They encode the collective moral wisdom of the Shona people, developed and refined over centuries of communal living.",
  "Many proverbs draw on agricultural and natural imagery — fields, fire, water, animals — reflecting the traditional Shona relationship with the land.",
  "Modern Shona people still use tsumo regularly, in conversation, social media, and public life. They are not museum pieces — they are alive.",
];

export default function ProverbsCulturalLessonsPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Cultural Lessons in Tsumo
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zvidzidzo zveChiShona
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Every tsumo is a window into the Shona moral world. When you
            organise them by theme, a picture emerges — a complete set of values
            that the Shona community has held, tested, and passed down through
            generations. This module groups tsumo by the cultural values they
            encode.
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-10 mb-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-xl font-bold text-[var(--color-text)]">
                  {cat.title}
                </h2>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  {cat.shona}
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                {cat.description}
              </p>
              <div className="space-y-3">
                {cat.proverbs.map((p) => (
                  <div
                    key={p.shona}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
                  >
                    <p className="font-bold text-[var(--color-primary)] italic mb-1">
                      {p.shona}
                    </p>
                    <p className="text-sm text-[var(--color-text)] font-medium mb-2">
                      {p.translation}
                    </p>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {p.lesson}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* The Big Picture */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            The Bigger Picture
          </h3>
          <ul className="space-y-3">
            {bigPicture.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] font-bold mt-0.5 shrink-0">
                  ·
                </span>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/proverbs/usage"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Using Tsumo
          </Link>
          <Link
            href="/courses/proverbs/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
