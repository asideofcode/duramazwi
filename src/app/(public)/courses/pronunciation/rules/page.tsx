import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Pronunciation Rules | Duramazwi",
  description:
    "Master the eight core Shona pronunciation rules — from rolled r to bilabial bv, and why every syllable ends in a vowel.",
};

const rules = [
  {
    number: "1",
    rule: "Every letter is always pronounced",
    detail:
      "There are no silent letters in Shona. If it is written, it is said. This applies to every consonant cluster, every final vowel, and every nasal.",
    example: "mhuka → m-h-u-k-a (all five sounds pronounced)",
    exampleNote: "Not 'myuka' or 'huka' — every part counts",
  },
  {
    number: "2",
    rule: "Vowels are always short and clear",
    detail:
      "Unlike English where vowels shift (e.g. 'a' in cat vs cake), Shona vowels are fixed: a=ah, e=eh, i=ee, o=oh, u=oo. They never blend or become schwa.",
    example: "baba → BAH-bah (not 'BAY-ba' or 'buh-buh')",
    exampleNote: "Both 'a' sounds are identical: open, short, ah",
  },
  {
    number: "3",
    rule: "The 'r' is a rolled or tapped 'r'",
    detail:
      "Shona 'r' is not the English 'r'. It is a quick tap of the tongue against the roof of the mouth — similar to Spanish or Italian. Think of 'r' in 'better' said with an American accent, but more deliberate.",
    example: "rwizi → RWEE-zee (tapped r, not English r)",
    exampleNote: "The tongue tip briefly touches the alveolar ridge",
  },
  {
    number: "4",
    rule: "'v' and 'bv' are bilabial — both lips",
    detail:
      "Shona 'v' is produced with both lips vibrating, not teeth and lip like English 'v'. The cluster 'bv' starts with the lips closed (b) and opens with the bilabial fricative (v).",
    example: "mvura → MVOO-rah (lips together, not teeth-to-lip)",
    exampleNote: "Practice: hold your lips together lightly and say 'v'",
  },
  {
    number: "5",
    rule: "'zh' sounds like French 'j'",
    detail:
      "The 'zh' sound (less common in standard Shona but found in some dialects and loanwords) is the voiced palatal fricative — like the 's' in English 'measure' or the French 'j' in 'je'.",
    example: "Like the 's' in 'treasure' or the 'j' in French 'jour'",
    exampleNote: "A voiced buzzing sound in the middle of the mouth",
  },
  {
    number: "6",
    rule: "'dz' sounds like the 'ds' in 'kids'",
    detail:
      "The 'dz' cluster is a voiced affricate — it starts with the tongue in the 'd' position and releases with a 'z' buzz. It is not 'j', not 'z' — it is a quick 'd' + 'z' run together.",
    example: "dziva → DZEE-vah (not 'zeeva' or 'jiva')",
    exampleNote: "Say 'kids' quickly — the 'ds' is your 'dz'",
  },
  {
    number: "7",
    rule: "'sv' is said quickly — no vowel between the consonants",
    detail:
      "The 'sv' cluster is a voiceless bilabial fricative followed by the 'v' sound. No vowel separates them — this is a single consonant unit. Similarly 'zv' is its voiced equivalent.",
    example: "svondo → SVOH-ndoh (sv is one unit, not 'si-vondo')",
    exampleNote: "Also applies to zvimwe → ZVEEM-weh",
  },
  {
    number: "8",
    rule: "Syllables are usually open (end in a vowel)",
    detail:
      "Most Shona syllables end in a vowel — this gives the language its flowing, rhythmic quality. Words that appear to end in a consonant to English speakers often don't — the final vowel is just short and clear.",
    example: "ku-ri-ma = three open syllables: koo-ree-mah",
    exampleNote: "Each syllable ends cleanly on its vowel",
  },
];

