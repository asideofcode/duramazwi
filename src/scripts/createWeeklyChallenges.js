require("dotenv").config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

// Weekly challenges with variety and progression
const weeklyChallenges = {
  // October 23, 2025 - Wednesday (Replace duplicate)
  '2025-10-23': [
    {
      type: 'audio_recognition',
      question: 'Listen carefully. What word do you hear?',
      correctAnswer: 'taura',
      options: ['taura', 'tamba', 'tenga', 'tora'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/taura/word/037a6b3b-3f3e-446f-8f1f-1c4d6ba93b8c.webm',
      explanation: 'Taura means "to speak" or "to say" in Shona.',
      difficulty: 'beginner',
      points: 15
    },
    {
      type: 'multiple_choice',
      question: 'What does "kopa" mean in English?',
      correctAnswer: 'to copy',
      options: ['to copy', 'to give', 'to buy', 'to sell'],
      explanation: 'Kopa means "to copy" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'translation_builder',
      question: 'Arrange these words to say "I want to speak"',
      correctAnswer: ['Ndi', 'no', 'da', 'ku', 'taura'],
      options: ['taura', 'Ndi', 'ku', 'no', 'da', 'ndi', 'kuda', 'zvino'],
      explanation: 'The correct order is: Ndi no da ku taura (I want to speak)',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'multiple_choice',
      question: 'Which greeting is used in the morning?',
      correctAnswer: 'Mangwanani',
      options: ['Mangwanani', 'Masikati', 'Manheru', 'Marara'],
      explanation: 'Mangwanani means "Good morning" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'audio_recognition',
      question: 'What do you hear in this audio?',
      correctAnswer: 'kopa',
      options: ['kopa', 'kona', 'kura', 'kupa'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/kopa/meaning/d1d360c0-4b94-4233-9650-40bb0df3f31d.webm',
      explanation: 'This is the word "kopa" which means "to copy".',
      difficulty: 'beginner',
      points: 15
    }
  ],

  // October 24, 2025 - Thursday
  '2025-10-24': [
    {
      type: 'multiple_choice',
      question: 'What does "chibhakera" mean?',
      correctAnswer: 'fist',
      options: ['fist', 'library', 'hospital', 'school'],
      explanation: 'Chibhakera means "fist" in Shona.',
      difficulty: 'intermediate',
      points: 15
    },
    {
      type: 'audio_recognition',
      question: 'Listen to this word. What is it?',
      correctAnswer: 'chibhakera',
      options: ['chibhakera', 'chipatara', 'chikoro', 'chitoro'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/chibhakera/word/6ad9ad7b-4e47-4072-9667-1451bd4be2c1.webm',
      explanation: 'This is "chibhakera" meaning fist.',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'translation_builder',
      question: 'How do you say "Good afternoon"?',
      correctAnswer: ['Masikati', 'akanaka'],
      options: ['akanaka', 'Masikati', 'zvakanaka', 'marara', 'manheru', 'mangwanani', 'rakanaka'],
      explanation: 'Masikati akanaka means "Good afternoon" in Shona.',
      difficulty: 'beginner',
      points: 15
    },
    {
      type: 'multiple_choice',
      question: 'Which word means "to run"?',
      correctAnswer: 'mhanya',
      options: ['mhanya', 'famba', 'mira', 'gara'],
      explanation: 'Mhanya means "to run" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'multiple_choice',
      question: 'What is the Shona word for "bread"?',
      correctAnswer: 'chingwa',
      options: ['chingwa', 'nyama', 'muto', 'mazai'],
      explanation: 'Chingwa means "bread" in Shona - perfect for the bakery!',
      difficulty: 'beginner',
      points: 10
    }
  ],

  // October 25, 2025 - Friday
  '2025-10-25': [
    {
      type: 'audio_recognition',
      question: 'What word is being pronounced?',
      correctAnswer: 'parara',
      options: ['parara', 'tarara', 'karara', 'marara'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/parara/word/e33c3a4a-0e06-41b4-8b2f-c82280b3eb8a.webm',
      explanation: 'Parara means "to be scattered" or "to spread out".',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'multiple_choice',
      question: 'What does "nhema" mean in English?',
      correctAnswer: 'lies',
      options: ['lies', 'love', 'smell', 'sleep'],
      explanation: 'Nhema means "lies" in Shona.',
      difficulty: 'intermediate',
      points: 15
    },
    {
      type: 'translation_builder',
      question: 'Arrange to say "What type is this?"',
      correctAnswer: ['Ichi','i','mhando','ipi'],
      options: ['ipi', 'Ichi', 'mhando', 'chi', 'chii', 'ndeipi', 'zvakadii', 'i'],
      explanation: 'Ichi i mhando ipi? means "What type is this?"',
      difficulty: 'advanced',
      points: 25
    },
    {
      type: 'audio_recognition',
      question: 'Listen to this word:',
      correctAnswer: 'aina',
      options: ['aina', 'ana', 'ane', 'ani'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/aina/word/24e24c03-158e-4335-9c0a-6798dabe3450.webm',
      explanation: 'This is "aina" meaning type or kind.',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'multiple_choice',
      question: 'How do you say "Thank you" in Shona?',
      correctAnswer: 'Maita basa',
      options: ['Maita basa', 'Zvakanaka', 'Pamusoroi', 'Mangwanani'],
      explanation: 'Maita basa is a common way to say "Thank you" in Shona.',
      difficulty: 'beginner',
      points: 10
    }
  ],

  // October 26, 2025 - Saturday
  '2025-10-26': [
    {
      type: 'multiple_choice',
      question: 'What does "adhiresi" mean?',
      correctAnswer: 'address',
      options: ['address', 'telephone', 'email', 'letter'],
      explanation: 'Adhiresi means "address" in Shona (borrowed from English).',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'audio_recognition',
      question: 'What word do you hear?',
      correctAnswer: 'adhiresi',
      options: ['adhiresi', 'telefoni', 'imeyili', 'tsamba'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/adhiresi/word/815a1f29-7953-490e-86a9-002061864271.webm',
      explanation: 'This is "adhiresi" meaning address.',
      difficulty: 'beginner',
      points: 15
    },
    {
      type: 'translation_builder',
      question: 'How do you say "My name is..."?',
      correctAnswer: ['Zita', 'rangu', 'ndi'],
      options: ['ndi', 'Zita', 'rangu', 'rako', 'rake', 'ini', 'mazita', 'ndiri'],
      explanation: 'Zita rangu ndi... means "My name is..." in Shona.',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'multiple_choice',
      question: 'Which word means "house"?',
      correctAnswer: 'imba',
      options: ['imba', 'mota', 'bhuku', 'chikoro'],
      explanation: 'Imba means "house" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'multiple_choice',
      question: 'What is "mukoma" in English?',
      correctAnswer: 'older brother',
      options: ['older brother', 'younger brother', 'sister', 'cousin'],
      explanation: 'Mukoma means "older brother" and is used as a respectful term.',
      difficulty: 'intermediate',
      points: 15
    }
  ],

  // October 27, 2025 - Sunday
  '2025-10-27': [
    {
      type: 'translation_builder',
      question: 'Arrange to say "I am learning Shona"',
      correctAnswer: ['Ndi', 'ri', 'ku', 'dzidza', 'chiShona'],
      options: ['chiShona', 'Ndi', 'dzidza', 'ri', 'ku', 'ndi', 'kudzidza', 'chirungu', 'ndiri'],
      explanation: 'Ndi ri ku dzidza chiShona means "I am learning Shona".',
      difficulty: 'intermediate',
      points: 25
    },
    {
      type: 'multiple_choice',
      question: 'What does "dzidza" mean?',
      correctAnswer: 'to learn',
      options: ['to learn', 'to teach', 'to read', 'to write'],
      explanation: 'Dzidza means "to learn" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'audio_recognition',
      question: 'Listen to this example sentence:',
      correctAnswer: 'taura',
      options: ['taura', 'tenga', 'tora', 'tamba'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/taura/example/3fe6867a-03cc-463d-ada9-842211504486.webm',
      explanation: 'This example uses the word "taura" (to speak).',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'multiple_choice',
      question: 'How do you say "Good evening"?',
      correctAnswer: 'Manheru akanaka',
      options: ['Manheru akanaka', 'Mangwanani akanaka', 'Masikati akanaka', 'Marara akanaka'],
      explanation: 'Manheru akanaka means "Good evening" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'multiple_choice',
      question: 'What is the Shona word for "water"?',
      correctAnswer: 'mvura',
      options: ['mvura', 'moto', 'muti', 'mwedzi'],
      explanation: 'Mvura means "water" in Shona.',
      difficulty: 'beginner',
      points: 10
    }
  ],

  // October 28, 2025 - Monday
  '2025-10-28': [
    {
      type: 'audio_recognition',
      question: 'What do you hear in this example?',
      correctAnswer: 'kopa',
      options: ['kopa', 'kupa', 'kura', 'kona'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/kopa/example/7031b0e3-4027-4f4f-b7d8-0d38ea6aba2f.webm',
      explanation: 'This example demonstrates the word "kopa" (Copper).',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'translation_builder',
      question: 'How do you ask "How are you?"',
      correctAnswer: ['Makadii'],
      options: ['Makadii', 'Ndiripo', 'Zvakanaka', 'Maswera', 'Wakadii', 'Makadini'],
      explanation: 'Makadii? is how you ask "How are you?" in Shona.',
      difficulty: 'beginner',
      points: 15
    },
    {
      type: 'multiple_choice',
      question: 'What is the response to "Makadii?"',
      correctAnswer: 'Ndiripo',
      options: ['Ndiripo', 'Maita basa', 'Zvakanaka', 'Pamusoroi'],
      explanation: 'Ndiripo means "I am fine/here" - a common response to "How are you?"',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'multiple_choice',
      question: 'What does "mwana" mean?',
      correctAnswer: 'child',
      options: ['child', 'parent', 'teacher', 'friend'],
      explanation: 'Mwana means "child" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'audio_recognition',
      question: 'Listen to this example with chibhakera:',
      correctAnswer: 'chibhakera',
      options: ['chibhakera', 'chipatara', 'chitoro', 'chikoro'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/chibhakera/example/579801cf-8c58-48cd-aa48-a6daceed7fe8.webm',
      explanation: 'This example uses "chibhakera" (fist) in context.',
      difficulty: 'intermediate',
      points: 20
    }
  ],

  // October 29, 2025 - Tuesday
  '2025-10-29': [
    {
      type: 'multiple_choice',
      question: 'What does "famba" mean?',
      correctAnswer: 'to walk/go',
      options: ['to walk/go', 'to run', 'to stop', 'to sit'],
      explanation: 'Famba means "to walk" or "to go" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'translation_builder',
      question: 'Arrange to say "I am going to the shop"',
      correctAnswer: ['Ndi', 'ri', 'ku', 'enda', 'ku', 'chitoro'],
      options: ['chitoro', 'Ndi', 'enda', 'ri', 'ku', 'ku', 'ndi', 'chikoro', 'famba', 'ndiri'],
      explanation: 'Ndi ri ku enda ku chitoro means "I am going to the shop".',
      difficulty: 'advanced',
      points: 30
    },
    {
      type: 'multiple_choice',
      question: 'Which word means "money"?',
      correctAnswer: 'mari',
      options: ['mari', 'muti', 'moto', 'mvura'],
      explanation: 'Mari means "money" in Shona.',
      difficulty: 'beginner',
      points: 10
    },
    {
      type: 'audio_recognition',
      question: 'What word is this?',
      correctAnswer: 'parara',
      options: ['parara', 'tarara', 'karara', 'marara'],
      audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/parara/word/e33c3a4a-0e06-41b4-8b2f-c82280b3eb8a.webm',
      explanation: 'This is "parara" meaning to scatter or spread out.',
      difficulty: 'intermediate',
      points: 20
    },
    {
      type: 'multiple_choice',
      question: 'How do you say "Excuse me" or "Sorry"?',
      correctAnswer: 'Pamusoroi',
      options: ['Pamusoroi', 'Maita basa', 'Zvakanaka', 'Makadii'],
      explanation: 'Pamusoroi means "Excuse me" or "Sorry" in Shona.',
      difficulty: 'beginner',
      points: 10
    }
  ]
};

async function createWeeklyChallenges() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('chishona');
    const challengesCollection = db.collection('challenges');
    const dailyChallengesCollection = db.collection('daily_challenges');
    
    for (const [date, challenges] of Object.entries(weeklyChallenges)) {
      console.log(`\nProcessing ${date}...`);
      
      // Add timestamps to challenges
      const challengesWithTimestamps = challenges.map(challenge => ({
        ...challenge,
        createdAt: new Date(),
        updatedAt: new Date()
      }));
      
      // Insert challenges
      const result = await challengesCollection.insertMany(challengesWithTimestamps);
      const challengeIds = Object.values(result.insertedIds).map(id => id.toString());
      
      // Remove existing daily challenge for this date
      await dailyChallengesCollection.deleteOne({ date });
      
      // Create daily challenge
      await dailyChallengesCollection.insertOne({
        date,
        challengeIds,
        totalPoints: challengesWithTimestamps.reduce((sum, c) => sum + c.points, 0),
        estimatedTime: Math.ceil(challengesWithTimestamps.length * 1.5), // 1.5 minutes per challenge
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      console.log(`✅ Created ${challenges.length} challenges for ${date}`);
      console.log(`   Total points: ${challengesWithTimestamps.reduce((sum, c) => sum + c.points, 0)}`);
    }
    
    console.log('\n🎉 Weekly challenges created successfully!');
    
  } catch (error) {
    console.error('Error creating weekly challenges:', error);
  } finally {
    await client.close();
  }
}

// Run the function
if (require.main === module) {
  createWeeklyChallenges();
}

module.exports = { createWeeklyChallenges };
