import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In the Classroom in Shona | Duramazwi",
  description:
    "Learn Shona for the classroom — teachers, students, questions, answers, and the deep cultural respect for education in Zimbabwe.",
};

const vocabulary = [
  {
    shona: "Chikoro",
    english: "School",
    pronunciation: "chee-KOH-roh",
    example: "Ndinoenda kuchikoro.",
    exampleTranslation: "I go to school.",
  },
  {
    shona: "Kirasi",
    english: "Class / Classroom",
    pronunciation: "kee-RAH-see",
    example: "Vana vari mukirasi.",
    exampleTranslation: "The children are in the classroom.",
  },
  {
    shona: "Mudzidzisi",
    english: "Teacher",
    pronunciation: "moo-dzee-DZEE-see",
    example: "Mudzidzisi wedu akanaka.",
    exampleTranslation: "Our teacher is good.",
  },
  {
    shona: "Mudzidzi",
    english: "Student / Pupil",
    pronunciation: "moo-DZEE-dzee",
    example: "Mudzidzi uyu anozvida.",
    exampleTranslation: "This student is hardworking.",
  },
  {
    shona: "Buku",
    english: "Book",
    pronunciation: "BOO-koo",
    example: "Ndinoda buku rangu.",
    exampleTranslation: "I need my book.",
  },
  {
    shona: "Bhegi",
    english: "School bag",
    pronunciation: "BHEH-gee",
    example: "Bhegi rangu riri kumba.",
    exampleTranslation: "My school bag is at home.",
  },
  {
    shona: "Chokwadi",
    english: "Truth / Correct answer",
    pronunciation: "choh-KWAH-dee",
    example: "Ndiyo chokwadi.",
    exampleTranslation: "That is the truth / correct answer.",
  },
  {
    shona: "Mhinduro",
    english: "Answer",
    pronunciation: "mhin-DOO-roh",
    example: "Mhinduro yako yakangwara.",
    exampleTranslation: "Your answer is clever.",
  },
  {
    shona: "Mubvunzo",
    english: "Question",
    pronunciation: "moo-BVOON-zoh",
    example: "Ndinomubvunzo.",
    exampleTranslation: "I have a question.",
  },
  {
    shona: "Boredi",
    english: "Blackboard",
    pronunciation: "boh-REH-dee",
    example: "Nyora paboredi.",
    exampleTranslation: "Write on the blackboard.",
  },
  {
    shona: "Chokisi",
    english: "Chalk",
    pronunciation: "choh-KEE-see",
    example: "Ndinoda chokisi chichena.",
    exampleTranslation: "I need white chalk.",
  },
  {
    shona: "Penzi",
    english: "Pen / Pencil",
    pronunciation: "PEN-zee",
    example: "Ndinoda penzi rangu.",
    exampleTranslation: "I need my pen.",
  },
  {
    shona: "Zvichida",
    english: "Maybe / Perhaps",
    pronunciation: "zvee-CHEE-dah",
    example: "Zvichida mhinduro ndiyo.",
    exampleTranslation: "Maybe that is the answer.",
  },
  {
    shona: "Handizivi",
    english: "I don't know",
    pronunciation: "han-dee-ZEE-vee",
    example: "Handizivi mhinduro.",
    exampleTranslation: "I don't know the answer.",
  },
  {
    shona: "Ndinoziva",
    english: "I know",
    pronunciation: "ndee-noh-ZEE-vah",
    example: "Ndinoziva mhinduro.",
    exampleTranslation: "I know the answer.",
  },
];

const keyPhrases = [
  {
    shona: "Ndipfidze...",
    english: "Please teach me...",
    notes: "The respectful way to ask a teacher to explain or demonstrate something.",
  },
  {
    shona: "Handanzwisisi",
    english: "I don't understand",
    notes: "Direct and honest — Shona classroom culture welcomes admitting confusion rather than pretending to understand.",
  },
  {
    shona: "Nzwirii zvekare",
    english: "Say it again please",
    notes: "Used when you missed something or need repetition — the word 'zvekare' softens the request.",
  },
  {
    shona: "Zviri right here?",
    english: "Is this correct?",
    notes: "A natural code-switch mixing Shona and English — very common in Zimbabwean classrooms.",
  },
  {
    shona: "Ndibvudzei",
    english: "Ask me (I'm ready to answer)",
    notes: "A confident phrase — the student signals willingness and readiness to respond.",
  },
  {
    shona: "Ndipe nguva",
    english: "Give me time",
    notes: "A polite way to say you need a moment to think before answering.",
  },
];

const culturalNotes = [
  {
    title: "Education is a family sacrifice",
    body: "School fees in Zimbabwe are not taken lightly — parents and extended family contribute, scrimp, and sacrifice to keep children in school. A child who wastes that investment is not just failing themselves; they are failing everyone who contributed. This creates real pressure, but also real motivation.",
  },
  {
    title: "Teachers are addressed formally",
    body: "First names for teachers are rare. 'Mudzidzisi' (teacher) or 'Teacher' in English is standard. Titles like 'Miss', 'Sir', 'Ma'am', and 'Mr/Mrs' remain in everyday classroom use across Zimbabwe's schools, regardless of whether the lesson is in English or Shona.",
  },
  {
    title: "Standing when a teacher enters",
    body: "In many Zimbabwean schools, students still stand when a teacher enters the room. The class monitor calls out 'Stand!' and the class says 'Good morning, teacher' in unison before being told to sit. This is a living practice, not a historical curiosity.",
  },
  {
    title: "School does not excuse chores",
    body: "After-school household responsibilities are expected. Fetching water, cooking, looking after younger siblings — these do not wait. Balancing school with household duties is a normal part of life for most Zimbabwean children, especially in rural areas.",
  },
];

export default function ClassroomPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/workplace"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Work &amp; School Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 2
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            In the Classroom
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Mukirasi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The classroom in Zimbabwe is a place of enormous cultural weight. It
            is where generations of Zimbabweans have broken out of poverty,
            built careers, and made their families proud. Knowing how to
            navigate it — the language of teachers, questions, and answers — is
            practical knowledge whether you are a student, a parent, or simply
            curious about how Shona education works.
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
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Pronunciation</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Example</th>
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

        {/* Key Phrases */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Key Classroom Phrases
        </h2>
        <div className="grid gap-4 mb-12">
          {keyPhrases.map((phrase) => (
            <div
              key={phrase.shona}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
            >
              <p className="font-bold text-[var(--color-primary)] text-lg">
                {phrase.shona}
              </p>
              <p className="text-sm font-medium text-[var(--color-text)] mb-1">
                {phrase.english}
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed italic">
                {phrase.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural Notes */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Cultural Notes: Education in Zimbabwe
          </h3>
          <div className="grid gap-5">
            {culturalNotes.map((note) => (
              <div key={note.title}>
                <p className="font-semibold text-[var(--color-text)] mb-1">
                  {note.title}
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
            href="/courses/workplace/office"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← At the Office
          </Link>
          <Link
            href="/courses/workplace/professional"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Professional Communication →
          </Link>
        </div>
      </div>
    </div>
  );
}
