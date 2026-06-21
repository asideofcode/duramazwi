export const folktalesChallenges = [
  // ─────────────────────────────────────────────────────
  // BEGINNER — folk-* (8 total, multiple_choice, 10pts)
  // ─────────────────────────────────────────────────────

  {
    id: "folk-001",
    type: "multiple_choice",
    question: "What does 'Ngano' mean in Shona?",
    correctAnswer: "Folktale / Story",
    options: ["Folktale / Story", "Song", "Dance", "Proverb"],
    explanation:
      "Ngano = folktale or story. In Shona culture, ngano are the primary vehicle for transmitting moral values to children.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "vocab"],
  },
  {
    id: "folk-002",
    type: "multiple_choice",
    question: "The Shona opening phrase 'Kare kare...' means…",
    correctAnswer: "Long long ago",
    options: ["Long long ago", "Listen carefully", "Once upon a time tonight", "In this village"],
    explanation:
      "Kare kare = long long ago. It is the traditional opening of a Shona ngano — when children hear it, they know a story is beginning.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "vocab", "tradition"],
  },
  {
    id: "folk-003",
    type: "multiple_choice",
    question: "In Shona ngano, Tsuro is always the…",
    correctAnswer: "Clever trickster (the hare)",
    options: ["Clever trickster (the hare)", "Greedy villain", "Powerful king", "Wisdom figure"],
    explanation:
      "Tsuro (the hare) is the classic trickster character in Shona ngano — always using cleverness (njere) to outsmart bigger, stronger animals.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "characters", "vocab"],
  },
  {
    id: "folk-004",
    type: "multiple_choice",
    question: "Which animal is the greedy villain in most Shona ngano?",
    correctAnswer: "Gava (the hyena)",
    options: ["Gava (the hyena)", "Tsuro (the hare)", "Shumba (the lion)", "Shiri (the bird)"],
    explanation:
      "Gava the hyena is the classic greedy villain of Shona ngano — always wanting more than their share, and always punished for it.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "characters", "vocab"],
  },
  {
    id: "folk-005",
    type: "multiple_choice",
    question: "The word 'Murombo' in ngano refers to…",
    correctAnswer: "The poor person — often the unexpected hero",
    options: [
      "The poor person — often the unexpected hero",
      "The king of the animals",
      "The clever trickster",
      "A wisdom spirit from the sky",
    ],
    explanation:
      "Murombo = the poor person. In ngano, the murombo is usually the hero — their generosity and good character are rewarded while the wealthy villain suffers.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "characters", "vocab"],
  },
  {
    id: "folk-006",
    type: "multiple_choice",
    question: "In Shona ngano, Shumba (the lion) represents…",
    correctAnswer: "The powerful king — proud but sometimes foolish",
    options: [
      "The powerful king — proud but sometimes foolish",
      "The humble helper who teaches wisdom",
      "The greedy villain who steals food",
      "The trickster who outsmarts everyone",
    ],
    explanation:
      "Shumba is the king of animals — powerful and proud. But in ngano, his pride sometimes makes him foolish, and he is often outwitted by Tsuro.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "characters", "vocab"],
  },
  {
    id: "folk-007",
    type: "multiple_choice",
    question: "What does 'Pfuma' mean in the context of Shona ngano?",
    correctAnswer: "Wealth — often a temptation or trap in stories",
    options: [
      "Wealth — often a temptation or trap in stories",
      "A type of traditional drum",
      "The fire around which stories are told",
      "The moral lesson at the end of a story",
    ],
    explanation:
      "Pfuma = wealth. In ngano, wealth (pfuma) is often the bait that traps the greedy character — and the contrast with hunhu (good character) is the heart of the story.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "vocab", "themes"],
  },
  {
    id: "folk-008",
    type: "multiple_choice",
    question: "When does a traditional Shona ngano take place?",
    correctAnswer: "In the evenings, around the fire",
    options: [
      "In the evenings, around the fire",
      "At midday in the fields",
      "At the river in the morning",
      "Inside the dare (council) on formal occasions only",
    ],
    explanation:
      "Ngano are told in the evenings around the fire — usiku (night) and moto (fire) are their natural home. This is when the boundary between the living and ancestral worlds is thinnest.",
    difficulty: "beginner",
    points: 10,
    labels: ["folktales", "tradition", "cultural"],
  },

  // ─────────────────────────────────────────────────────
  // INTERMEDIATE — folk-* (8 total, multiple_choice, 12-14pts)
  // ─────────────────────────────────────────────────────

  {
    id: "folk-009",
    type: "multiple_choice",
    question: "In the ngano of Tsuro naGava, how does Tsuro defeat Gava?",
    correctAnswer: "By tricking Gava into a well with promises of power, then leaving him there",
    options: [
      "By tricking Gava into a well with promises of power, then leaving him there",
      "By fighting Gava and winning with speed",
      "By asking the lion to punish Gava",
      "By convincing all the animals to vote Gava out of the forest",
    ],
    explanation:
      "Tsuro tells Gava about a magical well that grants power to whoever drinks from it. Gava eagerly lowers himself in — and Tsuro walks away. Gava's own greed does the trapping. The moral: njere (cleverness) beats simba (strength).",
    difficulty: "intermediate",
    points: 12,
    labels: ["folktales", "stories", "themes"],
  },
  {
    id: "folk-010",
    type: "multiple_choice",
    question: "What is the Shona word for the moral or lesson in a ngano?",
    correctAnswer: "Pfundo",
    options: ["Pfundo", "Munyori", "Moto", "Nganonyiwe"],
    explanation:
      "Pfundo = lesson or moral. After telling a ngano, the elder asks 'Chii chawakadzidza?' (What did you learn?), and the children articulate the pfundo.",
    difficulty: "intermediate",
    points: 12,
    labels: ["folktales", "vocab", "tradition"],
  },
  {
    id: "folk-011",
    type: "multiple_choice",
    question: "In Shona ngano, the poor character (murombo) typically wins because…",
    correctAnswer: "Their generosity and good character (hunhu) are rewarded",
    options: [
      "Their generosity and good character (hunhu) are rewarded",
      "They are physically stronger than the rich character",
      "They have a secret magical power",
      "The village chief always sides with the poor",
    ],
    explanation:
      "Hunhu (character, humanness) is the deciding virtue in ngano. The murombo wins not through luck or power, but because their generosity and good character attract reward — often from a spirit in disguise.",
    difficulty: "intermediate",
    points: 12,
    labels: ["folktales", "themes", "cultural"],
  },
  {
    id: "folk-012",
    type: "multiple_choice",
    question: "What does 'Chitsikedu' mean in the context of a ngano?",
    correctAnswer: "Punishment — what the greedy or disrespectful character receives",
    options: [
      "Punishment — what the greedy or disrespectful character receives",
      "The reward given to the hero at the end",
      "The opening call-and-response phrase",
      "The fire used during storytelling",
    ],
    explanation:
      "Chitsikedu = punishment. In ngano, the villain always receives chitsikedu — ngano are morally unambiguous. The punishment is proportional to the wrong.",
    difficulty: "intermediate",
    points: 12,
    labels: ["folktales", "vocab", "themes"],
  },
  {
    id: "folk-013",
    type: "multiple_choice",
    question: "The call-and-response 'Nganonyiwe! / Nganonyiwe!' in storytelling means…",
    correctAnswer: "The storyteller and audience formally open story-time together",
    options: [
      "The storyteller and audience formally open story-time together",
      "The storyteller announces the title of the story",
      "The audience signals that they are bored",
      "The elders give permission to start the fire",
    ],
    explanation:
      "'Nganonyiwe!' means 'May a story be told!' — the call-and-response exchange formally marks the transition into ngano-time. The community must open the door; the storyteller cannot enter alone.",
    difficulty: "intermediate",
    points: 12,
    labels: ["folktales", "tradition", "vocab"],
  },
  {
    id: "folk-014",
    type: "multiple_choice",
    question: "Which of these best describes the moral of Murombo naMupfumi?",
    correctAnswer: "Generosity to strangers is rewarded; greed turns blessing into ruin",
    options: [
      "Generosity to strangers is rewarded; greed turns blessing into ruin",
      "Hard work always produces wealth",
      "The rich man should share his food equally with all villagers",
      "God rewards those who pray the loudest",
    ],
    explanation:
      "In the ngano, Murombo shares his last sadza with a spirit messenger of Mwari and receives transformative reward. Mupfumi fakes welcome and loses everything. The lesson is about unyo (hospitality) as a moral obligation, not a nicety.",
    difficulty: "intermediate",
    points: 14,
    labels: ["folktales", "stories", "themes"],
  },
  {
    id: "folk-015",
    type: "multiple_choice",
    question: "After a ngano ends, the elder asks 'Chii chawakadzidza?' — what does this mean?",
    correctAnswer: "What did you learn?",
    options: [
      "What did you learn?",
      "Was that story true?",
      "Who was your favourite character?",
      "Do you want to hear another story?",
    ],
    explanation:
      "'Chii chawakadzidza?' = What did you learn? This is not a rhetorical question — children are expected to articulate the pfundo. The ngano is only complete when the lesson has been received and spoken.",
    difficulty: "intermediate",
    points: 12,
    labels: ["folktales", "tradition", "vocab"],
  },
  {
    id: "folk-016",
    type: "multiple_choice",
    question: "The chief's daughter in 'Mwanasikana waShe' chooses her husband based on…",
    correctAnswer: "Wisdom — the ability to answer her three riddles",
    options: [
      "Wisdom — the ability to answer her three riddles",
      "Wealth — the most cattle wins",
      "Strength — the strongest man wins",
      "Her father's political connections",
    ],
    explanation:
      "The chief's daughter poses three riddles that wealthy suitors cannot answer. The poorest man — who has listened to elders, birds, and water — answers them all. The ngano teaches that njere (wisdom) is worth more than pfuma (wealth).",
    difficulty: "intermediate",
    points: 12,
    labels: ["folktales", "stories", "themes"],
  },

  // ─────────────────────────────────────────────────────
  // ADVANCED — folk-* (4 total, translation_builder, 16pts)
  // ─────────────────────────────────────────────────────

  {
    id: "folk-017",
    type: "translation_builder",
    question: "Build the Shona phrase: 'Long long ago there was a hare'",
    correctAnswer: ["Kare", "kare", "pakanga", "pane", "tsuro"],
    distractors: ["Ngano", "kuti", "shumba", "vakare", "panga"],
    explanation:
      "Kare kare pakanga pane tsuro = Long long ago there was a hare. This is the classic ngano opening structure. Pakanga pane = there was.",
    difficulty: "advanced",
    points: 16,
    labels: ["folktales", "grammar", "tradition"],
  },
  {
    id: "folk-018",
    type: "translation_builder",
    question: "Build the Shona sentence: 'The hare outsmarts the hyena'",
    correctAnswer: ["Tsuro", "inokonzera", "gava"],
    distractors: ["Shumba", "inorova", "shiri", "yake"],
    explanation:
      "Tsuro inokonzera gava = The hare outsmarts the hyena. Inokonzera = outsmarts / tricks. This is the core action of the Tsuro naGava ngano.",
    difficulty: "advanced",
    points: 16,
    labels: ["folktales", "grammar", "characters"],
  },
  {
    id: "folk-019",
    type: "translation_builder",
    question: "Build the Shona sentence: 'The moral of this story is wisdom'",
    correctAnswer: ["Pfundo", "yengano", "iyi", "ndeye", "zivo"],
    distractors: ["Ngano", "yangu", "ndeye", "pfuma", "ino"],
    explanation:
      "Pfundo yengano iyi ndeye zivo = The moral of this story is wisdom. Pfundo = moral/lesson. Yengano iyi = of this story. Ndeye = is.",
    difficulty: "advanced",
    points: 16,
    labels: ["folktales", "grammar", "vocab"],
  },
  {
    id: "folk-020",
    type: "translation_builder",
    question: "Build the Shona sentence: 'The storyteller started the call-and-response'",
    correctAnswer: ["Munyori", "akatanga", "nganonyiwe"],
    distractors: ["Moto", "vakatanga", "kuteerera", "vana"],
    explanation:
      "Munyori akatanga nganonyiwe = The storyteller started the call-and-response. Akatanga = started/began. This marks the formal opening of story-time.",
    difficulty: "advanced",
    points: 16,
    labels: ["folktales", "grammar", "tradition"],
  },
];
