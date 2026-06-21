import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ngano — Folktales & Storytelling in Shona | Duramazwi",
  description:
    "Explore the rich world of Shona folktales — the stories, the morals, the characters, and the living oral tradition that has shaped Shona culture for generations.",
};

const IconBook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
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
      d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z"
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
    href: "/courses/folktales/traditional-stories",
    title: "Traditional Stories",
    shona: "Ngano dzeKare",
    description:
      "Meet the characters of Shona folktales — the clever hare, the proud lion, the greedy hyena — and discover the classic ngano that have shaped Shona culture for generations.",
    icon: <IconBook />,
    tag: "Start here",
  },
  {
    href: "/courses/folktales/moral-lessons",
    title: "Moral Lessons in Ngano",
    shona: "Pfundo dzeMangano",
    description:
      "Ngano are not just stories — they are a school of values. Explore the six core moral themes that Shona folktales encode and how they are transmitted to each generation.",
    icon: <IconScale />,
    tag: "Module 2",
  },
  {
    href: "/courses/folktales/storytelling-traditions",
    title: "Storytelling Traditions",
    shona: "Tsika dzeKurondedzera Ngano",
    description:
      "Fire, night, call-and-response, gesture, and voice. Understand the living performance tradition behind ngano — and how it is being kept alive today.",
    icon: <IconFire />,
    tag: "Module 3",
  },
];

export default function FolktalesCoursePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="py-16 px-6 text-center bg-[var(--color-primary)]">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
          Shona Language Course
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-hero-text)]">
          Ngano
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-[var(--color-hero-text)] opacity-85">
          Folktales &amp; Storytelling
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-[var(--color-hero-text)] opacity-75">
          Before there were books, there was the fire. Shona folktales — ngano —
          were told in the evenings to children gathered around the flame. Through
          the clever hare, the greedy hyena, and the generous poor man, whole
          worlds of wisdom were passed down. This course opens those stories and
          the language inside them.
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
            href="/courses/folktales/challenges"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 transition-all hover:shadow-lg group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[var(--color-primary)]">
                  <IconPencil />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                  Folktales Challenges
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                20 challenges — 8 beginner, 8 intermediate, 4 advanced — covering
                ngano vocabulary, character identification, moral themes, and
                storytelling phrases.
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
