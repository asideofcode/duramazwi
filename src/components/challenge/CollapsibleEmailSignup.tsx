'use client';

import { useState } from 'react';
import EmailNotificationSignup from './EmailNotificationSignup';

export default function CollapsibleEmailSignup() {
  const [showEmailSignup, setShowEmailSignup] = useState(false);

  return (
    <div>
      {!showEmailSignup ? (
        <div className="text-center py-2">
          <button
            onClick={() => setShowEmailSignup(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 dark:bg-blue-600 hover:bg-blue-200 dark:hover:bg-blue-500 rounded-full text-sm font-medium text-blue-700 dark:text-white transition-all shadow-sm hover:shadow-md group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Get daily reminders</span>
          </button>
        </div>
      ) : (
        <div className="relative animate-in slide-in-from-top-2 fade-in duration-300">
          <button
            onClick={() => setShowEmailSignup(false)}
            className="absolute -top-2 -right-2 z-10 p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <EmailNotificationSignup />
        </div>
      )}
    </div>
  );
}
