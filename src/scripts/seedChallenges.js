require("dotenv").config(); // Load environment variables from .env.local
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const sampleChallenges = [
  {
    type: 'multiple_choice',
    question: 'Which word means "book" in Shona?',
    correctAnswer: 'bhuku',
    options: ['bhuku', 'mota', 'imba', 'chikoro'],
    explanation: 'Bhuku is the Shona word for book.',
    difficulty: 'beginner',
    points: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'multiple_choice',
    question: 'What does "mota" mean in English?',
    correctAnswer: 'car',
    options: ['car', 'house', 'book', 'school'],
    explanation: 'Mota means car in Shona.',
    difficulty: 'beginner',
    points: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'audio_recognition',
    question: 'What do you hear?',
    correctAnswer: 'taura',
    options: ['taura', 'tamba', 'tenga', 'tora'],
    audioUrl: 'https://jtanezlt3x8qkts2.public.blob.vercel-storage.com/audio/taura/example/3fe6867a-03cc-463d-ada9-842211504486.webm',
    explanation: 'Taura means "to speak" in Shona.',
    difficulty: 'beginner',
    points: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'translation_builder',
    question: 'Arrange these words to say "I am going home"',
    correctAnswer: ['Ndi', 'ri', 'ku', 'enda', 'kumba'],
    options: ['kumba', 'Ndi', 'enda', 'ri', 'ku'],
    explanation: 'The correct order is: Ndi ri ku enda kumba (I am going home)',
    difficulty: 'intermediate',
    points: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'multiple_choice',
    question: 'Which word means "water"?',
    correctAnswer: 'mvura',
    options: ['mvura', 'moto', 'muti', 'mwedzi'],
    explanation: 'Mvura is the Shona word for water.',
    difficulty: 'beginner',
    points: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'translation_builder',
    question: 'How do you say "Good morning" in Shona?',
    correctAnswer: ['Mangwanani', 'akanaka'],
    options: ['akanaka', 'Mangwanani', 'zvakanaka', 'marara'],
    explanation: 'Mangwanani akanaka means "Good morning" in Shona.',
    difficulty: 'beginner',
    points: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedChallenges() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('chishona');
    const challengesCollection = db.collection('challenges');
    const dailyChallengesCollection = db.collection('daily_challenges');
    
    // Clear existing challenges
    await challengesCollection.deleteMany({});
    await dailyChallengesCollection.deleteMany({});
    console.log('Cleared existing challenges');
    
    // Insert sample challenges
    const result = await challengesCollection.insertMany(sampleChallenges);
    console.log(`Inserted ${result.insertedCount} challenges`);
    
    // Get the inserted challenge IDs
    const challengeIds = Object.values(result.insertedIds).map(id => id.toString());
    
    // Create a daily challenge for today
    const today = new Date().toISOString().split('T')[0];
    await dailyChallengesCollection.insertOne({
      date: today,
      challengeIds: challengeIds.slice(0, 3), // Use first 3 challenges
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log(`Created daily challenge for ${today}`);
    console.log('Database seeded successfully!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

// Run the seed function
if (require.main === module) {
  seedChallenges();
}

module.exports = { seedChallenges };
