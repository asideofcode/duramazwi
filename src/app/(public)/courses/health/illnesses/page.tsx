import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illnesses & Symptoms in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary for describing illness and symptoms — from fever and headache to stomach pain and shivering — with cultural context on how illness is understood.",
};

const vocabulary = [
  {
    shona: "Kurwara",
    english: "To be sick / ill",
    pronunciation: "koo-RWAH-rah",
    example: "Ndirwara nhasi.",
    exampleTranslation: "I am sick today.",
  },
  {
    shona: "Kurwadza",
    english: "To hurt / to ache",
    pronunciation: "koo-RWAH-dzah",
    example: "Gumbo rangu rinorwadza.",
    exampleTranslation: "My leg hurts.",
  },
  {
    shona: "Ndirwara",
    english: "I am sick",
    pronunciation: "NDEE-rwah-rah",
    example: "Ndirwara — handisi kunzwa zvakanaka.",
    exampleTranslation: "I am sick — I am not feeling well.",
  },
  {
    shona: "Ndine kirungukiru",
    english: "I have a headache (literally: something in my head)",
    pronunciation: "NDEE-neh kee-roon-goo-KEE-roo",
    example: "Ndine kirungukiru kubva mangwanani.",
    exampleTranslation: "I have had a headache since morning.",
  },
  {
    shona: "Ndine mwoyo worwadza",
    english: "My heart / stomach hurts",
    pronunciation: "NDEE-neh MWOH-yoh woh-RWAH-dzah",
    example: "Ndine mwoyo worwadza — ndakadya zvinhu zvakaipa.",
    exampleTranslation: "My stomach hurts — I ate bad food.",
  },
  {
    shona: "Ndine fivha",
    english: "I have a fever",
    pronunciation: "NDEE-neh FEE-vhah",
    example: "Ndine fivha uye ndiri kupambadza.",
    exampleTranslation: "I have a fever and I am shivering.",
  },
  {
    shona: "Kudhebha",
    english: "To feel nauseous",
    pronunciation: "koo-DHEH-bhah",
    example: "Ndinodhebha panguva yose.",
    exampleTranslation: "I feel nauseous all the time.",
  },
  {
    shona: "Kutapuka",
    english: "To vomit",
    pronunciation: "koo-tah-POO-kah",
    example: "Mwana akatapuka usiku.",
    exampleTranslation: "The child vomited at night.",
  },
  {
    shona: "Kupambadza",
    english: "To shiver",
    pronunciation: "koo-pahm-BAD-zah",
    example: "Aripambadza — fivha yakakura.",
    exampleTranslation: "He is shivering — the fever is high.",
  },
  {
    shona: "Nzoka",
    english: "Worm (also: stomach pain)",
    pronunciation: "NZOH-kah",
    example: "Mwana ane nzoka mudumbu.",
    exampleTranslation: "The child has stomach worms / stomach pain.",
  },
  {
    shona: "Chirwere",
    english: "Illness / disease",
    pronunciation: "chee-RWEH-reh",
    example: "Chirwere ichi chakaoma.",
    exampleTranslation: "This illness is serious.",
  },
  {
    shona: "Chinokurwadzai?",
    english: "What hurts you? (formal)",
    pronunciation: "chee-noh-koo-RWAH-dzah-ee",
    example: "Chinokurwadzai, sekuru?",
    exampleTranslation: "What is hurting you, grandfather?",
  },
  {
    shona: "Chinokurwadza?",
    english: "What is hurting you? (informal)",
    pronunciation: "chee-noh-koo-RWAH-dzah",
    example: "Chinokurwadza? Ndinokubatsira.",
    exampleTranslation: "What is hurting you? I will help you.",
  },
];

const culturalNotes = [
  {
    title: "Practical and Descriptive Illness Language",
    body: "Shona illness vocabulary is practical and descriptive — symptoms are described literally. 'Ndine kirungukiru' (I have something in my head) paints a vivid picture of a headache without requiring a clinical term. This descriptive approach makes health communication accessible to everyone.",
  },
  {
    title: "Fivha — Fever and Malaria",
    body: "Fivha (fever) is closely associated with malaria in Zimbabwe, where malaria has historically been prevalent. When someone says 'Ndine fivha', it can mean general fever or can specifically imply malaria. Healthcare workers and community members understand this dual meaning from context.",
  },
  {
    title: "Stomach Ailments — Multiple Possible Causes",
    body: "Stomach ailments (mwoyo worwadza, nzoka) are commonly attributed to bad food, drinking cold water, or spiritual causes. The Shona approach to digestion problems acknowledges physical and spiritual dimensions — a persistent stomach ailment may be seen as requiring both medicine and spiritual intervention.",
  },
  {
    title: "Open Discussion of Illness",
    body: "In Shona culture, discussing illness openly is normal and expected. Hiding illness is seen as creating unnecessary danger — for yourself and for the community, who might not be able to help. There is no shame in saying 'Ndirwara' (I am sick) — it invites community support and practical assistance.",
  },
];

export default function IllnessesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/health"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Health Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Illnesses &amp; Symptoms
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Chirwere neZvirwere
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Shona health vocabulary describes symptoms vividly and practically.
            Rather than clinical terms, you will find descriptive phrases like
            <strong> ndine kirungukiru</strong> (I have something troubling in
            my head) and <strong>ndine mwoyo worwadza</strong> (my stomach/heart
            hurts). This module gives you the language for both describing your
            own symptoms and asking others how they feel.
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
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Pronunciation
                </th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">
                  Example
                </th>
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="grid gap-5 mb-12">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quick reference: formal vs informal */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Asking About Pain: Formal vs Informal
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                shona: "Chinokurwadza?",
                register: "Informal",
                use: "For friends, children, peers",
              },
              {
                shona: "Chinokurwadzai?",
                register: "Formal",
                use: "For elders, strangers, officials",
              },
            ].map((item) => (
              <div
                key={item.shona}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] text-lg mb-1">
                  {item.shona}
                </p>
                <p className="text-xs font-semibold text-[var(--color-accent)] mb-1">
                  {item.register}
                </p>
                <p className="text-xs text-[var(--color-muted)]">{item.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/health/body-parts"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Body Parts
          </Link>
          <Link
            href="/courses/health/clinic"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Visiting a Clinic →
          </Link>
        </div>
      </div>
    </div>
  );
}
