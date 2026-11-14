import React from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { profile } from '../data/profile';

interface FooterProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onNavigateHome: (sectionId?: string) => void;
}

export function Footer({ theme, onToggleTheme, onNavigateHome }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-[#d4d4d4] dark:border-[#1f325c] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-[#000000] dark:text-[#FFFFFF]">
            {profile.name}
          </p>
          <p className="mt-1 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
            © {year} {profile.domain} · {profile.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#14213D] dark:text-[#E5E5E5]">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome('about');
            }}
            className="hover:text-[#b46900] dark:hover:text-[#FCA311] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome('projects');
            }}
            className="hover:text-[#b46900] dark:hover:text-[#FCA311] transition-colors"
          >
            Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-1 hover:text-[#b46900] dark:hover:text-[#FCA311] transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-1 hover:text-[#b46900] dark:hover:text-[#FCA311] transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex items-center gap-1 hover:text-[#b46900] dark:hover:text-[#FCA311] transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Email</span>
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-2.5 py-1 text-xs text-[#000000] dark:text-[#E5E5E5] hover:border-[#FCA311]/75"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-[#FCA311]" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-[#14213D]" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}
