import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { profile } from '../data/profile';
import { SectionReveal } from './MotionPrimitives';

export function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="about"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <div className="mb-12">
            <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
              About Me
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
              style={{ textWrap: 'balance' }}
            >
              Beyond the Code.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Narrative */}
          <SectionReveal className="lg:col-span-7" delay={0.05}>
            <div className="space-y-5 text-base leading-[1.75] text-[#14213D] dark:text-[#E5E5E5] max-w-prose">
              {profile.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </SectionReveal>

          {/* Compact Credential Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {profile.credentials.map((cred, index) => (
                <motion.div
                  key={cred.label}
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: prefersReduced ? 0 : index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-5 transition-colors duration-200 hover:border-[#FCA311]/75"
                >
                  <p className="text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                    {cred.label}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF] tabular-nums">
                    {cred.value}
                  </p>
                  <p className="mt-1 text-sm text-[#14213D] dark:text-[#E5E5E5]">
                    {cred.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
