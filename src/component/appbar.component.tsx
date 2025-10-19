"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useTheme } from "@/app/hook/use-theme.hook";
import SvgIcon from "@/component/icons/svg-icon";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const navItems = [
  { href: "/browse", label: "Browse", title: "Browse all dictionary entries", icon: "Book" },
  { href: "/random", label: "Random Word", title: "Get a random Shona word", icon: "Play" },
  { href: "/suggest", label: "Suggest", title: "Suggest a new word for the dictionary", icon: "Plus" },
];

const AppTitle = "Shona Dictionary (Duramazwi)";

/**
 * Responsive navigation component with hamburger menu
 */
export default function Appbar() {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Capture initial header height to prevent scroll restoration issues
    setHeaderHeight(header.offsetHeight);

    const sticky = header.offsetTop;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Sticky behavior
      if (scrolled > sticky) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
      
      // Search icon appears after 50px of scrolling
      if (scrolled > 70) {
        setShowSearchIcon(true);
      } else {
        setShowSearchIcon(false);
      }
    };

    // Run handlers immediately to check initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleResize = () => {
      // Close mobile menu when mobile nav becomes hidden (desktop mode)
      const mobileNav = mobileNavRef.current;
      if (mobileNav && isMobileMenuOpen) {
        // Check if mobile nav is hidden (display: none or visibility: hidden)
        const computedStyle = window.getComputedStyle(mobileNav);
        const isHidden = computedStyle.display === 'none' || computedStyle.visibility === 'hidden';
        
        if (isHidden) {
          setIsMobileMenuOpen(false);
          setHeaderHeight(0);
        }
      }
    };

    // Run handlers immediately to check initial state
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  

  // Update header height when mobile menu state changes
  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      // Use setTimeout to ensure DOM has updated after menu state change
      setTimeout(() => {
        setHeaderHeight(header.offsetHeight);
      }, 0);
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Placeholder to prevent content jumping when header becomes fixed */}
      {isStuck && <div style={{ height: `${headerHeight}px` }}></div>}
      
      <div 
        ref={headerRef}
        className={`${inter.className} mb-2 ${isStuck ? 'fixed top-0 left-0 right-0 z-50' : ''} ${(isStuck || isMobileMenuOpen) ? 'border-b border-gray-200 dark:border-gray-700' : ''} bg-default transition-all duration-300`}
      >
      <nav className={`${isStuck ? 'py-2' : 'py-4'} transition-all duration-300`}>
        <div className="max-w-4xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo - Left side */}
          <Link 
            href="/" 
            className="flex items-center space-x-2" 
            title="Go to homepage"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <SvgIcon
              className="h-8 w-8 text-blue-600 dark:text-blue-500"
              variant="blue"
              icon="Book"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {AppTitle}
            </span>
          </Link>
          
          {/* Navigation Items - Right side */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href === "/random" && pathname.startsWith("/word/"));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Search Icon - Only show after 50px scroll */}
            {showSearchIcon && (
              <button
                onClick={() => {
                  const searchElement = document.getElementById('search-bar');
                  if (searchElement) {
                    searchElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Focus the search input after scrolling
                    setTimeout(() => {
                      const input = searchElement.querySelector('input');
                      if (input) input.focus();
                    }, 500);
                  }
                }}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                aria-label="Scroll to search"
                title="Go to search bar"
              >
                <SvgIcon
                  className="h-4 w-4"
                  variant="default"
                  icon="Search"
                />
              </button>
            )}
            
            {/* Theme Toggle */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
              aria-label="Toggle theme"
            >
              <SvgIcon
                className="h-5 w-5"
                variant="default"
                icon="LightDark"
              />
            </button> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div ref={mobileNavRef} className="md:hidden">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2" 
              title="Go to homepage"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <SvgIcon
                className="h-8 w-8 text-blue-600 dark:text-blue-500"
                variant="blue"
                icon="Book"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {AppTitle}
              </span>
            </Link>
            
            <div className="flex items-center space-x-2">
              {/* Search Icon for Mobile - Only show after 70px scroll */}
              {showSearchIcon && (
                <button
                  onClick={() => {
                    const searchElement = document.getElementById('search-bar');
                    if (searchElement) {
                      // Find the input element immediately (synchronous)
                      const input = searchElement.querySelector('input') as HTMLInputElement;
                      
                      if (input) {
                        // Focus MUST be synchronous for iOS keyboard to appear
                        input.focus();
                        input.click();
                        
                        // Set cursor to end of input
                        if (input.value) {
                          input.setSelectionRange(input.value.length, input.value.length);
                        }
                      }
                      
                      // Scroll to element AFTER focusing (non-blocking)
                      searchElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Scroll to search"
                  title="Go to search bar"
                >
                  <SvgIcon
                    className="h-5 w-5"
                    variant="default"
                    icon="Search"
                  />
                </button>
              )}

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
                title="Open navigation menu"
              >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href === "/random" && pathname.startsWith("/word/"));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    title={item.title}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    }`}
                  >
                    <SvgIcon
                      className="h-5 w-5"
                      variant="default"
                      icon={item.icon}
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        </div>

      </nav>
    </div>
    </>
  );
}
