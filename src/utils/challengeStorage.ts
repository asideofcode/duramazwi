import { ChallengeSession } from '@/types/challenge';

const STORAGE_KEY = 'shona_dictionary.daily_challenge_completion';

export interface ChallengeCompletion {
  date: string;
  session: ChallengeSession;
  completedAt: number;
}

export const saveChallengeCompletion = (session: ChallengeSession): void => {
  if (typeof window === 'undefined') return;
  
  const completion: ChallengeCompletion = {
    date: session.date,
    session,
    completedAt: Date.now()
  };
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completion));
  } catch (error) {
    console.error('Failed to save challenge completion:', error);
  }
};

export const getChallengeCompletion = (date: string): ChallengeCompletion | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const completion: ChallengeCompletion = JSON.parse(stored);
    
    // Check if it's for the same date
    if (completion.date === date) {
      return completion;
    }
    
    return null;
  } catch (error) {
    console.error('Failed to get challenge completion:', error);
    return null;
  }
};

export const clearOldCompletions = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    const completion: ChallengeCompletion = JSON.parse(stored);
    const today = new Date().toISOString().split('T')[0];
    
    // If stored completion is not for today, clear it
    if (completion.date !== today) {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.error('Failed to clear old completions:', error);
  }
};
