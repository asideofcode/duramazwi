# 📱 Shona Dictionary Mobile App - Development TODO

## Project Overview
Building a native mobile app (iOS & Android) for the Shona Dictionary using Expo and React Native. The app will feature dictionary search and daily challenges, with visual consistency to the web app.

---

## 🎯 Phase 1: Project Setup & Infrastructure

### 1.1 Initial Setup
- [ ] Create Expo app with TypeScript + Expo Router template
- [ ] Configure project structure (app/, components/, services/, types/)
- [ ] Set up independent package.json with all dependencies
- [ ] Configure app.json with app name, bundle identifiers, icons
- [ ] Set up .gitignore for mobile-specific files
- [ ] Configure TypeScript (tsconfig.json)

### 1.2 Styling & Theme
- [ ] Install and configure NativeWind (Tailwind for React Native)
- [ ] Create theme configuration matching web app colors
- [ ] Set up dark mode support
- [ ] Create shared style constants (colors, spacing, typography)
- [ ] Test Tailwind classes work correctly

### 1.3 Navigation
- [ ] Set up Expo Router with tabs layout
- [ ] Create tab navigation structure:
  - [ ] Dictionary tab (index)
  - [ ] Daily Challenge tab
- [ ] Configure tab bar icons and styling
- [ ] Set up navigation types

### 1.4 API & Data Layer
- [ ] Create API service configuration
- [ ] Set up axios/fetch wrapper with base URL
- [ ] Install and configure React Query (@tanstack/react-query)
- [ ] Create API endpoints service:
  - [ ] `/api/mobile/search` - Search words
  - [ ] `/api/mobile/word/:id` - Get word details
  - [ ] `/api/mobile/challenge/daily` - Get daily challenge
- [ ] Set up error handling utilities
- [ ] Configure request/response interceptors

### 1.5 State Management
- [ ] Install AsyncStorage for local persistence
- [ ] Install Zustand for app state
- [ ] Create stores:
  - [ ] User preferences (theme, sound settings)
  - [ ] Challenge progress (streak, completed dates)
  - [ ] Favorites/bookmarks
- [ ] Set up persistence middleware

### 1.6 TypeScript Types
- [ ] Copy/adapt types from web app:
  - [ ] Challenge types
  - [ ] Word/Dictionary types
  - [ ] API response types
- [ ] Create mobile-specific types
- [ ] Set up type exports

---

## 📖 Phase 2: Dictionary Feature

### 2.1 Search Screen (Main Tab)
- [ ] Create search input component
- [ ] Add search icon and clear button
- [ ] Implement debounced search
- [ ] Show search suggestions/autocomplete
- [ ] Add loading state
- [ ] Handle empty states
- [ ] Add recent searches (AsyncStorage)

### 2.2 Word List
- [ ] Install @shopify/flash-list for performance
- [ ] Create word list item component
- [ ] Implement virtualized scrolling
- [ ] Add pull-to-refresh
- [ ] Show word + brief definition preview
- [ ] Add tap to navigate to detail
- [ ] Implement skeleton loading states

### 2.3 Word Detail Screen
- [ ] Create word detail layout
- [ ] Display word with pronunciation
- [ ] Show all definitions grouped by part of speech
- [ ] Display examples with translations
- [ ] Add audio playback button (if available)
- [ ] Implement favorite/bookmark button
- [ ] Add share functionality
- [ ] Show related words
- [ ] Add back navigation

### 2.4 Browse Feature
- [ ] Create alphabet grid (A-Z)
- [ ] Filter words by selected letter
- [ ] Show word count per letter
- [ ] Implement smooth scrolling

### 2.5 Favorites
- [ ] Create favorites screen/tab
- [ ] Display bookmarked words
- [ ] Implement remove from favorites
- [ ] Add empty state
- [ ] Persist favorites in AsyncStorage

---

## 🎮 Phase 3: Daily Challenge Feature

### 3.1 Challenge Container
- [ ] Create daily challenge screen
- [ ] Fetch challenge data from API
- [ ] Show challenge date
- [ ] Display progress indicator (X/Y completed)
- [ ] Handle loading state
- [ ] Handle error states
- [ ] Check if already completed (AsyncStorage)
- [ ] Show completion screen if done