const vocabulary = [
  {
    shona: "Ndimi",
    english: "Language / languages",
    pronunciation: "NDEE-mee",
    example: "Ndimi yeShona.",
    exampleTranslation: "The Shona language.",
  },
  {
    shona: "Kutaura",
    english: "To speak",
    pronunciation: "koo-TAH-oo-rah",
    example: "Kutaura chiShona.",
    exampleTranslation: "To speak Shona.",
  },
  {
    shona: "Kushevedza",
    english: "To call out",
    pronunciation: "koo-sheh-VEH-dzah",
    example: "Anokushevedza.",
    exampleTranslation: "He is calling you out.",
  },
  {
    shona: "Kuridza",
    english: "To play (an instrument) / to sound",
    pronunciation: "koo-REE-dzah",
    example: "Kuridza ngoma.",
    exampleTranslation: "To play / beat the drum.",
  },
  {
    shona: "Muridzo",
    english: "A sound / a note",
    pronunciation: "moo-REE-dzoh",
    example: "Muridzo wakanaka.",
    exampleTranslation: "A good sound.",
  },
  {
    shona: "Mazwi",
    english: "Words",
    pronunciation: "MAH-zwee",
    example: "Mazwi ake akanaka.",
    exampleTranslation: "His/her words are good.",
  },
  {
    shona: "Mhinduro",
    english: "Answer / response",
    pronunciation: "MHEEN-doo-roh",
    example: "Ndipe mhinduro.",
    exampleTranslation: "Give me the answer.",
  },
  {
    shona: "Mubvunzo",
    english: "Question",
    pronunciation: "moob-VOON-zoh",
    example: "Ndinomubvunza mubvunzo.",
    exampleTranslation: "I am asking him a question.",
  },
];

export default function RulesPage() {
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
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Pronunciation Rules
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mitemo yeKutaura
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona pronunciation is highly regular — once you learn these eight
            rules, almost any Shona word can be sounded out correctly. The
            biggest adjustments for English speakers are the bilabial consonants
            (bv, mv), the tapped r, and the consonant clusters that have no
            vowel between them. Practice them slowly, then speed up.
          </p>
        </div>

        {/* Rules */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Eight Core Rules
        </h2>
        <div className="space-y-4 mb-12">
          {rules.map((rule) => (
            <div
              key={rule.number}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {rule.number}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[var(--color-text)] mb-2">
                    {rule.rule}
                  </p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                    {rule.detail}
                  </p>
                  <div className="rounded-xl bg-[var(--color-surface)] px-4 py-3">
                    <p className="text-sm font-semibold text-[var(--color-primary)]">
                      {rule.example}
                    </p>
                    <p className="text-xs text-[var(--color-muted)] mt-0.5">
                      {rule.exampleNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Mispronunciation can change meaning
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Getting vowels or consonants wrong in Shona can produce a
                different word entirely — or something embarrassing. Early
                correction is considered kind, not rude. A Shona speaker who
                corrects your pronunciation is doing you a favour.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. Children are corrected early
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Clear pronunciation is valued and taught from childhood.
                Shona parents and grandparents correct children gently but
                consistently — the idea that&quot;close enough&quot;is fine does
                not apply. Precision matters.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Regional accents — Karanga, Zezuru, Korekore, Manyika
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Shona has several major dialect groups. Zezuru (Harare area),
                Karanga (Masvingo/Midlands), Korekore (northern), and Manyika
                (east) each have distinct phonological features. Standard
                Shona (used in schools and media) is understood everywhere,
                but regional speakers will have their own flavour.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Listening is the fastest path to correct pronunciation
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Rules give you the map, but ears give you the territory.
                Listening to Shona music, radio, and conversation — even
                passively — trains your ear to the rhythm and sounds far
                faster than drilling rules alone.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/pronunciation/alphabet"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← The Shona Alphabet
          </Link>
          <Link
            href="/courses/pronunciation/spelling-patterns"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Spelling Patterns →
          </Link>
        </div>
      </div>
    </div>
  );
}
