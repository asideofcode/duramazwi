import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Significance of Music — Basa reNziyo muChinhu | Duramazwi",
  description:
    "Understand why music is the primary vehicle of cultural transmission in Shona society — from chimurenga to mbira, from Thomas Mapfumo to the bira ceremony.",
};

const vocabulary = [
  {
    shona: "Mweya",
    english: "Spirit — music connects to spirit",
    pronunciation: "MWEH-yah",
    example: "Mweya unouya nemutambo wembira.",
    exampleTranslation: "The spirit arrives through the mbira ceremony.",
  },
  {
    shona: "Kusangana",
    english: "To gather — music brings people together",
    pronunciation: "koo-san-GAH-nah",
    example: "Nziyo inoita kuti vanhu vasangane.",
    exampleTranslation: "Music causes people to gather.",
  },
  {
    shona: "Bira",
    english: "Spirit possession ceremony — requires mbira music",
    pronunciation: "BEE-rah",
    example: "Bira rinoitwa kuti mweya wauye.",
    exampleTranslation: "A bira is held so the spirit may come.",
  },
  {
    shona: "Chimurenga",
    english: "Liberation struggle — also a musical genre",
    pronunciation: "chee-moo-REN-gah",
    example: "Nziyo dzeChimurenga dzakabatsira hondo.",
    exampleTranslation: "Chimurenga songs supported the liberation struggle.",
  },
  {
    shona: "Kurumbidzwa",
    english: "To be praised through music",
    pronunciation: "koo-room-bee-DZWAH",
    example: "Mambo akakurumbidzwa nenziyo.",
    exampleTranslation: "The chief was praised through song.",
  },
  {
    shona: "Zano",
    english: "Wisdom / Teaching — passed through song",
    pronunciation: "ZAH-no",
    example: "Zano rinopfuura kuburikidza nenziyo.",
    exampleTranslation: "Wisdom is passed on through song.",
  },
  {
    shona: "Mufundisi weimbo",
    english: "Song teacher / music custodian",
    pronunciation: "moo-fun-DEE-see weh-EEM-bo",
    example: "Mufundisi weimbo akadzidzisa vana.",
    exampleTranslation: "The song teacher taught the children.",
  },
];

