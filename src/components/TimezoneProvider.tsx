'use client';

import { useEffect } from 'react';
import { getUserTimezone } from '@/utils/timezone';

/**
 * Client-side component that sends the user's timezone to the server
 * This helps ensure daily challenges are shown for the correct date
 */
export default function TimezoneProvider() {
  useEffect(() => {
    // Get user's timezone and send it to server for future requests
    const timezone = getUserTimezone();
    
    // Set timezone in a cookie for server-side access (this only sets/updates the timezone cookie)
    document.cookie = `timezone=${timezone}; path=/; max-age=${60 * 60 * 24 * 365}`;
    
    // Also set it in sessionStorage for client-side access
    sessionStorage.setItem('userTimezone', timezone);
  }, []);

  return null; // This component doesn't render anything
}

/**
 * Hook to get the user's timezone (client-side)
 */
export function useUserTimezone(): string {
  if (typeof window === 'undefined') {
    return 'UTC';
  }
  
  return sessionStorage.getItem('userTimezone') || getUserTimezone();
}
