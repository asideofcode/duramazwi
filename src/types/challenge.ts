// Challenge system types
export interface Challenge {
  id: string;
  type: 'multiple_choice' | 'audio_recognition' | 'translation_builder';
  question: string;
  correctAnswer: string | string[];
  options?: string[]; // For multiple_choice and audio_recognition
  distractors?: string[]; // For translation_builder (wrong words)
  audioUrl?: string;
  explanation?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  labels?: string[]; // Tags/labels for grouping challenges
}

export interface DailyChallenge {
  date: string; // YYYY-MM-DD
  challenges: Challenge[];
  totalPoints: number;
  estimatedTime: number; // minutes
  status: 'draft' | 'published'; // Only published challenges are visible to users
}

export interface ChallengeResult {
  challengeId: string;
  userAnswer: string | string[];
  isCorrect: boolean;
  pointsEarned: number;
  timeSpent: number; // seconds
}

export interface ChallengeSession {
  date: string;
  challenges: Challenge[];
  results: ChallengeResult[];
  currentChallengeIndex: number;
  totalScore: number;
  isComplete: boolean;
  startTime: number;
  endTime?: number; // When the challenge was completed
}
