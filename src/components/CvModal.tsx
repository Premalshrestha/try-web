import React, { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Download, Printer, X } from 'lucide-react';
import { profile } from '../data/profile';
import { experiences } from '../data/experience';
import { educationEntries } from '../data/education';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { leadershipItems } from '../data/leadership';
import { achievementEntries, researchEntries } from '../data/research';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({ open, onClose }: CvModalProps) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const handleDownloadHtml = () => {
    const htmlContent = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${profile.name} — Curriculum Vitae</title>
<style>
  body { font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #14213D; max-width: 800px; margin: 40px auto; padding: 0 24px; line-height: 1.55; }
  h1 { font-size: 26px; margin: 0 0 4px; color: #000000; }
  h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: #b46900; border-bottom: 1px solid #E5E5E5; padding-bottom: 4px; margin-top: 24px; }
  h3 { font-size: 15px; margin: 12px 0 2px; color: #000000; }
  p, li { font-size: 13.5px; color: #14213D; }
  .meta { font-size: 13px; color: #525d73; margin-bottom: 16px; }
  ul { margin: 6px 0 12px; padding-left: 18px; }
</style>
</head>
<body>
  <h1>${profile.name}</h1>
  <p class="meta">${profile.roleSummary} · ${profile.location}<br/>
  Email: ${profile.email} · Portfolio: ${profile.domain} · GitHub: ${profile.github} · LinkedIn: ${profile.linkedin}</p>
  <h2>Profile</h2>
  <p>${profile.aboutParagraphs.join(' ')}</p>
  <h2>Experience</h2>
  ${experiences
    .map(
      (e) =>
        `<h3>${e.role} (${e.period})</h3><p>${e.organization}</p><ul>${e.highlights
          .map((h) => `<li>${h}</li>`)
          .join('')}</ul>`
    )
    .join('')}
  <h2>Education</h2>
  ${educationEntries
    .map(
      (ed) =>
        `<h3>${ed.degree} (${ed.period})</h3><p>${ed.institution}${
          ed.affiliation ? ` · ${ed.affiliation}` : ''
        }${ed.detail ? ` · ${ed.detail}` : ''}</p>`
    )
    .join('')}
  <h2>Projects</h2>
  ${projects
    .map(
      (p) =>
        `<h3>${p.title} (${p.category})</h3><p>${p.summary} Stack: ${p.technologies.join(
          ', '
        )}${p.githubUrl ? ` · GitHub: ${p.githubUrl}` : ''}</p>`
    )
    .join('')}
  <h2>Technical Skills</h2>
  <ul>${skillCategories
    .map(
      (cat) =>
        `<li><strong>${cat.title}:</strong> ${cat.items
          .map((i) => (i.note ? `${i.name} (${i.note})` : i.name))
          .join(', ')}</li>`
    )
    .join('')}</ul>
  <h2>Leadership &amp; Social Impact</h2>
  <ul>${leadershipItems
    .map((l) => `<li><strong>${l.title}</strong> — ${l.organization}</li>`)
    .join('')}</ul>
  <h2>Research &amp; Achievements</h2>
  <ul>
    ${researchEntries
      .map((r) => `<li>${r.summary}</li>`)
      .join('')}
    ${achievementEntries
      .map((a) => `<li>${a.title} (${a.organizer}, ${a.year})</li>`)
      .join('')}
  </ul>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Premal_Kumar_Shrestha_CV.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="no-print fixed inset-0 bg-[#000000]/80 backdrop-blur-xs"
          />

          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#000000] shadow-2xl"
          >
            {/* Modal Toolbar */}
            <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-[#d4d4d4] dark:border-[#1f325c] bg-[#E5E5E5]/60 dark:bg-[#14213D] px-6 py-4">
              <div>
                <h2
                  id="cv-modal-title"
                  className="font-display text-base font-semibold text-[#000000] dark:text-[#FFFFFF]"
                >
                  Curriculum Vitae — {profile.name}
                </h2>
                <p className="text-xs text-[#525d73] dark:text-[#b6c0d4]">
                  Compiled from verified portfolio records
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#000000] px-3 py-1.5 text-xs font-medium text-[#000000] dark:text-[#FFFFFF] hover:border-[#FCA311]/75"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadHtml}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#FCA311] px-3 py-1.5 text-xs font-semibold text-[#000000] hover:bg-[#fdb63b]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download CV</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close CV preview"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#525d73] dark:text-[#b6c0d4] hover:bg-[#E5E5E5] dark:hover:bg-[#000000]/60"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Scrollable CV Content */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6 text-sm text-[#14213D] dark:text-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-4 border-b border-[#E5E5E5] dark:border-[#1f325c] pb-4">
                <img
                  src="/assets/aistudio/Premal_118c9c6f.png"
                  alt="Premal Kumar Shrestha"
                  referrerPolicy="no-referrer"
                  className="h-16 w-16 rounded-xl object-cover object-top border border-[#d4d4d4] dark:border-[#1f325c] shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-bold text-[#000000] dark:text-[#FFFFFF]">
                    {profile.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                    {profile.roleSummary}
                  </p>
                  <p className="mt-2 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4] break-all sm:break-normal">
                    {profile.email} · {profile.location} · {profile.domain}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                  Summary &amp; Licensure
                </h4>
                <p className="mt-2 leading-relaxed">
                  Computer Engineering graduate from Kantipur City College (Purbanchal University, CGPA 3.41) with Nepal Engineering Council registration and licensing completed.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                  Experience
                </h4>
                {experiences.map((exp) => (
                  <div key={exp.id} className="mt-2">
                    <div className="flex flex-wrap justify-between gap-2 font-semibold text-[#000000] dark:text-[#FFFFFF]">
                      <span>{exp.role}</span>
                      <span className="font-mono text-xs tabular-nums">{exp.period}</span>
                    </div>
                    <ul className="mt-1.5 list-disc pl-5 space-y-1">
                      {exp.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                  Education
                </h4>
                <div className="mt-2 space-y-2">
                  {educationEntries.map((edu) => (
                    <div key={edu.id} className="flex flex-wrap justify-between gap-2">
                      <div>
                        <p className="font-semibold text-[#000000] dark:text-[#FFFFFF]">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-[#525d73] dark:text-[#b6c0d4]">
                          {edu.institution}
                          {edu.affiliation ? ` · ${edu.affiliation}` : ''}
                          {edu.detail ? ` · ${edu.detail}` : ''}
                        </p>
                      </div>
                      <span className="font-mono text-xs tabular-nums">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
                  Projects
                </h4>
                <div className="mt-2 space-y-2">
                  {projects.map((p) => (
                    <div key={p.slug}>
                      <p className="font-semibold text-[#000000] dark:text-[#FFFFFF]">
                        {p.title}{' '}
                        <span className="font-normal text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
                          ({p.technologies.join(', ')})
                        </span>
                      </p>
                      <p className="text-xs text-[#14213D] dark:text-[#b6c0d4]">
                        {p.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
