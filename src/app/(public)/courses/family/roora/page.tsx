import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roora — Bride Wealth & the Marriage Covenant in Shona | Duramazwi",
  description:
    "A deep look at roora (lobola) in Shona culture — what it means, why it is done, the step-by-step process, who is involved, what is paid, and how it has evolved today.",
};

const vocabulary = [
  {
    shona: "Roora",
    english: "Bride wealth / Marriage covenant",
    pronunciation: "ROH-rah",
    note: "The formal payment from the groom's family to the bride's family — a covenant, not a price",
  },
  {
    shona: "Munyai",
    english: "Go-between / Family negotiator",
    pronunciation: "moo-NYAH-ee",
    note: "The eloquent elder chosen by the groom's family to speak and negotiate on their behalf",
  },
  {
    shona: "Nhume",
    english: "Messenger / Representative",
    pronunciation: "NHOO-meh",
    note: "Another term for the go-between — the person trusted to carry the family's words",
  },
  {
    shona: "Chiredzwa",
    english: "Opening gift / Key to the door",
    pronunciation: "chee-RED-zwah",
    note: "A small formal gift given to request permission for negotiations to begin",
  },
  {
    shona: "Mombe youmai",
    english: "The mother's cow",
    pronunciation: "MOM-beh yoh-MAH-ee",
    note: "A cow given specifically to the bride's mother — separate from and sacred above the main roora",
  },
  {
    shona: "Rusambo",
    english: "Traditional gifts for specific relatives",
    pronunciation: "roo-SAHM-boh",
    note: "Beads, cloth, or cash given individually to the bride's grandmother, aunts, and other close relatives",
  },
  {
    shona: "Zvibharo",
    english: "Goods / Property offered",
    pronunciation: "zvee-BHAH-roh",
    note: "Physical goods — blankets, cloth, household items — offered alongside cattle or cash",
  },
  {
    shona: "Kutizira",
    english: "To elope",
    pronunciation: "koo-tee-ZEE-rah",
    note: "To run away and marry without completing roora — the marriage is recognised but lacks full standing",
  },
];

const reasons = [
  {
    title: "To Honour the Bride's Family",
    body: "The primary purpose of roora is not to pay for a wife — it is to honour the family that raised her. A daughter is raised, educated, loved, and shaped by her family over decades. Roora is the groom's family's formal acknowledgement of that investment. To offer roora is to say: we see what your family has built, and we respect it. A low or absent roora is an insult — it signals that the bride's family did not raise her well.",
  },
  {
    title: "To Legitimise the Marriage Spiritually",
    body: "In Shona belief, the ancestors of both families must witness and accept the union. Roora is the mechanism through which they are brought in. A marriage completed with proper roora is one the ancestors recognise. Without it, the union exists in the world of the living but lacks the sanction of the spiritual world. This means the wife may not be fully recognised in her husband's ancestral lineage — and in death, her burial rights in his family's land may be contested.",
  },
  {
    title: "To Create a Bond Between Two Families",
    body: "Roora does not join two individuals — it joins two families permanently. The relationship between the two families that begins with roora outlasts the couple themselves. After the marriage, the bride's family and groom's family have reciprocal obligations: to attend each other's ceremonies, to support each other in hardship, and to maintain the bond that roora created. The two families become hama (relatives) to each other.",
  },
  {
    title: "To Secure the Wife's Status and Rights",
    body: "A wife whose roora has been paid in full has recognised status within her husband's family. She can be buried in her husband's family land. Her children carry their father's name and mutupo (totem) without question. She has the right to be mourned and honoured as a full member of the family. Where roora is absent or incomplete, all of these things are ambiguous — and in traditional settings, this ambiguity causes real pain at moments like illness, death, and inheritance.",
  },
];

