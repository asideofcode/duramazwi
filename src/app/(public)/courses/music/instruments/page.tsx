import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Instruments — Zviridzwa zveChivanhu | Duramazwi",
  description:
    "Learn the sacred mbira, hosho rattles, ngoma drums, and other Shona traditional instruments — their names, how they are played, and what they mean culturally.",
};

const instruments = [
  {
    shona: "Mbira",
    english: "Thumb piano / Lamellophone",
    pronunciation: "M-BEE-rah",
    construction: "22–28 metal tines mounted on a wooden soundboard, often placed inside a calabash resonator (deze) to amplify sound",
    howPlayed: "Held in both hands, played with thumbs and right index finger plucking the tines in complex interlocking patterns",
    culturalUse: "Sacred instrument used at bira ceremonies to call the ancestors (vadzimu) into the present. The mbira's sound is considered the voice of the ancestors.",
    significance: "The most spiritually important Shona instrument — not just music but a spiritual device",
  },
  {
    shona: "Hosho",
    english: "Gourd rattles",
    pronunciation: "HOH-sho",
    construction: "Dried gourds filled with seeds or small stones, used in pairs — one in each hand",
    howPlayed: "Shaken in pairs, producing an interlocking rhythmic pattern that provides the rhythmic foundation of mbira music",
    culturalUse: "Inseparable from mbira — hosho and mbira are never separated in traditional performance. Also used in all Shona ceremonial music.",
    significance: "The rhythmic anchor of Shona music — their role is as fundamental as a drum kit in a band",
  },
  {
    shona: "Ngoma",
    english: "Drum",
    pronunciation: "N-GOH-mah",
    construction: "Wooden drum with an animal-hide drumhead, varying in size from small hand drums to large ceremonial drums",
    howPlayed: "Struck with hands or wooden sticks. Different techniques produce different tones from the same drum.",
    culturalUse: "Used at ceremonies, dances, and historically for communication across villages — the drum's sound carried messages across long distances in open terrain.",
    significance: "A ceremonial and communicative instrument — the sound of ngoma signals something important is happening",
  },
  {
    shona: "Chipendani",
    english: "Mouth bow",
    pronunciation: "chee-pen-DAH-nee",
    construction: "A single flexible stick strung with a taut string. The player's mouth acts as a resonator.",
    howPlayed: "One end placed against the open mouth, the string plucked or tapped while the mouth shape changes to alter the harmonics and pitches produced",
    culturalUse: "A personal, contemplative instrument — played by individuals alone, often while herding or walking. Not a ceremonial group instrument.",
    significance: "Represents the intimate, private dimension of Shona music-making — the music of solitude and reflection",
  },
  {
    shona: "Mhande / Dandaro",
    english: "Communal singing (vocal tradition)",
    pronunciation: "M-HAN-deh / dan-DAH-ro",
    construction: "Not an instrument but a vocal tradition — group singing in interlocking patterns, usually in a circle",
    howPlayed: "A leader (often an elder or ceremony host) begins a phrase; the group responds. Voices interlock in a distinctly Shona polyphonic style.",
    culturalUse: "Central to bira ceremonies, nhimbe (communal work parties), and all collective Shona celebrations",
    significance: "Collective singing is how Shona communities make themselves felt as a community — it is social glue as much as music",
  },
];

const additionalVocab = [
  {
    shona: "Kuridza mbira",
    english: "To play mbira",
    pronunciation: "koo-REE-dzah M-BEE-rah",
    example: "Mwana ari kuridza mbira.",
    exampleTranslation: "The child is playing mbira.",
  },
  {
    shona: "Kubvuma",
    english: "To resonate / to agree — the mbira's sound",
    pronunciation: "koo-BVOO-mah",
    example: "Mbira inobvuma usiku.",
    exampleTranslation: "The mbira resonates at night.",
  },
  {
    shona: "Nyunga nyunga",
    english: "A type of mbira (mid-register)",
    pronunciation: "NYOO-ngah NYOO-ngah",
    example: "Nyunga nyunga inoridzwa nevana.",
    exampleTranslation: "The nyunga nyunga is played by young people.",
  },
  {
    shona: "Karimba",
    english: "Small teaching mbira",
    pronunciation: "kah-REEM-bah",
    example: "Karimba ndiyo inodzidzisirwa mbira.",
    exampleTranslation: "The karimba is used for learning mbira.",
  },
  {
    shona: "Bira",
    english: "Ceremony to call ancestors (requires mbira)",
    pronunciation: "BEE-rah",
    example: "Bira rakaitwa usiku.",
    exampleTranslation: "The bira ceremony was held at night.",
  },
  {
    shona: "Mhondoro",
    english: "Lion spirit medium — associated with mbira",
    pronunciation: "m-HON-do-ro",
    example: "Mhondoro inouya kubira.",
    exampleTranslation: "The lion spirit medium comes to the bira.",
  },
];

export default function InstrumentsPage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Traditional Instruments
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Zviridzwa zveChivanhu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona musical instruments are not merely tools for making sound. The{" "}
            <strong className="text-[var(--color-primary)]">mbira</strong> is a
            spiritual device — its sound is the voice of the ancestors. The{" "}
            <strong className="text-[var(--color-primary)]">hosho</strong> are its
            inseparable companions. The{" "}
            <strong className="text-[var(--color-primary)]">ngoma</strong> drum
            once carried messages between villages. Each instrument holds a
            specific place in Shona life — ceremonial, communal, or deeply personal.
          </p>
        </div>

        {/* Instruments */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          The Instruments
        </h2>
        <div className="flex flex-col gap-6 mb-12">
          {instruments.map((inst) => (
            <div
              key={inst.shona}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {inst.shona}
                    </h3>
                    <p className="text-sm text-[var(--color-text)]">{inst.english}</p>
                  </div>
                  <span className="text-xs font-mono text-[var(--color-muted)] hidden sm:block">
                    {inst.pronunciation}
                  </span>
                </div>
              </div>
              <div className="px-6 py-5 grid gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-1">
                    Construction
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                    {inst.construction}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-1">
                    How played
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                    {inst.howPlayed}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-1">
                    Cultural use
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                    {inst.culturalUse}
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border)]">
                  <p className="text-sm font-semibold text-[var(--color-primary)]">
                    {inst.significance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Vocabulary */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Additional Vocabulary
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
              {additionalVocab.map((word, i) => (
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

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: The Mbira
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "The mbira is not just a musical instrument — it is a spiritual device. Playing mbira at a bira ceremony literally calls the ancestors (vadzimu) to be present among the living.",
              "Hosho are inseparable from mbira — they are never performed without each other. The hosho player and mbira player lock together into a single rhythmic-melodic whole.",
              "Thomas Mapfumo and Oliver Mtukudzi brought mbira-influenced music to international stages — Mapfumo's chimurenga music samples and reimagines mbira patterns for modern ensembles.",
              "The mbira sound is described as the voice of the ancestors. It creates a specific altered state in experienced listeners that facilitates communication with the spirit world in ceremonial contexts.",
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
            href="/courses/music"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/music/songs"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Shona Songs →
          </Link>
        </div>
      </div>
    </div>
  );
}
