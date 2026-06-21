export const religionChallenges = [
  // ─────────────────────────────────────────────────────
  // BEGINNER — rel-* (8 total, multiple_choice, 10pts)
  // ─────────────────────────────────────────────────────

  {
    id: "rel-001",
    type: "multiple_choice",
    question: "What does 'Mwari' mean in Shona?",
    correctAnswer: "God — the supreme being",
    options: ["God — the supreme being", "Ancestor spirit", "Traditional healer", "Holy Spirit"],
    explanation:
      "Mwari is the Shona word for God — the supreme creator. The same word is used in both traditional belief and Christian contexts.",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "traditional", "vocab"],
  },
  {
    id: "rel-002",
    type: "multiple_choice",
    question: "What does 'Vadzimu' mean in Shona?",
    correctAnswer: "Ancestral spirits (plural)",
    options: ["Ancestral spirits (plural)", "Traditional healers", "Church elders", "Wandering spirits"],
    explanation:
      "Vadzimu are the ancestral spirits — the transformed family members who remain active participants in the lives of the living.",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "ancestors", "vocab"],
  },
  {
    id: "rel-003",
    type: "multiple_choice",
    question: "What is a 'N'anga' in Shona culture?",
    correctAnswer: "A traditional healer and spirit medium",
    options: [
      "A traditional healer and spirit medium",
      "A church pastor",
      "An avenging spirit",
      "A clan elder",
    ],
    explanation:
      "A n'anga is a traditional healer and spiritual specialist — consulted for both medicinal and spiritual guidance. This is not superstition; it is expert counsel.",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "traditional", "vocab"],
  },
  {
    id: "rel-004",
    type: "multiple_choice",
    question: "What does 'Kereke' mean in Shona?",
    correctAnswer: "Church",
    options: ["Church", "Prayer", "Bible", "Sunday"],
    explanation:
      "Kereke is the Shona word for church — borrowed from the Afrikaans word 'kerk'. It refers to both the building and the congregation.",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "christianity", "vocab"],
  },
  {
    id: "rel-005",
    type: "multiple_choice",
    question: "What does 'Munamato' mean in Shona?",
    correctAnswer: "Prayer",
    options: ["Prayer", "Scripture", "Worship song", "Sermon"],
    explanation:
      "Munamato means prayer — the act of praying. The verb form is kunamata (to pray or worship).",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "christianity", "vocab"],
  },
  {
    id: "rel-006",
    type: "multiple_choice",
    question: "What is a 'Ngozi' in Shona belief?",
    correctAnswer: "An avenging spirit of someone who died wrongfully",
    options: [
      "An avenging spirit of someone who died wrongfully",
      "A wandering foreign spirit",
      "An ancestral guardian spirit",
      "A spirit that brings good fortune",
    ],
    explanation:
      "Ngozi is the spirit of a person who died wrongfully — through murder or mistreatment — and returns to afflict the family responsible until proper restitution is made.",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "traditional", "vocab"],
  },
  {
    id: "rel-007",
    type: "multiple_choice",
    question: "What does 'Mweya Mutsvene' mean in Shona?",
    correctAnswer: "Holy Spirit",
    options: ["Holy Spirit", "Sacred ancestor", "Holy Scripture", "Spirit medium"],
    explanation:
      "Mweya Mutsvene = Holy Spirit. Mweya means spirit or wind — the same word covers both natural wind and spiritual presence.",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "christianity", "vocab"],
  },
  {
    id: "rel-008",
    type: "multiple_choice",
    question: "What is 'Kurova guva' in Shona tradition?",
    correctAnswer: "A memorial ceremony to formally welcome back an ancestor's spirit",
    options: [
      "A memorial ceremony to formally welcome back an ancestor's spirit",
      "A funeral burial rite",
      "A harvest thanksgiving ceremony",
      "A wedding blessing ceremony",
    ],
    explanation:
      "Kurova guva is held about a year after a death. It formally brings the spirit of the deceased home as a mudzimu (ancestral spirit) — without it, the spirit may wander and cause harm.",
    difficulty: "beginner",
    points: 10,
    labels: ["religion", "ancestors", "vocab"],
  },

  // ─────────────────────────────────────────────────────
  // INTERMEDIATE — rel-* (8 total, multiple_choice, 12pts)
  // ─────────────────────────────────────────────────────

  {
    id: "rel-009",
    type: "multiple_choice",
    question: "In Shona traditional belief, Mwari communicates with people through…",
    correctAnswer: "The vadzimu (ancestral spirits) acting as intermediaries",
    options: [
      "The vadzimu (ancestral spirits) acting as intermediaries",
      "Dreams sent directly by Mwari without intermediaries",
      "The n'anga reading signs in nature",
      "Priests appointed by the chief",
    ],
    explanation:
      "Mwari is transcendent and remote in traditional Shona belief. Communication flows through the vadzimu, who act as intermediaries between Mwari and the living family.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "traditional", "cultural"],
  },
  {
    id: "rel-010",
    type: "multiple_choice",
    question: "Many Shona people practise both traditional beliefs and Christianity because…",
    correctAnswer: "The two are not seen as mutually exclusive — both address different dimensions of life",
    options: [
      "The two are not seen as mutually exclusive — both address different dimensions of life",
      "Christianity replaced traditional belief entirely in urban areas",
      "Traditional belief is only practised by the elderly",
      "The government requires dual religious practice",
    ],
    explanation:
      "For many Shona people, traditional belief and Christianity are complementary, not competing. Traditional practice addresses ancestors and spirits; Christianity addresses God and salvation. Both are real.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "traditional", "christianity", "cultural"],
  },
  {
    id: "rel-011",
    type: "multiple_choice",
    question: "The Shona word 'Svikiro' refers to…",
    correctAnswer: "A spirit medium — someone through whom an ancestor spirit speaks",
    options: [
      "A spirit medium — someone through whom an ancestor spirit speaks",
      "A wandering spirit with no family",
      "A church prophet",
      "An elder who settles disputes",
    ],
    explanation:
      "A svikiro is a spirit medium — during a session, an ancestral spirit speaks directly through their body. This is a respected and serious spiritual role, distinct from the n'anga.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "traditional", "cultural"],
  },
  {
    id: "rel-012",
    type: "multiple_choice",
    question: "In Apostolic and Pentecostal Shona churches, 'kurapa' (healing) is…",
    correctAnswer: "A central promise — physical healing through prayer is expected",
    options: [
      "A central promise — physical healing through prayer is expected",
      "A rare miracle reserved for special occasions",
      "Only spiritual healing, not physical",
      "Practiced only by Catholic priests",
    ],
    explanation:
      "In Apostolic and Pentecostal traditions, healing through prayer is not peripheral — it is central. Prophets who heal gain enormous authority. This resonates with the n'anga's role in traditional culture.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "modern-practice", "cultural"],
  },
  {
    id: "rel-013",
    type: "multiple_choice",
    question: "What do the white garments (mapfumo machena) worn by Apostolic church members signify?",
    correctAnswer: "Spiritual purity, belonging, and identity within the congregation",
    options: [
      "Spiritual purity, belonging, and identity within the congregation",
      "Mourning for the dead",
      "Senior leadership within the church",
      "Readiness for baptism only",
    ],
    explanation:
      "White garments are a hallmark of Zimbabwe's Apostolic traditions — they signal spiritual status and congregational identity. Members wear them at worship, baptism, and prayer gatherings.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "modern-practice", "cultural"],
  },
  {
    id: "rel-014",
    type: "multiple_choice",
    question: "Doro rechivanhu is brewed for ancestral ceremonies. What is it?",
    correctAnswer: "Traditional sorghum or millet beer offered to the ancestors",
    options: [
      "Traditional sorghum or millet beer offered to the ancestors",
      "A sweetened drink served at Christian celebrations",
      "A medicinal drink prescribed by the n'anga",
      "A fermented fruit drink for weddings only",
    ],
    explanation:
      "Doro rechivanhu is traditional beer brewed from sorghum or millet — specifically made for ancestral ceremonies. The ancestors are offered their share before the living drink.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "ancestors", "cultural"],
  },
  {
    id: "rel-015",
    type: "multiple_choice",
    question: "The phrase 'Rumbidza Mwari' means…",
    correctAnswer: "Praise God",
    options: ["Praise God", "Fear God", "Worship at church", "Thank the ancestors"],
    explanation:
      "Rumbidza Mwari = Praise God. It is a common expression used in Christian worship, testimony, and everyday speech when something goes well.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "christianity", "vocab"],
  },
  {
    id: "rel-016",
    type: "multiple_choice",
    question: "When ancestors 'kurira' (cry out), what does this mean in Shona belief?",
    correctAnswer: "They are signalling through misfortune that they have been neglected",
    options: [
      "They are signalling through misfortune that they have been neglected",
      "They are expressing happiness at good news",
      "They are warning of a natural disaster",
      "They are calling a family member to become a spirit medium",
    ],
    explanation:
      "When the vadzimu kurira (cry out), it manifests as illness, crop failure, or persistent bad luck. It is a signal that the family has not been offering the attention and offerings the ancestors need.",
    difficulty: "intermediate",
    points: 12,
    labels: ["religion", "ancestors", "cultural"],
  },

  // ─────────────────────────────────────────────────────
  // ADVANCED — rel-* (4 total, translation_builder, 16pts)
  // ─────────────────────────────────────────────────────

  {
    id: "rel-017",
    type: "translation_builder",
    question: "Build the Shona sentence: 'I pray to God'",
    correctAnswer: ["Ndinonamata", "kuna", "Mwari"],
    distractors: ["Ndinoda", "kereke", "Vadzimu", "svikiro"],
    explanation:
      "Ndinonamata kuna Mwari = I pray to God. Ndinonamata = I pray/worship. Kuna = to/at. Mwari = God.",
    difficulty: "advanced",
    points: 16,
    labels: ["religion", "christianity", "grammar"],
  },
  {
    id: "rel-018",
    type: "translation_builder",
    question: "Build the Shona sentence: 'We honour our ancestors'",
    correctAnswer: ["Tinopira", "vadzimu", "vedu"],
    distractors: ["Ndinoda", "mudzimu", "wangu", "kereke"],
    explanation:
      "Tinopira vadzimu vedu = We honour our ancestors. Tinopira = we honour/appease. Vadzimu = ancestors. Vedu = our.",
    difficulty: "advanced",
    points: 16,
    labels: ["religion", "ancestors", "grammar"],
  },
  {
    id: "rel-019",
    type: "translation_builder",
    question: "Build the Shona sentence: 'The healer speaks to the spirit'",
    correctAnswer: ["N'anga", "anotaura", "nomunyama"],
    distractors: ["Kereke", "svikiro", "anoda", "mudzimu"],
    explanation:
      "N'anga anotaura nomunyama = The healer speaks to the spirit. Anotaura = speaks. Nomunyama can indicate speaking with a spirit presence. In common usage: n'anga anotaura nomunyama.",
    difficulty: "advanced",
    points: 16,
    labels: ["religion", "traditional", "grammar"],
  },
  {
    id: "rel-020",
    type: "translation_builder",
    question: "Build the Shona sentence: 'We go to church on Sunday'",
    correctAnswer: ["Tinoenda", "kukereke", "zuva", "reSvondo"],
    distractors: ["Ndinoenda", "kumba", "munamato", "Mwari"],
    explanation:
      "Tinoenda kukereke zuva reSvondo = We go to church on Sunday. Tinoenda = we go. Kukereke = to church. Zuva reSvondo = day of Sunday.",
    difficulty: "advanced",
    points: 16,
    labels: ["religion", "christianity", "grammar"],
  },
];