const parties = [
  {
    role: "Munyai (Go-between)",
    whoTheyAre: "An eloquent, respected elder from the groom's family — usually an uncle",
    whatTheyDo:
      "Represents the groom's family in all negotiations. He speaks for them, argues for them, and must know how to be firm without being offensive. A skilled munyai can make the difference between a swift, warm agreement and a dragged-out, tense process.",
  },
  {
    role: "Bride's Father & Uncles",
    whoTheyAre: "The senior men of the bride's family",
    whatTheyDo:
      "They set the terms and receive the roora. The father speaks with the authority of the lineage behind him. His brothers advise and support. Together they decide what is acceptable and what is not. The negotiation happens between these men and the munyai — the two younger people getting married are often not present.",
  },
  {
    role: "Vatete (Bride's Paternal Aunt)",
    whoTheyAre: "The bride's father's sister",
    whatTheyDo:
      "Vatete plays a central ceremonial role at the moment of handover. She escorts the bride out, gives the final blessing, and formally presents her to the groom's family. Without Vatete's presence, the handover is considered incomplete. She also receives her own specific gift (part of rusambo) and has the right to speak on behalf of her brother's family.",
  },
  {
    role: "Groom's Father & Uncles",
    whoTheyAre: "The senior men of the groom's family",
    whatTheyDo:
      "They authorise and provide the roora. They decide what can be offered, brief the munyai, and attend the payment day in number. A large delegation from the groom's family is a sign of respect — it shows the bride's family they are taken seriously.",
  },
  {
    role: "The Bride",
    whoTheyAre: "The woman being married",
    whatTheyDo:
      "In traditional practice, the bride is not present during roora negotiations — this is her family's domain. She is consulted by her own family but does not negotiate her own roora. On payment day, she may be present for the ceremony but remains in a separate area. Her most significant role comes at the handover, when Vatete escorts her out.",
  },
  {
    role: "The Groom",
    whoTheyAre: "The man getting married",
    whatTheyDo:
      "Like the bride, the groom is typically absent from roora negotiations. His family speaks for him. This can feel strange to those unfamiliar with the process, but it reflects the fact that roora is primarily a family agreement — not just a personal one. The groom may be present on payment day but does not lead the proceedings.",
  },
];

const stages = [
  {
    number: "1",
    title: "Kutumira — Sending Word",
    body: "The groom's family does not simply arrive. Before any visit, they send a formal message — historically a letter, today often a phone call — informing the bride's family of their intention. This is a signal of respect and seriousness. An unannounced arrival would be an insult. Once the message is received and a date agreed, the groom's family selects their munyai.",
  },
  {
    number: "2",
    title: "Chiredzwa — Opening the Door",
    body: "When the munyai arrives at the bride's home for the first time, he does not speak immediately. He presents chiredzwa — a small, symbolic gift that formally requests permission to enter and speak. Think of it as knocking on the door with something in hand. Without chiredzwa, the bride's family has no obligation to engage. Once accepted, chiredzwa signals that negotiations may begin.",
  },
  {
    number: "3",
    title: "The Negotiations",
    body: "The munyai and the bride's family elders enter formal discussion. The munyai states the groom's family's position and offer. The bride's family counters. There is no fixed number of sessions — some roora negotiations conclude in one meeting; others span multiple visits over weeks or even months. The process is formal but not adversarial: both sides want a fair outcome that creates a strong bond. A skilled munyai knows that agreeing too quickly may seem dismissive, while refusing to move may turn the atmosphere cold.",
  },
  {
    number: "4",
    title: "Mombe youmai — The Mother's Cow",
    body: "At some point in negotiations, a separate and particularly important item is addressed: mombe youmai — the cow for the mother. This is sacred and non-negotiable. It goes specifically to the bride's mother in recognition of the labour of carrying, nursing, and raising her daughter. It cannot be absorbed into the general roora total. Many families consider this the most important single element of roora — without it, the rest of the payment may not be fully accepted.",
  },
  {
    number: "5",
    title: "Rusambo — Gifts for Specific Relatives",
    body: "Beyond the main payment and mombe youmai, rusambo distributes smaller gifts to specific people: the bride's grandmother, her aunts, her Vatete. These are not add-ons — they are built into the expectation from the start. Rusambo acknowledges that the bride was raised not just by her parents but by a whole network of women. Each relative who receives rusambo has their own standing in the ceremony as a result.",
  },
  {
    number: "6",
    title: "Payment Day — The Ceremony",
    body: "When terms are agreed, a date is set for the formal payment. The groom's family arrives as a large group — size matters, as a large delegation demonstrates respect and seriousness. The cattle are presented, counted, and formally received by the bride's family. Cash, where agreed, is counted formally. Gifts are distributed to the appropriate people. There is food, ceremony, and celebration. By the end of payment day, the roora is considered complete.",
  },
  {
    number: "7",
    title: "Kukudzwa — The Handover",
    body: "Once roora is received, the bride is formally released by her family and given to the groom's family. This is the most emotionally significant moment of the process. Vatete escorts the bride from her family's space, gives her final words of counsel, and hands her to the groom's family's senior women. The bride may weep — this is expected, even encouraged. It marks the seriousness of the transition. She is leaving one family and entering another as a full member.",
  },
];

