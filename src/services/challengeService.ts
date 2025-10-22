import { ObjectId } from 'mongodb';
import { getDatabase } from '@/lib/mongodb';
import { Challenge, DailyChallenge } from '@/types/challenge';

export class ChallengeService {
  private static async getCollection() {
    const db = await getDatabase();
    return db.collection('challenges');
  }

  private static async getDailyChallengeCollection() {
    const db = await getDatabase();
    return db.collection('daily_challenges');
  }

  // Challenge CRUD operations
  static async getAllChallenges(filters?: { type?: string; difficulty?: string }): Promise<Challenge[]> {
    const collection = await this.getCollection();
    const query: any = {};

    if (filters?.type && filters.type !== 'all') {
      query.type = filters.type;
    }

    if (filters?.difficulty && filters.difficulty !== 'all') {
      query.difficulty = filters.difficulty;
    }

    const challenges = await collection.find(query).toArray();
    return challenges.map(doc => {
      const { _id, ...rest } = doc;
      return {
        ...rest,
        id: _id.toString()
      };
    }) as Challenge[];
  }

  static async getChallengeById(id: string): Promise<Challenge | null> {
    const collection = await this.getCollection();
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    
    if (!doc) return null;

    const { _id, ...rest } = doc;
    return {
      ...rest,
      id: _id.toString()
    } as Challenge;
  }

  static async createChallenge(challengeData: Omit<Challenge, 'id'>): Promise<Challenge> {
    const collection = await this.getCollection();
    const result = await collection.insertOne({
      ...challengeData,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return {
      ...challengeData,
      id: result.insertedId.toString()
    };
  }

  static async updateChallenge(id: string, updateData: Partial<Omit<Challenge, 'id'>>): Promise<Challenge | null> {
    const collection = await this.getCollection();
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updatedAt: new Date() 
        } 
      },
      { returnDocument: 'after' }
    );

    if (!result) return null;

    return {
      ...result,
      id: result._id.toString(),
      _id: undefined
    } as Challenge;
  }

  static async deleteChallenge(id: string): Promise<boolean> {
    const collection = await this.getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  // Daily Challenge operations
  static async getDailyChallenge(date: string): Promise<DailyChallenge | null> {
    const collection = await this.getDailyChallengeCollection();
    const assignment = await collection.findOne({ date });

    if (!assignment || !assignment.challengeIds || assignment.challengeIds.length === 0) {
      return null;
    }

    // Get the actual challenge objects
    const challengeCollection = await this.getCollection();
    const challenges = await challengeCollection.find({
      _id: { $in: assignment.challengeIds.map((id: string) => new ObjectId(id)) }
    }).toArray();

    if (challenges.length === 0) return null;

    const challengeObjects = challenges.map(doc => ({
      ...doc,
      id: doc._id.toString(),
      _id: undefined
    })) as Challenge[];

    const totalPoints = challengeObjects.reduce((sum, c) => sum + c.points, 0);
    const estimatedTime = challengeObjects.length * 2;

    return {
      date,
      challenges: challengeObjects,
      totalPoints,
      estimatedTime
    };
  }

  static async getAllDailyChallenges(): Promise<DailyChallenge[]> {
    const collection = await this.getDailyChallengeCollection();
    const assignments = await collection.find({}).sort({ date: 1 }).toArray();

    const dailyChallenges: DailyChallenge[] = [];

    for (const assignment of assignments) {
      if (!assignment.challengeIds || assignment.challengeIds.length === 0) continue;

      // Get the actual challenge objects
      const challengeCollection = await this.getCollection();
      const challenges = await challengeCollection.find({
        _id: { $in: assignment.challengeIds.map((id: string) => new ObjectId(id)) }
      }).toArray();

      if (challenges.length === 0) continue;

      const challengeObjects = challenges.map(doc => ({
        ...doc,
        id: doc._id.toString(),
        _id: undefined
      })) as Challenge[];

      const totalPoints = challengeObjects.reduce((sum, c) => sum + c.points, 0);
      const estimatedTime = challengeObjects.length * 2;

      dailyChallenges.push({
        date: assignment.date,
        challenges: challengeObjects,
        totalPoints,
        estimatedTime
      });
    }

    return dailyChallenges;
  }

  static async assignDailyChallenge(date: string, challengeIds: string[]): Promise<DailyChallenge> {
    const collection = await this.getDailyChallengeCollection();
    
    // Validate that all challenge IDs exist
    const challengeCollection = await this.getCollection();
    const validChallenges = await challengeCollection.find({
      _id: { $in: challengeIds.map(id => new ObjectId(id)) }
    }).toArray();

    if (validChallenges.length !== challengeIds.length) {
      throw new Error('Some challenge IDs are invalid');
    }

    // Upsert the assignment
    await collection.replaceOne(
      { date },
      { 
        date, 
        challengeIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { upsert: true }
    );

    // Return the daily challenge
    const challengeObjects = validChallenges.map(doc => ({
      ...doc,
      id: doc._id.toString(),
      _id: undefined
    })) as Challenge[];

    const totalPoints = challengeObjects.reduce((sum, c) => sum + c.points, 0);
    const estimatedTime = challengeObjects.length * 2;

    return {
      date,
      challenges: challengeObjects,
      totalPoints,
      estimatedTime
    };
  }
}
