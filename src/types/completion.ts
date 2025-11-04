export interface ChallengeCompletionEvent {
  // Challenge info
  date: string; // Challenge date (YYYY-MM-DD)
  totalScore: number;
  correctAnswers: number;
  totalChallenges: number;
  accuracy: number;
  timeSpent: number; // in seconds
  
  // Geolocation data (from Vercel)
  city?: string;
  country?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
  
  // Request metadata
  userAgent?: string;
  timestamp: number;
  
  // Optional user identifier (if you add auth later)
  userId?: string;
}

export interface ChallengeCompletionResponse {
  success: boolean;
  id?: string;
  error?: string;
}
