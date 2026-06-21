import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dance Styles — Mitambo yekutamba | Duramazwi",
  description:
    "Discover Shona traditional dance — Jerusarema, Mbakumba, Muchongoyo, and Dandaro — and understand why dance in Shona culture is not separate from ceremony.",
};

const vocabulary = [
  {
    shona: "Kutamba",
    english: "To dance",
    pronunciation: "koo-TAM-bah",
    example: "Vana vanofara kutamba.",
    exampleTranslation: "Children love to dance.",
  },
  {
    shona: "Kutambirira",
    english: "To dance at / for a ceremony",
    pronunciation: "koo-tam-bee-REE-rah",
    example: "Vakadzi vakatambirira mutambo.",
    exampleTranslation: "The women danced at the ceremony.",
  },
  {
    shona: "Jerusarema",
    english: "Traditional Zezuru dance — fast, expressive, competitive",
    pronunciation: "jeh-roo-sah-REH-mah",
    example: "Jerusarema ndiyo mutambo wakakurumbira.",
    exampleTranslation: "Jerusarema is the most celebrated dance.",
  },
  {
    shona: "Mbakumba",
    english: "Karanga ceremonial dance",
    pronunciation: "m-bah-KOOM-bah",
    example: "Mbakumba inotambwa neVaKaranga.",
    exampleTranslation: "Mbakumba is danced by the Karanga people.",
  },
  {
    shona: "Muchongoyo",
    english: "Ndau warrior dance from eastern Zimbabwe",
    pronunciation: "moo-chon-GOY-o",
    example: "Muchongoyo unoshamisa vanhu.",
    exampleTranslation: "Muchongoyo astonishes people.",
  },
  {
    shona: "Dandaro",
    english: "Communal circle dance",
    pronunciation: "dan-DAH-ro",
    example: "Dandaro rinotambwa navanhu vose.",
    exampleTranslation: "The dandaro is danced by everyone.",
  },
  {
    shona: "Nhimbe",
    english: "Work-party dance — after collective farming",
    pronunciation: "N-HEE-mbeh",
    example: "Nhimbe inotambwa mushure mebasa.",
    exampleTranslation: "Nhimbe is danced after collective work.",
  },
  {
    shona: "Chidzidzo",
    english: "Steps / Moves",
    pronunciation: "chee-DZEE-dzo",
    example: "Akadzidzisa chidzidzo chitsva.",
    exampleTranslation: "She taught a new dance step.",
  },
  {
    shona: "Mururu",
    english: "Rhythm",
    pronunciation: "moo-ROO-roo",
    example: "Mururu wengoma inobata mwoyo.",
    exampleTranslation: "The rhythm of the drum captures the heart.",
  },
];

