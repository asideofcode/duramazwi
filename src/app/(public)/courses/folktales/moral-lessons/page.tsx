import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moral Lessons in Ngano | Duramazwi",
  description:
    "Discover the six core moral values encoded in Shona folktales — generosity, wisdom, respect, patience, and community — and the stories that carry them.",
};

const vocabulary = [
  {
    shona: "Pfundo",
    english: "Lesson / Moral",
    pronunciation: "PFUN-do",
    example: "Pfundo yengano iyi ndeye kuapa.",
    exampleTranslation: "The moral of this story is about giving.",
  },
  {
    shona: "Mwana akadzidziswa",
    english: "Child was taught",
    pronunciation: "mwah-nah ah-kah-dzee-DZEE-swah",
    example: "Mwana akadzidziswa nengano.",
    exampleTranslation: "The child was taught through a folktale.",
  },
  {
    shona: "Chitsikedu",
    english: "Punishment (received by the villain)",
    pronunciation: "chee-tsee-KAY-doo",
    example: "Gava rakagamuchira chitsikedu.",
    exampleTranslation: "The hyena received its punishment.",
  },
  {
    shona: "Mufaro",
    english: "Reward (received by the virtuous)",
    pronunciation: "moo-FAH-ro",
    example: "Murombo wakagamuchira mufaro.",
    exampleTranslation: "The poor person received the reward.",
  },
  {
    shona: "Zivo",
    english: "Wisdom / Knowledge",
    pronunciation: "ZEE-vo",
    example: "Zivo inobva kumadzisekuru.",
    exampleTranslation: "Wisdom comes from the grandparents.",
  },
  {
    shona: "Hunhu",
    english: "Character / Humanness",
    pronunciation: "HOO-nhoo",
    example: "Hunhu hunonyanyisa pfuma.",
    exampleTranslation: "Character is more important than wealth.",
  },
  {
    shona: "Kushinga",
    english: "Courage / Endurance",
    pronunciation: "koo-SHEEN-gah",
    example: "Kushinga kunobatsira mumiedzo.",
    exampleTranslation: "Endurance helps in times of trial.",
  },
];

const moralThemes = [
  {
    number: "1",
    theme: "Generosity Is Rewarded",
    shona: "Kupa kunoita mufaro",
    description:
      "The generous character — usually the poorest — shares what little they have with a stranger, an elder, or a spirit in disguise. The reward is always proportional to the generosity, and always transformative.",
    example:
      "In the ngano of Murombo naMupfumi, the poor man shares his last pot of sadza with a wandering stranger who turns out to be a messenger of Mwari. By morning, his hut is transformed into a home, his bare yard filled with cattle. The wealthy man who turned the stranger away wakes to ruin.",
    lesson:
      "Shona hospitality (unyo) is not politeness — it is a moral obligation. To turn away a stranger is to risk turning away the ancestors themselves.",
  },
  {
    number: "2",
    theme: "Greed Destroys",
    shona: "Kushayiwa kunouya neuchiva",
    description:
      "The greedy character — often Gava the hyena — cannot stop wanting more. Even after receiving a fair share, they scheme for greater portions. The ngano always ends with their total loss.",
    example:
      "Gava hears of the magical well Tsuro described. Instead of caution, he thinks only of the power waiting below. He lowers himself in greedily — and is left there while Tsuro collects the grain. Gava's greed trapped him more effectively than any hunter could.",
    lesson:
      "Uchiva (greed) is painted as its own punishment in ngano. The greedy character does not just fail to gain more — they lose what they already had. The audience, especially children, internalises this early.",
  },
  {
    number: "3",
    theme: "Cleverness Beats Strength",
    shona: "Njere dzinokunda simba",
    description:
      "Tsuro the hare is physically the weakest creature in almost every ngano. Yet Tsuro wins — not through luck, but through careful thinking, observation, and using the larger animal's own traits against them.",
    example:
      "Tsuro outsmarts Shumba by pretending to hold up a cliff face. He tells the lion the cliff will collapse without support. When Shumba takes over the task — 'just for a moment' while Tsuro fetches food — Tsuro is gone, and Shumba leans against a perfectly stable rock for hours.",
    lesson:
      "Shona culture values njere (cleverness, wisdom) as the highest practical virtue. A person who uses their mind well will always outlast the person who relies on force alone.",
  },
  {
    number: "4",
    theme: "Respect for Elders",
    shona: "Kukudza vakuru",
    description:
      "In ngano, characters who disrespect elders — ignoring advice, speaking back, refusing to greet properly — inevitably come to harm. Those who honour elders receive guidance, protection, and ultimately succeed.",
    example:
      "A young man sets out on a journey and at the crossroads meets a frail old woman. His companion mocks her and walks past. The young man stops, greets her properly, and helps her with her burden. She turns out to be the spirit guardian of the path — she warns him of danger ahead; his companion walks into it.",
    lesson:
      "Vakuru (elders) in Shona culture are bridges to the ancestors. Their experience is not just personal — it is communal memory. To disrespect an elder is to sever a thread connecting the living to the wisdom of the dead.",
  },
  {
    number: "5",
    theme: "Community Matters",
    shona: "Munhu munhu navanhu",
    description:
      "The character who isolates themselves, who refuses to participate in communal work, who hoards resources for themselves alone, always suffers in ngano. Those who contribute to the community are protected by it.",
    example:
      "A woman refuses to join her village's nhimbe (communal work party), saying she has enough grain. The rains fail that year. Every household that shared the harvest with neighbours receives help in return; the woman who refused shares in nothing and starves.",
    lesson:
      'The Shona proverb "Munhu munhu navanhu" — a person is a person through other people — is not just a phrase. It is the root logic of community-themed ngano. No one survives alone.',
  },
  {
    number: "6",
    theme: "Patience and Endurance",
    shona: "Kushinga kunopa mufaro",
    description:
      "The hero of a ngano rarely succeeds immediately. They endure trials, setbacks, and injustice — sometimes for a very long time — before the turning point comes. Impatience and shortcuts are always punished.",
    example:
      "A poor girl is sent as a servant to a harsh household far from her village. She works without complaint for years while her mistress treats her cruelly. When the household falls on disaster, it is the patient girl — who never lost her hunhu — who is revealed to have been watched over by the family's ancestral spirits. She returns home wealthy.",
    lesson:
      "Kushinga (endurance, patience under pressure) is a core Shona value. The ngano teaches children that suffering does not mean abandonment — that character maintained through difficulty is always seen, always remembered, always rewarded.",
  },
];

