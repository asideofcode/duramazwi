import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ukama — Relationships & Community in Shona | Duramazwi",
  description:
    "Learn how relationships and community work in Shona culture — friendship, neighbours, social obligations, and the communal support systems that bind Shona society together.",
};

const IconHandshake = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M13.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM7.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    <path
      fillRule="evenodd"
      d="M3 8.25A.75.75 0 0 1 3.75 7.5h1.72l1.185-2.962A.75.75 0 0 1 7.35 4.1l3.9 1.56L14.85 4.1a.75.75 0 0 1 .695.138l1.685 1.416.015.012 1.048.818a.75.75 0 0 1-.93 1.178l-.973-.759L15 8.159v.091A3.75 3.75 0 0 1 12 12a3.75 3.75 0 0 1-3-1.5H8.25A2.25 2.25 0 0 0 6 12.75v.75h12v-.75a2.25 2.25 0 0 0-2.25-2.25H15a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h.25l1.8-1.439-2.1-.84-3.45 1.38a.75.75 0 0 1-.55 0l-3.45-1.38-1.114 2.784A.75.75 0 0 1 5.75 9H3.75A.75.75 0 0 1 3 8.25Z"
      clipRule="evenodd"
    />
    <path d="M5.25 13.5a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V15h9v2.25a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75H5.25Z" />
  </svg>
);

const IconHome2 = () => (
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

const IconScale = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.545.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.491H6.957l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.875 18a6.67 6.67 0 0 1-2.932-.545.75.75 0 0 1-.375-.84L5.043 6.491H3.125a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconUsers = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
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
    href: "/courses/community/friendship",
    title: "Friendship",
    shona: "Ushamwari",
    description:
      "Shamwari, Mubvandiripo, and Kubatana — the vocabulary of deep Shona friendship and the mutual obligations that come with it.",
    icon: <IconHandshake />,
    tag: "Start here",
  },
  {
    href: "/courses/community/neighbours",
    title: "Neighbours",
    shona: "Vavakidzani",
    description:
      "How neighbours in Shona culture are far more than people who live nearby — and what you owe each other.",
    icon: <IconHome2 />,
    tag: "Module 2",
  },
  {
    href: "/courses/community/social-obligations",
    title: "Respect & Social Obligations",
    shona: "Kuremekedza neZvakanaka",
    description:
      "The duties that hold communities together — funerals, weddings, ceremonies, and the concept of hunhu/ubuntu.",
    icon: <IconScale />,
    tag: "Module 3",
  },
  {
    href: "/courses/community/community-support",
    title: "Community Support Systems",
    shona: "Nhimbe neJangano",
    description:
      "Nhimbe work parties, Jangano savings clubs, and Zunde raMambo — how Shona communities look after their own.",
    icon: <IconUsers />,
    tag: "Module 4",
  },
];

export default function CommunityCoursePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="py-16 px-6 text-center bg-[var(--color-primary)]">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
          Shona Language Course
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-hero-text)]">
          Ukama
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-[var(--color-hero-text)] opacity-85">
          Relationships &amp; Community in Shona
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-[var(--color-hero-text)] opacity-75">
          In Shona culture, no person stands alone. Friendships carry real
          obligations, neighbours participate in each other's lives, and
          community systems exist to ensure nobody suffers without support. This
          course gives you the language — and the understanding — to navigate
          Shona community life.
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
            href="/courses/community/challenges"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 transition-all hover:shadow-lg group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[var(--color-primary)]">
                  <IconPencil />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                  Community Challenges
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                30 challenges — 12 beginner, 12 intermediate, 6 advanced — covering
                all four modules. Study the full list or use it to review before
                the daily challenge.
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