### 3.2 Challenge Types - Multiple Choice
- [ ] Create MultipleChoice component
- [ ] Display question text
- [ ] Render 4 options as buttons
- [ ] Handle option selection
- [ ] Show correct/incorrect feedback
- [ ] Animate selection
- [ ] Add haptic feedback
- [ ] Show explanation after answer

### 3.3 Challenge Types - Audio Recognition
- [ ] Create AudioChallenge component
- [ ] Install expo-av for audio playback
- [ ] Add play audio button
- [ ] Display waveform or audio indicator
- [ ] Render word options
- [ ] Handle audio loading states
- [ ] Implement replay functionality
- [ ] Add volume control

### 3.4 Challenge Types - Translation Builder
- [ ] Create TranslationBuilder component
- [ ] Display English sentence to translate
- [ ] Show word bank (correct + distractors)
- [ ] Implement drag-and-drop or tap-to-select
- [ ] Build answer array
- [ ] Validate word order
- [ ] Show correct answer on wrong attempt
- [ ] Add reset button

### 3.5 Challenge Progress & Completion
- [ ] Track answers (correct/incorrect)
- [ ] Calculate score
- [ ] Show progress between challenges
- [ ] Create completion screen:
  - [ ] Final score display
  - [ ] Streak counter
  - [ ] Share results button
  - [ ] Restart/try again option
- [ ] Save completion to AsyncStorage
- [ ] Update streak logic

### 3.6 Sound Effects
- [ ] Install expo-av
- [ ] Add sound effect files (correct, incorrect, complete)
- [ ] Create sound manager utility
- [ ] Add mute/unmute toggle
- [ ] Persist sound preference
- [ ] Preload sounds for performance

### 3.7 Streak & Stats
- [ ] Display current streak
- [ ] Show longest streak
- [ ] Track total challenges completed
- [ ] Show calendar view of completed days
- [ ] Add streak freeze/recovery logic (optional)

---

## 🎨 Phase 4: UI/UX Polish

