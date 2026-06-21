import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Shona Alphabet | Duramazwi",
  description:
    "Learn the 25 letters of the Shona alphabet, special consonant clusters, and how every vowel is always fully pronounced.",
};

const vowels = [
  { letter: "a", sound: "ah", example: "baba (father)", tip: "Like 'ah' in 'father'" },
  { letter: "e", sound: "eh", example: "eya (yes)", tip: "Like 'e' in 'bed'" },
  { letter: "i", sound: "ee", example: "imba (house)", tip: "Like 'ee' in 'see'" },
  { letter: "o", sound: "oh", example: "orera (is ripe)", tip: "Like 'o' in 'more'" },
  { letter: "u", sound: "oo", example: "uya (come)", tip: "Like 'oo' in 'food'" },
];

const consonantClusters = [
  { cluster: "bv", example: "bvunza (ask)", note: "Both lips together — bilabial 'bv'" },
  { cluster: "ch", example: "chipo (gift)", note: "Like 'ch' in 'church'" },
  { cluster: "dz", example: "dziva (pool)", note: "Like 'ds' in 'kids'" },
  { cluster: "mb", example: "mbudzana (small goat)", note: "Nasal + bilabial: 'mb'" },
  { cluster: "mh", example: "mhuka (animal)", note: "Aspirated nasal — breathe through" },
  { cluster: "mp", example: "mpunga (rice)", note: "Nasal + voiceless 'p'" },
  { cluster: "mv", example: "mvura (water/rain)", note: "Nasal + bilabial 'v'" },
  { cluster: "nd", example: "ndini (it is me)", note: "Nasal + 'd': quick 'nd'" },
  { cluster: "ng", example: "ngano (story)", note: "Like 'ng' in 'singer'" },
  { cluster: "nz", example: "nzou (elephant)", note: "Like 'nz' in 'bronze'" },
  { cluster: "ph", example: "pharawo (pharaoh)", note: "Aspirated 'p' — puff of air" },
  { cluster: "sh", example: "shiri (bird)", note: "Like 'sh' in 'shop'" },
  { cluster: "sv", example: "svondo (Sunday)", note: "Voiceless bilabial cluster" },
  { cluster: "ts", example: "tsamba (letter)", note: "Like 'ts' in 'cats'" },
  { cluster: "tsh", example: "tshuro (hare)", note: "Aspirated 'ch'" },
  { cluster: "vh", example: "vhura (open)", note: "Breathy bilabial 'v'" },
  { cluster: "zv", example: "zvimwe (other things)", note: "Voiced bilabial cluster" },
];

const alphabetWords = [
  { letter: "a", shona: "ambuya", english: "grandmother", pronunciation: "AH-mboo-yah" },
  { letter: "b", shona: "baba", english: "father", pronunciation: "BAH-bah" },
  { letter: "ch", shona: "chipo", english: "gift", pronunciation: "CHEE-poh" },
  { letter: "d", shona: "dura", english: "granary", pronunciation: "DOO-rah" },
  { letter: "dz", shona: "dziva", english: "pool / lake", pronunciation: "DZEE-vah" },
  { letter: "e", shona: "eya", english: "yes", pronunciation: "EH-yah" },
  { letter: "f", shona: "famba", english: "walk / travel", pronunciation: "FAHM-bah" },
  { letter: "g", shona: "guta", english: "city / town", pronunciation: "GOO-tah" },
  { letter: "h", shona: "hama", english: "relative", pronunciation: "HAH-mah" },
  { letter: "i", shona: "imba", english: "house", pronunciation: "EEM-bah" },
  { letter: "k", shona: "kurima", english: "to farm", pronunciation: "koo-REE-mah" },
  { letter: "m", shona: "miti", english: "trees", pronunciation: "MEE-tee" },
  { letter: "mb", shona: "mbudzana", english: "small goat", pronunciation: "mboo-DZAH-nah" },
  { letter: "mh", shona: "mhuka", english: "animal", pronunciation: "MHOO-kah" },
  { letter: "n", shona: "nzira", english: "path / road", pronunciation: "NZEE-rah" },
  { letter: "ng", shona: "ngano", english: "story / folktale", pronunciation: "NGAH-noh" },
  { letter: "nz", shona: "nzou", english: "elephant", pronunciation: "NZOH" },
  { letter: "o", shona: "orera", english: "is ripe", pronunciation: "oh-REH-rah" },
  { letter: "p", shona: "pane", english: "there is", pronunciation: "PAH-neh" },
  { letter: "r", shona: "rwizi", english: "river", pronunciation: "RWEE-zee" },
  { letter: "s", shona: "sadza", english: "porridge (staple food)", pronunciation: "SAH-dzah" },
  { letter: "sv", shona: "svondo", english: "Sunday / week", pronunciation: "SVOH-ndoh" },
  { letter: "t", shona: "tafara", english: "we are glad", pronunciation: "tah-FAH-rah" },
  { letter: "u", shona: "uya", english: "come!", pronunciation: "OO-yah" },
  { letter: "v", shona: "vanhu", english: "people", pronunciation: "VAH-nhoo" },
  { letter: "w", shona: "wedu", english: "ours", pronunciation: "WEH-doo" },
  { letter: "y", shona: "yenda", english: "go!", pronunciation: "YEH-ndah" },
  { letter: "z", shona: "ziso", english: "eye", pronunciation: "ZEE-soh" },
  { letter: "zv", shona: "zvimwe", english: "other things / also", pronunciation: "ZVEEM-weh" },
];

