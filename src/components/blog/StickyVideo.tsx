'use client';

import { useEffect, useRef, useState } from 'react';

interface StickyVideoProps {
  videoUrl: string;
  title: string;
  triggerElementId?: string; // Optional ID of element that triggers sticky behavior
}

export default function StickyVideo({ videoUrl, title, triggerElementId }: StickyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!triggerElementId) {
      // If no trigger element, use simple intersection observer on the video container
      const container = containerRef.current;
      if (!container) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsSticky(!entry.isIntersecting);
        },
        {
          threshold: 0,
          rootMargin: '-100px 0px 0px 0px', // Stick when 100px from top
        }
      );

      observer.observe(container);
      return () => observer.disconnect();
    }

    // If trigger element is provided, observe that element
    const triggerElement = document.getElementById(triggerElementId);
    if (!triggerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Become sticky when the trigger element enters the viewport
        setIsSticky(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      {
        threshold: 0,
        rootMargin: '200px 0px 0px 0px', // Start 200px before the element
      }
    );

    observer.observe(triggerElement);
    return () => observer.disconnect();
  }, [triggerElementId]);

  return (
    <div ref={containerRef} className="mb-12">
      {/* Placeholder to maintain space when video is sticky */}
      {isSticky && (
        <div className="relative w-full bg-transparent" style={{ paddingBottom: '56.25%' }} />
      )}
      
      {/* Video container */}
      <div
        className={`${
          isSticky 
            ? 'fixed top-20 right-4 z-40 w-80 md:w-96' 
            : 'relative w-full'
        }`}
      >
        <div className="relative w-full bg-black rounded-lg shadow-2xl" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