const danceStyles = [
  {
    name: "Jerusarema",
    region: "Zezuru (central Zimbabwe)",
    shona: "Jerusarema",
    pronunciation: "jeh-roo-sah-REH-mah",
    unescoRecognised: true,
    description:
      "Jerusarema is the most internationally recognised Shona traditional dance — characterised by its fast, syncopated footwork, bent-knees posture, and the competitive, improvisational energy between dancers. It is danced to hosho and drum, and the best dancers are those who can sustain the most complex footwork for the longest without breaking rhythm.",
    context:
      "Originally danced at social and celebratory gatherings among the Zezuru people of central Zimbabwe. It is competitive in spirit — dancers challenge each other through increasingly complex variations while the crowd responds to the best moves with cheering and ululation.",
    significance:
      "Recognised by UNESCO as Intangible Cultural Heritage of Humanity, Jerusarema is one of Zimbabwe's most celebrated cultural exports. Its recognition has led to sustained revival efforts and teaching programmes in schools across Zimbabwe.",
  },
  {
    name: "Mbakumba",
    region: "Karanga (southern Zimbabwe)",
    shona: "Mbakumba",
    pronunciation: "m-bah-KOOM-bah",
    unescoRecognised: false,
    description:
      "Mbakumba is a ceremonial dance of the Karanga people, characterized by strong, earth-connected movements — stomping, bent postures, and the powerful engagement of the torso. It is danced by both men and women, though in distinct styles. The dance is closely associated with rain-making ceremonies and thanksgiving.",
    context:
      "Performed at important Karanga ceremonies — rain-making rituals (mukwerere), harvest thanksgivings, and large community celebrations. The dance connects the community to the land and to the ancestral spirits that govern rainfall and fertility.",
    significance:
      "Mbakumba embeds the Karanga relationship with the land. Its stomping movements are literally a communication with the earth — an acknowledgment of dependence on soil, rain, and ancestral favour.",
  },
  {
    name: "Muchongoyo",
    region: "Ndau (eastern Zimbabwe — Chimanimani)",
    shona: "Muchongoyo",
    pronunciation: "moo-chon-GOY-o",
    unescoRecognised: false,
    description:
      "Muchongoyo is the warrior dance of the Ndau people of eastern Zimbabwe, near the Chimanimani mountains on the Mozambique border. It is performed by men in full warrior regalia — including animal skins and ornamental wear — and involves dramatic kicks, leaps, and stick work. The dance is high-energy and visually spectacular.",
    context:
      "Originally performed before battle, after victory, and at major ceremonies. Today it is performed at national celebrations, cultural festivals, and competitions. The dance preserves the martial memory of the Ndau.",
    significance:
      "Muchongoyo carries the identity of the Ndau people — a distinct community within Zimbabwe's Shona-speaking population with their own dialect, traditions, and history. The dance is an assertion of that distinct identity.",
  },
  {
    name: "Dandaro",
    region: "Pan-Shona (all regions)",
    shona: "Dandaro",
    pronunciation: "dan-DAH-ro",
    unescoRecognised: false,
    description:
      "Dandaro is the communal circle dance found across all Shona-speaking communities. Participants form a circle, clapping, singing, and moving together in a shared rhythm. There is no audience in a dandaro — everyone is both performer and participant.",
    context:
      "Danced at virtually any communal occasion — celebrations, ceremonies, the close of nhimbe (work parties), and community gatherings. It is the most inclusive and accessible Shona dance form — no special skill is required, though skill is always celebrated.",
    significance:
      "Dandaro embodies the Shona concept of community. The circle has no beginning and no end — no hierarchy, no audience, no spectators. Everyone participates. It is community as physical form.",
  },
  {
    name: "Nhimbe",
    region: "Pan-Shona (agricultural communities)",
    shona: "Nhimbe",
    pronunciation: "N-HEE-mbeh",
    unescoRecognised: false,
    description:
      "Nhimbe is the dance that follows the nhimbe — a communal work party where neighbours and extended family gather to assist with a large agricultural task (ploughing, planting, harvesting, or building). After the work is done, the host family feeds everyone and the dancing begins.",
    context:
      "The nhimbe dance is the joyful closure of collective effort. It celebrates not just the work done but the community that came to do it. Singing and dancing through the night after a nhimbe affirms the bonds of mutual help.",
    significance:
      "The nhimbe tradition — work together, celebrate together — is a practised expression of 'munhu munhu navanhu' (a person is a person through other people). The dance is the physical form of that gratitude.",
  },
];

export default function DancePage() {
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
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Dance Styles
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mitambo yekutamba
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, dance is not separate from ceremony — it{" "}
            <em>is</em> the ceremony. The stomping of feet at a rain-making
            ritual communicates with the earth. The warrior kicks of Muchongoyo
            carry the memory of battles. The circle of Dandaro enacts the
            community it celebrates. Different regions — Zezuru, Karanga,
            Manyika, Ndau, Korekore — each developed their own distinct dance
            traditions, and those traditions are still alive.
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

        {/* Dance Styles */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Five Dance Traditions
        </h2>
        <div className="flex flex-col gap-6 mb-12">
          {danceStyles.map((dance) => (
            <div
              key={dance.name}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {dance.name}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] mt-0.5 font-mono">
                      {dance.pronunciation}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface-raised)] text-[var(--color-text)] whitespace-nowrap">
                      {dance.region}
                    </span>
                    {dance.unescoRecognised && (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-primary)] text-[var(--color-hero-text)] whitespace-nowrap">
                        UNESCO Heritage
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 flex flex-col gap-4">
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {dance.description}
                </p>
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">
                    Context
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed italic">
                    {dance.context}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--color-primary)] font-bold text-sm shrink-0 mt-0.5">
                    ↳
                  </span>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {dance.significance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Note */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Cultural Note: Dance as Culture
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Jerusarema is one of Zimbabwe's most recognised traditional dances — it was formally recognised by UNESCO as Intangible Cultural Heritage of Humanity, a designation that has supported revival and teaching efforts.",
              "Dance in Shona culture is not separate from ceremony — it IS the ceremony. The movement, the song, the drum, and the community are a single undivided event.",
              "Different regions have distinct dance traditions — Karanga, Zezuru, Manyika, Korekore, and Ndau each have their own styles that express distinct local identities within the broader Shona world.",
              "Children learn to dance from a very early age — it is part of socialisation, not performance. By the time a Shona child begins formal school, they already know the basic movements of several dances.",
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
            href="/courses/music/songs"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Shona Songs
          </Link>
          <Link
            href="/courses/music/cultural-significance"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Cultural Significance →
          </Link>
        </div>
      </div>
    </div>
  );
}
