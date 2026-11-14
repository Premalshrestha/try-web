import React from 'react';
import { Bot, Network, Sparkles } from 'lucide-react';
import type { SkillIconKey } from '../data/skills';

interface TechIconProps {
  iconKey: SkillIconKey;
  className?: string;
}

export function TechIcon({ iconKey, className = 'h-5 w-5 shrink-0' }: TechIconProps) {
  switch (iconKey) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#3776AB"
            d="M11.9 2C8.8 2 9 3.3 9 3.3V5h3v.6H7.8S5 5.3 5 8.8c0 3.5 2.4 3.4 2.4 3.4h1.4v-1.7s-.1-2.4 2.4-2.4h4.1s2.3 0 2.3-2.2V3.9S18 2 11.9 2zm-1.6 1.2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
          />
          <path
            fill="#FFD43B"
            d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3V19h-3v-.6h4.2s2.8.3 2.8-3.2c0-3.5-2.4-3.4-2.4-3.4h-1.4v1.7s.1 2.4-2.4 2.4H8.7s-2.3 0-2.3 2.2v2S6 22 12.1 22zm1.6-1.2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
          />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect width="20" height="20" x="2" y="2" rx="3" fill="#F7DF1E" />
          <path
            fill="#111111"
            d="M12.6 17.5c0 1.3-.8 2-2 2-.9 0-1.6-.4-2-1.1l1.1-.7c.2.4.5.6.9.6.5 0 .7-.2.7-.9v-4.4h1.3v4.5zm3.7 2c-1.4 0-2.3-.7-2.7-1.5l1.1-.7c.3.5.7.9 1.5.9.7 0 1.1-.3 1.1-.8 0-.5-.4-.7-1.2-1.1l-.4-.2c-1.2-.5-1.9-1.1-1.9-2.4 0-1.2.9-2.1 2.3-2.1 1 0 1.8.4 2.2 1.3l-1.1.7c-.2-.5-.5-.7-1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1l.4.2c1.4.6 2.1 1.2 2.1 2.5 0 1.4-1.1 2.4-2.6 2.4z"
          />
        </svg>
      );

    case 'cpp':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#00599C"
            d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2z"
          />
          <path
            fill="#004482"
            d="M12 2v20l8.5-5V7L12 2z"
            opacity="0.45"
          />
          <path
            fill="#FFFFFF"
            d="M11.6 14.3a2.8 2.8 0 1 1 0-4.6l-1.2.7a1.4 1.4 0 1 0 0 3.2l1.2.7zm3.1-2.8h.9v-.9h.7v.9h.9v.7h-.9v.9h-.7v-.9h-.9v-.7zm3.1 0h.9v-.9h.7v.9h.9v.7h-.9v.9h-.7v-.9h-.9v-.7z"
          />
        </svg>
      );

    case 'html':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="#E34F26" d="M3.5 3h17l-1.5 16.5L12 21.5 5 19.5 3.5 3z" />
          <path fill="#EF652A" d="M12 4.4v15.6l5.6-1.6L18.8 4.4H12z" />
          <path
            fill="#FFFFFF"
            d="M7.2 7.2h9.6l-.2 2.1H9.5l.2 2.2h6.7l-.5 5.4-3.9 1.1-3.9-1.1-.3-2.9h2.1l.1 1.4 2 .5 2-.5.2-2.2H7.8l-.6-6z"
          />
        </svg>
      );

    case 'css':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path fill="#1572B6" d="M3.5 3h17l-1.5 16.5L12 21.5 5 19.5 3.5 3z" />
          <path fill="#33A9DC" d="M12 4.4v15.6l5.6-1.6L18.8 4.4H12z" />
          <path
            fill="#FFFFFF"
            d="M7.2 7.2h9.6l-.3 2.1h-4.7l4.4 1.8-.5 5.8-3.7 1-3.8-1-.3-2.9H10l.1 1.4 1.9.5 1.9-.5.2-2.2H7.9l-.2-2h4.4L7.4 9.3l-.2-2.1z"
          />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1.3">
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#06B6D4"
            d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"
          />
        </svg>
      );

    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect width="20" height="18" x="2" y="3" rx="4" fill="#7952B3" />
          <path
            fill="#FFFFFF"
            d="M9 7.2h4c1.6 0 2.6.8 2.6 2.1 0 .9-.5 1.6-1.3 1.9 1 .2 1.7 1 1.7 2.2 0 1.5-1.1 2.4-2.9 2.4H9V7.2zm1.8 3.5h1.9c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1h-1.9v2zm0 3.7h2.1c.8 0 1.3-.4 1.3-1.1s-.5-1.1-1.3-1.1h-2.1v2.2z"
          />
        </svg>
      );

    case 'django':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect width="20" height="20" x="2" y="2" rx="4" fill="#0C4B33" />
          <path
            fill="#FFFFFF"
            d="M11.3 6.2h2v8.8c-1 .2-1.8.3-2.6.3-2.4 0-3.7-1.1-3.7-3.2 0-2 1.3-3.3 3.4-3.3.3 0 .6 0 .9.1V6.2zm0 4.3c-.2-.1-.5-.1-.7-.1-1 0-1.6.6-1.6 1.7 0 1.1.6 1.7 1.6 1.7.2 0 .5 0 .7-.1v-3.2zM16.8 8.9v5.4c0 1.9-.1 2.8-.6 3.5-.5.7-1.2 1.1-2.5 1.4l-1.8-.9c1.2-.4 1.8-.7 2.2-1.3.4-.6.5-1.3.5-3.2V8.9h2.2zm0-2.7v2h-2.2v-2h2.2z"
          />
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#5FA04E"
            d="M12 2.2 3.6 7v9.6L12 21.4l8.4-4.8V7L12 2.2z"
          />
          <path
            fill="#FFFFFF"
            d="M12 16.7c-1.8 0-2.9-.7-3.2-1.8l1.4-.5c.2.5.8.9 1.8.9 1 0 1.6-.4 1.6-1 0-.6-.5-.9-1.9-1.1-1.6-.3-2.7-.8-2.7-2.2 0-1.3 1.2-2.2 2.9-2.2 1.6 0 2.7.7 3 1.7l-1.4.5c-.2-.5-.7-.8-1.6-.8-.8 0-1.4.4-1.4.9 0 .5.5.8 1.8 1 1.7.3 2.8.8 2.8 2.3 0 1.5-1.2 2.3-3.1 2.3z"
          />
        </svg>
      );

    case 'express':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect
            width="20"
            height="20"
            x="2"
            y="2"
            rx="4"
            className="fill-[#000000] dark:fill-[#FFFFFF]"
          />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fontFamily="Raleway, ui-sans-serif, system-ui, sans-serif"
            className="fill-[#FFFFFF] dark:fill-[#000000]"
          >
            ex
          </text>
        </svg>
      );

    case 'api':
      return <Network className={`${className} text-[#14213D] dark:text-[#E5E5E5]`} />;

    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#00758F"
            d="M20.2 16.7c-.9-.4-1.9-.6-2.8-.6-.4 0-1.1 0-1.5.2-.1-.1-.2-.3-.3-.4-.6-.8-1.4-1.5-2.3-2-.9-.5-1.9-.9-2.8-1.4-.9-.5-1.7-1.1-2.2-1.9-.3-.5-.4-1.1-.4-1.7 0-.8.4-1.6 1-2.1.5-.4 1.1-.6 1.7-.6.8 0 1.5.4 2 .9l.9-.9c-.7-.8-1.8-1.3-2.9-1.3-1 0-2 .4-2.7 1-.9.8-1.4 1.9-1.4 3.1 0 .9.3 1.8.8 2.5.7 1 1.7 1.7 2.8 2.3.9.5 1.8.9 2.6 1.4.7.4 1.3 1 1.7 1.6l-2 .6.4 1.2 3.1-.9c.3.2.5.4.8.6l.8-.9c-.3-.2-.6-.4-.9-.6.9 0 1.9.2 2.7.6l.5-1.1z"
          />
          <circle cx="9.6" cy="8.2" r="0.8" fill="#F29111" />
        </svg>
      );

    case 'sqlite':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect width="18" height="18" x="3" y="3" rx="3.5" fill="#003B57" />
          <path
            fill="#4BB5E7"
            d="M16.5 6.5c-2.8 1.2-5.4 3.6-7 6.8-.9 1.7-1.3 3.4-1.4 4.7.8-1.3 1.9-2.7 3.3-3.9 1.8-1.6 3.7-3.6 5.1-7.6z"
          />
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#47A248"
            d="M12 2.3s4.6 4.7 4.6 9.8c0 3.7-2.2 6.5-4.1 7.6l-.5 2h-.4l-.4-2c-1.9-1.1-4.1-3.9-4.1-7.6C7.1 7 12 2.3 12 2.3z"
          />
          <path
            fill="#81C784"
            d="M12 2.3v17.4c1.9-1.1 4.1-3.9 4.1-7.6 0-5.1-4.1-9.8-4.1-9.8z"
            opacity="0.6"
          />
        </svg>
      );

    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#336791"
            d="M16.2 4.3c-1.1 0-2.1.4-2.8 1.1-.4-.1-.9-.2-1.4-.2-2.6 0-4.7 2-4.7 4.6 0 1.4.6 2.7 1.6 3.5v4.3c0 .9.7 1.6 1.6 1.6h1.2c.6 0 1.1-.4 1.3-1v-2.1h1.3v2.5c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-4.2c1.4-.9 2.3-2.5 2.3-4.3 0-3.2-1.6-5.8-3.6-5.8z"
          />
          <circle cx="10.8" cy="9.5" r="0.9" fill="#FFFFFF" />
          <circle cx="14.9" cy="9.5" r="0.9" fill="#FFFFFF" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#F05032"
            d="M21.4 11.1 12.9 2.6a1.3 1.3 0 0 0-1.8 0L9.3 4.4l2.2 2.2a1.6 1.6 0 0 1 2 2l2.1 2.1a1.6 1.6 0 1 1-.9.9l-2-2v5.2a1.6 1.6 0 1 1-1.3 0V9.5a1.6 1.6 0 0 1-.9-2.1L8.3 5.3 2.6 11.1a1.3 1.3 0 0 0 0 1.8l8.5 8.5a1.3 1.3 0 0 0 1.8 0l8.5-8.5a1.3 1.3 0 0 0 0-1.8z"
          />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-[#000000] dark:fill-[#FFFFFF]`}>
          <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.37 9.37 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.22C22 6.58 17.52 2 12 2z" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#2496ED"
            d="M13.2 10.2h2.2V8h-2.2v2.2zm-2.7 0h2.2V8h-2.2v2.2zm-2.7 0H10V8H7.8v2.2zm-2.7 0h2.2V8H5.1v2.2zm5.4-2.7h2.2V5.3h-2.2v2.2zm2.7 0h2.2V5.3h-2.2v2.2zm-5.4 0H10V5.3H7.8v2.2zm13.4 3.4c-.5-.4-1.6-.5-2.5-.3-.1-1-.7-1.9-1.6-2.5l-.4-.3-.3.4c-.5.7-.7 1.7-.4 2.6-.4.3-.9.5-1.6.5H3.1l-.1.5c-.2 2.1.4 4.3 1.8 5.8 1.3 1.4 3.2 2.1 5.6 2.1 4.6 0 8.1-2.2 9.8-6.4.8 0 2.4.1 3.1-1.3.1-.1.2-.5.3-.6l-.4-.5z"
          />
        </svg>
      );

    case 'pytorch':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="#EE4C2C"
            d="M16.9 7.6 15.2 9.3c1.8 1.8 1.8 4.8 0 6.7-1.8 1.8-4.8 1.8-6.7 0-1.8-1.8-1.8-4.8 0-6.7l3-3V3l-4.7 4.7a7.1 7.1 0 1 0 10.1 0z"
          />
          <circle cx="14.5" cy="5.5" r="1.2" fill="#EE4C2C" />
        </svg>
      );

    case 'ai':
      return <Sparkles className={`${className} text-[#b46900] dark:text-[#FCA311]`} />;

    case 'agentic':
      return <Bot className={`${className} text-[#14213D] dark:text-[#E5E5E5]`} />;
  }
}

const techNameToKey: Record<string, SkillIconKey> = {
  python: 'python',
  javascript: 'javascript',
  'c / c++': 'cpp',
  'c/c++': 'cpp',
  html: 'html',
  css: 'css',
  react: 'react',
  'tailwind css': 'tailwind',
  bootstrap: 'bootstrap',
  django: 'django',
  'node.js': 'nodejs',
  'express.js': 'express',
  'rest apis': 'api',
  mysql: 'mysql',
  sqlite: 'sqlite',
  mongodb: 'mongodb',
  postgresql: 'postgres',
  git: 'git',
  github: 'github',
  docker: 'docker',
  pytorch: 'pytorch',
  'ai/ml technologies': 'ai',
};

export function TechBadgeIcon({
  name,
  className = 'h-4 w-4 shrink-0',
}: {
  name: string;
  className?: string;
}) {
  const key = techNameToKey[name.trim().toLowerCase()];
  if (!key) return null;
  return <TechIcon iconKey={key} className={className} />;
}
