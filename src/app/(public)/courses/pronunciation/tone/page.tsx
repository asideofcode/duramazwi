import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tone & Emphasis in Shona | Duramazwi",
  description:
    "Learn how Shona uses High and Low tones to distinguish meaning — and the best strategies for a learner to start hearing tone.",
};

const toneExamples = [
  {
    word: "kupinda",
    meaning: "to enter",
    tone: "ku-PIN-da (H on 'pin')",
    context: "Kupinda mumba — to enter the house",
  },
  {
    word: "kupinduka",
    meaning: "to turn around / to change",
    tone: "ku-pin-DU-ka (H on 'du')",
    context: "Kupinduka nzira — to turn on the road",
  },
  {
    word: "kupfura",
    meaning: "to pass by / exceed",
    tone: "ku-PFU-ra (H on 'pfu')",
    context: "Akapfura pano — he passed by here",
  },
  {
    word: "kurumwa",
    meaning: "to be bitten",
    tone: "ku-RUM-wa (H on 'rum')",
    context: "Kurumwa nemhuka — to be bitten by an animal",
  },
  {
    word: "kuzvarwa",
    meaning: "to be born",
    tone: "ku-ZVAR-wa (H on 'zvar')",
    context: "Kuzvarwa muZimbabwe — to be born in Zimbabwe",
  },
  {
    word: "kufa",
    meaning: "to die",
    tone: "ku-FA (H on 'fa')",
    context: "Kufa ndiko kufamba kwenguva — death is the passing of time",
  },
  {
    word: "kuona",
    meaning: "to see",
    tone: "ku-O-na (H on 'o')",
    context: "Kuona nyika — to see the country",
  },
  {
    word: "kutenda",
    meaning: "to thank / to believe",
    tone: "ku-TEN-da (H on 'ten')",
    context: "Kutenda Mwari — to thank God / to believe in God",
  },
];

const toneMinimalPairs = [
  {
    word1: "bábá (High-High)",
    meaning1: "they cut (verb)",
    word2: "bàbà (Low-Low)",
    meaning2: "father (noun)",
    note: "Context almost always resolves ambiguity — but this illustrates why tone matters.",
  },
  {
    word1: "kúkátá (H-H-L)",
    meaning1: "to cut (active)",
    word2: "kùkàtà (L-L-L)",
    meaning2: "to cut (another sense / dialectal)",
    note: "Tone shifts can indicate grammatical function — tense, aspect, and voice.",
  },
  {
    word1: "tétá",
    meaning1: "to shave",
    word2: "tètà",
    meaning2: "to limp (dialectal)",
    note: "Same consonants and vowels — different pitch pattern = different word.",
  },
];

const vocabulary = [
  {
    shona: "Kupinda",
    english: "To enter",
    pronunciation: "koo-PEEN-dah",
    example: "Kupinda mumba.",
    exampleTranslation: "To enter the house.",
  },
  {
    shona: "Kupinduka",
    english: "To turn around / change",
    pronunciation: "koo-peen-DOO-kah",
    example: "Akapinduka.",
    exampleTranslation: "He/she turned around.",
  },
  {
    shona: "Kupfura",
    english: "To pass by / to exceed",
    pronunciation: "koo-PFOO-rah",
    example: "Akapfura pano.",
    exampleTranslation: "He/she passed by here.",
  },
  {
    shona: "Kurumwa",
    english: "To be bitten",
    pronunciation: "koo-ROOM-wah",
    example: "Akurumwa.",
    exampleTranslation: "He/she is being bitten.",
  },
  {
    shona: "Kuzvarwa",
    english: "To be born",
    pronunciation: "koo-ZVAR-wah",
    example: "Ndakazvarwa Harare.",
    exampleTranslation: "I was born in Harare.",
  },
  {
    shona: "Kufa",
    english: "To die",
    pronunciation: "koo-FAH",
    example: "Kufa hakuperi.",
    exampleTranslation: "Death does not end (proverb).",
  },
  {
    shona: "Kuona",
    english: "To see",
    pronunciation: "koo-OH-nah",
    example: "Ndinoona nyika.",
    exampleTranslation: "I see the land/country.",
  },
  {
    shona: "Kutenda",
    english: "To thank / to believe",
    pronunciation: "koo-TEH-ndah",
    example: "Ndinotenda.",
    exampleTranslation: "I am thankful / I believe.",
  },
];

