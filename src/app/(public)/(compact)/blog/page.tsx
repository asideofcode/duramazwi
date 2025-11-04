import Link from 'next/link';
import SearchBar from '@/component/search-bar.component';

export const dynamic = 'force-dynamic';

const blogPosts = [
  {
    slug: 'learning-shona-through-music-pote',
    title: 'Learning Shona Through Music: "Pote"',
    description: 'Explore the beautiful Shona language through the lyrics of "Pote" by Learn Shona ft. Shona Prince & Tamy Moyo',
    date: '2025-01-28',
    readTime: '5 min read',
    category: 'Music & Language',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Search Bar */}
      <header>
        <div id="search-bar">
          <SearchBar />
        </div>
      </header>

      {/* Blog Index */}
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Shona Dictionary Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover the rhythm and soul of Shona through stories, music, analysis and the words that bring our vibrant shared culture to life
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                  Read
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State (if no posts) */}
        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              More articles coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
