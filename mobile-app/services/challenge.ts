import apiClient from './api';

export type ChallengeType = 'multiple_choice' | 'audio_recognition' | 'translation_builder';

export interface Challenge {
  id: string;
  type: ChallengeType;
  question: string;
  correctAnswer: string;
  options?: string[];
  audioUrl?: string;
  wordBank?: string[];
  explanation?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
}

export interface DailyChallenge {
  date: string;
  challenges: Challenge[];
}

export const challengeService = {
  /**
   * Get daily challenge
   */
  getDailyChallenge: async (date?: string): Promise<DailyChallenge> => {
    return await apiClient.get('/challenge/daily', {
      params: date ? { date } : {},
    });
  },
};
