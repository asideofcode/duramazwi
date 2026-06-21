export const visitingChallenges = [
  // ─────────────────────────────────────────────────────
  // BEGINNER — visit-beg-* (8 total, multiple_choice, 10pts)
  // ─────────────────────────────────────────────────────

  {
    id: "visit-beg-001",
    type: "multiple_choice",
    question: "What does 'Ndisvika' mean in Shona?",
    correctAnswer: "I have arrived",
    options: ["I have arrived", "I am leaving", "I am coming", "I am lost"],
    explanation:
      "Ndisvika = I have arrived. It is one of the first messages you send when you land — to family waiting at home or at the airport.",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "arriving", "vocab"],
  },
  {
    id: "visit-beg-002",
    type: "multiple_choice",
    question: "What does 'Mauya!' mean in Shona?",
    correctAnswer: "You have come! (a welcome)",
    options: [
      "You have come! (a welcome)",
      "Sit down!",
      "Come here!",
      "You are late!",
    ],
    explanation:
      "Mauya! = You have come! — a joyful exclamation of welcome. You will hear this the moment you arrive at a village homestead.",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "at-the-village", "vocab"],
  },
  {
    id: "visit-beg-003",
    type: "multiple_choice",
    question: "What is a 'Kombi' in Zimbabwe?",
    correctAnswer: "A minibus — the primary public transport",
    options: [
      "A minibus — the primary public transport",
      "A long-distance coach",
      "A motorcycle taxi",
      "A government bus",
    ],
    explanation:
      "Kombi = minibus. Kombis are packed, loud, and go everywhere. They fill up before leaving — there are no fixed departure times.",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "navigating", "vocab"],
  },
  {
    id: "visit-beg-004",
    type: "multiple_choice",
    question: "What does 'Garai!' mean?",
    correctAnswer: "Sit! (a welcoming command)",
    options: [
      "Sit! (a welcoming command)",
      "Go away!",
      "Eat!",
      "Stand up!",
    ],
    explanation:
      "Garai! = Sit! — said warmly to a guest. It is the host inviting you to settle in, not a harsh command.",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "at-the-village", "vocab"],
  },
  {
    id: "visit-beg-005",
    type: "multiple_choice",
    question: "What does 'Muenzi' mean in Shona?",
    correctAnswer: "Guest",
    options: ["Guest", "Host", "Visitor from abroad only", "Family member"],
    explanation:
      "Muenzi = guest. In Shona culture, guests hold an honoured position — hospitality to muenzi is a cultural obligation.",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "hosting-guests", "vocab"],
  },
  {
    id: "visit-beg-006",
    type: "multiple_choice",
    question: "What does 'Safara' mean?",
    correctAnswer: "Go well (said to a departing guest)",
    options: [
      "Go well (said to a departing guest)",
      "Stay well (said by the guest)",
      "Come back soon",
      "Thank you for coming",
    ],
    explanation:
      "Safara = go well. The host says this to the guest as they leave. The guest responds with 'Gara zvakanaka' (stay well).",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "hosting-guests", "vocab"],
  },
  {
    id: "visit-beg-007",
    type: "multiple_choice",
    question: "What is the 'Rank' in Zimbabwean transport?",
    correctAnswer: "The kombi/bus terminus where transport departs",
    options: [
      "The kombi/bus terminus where transport departs",
      "A police roadblock",
      "A petrol station",
      "A taxi booking office",
    ],
    explanation:
      "The Rank is the transport hub — kombis, buses, and taxis depart from here. Ask for the rank to find your transport.",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "navigating", "vocab"],
  },
  {
    id: "visit-beg-008",
    type: "multiple_choice",
    question: "What does 'Ndinoshanyira' mean?",
    correctAnswer: "I am visiting / I am a visitor",
    options: [
      "I am visiting / I am a visitor",
      "I am leaving",
      "I am working here",
      "I am lost",
    ],
    explanation:
      "Ndinoshanyira = I am visiting. Use this to explain yourself to officials, family, or anyone asking your purpose.",
    difficulty: "beginner",
    points: 10,
    labels: ["visiting", "arriving", "vocab"],
  },

  // ─────────────────────────────────────────────────────
  // INTERMEDIATE — visit-int-* (8 total, 12-14pts)
  // ─────────────────────────────────────────────────────

  {
    id: "visit-int-001",
    type: "multiple_choice",
    question:
      "You arrive at a village unannounced. What should you expect?",
    correctAnswer:
      "A warm, unconditional welcome — hospitality does not require notice",
    options: [
      "A warm, unconditional welcome — hospitality does not require notice",
      "Polite requests to come back when expected",
      "A formal introduction process before entry",
      "To wait outside until invited",
    ],
    explanation:
      "In Shona culture, arriving unannounced is perfectly fine. Hospitality is unconditional — you will be welcomed, fed, and included.",
    difficulty: "intermediate",
    points: 12,
    labels: ["visiting", "at-the-village", "cultural"],
  },
  {
    id: "visit-int-002",
    type: "multiple_choice",
    question:
      "A host gives you water on arrival. What is the culturally correct response?",
    correctAnswer:
      "Accept it with both hands and a thank-you — refusing is rude",
    options: [
      "Accept it with both hands and a thank-you — refusing is rude",
      "Politely decline unless you are thirsty",
      "Ask what kind of water it is first",
      "Accept it with one hand casually",
    ],
    explanation:
      "Ndikupei mvura (let me give you water) is the first obligation to a guest. Refusing is considered disrespectful. Accept with both hands.",
    difficulty: "intermediate",
    points: 12,
    labels: ["visiting", "at-the-village", "cultural"],
  },
  {
    id: "visit-int-003",
    type: "multiple_choice",
    question:
      "You are on a kombi and need to get off. What do you say to the conductor?",
    correctAnswer: "Ndiniburuke pano — drop me here",
    options: [
      "Ndiniburuke pano — drop me here",
      "Ndinoenda — I am going",
      "Buda — get out",
      "Imari? — how much?",
    ],
    explanation:
      "Ndiniburuke pano = drop me here. This is the phrase for signalling your stop to the conductor on a kombi.",
    difficulty: "intermediate",
    points: 12,
    labels: ["visiting", "navigating", "phrases"],
  },
  {
    id: "visit-int-004",
    type: "multiple_choice",
    question:
      "You are at a police road block. What is the correct approach?",
    correctAnswer:
      "Be polite and cooperative — road blocks are routine documentation checks",
    options: [
      "Be polite and cooperative — road blocks are routine documentation checks",
      "Ask why you are being stopped",
      "Show frustration at the delay",
      "Refuse to stop unless in uniform",
    ],
    explanation:
      "Road blocks are very common in Zimbabwe. Police check vehicles and documents routinely. Cooperate, be polite, and have your passport ready.",
    difficulty: "intermediate",
    points: 12,
    labels: ["visiting", "navigating", "cultural"],
  },
  {
    id: "visit-int-005",
    type: "multiple_choice",
    question:
      "'Dare renyu rakanaka' — when would you say this?",
    correctAnswer:
      "To compliment your host on their home and gathering space",
    options: [
      "To compliment your host on their home and gathering space",
      "To ask where the gathering space is",
      "To describe your own home",
      "To say goodbye at the dare",
    ],
    explanation:
      "Dare renyu rakanaka = your space/home is good. It is a warm compliment said to a host — it earns you appreciation.",
    difficulty: "intermediate",
    points: 12,
    labels: ["visiting", "hosting-guests", "phrases"],
  },
  {
    id: "visit-int-006",
    type: "multiple_choice",
    question:
      "You want to take a kombi to a specific destination. What do you ask at the rank?",
    correctAnswer: "Kombi inoendera...? — Does a kombi go to...?",
    options: [
      "Kombi inoendera...? — Does a kombi go to...?",
      "Ndiniburuke pano — drop me here",
      "Enda mberi — go straight",
      "Imari? — how much?",
    ],
    explanation:
      "Kombi inoendera [destination]? = Does a kombi go to [destination]? Ask this at the rank before boarding to confirm the route.",
    difficulty: "intermediate",
    points: 12,
    labels: ["visiting", "navigating", "phrases"],
  },
  {
    id: "visit-int-007",
    type: "multiple_choice",
    question:
      "What is the 'Hurukuro' that happens around the evening fire?",
    correctAnswer:
      "Conversation and discussion — stories, laughter, and wisdom shared in the evening",
    options: [
      "Conversation and discussion — stories, laughter, and wisdom shared in the evening",
      "A traditional meal served at dusk",
      "A ceremony of welcome for guests",
      "A formal greeting exchange",
    ],
    explanation:
      "Hurukuro = conversation. Evening hurukuro around the fire is one of the most treasured experiences of visiting a Zimbabwean home.",
    difficulty: "intermediate",
    points: 12,
    labels: ["visiting", "at-the-village", "cultural"],
  },
  {
    id: "visit-int-008",
    type: "multiple_choice",
    question:
      "As a first-time visitor to a village home, which gift is most appropriate to bring?",
    correctAnswer:
      "Practical staples — sugar, mealie meal, cooking oil, or money for the children",
    options: [
      "Practical staples — sugar, mealie meal, cooking oil, or money for the children",
      "An expensive piece of jewellery",
      "A souvenir from your home country",
      "Flowers from a local market",
    ],
    explanation:
      "Practical gifts are the most appreciated for first village visits. Sugar (shuga), mealie meal (hupfu), and cooking oil are always needed and warmly received.",
    difficulty: "intermediate",
    points: 14,
    labels: ["visiting", "hosting-guests", "cultural"],
  },

  // ─────────────────────────────────────────────────────
  // ADVANCED — visit-adv-* (4 total, translation_builder, 16-18pts)
  // ─────────────────────────────────────────────────────

  {
    id: "visit-adv-001",
    type: "translation_builder",
    question: "Build the Shona phrase: 'I have arrived in Harare'",
    correctAnswer: ["Ndisvika", "Harare"],
    distractors: ["Ndinouya", "muZimbabwe", "ndinoenda", "ndiri"],
    explanation:
      "Ndisvika Harare = I have arrived in Harare. Ndisvika is the perfect form — the action is complete. This is the first message home after landing.",
    difficulty: "advanced",
    points: 16,
    labels: ["visiting", "arriving", "grammar"],
  },
  {
    id: "visit-adv-002",
    type: "translation_builder",
    question: "Build the Shona sentence: 'I want to go to the village'",
    correctAnswer: ["Ndinoda", "kuenda", "kumusha"],
    distractors: ["Ndinouya", "kubva", "kutown", "ndisvika"],
    explanation:
      "Ndinoda kuenda kumusha = I want to go to the village. Ndinoda = I want. Kuenda = to go. Kumusha = to the village/homestead.",
    difficulty: "advanced",
    points: 16,
    labels: ["visiting", "at-the-village", "grammar"],
  },
  {
    id: "visit-adv-003",
    type: "translation_builder",
    question: "Build the Shona sentence: 'I am leaving — stay well'",
    correctAnswer: ["Ndinoenda", "—", "Gara", "zvakanaka"],
    distractors: ["Ndisvika", "Safara", "ndinoda", "tatenda"],
    explanation:
      "Ndinoenda — Gara zvakanaka. Ndinoenda = I am leaving. Gara zvakanaka = stay well — said by the departing guest to the host.",
    difficulty: "advanced",
    points: 16,
    labels: ["visiting", "hosting-guests", "grammar"],
  },
  {
    id: "visit-adv-004",
    type: "translation_builder",
    question: "Build the Shona sentence: 'Tell me where to get off'",
    correctAnswer: ["Ndiudze", "pandanoburuka"],
    distractors: ["Ndiniburuke", "pano", "ndinoda", "kuenda"],
    explanation:
      "Ndiudze pandanoburuka = tell me where to get off. Say this to the kombi conductor when you board — they will call your stop for you.",
    difficulty: "advanced",
    points: 18,
    labels: ["visiting", "navigating", "grammar"],
  },
];
