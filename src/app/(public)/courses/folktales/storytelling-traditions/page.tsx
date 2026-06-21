import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storytelling Traditions — Tsika dzeKurondedzera Ngano | Duramazwi",
  description:
    "Understand the living performance tradition of Shona storytelling — the call-and-response, the fire, the night, and how ngano are being revived in the digital age.",
};

const vocabulary = [
  {
    shona: "Munyori",
    english: "Storyteller",
    pronunciation: "moo-NYO-ree",
    example: "Munyori akatanga ngano.",
    exampleTranslation: "The storyteller began the folktale.",
  },
  {
    shona: "Nganonyiwe!",
    english: "May a story be told! (call-and-response)",
    pronunciation: "n-gah-no-NYEE-weh",
    example: "Munyori: Nganonyiwe! Vana: Nganonyiwe!",
    exampleTranslation: "Storyteller: May a story be told! Children: May it be told!",
  },
  {
    shona: "Kuteerera",
    english: "To listen",
    pronunciation: "koo-teh-eh-REH-rah",
    example: "Vana vakateerera ngano.",
    exampleTranslation: "The children listened to the story.",
  },
  {
    shona: "Kupindura",
    english: "To respond (audience participates)",
    pronunciation: "koo-peen-DOO-rah",
    example: "Vana vakupindura munyori.",
    exampleTranslation: "The children responded to the storyteller.",
  },
  {
    shona: "Mutambo",
    english: "Performance / Play",
    pronunciation: "moo-TAM-bo",
    example: "Ngano isati yaita mutambo chaiwo.",
    exampleTranslation: "A folktale that has not become a full performance.",
  },
  {
    shona: "Usiku",
    english: "Night (traditional time for stories)",
    pronunciation: "oo-SEE-koo",
    example: "Ngano dzinotaurwa usiku.",
    exampleTranslation: "Folktales are told at night.",
  },
  {
    shona: "Moto",
    english: "Fire (the storytelling setting)",
    pronunciation: "MOH-to",
    example: "Vana vakagara pamota.",
    exampleTranslation: "The children sat around the fire.",
  },
  {
    shona: "Vana",
    english: "Children (primary audience)",
    pronunciation: "VAH-nah",
    example: "Vana vaida kuteerera ngano.",
    exampleTranslation: "The children wanted to hear the stories.",
  },
];

