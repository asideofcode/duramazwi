import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurova Guva — Memorial Ceremonies in Shona | Duramazwi",
  description:
    "Learn about Kurova Guva — the Shona second burial ceremony that brings a spirit home as an ancestor. Vocabulary, cultural depth, and why this ceremony is one of the most important in Shona life.",
};

const vocabulary = [
  {
    shona: "Kurova guva",
    english: "To hit / beat the grave — the memorial ceremony",
    pronunciation: "koo-ROH-vah GOO-vah",
    example: "Kurova guva kwakaita gore rimwe mushure merufu.",
    exampleTranslation: "The memorial ceremony was held one year after the death.",
  },
  {
    shona: "Mudzimu",
    english: "Ancestral spirit",
    pronunciation: "moo-DZEE-moo",
    example: "Mudzimu waBaba wakauyiswa kumba nomuchato.",
    exampleTranslation: "Father's ancestral spirit was brought home through ceremony.",
  },
  {
    shona: "Kupira midzimu",
    english: "To honour / appease the ancestors",
    pronunciation: "koo-PEE-rah mee-DZEE-moo",
    example: "Tinofanira kupira midzimu yemhuri.",
    exampleTranslation: "We must honour the ancestral spirits of the family.",
  },
  {
    shona: "Doro",
    english: "Traditional beer — brewed for ceremonies",
    pronunciation: "DOH-roh",
    example: "Doro rakabikwa nevasikana vemhuri kwemasvondo maviri.",
    exampleTranslation: "The traditional beer was brewed by the family women for two weeks.",
  },
  {
    shona: "Nyama",
    english: "Meat — an animal is slaughtered for the ceremony",
    pronunciation: "NYAH-mah",
    example: "Mombe yakabayiwa kurova guva.",
    exampleTranslation: "An ox was slaughtered for the memorial ceremony.",
  },
  {
    shona: "Kunzwa",
    english: "To hear — the ancestors hear the ceremony",
    pronunciation: "koon-ZWAH",
    example: "Midzimu inozwa mauya edu pamuchato.",
    exampleTranslation: "The ancestors hear our gathering at the ceremony.",
  },
  {
    shona: "Kumutsa",
    english: "To wake up / stir — bringing back the spirit",
    pronunciation: "koo-MOO-tsah",
    example: "Kumutsa mudzimu kunoita kuti agare nesu.",
    exampleTranslation: "Waking the ancestral spirit makes it dwell with us.",
  },
  {
    shona: "Munyai",
    english: "Spokesperson / negotiator — mediates with ancestors",
    pronunciation: "moo-NYAH-ee",
    example: "Munyai akataura nevakuru vepasi.",
    exampleTranslation: "The spokesperson addressed the elders of the ground.",
  },
  {
    shona: "Hwamanda",
    english: "Horn — used to call ancestors in some ceremonies",
    pronunciation: "hwah-MAHN-dah",
    example: "Hwamanda yakaridzwa usiku hwekurova guva.",
    exampleTranslation: "The horn was sounded on the night of the memorial ceremony.",
  },
];

const culturalNotes = [
  {
    title: "What Kurova Guva is",
    body: "Kurova Guva is often called the \"second burial\" in English — though this translation only captures the surface. It is the ceremony held one to three years after a person's death, in which the family formally welcomes the spirit of the deceased back into the home as an ancestral spirit (mudzimu). The ceremony is the spiritual completion of death. Without it, the spirit is considered to be in a state of wandering — not yet at rest, not yet able to protect and guide the family. Kurova guva closes the passage. It is one of the most important Shona ceremonies still widely practised today.",
  },
  {
    title: "A restless spirit causes problems",
    body: "In Shona spiritual understanding, a person who has died but has not been brought back through kurova guva is a spirit that is unresolved. It has left the human world but has not yet been formally received into the world of the ancestors. This unresolved state is believed to cause misfortune for the family — illness, conflict, or bad luck. The kurova guva ceremony resolves this. It tells the spirit: you are now one of us. You are home. You can guide and protect.",
  },
  {
    title: "Traditional beer is essential — and takes days to brew",
    body: "Doro (traditional beer, sometimes called hwahwa) is not bought at a shop for kurova guva. It is brewed at home by the family — typically the women — over several days or even weeks before the ceremony. The brewing itself is a ritual act. The ancestors are believed to be present throughout the preparation. Using commercially produced alcohol in place of home-brewed doro is considered inadequate and disrespectful to the ceremony's spiritual intent.",
  },
  {
    title: "The ceremony is an all-night gathering",
    body: "Kurova guva is not a daytime event that ends at sunset. It is an all-night ceremony — people gather from the evening and remain through the entire night. There are speeches, songs, the slaughter of an animal (typically a cow or goat), the pouring of libations, and the ceremonial sharing of doro. The elders speak to the ancestral spirits, formally introducing the new mudzimu and inviting the spirit to return. As dawn breaks, the ceremony concludes. The spirit is now home.",
  },
  {
    title: "Songs and the voice of the munyai",
    body: "Throughout the ceremony, specific songs are sung — songs of mourning, songs of welcoming, and songs that call the spirit by name. The munyai (spokesperson or negotiator) plays a critical role: they speak on behalf of the family to the spirit and on behalf of the spirit to the family. In some traditions, an elder may enter a state of communication with the spirit and deliver messages from the deceased to the living. This is considered a sacred and serious event, not entertainment.",
  },
];

