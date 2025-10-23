'use client';

import { useEffect } from 'react';

interface UseNavigationWarningOptions {
  when: boolean;
  message?: string;
}

/**
 * Navigation warning hook based on Next.js official recommendations
 * Handles browser navigation (refresh, close) but NOT back/forward buttons
 * as per Next.js team: "there's no browser behavior to prevent popstate"
 */
export function useNavigationWarning({ 
  when, 
  message = 'You have unsaved changes. Are you sure you want to leave?' 
}: UseNavigationWarningOptions) {

  // Handle browser navigation (refresh, close, external links)
  useEffect(() => {
    if (!when) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [when, message]);

  // Handle internal link clicks
  useEffect(() => {
    if (!when) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        // Check if it's an internal link
        const isInternal = link.href.startsWith(window.location.origin);
        const isSamePage = link.href === window.location.href;
        
        // Only warn for internal navigation to different pages
        if (isInternal && !isSamePage && link.target !== '_blank') {
          // Check for modified events (ctrl+click, etc.)
          const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1;
          
          if (!isModified) {
            const shouldNavigate = confirm(message);
            if (!shouldNavigate) {
              e.preventDefault();
              e.stopPropagation();
            }
          }
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [when, message]);
}