const traditions = [
  {
    title: "The Call-and-Response Opening",
    body: `Every ngano begins with a ritual exchange that formally marks the transition into story-time. The storyteller calls out — "Nganonyiwe!" — and the gathered audience responds in kind. This is not a formality. It is the moment the everyday world is set aside and the world of ngano is entered together.

Different communities across Shona-speaking Zimbabwe use slight variations — some use "Ngano! / Ngano!" — but the structural logic is the same: no story begins until the audience has confirmed they are ready to receive it. The storyteller cannot simply start. The community must open the door.

This call-and-response echoes throughout the ngano itself. At pivotal moments, the storyteller pauses for affirmation, asks questions, or invites the audience to complete a line. The boundary between teller and listener is deliberately thin.`,
  },
  {
    title: "Fire, Night, and the Setting",
    body: `Ngano are not told at midday. They belong to the evening and the night — to the time after the work of the day is done and the household has gathered. The fire (moto) is the centre: its light draws the circle, its warmth holds the group together, and its crackling fills the silences between words.

There is practical wisdom in this. Darkness reduces distraction. The firelight makes the storyteller's face vivid and their gestures dramatic. Children pressed together in a circle are already in the right state — slightly awed, close to sleep, the day's noise settling — to receive stories deeply.

But the setting also has spiritual significance. Night is when the boundary between the world of the living and the world of the ancestors is thinnest. Telling stories of the ancestors, of Mwari, of consequence and reward — in this liminal space — gives the ngano a weight that daylight would diminish.`,
  },
  {
    title: "Voice, Gesture, and Performance",
    body: `A skilled munyori (storyteller) is a performer in the full sense. They shift their voice for different characters — Tsuro speaks quickly and with a certain lightness; Shumba speaks slowly and with weight; Gava is greedy-sounding even in a single word. Gesture amplifies what voice alone cannot carry.

The storyteller is never stationary. They crouch when Tsuro hides, they swell when Shumba roars, they pull their shoulders in when Murombo is hungry and cold. The body tells the story alongside the words, and in this way children understand even before they fully understand the language.

This performative dimension is why ngano cannot be fully captured in writing. The text of a ngano is like sheet music without a musician — it holds the notes but not the life. The tradition lives in performance, in the specific voice of the specific grandmother, in the particular fire of the particular evening.`,
  },
  {
    title: "The Storyteller's Status",
    body: `The ability to tell ngano well is a recognised skill in Shona culture. Storytellers are respected — not because they are exceptional entertainers, but because they are custodians of the community's wisdom. A munyori who can hold an audience, shape characters, and deliver the pfundo (moral lesson) with force is performing a social function as important as any elder speaking at a dare (council).

Traditionally, the primary storytellers were grandmothers (ambuya). The relationship between ambuya and muzukuru (grandchild) is structurally relaxed and close — grandchildren can ask freely, joke, and press for stories in ways they could not with parents. This made grandmothers the natural home of the oral tradition.

But storytelling was never the exclusive domain of women or the old. Any elder who had the gift could tell ngano. And any child who learned the stories well was already beginning the process of becoming the next keeper of them.`,
  },
  {
    title: "Ngano in the Modern World",
    body: `The tradition of ngano telling around a fire is under pressure. Television, phones, and the physical dispersal of families — many now living in cities far from their rural homes — have reduced the natural occasions for storytelling. The evening gathering around the fire is less common than it was a generation ago.

But the tradition is not dying quietly. Teachers in Zimbabwe use ngano in classrooms. Cultural organisations collect and record them. Shona radio and television programmes include dramatised ngano. YouTube and podcast platforms now carry recorded ngano in Shona — bringing the oral tradition into a new medium while trying to preserve its spirit.

The challenge is that much of what makes ngano alive — the voice, the fire, the particular face of an ambuya who has told this story forty times — cannot be recorded. What is preserved is the skeleton. The hope is that enough families, enough schools, and enough individuals will use those recordings as seeds to grow the tradition again in their own performance.`,
  },
];

export default function StorytellingTraditionsPage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Storytelling Traditions
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Tsika dzeKurondedzera Ngano
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            A ngano exists only in performance. It is not a text — it is an event.
            Fire, night, a skilled{" "}
            <strong className="text-[var(--color-primary)]">munyori</strong>{" "}
            (storyteller), and an audience that participates through call-and-response
            — these are not decorations around the story. They are the story. This
            module explores the traditions, structures, and cultural weight of
            Shona storytelling as a living practice.
          </p>
        </div>

        {/* Call-and-response highlight */}
        <div className="rounded-2xl border-2 border-[var(--color-primary)] bg-[var(--color-surface)] p-6 mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-4">
            The Traditional Opening
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div>
              <p className="text-2xl font-bold text-[var(--color-primary)]">
                Nganonyiwe!
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                Storyteller calls: "May a story be told!"
              </p>
            </div>
            <div className="text-[var(--color-muted)] text-xl hidden sm:block">↔</div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-accent)]">
                Nganonyiwe!
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                Audience responds: "May it be told!"
              </p>
            </div>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-5 max-w-xl mx-auto">
            Only after this exchange does the ngano begin. The audience must open
            the door — the storyteller cannot enter alone.
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

        {/* Traditions */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          The Tradition in Depth
        </h2>
        <div className="flex flex-col gap-6 mb-12">
          {traditions.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {section.title}
                </h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: What Makes Ngano Alive
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "The call-and-response opening is the community's consent. The audience does not simply receive the story — they invite it into being.",
              "Stories can last hours. They are episodic, digressive, and responsive to the audience. A skilled munyori will extend or shorten based on how the audience is responding.",
              "The tradition is under pressure from television and phones but is actively being revived through schools, cultural organisations, and online recordings.",
              "Recorded ngano in Shona are now available online — a bridge between tradition and modernity. The voice of an ambuya from Gutu can now be heard in a diaspora living room in London.",
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
            href="/courses/folktales/moral-lessons"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Moral Lessons
          </Link>
          <Link
            href="/courses/folktales/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Folktales Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
