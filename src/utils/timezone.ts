/**
 * Get today's date in YYYY-MM-DD format for a specific timezone
 * @param timezone - IANA timezone identifier (e.g., 'America/New_York', 'Europe/London')
 * @returns Date string in YYYY-MM-DD format
 */
export function getTodayInTimezone(timezone: string = 'UTC'): string {
  const now = new Date();
  
  try {
    // Use Intl.DateTimeFormat to get the date in the specified timezone
    const formatter = new Intl.DateTimeFormat('en-CA', { 
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    
    return formatter.format(now); // Returns YYYY-MM-DD format
  } catch (error) {
    console.warn(`Invalid timezone "${timezone}", falling back to UTC`);
    return now.toISOString().split('T')[0];
  }
}

/**
 * Get the user's timezone from browser (client-side only)
 * @returns IANA timezone identifier
 */
export function getUserTimezone(): string {
  if (typeof window === 'undefined') {
    return 'UTC';
  }
  
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (error) {
    return 'UTC';
  }
}

/**
 * Check if a date string is today in the given timezone
 * @param dateString - Date in YYYY-MM-DD format
 * @param timezone - IANA timezone identifier
 * @returns boolean
 */
export function isToday(dateString: string, timezone: string = 'UTC'): boolean {
  return dateString === getTodayInTimezone(timezone);
}
