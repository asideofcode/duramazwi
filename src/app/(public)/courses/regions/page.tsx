import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Regional Variations in Shona | Duramazwi",
  description:
    "Explore the dialects of Shona — Zezuru, Karanga, Manyika, Korekore, and Ndau — and understand how regional variation shapes the language.",
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

const IconCity = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5H18.75a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5H18.75Zm-.75 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5H18.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconTower = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
    <path
      fillRule="evenodd"
      d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconMountain = () => (
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

const IconGlobe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
  </svg>
);

const IconBookOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
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
    href: "/courses/regions/zezuru",
    title: "Zezuru",
    shona: "ChiZezuru",
    description:
      "The dialect of Harare and the central plateau — and the basis of Standard Shona. Why Zezuru became the 'default', and what that means for other dialect speakers.",
    icon: <IconCity />,
    tag: "Start here",
  },
  {
    href: "/courses/regions/karanga",
    title: "Karanga",
    shona: "ChiKaranga",
    description:
      "The dialect of Masvingo, Great Zimbabwe, and the Rozvi people. Known for its distinct vocabulary and the deep pride of its speakers in their historical heartland.",
    icon: <IconTower />,
    tag: "Module 2",
  },
  {
    href: "/courses/regions/manyika",
    title: "Manyika",
    shona: "ChiManyika",
    description:
      "The dialect of Manicaland and eastern Zimbabwe — shaped by proximity to Mozambique and the mountains of Nyanga and Chimanimani.",
    icon: <IconMountain />,
    tag: "Module 3",
  },
  {
    href: "/courses/regions/korekore-ndau",
    title: "Korekore & Ndau",
    shona: "ChiKorekore neChiNdau",
    description:
      "Korekore from the north, Ndau from the far east — two dialects at the edges of Shona, where the language blurs into something else entirely.",
    icon: <IconGlobe />,
    tag: "Module 4",
  },
  {
    href: "/courses/regions/overview",
    title: "Understanding Dialects",
    shona: "Twasa — Kusanganisa",
    description:
      "Why dialects exist, how they relate to each other, what mutual intelligibility means in practice, and how a learner should approach regional variation.",
    icon: <IconBookOpen />,
    tag: "Module 5",
  },
];

export default function RegionsCoursePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="py-16 px-6 text-center bg-[var(--color-primary)]">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
          Shona Language Course
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-hero-text)]">
          Twasa
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-[var(--color-hero-text)] opacity-85">
          Regional Variations in Shona
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-[var(--color-hero-text)] opacity-75">
          Shona is not one dialect — it is a family of related ways of speaking,
          shaped by geography, history, and pride. From Harare&rsquo;s Zezuru
          to Masvingo&rsquo;s Karanga to the eastern mountains&rsquo; Manyika,
          each dialect carries a distinct identity. This course maps the
          differences and helps you navigate them.
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
            href="/courses/regions/challenges"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 transition-all hover:shadow-lg group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[var(--color-primary)]">
                  <IconPencil />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                  Regions Challenges
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                20 challenges — 8 beginner, 8 intermediate, 4 advanced —
                covering dialect identification, vocabulary comparison, and
                regional sentences.
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
