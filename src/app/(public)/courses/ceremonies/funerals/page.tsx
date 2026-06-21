import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funerals in Shona Culture | Duramazwi",
  description:
    "Learn Shona vocabulary and customs around death and funerals — how death is announced, why the bereaved are never left alone, community duties, and the meaning of presence.",
};

const vocabulary = [
  {
    shona: "Kufa",
    english: "To die",
    pronunciation: "KOO-fah",
    example: "Baba vakafarika usiku.",
    exampleTranslation: "Father passed away in the night.",
  },
  {
    shona: "Muranda",
    english: "Deceased person — respectful term",
    pronunciation: "moo-RAH-ndah",
    example: "Muranda akanga ari munhu akanaka.",
    exampleTranslation: "The deceased was a good person.",
  },
  {
    shona: "Kuchema",
    english: "To mourn / to cry",
    pronunciation: "koo-CHEH-mah",
    example: "Vose vakachema parufu iri.",
    exampleTranslation: "Everyone mourned at this funeral.",
  },
  {
    shona: "Kubata maoko",
    english: "To hold hands — comforting the bereaved",
    pronunciation: "koo-BAH-tah mah-OH-koh",
    example: "Akabata maoko amai vake kumuremekedza.",
    exampleTranslation: "He held his mother's hands to comfort her.",
  },
  {
    shona: "Kuviga",
    english: "To bury",
    pronunciation: "koo-VEE-gah",
    example: "Vakaviga muranda masikati.",
    exampleTranslation: "They buried the deceased in the afternoon.",
  },
  {
    shona: "Pavi",
    english: "Grave",
    pronunciation: "PAH-vee",
    example: "Pavi rakagadzirwa pane nzvimbo yakanaka.",
    exampleTranslation: "The grave was prepared in a good place.",
  },
  {
    shona: "Kunyengetera",
    english: "To pray",
    pronunciation: "koo-nyehn-geh-TEH-rah",
    example: "Vakanyengetera pamhiri pemba.",
    exampleTranslation: "They prayed at the side of the home.",
  },
  {
    shona: "Muteuri",
    english: "Speaker / elder who announces the death",
    pronunciation: "moo-teh-OO-ree",
    example: "Muteuri akaenda kumhuri yakasiirwa.",
    exampleTranslation: "The spokesperson went to the bereaved family.",
  },
  {
    shona: "Mapfupfu",
    english: "Remains — traditional term",
    pronunciation: "mah-PFOO-pfoo",
    example: "Mapfupfu anochengetwa norudyi.",
    exampleTranslation: "The remains are kept with dignity.",
  },
  {
    shona: "Dare",
    english: "Courtyard — where mourners gather",
    pronunciation: "DAH-reh",
    example: "Vaenzi vose vakagara mudare.",
    exampleTranslation: "All the visitors gathered in the courtyard.",
  },
  {
    shona: "Kusvika",
    english: "To arrive — at the home of the bereaved",
    pronunciation: "koo-SVEE-kah",
    example: "Vakusvika vanosvika vachimba.",
    exampleTranslation: "Those arriving come singing solemnly.",
  },
];

const culturalNotes = [
  {
    title: "Death is announced in person — never by message",
    body: "In Shona culture, you do not send a text message, make a phone call, or post on social media to announce a death. The news of someone's passing must be carried in person by a messenger (muteuri) who physically goes to each family. This is not merely a preference — it is a deeply held norm. The bereaved deserve to receive the news in the presence of another human being, not alone, staring at a screen. Even in modern Zimbabwe, where communication is instant, the cultural expectation is that someone physically comes.",
  },
  {
    title: "The bereaved are never left alone",
    body: "From the moment of death until after the burial, the family of the deceased is never left alone. Community members begin arriving immediately and stay — sleeping over, cooking, sitting in the courtyard, keeping watch through the night. This is not optional charity; it is a communal duty. To leave a bereaved family alone with their grief is a failure of community. The presence of people is itself the first gift of mourning.",
  },
  {
    title: "The body is not left unaccompanied",
    body: "The body of the deceased is treated with continuous reverence. Someone remains with the body at all times until burial. Men typically keep watch through the night, sitting together, sometimes singing or praying. The body is not abandoned or left in a room alone. This continuous presence honours the spirit that has just departed and signals to the ancestors that the family is conducting itself properly.",
  },
  {
    title: "Community contributions are the support",
    body: "At a Shona funeral, the community brings everything: food for cooking and feeding the mourners, firewood, money for burial costs, and most importantly their physical presence. A large and sustained gathering is a sign of how valued the deceased was in the community. Those who come from far away are especially noted. Women ululate (hwindindindi) when significant mourners arrive — the sound communicates to all that someone important has come to pay their respects.",
  },
  {
    title: "Ululation marks significant arrivals",
    body: "Hwindindindi — the ululation of women — is used at funerals to mark the arrival of significant mourners: elders from far away, the family's important relatives, and at the moment of burial. It is not a sound of celebration in the Western sense — it is a sound of acknowledgement, of marking a moment as significant, of communicating communally that something important is happening. Learning to recognise it means you can read the room at any Shona gathering.",
  },
];

export default function FuneralsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/ceremonies"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Ceremonies Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Funerals
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Kuviga — Rufu
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">
        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed">
            In Shona culture, how a community responds to death reveals its
            deepest values. The way news is delivered, who comes, how long they
            stay, and what they bring are all expressions of Ubuntu — of shared
            humanity. A Shona funeral is not a private grief. It is a community
            holding one family through loss.
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
                  className={i % 2 === 0 ? "bg-[var(--color-surface-raised)]" : "bg-[var(--color-surface)]"}
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
                    <span className="text-[var(--color-text)] font-medium">{word.example}</span>
                    <span className="text-[var(--color-muted)] block text-xs mt-0.5">{word.exampleTranslation}</span>
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
          {culturalNotes.map((note, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
                {note.title}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                {note.body}
              </p>
            </div>
          ))}
        </div>

        {/* What mourners contribute */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">
            What Community Members Bring
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { item: "Ukama — their presence", note: "The most important gift of all" },
              { item: "Sadza nenyama — food for cooking", note: "The community feeds itself" },
              { item: "Mari — money for burial costs", note: "Practical solidarity" },
              { item: "Huni — firewood", note: "For cooking through the nights" },
              { item: "Mapepa — blankets and bedding", note: "For those sleeping over" },
              { item: "Kuimba — songs and prayers", note: "Spiritual presence through the night" },
            ].map((contribution) => (
              <div
                key={contribution.item}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3"
              >
                <p className="font-bold text-[var(--color-primary)] text-sm">{contribution.item}</p>
                <p className="text-xs text-[var(--color-muted)] mt-0.5 italic">{contribution.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/ceremonies/weddings"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← Weddings
          </Link>
          <Link
            href="/courses/ceremonies/memorials"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Memorial Ceremonies →
          </Link>
        </div>
      </div>
    </div>
  );
}