### 4.1 Visual Consistency
- [ ] Match web app color scheme:
  - [ ] Primary blue (#2563eb)
  - [ ] Dark mode colors
  - [ ] Text colors and hierarchy
- [ ] Use consistent typography
- [ ] Match button styles
- [ ] Replicate card designs
- [ ] Use same icons (Lucide React Native)

### 4.2 Animations
- [ ] Install react-native-reanimated
- [ ] Add page transition animations
- [ ] Animate challenge feedback
- [ ] Add loading animations
- [ ] Implement success celebrations
- [ ] Add micro-interactions

### 4.3 Haptic Feedback
- [ ] Install expo-haptics
- [ ] Add haptics on button press
- [ ] Vibrate on correct/incorrect answer
- [ ] Add subtle feedback on navigation

### 4.4 Loading States
- [ ] Create skeleton loaders for word list
- [ ] Add spinner for API calls
- [ ] Show progress indicators
- [ ] Implement optimistic updates

### 4.5 Error Handling
- [ ] Create error boundary component
- [ ] Show user-friendly error messages
- [ ] Add retry buttons
- [ ] Handle network errors gracefully
- [ ] Log errors for debugging

### 4.6 Empty States
- [ ] Design empty search results
- [ ] Create no favorites message
- [ ] Add no internet connection screen
- [ ] Show challenge unavailable state

---

## 🚀 Phase 5: App Configuration & Assets

### 5.1 App Icon & Splash Screen
- [ ] Design app icon (1024x1024)
- [ ] Generate all required icon sizes
- [ ] Create splash screen
- [ ] Configure app.json with assets
- [ ] Test on both iOS and Android

### 5.2 App Configuration
- [ ] Set app name: "Shona Dictionary"
- [ ] Configure bundle identifiers
- [ ] Set version number (1.0.0)
- [ ] Configure orientation (portrait preferred)
- [ ] Set status bar style
- [ ] Configure deep linking (optional)

### 5.3 Fonts
- [ ] Add custom fonts if needed
- [ ] Configure expo-font
- [ ] Preload fonts on app start

### 5.4 Permissions
- [ ] Configure audio permissions (for challenges)
- [ ] Add permission request flows
- [ ] Handle permission denials

---

## 🔧 Phase 6: Backend API Endpoints

### 6.1 Mobile API Routes (Next.js)
- [ ] Create `/src/app/api/mobile/` directory
- [ ] Implement `GET /api/mobile/search?q=query`
  - [ ] Return simplified word list
  - [ ] Include word, brief definition, id
  - [ ] Limit results (20-30)
  - [ ] Add pagination support
- [ ] Implement `GET /api/mobile/word/[id]`
  - [ ] Return full word details
  - [ ] Include audio URL if available
  - [ ] Optimize response size
- [ ] Implement `GET /api/mobile/challenge/daily?date=YYYY-MM-DD`
  - [ ] Return daily challenge
  - [ ] Shuffle options server-side
  - [ ] Include audio URLs
  - [ ] Support date override for testing
- [ ] Add CORS configuration for mobile
- [ ] Add rate limiting (optional)
- [ ] Add API versioning (v1)

### 6.2 API Documentation
- [ ] Document all mobile endpoints
- [ ] Add request/response examples
- [ ] Document error codes
- [ ] Create Postman collection (optional)

---

## 🧪 Phase 7: Testing & Quality

### 7.1 Testing
- [ ] Test on iOS simulator
- [ ] Test on Android emulator
- [ ] Test on physical iOS device
- [ ] Test on physical Android device
- [ ] Test offline behavior
- [ ] Test with slow network
- [ ] Test dark mode
- [ ] Test different screen sizes

### 7.2 Performance
- [ ] Profile app performance
- [ ] Optimize image loading
- [ ] Reduce bundle size
- [ ] Implement code splitting
- [ ] Cache API responses
- [ ] Optimize list rendering

### 7.3 Accessibility
- [ ] Add accessibility labels
- [ ] Test with screen reader
- [ ] Ensure proper contrast ratios
- [ ] Add keyboard navigation support

---

## 📦 Phase 8: Build & Deployment

### 8.1 Development Build
- [ ] Create development build
- [ ] Test on TestFlight (iOS)
- [ ] Test on Google Play Internal Testing (Android)

### 8.2 Production Build
- [ ] Configure EAS Build
- [ ] Set up app signing
- [ ] Create production builds
- [ ] Submit to App Store
- [ ] Submit to Google Play

### 8.3 Updates
- [ ] Configure Expo Updates (OTA)
- [ ] Set up update channels
- [ ] Test update mechanism

---

## 🎯 Future Enhancements (Phase 9+)

### Nice-to-Have Features
- [ ] Offline dictionary (bundle data)
- [ ] Word of the day notification
- [ ] Learning progress tracking
- [ ] Custom word lists
- [ ] Flashcard mode
- [ ] Speech-to-text for pronunciation practice
- [ ] Social features (share scores)
- [ ] Multiple language support
- [ ] Tablet optimization
- [ ] Widget support (iOS 14+, Android)

---

## 📝 Notes

### Design Consistency Checklist
- ✅ Use same color palette as web app
- ✅ Match typography hierarchy
- ✅ Replicate card/button styles
- ✅ Use consistent spacing (Tailwind scale)
- ✅ Match dark mode implementation
- ✅ Use same icons (Lucide)

### Technical Decisions
- **Navigation**: Expo Router (file-based)
- **Styling**: NativeWind (Tailwind CSS)
- **Data Fetching**: React Query
- **Local Storage**: AsyncStorage
- **State Management**: Zustand
- **Lists**: FlashList
- **Audio**: expo-av
- **Animations**: react-native-reanimated

### API Strategy
- API-first approach (requires internet)
- Mobile-optimized endpoints under `/api/mobile/`
- Server-side data processing
- Efficient response payloads

---

## 🐛 Known Issues / Blockers
- [ ] None yet

---

## ✅ Completed Tasks
- [x] Create comprehensive TODO list
- [x] Define project structure
- [x] Plan API endpoints
- [x] Choose technology stack
- [x] Create Expo app with tabs template
- [x] Set up independent mobile-app directory
- [x] Install and configure NativeWind (Tailwind CSS)
- [x] Set up React Query for data fetching
- [x] Create API service layer (dictionary, challenge)
- [x] Build mobile API endpoints in Next.js
- [x] Create Dictionary tab with search
- [x] Create Word detail screen
- [x] Create Challenge tab with multiple choice
- [x] Add progress tracking and results screen

---

**Last Updated**: October 29, 2025
**Version**: 1.0.0
**Status**: 🚧 In Development