const themes = [
  {
    title: "Music as Cultural Transmission",
    body: `In Shona society, music is the primary vehicle through which history, values, and teachings are transmitted across generations. Before literacy was widespread, songs carried the knowledge that written texts would carry elsewhere.

The praise poetry (nhetembo) of chiefs encoded lineage and great deeds. The ngano (folktale) songs embedded moral teaching. The bira songs maintained the living connection to the ancestral world. None of these functions were supplementary to society — they were load-bearing.

A Shona child who has grown up surrounded by traditional music has already absorbed vast amounts of cultural information by the time they can articulate it in words. The songs teach before the children can learn.`,
  },
  {
    title: "Chimurenga Music and Political Power",
    body: `The chimurenga — Zimbabwe's liberation struggle against white minority rule — was accompanied by a distinct and powerful musical tradition. Thomas Mapfumo, who came to be known as the Lion of Zimbabwe, consciously developed "chimurenga music" in the 1970s: drawing on traditional mbira patterns and Shona oral traditions, but placing them in a contemporary electric band context.

The music did two things simultaneously. It spoke the language of the traditional Shona world — the ancestors, the land, the community — which gave it deep resonance among ordinary Shona people. And it carried coded political messages in its lyrics, initially escaping the attention of the Rhodesian security forces.

Thomas Mapfumo was eventually detained without charge by the Rhodesian government in 1977. His detention became a cause, and his music a symbol. The inseparability of Shona music and political life could not have been demonstrated more vividly.`,
  },
  {
    title: "The Bira Ceremony",
    body: `The bira is a night-long ceremony whose purpose is to bring a specific ancestral spirit (mudzimu or mhondoro) into the present to communicate with the living family. The means of that communication is music — specifically, mbira music.

The bira begins after dark and runs through the night. A specific mbira piece is associated with each ancestral spirit. As the right music is played and the hosho provide the rhythmic foundation, a spirit medium (svikiro) begins to enter a state of possession — the spirit arrives. Through the svikiro, the family can consult the ancestor about illness, disputes, or important decisions.

The mbira is therefore not decorating the ceremony. It is the mechanism by which the ceremony operates. Without mbira, there is no bira.`,
  },
  {
    title: "Thomas Mapfumo and Oliver Mtukudzi",
    body: `Thomas Mapfumo (born 1945) and Oliver Mtukudzi (1952–2019) are the two towering figures of twentieth-century Shona popular music, and both drew deeply from traditional roots.

Mapfumo's chimurenga music takes traditional mbira patterns and translates them into electric guitar, bass, and drums — making the ancestral music accessible to a generation raised on radio. His lyrics are dense with Shona cultural references, proverbs, and political commentary. He remains the most politically engaged major Shona artist.

Mtukudzi — known as Tuku — developed a sound that blended Shona musical sensibility with township music, jazz influences, and his own distinctly warm vocal style. His music spoke of family, loss, love, and the challenges of modern Zimbabwean life, all within a musical framework unmistakably rooted in Shona tradition. His death in 2019 was mourned as a national loss across Zimbabwe and among diaspora communities worldwide.

Both men demonstrate what Shona music has always been: a living bridge between the old world and the new.`,
  },
  {
    title: "Mbira Under Threat — and the Revival",
    body: `Mbira music faces a significant challenge from younger generations of Zimbabweans who have grown up with commercial music — sungura, Afrobeats, hip-hop — and for whom mbira may feel distant or associated with an older, rural world they have left behind.

Some Christian churches in Zimbabwe have historically discouraged mbira music, associating it with ancestral religion rather than Christian practice. This has had a real effect — mbira was absent from many urban and churchgoing households for a generation.

But the revival is active and determined. Mbira players like Stella Chiweshe (the "Queen of Mbira"), Ephat Mujuru, and younger artists like Busi Ncube have worked to bring mbira to younger audiences and to international stages. Diaspora communities in the UK, USA, and elsewhere have established mbira clubs and workshops. Recorded tutorials allow the instrument to be learned anywhere in the world.

The paradox is that the digital age — which accelerated the threat to traditional music — is also providing the tools for its survival.`,
  },
  {
    title: "Shona Church Music",
    body: `Shona church music occupies a fascinating cultural position. When Christianity came to Zimbabwe, it encountered a culture with a rich and sophisticated musical tradition. The result was not displacement but fusion.

Shona church music — particularly in mainline Protestant and Catholic churches, and in Zimbabwe's vibrant independent African churches (Apostolic and Zionist movements) — is distinctively Shona in structure: call-and-response, drumming, dancing in worship, ululation at moments of spiritual peak. The content is Christian; the musical form is thoroughly traditional.

This fusion is not a compromise. It is a demonstration of the depth of the Shona musical tradition — that it was strong enough to absorb new content without losing its structural identity. The ancestors and Christ may occupy different theological positions, but in the music, they share the same rhythmic home.`,
  },
];

export default function CulturalSignificancePage() {
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
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Cultural Significance of Music
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Basa reNziyo muChinhu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Music in Shona culture is not entertainment — it is infrastructure.
            It is the system by which history is stored, by which ancestors are
            consulted, by which political resistance is organised, by which
            children are educated, and by which communities hold themselves
            together across generations. To understand Shona music is to
            understand the deepest architecture of Shona life.
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

        {/* Themes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Six Dimensions of Musical Significance
        </h2>
        <div className="flex flex-col gap-6 mb-12">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {theme.title}
                </h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed whitespace-pre-line">
                  {theme.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: Key Figures and Facts
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Music is the primary vehicle for cultural transmission — history, values, and teachings are encoded in songs and transmitted before children can read or write.",
              "The chimurenga music of the independence struggle (1970s–1980s) shows how music and politics are inseparable in Zimbabwe. Thomas Mapfumo's detention by the Rhodesian government in 1977 confirmed music's political power.",
              "Mbira music is under threat from younger generations preferring commercial music and from some Christian churches' historical discouragement — but revival efforts are active and increasingly international.",
              "Shona church music is a fusion of traditional call-and-response and movement with Christian content — it is distinctively Zimbabwean, demonstrating the strength of the Shona musical tradition.",
              "Thomas Mapfumo (chimurenga) and Oliver Mtukudzi (Tuku music) are the two towering figures of 20th-century Shona music — both rooted in traditional practice, both reaching global audiences.",
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
            href="/courses/music/dance"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Dance Styles
          </Link>
          <Link
            href="/courses/music/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Music Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
