import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Songs — Nziyo dzeShona | Duramazwi",
  description:
    "Explore the rich tradition of Shona songs — work songs, lullabies, wedding songs, funeral songs, and ceremony songs — and the vocabulary of Shona musical culture.",
};

const vocabulary = [
  {
    shona: "Nziyo",
    english: "Song",
    pronunciation: "N-ZEE-yo",
    example: "Nziyo iyi inonakidza.",
    exampleTranslation: "This song is beautiful.",
  },
  {
    shona: "Kuimba",
    english: "To sing",
    pronunciation: "koo-EEM-bah",
    example: "Vana vanofarira kuimba.",
    exampleTranslation: "Children love to sing.",
  },
  {
    shona: "Mhururu",
    english: "Ululation — women's cry of celebration",
    pronunciation: "m-HOO-roo-roo",
    example: "Vakadzi vakaita mhururu.",
    exampleTranslation: "The women ululated.",
  },
  {
    shona: "Kurumbidza",
    english: "To praise / to sing praises",
    pronunciation: "koo-room-BEE-dzah",
    example: "Vakarumbidza mambo.",
    exampleTranslation: "They sang praises to the chief.",
  },
  {
    shona: "Nhetembo",
    english: "Poetry / Praise poetry",
    pronunciation: "n-heh-TEM-bo",
    example: "Nhetembo inorumbidzwa kumabiko.",
    exampleTranslation: "Praise poetry is recited at celebrations.",
  },
  {
    shona: "Rwiyo",
    english: "Tune / Melody",
    pronunciation: "RWEE-yo",
    example: "Rwiyo iri rinofadza.",
    exampleTranslation: "This melody is pleasing.",
  },
  {
    shona: "Koimba pamwe",
    english: "To sing together / in chorus",
    pronunciation: "ko-EEM-bah PAM-weh",
    example: "Vose vakaimba pamwe.",
    exampleTranslation: "Everyone sang together.",
  },
  {
    shona: "Nziyo dzechivanhu",
    english: "Traditional songs",
    pronunciation: "N-ZEE-yo dzeh-chee-VAH-nhoo",
    example: "Nziyo dzechivanhu dzinodzidzisa.",
    exampleTranslation: "Traditional songs teach.",
  },
  {
    shona: "Nziyo dzekuchurch",
    english: "Church songs",
    pronunciation: "N-ZEE-yo dzeh-koo-CHARCH",
    example: "Nziyo dzekuchurch dzinoimba nekuda kwaMwari.",
    exampleTranslation: "Church songs are sung in praise of God.",
  },
];

