import { ChallengeSession } from '@/types/challenge';
import { getTodayInTimezone, getUserTimezone } from './timezone';

const STORAGE_KEY = 'shona_dictionary.daily_challenge_completion';
const HISTORY_KEY = 'shona_dictionary.challenge_history';

export interface ChallengeCompletion {
  date: string;
  session: ChallengeSession;
  completedAt: number;
}

export interface ChallengeHistory {
  completions: Record<string, ChallengeCompletion>; // date -> completion
  currentStreak: number;
  longestStreak: number;
  totalCompletions: number;
  lastUpdated: number;
}

export interface StreakInfo {
  currentStreak: number;
  longestStreak: number;
  totalCompletions: number;
  isOnStreak: boolean;
  lastCompletionDate?: string;
}

// Helper function to get date difference in days
const getDaysDifference = (date1: string, date2: string): number => {
  const d1 = new Date(date1 + 'T00:00:00');
  const d2 = new Date(date2 + 'T00:00:00');
  return Math.floor((d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24));
};

// Helper function to get previous date
const getPreviousDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T00:00:00');
  date.setDate(date.getDate() - 1);
  return date.toISOString().split('T')[0];
};

export const saveChallengeCompletion = (session: ChallengeSession): void => {
  if (typeof window === 'undefined') return;
  
  const completion: ChallengeCompletion = {
    date: session.date,
    session,
    completedAt: Date.now()
  };
  
  try {
    // Save current completion
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completion));
    
    // Update history and calculate streaks
    updateChallengeHistory(completion);
  } catch (error) {
    console.error('Failed to save challenge completion:', error);
  }
};

const getChallengeHistory = (): ChallengeHistory => {
  if (typeof window === 'undefined') {
    return {
      completions: {},
      currentStreak: 0,
      longestStreak: 0,
      totalCompletions: 0,
      lastUpdated: Date.now()
    };
  }
  
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (!stored) {
      return {
        completions: {},
        currentStreak: 0,
        longestStreak: 0,
        totalCompletions: 0,
        lastUpdated: Date.now()
      };
    }
    
    return JSON.parse(stored) as ChallengeHistory;
  } catch (error) {
    console.error('Failed to get challenge history:', error);
    return {
      completions: {},
      currentStreak: 0,
      longestStreak: 0,
      totalCompletions: 0,
      lastUpdated: Date.now()
    };
  }
};

const updateChallengeHistory = (completion: ChallengeCompletion): void => {
  try {
    // Get existing history
    const history = getChallengeHistory();
    
    // Add this completion to history
    history.completions[completion.date] = completion;
    history.totalCompletions = Object.keys(history.completions).length;
    history.lastUpdated = Date.now();
    
    // Calculate streaks
    const dates = Object.keys(history.completions).sort();
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    
    // Calculate current streak (working backwards from today)
    const userTimezone = getUserTimezone();
    const today = getTodayInTimezone(userTimezone);
    let checkDate = today;
    
    while (history.completions[checkDate]) {
      currentStreak++;
      checkDate = getPreviousDate(checkDate);
    }
    
    // Calculate longest streak
    for (let i = 0; i < dates.length; i++) {
      const currentDate = dates[i];
      const prevDate = i > 0 ? dates[i - 1] : null;
      
      if (!prevDate || getDaysDifference(currentDate, prevDate) === 1) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 1;
      }
    }
    
    history.currentStreak = currentStreak;
    history.longestStreak = Math.max(longestStreak, currentStreak);
    
    // Save updated history
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`🔥 Streak updated: ${currentStreak} current, ${history.longestStreak} longest`);
    }
  } catch (error) {
    console.error('Failed to update challenge history:', error);
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

export const getStreakInfo = (): StreakInfo => {
  if (typeof window === 'undefined') {
    return {
      currentStreak: 0,
      longestStreak: 0,
      totalCompletions: 0,
      isOnStreak: false
    };
  }
  
  const history = getChallengeHistory();
  const userTimezone = getUserTimezone();
  const today = getTodayInTimezone(userTimezone);
  const yesterday = getPreviousDate(today);
  
  // Check if user is on a streak (completed today or yesterday)
  const completedToday = !!history.completions[today];
  const completedYesterday = !!history.completions[yesterday];
  const isOnStreak = completedToday || (completedYesterday && history.currentStreak > 0);
  
  // Get last completion date
  const dates = Object.keys(history.completions).sort();
  const lastCompletionDate = dates.length > 0 ? dates[dates.length - 1] : undefined;
  
  return {
    currentStreak: history.currentStreak,
    longestStreak: history.longestStreak,
    totalCompletions: history.totalCompletions,
    isOnStreak,
    lastCompletionDate
  };
};

export const getChallengeHistoryData = (): ChallengeHistory => {
  return getChallengeHistory();
};

export const clearOldCompletions = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    const completion: ChallengeCompletion = JSON.parse(stored);
    
    // Get today's date in the user's timezone (same as what the challenge uses)
    const userTimezone = getUserTimezone();
    const today = getTodayInTimezone(userTimezone);
    
    // If stored completion is not for today, clear it
    // Note: We keep the history, only clear the current completion
    if (completion.date !== today) {
      localStorage.removeItem(STORAGE_KEY);
      if (process.env.NODE_ENV === 'development') {
        console.log(`🗑️ Cleared old completion for ${completion.date}, today is ${today}`);
      }
    }
  } catch (error) {
    console.error('Failed to clear old completions:', error);
  }
};
