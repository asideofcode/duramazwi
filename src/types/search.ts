export interface SearchEvent {
  query: string;
  resultCount: number;
  status: 'found' | 'not_found';
  timestamp: number;
  city?: string;
  country?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
  userAgent?: string;
}

export interface SearchNotFoundEvent {
  query: string;
  timestamp: number;
  city?: string;
  country?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
  userAgent?: string;
}

export interface SearchNotFoundResponse {
  success: boolean;
  message?: string;
  error?: string;
}