const songContexts = [
  {
    context: "Work Songs",
    shona: "Nziyo dzeBasa",
    description:
      "Sung while farming, grinding grain, building, or any sustained communal labour. Work songs set the rhythm of the task — the tempo of the song is the tempo of the work.",
    examples:
      "Grinding songs (nziyo dzekunotsva) coordinate the push-pull rhythm of two women grinding together at the duri (grinding stone). Planting songs mark the seasonal cycle and invite the soil to receive the seed.",
    significance:
      "Work songs transform labour from burden into community. The singing makes the work collective even when the workers are scattered across a field.",
  },
  {
    context: "Lullabies",
    shona: "Nziyo dzekuradzika Mwana",
    description:
      "Sung by mothers, grandmothers, and older siblings to soothe infants and small children to sleep. Lullabies often contain the child's name, praise for the child's family, and wishes for the child's future.",
    examples:
      "A typical lullaby will address the sleeping child directly, promising protection from night spirits and describing the warmth and safety of the home. Many include the child's mutupo (totem) — sung from infancy, the totem becomes inseparable from identity.",
    significance:
      "Lullabies are the first musical education. Before a child understands language, they are already absorbing the sounds, rhythms, and emotional texture of Shona music.",
  },
  {
    context: "Wedding Songs",
    shona: "Nziyo dzeRoora",
    description:
      "Sung at every stage of the wedding process — when the bride is prepared, when she departs her father's home, when she arrives at her husband's family, and through the celebrations.",
    examples:
      "Women sing farewell songs to the bride as she leaves her family home — acknowledging the weight of the transition and wishing her well. The groom's family sings welcome songs. Mhururu (ululation) punctuates every moment of peak joy.",
    significance:
      "Wedding songs narrate the transition the bride is making. They honour both families, embed the new couple in their community, and mark the occasion as one of the most significant in life.",
  },
  {
    context: "Funeral Songs",
    shona: "Nziyo dzematema",
    description:
      "Sung at death vigils (masvondo) and at the kurova guva (grave-striking) ceremony that formally concludes mourning and welcomes the spirit of the deceased back to the family.",
    examples:
      "Mourning songs at a death vigil are often sung through the night. They name the deceased, recall their virtues, and affirm that they are now joining the ancestors. Kurova guva songs are less mournful — they celebrate the spirit's return.",
    significance:
      "Funeral songs manage grief while simultaneously maintaining the theological framework of Shona belief — that death is not an end but a transition to ancestorhood.",
  },
  {
    context: "Ceremony Songs",
    shona: "Nziyo dzeBira",
    description:
      "Sung specifically at the bira ceremony — the night-long event in which mbira music is played to call the ancestors (vadzimu) into the present to be consulted, thanked, or appeased.",
    examples:
      "Bira songs have specific mbira pieces associated with specific ancestral spirits. A spirit medium (svikiro) will begin to be possessed as the right song is played — the music is the mechanism of contact.",
    significance:
      "Ceremony songs are not entertainment — they are technology. They are the tools by which the living community reaches across the boundary of death to maintain relationship with the ancestors.",
  },
  {
    context: "Children's Songs",
    shona: "Nziyo dzevana",
    description:
      "Sung in play, in games, and in school. Children's songs teach vocabulary, social rules, counting, and physical coordination — often with accompanying clapping, jumping, or movement.",
    examples:
      "Circle games with call-and-response songs teach children the structure of communal participation. Counting songs use the music to make numbers memorable. Songs about animals introduce the natural world through the pleasures of rhythm and melody.",
    significance:
      "Children's songs are the first curriculum — they encode language, rhythm, and social participation before formal education begins.",
  },
];

export default function SongsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/music"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Music Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Shona Songs
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Nziyo dzeShona
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, there is a song for every moment that matters.
            Births, deaths, weddings, harvests, work, sleep, and worship — each
            has its own musical tradition, its own vocabulary, its own emotional
            register. The Shona people sing together not because life is always
            easy, but because singing is how the community holds its moments
            together. The{" "}
            <strong className="text-[var(--color-primary)]">mhururu</strong>{" "}
            (ululation) of women marks the peak of joy. The call-and-response
            structure of almost every Shona song keeps the boundary between singer
            and listener thin.
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

        {/* Song Contexts */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Songs for Every Occasion
        </h2>
        <div className="flex flex-col gap-6 mb-12">
          {songContexts.map((ctx) => (
            <div
              key={ctx.context}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {ctx.context}
                </h3>
                <p className="text-sm italic text-[var(--color-accent)] mt-0.5">
                  {ctx.shona}
                </p>
              </div>
              <div className="px-6 py-5 flex flex-col gap-4">
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {ctx.description}
                </p>
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">
                    Examples
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed italic">
                    {ctx.examples}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--color-primary)] font-bold text-sm shrink-0 mt-0.5">
                    ↳
                  </span>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {ctx.significance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: Music at Every Life Stage
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Every major life event has its own song tradition — Shona people sing at births, deaths, weddings, harvests, and in collective work. Song is not entertainment added to life; it is the structure of life.",
              "Women's ululation (mhururu) marks moments of peak joy — a wedding departure, a guest of honour arriving, a child's naming ceremony. It signals: something wonderful is happening.",
              "Call-and-response is the dominant song structure. A leader sings, the group responds. This keeps music participatory — it cannot be consumed passively in the way a recording can.",
              "Modern Shona music (sungura, jit, mbira jazz) blends traditional elements with contemporary sounds. Sungura's fast guitar patterns echo the interlocking rhythms of traditional mbira. The tradition lives in the modern.",
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
            href="/courses/music/instruments"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Traditional Instruments
          </Link>
          <Link
            href="/courses/music/dance"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Dance Styles →
          </Link>
        </div>
      </div>
    </div>
  );
}