export default function TonePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/pronunciation"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Pronunciation Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Tone &amp; Emphasis
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mhepo yeMazwi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona is a tonal language — it uses two main tones, <strong>High (H)</strong> and{" "}
            <strong>Low (L)</strong>, to distinguish between different words
            and grammatical forms. The same consonants and vowels in a
            different pitch pattern can mean something entirely different.
            As a learner, tone can feel daunting — but context resolves
            most ambiguity, and listening is your best teacher.
          </p>
        </div>

        {/* Tone system explanation */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          High and Low Tones
        </h2>
        <div className="grid gap-4 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
            <p className="text-3xl font-bold text-[var(--color-primary)] mb-2">
              á — High (H)
            </p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              A raised pitch on the syllable. In formal written Shona,
              marked with an acute accent (á). High tones often fall on the
              root syllable of a verb or the penultimate syllable of a word.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
            <p className="text-3xl font-bold text-[var(--color-accent)] mb-2">
              à — Low (L)
            </p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              A lower, unmarked pitch. In everyday writing, Low tone is
              usually unmarked. In academic or linguistic writing, a grave
              accent (à) may be used. Most syllables in speech are at Low
              tone.
            </p>
          </div>
        </div>

        {/* Minimal pairs */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Tone Minimal Pairs
        </h2>
        <div className="space-y-4 mb-12">
          {toneMinimalPairs.map((pair) => (
            <div
              key={pair.word1}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="rounded-xl bg-[var(--color-surface)] px-4 py-3">
                  <p className="font-bold text-[var(--color-primary)] text-lg">
                    {pair.word1}
                  </p>
                  <p className="text-sm text-[var(--color-text)]">{pair.meaning1}</p>
                </div>
                <div className="rounded-xl bg-[var(--color-surface)] px-4 py-3">
                  <p className="font-bold text-[var(--color-accent)] text-lg">
                    {pair.word2}
                  </p>
                  <p className="text-sm text-[var(--color-text)]">{pair.meaning2}</p>
                </div>
              </div>
              <p className="text-xs text-[var(--color-muted)] italic">{pair.note}</p>
            </div>
          ))}
        </div>

        {/* Vocabulary Table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Vocabulary — Verbs with Tone Notes
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

        {/* Tone in context table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Tone Patterns in Common Verbs
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Verb</th>
                <th className="px-4 py-3 font-semibold">Meaning</th>
                <th className="px-4 py-3 font-semibold">Tone pattern</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Context</th>
              </tr>
            </thead>
            <tbody>
              {toneExamples.map((ex, i) => (
                <tr
                  key={ex.word}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {ex.word}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {ex.meaning}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] font-mono text-xs">
                    {ex.tone}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] hidden md:table-cell text-xs italic">
                    {ex.context}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Native speakers hear tone intuitively
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                No Shona speaker is thinking about tone consciously — they
                produce and perceive it automatically. As a learner, trying to
                consciously apply tone rules during conversation is
                counterproductive at first. Let it develop through exposure.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. Context resolves most ambiguity
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                The minimal pairs that look alarming in a grammar book are
                rarely confusing in real conversation. The sentence structure,
                topic, and context make the intended meaning clear almost
                all the time — even with imperfect tone production.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Shona music is the best tone teacher
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Listening to Shona music — mbira (thumb piano) songs,
                sungura (guitar-based pop), or gospel — trains your ear to
                the natural rise and fall of the language more effectively
                than any rule chart. Sungura artists in particular sing very
                clearly in standard Shona.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Tone marks are rare in everyday writing
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                In everyday Shona text — social media, newspapers, WhatsApp —
                tone marks are almost never written. They appear mainly in
                academic linguistic work and formal language learning
                materials. You will read and write Shona without them in
                daily life.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/pronunciation/spelling-patterns"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Spelling Patterns
          </Link>
          <Link
            href="/courses/pronunciation/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Practice: Pronunciation Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
