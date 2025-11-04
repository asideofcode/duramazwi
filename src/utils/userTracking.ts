/**
 * Simple UUID-based user tracking for analytics
 * Stores a persistent UUID in localStorage to identify returning users
 * Note: This can be cleared/faked by users, but provides basic tracking
 */

import { v4 as uuidv4 } from 'uuid';

const USER_ID_KEY = 'shona_user_id';

/**
 * Get or create a persistent user ID
 * Returns the UUID from localStorage, or creates a new one if it doesn't exist
 */
export function getUserId(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    // Try to get existing UUID
    let userId = localStorage.getItem(USER_ID_KEY);
    
    // If no UUID exists, create and store one
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem(USER_ID_KEY, userId);
    }
    
    return userId;
  } catch (error) {
    // Handle localStorage errors (e.g., private browsing, quota exceeded)
    console.warn('Failed to access user ID:', error);
    return null;
  }
}

/**
 * Clear the stored user ID (useful for testing or privacy features)
 */
export function clearUserId(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(USER_ID_KEY);
  } catch (error) {
    console.warn('Failed to clear user ID:', error);
  }
}