const whatIsPaid = [
  {
    item: "Mombe (Cattle)",
    detail:
      "The traditional form of roora. The number of cattle expected varies by region, family status, and the bride's background. A university-educated woman from a prominent family may command a higher number. In practice, the range is wide — from 5 to 20+ cattle in traditional settings. Many families still prefer cattle to cash because it is tangible, visible, and holds ancestral weight.",
  },
  {
    item: "Cash",
    detail:
      "The modern standard in urban and diaspora contexts. Families agree on a cash equivalent to cattle. The amount varies enormously — from a few hundred US dollars to tens of thousands, depending on the family. In the diaspora, foreign currency (USD, GBP, ZAR) is commonly used. Cash is generally accepted as equivalent to cattle, though some traditionalist families still prefer or insist on cattle.",
  },
  {
    item: "Mombe youmai",
    detail:
      "A cow (or cash equivalent) given specifically to the bride's mother. This is separate from the main roora total and non-negotiable. It is paid to the mother personally and is sometimes given before the main payment as a sign of intention. No roora is considered complete without mombe youmai.",
  },
  {
    item: "Rusambo",
    detail:
      "Traditionally, beads, cloth, and other items distributed to the bride's grandmother, aunts, and Vatete. Today, cash envelopes with specific amounts for specific people serve the same function. Each rusambo recipient has a named role in the ceremony and receives their allocation at a designated moment.",
  },
  {
    item: "Zvibharo (Goods)",
    detail:
      "Physical goods offered alongside the main payment — blankets, lengths of cloth, household items. These are less prominent today but remain a part of traditional roora. In rural settings, they may be more important than in cities. They are often carried and presented ceremonially.",
  },
];

const afterRoora = [
  {
    title: "The Wife Has Full Family Status",
    body: "Once roora is paid, the wife is no longer a guest in her husband's family — she is a member. She is Muroora to every brother in the family. She has the right to participate in family decisions, to mourn and be mourned, and to receive the care of the family if she is ever in need. Her identity in the family is not contingent on her relationship with her husband; it was established by roora.",
  },
  {
    title: "Burial Rights Are Secured",
    body: "In Shona tradition, where you are buried matters deeply — it is where your spirit is anchored, where your family can come to honour you, and where you enter into the company of your husband's ancestors. A wife whose roora is complete has the right to be buried in her husband's family land. Without roora, this right is contested, and in some families, a wife may be returned to her own family for burial — a painful and humiliating outcome.",
  },
  {
    title: "Children's Identity Is Secured",
    body: "Children born of a roora-complete marriage carry their father's mutupo (totem) and surname without ambiguity. They are his children in the full ancestral sense. Where roora is absent, the father's family may contest the children's membership in the lineage — particularly around inheritance — though in modern legal practice the children are recognised regardless.",
  },
  {
    title: "Two Families Are Permanently Bonded",
    body: "The bond created by roora does not dissolve even if the couple separates. The families remain hama. They attend each other's funerals, weddings, and ceremonies. The wife's family may even play a role in her husband's funeral proceedings. This permanent family-to-family relationship is one of the most significant consequences of roora — it makes the two families permanently responsible to each other.",
  },
];