export default function MoralLessonsPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Moral Lessons in Ngano
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Pfundo dzeMangano
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Ngano are not entertainment — they are education. Every story carries a{" "}
            <strong className="text-[var(--color-primary)]">pfundo</strong> (lesson)
            that elders transmit to children through the pleasure of a story well told.
            After each ngano, the storyteller asks:{" "}
            <em className="text-[var(--color-accent)]">
              &quot;Chii chawakadzidza?&quot;
            </em>{" "}
            — What did you learn? The villain is always punished. The virtuous
            are always rewarded. Ngano are fundamentally moral stories — they do
            not trade in ambiguity.
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

        {/* Moral Themes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Six Core Moral Themes
        </h2>
        <div className="flex flex-col gap-6 mb-12">
          {moralThemes.map((theme) => (
            <div
              key={theme.number}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)] flex items-center gap-4">
                <span className="text-2xl font-bold text-[var(--color-primary)] w-8 shrink-0">
                  {theme.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    {theme.theme}
                  </h3>
                  <p className="text-sm italic text-[var(--color-accent)]">
                    {theme.shona}
                  </p>
                </div>
              </div>
              <div className="px-6 py-5 flex flex-col gap-4">
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {theme.description}
                </p>
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">
                    Example story
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed italic">
                    {theme.example}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--color-primary)] font-bold text-sm shrink-0 mt-0.5">
                    ↳
                  </span>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {theme.lesson}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: How Ngano Teach
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              'Ngano are a primary tool for moral formation in children. They are not supplementary — they are the curriculum.',
              'After a story ends, elders ask "Chii chawakadzidza?" (What did you learn?). The question is not rhetorical — children are expected to articulate the pfundo.',
              'The villain is always punished. Unlike Western fairy tales that sometimes allow ambiguity, ngano are morally clear — they are designed to produce a specific lesson in the listener.',
              "Children learn which character they are supposed to identify with — always the murombo, the patient one, the clever one — never the greedy or disrespectful character.",
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
            href="/courses/folktales/traditional-stories"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Traditional Stories
          </Link>
          <Link
            href="/courses/folktales/storytelling-traditions"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Storytelling Traditions →
          </Link>
        </div>
      </div>
    </div>
  );
}
