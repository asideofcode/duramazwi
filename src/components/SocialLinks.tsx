'use client';

interface SocialLinksProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
  showLabels?: boolean;
}

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function SocialLinks({ 
  variant = 'default', 
  className = '',
  showLabels = true 
}: SocialLinksProps) {
  const socials = [
    {
      name: 'Instagram',
      username: '@shonadictionary',
      url: 'https://instagram.com/shonadictionary',
      icon: InstagramIcon,
      color: 'text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400'
    },
    {
      name: 'TikTok',
      username: '@shonadictionary',
      url: 'https://tiktok.com/@shonadictionary',
      icon: TikTokIcon,
      color: 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
    }
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${social.color}`}
              aria-label={`Follow us on ${social.name}`}
              title={`Follow us on ${social.name}`}
            >
              <Icon className="w-7 h-7" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm transition-colors ${social.color}`}
              aria-label={`Follow us on ${social.name}`}
            >
              <Icon className="w-4 h-4" />
              {showLabels && <span>{social.username}</span>}
            </a>
          );
        })}
      </div>
    );
  }

  // Default variant - full cards
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-md group"
          >
            <Icon className={`w-6 h-6 transition-colors text-gray-600 dark:text-gray-400 ${social.name === 'Instagram' ? 'group-hover:text-pink-600 dark:group-hover:text-pink-400' : 'group-hover:text-black dark:group-hover:text-white'}`} />
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {social.name}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {social.username}
              </div>
            </div>
            <svg 
              className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
