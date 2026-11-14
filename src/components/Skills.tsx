import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { skillCategories } from '../data/skills';
import { SectionReveal } from './MotionPrimitives';
import { TechIcon } from './TechIcons';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const visibleCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                What I Work With
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
                style={{ textWrap: 'balance' }}
              >
                Tools &amp; Technologies.
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-[#14213D] dark:text-[#E5E5E5]">
                The languages, frameworks, databases, and AI tools I reach for when building software and exploring new ideas.
              </p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter technical skills by category"
              className="flex flex-wrap items-center gap-1 rounded-xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#E5E5E5] dark:bg-[#14213D] p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] ${
                  activeCategory === 'all'
                    ? 'bg-[#FFFFFF] dark:bg-[#FCA311] text-[#000000] font-semibold shadow-xs'
                    : 'text-[#14213D] dark:text-[#E5E5E5] hover:text-[#000000] dark:hover:text-[#FCA311]'
                }`}
              >
                All
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] ${
                    activeCategory === cat.id
                      ? 'bg-[#FFFFFF] dark:bg-[#FCA311] text-[#000000] font-semibold shadow-xs'
                      : 'text-[#14213D] dark:text-[#E5E5E5] hover:text-[#000000] dark:hover:text-[#FCA311]'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              layout={!prefersReduced}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.45,
                delay: prefersReduced ? 0 : catIdx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 transition-colors duration-200 hover:border-[#FCA311]/75"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#525d73] dark:text-[#b6c0d4]">
                    {category.summary}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#b46900] dark:text-[#FCA311] tabular-nums">
                  {String(category.items.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="mt-5 divide-y divide-[#E5E5E5] dark:divide-[#1f325c] border-t border-[#E5E5E5] dark:border-[#1f325c]">
                {category.items.map((skill) => {
                  const key = `${category.id}-${skill.name}`;
                  const isHovered = hoveredSkill === key;
                  return (
                    <li
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(key)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`flex items-center justify-between gap-3 py-2.5 px-2 -mx-2 rounded-lg transition-colors duration-150 ${
                        isHovered
                          ? 'bg-[#FCA311]/15 dark:bg-[#000000]/55 text-[#000000] dark:text-[#FFFFFF]'
                          : 'text-[#14213D] dark:text-[#E5E5E5]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <TechIcon iconKey={skill.icon} className="h-5 w-5 shrink-0" />
                        <span className="text-sm font-medium truncate">
                          {skill.name}
                        </span>
                      </div>
                      {skill.note && (
                        <span className="text-xs font-mono text-[#525d73] dark:text-[#b6c0d4] shrink-0">
                          {skill.note}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
