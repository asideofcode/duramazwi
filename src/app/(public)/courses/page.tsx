import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Language Courses | Duramazwi",
  description:
    "A full structured path to Shona fluency — from basic greetings to advanced proverbs, culture, and regional variations.",
};

type CourseStatus = "available" | "coming-soon";

type Course = {
  slug: string;
  title: string;
  shona: string;
  description: string;
  modules: number;
  challenges: number;
  status: CourseStatus;
};

type Tier = {
  label: string;
  courses: Course[];
};

const tiers: Tier[] = [
  {
    label: "Beginner Foundation",
    courses: [
      {
        slug: "greetings",
        title: "Greetings & Introductions",
        shona: "Kutaura neKukwazisana",
        description:
          "Basic greetings, formal vs informal address, greeting elders, introducing yourself, and common polite expressions.",
        modules: 6,
        challenges: 40,
        status: "available",
      },
      {
        slug: "pronunciation",
        title: "Pronunciation & Reading",
        shona: "Kutaura Zvakanaka",
        description:
          "The Shona alphabet, pronunciation rules, common spelling patterns, and the role of tone in meaning.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "numbers",
        title: "Numbers & Basic Math",
        shona: "Nhamba",
        description:
          "Numbers 1–100, counting objects, money, prices, and basic bargaining vocabulary.",
        modules: 5,
        challenges: 40,
        status: "available",
      },
      {
        slug: "time",
        title: "Time & Dates",
        shona: "Nguva",
        description:
          "Days of the week, months, seasons, telling time, and talking about past and future events.",
        modules: 6,
        challenges: 40,
        status: "available",
      },
    ],
  },
  {
    label: "Daily Life",
    courses: [
      {
        slug: "food",
        title: "Food & Drink",
        shona: "Zvokudya neZvokunwa",
        description:
          "Traditional foods, ingredients, cooking vocabulary, ordering food, eating customs, and Shona hospitality traditions.",
        modules: 6,
        challenges: 40,
        status: "available",
      },
      {
        slug: "home",
        title: "Home & Household",
        shona: "Musha",
        description:
          "Rooms of the house, furniture, chores, and daily routines in a Shona household.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "shopping",
        title: "Shopping & Markets",
        shona: "Kutengesa neTengesha",
        description:
          "Market vocabulary, negotiation and prices, common products, and cultural expectations in Zimbabwean markets.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "transport",
        title: "Transportation & Travel",
        shona: "Rwendo",
        description:
          "Directions, public transport, village vs city travel, and asking for help when navigating.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
    ],
  },
  {
    label: "Family & Relationships",
    courses: [
      {
        slug: "family",
        title: "Family",
        shona: "Mhuri",
        description:
          "Immediate family, extended family, in-laws, roora (bride wealth), and the mutupo totem clan system.",
        modules: 5,
        challenges: 90,
        status: "available",
      },
      {
        slug: "community",
        title: "Relationships & Community",
        shona: "Ukama neMusha",
        description:
          "Friendship, neighbours, respect and social obligations, and community support systems.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "parenting",
        title: "Children & Parenting",
        shona: "Vana neVabereki",
        description:
          "Raising children in Shona culture, respect for elders, family roles, and the language of childhood.",
        modules: 3,
        challenges: 20,
        status: "available",
      },
    ],
  },
  {
    label: "Culture & Customs",
    courses: [
      {
        slug: "respect",
        title: "Respect & Etiquette",
        shona: "Tsika neKudza",
        description:
          "Respecting elders, body language, visiting homes, gift giving, and appropriate greetings in different contexts.",
        modules: 5,
        challenges: 30,
        status: "available",
      },
      {
        slug: "ceremonies",
        title: "Traditional Ceremonies",
        shona: "Mabiko eMaShona",
        description:
          "Birth ceremonies, weddings, funerals, and memorial ceremonies — the language and customs of life's major events.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "religion",
        title: "Religion & Spirituality",
        shona: "Chitendero",
        description:
          "Traditional Shona beliefs, the role of ancestors (vadzimu), the intersection of Christianity and tradition, and modern religious practice.",
        modules: 4,
        challenges: 20,
        status: "available",
      },
      {
        slug: "leadership",
        title: "Traditional Leadership",
        shona: "Ushe",
        description:
          "Chiefs (madzishe), headmen, community governance, and how conflict is resolved in traditional Shona society.",
        modules: 4,
        challenges: 20,
        status: "available",
      },
    ],
  },
  {
    label: "Language Development",
    courses: [
      {
        slug: "verbs",
        title: "Common Verbs",
        shona: "Madzina eMabasa",
        description:
          "Everyday actions, verb conjugation patterns, and tenses — the building blocks of Shona sentences.",
        modules: 3,
        challenges: 40,
        status: "available",
      },
      {
        slug: "conversation",
        title: "Conversation Practice",
        shona: "Kutaura",
        description:
          "Practical dialogues at home, at school, at work, in church, and in the village.",
        modules: 5,
        challenges: 40,
        status: "available",
      },
      {
        slug: "emotions",
        title: "Emotions & Feelings",
        shona: "Manzwiro",
        description:
          "Expressing happiness, sadness, anger, love, and gratitude — the emotional vocabulary of Shona.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "health",
        title: "Health & Body",
        shona: "Utano neMuviri",
        description:
          "Body parts, common illnesses, visiting a clinic, and the vocabulary of traditional healing.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
    ],
  },
  {
    label: "Advanced Cultural Understanding",
    courses: [
      {
        slug: "proverbs",
        title: "Shona Proverbs",
        shona: "Tsumo",
        description:
          "Classic Shona proverbs (tsumo), their meanings, usage in everyday speech, and the cultural lessons they carry.",
        modules: 3,
        challenges: 30,
        status: "available",
      },
      {
        slug: "idioms",
        title: "Idioms & Expressions",
        shona: "Mafaniro eTaura",
        description:
          "Common idiomatic sayings, figurative language, and expressions that don't translate literally.",
        modules: 3,
        challenges: 30,
        status: "available",
      },
      {
        slug: "folktales",
        title: "Folktales & Storytelling",
        shona: "Ngano",
        description:
          "Traditional Shona stories (ngano), the moral lessons they teach, and the art of storytelling.",
        modules: 3,
        challenges: 20,
        status: "available",
      },
      {
        slug: "music",
        title: "Shona Music & Dance",
        shona: "Mimhanzi neNhimbe",
        description:
          "Traditional instruments (mbira, hosho), songs, dance styles, and the cultural significance of music in Shona life.",
        modules: 4,
        challenges: 20,
        status: "available",
      },
      {
        slug: "history",
        title: "History of the Shona People",
        shona: "Nhoroondo",
        description:
          "Origins, the great Shona kingdoms, Great Zimbabwe, colonial history, and the modern Shona experience.",
        modules: 4,
        challenges: 20,
        status: "available",
      },
      {
        slug: "regions",
        title: "Regional Variations",
        shona: "Marudzi eMaShona",
        description:
          "How Shona varies between Zezuru, Karanga, Manyika, Korekore, and Ndau — vocabulary differences and regional pronunciation.",
        modules: 5,
        challenges: 20,
        status: "available",
      },
    ],
  },
  {
    label: "Practical Fluency",
    courses: [
      {
        slug: "workplace",
        title: "Work & School",
        shona: "Basa neChechi",
        description:
          "Vocabulary and conversations for the workplace, the classroom, and professional settings.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "social",
        title: "Social Life & Relationships",
        shona: "Ukahana",
        description:
          "Dating, friendship, church, and village social life — the language of living alongside others.",
        modules: 4,
        challenges: 30,
        status: "available",
      },
      {
        slug: "visiting",
        title: "Visiting Zimbabwe",
        shona: "Kuenda kuZimbabwe",
        description:
          "Practical language for travelling to Zimbabwe, hosting guests, navigating unfamiliar settings, and making a good impression.",
        modules: 4,
        challenges: 20,
        status: "available",
      },
      {
        slug: "modern",
        title: "Modern & Digital Shona",
        shona: "Shona yeNhasi",
        description:
          "Phone conversations, social media language, texting in Shona, and how the language adapts to modern contexts.",
        modules: 3,
        challenges: 20,
        status: "available",
      },
    ],
  },
];

const learningPath = [
  { step: 1, slug: "greetings", tier: "Beginner Foundation" },
  { step: 2, slug: "pronunciation", tier: "Beginner Foundation" },
  { step: 3, slug: "numbers", tier: "Beginner Foundation" },
  { step: 4, slug: "time", tier: "Beginner Foundation" },
  { step: 5, slug: "family", tier: "Family & Relationships" },
  { step: 6, slug: "food", tier: "Daily Life" },
  { step: 7, slug: "home", tier: "Daily Life" },
  { step: 8, slug: "shopping", tier: "Daily Life" },
  { step: 9, slug: "verbs", tier: "Language Development" },
  { step: 10, slug: "conversation", tier: "Language Development" },
  { step: 11, slug: "respect", tier: "Culture & Customs" },
  { step: 12, slug: "ceremonies", tier: "Culture & Customs" },
  { step: 13, slug: "proverbs", tier: "Advanced Cultural Understanding" },
  { step: 14, slug: "idioms", tier: "Advanced Cultural Understanding" },
  { step: 15, slug: "history", tier: "Advanced Cultural Understanding" },
  { step: 16, slug: "regions", tier: "Advanced Cultural Understanding" },
];

const allCourses = tiers.flatMap((t) => t.courses);

function getCourse(slug: string) {
  return allCourses.find((c) => c.slug === slug)!;
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="px-4 pt-6 pb-4 sm:px-6 max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
          <div className="relative overflow-hidden bg-[var(--color-primary)] px-6 py-10 text-[var(--color-hero-text)] sm:px-10 sm:py-12">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[var(--color-accent)]" />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-[var(--color-danger)]" />
            <div className="relative z-10">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
                Duramazwi
              </p>
              <h1 className="text-4xl font-black tracking-normal md:text-5xl mb-3">
                Shona Courses
              </h1>
              <p className="text-lg leading-relaxed text-[var(--color-hero-text)]/85 max-w-xl">
                Structured lessons built for real understanding — vocabulary,
                grammar, culture, and context together.{" "}
                {allCourses.length} courses from beginner to fluency.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10">

        {/* Suggested Learning Path */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-1">
            Suggested Learning Path
          </h2>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            New to Shona? Follow this order for a solid foundation before exploring other topics.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {learningPath.map(({ step, slug }) => {
              const course = getCourse(slug);
              return (
                <Link
                  key={slug}
                  href={`/courses/${slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-all hover:shadow-[var(--shadow-card)]"
                >
                  <span className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-[var(--color-hero-text)] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {step}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)] group-hover:underline leading-snug">
                      {course.title}
                    </p>
                    <p className="text-xs text-[var(--color-muted)] mt-0.5 italic">
                      {course.shona}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* All courses by tier */}
        {tiers.map((tier) => (
          <div key={tier.label} className="mb-12">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-5">
              {tier.label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {tier.courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 transition-all hover:shadow-[var(--shadow-card)] overflow-hidden"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-base font-bold text-[var(--color-text)] group-hover:underline">
                        {course.title}
                      </h3>
                      {course.slug === "family" && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-primary)] text-[var(--color-hero-text)] shrink-0">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium italic text-[var(--color-accent)] mb-2">
                      {course.shona}
                    </p>
                    <p className="text-xs leading-relaxed text-[var(--color-muted)] mb-3">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                      <span>
                        <span className="font-bold text-[var(--color-text)]">
                          {course.modules}
                        </span>{" "}
                        modules
                      </span>
                      <span>
                        <span className="font-bold text-[var(--color-text)]">
                          {course.challenges}
                        </span>{" "}
                        challenges
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center shrink-0">
                    <span className="text-sm font-semibold text-[var(--color-primary)] group-hover:underline whitespace-nowrap">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Daily challenge CTA */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
            Not ready for a full course?
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
            Try the daily challenge — a short set of questions covering vocabulary,
            translation, and Shona culture. New challenges every day.
          </p>
          <Link
            href="/challenge/daily"
            className="inline-block theme-button-accent border-b-4 px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-95 transition-all shadow"
          >
            Take today&apos;s challenge →
          </Link>
        </div>
      </div>
    </div>
  );
}
