import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FolderGit2,
  Github,
} from 'lucide-react';
import { ProjectItem, projects } from '../data/projects';
import { profile } from '../data/profile';
import { ProjectVisualFrame } from './Projects';
import { TechBadgeIcon } from './TechIcons';

interface ProjectDetailProps {
  slug: string | null; // null => All Projects Archive view
  onBackHome: () => void;
  onSelectProject: (slug: string) => void;
}

export function ProjectDetail({
  slug,
  onBackHome,
  onSelectProject,
}: ProjectDetailProps) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  }, [slug, prefersReduced]);

  // All Projects Archive View
  if (!slug) {
    return (
      <main className="min-h-screen pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#525d73] dark:text-[#b6c0d4] transition-colors hover:text-[#b46900] dark:hover:text-[#FCA311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </button>

          <div className="mt-8 border-b border-[#d4d4d4] dark:border-[#1f325c] pb-8">
            <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
              Project Archive
            </p>
            <h1
              className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
              style={{ textWrap: 'balance' }}
            >
              All Projects &amp; Explorations
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[#14213D] dark:text-[#E5E5E5]">
              Verified software development, healthcare platform, and AI/ML exploration work. Additional public repositories can be explored directly on GitHub.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item) => (
              <motion.article
                key={item.slug}
                initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] transition-colors hover:border-[#FCA311]/75"
              >
                <div className="aspect-video overflow-hidden bg-[#000000]">
                  <ProjectVisualFrame project={item} />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                      <span className="text-[#b46900] dark:text-[#FCA311]">
                        {item.category}
                      </span>
                      {item.period && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{item.period}</span>
                        </>
                      )}
                    </div>
                    <h2 className="mt-2 font-display text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
                      {item.summary}
                    </p>
                    <p className="mt-4 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                      {item.technologies.join(' · ')}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E5E5E5] dark:border-[#1f325c] pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(item.slug)}
                      className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-semibold text-[#000000] dark:text-[#FFFFFF] hover:text-[#b46900] dark:hover:text-[#FCA311]"
                    >
                      <span>Project Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${item.title}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] text-[#14213D] dark:text-[#E5E5E5] hover:border-[#FCA311]/75 hover:text-[#b46900] dark:hover:text-[#FCA311]"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                Explore More Code on GitHub
              </h2>
              <p className="mt-1 text-sm text-[#14213D] dark:text-[#b6c0d4]">
                Browse ongoing experiments, coursework implementations, and public repositories.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FCA311] px-5 py-2.5 text-sm font-semibold text-[#000000] transition-colors hover:bg-[#fdb63b] whitespace-nowrap shrink-0"
            >
              <Github className="h-4 w-4" />
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
    );
  }

  // Individual Project Detail View
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project: ProjectItem | undefined = projects[currentIndex];

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl font-bold text-[#000000] dark:text-[#FFFFFF]">
            Project Not Found
          </h1>
          <p className="mt-3 text-[#14213D] dark:text-[#b6c0d4]">
            The requested project record does not exist in the portfolio index.
          </p>
          <button
            type="button"
            onClick={onBackHome}
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FCA311] px-5 py-2.5 text-sm font-semibold text-[#000000] hover:bg-[#fdb63b]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </main>
    );
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#525d73] dark:text-[#b6c0d4] transition-colors hover:text-[#b46900] dark:hover:text-[#FCA311]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </button>
          <span className="text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
            {project.statusLabel}
          </span>
        </div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
            <span className="text-[#b46900] dark:text-[#FCA311] font-medium">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>Role: {project.role}</span>
            {project.period && (
              <>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{project.period}</span>
              </>
            )}
          </div>

          <h1
            className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
            style={{ textWrap: 'balance' }}
          >
            {project.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
            {project.overview}
          </p>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FCA311] px-5 py-2.5 text-sm font-semibold text-[#000000] transition-colors hover:bg-[#fdb63b]"
              >
                <Github className="h-4 w-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <div className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-4 py-2 text-xs font-mono text-[#14213D] dark:text-[#E5E5E5]">
                <FolderGit2 className="h-4 w-4 text-[#b46900] dark:text-[#FCA311]" />
                <span>{project.githubNote ?? 'Repository link pending'}</span>
              </div>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-5 py-2.5 text-sm font-medium text-[#000000] dark:text-[#FFFFFF] hover:border-[#FCA311]/75"
              >
                <span>Open Live Demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Visual Showcase */}
          <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#000000]">
            <ProjectVisualFrame project={project} />
          </div>

          {/* Structured Case Study Sections */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#d4d4d4] dark:border-[#1f325c] pt-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                What It Tackles
              </h2>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
                {project.problemAddressed}
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                My Role &amp; What I Built
              </h2>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
                {project.contribution}
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#d4d4d4] dark:border-[#1f325c] pt-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                Key Highlights
              </h2>
              <ul className="mt-3 space-y-2.5">
                {project.keyFeatures.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-sm text-[#14213D] dark:text-[#E5E5E5]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#b46900] dark:text-[#FCA311]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                Technologies Used
              </h2>
              <ul className="mt-3 divide-y divide-[#E5E5E5] dark:divide-[#1f325c] border-t border-[#E5E5E5] dark:border-[#1f325c]">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2.5 py-2.5 text-sm font-mono text-[#14213D] dark:text-[#E5E5E5]"
                  >
                    <TechBadgeIcon name={tech} className="h-4 w-4 shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Project Navigation */}
          {nextProject && nextProject.slug !== project.slug && (
            <div className="mt-14 border-t border-[#d4d4d4] dark:border-[#1f325c] pt-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                  Next Project
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                  {nextProject.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(nextProject.slug)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-4 py-2 text-sm font-medium text-[#000000] dark:text-[#FFFFFF] hover:border-[#FCA311]/75"
              >
                <span>Open</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
