import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Chikafu — Food & Drink in Shona | Duramazwi",
  description:
    "Learn how food works in Shona culture — traditional dishes, ingredients, cooking vocabulary, ordering food, eating customs, and the deep tradition of hospitality.",
};

const IconBowl = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M11 2a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3V2Z" />
    <path
      fillRule="evenodd"
      d="M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 .97 1.242l-1.5 6A1 1 0 0 1 18.5 16h-13a1 1 0 0 1-.97-.758l-1.5-6A1 1 0 0 1 3 9Zm2.44 5h13.12l1-4H4.44l1 4Z"
      clipRule="evenodd"
    />
    <path d="M6 18a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H6Z" />
  </svg>
);

const IconLeaf = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconFire = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconHand = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.006.382 1.466.659V7.5a1.125 1.125 0 0 1 2.25 0v3.131a5.976 5.976 0 0 1 .95 2.37h.55a1.125 1.125 0 0 1 0 2.25H16.5v.109a1.125 1.125 0 0 1-1.125 1.125h-7.5A1.125 1.125 0 0 1 6.75 15v-.109H5.25a1.125 1.125 0 0 1 0-2.25h.55a5.977 5.977 0 0 1 .95-2.37V7.5a1.125 1.125 0 0 1 2.25 0v3.153c.46-.277.949-.497 1.466-.659V1.875Z" />
  </svg>
);

const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
  </svg>
);

const IconPencil = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
  </svg>
);

const modules: {
  href: string;
  title: string;
  shona: string;
  description: string;
  icon: ReactNode;
  tag: string;
}[] = [
  {
    href: "/courses/food/traditional-foods",
    title: "Traditional Foods",
    shona: "Zvokudya Zvechivanhu",
    description:
      "Sadza, muriwo, dovi, matemba, and more — the essential dishes every Shona household knows, and why sadza is not a side dish.",
    icon: <IconBowl />,
    tag: "Start here",
  },
  {
    href: "/courses/food/ingredients",
    title: "Ingredients",
    shona: "Zvinhu Zvekubikira",
    description:
      "Pumpkin leaves, groundnuts, maize, fish, and the building blocks of Shona cooking — what grows in the garden and what goes in the pot.",
    icon: <IconLeaf />,
    tag: "Module 2",
  },
  {
    href: "/courses/food/cooking",
    title: "Cooking Vocabulary",
    shona: "Mazwi Ekubika",
    description:
      "How to stir, simmer, and serve — verbs and nouns for the fire, the pot, and the cooking stones that have not changed in generations.",
    icon: <IconFire />,
    tag: "Module 3",
  },
  {
    href: "/courses/food/ordering",
    title: "Ordering Food",
    shona: "Kukumbira Zvokudya",
    description:
      "Ask for what you want, say when you are hungry, find out the price, and know when you have had enough.",
    icon: <IconStar />,
    tag: "Module 4",
  },
  {
    href: "/courses/food/customs",
    title: "Eating Customs",
    shona: "Tsika Dzekudya",
    description:
      "Who eats first, how to thank the cook, why men and women may eat separately, and the right words to say after a meal.",
    icon: <IconHand />,
    tag: "Module 5",
  },
  {
    href: "/courses/food/hospitality",
    title: "Hospitality Traditions",
    shona: "Tsika Dzekunamatira Vaeni",
    description:
      "Water before words, food before farewell — the deep Shona obligation to feed any visitor and what it means to leave a guest hungry.",
    icon: <IconHome />,
    tag: "Module 6",
  },
];

export default function FoodCoursePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-12 px-6 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
          Shona Language Course
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-hero-text)]">
          Chikafu
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-[var(--color-hero-text)] opacity-85">
          Food &amp; Drink in Shona
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-[var(--color-hero-text)] opacity-75">
          In Shona culture, feeding someone is an act of love, respect, and
          identity. Sadza is not a side dish — it is the meal. A guest who
          leaves hungry has shamed the host. This course gives you the language
          to talk about food, cook it, order it, and share it the Shona way.
        </p>
      </div>

      {/* Modules */}
      <div className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold mb-8 text-[var(--color-text)]">
          Course Modules
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-all hover:shadow-lg overflow-hidden"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-[var(--color-primary)]">{mod.icon}</div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                    {mod.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-[var(--color-text)] group-hover:underline">
                  {mod.title}
                </h3>
                <p className="text-sm font-medium mb-3 italic text-[var(--color-accent)]">
                  {mod.shona}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {mod.description}
                </p>
              </div>
              <div className="px-6 py-3 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--color-primary)]">
                  Start lesson →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Challenges CTA */}
        <div className="mt-10">
          <Link
            href="/courses/food/challenges"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 transition-all hover:shadow-lg group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[var(--color-primary)]">
                  <IconPencil />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                  Food &amp; Drink Challenges
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                40 challenges — 16 beginner, 14 intermediate, 10 advanced —
                covering all six modules. Study the full list or use it to
                review before the daily challenge.
              </p>
            </div>
            <span className="text-sm font-semibold whitespace-nowrap text-[var(--color-primary)]">
              View challenges →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
