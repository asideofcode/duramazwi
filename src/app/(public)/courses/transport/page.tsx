import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nzira — Transportation & Travel in Shona | Duramazwi",
  description:
    "Learn how travel works in Shona culture — directions, public transport, village vs city travel, and asking for help.",
};

const IconMap = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconBus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H3.75a3 3 0 1 0 5.5 0h1.5a3 3 0 1 0 5.5 0h.175a1.875 1.875 0 0 0 1.875-1.875v-1.5H22.5V9.75A.75.75 0 0 0 21.75 9h-6.75a.75.75 0 0 0-.75.75v4.5h-1.5V15ZM6.75 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
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

const IconHand = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.008.39 1.456.68a5.25 5.25 0 0 1 2.44 4.469V18a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3.375a5.25 5.25 0 0 1 2.44-4.469 4.49 4.49 0 0 1 1.456-.68V1.875Z" />
    <path d="M4.875 5.625a1.125 1.125 0 0 0-1.125 1.125v5.625a3.75 3.75 0 0 0 3.75 3.75h.75V15a6.75 6.75 0 0 0 .563-2.686 6.726 6.726 0 0 0-1.688-4.469A2.626 2.626 0 0 0 6 6.75V6.75a1.125 1.125 0 0 0-1.125-1.125ZM19.125 5.625a1.125 1.125 0 0 1 1.125 1.125V12.375a3.75 3.75 0 0 1-3.75 3.75H15.75V15a6.75 6.75 0 0 1-.563-2.686 6.726 6.726 0 0 1 1.688-4.469A2.626 2.626 0 0 1 18 6.75V6.75a1.125 1.125 0 0 1 1.125-1.125Z" />
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
    href: "/courses/transport/directions",
    title: "Directions",
    shona: "Nzira",
    description:
      "Left, right, forward, back — and why Shona directions use landmarks more than street names.",
    icon: <IconMap />,
    tag: "Start here",
  },
  {
    href: "/courses/transport/public-transport",
    title: "Public Transport",
    shona: "Kombi neBhazi",
    description:
      "The kombi is Zimbabwe's heartbeat of public movement — learn how to ride it, how to pay, and how to know when to get off.",
    icon: <IconBus />,
    tag: "Module 2",
  },
  {
    href: "/courses/transport/village-city",
    title: "Village vs City Travel",
    shona: "Kumusha neGuta",
    description:
      "Going kumusha is one of Zimbabwe's most important annual journeys — the language of homecoming and rural travel.",
    icon: <IconHome />,
    tag: "Module 3",
  },
  {
    href: "/courses/transport/asking-help",
    title: "Asking for Help",
    shona: "Kukumbira Rubatsiro",
    description:
      "How to ask a stranger for directions — and why they will probably walk you there themselves.",
    icon: <IconHand />,
    tag: "Module 4",
  },
];

export default function TransportCoursePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="py-16 px-6 text-center bg-[var(--color-primary)]">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
          Shona Language Course
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-hero-text)]">
          Nzira
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-[var(--color-hero-text)] opacity-85">
          Transportation & Travel in Shona
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-[var(--color-hero-text)] opacity-75">
          In Zimbabwe, getting somewhere is rarely just about the journey. The
          kombi has its own culture, rural roads have their own rules, and a
          stranger will often walk you to your destination rather than just
          point. This course gives you the language and confidence to move
          through Zimbabwe on your own terms.
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
            href="/courses/transport/challenges"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 transition-all hover:shadow-lg group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[var(--color-primary)]">
                  <IconPencil />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                  Transport Challenges
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                30 challenges — 12 beginner, 12 intermediate, 6 advanced —
                covering all four modules. Practice direction words, transport
                vocabulary, and full travel interaction sentences.
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
