import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mutupo — Clan & Totem in Shona | Duramazwi",
  description:
    "Learn about the Shona totem system (mutupo) — what it means, common totems, clan praises (zvidao), and why you cannot marry within your totem.",
};

const vocabulary = [
  {
    shona: "Mutupo",
    english: "Totem / Clan",
    pronunciation: "moo-TOO-poh",
    note: "Inherited from your father — identifies your ancestral lineage",
  },
  {
    shona: "Zvidao",
    english: "Clan praises",
    pronunciation: "zvee-DAH-oh",
    note: "Praise poetry recited to identify your lineage at ceremonies",
  },
  {
    shona: "Musvo",
    english: "Clan name / shortened praise",
    pronunciation: "MOOSS-voh",
    note: "The short form of zvidao used as an everyday identifier",
  },
];

const totems = [
  { shona: "Shumba", english: "Lion", animal: "🦁", surnames: "Mujuru, Mhuriro, Shumba" },
  { shona: "Nzou", english: "Elephant", animal: "🐘", surnames: "Samkange, Nzou, Nyandoro" },
  { shona: "Mhofu", english: "Eland", animal: "🦌", surnames: "Mhofu, Zvobgo, Chiminya" },
  { shona: "Hungwe", english: "Fish eagle", animal: "🦅", surnames: "Hungwe, Sithole" },
  { shona: "Tembo", english: "Zebra", animal: "🦓", surnames: "Tembo, Ncube, Moyo" },
  { shona: "Ngara", english: "Porcupine", animal: "🦔", surnames: "Ngara, Mandaza" },
  { shona: "Garwe", english: "Crocodile", animal: "🐊", surnames: "Garwe, Nyamhuka" },
  { shona: "Shava", english: "Eland (variant)", animal: "🦌", surnames: "Shava, Chigumba" },
  { shona: "Gwai", english: "Sheep", animal: "🐑", surnames: "Gwai, Gwaze" },
  { shona: "Hove", english: "Fish", animal: "🐟", surnames: "Hove, Chiodza" },
];

const rules = [
  {
    title: "You cannot marry within your mutupo",
    body:
      "This is the most important rule of mutupo. If you share the same totem as someone, you are considered family — regardless of whether you are actually blood-related. Marrying within your mutupo is considered incest and is a deep cultural taboo. This rule has historically served as a way to keep communities connected across vast distances.",
  },
  {
    title: "Mutupo is how you introduce yourself",
    body:
      "When two Shona people meet for the first time, stating your mutupo is a key part of the introduction. Knowing someone's mutupo tells you immediately whether they are family, potential marriage partners, or people with specific ancestral connections to your lineage. In a traditional greeting, you might say: 'Mutupo wangu ndiShumba' (My totem is lion).",
  },
  {
    title: "Mutupo creates family across surnames",
    body:
      "Two people with different surnames but the same mutupo are considered relatives — they call each other sister, brother, cousin, or uncle depending on age and context. Conversely, two people with the same surname but different mutupos are not necessarily family and can marry. Mutupo is the deeper identity.",
  },
  {
    title: "Zvidao at ceremonies",
    body:
      "Zvidao (clan praises) are recited at all significant life events: weddings, the birth of a child, funerals, and when receiving important gifts. They are a way of calling your ancestors into the moment — acknowledging that the living are connected to those who came before. Knowing your zvidao is knowing who you are.",
  },
];

export default function TotemsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/family"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Family Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Mutupo
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Clan & Totem
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Every Shona person is born into a mutupo — a totem clan inherited
            from their father. The mutupo is an animal or natural symbol that
            represents your ancestral lineage. It determines who you can marry,
            how you introduce yourself, and how you are connected to strangers
            across the country. In Shona culture, to know your mutupo is to
            know yourself.
          </p>
        </div>

        {/* Key vocabulary */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Key Words
        </h2>
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {vocabulary.map((word) => (
            <div
              key={word.shona}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
            >
              <p className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                {word.shona}
              </p>
              <p className="text-sm font-semibold text-[var(--color-text)] mb-1">
                {word.english}
              </p>
              <p className="text-xs font-mono text-[var(--color-muted)] mb-3">
                {word.pronunciation}
              </p>
              <p className="text-xs text-[var(--color-muted)] italic leading-relaxed">
                {word.note}
              </p>
            </div>
          ))}
        </div>

        {/* Common totems */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Common Totems
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Mutupo</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell"></th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Common surnames</th>
              </tr>
            </thead>
            <tbody>
              {totems.map((totem, i) => (
                <tr
                  key={totem.shona}
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
                >
                  <td className="px-4 py-3 font-bold text-[var(--color-primary)]">
                    {totem.shona}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {totem.english}
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-xl">
                    {totem.animal}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden md:table-cell">
                    {totem.surnames}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cultural rules */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Rules & Meaning
        </h2>
        <div className="grid gap-6 mb-12">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
                {rule.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {rule.body}
              </p>
            </div>
          ))}
        </div>

        {/* Example introduction */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            Introducing yourself with your mutupo
          </h3>
          <div className="space-y-2">
            <p className="text-[var(--color-primary)] font-bold text-lg">
              "Mutupo wangu ndiShumba."
            </p>
            <p className="text-[var(--color-muted)] text-sm italic">
              "My totem is lion."
            </p>
          </div>
          <p className="text-[var(--color-text)] text-sm mt-4 leading-relaxed">
            Saying this to another Shona person immediately tells them your
            ancestral lineage, whether they should call you family, and whether
            you could ever marry within their clan. It is a greeting and a
            genealogy at once.
          </p>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/family/roora"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Roora
          </Link>
          <Link
            href="/courses/family"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            ← Back to course overview
          </Link>
        </div>
      </div>
    </div>
  );
}
