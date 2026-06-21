export const pronunciationChallenges = [
  // ─────────────────────────────────────────────────────
  // BEGINNER — pron-beg-* (12 total, multiple_choice, 10pts)
  // ─────────────────────────────────────────────────────

  {
    id: "pron-beg-001",
    type: "multiple_choice",
    question: "How are vowels pronounced in Shona?",
    correctAnswer: "Short and clear — every vowel is always fully pronounced",
    options: [
      "Short and clear — every vowel is always fully pronounced",
      "Long and drawn out, like English vowels",
      "Some vowels are silent at the end of words",
      "Vowels change depending on the consonant before them",
    ],
    explanation:
      "Shona vowels (a, e, i, o, u) are always short, clear, and fully pronounced. There are no silent vowels.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "vowels", "rules"],
  },
  {
    id: "pron-beg-002",
    type: "multiple_choice",
    question: "In Shona, are there any silent letters?",
    correctAnswer: "No — every letter is always pronounced",
    options: [
      "No — every letter is always pronounced",
      "Yes — the final vowel is often silent",
      "Yes — 'h' is often silent",
      "Only some consonant clusters are silent",
    ],
    explanation:
      "Shona has no silent letters — every single letter contributes to the pronunciation. This is very different from English.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "rules", "basics"],
  },
  {
    id: "pron-beg-003",
    type: "multiple_choice",
    question: "How is the vowel 'i' pronounced in Shona (as in 'imba')?",
    correctAnswer: "Like 'ee' in 'see'",
    options: [
      "Like 'ee' in 'see'",
      "Like 'i' in 'hit'",
      "Like 'ai' in 'rain'",
      "Like 'ie' in 'pie'",
    ],
    explanation:
      "Shona 'i' = ee (long 'ee' sound). Imba (house) = EEM-bah. All Shona vowels map cleanly to one consistent sound.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "vowels", "alphabet"],
  },
  {
    id: "pron-beg-004",
    type: "multiple_choice",
    question: "How is the vowel 'a' pronounced in Shona (as in 'baba')?",
    correctAnswer: "Like 'ah' as in 'father'",
    options: [
      "Like 'ah' as in 'father'",
      "Like 'ay' as in 'make'",
      "Like 'uh' as in 'cup'",
      "Like 'a' as in 'cat'",
    ],
    explanation:
      "Shona 'a' = ah (open vowel, like 'father'). Baba = BAH-bah. Clean, consistent, never changes.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "vowels", "alphabet"],
  },
  {
    id: "pron-beg-005",
    type: "multiple_choice",
    question: "The Shona letter 'r' is pronounced as…",
    correctAnswer: "A rolled or tapped 'r' — similar to Spanish or Italian",
    options: [
      "A rolled or tapped 'r' — similar to Spanish or Italian",
      "Like the English 'r' in 'run'",
      "Silently — it is never pronounced",
      "Like the French 'r' (guttural)",
    ],
    explanation:
      "Shona 'r' is a tap/trill — lighter than a strong Spanish trill but not the English 'r'. It taps the roof of the mouth.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "consonants", "rules"],
  },
  {
    id: "pron-beg-006",
    type: "multiple_choice",
    question: "What does 'ambuya' mean in Shona?",
    correctAnswer: "Grandmother",
    options: ["Grandmother", "Mother", "Aunt", "Elder woman"],
    explanation:
      "Ambuya = grandmother. Pronounced AH-mboo-yah. The 'a' is open, the 'mb' is a nasal consonant cluster.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "alphabet", "vocab"],
  },
  {
    id: "pron-beg-007",
    type: "multiple_choice",
    question: "What does 'mhuka' mean in Shona?",
    correctAnswer: "Animal",
    options: ["Animal", "Tree", "Bird", "Fish"],
    explanation:
      "Mhuka = animal. Pronounced with a breathy 'mh' — 'mh' is an aspirated nasal cluster unique to Shona.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "consonant-clusters", "vocab"],
  },
  {
    id: "pron-beg-008",
    type: "multiple_choice",
    question: "What does 'nzou' mean in Shona?",
    correctAnswer: "Elephant",
    options: ["Elephant", "Lion", "Zebra", "Crocodile"],
    explanation:
      "Nzou = elephant. The 'nz' cluster sounds like the 'nz' in 'bronze' said quickly. Nzou is also a clan totem.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "consonant-clusters", "vocab"],
  },
  {
    id: "pron-beg-009",
    type: "multiple_choice",
    question: "What does 'sadza' mean in Shona?",
    correctAnswer: "Porridge (the staple food, made from maize meal)",
    options: [
      "Porridge (the staple food, made from maize meal)",
      "Meat",
      "Beer",
      "Vegetables",
    ],
    explanation:
      "Sadza = the staple food of Zimbabwe, made from maize meal. Pronounced SAH-dzah. The 'dz' is like the 'ds' in 'kids'.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "consonant-clusters", "vocab"],
  },
  {
    id: "pron-beg-010",
    type: "multiple_choice",
    question: "What does 'imba' mean in Shona?",
    correctAnswer: "House",
    options: ["House", "School", "Tree", "River"],
    explanation:
      "Imba = house. Pronounced EEM-bah. Vowel 'i' = ee, 'mb' = nasal bilabial cluster, 'a' = ah.",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "alphabet", "vocab"],
  },
  {
    id: "pron-beg-011",
    type: "multiple_choice",
    question: "How many letters are in the Shona alphabet?",
    correctAnswer: "25 — the Roman alphabet minus 'q' and 'x'",
    options: [
      "25 — the Roman alphabet minus 'q' and 'x'",
      "26 — the full Roman alphabet",
      "24 — several letters removed",
      "28 — extra letters added",
    ],
    explanation:
      "Shona uses 25 letters — all Roman letters except 'q' and 'x'. Additional sounds come from consonant clusters (ch, dz, sh, etc.).",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "alphabet", "basics"],
  },
  {
    id: "pron-beg-012",
    type: "multiple_choice",
    question: "What does 'vanhu' mean in Shona?",
    correctAnswer: "People",
    options: ["People", "Person", "Family", "Elders"],
    explanation:
      "Vanhu = people. Pronounced VAH-nhoo. Munhu = one person (mu- prefix), Vanhu = people (va- plural prefix).",
    difficulty: "beginner",
    points: 10,
    labels: ["pronunciation", "alphabet", "vocab"],
  },

  // ─────────────────────────────────────────────────────
  // INTERMEDIATE — pron-int-* (12 total, multiple_choice + translation_builder, 12-14pts)
  // ─────────────────────────────────────────────────────

  {
    id: "pron-int-001",
    type: "multiple_choice",
    question: "What is the noun class prefix for 'person' in Shona?",
    correctAnswer: "mu- (singular) → va- (plural)",
    options: [
      "mu- (singular) → va- (plural)",
      "chi- (singular) → zvi- (plural)",
      "i- (singular) → ma- (plural)",
      "ku- (singular) → ma- (plural)",
    ],
    explanation:
      "Person = munhu (mu-) → people = vanhu (va-). The mu/va class covers people and human-like nouns.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "noun-classes", "spelling-patterns"],
  },
  {
    id: "pron-int-002",
    type: "multiple_choice",
    question: "What is the noun class prefix for 'thing' / objects in Shona?",
    correctAnswer: "chi- (singular) → zvi- (plural)",
    options: [
      "chi- (singular) → zvi- (plural)",
      "mu- (singular) → va- (plural)",
      "i- (singular) → ma- (plural)",
      "ka- (singular) → twa- (plural)",
    ],
    explanation:
      "Chikoro (school) → zvikoro (schools). Chi/zvi is the class for many objects and abstract things.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "noun-classes", "spelling-patterns"],
  },
  {
    id: "pron-int-003",
    type: "multiple_choice",
    question:
      "What does the prefix 'ku-' indicate when attached to a verb in Shona?",
    correctAnswer: "It marks the verb infinitive (to do something)",
    options: [
      "It marks the verb infinitive (to do something)",
      "It marks the plural form of a noun",
      "It marks the past tense",
      "It marks the formal mode of speech",
    ],
    explanation:
      "Ku- is the infinitive prefix. Kuseka = to laugh, kufamba = to walk, kurima = to farm.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "spelling-patterns", "grammar"],
  },
  {
    id: "pron-int-004",
    type: "multiple_choice",
    question: "What is the plural of 'muti' (tree) in Shona?",
    correctAnswer: "Miti",
    options: ["Miti", "Vamuti", "Chimuti", "Matree"],
    explanation:
      "Muti (tree) → miti (trees). The mu/mi class is for trees and plants. Not to be confused with muti meaning medicine.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "noun-classes", "spelling-patterns"],
  },
  {
    id: "pron-int-005",
    type: "multiple_choice",
    question: "What is the plural of 'ziso' (eye) in Shona?",
    correctAnswer: "Meso",
    options: ["Meso", "Zisoro", "Maziso", "Visiso"],
    explanation:
      "Ziso (eye) → meso (eyes). This is an irregular pattern — the i/ma class changes the initial consonant in some words.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "noun-classes", "spelling-patterns"],
  },
  {
    id: "pron-int-006",
    type: "multiple_choice",
    question: "The Shona 'dz' sound (as in 'dziva') is best described as…",
    correctAnswer: "Like the 'ds' in 'kids' said quickly",
    options: [
      "Like the 'ds' in 'kids' said quickly",
      "Like the 'z' in 'zero'",
      "Like the 'j' in 'just'",
      "Like the 'ts' in 'cats'",
    ],
    explanation:
      "Dz = 'ds' of 'kids' — a voiced affricate. Dziva = pool/lake. This is distinct from 'z' (which is just the 'z' sound).",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "consonant-clusters", "rules"],
  },
  {
    id: "pron-int-007",
    type: "multiple_choice",
    question: "The 'sv' in Shona (as in 'svondo') is pronounced…",
    correctAnswer:
      "Like 'sv' said quickly — a consonant cluster with no vowel between",
    options: [
      "Like 'sv' said quickly — a consonant cluster with no vowel between",
      "Like 'sh' in English",
      "Like 'sw' in 'swim'",
      "Like 'zv' — they are the same sound",
    ],
    explanation:
      "Sv is a voiceless bilabial fricative cluster. Svondo = Sunday. Practice saying 's' and 'v' without any vowel between them.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "consonant-clusters", "rules"],
  },
  {
    id: "pron-int-008",
    type: "multiple_choice",
    question: "Which of these is the correct plural of 'munhu' (person)?",
    correctAnswer: "Vanhu",
    options: ["Vanhu", "Minhunu", "Chimunhu", "Munhuru"],
    explanation:
      "Munhu → vanhu. The mu- (person singular) prefix changes to va- (people plural). This is the core person class.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "noun-classes", "spelling-patterns"],
  },
  {
    id: "pron-int-009",
    type: "translation_builder",
    question:
      "Build the word for 'to farm' by adding the infinitive prefix to 'rima'",
    correctAnswer: ["ku", "rima"],
    distractors: ["va", "chi", "mu", "ma"],
    explanation:
      "Ku- + rima = kurima (to farm). The ku- prefix turns any verb root into the infinitive form.",
    difficulty: "intermediate",
    points: 14,
    labels: ["pronunciation", "spelling-patterns", "grammar"],
  },
  {
    id: "pron-int-010",
    type: "multiple_choice",
    question: "Shona is described as a tonal language. This means…",
    correctAnswer: "The pitch of your voice changes word meanings",
    options: [
      "The pitch of your voice changes word meanings",
      "You must shout to be understood",
      "Tone marks are always written in everyday text",
      "Only elders use tonal variations",
    ],
    explanation:
      "Shona has High (H) and Low (L) tones. The same vowels and consonants with different pitches can give different meanings.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "tone", "basics"],
  },
  {
    id: "pron-int-011",
    type: "multiple_choice",
    question: "In written Shona, a High tone is sometimes marked with…",
    correctAnswer: "An acute accent (á)",
    options: [
      "An acute accent (á)",
      "A grave accent (à)",
      "A circumflex (â)",
      "A tilde (ã)",
    ],
    explanation:
      "In formal writing, High tone = acute accent (á). Low tone = unmarked or grave accent (à). In everyday writing, tones are usually unmarked.",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "tone", "writing"],
  },
  {
    id: "pron-int-012",
    type: "multiple_choice",
    question:
      "The possessive 'my' in Shona (wangu/yangu/rangu) changes form because…",
    correctAnswer: "It must agree with the noun class of the thing owned",
    options: [
      "It must agree with the noun class of the thing owned",
      "It depends on whether the owner is male or female",
      "It depends on the number of items owned",
      "It is random — choose any form",
    ],
    explanation:
      "Shona possessives agree with noun class. Baba wangu (my father, mu-class), hanzvadzi yangu (my sister, i-class), zita rangu (my name, ri-class).",
    difficulty: "intermediate",
    points: 12,
    labels: ["pronunciation", "spelling-patterns", "grammar"],
  },

  // ─────────────────────────────────────────────────────
  // ADVANCED — pron-adv-* (6 total, translation_builder, 16-18pts)
  // ─────────────────────────────────────────────────────

  {
    id: "pron-adv-001",
    type: "translation_builder",
    question: "Build the Shona phrase: 'to speak the language'",
    correctAnswer: ["kutaura", "ndimi"],
    distractors: ["kuseka", "kuridza", "mazwi", "mhinduro"],
    explanation:
      "Kutaura ndimi = to speak the language. Kutaura = to speak (ku- + taura). Ndimi = language/languages.",
    difficulty: "advanced",
    points: 16,
    labels: ["pronunciation", "rules", "grammar"],
  },
  {
    id: "pron-adv-002",
    type: "translation_builder",
    question: "Build the plural: 'chikoro' (school) → schools",
    correctAnswer: ["zvi", "koro"],
    distractors: ["va", "mu", "ma", "chi"],
    explanation:
      "Chi-koro → zvi-koro (schools). The chi/zvi class handles many objects. The stem '-koro' stays the same; only the prefix changes.",
    difficulty: "advanced",
    points: 16,
    labels: ["pronunciation", "noun-classes", "spelling-patterns"],
  },
  {
    id: "pron-adv-003",
    type: "multiple_choice",
    question:
      "Why does mispronouncing a Shona word matter more than in English?",
    correctAnswer:
      "Tone and vowel quality can change the meaning entirely — what sounds close may mean something different",
    options: [
      "Tone and vowel quality can change the meaning entirely — what sounds close may mean something different",
      "Shona speakers are more strict about pronunciation than English speakers",
      "All Shona words sound alike so errors cause confusion",
      "Pronunciation only matters in formal speech",
    ],
    explanation:
      "As a tonal language with consistent vowels, even small pronunciation differences can shift meaning. Context helps, but correctness matters.",
    difficulty: "advanced",
    points: 16,
    labels: ["pronunciation", "tone", "cultural"],
  },
  {
    id: "pron-adv-004",
    type: "translation_builder",
    question: "Build the Shona word for 'question' using: mubvunzo",
    correctAnswer: ["mu", "bvunzo"],
    distractors: ["chi", "va", "ku", "ma"],
    explanation:
      "Mu-bvunzo = question (mu- class noun). The 'bv' is a bilabial cluster — both lips vibrate together.",
    difficulty: "advanced",
    points: 16,
    labels: ["pronunciation", "consonant-clusters", "spelling-patterns"],
  },
  {
    id: "pron-adv-005",
    type: "translation_builder",
    question: "Build the Shona phrase: 'words and answers'",
    correctAnswer: ["mazwi", "nemhinduro"],
    distractors: ["ndimi", "muridzo", "kutaura", "kushevedza"],
    explanation:
      "Mazwi nemhinduro = words and answers. Mazwi = words (ma- plural of izwi). Mhinduro = answers. Ne = and.",
    difficulty: "advanced",
    points: 16,
    labels: ["pronunciation", "rules", "grammar"],
  },
  {
    id: "pron-adv-006",
    type: "multiple_choice",
    question: "The best way for a learner to absorb Shona tone naturally is…",
    correctAnswer:
      "Listening to Shona music and speech — tone comes with exposure",
    options: [
      "Listening to Shona music and speech — tone comes with exposure",
      "Memorising a tone chart before speaking",
      "Only learning words that have no tone difference",
      "Asking a native speaker to correct every sentence",
    ],
    explanation:
      "Native Shona speakers hear tone intuitively. For learners, extensive listening to music, conversation, and stories is the most natural path.",
    difficulty: "advanced",
    points: 18,
    labels: ["pronunciation", "tone", "cultural", "learning"],
  },
];
