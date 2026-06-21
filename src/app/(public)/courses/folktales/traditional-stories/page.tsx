import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Stories — Ngano dzeKare | Duramazwi",
  description:
    "Discover the classic Shona folktales — Tsuro naGava, the generous murombo, and the chief's daughter — and the Shona language that lives inside them.",
};

const vocabulary = [
  {
    shona: "Ngano",
    english: "Folktale / Story",
    pronunciation: "N-GAH-no",
    example: "Ngano iyi inofadza.",
    exampleTranslation: "This folktale is enjoyable.",
  },
  {
    shona: "Kare kare",
    english: "Long long ago (opening phrase)",
    pronunciation: "KAH-reh KAH-reh",
    example: "Kare kare, pakanga pane tsuro...",
    exampleTranslation: "Long long ago, there was a hare...",
  },
  {
    shona: "Chakaitika",
    english: "It happened (story marker)",
    pronunciation: "cha-kah-ee-TEE-ka",
    example: "Chakaitika kuti shumba yakauya.",
    exampleTranslation: "It came to pass that the lion arrived.",
  },
  {
    shona: "Mhuka",
    english: "Animal",
    pronunciation: "M-HOO-ka",
    example: "Mhuka dzose dzakauya.",
    exampleTranslation: "All the animals came.",
  },
  {
    shona: "Tsuro",
    english: "Hare (the trickster)",
    pronunciation: "TSOO-ro",
    example: "Tsuro yakashandisa njere.",
    exampleTranslation: "The hare used cleverness.",
  },
  {
    shona: "Shumba",
    english: "Lion (the powerful king)",
    pronunciation: "SHOOM-bah",
    example: "Shumba ndiyo mambo wemhuka.",
    exampleTranslation: "The lion is the king of animals.",
  },
  {
    shona: "Gava",
    english: "Hyena (the greedy villain)",
    pronunciation: "GAH-vah",
    example: "Gava raida zvese.",
    exampleTranslation: "The hyena wanted everything.",
  },
  {
    shona: "Shiri",
    english: "Bird (wisdom figure)",
    pronunciation: "SHEE-ree",
    example: "Shiri yakadzidzisa.",
    exampleTranslation: "The bird taught a lesson.",
  },
  {
    shona: "Murombo",
    english: "Poor person (often the hero)",
    pronunciation: "moo-ROM-bo",
    example: "Murombo wakabudirira.",
    exampleTranslation: "The poor person succeeded.",
  },
  {
    shona: "Pfuma",
    english: "Wealth (often a temptation)",
    pronunciation: "PFOO-mah",
    example: "Pfuma hairatidzi hunhu.",
    exampleTranslation: "Wealth does not show character.",
  },
  {
    shona: "Mwari",
    english: "God (the ultimate judge)",
    pronunciation: "MWAH-ree",
    example: "Mwari akaona zvose.",
    exampleTranslation: "God saw everything.",
  },
  {
    shona: "Chiremba",
    english: "Clever person / one who outsmarts",
    pronunciation: "chee-REM-bah",
    example: "Iye ndiye chiremba wengano.",
    exampleTranslation: "He is the clever one of the story.",
  },
];