const modernRoora = [
  {
    question: "Is it still practised by educated, urban, or Christian families?",
    answer:
      "Yes — overwhelmingly. Roora is not confined to rural or traditional settings. University graduates, civil servants, doctors, and pastors across Zimbabwe and the diaspora practise roora. Many Christian Zimbabwean families integrate roora into the pre-wedding process alongside church ceremonies. Being educated or Christian does not diminish the cultural obligation; if anything, success often increases the family's expectations.",
  },
  {
    question: "How does roora work in the diaspora?",
    answer:
      "For Zimbabweans living abroad, roora is commonly negotiated over video call, with a munyai present in Zimbabwe on behalf of the groom's family. Payment is made via international bank transfer or through a trusted representative. Some families travel back to Zimbabwe specifically for the roora ceremony, treating it as a major family event. Others conduct the full ceremony virtually. The process adapts but the expectation remains.",
  },
  {
    question: "Does roora have to be paid all at once?",
    answer:
      "No. Many families accept a formal commitment followed by installments over months or years. What matters is the good faith demonstrated by the initial payment and the ongoing commitment to complete it. A family that accepts installments does so as an act of trust — and the groom's family is expected to honour that trust. Some rooras are still being paid years into the marriage, which is considered normal as long as the relationship between the families remains good.",
  },
  {
    question: "Has the amount inflated over time?",
    answer:
      "This is a genuine debate within Zimbabwean families and communities. In some cases, roora demands have risen sharply — particularly for highly educated women — in ways that many argue are transactional rather than cultural. Critics, including many Zimbabwean women, argue that excessive roora demands undermine the original spirit of the institution. Defenders argue that it reflects the real value of an educated, accomplished woman. The tension between these views is part of a live cultural conversation.",
  },
];

const misconceptions = [
  {
    myth: "\"Roora means the husband bought his wife.\"",
    reality:
      "This is the most common and most damaging misconception. Roora does not transfer ownership of the woman — she cannot be traded, returned, or treated as property. What roora creates is a covenant: a formal, witnessed, spiritually-anchored bond between two families. A husband who treats roora as a purchase has misunderstood the institution entirely, and this view is rejected by Shona culture itself.",
  },
  {
    myth: "\"It's an old custom that modern Zimbabweans are leaving behind.\"",
    reality:
      "The opposite is true. Roora is one of the most persistently practised Shona traditions across class, religion, geography, and generation. Zimbabweans in the UK, US, Australia, South Africa, and across the continent continue to practise roora. It is not declining — in many diaspora communities, it is being practised with greater formality and ceremony than before, as a way of maintaining cultural identity.",
  },
  {
    myth: "\"If you elope (kutizira), your marriage is not real.\"",
    reality:
      "A marriage where the couple has eloped is socially and legally recognised. The children are legitimate. The relationship is real. What is incomplete is the family bond, the ancestral sanction, and the wife's formal status in the husband's family. Many families resolve this over time by having roora paid retroactively — sometimes years after the couple have been living together.",
  },
  {
    myth: "\"The bride negotiates her own roora.\"",
    reality:
      "In traditional practice, the bride is largely absent from roora negotiations. This is her family's domain. She does not speak on her own behalf in formal negotiations, though she may be consulted privately by her own family. The negotiations are between the two families as institutions — not between the couple. This is sometimes jarring for those unfamiliar with the process.",
  },
];

