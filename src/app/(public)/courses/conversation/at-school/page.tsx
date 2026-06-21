import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "At School — Conversation in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary and dialogues for school life — asking teachers questions, talking with classmates, and navigating the school day.",
};

const vocabulary = [
  {
    shona: "Chikoro",
    english: "School",
    pronunciation: "chi-KOH-roh",
    example: "Ndinoenda kuchikoro mangwanani.",
    exampleTranslation: "I go to school in the morning.",
  },
  {
    shona: "Mudzidzi",
    english: "Student / Pupil",
    pronunciation: "moo-DZEE-dzee",
    example: "Vadzidzi vose vanogara mumba.",
    exampleTranslation: "All the students sit in the room.",
  },
  {
    shona: "Mudzidzisi",
    english: "Teacher",
    pronunciation: "moo-dzee-DZEE-see",
    example: "Mudzidzisi anodzidzisa Shona.",
    exampleTranslation: "The teacher teaches Shona.",
  },
  {
    shona: "Buku",
    english: "Book",
    pronunciation: "BOO-koo",
    example: "Ndinoda buku rangu.",
    exampleTranslation: "I need my book.",
  },
  {
    shona: "Bhegi / Chikwama",
    english: "Bag / School bag",
    pronunciation: "BEH-gee / chi-KWAH-mah",
    example: "Bhegi rangu riri pasi pemubhedha.",
    exampleTranslation: "My bag is under the bed.",
  },
  {
    shona: "Chikoro chekutanga",
    english: "Primary school",
    pronunciation: "chi-KOH-roh che-koo-TAN-gah",
    example: "Ndinoenda kuchikoro chekutanga.",
    exampleTranslation: "I go to primary school.",
  },
  {
    shona: "Chikoro chesekondari",
    english: "Secondary school",
    pronunciation: "chi-KOH-roh che-seh-kon-DAH-ree",
    example: "Mukoma wangu ari kuchikoro chesekondari.",
    exampleTranslation: "My older sibling is at secondary school.",
  },
  {
    shona: "Kunyora",
    english: "To write",
    pronunciation: "koo-NYOH-rah",
    example: "Ndiri kunyora mubvunzo.",
    exampleTranslation: "I am writing a question.",
  },
  {
    shona: "Kuverenga",
    english: "To read",
    pronunciation: "koo-veh-REHN-gah",
    example: "Bvunza mudzidzisi ukaverenga.",
    exampleTranslation: "Ask the teacher and then read.",
  },
  {
    shona: "Aritimeti",
    english: "Arithmetic / Maths",
    pronunciation: "ah-ree-tee-MEH-tee",
    example: "Ndinoda aritimeti.",
    exampleTranslation: "I like arithmetic.",
  },
  {
    shona: "Mureza",
    english: "Flag",
    pronunciation: "moo-REH-zah",
    example: "Mureza weZimbabwe wakakwira.",
    exampleTranslation: "The Zimbabwe flag was raised.",
  },
  {
    shona: "Handisi kunzwisisa",
    english: "I do not understand",
    pronunciation: "han-DEE-see koo-NZWEE-see-sah",
    example: "Handisi kunzwisisa mubvunzo uyu.",
    exampleTranslation: "I do not understand this question.",
  },
];

