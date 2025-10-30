import apiClient from './api';
import { DailyChallenge } from '@/types/challenge';

export const challengeService = {
  /**
   * Get daily challenge
   */
  getDailyChallenge: async (date?: string): Promise<DailyChallenge> => {
    const params = new URLSearchParams();
    if (date) {
      params.append('date', date);
    }
    
    const response = await fetch(`http://192.168.1.216:3000/api/mobile/challenge/daily?${params.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch daily challenge');
    }
    return response.json();
  },
};
