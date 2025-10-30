import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChallengeCompletionStats } from '@/types/challenge';

const STORAGE_KEY = 'daily_challenge_completions';

/**
 * Save challenge completion stats
 */
export async function saveChallengeCompletion(stats: ChallengeCompletionStats): Promise<void> {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const completions = existing ? JSON.parse(existing) : {};
    
    completions[stats.date] = stats;
    
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(completions));
  } catch (error) {
    console.error('Failed to save challenge completion:', error);
  }
}

/**
 * Get completion stats for a specific date
 */
export async function getCompletionStats(date: string): Promise<ChallengeCompletionStats | null> {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    if (!existing) return null;
    
    const completions = JSON.parse(existing);
    return completions[date] || null;
  } catch (error) {
    console.error('Failed to get completion stats:', error);
    return null;
  }
}

/**
 * Check if a date's challenge is completed
 */
export async function isDateCompleted(date: string): Promise<boolean> {
  const stats = await getCompletionStats(date);
  return stats !== null;
}

/**
 * Get all completion stats
 */
export async function getAllCompletions(): Promise<Record<string, ChallengeCompletionStats>> {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    return existing ? JSON.parse(existing) : {};
  } catch (error) {
    console.error('Failed to get all completions:', error);
    return {};
  }
}

/**
 * Clear all challenge history (for testing/reset)
 */
export async function clearAllHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear history:', error);
  }
}

/**
 * Alias for clearAllHistory
 */
export const clearChallengeStorage = clearAllHistory;

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getTodayDate(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}
