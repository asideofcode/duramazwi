import { getTodayInTimezone, getUserTimezone } from './timezone';

const HISTORY_KEY = 'shona_dictionary.challenge_history';
const OLD_STORAGE_KEY = 'shona_dictionary.daily_challenge_completion';

export interface ChallengeCompletionStats {
  date: string;
  completedAt: number;
  totalScore: number;
  correctAnswers: number;
  totalChallenges: number;
  accuracy: number; // percentage
  timeSpent: number; // seconds
  challengeIds: string[]; // IDs in the order they appeared
  correctChallengeIds: string[]; // IDs of challenges answered correctly
}

export interface ChallengeHistory {
  completions: Record<string, ChallengeCompletionStats>; // date -> stats
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

export const saveChallengeCompletion = (stats: ChallengeCompletionStats): void => {
  if (typeof window === 'undefined') return;
  
  try {
    // Update history and calculate streaks
    updateChallengeHistory(stats);
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
    
    const history = JSON.parse(stored) as ChallengeHistory;
    
    // Validate the history structure
    if (!history || typeof history !== 'object' || !history.completions) {
      console.warn('Invalid history structure, resetting...');
      localStorage.removeItem(HISTORY_KEY);
      return {
        completions: {},
        currentStreak: 0,
        longestStreak: 0,
        totalCompletions: 0,
        lastUpdated: Date.now()
      };
    }
    
    return history;
  } catch (error) {
    console.error('Failed to get challenge history, resetting:', error);
    // Clear corrupted data
    localStorage.removeItem(HISTORY_KEY);
    return {
      completions: {},
      currentStreak: 0,
      longestStreak: 0,
      totalCompletions: 0,
      lastUpdated: Date.now()
    };
  }
};

const updateChallengeHistory = (stats: ChallengeCompletionStats): void => {
  try {
    // Get existing history
    const history = getChallengeHistory();
    
    // Add this completion to history
    history.completions[stats.date] = stats;
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

export const isDateCompleted = (date: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  const history = getChallengeHistory();
  return !!history.completions[date];
};

export const getCompletionStats = (date: string): ChallengeCompletionStats | null => {
  if (typeof window === 'undefined') return null;
  
  const history = getChallengeHistory();
  return history.completions[date] || null;
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

// Easter egg: Clear all challenge history
export const clearAllHistory = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(HISTORY_KEY);
    if (process.env.NODE_ENV === 'development') {
      console.log('🗑️ Cleared all challenge history');
    }
  } catch (error) {
    console.error('Failed to clear history:', error);
  }
};

// Migration function to convert old format to new format
const migrateOldStorage = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    // 1. Migrate old completion key
    const oldData = localStorage.getItem(OLD_STORAGE_KEY);
    if (oldData) {
      const oldCompletion = JSON.parse(oldData);
      
      // Check if it's the old format (has 'session' property)
      if (oldCompletion.session && oldCompletion.session.isComplete) {
        const session = oldCompletion.session;
        const correctAnswers = session.results.filter((r: any) => r.isCorrect).length;
        const totalChallenges = session.results.length;
        const accuracy = totalChallenges > 0 ? Math.round((correctAnswers / totalChallenges) * 100) : 0;
        const timeSpent = session.endTime ? Math.floor((session.endTime - session.startTime) / 1000) : 0;
        
        // Convert to new format
        const challengeIds = session.challenges?.map((c: any) => c.id) || [];
        const correctChallengeIds = session.results
          ?.filter((r: any) => r.isCorrect)
          .map((r: any) => r.challengeId) || [];
        
        const newStats: ChallengeCompletionStats = {
          date: session.date,
          completedAt: oldCompletion.completedAt || Date.now(),
          totalScore: session.totalScore,
          correctAnswers,
          totalChallenges,
          accuracy,
          timeSpent,
          challengeIds,
          correctChallengeIds
        };
        
        // Save in new format
        saveChallengeCompletion(newStats);
        
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ Migrated old challenge completion');
        }
      }
      
      // Remove old format regardless
      localStorage.removeItem(OLD_STORAGE_KEY);
    }
    
    // 2. Migrate old history format
    const historyData = localStorage.getItem(HISTORY_KEY);
    if (historyData) {
      const history = JSON.parse(historyData);
      
      // Check if history has old format completions (with 'session' property)
      if (history.completions) {
        let needsMigration = false;
        const newCompletions: Record<string, ChallengeCompletionStats> = {};
        
        for (const [date, completion] of Object.entries(history.completions)) {
          const oldComp = completion as any;
          
          // Check if this is old format (has 'session' property)
          if (oldComp.session) {
            needsMigration = true;
            const session = oldComp.session;
            const correctAnswers = session.results?.filter((r: any) => r.isCorrect).length || 0;
            const totalChallenges = session.results?.length || 0;
            const accuracy = totalChallenges > 0 ? Math.round((correctAnswers / totalChallenges) * 100) : 0;
            const timeSpent = session.endTime ? Math.floor((session.endTime - session.startTime) / 1000) : 0;
            
            const challengeIds = session.challenges?.map((c: any) => c.id) || [];
            const correctChallengeIds = session.results
              ?.filter((r: any) => r.isCorrect)
              .map((r: any) => r.challengeId) || [];
            
            newCompletions[date] = {
              date: session.date,
              completedAt: oldComp.completedAt || Date.now(),
              totalScore: session.totalScore || 0,
              correctAnswers,
              totalChallenges,
              accuracy,
              timeSpent,
              challengeIds,
              correctChallengeIds
            };
          } else if (!oldComp.challengeIds || !oldComp.correctChallengeIds) {
            // New format but missing challenge IDs - add empty arrays
            needsMigration = true;
            newCompletions[date] = {
              ...oldComp,
              challengeIds: oldComp.challengeIds || [],
              correctChallengeIds: oldComp.correctChallengeIds || []
            };
          } else {
            // Already has all fields, keep it
            newCompletions[date] = oldComp;
          }
        }
        
        if (needsMigration) {
          // Update history with new format
          history.completions = newCompletions;
          localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
          
          if (process.env.NODE_ENV === 'development') {
            console.log('✅ Migrated challenge history to new format');
          }
        }
      }
    }
  } catch (error) {
    console.error('Failed to migrate old storage:', error);
  }
};

// Run migration automatically when module loads (client-side only)
if (typeof window !== 'undefined') {
  try {
    migrateOldStorage();
  } catch (error) {
    console.error('Migration failed, clearing storage:', error);
    // Clear all storage if migration fails
    localStorage.removeItem(HISTORY_KEY);
    localStorage.removeItem(OLD_STORAGE_KEY);
  }
}