const stories = [
  {
    title: "Tsuro naGava",
    subtitle: "The Hare and the Hyena",
    moral: "Wit beats strength",
    moralShona: "Njere dzinokunda simba",
    body: `Long long ago — kare kare — Gava the hyena was the terror of the forest. He was larger than Tsuro, louder than Tsuro, and he never let Tsuro forget it. Gava ate first at every feast. Gava slept longest in the sun. Whatever Gava wanted, Gava took — because what could a small hare do against a hyena?

One dry season, the animals found a great field of ripe grain. Gava announced that he alone would harvest and share as he pleased. But Tsuro had a plan.

Tsuro told Gava he had heard of a magical well deep in the forest — a well that would make whoever drank from it the most powerful creature alive. All Gava had to do was lower himself in by a rope. Gava descended eagerly, dreaming of more power. When he called out from the darkness, "Tsuro! Pull me up!" — Tsuro replied, "I am so small, Gava. I cannot pull you alone. I will go and fetch the others." And with that, Tsuro walked away to enjoy the grain in peace.

The story teaches what Shona children learn early: simba (physical strength) without njere (wisdom) is an empty gift. Tsuro does not fight Gava — he simply lets Gava's own greed trap him. The lesson is not cruelty but clarity: a clever mind is worth more than strong arms.`,
  },
  {
    title: "Murombo naMupfumi",
    subtitle: "The Poor Man and the Wealthy Man",
    moral: "Generosity is rewarded; greed destroys",
    moralShona: "Kupa kunoita mufaro; kushayiwa kunouya neuchiva",
    body: `In a village lived two men: Murombo, who had little, and Mupfumi, who had much. When a wandering stranger appeared at the village, hungry and thirsty, Mupfumi turned him away — he had fine food and could not waste it on a beggar. Murombo, though he had only a small pot of sadza, invited the stranger in, shared everything he had, and gave the man a place to sleep.

By morning, the stranger was gone. In his place, Murombo found his small hut transformed — a new home, filled grain baskets, and healthy cattle in a kraal outside. The stranger had been a spirit messenger from Mwari.

Mupfumi heard what had happened and set out to find the same stranger. He found him at the crossroads and, having heard the story, feigned welcome — offering food while secretly resenting every mouthful. When he woke the next morning, his cattle were gone, his grain was dust, and his house had crumbled.

This ngano encodes a central Shona value: unhu (humanness) is not about what you own but how you treat others, especially those who have less than you. Generosity to the stranger — who may be a spirit in disguise — is a recurring theme in ngano across southern Africa.`,
  },
  {
    title: "Mwanasikana waShe",
    subtitle: "The Chief's Daughter",
    moral: "True worth is wisdom, not wealth",
    moralShona: "Zvoripo zvechokwadi ndezvenjere, kwete pfuma",
    body: `A great chief had a daughter of extraordinary beauty and wisdom. Men came from every corner of the land with cattle, beads, and gold — each convinced that his wealth would win her hand. But the chief had announced a condition: his daughter would only go to the man who could answer the three riddles she herself would pose.

The wealthy suitors fell one by one. A man who owned a thousand cattle could not answer why the moon rises only at night. A man whose granaries towered could not say what the river tells the stone. They left in embarrassment, their gifts unclaimed.

Then came a young man who owned nothing — no cattle, no beads, no fine cloth. But he had listened. He had listened to elders, to birds, to water. When the chief's daughter posed her riddles, he answered each one — and the court fell silent. He was given her hand.

The ngano teaches that a Shona home is not built with pfuma (wealth) but with njere (wisdom) and hunhu (good character). The chief's daughter is not a prize — she is an evaluator. And she sees what wealth cannot buy: a man who has learned to listen to the world.`,
  },
];

export default function TraditionalStoriesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/folktales"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Folktales Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Traditional Stories
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Ngano dzeKare
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A ngano is not simply a story — it is a living thing. Told around fires in
            the evenings, ngano carry the wisdom of generations in characters every
            Shona child knows by heart: the quick-witted tsuro (hare), the proud
            shumba (lion), the insatiably greedy gava (hyena). The opening words{" "}
            <strong className="text-[var(--color-primary)]">Kare kare...</strong>{" "}
            (Long long ago...) signal that what follows is not just entertainment —
            it is education.
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

        {/* Cultural Note: Opening */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: The Characters of Ngano
          </h3>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Animals in ngano carry fixed personalities that Shona children learn
            early. They are not random — each character embodies a recurring human
            type, making the stories immediately legible to any listener.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { name: "Tsuro (Hare)", role: "The trickster — clever, quick, always outsmarts those bigger than him" },
              { name: "Shumba (Lion)", role: "The powerful king — proud, sometimes foolish, needs wisdom to match his strength" },
              { name: "Gava (Hyena)", role: "The greedy villain — always wants more, always punished for it in the end" },
              { name: "Shiri (Bird)", role: "The wisdom figure — observes, advises, carries messages between worlds" },
              { name: "Murombo (Poor person)", role: "The unlikely hero — generosity and character win where wealth fails" },
              { name: "Chiremba (Clever one)", role: "The one who outsmarts — represents the value of njere (wisdom)" },
            ].map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)]">{c.name}</p>
                <p className="text-sm text-[var(--color-muted)] mt-1 leading-relaxed">
                  {c.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Stories */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Three Classic Ngano
        </h2>
        <div className="flex flex-col gap-8 mb-12">
          {stories.map((story) => (
            <div
              key={story.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  {story.title}
                </h3>
                <p className="text-sm italic text-[var(--color-accent)] mt-0.5">
                  {story.subtitle}
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="text-[var(--color-text)] leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {story.body}
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                    Moral:
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-primary)] sm:ml-2">
                    {story.moral}
                  </span>
                  <span className="text-sm italic text-[var(--color-accent)] sm:ml-1">
                    — {story.moralShona}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Note: Oral Tradition */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: The Living Oral Tradition
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              'Ngano are told in the evenings, around the fire — they are fundamentally oral, not written. The fire (moto) and the night (usiku) are their natural home.',
              'The storyteller uses voice, gesture, and call-and-response. The audience participates — this is not passive listening but collective performance.',
              'The opening phrase "Kare kare..." ("Long long ago...") is a signal. When children hear it, they know to gather, listen, and respond.',
              'Every animal character has a fixed personality children learn early — hearing "tsuro" in a ngano, a Shona child already knows cleverness is coming.',
            ].map((note, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--color-primary)] font-bold shrink-0 mt-0.5">
                  {i + 1}.
                </span>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/folktales"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/folktales/moral-lessons"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Moral Lessons →
          </Link>
        </div>
      </div>
    </div>
  );
}