const dialogues = [
  {
    title: "Asking the Teacher a Question",
    shona: "Kubvunza Mudzidzisi",
    lines: [
      { speaker: "Student", shona: "Mudzidzisi, ndingabvunza here?", english: "Teacher, may I ask?" },
      { speaker: "Teacher", shona: "Ehee, bvunza.", english: "Yes, go ahead and ask." },
      { speaker: "Student", shona: "Handisi kunzwisisa chikamu chechipiri. Mungandidzidzisa here?", english: "I do not understand part two. Could you teach me?" },
      { speaker: "Teacher", shona: "Zvakanaka. Tora buku rako uuye pano.", english: "Good. Take your book and come here." },
      { speaker: "Student", shona: "Maita basa, Mudzidzisi.", english: "Thank you, teacher." },
    ],
  },
  {
    title: "Asking a Classmate for Help",
    shona: "Kubvunza Shamwari",
    lines: [
      { speaker: "Student A", shona: "Shamwari, uri kunyora chii?", english: "Friend, what are you writing?" },
      { speaker: "Student B", shona: "Ndiri kunyora mhinduro yemubvunzo wechitatu.", english: "I am writing the answer to question three." },
      { speaker: "Student A", shona: "Ungandiudza here? Ndabva ndasangana nematambudziko.", english: "Could you tell me? I have been having difficulty." },
      { speaker: "Student B", shona: "Hongu, tarisa — unofanira kutanga neichi.", english: "Yes, look — you need to start with this." },
      { speaker: "Student A", shona: "Ndinokuonga. Wakandidzidzisa zvakanaka.", english: "I thank you. You have taught me well." },
    ],
  },
  {
    title: "End of the School Day",
    shona: "Kupedza Chikoro",
    lines: [
      { speaker: "Teacher", shona: "Tasvika pakupedzera nhasi. Endai zvakanaka.", english: "We have reached the end for today. Go well." },
      { speaker: "Students", shona: "Maita basa, Mudzidzisi. Chisarai zvakanaka!", english: "Thank you, teacher. Stay well!" },
      { speaker: "Student A", shona: "Shamwari, uchaenda sei kumba?", english: "Friend, how will you get home?" },
      { speaker: "Student B", shona: "Ndichafamba — kumba kwangu kwiri pedyo.", english: "I will walk — my home is nearby." },
      { speaker: "Student A", shona: "Sezvandinoenda. Tionana mangwana!", english: "Same for me. See you tomorrow!" },
    ],
  },
];

const culturalNotes = [
  {
    heading: "Education is deeply valued",
    body: "Education is deeply valued by Shona families — significant sacrifices are made to keep children in school. Talking about school performance, teacher relationships, and school activities is common family conversation.",
  },
  {
    heading: "Respect for teachers",
    body: "Teachers are addressed respectfully — using imi (formal plural you) rather than iwe. A student who speaks disrespectfully to a teacher brings shame on their family.",
  },
  {
    heading: "The national anthem",
    body: "The Zimbabwean national anthem — Simudzai Mureza weZimbabwe — is sung in Shona, English, and Ndebele. It is sung at school assemblies and is a point of pride and national identity.",
  },
];

export default function AtSchoolPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/conversation"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Conversation Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            At School
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuchikoro
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            For most Shona children and young people, school is where they
            spend the majority of their speaking hours. This module covers the
            words and conversations that fill the school day — from asking a
            teacher a question to saying goodbye to a classmate at the gate.
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

        {/* Dialogues */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Dialogues
        </h2>
        <div className="grid gap-6 mb-10">
          {dialogues.map((dialogue) => (
            <div
              key={dialogue.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] overflow-hidden"
            >
              <div className="bg-[var(--color-surface)] px-6 py-4 border-b border-[var(--color-border)]">
                <h3 className="font-bold text-[var(--color-text)]">
                  {dialogue.title}
                </h3>
                <p className="text-sm italic text-[var(--color-accent)] mt-0.5">
                  {dialogue.shona}
                </p>
              </div>
              <div className="p-6 grid gap-3">
                {dialogue.lines.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-xs font-semibold text-[var(--color-muted)] w-20 shrink-0 pt-0.5">
                      {line.speaker}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--color-primary)] text-sm">
                        {line.shona}
                      </p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">
                        {line.english}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes
          </h3>
          <div className="grid gap-4">
            {culturalNotes.map((note) => (
              <div
                key={note.heading}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-2">
                  {note.heading}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/conversation/at-home"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← At Home
          </Link>
          <Link
            href="/courses/conversation/at-work"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: At Work →
          </Link>
        </div>
      </div>
    </div>
  );
}
