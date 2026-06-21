export const timeChallenges = [
  // ─────────────────────────────────────────────────────
  // BEGINNER — time-beg-* (16 total, multiple_choice, 10pts)
  // Covers: day names, month names, season identification
  // ─────────────────────────────────────────────────────

  {
    id: "time-beg-001",
    type: "multiple_choice",
    question: "What is the Shona word for Sunday?",
    correctAnswer: "Svondo",
    options: ["Svondo", "Muvhuro", "Mugovera", "Chishanu"],
    explanation:
      "Svondo = Sunday. It comes from the Portuguese word 'domingo'. Portuguese traders introduced it to the Shona.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "days", "vocab"],
  },
  {
    id: "time-beg-002",
    type: "multiple_choice",
    question: "What is the Shona word for Saturday?",
    correctAnswer: "Mugovera",
    options: ["Mugovera", "Svondo", "Chishanu", "Muvhuro"],
    explanation:
      "Mugovera = Saturday. Literally the gathering day — traditionally the day for communal beer and celebration.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "days", "vocab"],
  },
  {
    id: "time-beg-003",
    type: "multiple_choice",
    question: "What does 'Chipiri' mean?",
    correctAnswer: "Tuesday",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    explanation:
      "Chipiri = Tuesday. Literally 'the second' — the second day of the working week (counting from Monday).",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "days", "vocab"],
  },
  {
    id: "time-beg-004",
    type: "multiple_choice",
    question: "What is the Shona word for Friday?",
    correctAnswer: "Chishanu",
    options: ["Chishanu", "China", "Chitatu", "Chipiri"],
    explanation:
      "Chishanu = Friday. Literally 'the fifth' — the fifth weekday. China = Thursday (fourth), Chitatu = Wednesday (third).",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "days", "vocab"],
  },
  {
    id: "time-beg-005",
    type: "multiple_choice",
    question: "What is the Shona name for December?",
    correctAnswer: "Zvita",
    options: ["Zvita", "Mbudzi", "Ndira", "Kukadzi"],
    explanation:
      "Zvita = December. Means 'things have arrived' — crops, rain, abundance, and the festive season.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "months", "vocab"],
  },
  {
    id: "time-beg-006",
    type: "multiple_choice",
    question: "What does 'Mbudzi' mean?",
    correctAnswer: "November",
    options: ["November", "December", "October", "September"],
    explanation:
      "Mbudzi = November. Means 'goat month' — the month when goats give birth. Also the start of the first rains.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "months", "vocab"],
  },
  {
    id: "time-beg-007",
    type: "multiple_choice",
    question: "What is the Shona name for August?",
    correctAnswer: "Nyamavhuvhu",
    options: ["Nyamavhuvhu", "Chikunguru", "Chikumi", "Gunyana"],
    explanation:
      "Nyamavhuvhu = August. Means 'month of wind' — August is famously windy in Zimbabwe, with dry hot winds.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "months", "vocab"],
  },
  {
    id: "time-beg-008",
    type: "multiple_choice",
    question: "What does 'Gumiguru' mean?",
    correctAnswer: "October",
    options: ["October", "November", "September", "August"],
    explanation:
      "Gumiguru = October. Means 'month of pumpkins'. It is also one of the hottest months — the pre-rain season.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "months", "vocab"],
  },
  {
    id: "time-beg-009",
    type: "multiple_choice",
    question: "The rainy season in Shona is called…",
    correctAnswer: "Zhizha",
    options: ["Zhizha", "Chando", "Chirimo", "Gororo"],
    explanation:
      "Zhizha = the rainy/summer season (November–March). It is the most important season — rain means crops and prosperity.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "seasons", "vocab"],
  },
  {
    id: "time-beg-010",
    type: "multiple_choice",
    question: "What does 'Chando' mean?",
    correctAnswer: "Winter / Cold season",
    options: ["Winter / Cold season", "Rainy season", "Spring", "Harvest"],
    explanation:
      "Chando = winter/cold season (June–July). Zimbabwe's winter is short but cold, especially in highland areas.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "seasons", "vocab"],
  },
  {
    id: "time-beg-011",
    type: "multiple_choice",
    question: "What does 'Chirimo' refer to in terms of seasons?",
    correctAnswer: "Spring / Dry season transition (August–October)",
    options: [
      "Spring / Dry season transition (August–October)",
      "The cold season",
      "The rainy season",
      "The harvest season only",
    ],
    explanation:
      "Chirimo = spring/dry transition (August–October). The weather warms after winter but before the rains arrive.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "seasons", "vocab"],
  },
  {
    id: "time-beg-012",
    type: "multiple_choice",
    question: "What does 'Mangwana' mean?",
    correctAnswer: "Tomorrow",
    options: ["Tomorrow", "Yesterday", "Today", "Next week"],
    explanation:
      "Mangwana = tomorrow. Compare with nezuro (yesterday) and nhasi (today).",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "past-future", "vocab"],
  },
  {
    id: "time-beg-013",
    type: "multiple_choice",
    question: "What is the Shona word for 'today'?",
    correctAnswer: "Nhasi",
    options: ["Nhasi", "Nezuro", "Mangwana", "Kare"],
    explanation:
      "Nhasi = today. Nezuro = yesterday. Mangwana = tomorrow. Three essential time words.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "past-future", "vocab"],
  },
  {
    id: "time-beg-014",
    type: "multiple_choice",
    question: "What does 'Kukadzi' mean as a month name?",
    correctAnswer: "February",
    options: ["February", "March", "January", "April"],
    explanation:
      "Kukadzi = February. Means 'the female month' — paired with Kurume (March, the male month).",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "months", "vocab"],
  },
  {
    id: "time-beg-015",
    type: "multiple_choice",
    question: "What is the Shona word for 'morning'?",
    correctAnswer: "Mangwanani",
    options: ["Mangwanani", "Masikati", "Manheru", "Usiku"],
    explanation:
      "Mangwanani = morning. Also used as the morning greeting. Masikati = afternoon, Manheru = evening, Usiku = night.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "telling-time", "vocab"],
  },
  {
    id: "time-beg-016",
    type: "multiple_choice",
    question: "What does 'Ndira' refer to?",
    correctAnswer: "January",
    options: ["January", "February", "December", "March"],
    explanation:
      "Ndira = January. The meaning is uncertain — possibly borrowed from Portuguese. It falls in the peak of the rainy season.",
    difficulty: "beginner",
    points: 10,
    labels: ["time", "months", "vocab"],
  },

  // ─────────────────────────────────────────────────────
  // INTERMEDIATE — time-int-* (16 total, 12-14pts)
  // Covers: telling time, past/future vocabulary in context
  // ─────────────────────────────────────────────────────

  {
    id: "time-int-001",
    type: "multiple_choice",
    question: "How do you say '3 o'clock' in Shona?",
    correctAnswer: "Nguva nhatu",
    options: ["Nguva nhatu", "Nguva tatu", "Nguva yekutanga", "Nguva matatu"],
    explanation:
      "Nguva nhatu = 3 o'clock. Nguva = hour/time. The number takes its noun-class agreement form (nhatu, not tatu).",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "telling-time", "vocab"],
  },
  {
    id: "time-int-002",
    type: "multiple_choice",
    question: "How do you say 'what time is it?' in Shona?",
    correctAnswer: "Iri nguva ngani?",
    options: [
      "Iri nguva ngani?",
      "Iri nguva yei?",
      "Nguva iri papi?",
      "Iri nguva yakawanda?",
    ],
    explanation:
      "Iri nguva ngani? = What time is it? Ngani = how many / which. Iri = it is.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "telling-time", "phrases"],
  },
  {
    id: "time-int-003",
    type: "multiple_choice",
    question: "How do you say 'half past' in Shona?",
    correctAnswer: "Hafu yenguva",
    options: ["Hafu yenguva", "Hafu yemaminiti", "Nguva yakwana", "Maminiti makumi matatu"],
    explanation:
      "Hafu yenguva = half past. Hafu = half. So 'half past three' = hafu yenguva nhatu.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "telling-time", "vocab"],
  },
  {
    id: "time-int-004",
    type: "multiple_choice",
    question: "What does 'nguva yekutanga' mean?",
    correctAnswer: "1 o'clock (the first hour)",
    options: [
      "1 o'clock (the first hour)",
      "The beginning of a new day",
      "Sunrise",
      "The earliest possible time",
    ],
    explanation:
      "Nguva yekutanga = 1 o'clock. Yekutanga = of the beginning/first. All other hours use numbers: nguva mbiri (2), nguva nhatu (3), etc.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "telling-time", "vocab"],
  },
  {
    id: "time-int-005",
    type: "multiple_choice",
    question: "'Svondo rapfuura' means…",
    correctAnswer: "Last week",
    options: ["Last week", "Next week", "Last Sunday", "Every week"],
    explanation:
      "Svondo rapfuura = last week. Rapfuura = that has passed. The root pfuura (to pass) appears throughout Shona time vocabulary.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "past-future", "vocab"],
  },
  {
    id: "time-int-006",
    type: "multiple_choice",
    question: "'Svondo rinouya' means…",
    correctAnswer: "Next week",
    options: ["Next week", "Last week", "This week", "Every Sunday"],
    explanation:
      "Svondo rinouya = next week. Rinouya = that is coming. The root uya (to come) marks the future in this pattern.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "past-future", "vocab"],
  },
  {
    id: "time-int-007",
    type: "multiple_choice",
    question: "What does 'Nezuro' mean?",
    correctAnswer: "Yesterday",
    options: ["Yesterday", "Last week", "Earlier today", "A while ago"],
    explanation:
      "Nezuro = yesterday. A core time word — nezuro (yesterday), nhasi (today), mangwana (tomorrow).",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "past-future", "vocab"],
  },
  {
    id: "time-int-008",
    type: "multiple_choice",
    question: "What does 'Kare' mean in Shona storytelling?",
    correctAnswer: "Long ago — like 'once upon a time'",
    options: [
      "Long ago — like 'once upon a time'",
      "Yesterday",
      "The old way of doing things",
      "A time of war",
    ],
    explanation:
      "Kare = long ago / once upon a time. Traditional Shona folk tales begin with 'Kare kare kare...' to signal a story is starting.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "past-future", "cultural"],
  },
  {
    id: "time-int-009",
    type: "multiple_choice",
    question: "What does 'Ramangwana' mean?",
    correctAnswer: "The future (figuratively)",
    options: [
      "The future (figuratively)",
      "Tomorrow's work",
      "The next generation",
      "A blessing said at sunrise",
    ],
    explanation:
      "Ramangwana = the future. It is also used as a blessing: 'ramangwana rakanaka' (may your future be good).",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "past-future", "vocab"],
  },
  {
    id: "time-int-010",
    type: "multiple_choice",
    question: "What is 'Zuva rekuberekwa'?",
    correctAnswer: "Birthday",
    options: ["Birthday", "Death anniversary", "Wedding day", "Public holiday"],
    explanation:
      "Zuva rekuberekwa = birthday. Rekuberekwa = of being born. Zuva = day. Literally 'the day of being born'.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "special-occasions", "vocab"],
  },
  {
    id: "time-int-011",
    type: "multiple_choice",
    question: "How do you say 'I am twenty years old' in Shona?",
    correctAnswer: "Ndine makore makumi maviri",
    options: [
      "Ndine makore makumi maviri",
      "Ndine gore makumi maviri",
      "Ndinogara makore maviri",
      "Ndine makore piri",
    ],
    explanation:
      "Ndine makore makumi maviri = I am twenty years old. Makore = years (plural of gore). Makumi maviri = twenty.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "special-occasions", "grammar"],
  },
  {
    id: "time-int-012",
    type: "multiple_choice",
    question: "Which month name literally means 'month of wind'?",
    correctAnswer: "Nyamavhuvhu (August)",
    options: [
      "Nyamavhuvhu (August)",
      "Chikunguru (July)",
      "Gunyana (September)",
      "Chirimo",
    ],
    explanation:
      "Nyamavhuvhu = August. Vhuvhu = wind. August is Zimbabwe's windiest month, with hot dry winds from the north.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "months", "cultural"],
  },
  {
    id: "time-int-013",
    type: "multiple_choice",
    question: "What is the significance of 'Mvura yauya!' in Shona culture?",
    correctAnswer: "It announces the arrival of the rains — a joyful event marking the beginning of planting season",
    options: [
      "It announces the arrival of the rains — a joyful event marking the beginning of planting season",
      "It is a warning of flooding",
      "It means someone has brought water from the well",
      "It is a proverb about patience",
    ],
    explanation:
      "'Mvura yauya!' (the rain has come!) is a joyful announcement. The first rains signal the time to plant — one of the most important moments in the Shona agricultural year.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "seasons", "cultural"],
  },
  {
    id: "time-int-014",
    type: "multiple_choice",
    question: "The Shona word for evening is…",
    correctAnswer: "Manheru",
    options: ["Manheru", "Masikati", "Mangwanani", "Usiku"],
    explanation:
      "Manheru = evening. Mangwanani = morning, Masikati = afternoon, Usiku = night. These four words divide the day.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "telling-time", "vocab"],
  },
  {
    id: "time-int-015",
    type: "multiple_choice",
    question: "The Shona concept of 'African time' refers to…",
    correctAnswer: "A cultural pattern where informal punctuality is flexible and social presence matters more than precise timing",
    options: [
      "A cultural pattern where informal punctuality is flexible and social presence matters more than precise timing",
      "An ancient Shona clock system",
      "The fact that Zimbabwe is in a different time zone",
      "Only the behaviour of rural communities",
    ],
    explanation:
      "'African time' is a real cultural phenomenon — in informal and social contexts, arriving late is normal. Formal, professional, and church settings have stricter expectations.",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "telling-time", "cultural"],
  },
  {
    id: "time-int-016",
    type: "multiple_choice",
    question: "What does 'Gore rinouya' mean?",
    correctAnswer: "Next year",
    options: ["Next year", "Last year", "This year", "Every year"],
    explanation:
      "Gore rinouya = next year. Gore = year. Rinouya = that is coming. Compare with gore rapfuura (last year — that has passed).",
    difficulty: "intermediate",
    points: 12,
    labels: ["time", "past-future", "vocab"],
  },

  // ─────────────────────────────────────────────────────
  // ADVANCED — time-adv-* (8 total, translation_builder, 16-18pts)
  // Covers: time-based sentences, date expressions
  // ─────────────────────────────────────────────────────

  {
    id: "time-adv-001",
    type: "translation_builder",
    question: "Build the Shona sentence: 'Today is Thursday'",
    correctAnswer: ["Nhasi", "ndeChina"],
    distractors: ["Nezuro", "Mangwana", "ndeChipiri", "ndeChishanu"],
    explanation:
      "Nhasi ndeChina = today is Thursday. China = Thursday (the fourth day). Nde- is the copula 'is'.",
    difficulty: "advanced",
    points: 16,
    labels: ["time", "days", "grammar"],
  },
  {
    id: "time-adv-002",
    type: "translation_builder",
    question: "Build the Shona sentence: 'Tomorrow I am going to Harare'",
    correctAnswer: ["Mangwana", "ndinoenda", "kuHarare"],
    distractors: ["Nhasi", "Nezuro", "ndinogara", "kumusha"],
    explanation:
      "Mangwana ndinoenda kuHarare = tomorrow I am going to Harare. Ndinoenda = I go/I am going. Ku- prefix marks destination.",
    difficulty: "advanced",
    points: 16,
    labels: ["time", "past-future", "grammar"],
  },
  {
    id: "time-adv-003",
    type: "translation_builder",
    question: "Build the Shona sentence: 'Last week I worked'",
    correctAnswer: ["Svondo", "rapfuura", "ndakashanda"],
    distractors: ["Svondo", "rinouya", "ndinoshanda", "nhasi"],
    explanation:
      "Svondo rapfuura ndakashanda = last week I worked. Rapfuura = that passed. Ndakashanda = I worked (past tense).",
    difficulty: "advanced",
    points: 16,
    labels: ["time", "past-future", "grammar"],
  },
  {
    id: "time-adv-004",
    type: "translation_builder",
    question: "Build the Shona sentence: 'What time is it?'",
    correctAnswer: ["Iri", "nguva", "ngani?"],
    distractors: ["Nhasi", "Mangwana", "yakawanda", "yei"],
    explanation:
      "Iri nguva ngani? = What time is it? Iri = it is. Nguva = time/hour. Ngani = how many/which.",
    difficulty: "advanced",
    points: 16,
    labels: ["time", "telling-time", "grammar"],
  },
  {
    id: "time-adv-005",
    type: "translation_builder",
    question: "Build the Shona sentence: 'I am twenty-three years old'",
    correctAnswer: ["Ndine", "makore", "makumi", "maviri", "nematatu"],
    distractors: ["Ndiri", "gore", "maviri", "natatu", "makumi"],
    explanation:
      "Ndine makore makumi maviri nematatu = I am twenty-three years old. Makore = years (plural). Makumi maviri = 20. Nematatu = and three.",
    difficulty: "advanced",
    points: 16,
    labels: ["time", "special-occasions", "grammar"],
  },
  {
    id: "time-adv-006",
    type: "translation_builder",
    question: "Build the Shona sentence: 'May your future be good'",
    correctAnswer: ["Ramangwana", "rakanaka"],
    distractors: ["Mangwana", "nhasi", "rakaipa", "rakanaka"],
    explanation:
      "Ramangwana rakanaka = may your future be good. A common blessing exchanged at New Year and special occasions.",
    difficulty: "advanced",
    points: 16,
    labels: ["time", "special-occasions", "phrases"],
  },
  {
    id: "time-adv-007",
    type: "translation_builder",
    question: "Build the Shona sentence: 'The rain has come!'",
    correctAnswer: ["Mvura", "yauya!"],
    distractors: ["Mhepo", "Chando", "yakauya", "yauya"],
    explanation:
      "Mvura yauya! = The rain has come! One of the most joyful announcements in the Shona agricultural year. Yauya = has come (past, third person singular for this noun class).",
    difficulty: "advanced",
    points: 16,
    labels: ["time", "seasons", "phrases"],
  },
  {
    id: "time-adv-008",
    type: "translation_builder",
    question: "Build the Shona sentence: 'Next week we will meet'",
    correctAnswer: ["Svondo", "rinouya", "tinosangana"],
    distractors: ["Svondo", "rapfuura", "ndakasangana", "nhasi"],
    explanation:
      "Svondo rinouya tinosangana = next week we will meet. Rinouya = that is coming (future marker). Tinosangana = we meet/will meet.",
    difficulty: "advanced",
    points: 18,
    labels: ["time", "past-future", "grammar"],
  },
];
