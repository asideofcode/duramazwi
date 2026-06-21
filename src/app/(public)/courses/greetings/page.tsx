import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kutaura — Greetings & Introductions in Shona | Duramazwi",
  description:
    "Learn how to greet, introduce yourself, and express politeness in Shona — from basic hellos to formal elder greetings and farewells.",
};

const IconSpeechBubble = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconClock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconUserCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconMapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.079 3.952-5.451 3.952-9.486a8.25 8.25 0 0 0-16.5 0c0 4.035 2.007 7.407 3.952 9.486a19.58 19.58 0 0 0 2.683 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
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
    <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.009.443 1.43.811l4.55-4.551a1.125 1.125 0 0 1 1.59 1.591l-4.55 4.551a5.25 5.25 0 0 1 .044 2.083l4.505 4.505a1.125 1.125 0 0 1-1.591 1.591l-4.506-4.505a5.25 5.25 0 0 1-7.975-4.544V1.875Z" />
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
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z"
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
    href: "/courses/greetings/basic-greetings",
    title: "Basic Greetings",
    shona: "Kutaura Kwakajairwa",
    description:
      "Morning, afternoon, evening — and the everyday exchanges of Ndiripo and Zvakanaka. The foundation of every Shona conversation.",
    icon: <IconSpeechBubble />,
    tag: "Start here",
  },
  {
    href: "/courses/greetings/formal-informal",
    title: "Formal vs Informal",
    shona: "Imi naIwe",
    description:
      "When to use Imi (respectful you) and when Iwe (informal you) — a distinction that runs through all Shona speech, not just greetings.",
    icon: <IconClock />,
    tag: "Module 2",
  },
  {
    href: "/courses/greetings/greeting-elders",
    title: "Greeting Elders",
    shona: "Kukwazisa Vakuru",
    description:
      "Clapping hands, kneeling, and eye contact — the bodily language of respect when greeting grandparents, uncles, and village elders.",
    icon: <IconHand />,
    tag: "Module 3",
  },
  {
    href: "/courses/greetings/introductions",
    title: "Introducing Yourself",
    shona: "Kuzvizivisa",
    description:
      "My name is, I am called, I am happy to meet you — plus why sharing your mutupo (totem) is part of a traditional introduction.",
    icon: <IconUserCircle />,
    tag: "Module 4",
  },
  {
    href: "/courses/greetings/origins",
    title: "Asking Where Someone Is From",
    shona: "Unobvepi?",
    description:
      "Kumusha (the home village) is one of the most important questions in Shona conversation — learn to ask and answer with confidence.",
    icon: <IconMapPin />,
    tag: "Module 5",
  },
  {
    href: "/courses/greetings/polite-expressions",
    title: "Polite Expressions",
    shona: "Mazwi Erudo",
    description:
      "Thank you, excuse me, no problem, and the elaborate Shona farewell — different words for the one leaving and the one staying.",
    icon: <IconStar />,
    tag: "Module 6",
  },
];

export default function GreetingsCoursePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="py-16 px-6 text-center bg-[var(--color-primary)]">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
          Shona Language Course
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-hero-text)]">
          Kutaura
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-[var(--color-hero-text)] opacity-85">
          Greetings &amp; Introductions
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-[var(--color-hero-text)] opacity-75">
          In Shona culture, passing someone without greeting them is rude —
          even strangers. Greeting is not small talk; it is how you show that
          another person exists to you. This course teaches you the words and
          the etiquette behind every Shona hello.
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
            href="/courses/greetings/challenges"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 transition-all hover:shadow-lg group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[var(--color-primary)]">
                  <IconPencil />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                  Greetings Challenges
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                30 challenges — 12 beginner, 12 intermediate, 6 advanced —
                covering all six modules. Study the full list or drill a
                specific difficulty before the daily challenge.
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
