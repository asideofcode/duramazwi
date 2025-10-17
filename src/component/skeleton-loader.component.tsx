export function DictionaryEntrySkeleton() {
  return (
    <div className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 animate-pulse">
      {/* Word title skeleton */}
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-3"></div>
      
      {/* Meaning lines skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
      
      {/* Additional info skeleton */}
      <div className="mt-3 flex items-center space-x-4">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
      </div>
    </div>
  );
}

export function SearchResultsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Title skeleton */}
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-4 animate-pulse"></div>
      
      {/* Description skeleton */}
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-96 mb-6 animate-pulse"></div>
      
      {/* Pagination skeleton */}
      <div className="mb-6 flex items-center justify-between animate-pulse">
        <div className="w-20">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
        <div className="w-20 flex justify-end">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
        </div>
      </div>
      
      {/* Results skeleton */}
      <div className="space-y-6 mb-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <DictionaryEntrySkeleton key={index} />
        ))}
      </div>
      
      {/* Bottom pagination skeleton */}
      <div className="flex items-center justify-between animate-pulse">
        <div className="w-20">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
        <div className="w-20 flex justify-end">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
}

export function BrowsePageSkeleton() {
  return (
    <div className="">
      {/* Page Header skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-80 mb-2"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6"></div>
        
        {/* Search bar skeleton */}
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full max-w-2xl"></div>
      </div>

      {/* Alphabet Filter skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 27 }).map((_, index) => (
            <div key={index} className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>

      {/* Top Pagination skeleton */}
      <div className="mb-8 flex items-center justify-between animate-pulse">
        <div className="w-20">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
        <div className="w-20 flex justify-end">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
        </div>
      </div>

      {/* Entries List skeleton */}
      <div className="space-y-6 mb-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <DictionaryEntrySkeleton key={index} />
        ))}
      </div>

      {/* Bottom Pagination skeleton */}
      <div className="flex items-center justify-between animate-pulse">
        <div className="w-20">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
        <div className="w-20 flex justify-end">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
}
