# Analytics Documentation

This document outlines the key analytics events tracked in the app using **Google Analytics 4 (GA4)**.

## Default GA4 Events
The following events are automatically tracked by GA4 (Enhanced Measurement):
1. **Page View** (`page_view`) - Captures page visits and URL changes.
2. **Scroll** (`scroll`) - Triggered when a user scrolls 90% of the page.
3. **Outbound Click** (`click`) - Captures clicks leading to external links.
4. **File Download** (`file_download`) - Tracks downloads of supported file types.
5. **Session Start** (`session_start`) - Marks the beginning of a user session.
6. **User Engagement** (`user_engagement`) - Indicates interaction beyond 10 seconds or multiple pages.

## Custom Events
To better understand user behavior, the app defines the following custom events:

### 1. **Search Performed**
- **Purpose**: Captures when a user performs a search.
- **Data Captured**:
  - `search_term`: The word or phrase entered.
  - `result_status`: `success` or `no_results`.
  - `result_count`: Number of search results returned.

### 2. **Word Clicked**
- **Purpose**: Tracks when users click on a word in the index or a related word suggestion.
- **Data Captured**:
  - `word`: The clicked word.
  - `source`: The origin of the click (`index` or `related_word`).

### 3. **Search Error**
- **Purpose**: Logs errors during search operations.
- **Data Captured**:
  - `search_term`: The word or phrase entered.
  - `error_message`: Details about the error.

### 4. **Theme Toggle**
- **Purpose**: Captures when the user switches between light and dark modes.
- **Data Captured**:
  - `theme`: The active theme (`light` or `dark`).


## How We Handle Analytics in Next.js
To ensure compatibility with Next.js and avoid issues with server-side rendering (SSR), we use `globalThis.gtag`:
- **Why?**: `window` is unavailable during SSR. Using `globalThis` ensures safe access to the Google Analytics tracker on the client-side.
- **Pattern**:
  ```javascript
   globalThis.gtag?.("event", "event_name", { key: value });
  ```
  This ensures events are only logged when GA is available.

## Notes for Developers
1. **No Overhead**: Default GA4 events are sufficient for basic analytics.
2. **Custom Events**: Designed to capture app-specific insights, such as user searches and theme preferences.
3. **Adding Events**: Stick to the `globalThis.gtag` pattern for consistent tracking.
4. **Verification**: Use GA4's Realtime Reports to verify events are being logged.

## Further Reading
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [Next.js and Google Analytics](https://nextjs.org/docs/advanced-features/analytics)
