"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/hook/use-theme.hook";
import SvgIcon from "@/component/icons/svg-icon";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const navItems = [
  { href: "/browse", label: "Browse" },
  { href: "/random", label: "Random Word" },
  { href: "/suggest", label: "Suggest" },
];

/**
 * Responsive navigation component with hamburger menu
 */
export default function Appbar() {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;

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
      if (scrolled > 100) {
        setShowSearchIcon(true);
      } else {
        setShowSearchIcon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Placeholder to prevent content jumping when header becomes fixed */}
      {isStuck && <div className="h-16"></div>}
      
      <div 
        id="main-header"
        className={`${inter.className} mb-2 ${isStuck ? 'fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700' : ''} bg-default transition-all duration-300`}
      >
      <nav className={`${isStuck ? 'py-2' : 'py-4'} transition-all duration-300`}>
        <div className="max-w-4xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo - Left side */}
          <Link href="/" className="flex items-center space-x-2">
            <SvgIcon
              className="h-8 w-8 text-blue-600 dark:text-blue-500"
              variant="blue"
              icon="Book"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Duramazwi
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
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <SvgIcon
                className="h-8 w-8 text-blue-600 dark:text-blue-500"
                variant="blue"
                icon="Book"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Duramazwi
              </span>
            </Link>
            
            <div className="flex items-center space-x-2">
              {/* Search Icon for Mobile - Only show after 50px scroll */}
              {showSearchIcon && (
                <button
                  onClick={() => {
                    const searchElement = document.getElementById('search-bar');
                    if (searchElement) {
                      searchElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      setTimeout(() => {
                        const input = searchElement.querySelector('input');
                        if (input) input.focus();
                      }, 500);
                    }
                  }}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Scroll to search"
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
            <div className="mt-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href === "/random" && pathname.startsWith("/word/"));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
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
