import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight, FolderGit2, Github, Layers } from 'lucide-react';
import { ProjectCategory, ProjectItem, projects } from '../data/projects';
import { SectionReveal } from './MotionPrimitives';
import { TechBadgeIcon } from './TechIcons';

interface ProjectsProps {
  onSelectProject: (slug: string) => void;
  onViewAllProjects: () => void;
}

const categories: Array<'All' | ProjectCategory> = [
  'All',
  'Artificial Intelligence',
  'Healthcare Technology',
  'Disaster Risk Management',
];

export function ProjectVisualFrame({
  project,
  className = '',
}: {
  project: ProjectItem;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#14213D] via-[#0c1427] to-[#000000] p-6 text-center ${className}`}
      >
        <Layers className="h-8 w-8 text-[#FCA311]" />
        <p className="mt-3 font-display text-sm font-semibold text-[#FFFFFF]">
          {project.title}
        </p>
        <p className="mt-1 text-xs font-mono text-[#E5E5E5]">{project.category}</p>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.imageAlt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${className}`}
    />
  );
}

export function Projects({
  onSelectProject,
  onViewAllProjects,
}: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const prefersReduced = useReducedMotion();

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                Selected Work
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
                style={{ textWrap: 'balance' }}
              >
                Featured Projects.
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-[#14213D] dark:text-[#E5E5E5]">
                A look at what I&apos;ve been building across conversational AI, healthcare data visualization, and disaster risk exploration.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter projects by domain"
              className="flex flex-wrap items-center gap-1 rounded-xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#E5E5E5] dark:bg-[#14213D] p-1"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] ${
                    selectedCategory === cat
                      ? 'bg-[#FFFFFF] dark:bg-[#FCA311] text-[#000000] font-semibold shadow-xs'
                      : 'text-[#14213D] dark:text-[#E5E5E5] hover:text-[#000000] dark:hover:text-[#FCA311]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Large Alternating Project Cards */}
        <div className="mt-12 space-y-10">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={project.slug}
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: prefersReduced ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] transition-colors duration-200 hover:border-[#FCA311]/75"
              >
                {/* Subtle spotlight border glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(252,163,17,0.10),transparent_70%)]"
                />

                <div className="relative grid grid-cols-1 items-stretch lg:grid-cols-12">
                  {/* Visual Media Column */}
                  <div
                    className={`relative aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden bg-[#000000] lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <ProjectVisualFrame project={project} />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000000]/65 via-transparent to-transparent lg:hidden"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Clean Unboxed Metadata */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                        <span className="text-[#b46900] dark:text-[#FCA311] font-semibold">
                          {project.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.role}</span>
                        {project.period && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{project.period}</span>
                          </>
                        )}
                      </div>

                      <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
                        {project.overview}
                      </p>

                      {/* Contribution summary */}
                      <p className="mt-4 text-sm leading-relaxed text-[#14213D] dark:text-[#b6c0d4]">
                        <span className="font-semibold text-[#000000] dark:text-[#FFFFFF]">
                          My role:{' '}
                        </span>
                        {project.contribution}
                      </p>

                      {/* Clean Unboxed Technology Line with Real Brand Icons */}
                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E5E5E5] dark:border-[#1f325c] pt-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#14213D] dark:text-[#E5E5E5]"
                          >
                            <TechBadgeIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-6 flex flex-wrap items-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project.slug)}
                        className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#FCA311] px-4 py-2 text-xs font-semibold text-[#000000] transition-colors duration-150 hover:bg-[#fdb63b] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
                      >
                        <span>Read Project Story</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-transparent dark:bg-[#000000]/45 px-4 py-2 text-xs font-medium text-[#000000] dark:text-[#FFFFFF] transition-colors duration-150 hover:border-[#FCA311] hover:text-[#b46900] dark:hover:text-[#FCA311] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>View Repository</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                          <FolderGit2 className="h-3.5 w-3.5 text-[#b46900] dark:text-[#FCA311]" />
                          <span>{project.githubNote ?? 'Repository pending link'}</span>
                        </span>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-[#b46900] dark:text-[#FCA311] hover:underline whitespace-nowrap shrink-0"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#d4d4d4] dark:border-[#1f325c] pt-8">
          <p className="text-sm text-[#14213D] dark:text-[#b6c0d4]">
            More software experiments and open-source repositories are hosted on GitHub.
          </p>
          <button
            type="button"
            onClick={onViewAllProjects}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-5 py-2.5 text-sm font-semibold text-[#000000] dark:text-[#FFFFFF] transition-colors duration-150 hover:border-[#FCA311] hover:bg-[#E5E5E5]/60 dark:hover:bg-[#1a2b50] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
