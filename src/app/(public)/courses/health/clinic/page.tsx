import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visiting a Clinic in Shona | Duramazwi",
  description:
    "Learn Shona vocabulary for clinic and hospital visits — doctor, medicine, appointments, and clinic interactions — with cultural context on Zimbabwe's healthcare system.",
};

const vocabulary = [
  {
    shona: "Chipatara",
    english: "Hospital",
    pronunciation: "chee-pah-TAH-rah",
    example: "Ndaenda kuchipatara nezuro.",
    exampleTranslation: "I went to the hospital yesterday.",
  },
  {
    shona: "Kiriniki",
    english: "Clinic",
    pronunciation: "kee-REE-nee-kee",
    example: "Kiriniki iri pedyo nemba yedu.",
    exampleTranslation: "The clinic is close to our home.",
  },
  {
    shona: "Chiremba",
    english: "Doctor",
    pronunciation: "chee-REM-bah",
    example: "Chiremba akamuona mangwanani.",
    exampleTranslation: "The doctor saw him in the morning.",
  },
  {
    shona: "Murwi / Murapiri",
    english: "Nurse / healer",
    pronunciation: "MOO-rwee / moo-rah-PEE-ree",
    example: "Murapiri akamupa mushonga.",
    exampleTranslation: "The nurse gave him medicine.",
  },
  {
    shona: "Mushonga",
    english: "Medicine",
    pronunciation: "moo-SHON-gah",
    example: "Mushonga uyu unotorwa kaviri pazuva.",
    exampleTranslation: "This medicine is taken twice a day.",
  },
  {
    shona: "Kupinda kiriniki",
    english: "To go into the clinic",
    pronunciation: "koo-PEEN-dah kee-REE-nee-kee",
    example: "Ndakapinda kiriniki manheru.",
    exampleTranslation: "I went into the clinic in the evening.",
  },
  {
    shona: "Kugamuchira mushonga",
    english: "To receive medicine",
    pronunciation: "koo-gah-moo-CHEE-rah moo-SHON-gah",
    example: "Vakagamuchira mushonga papedza.",
    exampleTranslation: "They received medicine afterwards.",
  },
  {
    shona: "Bheji",
    english: "Badge / prescription slip",
    pronunciation: "BHEH-jee",
    example: "Unofanira kubata bheji rako.",
    exampleTranslation: "You must hold onto your prescription slip.",
  },
  {
    shona: "Kufema zvakasimba",
    english: "To breathe deeply (during examination)",
    pronunciation: "koo-FEH-mah zvah-kah-SEEM-bah",
    example: "Chiremba akamuti fema zvakasimba.",
    exampleTranslation: "The doctor told him to breathe deeply.",
  },
  {
    shona: "Ndinofanira kudzoka rini?",
    english: "When must I come back?",
    pronunciation: "ndee-noh-fah-NEE-rah koo-DZOH-kah REE-nee",
    example: "Ndinofanira kudzoka rini, chiremba?",
    exampleTranslation: "When must I come back, doctor?",
  },
  {
    shona: "Mushonga wechivanhu",
    english: "Traditional medicine",
    pronunciation: "moo-SHON-gah weh-chee-VAH-nhoo",
    example: "Akaenda kun'anga kuti awane mushonga wechivanhu.",
    exampleTranslation: "She went to the n'anga to get traditional medicine.",
  },
  {
    shona: "Muteuro",
    english: "Appointment",
    pronunciation: "moo-teh-OO-roh",
    example: "Ndine muteuro nekiiriniki mangwana.",
    exampleTranslation: "I have an appointment at the clinic tomorrow.",
  },
];

const culturalNotes = [
  {
    title: "Clinics First, Hospitals for Serious Cases",
    body: "In Zimbabwe, clinics (kiriniki) are the primary point of healthcare access for most people. They handle everyday ailments, maternal care, vaccinations, and routine checks. Hospitals (chipatara) are reserved for more serious cases, specialist care, and emergencies. Understanding this distinction helps you navigate the health system.",
  },
  {
    title: "Long Queues Are Part of the Experience",
    body: "Long queues at public clinics are normal in Zimbabwe. Patience is required — people bring food, chat, and wait together. The social dimension of waiting in the queue is itself a community experience. Arriving early is wise, and understanding that waiting is expected removes frustration.",
  },
  {
    title: "Using Both the Clinic and the N'anga",
    body: "It is very common for Zimbabweans to visit both the clinic and a traditional healer (n'anga) simultaneously or in sequence. Clinics treat physical symptoms; n'angas address spiritual causes. These approaches are not seen as contradictory — they complement each other in Shona understanding of health.",
  },
  {
    title: "Community Health Workers in Rural Areas",
    body: "Community Health Workers (CHW) play a vital role in rural Zimbabwe. They are respected local figures who provide basic healthcare, refer patients to clinics, and carry out health education. In Shona, they may be called 'murwi wemunharaunda' (community health worker). They bridge the gap between communities and formal healthcare.",
  },
];

const clinicPhrases = [
  {
    shona: "Ndirwara.",
    english: "I am sick.",
  },
  {
    shona: "Ndine fivha.",
    english: "I have a fever.",
  },
  {
    shona: "Chinokurwadza dumbu rangu.",
    english: "My stomach is hurting.",
  },
  {
    shona: "Ndinofanira mushonga.",
    english: "I need medicine.",
  },
  {
    shona: "Ndinofanira kudzoka rini?",
    english: "When must I come back?",
  },
  {
    shona: "Ndatenda, chiremba.",
    english: "Thank you, doctor.",
  },
];

export default function ClinicPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/health"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Health Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Visiting a Clinic
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kupinda Kiriniki
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            Whether you are describing your symptoms to a doctor, asking for
            medicine, or finding out when to return, this module gives you the
            practical Shona vocabulary for clinic and hospital interactions. You
            will also learn about Zimbabwe's healthcare system and how people
            navigate it.
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

        {/* Cultural Notes */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Cultural Notes
        </h2>
        <div className="grid gap-5 mb-12">
          {culturalNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {note.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* Useful clinic phrases */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            Useful Clinic Phrases
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {clinicPhrases.map((phrase) => (
              <div
                key={phrase.shona}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="font-bold text-[var(--color-primary)] mb-1">
                  {phrase.shona}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {phrase.english}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/health/illnesses"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Illnesses &amp; Symptoms
          </Link>
          <Link
            href="/courses/health/traditional-healing"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Traditional Healing →
          </Link>
        </div>
      </div>
    </div>
  );
}
