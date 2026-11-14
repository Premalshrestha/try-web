import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { leadershipItems, leadershipStatement } from '../data/leadership';
import { SectionReveal } from './MotionPrimitives';

export function Leadership() {
  const prefersReduced = useReducedMotion();
  const [expandedId, setExpandedId] = useState<string>('sdg-ambassador-batch-3');

  const featured = leadershipItems.find((item) => item.featured);
  const others = leadershipItems.filter((item) => !item.featured);

  return (
    <section
      id="leadership"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                Community &amp; Impact
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
                style={{ textWrap: 'balance' }}
              >
                Technology Meets Purpose.
              </h2>
              <p className="mt-3 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                Volunteer Leadership · Program Participation · Advocacy &amp; Community Engagement
              </p>
            </div>

            <blockquote className="lg:col-span-6 rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 text-sm sm:text-base italic leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
              “{leadershipStatement}”
            </blockquote>
          </div>
        </SectionReveal>

        {/* Featured Program Card */}
        {featured && (
          <motion.article
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-12 rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
              <span className="text-[#b46900] dark:text-[#FCA311] font-medium">
                {featured.engagementType}
              </span>
              <span aria-hidden="true">·</span>
              <span>{featured.organization}</span>
            </div>

            <h3 className="mt-2.5 font-display text-2xl font-bold text-[#000000] dark:text-[#FFFFFF]">
              {featured.title}
            </h3>

            <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
              {featured.highlights.map((hl) => (
                <li
                  key={hl}
                  className="text-sm leading-relaxed text-[#14213D] dark:text-[#E5E5E5] border-t border-[#E5E5E5] dark:border-[#1f325c] pt-3"
                >
                  {hl}
                </li>
              ))}
            </ul>

            {featured.focusAreas && (
              <div className="mt-6 border-t border-[#E5E5E5] dark:border-[#1f325c] pt-4">
                <p className="text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                  Focus Areas: {featured.focusAreas.join(' · ')}
                </p>
              </div>
            )}
          </motion.article>
        )}

        {/* Interactive Leadership & Advocacy Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {others.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            const spanClass =
              idx < 3
                ? 'lg:col-span-2'
                : idx === 4
                  ? 'md:col-span-2 lg:col-span-3'
                  : 'lg:col-span-3';
            return (
              <motion.div
                key={item.id}
                initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: prefersReduced ? 0 : idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col justify-between rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 transition-colors duration-200 hover:border-[#FCA311]/75 ${spanClass}`}
              >
                <div>
                  <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                    {item.engagementType}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-[#000000] dark:text-[#FFFFFF]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#525d73] dark:text-[#b6c0d4]">
                    {item.organization}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedId((prev) => (prev === item.id ? '' : item.id))
                    }
                    className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-semibold text-[#14213D] dark:text-[#E5E5E5] hover:text-[#b46900] dark:hover:text-[#FCA311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
                  >
                    <span>{isExpanded ? 'Hide Context' : 'View Context'}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 border-t border-[#E5E5E5] dark:border-[#1f325c] pt-3 text-sm leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
                      {item.highlights.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
