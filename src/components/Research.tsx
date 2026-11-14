import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { achievementEntries, researchEntries } from '../data/research';
import { SectionReveal } from './MotionPrimitives';

export function Research() {
  return (
    <section
      id="research"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <div className="mb-12">
            <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
              Research &amp; Wins
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
              style={{ textWrap: 'balance' }}
            >
              Research &amp; Achievements.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Research Card */}
          <SectionReveal className="lg:col-span-7">
            {researchEntries.map((item) => (
              <article
                key={item.id}
                className="h-full rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                    Academic Research
                  </span>
                  <BookOpen
                    aria-hidden="true"
                    className="h-4 w-4 text-[#525d73] dark:text-[#b6c0d4]"
                  />
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">
                  {item.topic}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#14213D] dark:text-[#E5E5E5]">
                  {item.conference}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#14213D] dark:text-[#b6c0d4]">
                  {item.summary}
                </p>

                {/* Editable citation metadata until verified */}
                <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-[#E5E5E5] dark:border-[#1f325c] pt-4 text-xs sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[#525d73] dark:text-[#b6c0d4]">
                      Paper Title
                    </dt>
                    <dd className="mt-0.5 text-[#000000] dark:text-[#E5E5E5]">
                      {item.paperTitle}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[#525d73] dark:text-[#b6c0d4]">
                      Authors &amp; Year
                    </dt>
                    <dd className="mt-0.5 text-[#000000] dark:text-[#E5E5E5]">
                      {item.authors} · {item.publicationYear}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </SectionReveal>

          {/* Achievement Card */}
          <SectionReveal className="lg:col-span-5" delay={0.08}>
            {achievementEntries.map((ach) => (
              <article
                key={ach.id}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-[#b46900] dark:text-[#FCA311] tabular-nums">
                      Achievement · {ach.year}
                    </span>
                    <Award
                      aria-hidden="true"
                      className="h-4 w-4 text-[#525d73] dark:text-[#b6c0d4]"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">
                    {ach.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#14213D] dark:text-[#E5E5E5]">
                    {ach.organizer}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#14213D] dark:text-[#b6c0d4]">
                    {ach.context}
                  </p>
                </div>
              </article>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
