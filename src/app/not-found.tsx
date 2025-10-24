'use client'
import Link from 'next/link';
import SvgIcon from '@/component/icons/svg-icon';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <SvgIcon 
            className="h-24 w-24 text-gray-400 dark:text-gray-600 mx-auto mb-4" 
            variant="default" 
            icon="Book" 
          />
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            title="Go to homepage"
            aria-label="Go to homepage"
          >
            <SvgIcon className="h-5 w-5" variant="light" icon="Book" />
            <span>Back to Dictionary</span>
          </Link>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Looking for something specific?</p>
            <Link 
              href="/browse" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
              title="Browse all dictionary entries"
              aria-label="Browse all dictionary entries"
            >
              Browse all words
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
