import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateHome: (sectionId?: string) => void;
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Leadership', id: 'leadership' },
];

export function Navbar({ onNavigateHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id?: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigateHome(id);
  };

  return (
    <header
      className={`no-print fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#f5f5f5]/92 dark:bg-[#000000]/90 backdrop-blur-md border-b border-[#d4d4d4] dark:border-[#1f325c]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 lg:gap-8 px-4 sm:px-6">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, 'top')}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
        >
          <span>Premal Kumar </span>
          <span className="text-[#b46900] dark:text-[#FCA311]">Shrestha</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-3.5 lg:gap-7 text-xs lg:text-sm font-medium text-[#14213D] dark:text-[#E5E5E5]"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="nav-link-underline whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#000000] dark:hover:text-[#FCA311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (plus mobile menu trigger on small screens) */}
        <div className="flex items-center shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#FCA311] px-4 py-2 text-xs font-semibold text-[#000000] transition-colors duration-150 hover:bg-[#fdb63b] shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
          >
            Say Hello
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-lg text-[#000000] dark:text-[#FFFFFF] hover:bg-[#E5E5E5] dark:hover:bg-[#14213D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF]/96 dark:bg-[#14213D]/96 backdrop-blur-lg px-6 py-5"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className="flex min-h-[44px] items-center text-base font-medium text-[#14213D] dark:text-[#FFFFFF] hover:text-[#b46900] dark:hover:text-[#FCA311] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#FCA311] px-5 py-2.5 text-sm font-semibold text-[#000000] transition-colors hover:bg-[#fdb63b]"
              >
                Say Hello
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
