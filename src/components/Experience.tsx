import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { experiences } from '../data/experience';
import { SectionReveal } from './MotionPrimitives';
import { TechBadgeIcon } from './TechIcons';

export function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <div className="mb-12">
            <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
              Work Experience
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
              style={{ textWrap: 'balance' }}
            >
              Building Through Experience.
            </h2>
          </div>
        </SectionReveal>

        <div className="relative space-y-8">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.id}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: prefersReduced ? 0 : idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 gap-6 rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 sm:p-8 lg:grid-cols-12"
            >
              {/* Timeline Period & Role Meta */}
              <div className="lg:col-span-4">
                <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311] tabular-nums">
                  {exp.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-[#525d73] dark:text-[#b6c0d4]">
                  {exp.organization}
                  {exp.location ? ` · ${exp.location}` : ''}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-3.5 gap-y-2">
                  {exp.technologies.map((tech) => (
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

              {/* Responsibilities */}
              <div className="lg:col-span-8 lg:border-l lg:border-[#E5E5E5] lg:dark:border-[#1f325c] lg:pl-8">
                <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FCA311]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
