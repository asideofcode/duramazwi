export const leadershipChallenges = [
  // ─────────────────────────────────────────────────────
  // BEGINNER — lead-* (8 total, multiple_choice, 10pts)
  // ─────────────────────────────────────────────────────

  {
    id: "lead-001",
    type: "multiple_choice",
    question: "What does 'Ishe' mean in Shona?",
    correctAnswer: "Chief",
    options: ["Chief", "King", "Village headman", "Government official"],
    explanation:
      "Ishe is the Shona word for a traditional chief — a person with hereditary authority over a territory and its people.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "chiefs", "vocab"],
  },
  {
    id: "lead-002",
    type: "multiple_choice",
    question: "What does 'Mambo' mean in Shona?",
    correctAnswer: "King or paramount chief",
    options: ["King or paramount chief", "Village elder", "Spirit medium", "Government minister"],
    explanation:
      "Mambo means king or paramount chief — a higher-ranking chief with authority over multiple village chiefs and their territories.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "chiefs", "vocab"],
  },
  {
    id: "lead-003",
    type: "multiple_choice",
    question: "What does 'Sabhuku' mean in Shona?",
    correctAnswer: "Village head — the chief's representative at village level",
    options: [
      "Village head — the chief's representative at village level",
      "A district court judge",
      "The chief's eldest son",
      "A traditional healer",
    ],
    explanation:
      "Sabhuku literally means 'one who holds the book' — the village head who knows every family and represents the chief at village level.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "headmen", "vocab"],
  },
  {
    id: "lead-004",
    type: "multiple_choice",
    question: "What is the 'Dare raMambo'?",
    correctAnswer: "The chief's court — where disputes are heard and decisions made",
    options: [
      "The chief's court — where disputes are heard and decisions made",
      "The chief's home and sleeping quarters",
      "A sacred ancestral shrine",
      "A formal government office",
    ],
    explanation:
      "Dare raMambo is the chief's court — an open meeting space where the community brings disputes and the chief deliberates and decides.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "chiefs", "vocab"],
  },
  {
    id: "lead-005",
    type: "multiple_choice",
    question: "What does 'Mutemo wechivanhu' mean?",
    correctAnswer: "Customary law — the traditional legal system",
    options: [
      "Customary law — the traditional legal system",
      "A government law passed in Parliament",
      "A religious commandment",
      "A chief's personal ruling",
    ],
    explanation:
      "Mutemo wechivanhu = customary law. It governs marriage, inheritance, land use, and disputes in traditional settings — distinct from statutory (government) law.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "governance", "vocab"],
  },
  {
    id: "lead-006",
    type: "multiple_choice",
    question: "What does 'Kuregerera' mean in Shona?",
    correctAnswer: "To forgive",
    options: ["To forgive", "To punish", "To accuse", "To rule"],
    explanation:
      "Kuregerera means to forgive. In Shona conflict resolution, forgiveness is expected as the outcome of any settled dispute — not optional.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "conflict-resolution", "vocab"],
  },
  {
    id: "lead-007",
    type: "multiple_choice",
    question: "What does 'Dunhu' mean in Shona traditional governance?",
    correctAnswer: "A ward — an administrative area under a headman",
    options: [
      "A ward — an administrative area under a headman",
      "A single family homestead",
      "A sacred ancestral meeting place",
      "A district governed by the mambo",
    ],
    explanation:
      "Dunhu is a ward — a collection of villages governed by a headman, sitting between the individual musha and the chief's chieftaincy.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "headmen", "vocab"],
  },
  {
    id: "lead-008",
    type: "multiple_choice",
    question: "What does 'Munyai' mean in Shona?",
    correctAnswer: "A spokesperson or negotiator — someone who speaks on behalf of a party",
    options: [
      "A spokesperson or negotiator — someone who speaks on behalf of a party",
      "A chief's personal bodyguard",
      "A government interpreter",
      "An accused person in the dare",
    ],
    explanation:
      "Munyai is a formal spokesperson or negotiator — used in dare proceedings and negotiations like roora. A skilled munyai frames his principal's case in culturally appropriate terms.",
    difficulty: "beginner",
    points: 10,
    labels: ["leadership", "governance", "vocab"],
  },

  // ─────────────────────────────────────────────────────
  // INTERMEDIATE — lead-* (8 total, multiple_choice, 12pts)
  // ─────────────────────────────────────────────────────

  {
    id: "lead-009",
    type: "multiple_choice",
    question: "A Shona chief inherits his position through…",
    correctAnswer: "Lineage — the position passes through the founding family's clan line",
    options: [
      "Lineage — the position passes through the founding family's clan line",
      "Election by community members",
      "Government appointment by the Minister of Local Government",
      "The choice of the spirit medium",
    ],
    explanation:
      "Chieftaincy is inherited — not elected. It passes through the lineage of the founding family, confirmed by clan elders. The government formally recognises chiefs, but the community's acceptance is what confers real authority.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "chiefs", "cultural"],
  },
  {
    id: "lead-010",
    type: "multiple_choice",
    question: "The goal of a hearing at the dare (chief's court) is…",
    correctAnswer: "Restoration of community harmony — not punishment of the guilty",
    options: [
      "Restoration of community harmony — not punishment of the guilty",
      "To convict the wrongdoer and impose the maximum penalty",
      "To publicly shame the party who was in the wrong",
      "To transfer the dispute to the formal courts in town",
    ],
    explanation:
      "The dare is not adversarial. Its goal is kugadzirisa — to settle and restore. All parties must be heard, the wrong acknowledged, restitution made, and the relationship healed. Punishment is a last resort.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "governance", "cultural"],
  },
  {
    id: "lead-011",
    type: "multiple_choice",
    question: "The sabhuku (village head) is important because…",
    correctAnswer: "He knows every family in his area and must approve new settlers",
    options: [
      "He knows every family in his area and must approve new settlers",
      "He collects taxes on behalf of the government",
      "He trains the chief's successors",
      "He performs religious ceremonies for the village",
    ],
    explanation:
      "The sabhuku is the community's institutional memory at village level — he knows land boundaries, family histories, and disputes. No one settles on land in his area without his approval.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "headmen", "cultural"],
  },
  {
    id: "lead-012",
    type: "multiple_choice",
    question: "Tribute (zvipfukuto) brought to a chief is best understood as…",
    correctAnswer: "A relational act — affirming the covenant between community and chief",
    options: [
      "A relational act — affirming the covenant between community and chief",
      "A payment required by customary law",
      "A bribe to receive favourable judgements",
      "A tax collected by government authority",
    ],
    explanation:
      "Zvipfukuto is not taxation. It is a communal affirmation — the community acknowledges the chief's authority, and the chief in return is expected to protect, arbitrate, and serve. The relationship is mutual and binding.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "chiefs", "cultural"],
  },
  {
    id: "lead-013",
    type: "multiple_choice",
    question: "In Shona conflict resolution, what must happen before true resolution is reached?",
    correctAnswer: "The wrongdoer must acknowledge the wrong (kubvuma) publicly",
    options: [
      "The wrongdoer must acknowledge the wrong (kubvuma) publicly",
      "The victim must accept financial compensation only",
      "The chief must impose a formal punishment first",
      "The matter must be referred to the statutory courts",
    ],
    explanation:
      "Kubvuma — to agree or confess — is essential. Without acknowledgement of the wrong, restitution rings hollow and reconciliation (kuyanana) cannot genuinely occur. Public acknowledgement before the community is part of the process.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "conflict-resolution", "cultural"],
  },
  {
    id: "lead-014",
    type: "multiple_choice",
    question: "Zimbabwe operates a dual legal system. This means…",
    correctAnswer: "Both statutory law (Parliament-made) and customary law operate simultaneously",
    options: [
      "Both statutory law (Parliament-made) and customary law operate simultaneously",
      "Traditional courts have replaced formal courts in rural areas",
      "Only the chief's court is valid in communal areas",
      "Customary law has been abolished by the Constitution",
    ],
    explanation:
      "Zimbabwe's dual legal system means that both statutory courts and customary (traditional) courts operate. They sometimes conflict, particularly on inheritance and gender rights, and the relationship between the two is a live legal and political debate.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "governance", "cultural"],
  },
  {
    id: "lead-015",
    type: "multiple_choice",
    question: "Conflict resolution in Shona culture follows a hierarchy. What is the correct order?",
    correctAnswer: "Family elder → sabhuku → headman's dare → chief's dare",
    options: [
      "Family elder → sabhuku → headman's dare → chief's dare",
      "Chief's dare → headman's dare → sabhuku → family elder",
      "Sabhuku → chief's dare → statutory court",
      "Statutory court → chief's dare → family elder",
    ],
    explanation:
      "Disputes escalate through a hierarchy: family elder first, then sabhuku, then headman's dare, and only finally the chief's dare. Going directly to the chief without first attempting resolution at lower levels is considered bad faith.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "conflict-resolution", "cultural"],
  },
  {
    id: "lead-016",
    type: "multiple_choice",
    question: "The gurukota is the chief's…",
    correctAnswer: "Key advisor and minister in the chief's court",
    options: [
      "Key advisor and minister in the chief's court",
      "Eldest son and designated heir",
      "Official representative to the government",
      "Personal traditional healer",
    ],
    explanation:
      "The gurukota is the chief's senior advisor in the dare — someone who shapes how cases are heard and helps the chief articulate decisions. Skilled gurukota are celebrated in Shona oral tradition alongside the chiefs they served.",
    difficulty: "intermediate",
    points: 12,
    labels: ["leadership", "headmen", "cultural"],
  },

  // ─────────────────────────────────────────────────────
  // ADVANCED — lead-* (4 total, translation_builder, 16pts)
  // ─────────────────────────────────────────────────────

  {
    id: "lead-017",
    type: "translation_builder",
    question: "Build the Shona sentence: 'The chief rules his people'",
    correctAnswer: ["Ishe", "anotonga", "vanhu", "vake"],
    distractors: ["Mambo", "anoda", "dare", "sabhuku"],
    explanation:
      "Ishe anotonga vanhu vake = The chief rules his people. Anotonga = rules/governs (he). Vanhu = people. Vake = his.",
    difficulty: "advanced",
    points: 16,
    labels: ["leadership", "chiefs", "grammar"],
  },
  {
    id: "lead-018",
    type: "translation_builder",
    question: "Build the Shona sentence: 'We resolve this dispute at the court'",
    correctAnswer: ["Tinogadzirisa", "nharo", "iyi", "kudare"],
    distractors: ["Tinoda", "ishe", "mhosva", "kumba"],
    explanation:
      "Tinogadzirisa nharo iyi kudare = We resolve this dispute at the court. Tinogadzirisa = we settle/resolve. Nharo = dispute. Iyi = this. Kudare = at the court.",
    difficulty: "advanced",
    points: 16,
    labels: ["leadership", "conflict-resolution", "grammar"],
  },
  {
    id: "lead-019",
    type: "translation_builder",
    question: "Build the Shona sentence: 'The headman knows every family'",
    correctAnswer: ["Sabhuku", "anoziva", "mhuri", "dzose"],
    distractors: ["Ishe", "anotonga", "vanhu", "musha"],
    explanation:
      "Sabhuku anoziva mhuri dzose = The headman knows every family. Anoziva = knows (he). Mhuri = family. Dzose = all/every.",
    difficulty: "advanced",
    points: 16,
    labels: ["leadership", "headmen", "grammar"],
  },
  {
    id: "lead-020",
    type: "translation_builder",
    question: "Build the Shona sentence: 'They forgave each other at the dare'",
    correctAnswer: ["Vakaregerana", "kudare"],
    distractors: ["Vakachema", "kumba", "ishe", "mhosva"],
    explanation:
      "Vakaregerana kudare = They forgave each other at the dare. Vakaregerana = they forgave each other (reciprocal form of kuregerera). Kudare = at the dare/court.",
    difficulty: "advanced",
    points: 16,
    labels: ["leadership", "conflict-resolution", "grammar"],
  },
];
