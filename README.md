# Premal Kumar Shrestha — Personal Portfolio

Personal portfolio website for **Premal Kumar Shrestha** (`premalshrestha.com.np`), Computer Engineering graduate, Software Developer, and AI Enthusiast.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (dark-first with optional light mode)
- **Motion**: Motion for React (`motion/react`) with `prefers-reduced-motion` support
- **Icons**: Lucide React

## Updating Portfolio Content

All portfolio data lives in `src/data/` for clean, zero-friction updates:

- `src/data/projects.ts` — Add new GitHub repositories, live demo links, or case study details.
- `src/data/research.ts` — Fill in verified paper title, authors, publication year, and publication URL once confirmed.
- `src/data/skills.ts`, `src/data/experience.ts`, `src/data/education.ts`, `src/data/leadership.ts`, `src/data/profile.ts` — Update personal, academic, or leadership records.

## Running Locally

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Building & Deploying

```bash
npm run lint
npm run build
```

Deploy the generated `dist/` directory to any static hosting provider (Vercel, Netlify, Cloudflare Pages, or GitHub Pages). For clean `/projects/:slug` client-side routes on static hosts, configure SPA fallback routing to `index.html`.