export default function RooraPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/courses/family"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Family Course
          </Link>
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
            Module 4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-hero-text)] mb-2">
            Roora
          </h1>
          <p className="text-lg text-[var(--color-hero-text)] opacity-80">
            Bride Wealth & the Marriage Covenant
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-10">

        {/* Intro */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 mb-10">
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Roora — known outside Zimbabwe as lobola — is one of the most
            significant and persistently practised institutions in Shona culture.
            It is the formal transfer of wealth from the groom&apos;s family to
            the bride&apos;s family at the time of marriage.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            It is not a purchase. It is a covenant — a formal, witnessed,
            ancestrally-anchored agreement between two families that creates a
            bond far beyond the couple at its centre. Understanding roora means
            understanding how Shona people think about family, obligation,
            respect, and the relationship between the living and their ancestors.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            This module covers why roora is done, who is involved, the
            step-by-step process, what is paid, what changes after roora is
            complete, and how it has adapted to the modern world.
          </p>
        </div>

        {/* Key Vocabulary */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Key Vocabulary
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface)] text-[var(--color-muted)] text-left">
                <th className="px-4 py-3 font-semibold">Shona</th>
                <th className="px-4 py-3 font-semibold">English</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Pronunciation</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Note</th>
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
                  <td className="px-4 py-3 text-[var(--color-muted)] text-xs hidden lg:table-cell italic">
                    {word.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why Roora */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Why Is Roora Done?
        </h2>
        <div className="grid gap-6 mb-12">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-black text-[var(--color-accent)] shrink-0 leading-none mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-[var(--color-text)] leading-relaxed text-sm">
                    {reason.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Who Is Involved */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Who Is Involved?
        </h2>
        <div className="grid gap-5 mb-12">
          {parties.map((party) => (
            <div
              key={party.role}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--color-primary)] mb-1">
                {party.role}
              </h3>
              <p className="text-xs font-semibold text-[var(--color-accent)] mb-3 uppercase tracking-wide">
                {party.whoTheyAre}
              </p>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                {party.whatTheyDo}
              </p>
            </div>
          ))}
        </div>

        {/* The Process */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">
          The Process — Step by Step
        </h2>
        <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
          Roora is not a single event — it is a process that unfolds across multiple
          meetings, often over weeks or months. Each stage has its own customs and
          expectations.
        </p>
        <div className="space-y-4 mb-12">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-[var(--color-hero-text)] flex items-center justify-center font-black text-lg shrink-0">
                  {stage.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">
                    {stage.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What Is Paid */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          What Is Paid?
        </h2>
        <div className="grid gap-5 mb-12">
          {whatIsPaid.map((item) => (
            <div
              key={item.item}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">
                {item.item}
              </h3>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* After Roora */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          After Roora — What Changes?
        </h2>
        <div className="grid gap-6 mb-12">
          {afterRoora.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Without Roora */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-12">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">
            Without Roora — Kutizira
          </h2>
          <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
            Kutizira (eloping) exists in Shona culture and has for generations.
            A couple may choose to begin living together without completing roora
            — sometimes because families cannot agree, sometimes for financial
            reasons, sometimes simply because they are impatient.
          </p>
          <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
            The marriage is socially recognised. The children are legitimate.
            The couple is not shamed. But the union lacks what roora provides:
            full ancestral sanction, the wife&apos;s complete status in the
            husband&apos;s family, secured burial rights, and the permanent
            bond between the two families.
          </p>
          <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
            In many cases, roora follows kutizira — sometimes years later. The
            expectation is that it will be paid eventually. A family that accepts
            kutizira gracefully does so with the understanding that the couple is
            committed and that roora will come. Where it never comes, the
            consequences are felt most acutely in moments of crisis: illness,
            death, and inheritance.
          </p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed italic">
            A key indicator of this cultural weight: in many Shona families, a
            woman who dies before roora is paid may be buried by her birth family
            rather than her husband&apos;s family — regardless of how many years
            the couple lived together.
          </p>
        </div>

        {/* Modern Roora */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Roora Today
        </h2>
        <div className="grid gap-5 mb-12">
          {modernRoora.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--color-text)] mb-3">
                {item.question}
              </h3>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Misconceptions */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-5">
          Common Misconceptions
        </h2>
        <div className="grid gap-5 mb-12">
          {misconceptions.map((item) => (
            <div
              key={item.myth}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <p className="text-sm font-bold text-[var(--color-muted)] mb-3 italic">
                {item.myth}
              </p>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                {item.reality}
              </p>
            </div>
          ))}
        </div>

        {/* Summary callout */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 mb-10">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">
            The Heart of It
          </h3>
          <p className="text-[var(--color-text)] text-sm leading-relaxed">
            Roora is best understood not as a transaction but as a transformation.
            Before roora, two families are strangers. After roora, they are hama —
            relatives with permanent obligations to each other. The woman at the
            centre of the process moves from being a daughter to being a Muroora,
            a role that carries its own rights, dignity, and belonging. The payment
            is the visible part of an agreement that runs far deeper than money or
            cattle: it is about who belongs to whom, and who is responsible for
            whom, across generations.
          </p>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <Link
            href="/courses/family/in-laws"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
          >
            ← In-Laws & Marriage
          </Link>
          <Link
            href="/courses/family/totems"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            Next: Mutupo — Clan & Totem →
          </Link>
        </div>
      </div>
    </div>
  );
}