export default function AlphabetPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            The Shona Alphabet
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mavara eChiShona
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona uses the Roman alphabet with 25 letters — all letters except{" "}
            <strong>q</strong> and <strong>x</strong>. Unlike English, there
            are no silent letters and no ambiguous vowel sounds. What you see
            is exactly what you say. The additional complexity comes from
            consonant clusters — combinations like <em>dz</em>, <em>mh</em>,{" "}
            <em>sv</em>, and <em>zv</em> — which each have a distinct sound
            that you will learn to recognise quickly.
          </p>
        </div>

        {/* Vowels section */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Five Vowels
        </h2>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-5 mb-12">
          {vowels.map((v) => (
            <div
              key={v.letter}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 text-center"
            >
              <p className="text-4xl font-bold text-[var(--color-primary)] mb-1">
                {v.letter}
              </p>
              <p className="text-sm font-mono font-semibold text-[var(--color-text)]">
                /{v.sound}/
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-1 leading-snug">
                {v.tip}
              </p>
              <p className="text-xs text-[var(--color-accent)] mt-1 italic">
                {v.example}
              </p>
            </div>
          ))}
        </div>

        {/* Alphabet table */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Letters &amp; Example Words
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Letter</th>
                <th className="px-4 py-3 font-semibold">Shona word</th>
                <th className="px-4 py-3 font-semibold">English meaning</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Pronunciation</th>
              </tr>
            </thead>
            <tbody>
              {alphabetWords.map((row, i) => (
                <tr
                  key={row.letter}
                  className={
                    i % 2 === 0
                      ? "bg-[var(--color-surface-raised)]"
                      : "bg-[var(--color-surface)]"
                  }
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)] font-mono text-base">
                    {row.letter}
                  </td>
                  <td className="px-4 py-3 font-semibold text-[var(--color-text)]">
                    {row.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)]">
                    {row.english}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-[var(--color-muted)] hidden md:table-cell">
                    {row.pronunciation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Consonant clusters */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Special Consonant Clusters
        </h2>
        <div className="grid gap-3 md:grid-cols-2 mb-12">
          {consonantClusters.map((c, i) => (
            <div
              key={c.cluster}
              className={`rounded-xl border border-[var(--color-border)] p-4 ${
                i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[var(--color-primary)] font-mono w-10 shrink-0">
                  {c.cluster}
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-text)] text-sm">
                    {c.example}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{c.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                1. Shona is a Bantu language
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Shona belongs to the Bantu language family — related to Zulu,
                Swahili, Ndebele, Sotho, and hundreds of others. Many roots
                are shared or similar. If you already know another Bantu
                language, you will recognise patterns in the noun class
                system.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                2. No silent letters — ever
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                This is the single most important rule: every letter contributes
                to the sound. The word &ldquo;mhuka&rdquo; has five sounds — m, h, u, k,
                a — all pronounced. There are no exceptions.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                3. Consonant clusters take practice
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Clusters like <em>bv</em>, <em>sv</em>, and <em>zv</em> are
                unfamiliar to English speakers. Start by saying each consonant
                separately, then blend them faster until they flow. Native
                speakers produce them effortlessly — it just takes repetition.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)] mb-1">
                4. Recognising Bantu roots accelerates learning
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Many Shona roots appear across Bantu languages. <em>Nzou</em>{" "}
                (elephant) appears in similar forms in Zulu; <em>muti</em>{" "}
                (tree / medicine) is widespread. Looking for these patterns
                can help build vocabulary faster.
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/pronunciation"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/pronunciation/rules"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Pronunciation Rules →
          </Link>
        </div>
      </div>
    </div>
  );
}
