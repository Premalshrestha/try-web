import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { educationEntries } from '../data/education';
import { SectionReveal } from './MotionPrimitives';

export function Education() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="education"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <div className="mb-12">
            <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
              Academic Background
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
              style={{ textWrap: 'balance' }}
            >
              Education.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {educationEntries.map((edu, index) => (
            <motion.article
              key={edu.id}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: prefersReduced ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#b46900] dark:text-[#FCA311] tabular-nums">
                    {edu.period}
                  </span>
                  <GraduationCap
                    aria-hidden="true"
                    className="h-4 w-4 text-[#525d73] dark:text-[#b6c0d4]"
                  />
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-[#14213D] dark:text-[#E5E5E5]">
                  {edu.institution}
                </p>
                {edu.affiliation && (
                  <p className="mt-1 text-sm text-[#525d73] dark:text-[#b6c0d4]">
                    {edu.affiliation}
                  </p>
                )}
              </div>

              {edu.detail && (
                <div className="mt-6 border-t border-[#E5E5E5] dark:border-[#1f325c] pt-4">
                  <p className="text-sm font-mono font-semibold text-[#000000] dark:text-[#FFFFFF] tabular-nums">
                    {edu.detail}
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
