// Challenge system types
export interface Challenge {
  id: string;
  type: 'multiple_choice' | 'audio_recognition' | 'translation_builder';
  question: string;
  correctAnswer: string | string[];
  options?: string[]; // For multiple_choice and audio_recognition
  distractors?: string[]; // For translation_builder (wrong words)
  wordBank?: string[]; // For translation_builder (all words including correct)
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
  endTime?: number;
}

export interface ChallengeCompletionStats {
  date: string;
  completedAt: number;
  totalScore: number;
  correctAnswers: number;
  totalChallenges: number;
  accuracy: number;
  timeSpent: number; // seconds
  challengeIds: string[];
  correctChallengeIds: string[];
}
