import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "At the Office in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary for the workplace — meetings, desks, colleagues, deadlines, and the social customs of Zimbabwean office life.",
};

const vocabulary = [
  {
    shona: "Hofisi",
    english: "Office",
    pronunciation: "hoh-FEE-see",
    example: "Ndinoshanda muhofisi.",
    exampleTranslation: "I work in an office.",
  },
  {
    shona: "Basa",
    english: "Work / Job",
    pronunciation: "BAH-sah",
    example: "Basa riri sei nhasi?",
    exampleTranslation: "How is work today?",
  },
  {
    shona: "Mubhedha webasa",
    english: "Work desk",
    pronunciation: "moo-BHEH-dah weh-BAH-sah",
    example: "Mubhedha wangu webasa uri kure.",
    exampleTranslation: "My work desk is far away.",
  },
  {
    shona: "Kompyuta",
    english: "Computer",
    pronunciation: "kohm-PYOO-tah",
    example: "Kompyuta yangu yakatyoka.",
    exampleTranslation: "My computer broke down.",
  },
  {
    shona: "Foni",
    english: "Phone",
    pronunciation: "FOH-nee",
    example: "Ndakafona kubasa.",
    exampleTranslation: "I called work.",
  },
  {
    shona: "Musangano",
    english: "Meeting",
    pronunciation: "moo-sahn-GAH-noh",
    example: "Ndine musangano manheru.",
    exampleTranslation: "I have a meeting this afternoon.",
  },
  {
    shona: "Ringi",
    english: "Ring / Call",
    pronunciation: "RING-ee",
    example: "Ndicharingi mangwana.",
    exampleTranslation: "I will call tomorrow.",
  },
  {
    shona: "Imeyiri",
    english: "Email",
    pronunciation: "ee-MEH-yee-ree",
    example: "Ndatumira imeyiri.",
    exampleTranslation: "I sent an email.",
  },
  {
    shona: "Faira",
    english: "File",
    pronunciation: "FAI-rah",
    example: "Isa faira patafura.",
    exampleTranslation: "Put the file on the table.",
  },
  {
    shona: "Purojekiti",
    english: "Project",
    pronunciation: "proo-jeh-KEE-tee",
    example: "Purojekiti iri pedyo kupera.",
    exampleTranslation: "The project is nearly finished.",
  },
  {
    shona: "Dheadlaini",
    english: "Deadline",
    pronunciation: "dhed-LAI-nee",
    example: "Dheadlaini iri mangwana.",
    exampleTranslation: "The deadline is tomorrow.",
  },
  {
    shona: "Bhodhi",
    english: "Board (meeting)",
    pronunciation: "BHOH-dee",
    example: "Musangano webhodhi uno nhasi.",
    exampleTranslation: "There is a board meeting today.",
  },
  {
    shona: "Mukuru webasa",
    english: "Supervisor / Boss",
    pronunciation: "moo-KOO-roo weh-BAH-sah",
    example: "Mukuru webasa wangu ari muhofisi.",
    exampleTranslation: "My boss is in the office.",
  },
  {
    shona: "Mushandirapamwe",
    english: "Work colleague",
    pronunciation: "moo-shan-dee-rah-PAM-weh",
    example: "Mushandirapamwe wangu anozvida.",
    exampleTranslation: "My colleague is hardworking.",
  },
  {
    shona: "Kuenda kubasa",
    english: "Going to work",
    pronunciation: "kweh-ENDA koo-BAH-sah",
    example: "Ndinoenda kubasa mangwanani.",
    exampleTranslation: "I go to work in the morning.",
  },
  {
    shona: "Kupedza basa",
    english: "Finishing work",
    pronunciation: "koo-PEH-dzah BAH-sah",
    example: "Ndakupedza basa nguva yechitanhatu.",
    exampleTranslation: "I finished work at six o'clock.",
  },
];

const keyPhrases = [
  {
    shona: "Ndine musangano",
    english: "I have a meeting",
    notes: "A useful phrase for explaining why you cannot be interrupted.",
  },
  {
    shona: "Basa riri sei?",
    english: "How is the work?",
    notes: "A common informal greeting among colleagues — expect 'Zvinoenda' (it's going) in reply.",
  },
  {
    shona: "Ndine chikumbiro",
    english: "I have a request",
    notes: "The polite way to preface asking for something from a colleague or boss.",
  },
  {
    shona: "Ndinoda nguva yako",
    english: "I need your time",
    notes: "Used when you need to speak with someone — it signals that the matter is serious.",
  },
  {
    shona: "Tariro yekupedza rinhi?",
    english: "Expected completion when?",
    notes: "A natural way to ask about a deadline — gentler than demanding a date directly.",
  },
];

const culturalNotes = [
  {
    title: "Mixing Shona and English is normal",
    body: "Zimbabwean workplaces blend English and Shona freely — words like 'meeting', 'deadline', and 'project' are borrowed directly. This is not laziness; it is how the language has grown. Shona-ified spellings (musangano, dheadlaini) reflect spoken pronunciation.",
  },
  {
    title: "Morning greetings are an obligation",
    body: "Greeting every colleague when you arrive in the morning is expected — walking past someone without acknowledging them is considered rude. 'Mangwanani' (good morning) or 'Makadii?' (how are you?) for superiors is the norm before any work conversation begins.",
  },
  {
    title: "Hierarchy is respected",
    body: "Addressing a boss by first name is uncommon in most Zimbabwean workplaces. 'Mukuru webasa' or titles like 'Madam' and 'Sir' remain in common use. Shona speakers often switch to more formal registers when speaking up the hierarchy.",
  },
  {
    title: "Lunch is social",
    body: "Lunchtime is often a collective affair — eating together with colleagues is common and builds camaraderie. Eating alone at your desk while others socialise can be noticed as antisocial.",
  },
];

export default function OfficePage() {
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
            Module 1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            At the Office
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Muhofisi
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            The Zimbabwean office is a place where two worlds meet — modern
            professional practice and deep Shona social customs. You can be the
            most technically skilled person in the room, but if you walk past
            colleagues without greeting them, you will be remembered for that.
            This module gives you the vocabulary to work and communicate in
            Shona professional settings.
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
          Key Phrases
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
            Cultural Notes: The Zimbabwean Workplace
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
            href="/courses/workplace"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Course overview
          </Link>
          <Link
            href="/courses/workplace/classroom"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: In the Classroom →
          </Link>
        </div>
      </div>
    </div>
  );
}