const ceremonySections = [
  {
    phase: "Weeks before",
    activity: "Brewing doro and preparing the home",
    detail: "Home-brewed traditional beer takes days. Preparation is a ceremony in itself.",
  },
  {
    phase: "The gathering",
    activity: "Family and community arrive at sunset",
    detail: "Both immediate and extended family must be present. Elders travel from afar.",
  },
  {
    phase: "Speeches begin",
    activity: "Elders address the spirit and the living",
    detail: "The munyai speaks formally. The spirit's name is called. Songs are sung.",
  },
  {
    phase: "The slaughter",
    activity: "An animal is slaughtered for the meal",
    detail: "Nyama (meat) is prepared and shared communally throughout the night.",
  },
  {
    phase: "Pouring libations",
    activity: "Doro is offered to the ancestors",
    detail: "Beer is poured on the ground as an offering to the spirit being welcomed home.",
  },
  {
    phase: "Dawn — completion",
    activity: "The spirit is now home",
    detail: "As morning comes, the ceremony closes. The mudzimu is now a protective ancestor.",
  },
];

export default function MemorialCeremoniesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/ceremonies"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Ceremonies Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Memorial Ceremonies
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kurova Guva
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Kurova guva — literally "to beat the grave" — is the ceremony that
            completes a death in Shona spiritual life. It is the moment when the
            family formally brings the spirit of the deceased back into the home
            as a mudzimu (ancestral spirit). Without this ceremony, death is
            unfinished. This is one of the most important Shona ceremonies still
            widely practised across Zimbabwe today, and one of the least
            documented in English.
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
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
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
                    <span className="text-[var(--color-text)] font-medium">{word.example}</span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">{word.exampleTranslation}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="grid gap-5 mb-12">
          {culturalNotes.map((note, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Ceremony Timeline */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          The Ceremony — Phase by Phase
        </h2>
        <div className="space-y-4 mb-10">
          {ceremonySections.map((section, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-0.5">
                  {section.phase}
                </p>
                <p className="font-bold text-[var(--color-text)]">{section.activity}</p>
                <p className="text-xs text-[var(--color-muted)] mt-1 leading-relaxed">{section.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why this matters note */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Why Kurova Guva Still Matters
          </h3>
          <p className="text-sm text-[var(--color-text)] leading-relaxed mb-3">
            Many Shona families who have converted to Christianity still hold
            kurova guva — sometimes in modified form, sometimes in full
            traditional form alongside their faith. The ceremony addresses
            something that no other ritual entirely replaces: the formal
            completion of a death, the acceptance of a spirit into the ancestral
            family, and the reassurance for the living that their loved one is
            now protecting them.
          </p>
          <p className="text-sm text-[var(--color-text)] leading-relaxed">
            Understanding kurova guva is essential for understanding Shona
            spirituality. It explains why ancestors are spoken of as present
            and active, why the dead are consulted in family decisions, and why
            the phrase "midzimu yemhuri" (the ancestral spirits of the family)
            is not a historical relic but a living reality for millions of
            Shona people.
          </p>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/ceremonies/funerals"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Funerals
          </Link>
          <Link
            href="/courses/ceremonies/challenges"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Take the Challenges →
          </Link>
        </div>
      </div>
    </div>
  );
}
