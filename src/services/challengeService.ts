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
    // Only return published challenges for public users
    const assignment = await collection.findOne({ date, status: 'published' });

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
      estimatedTime,
      status: assignment.status || 'published'
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

      // Preserve the order from challengeIds
      const challengeMap = new Map(
        challenges.map(doc => [doc._id.toString(), doc])
      );
      
      const challengeObjects = assignment.challengeIds
        .map((id: string) => challengeMap.get(id))
        .filter((doc): doc is typeof challenges[0] => doc !== undefined)
        .map(doc => ({
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
        estimatedTime,
        status: assignment.status || 'draft'
      });
    }

    return dailyChallenges;
  }

  // Get all daily challenges that use a specific challenge
  static async getDailyChallengesUsingChallenge(challengeId: string): Promise<string[]> {
    const collection = await this.getDailyChallengeCollection();
    const assignments = await collection.find({
      challengeIds: challengeId
    }).toArray();
    
    return assignments.map(assignment => assignment.date).sort();
  }

  static async assignDailyChallenge(date: string, challengeIds: string[], status: 'draft' | 'published' = 'draft'): Promise<DailyChallenge> {
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
        status,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { upsert: true }
    );

    // Return the daily challenge with challenges in the correct order
    // Create a map for quick lookup
    const challengeMap = new Map(
      validChallenges.map(doc => [doc._id.toString(), doc])
    );
    
    // Map challengeIds to challenge objects in the correct order
    const challengeObjects = challengeIds
      .map(id => challengeMap.get(id))
      .filter((doc): doc is typeof validChallenges[0] => doc !== undefined)
      .map(doc => ({
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
      estimatedTime,
      status
    };
  }

  // Update the status of a daily challenge
  static async updateDailyChallengeStatus(date: string, status: 'draft' | 'published'): Promise<boolean> {
    const collection = await this.getDailyChallengeCollection();
    const result = await collection.updateOne(
      { date },
      { $set: { status, updatedAt: new Date() } }
    );
    return result.modifiedCount > 0;
  }
}
