import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  User,
} from 'lucide-react';
import { profile } from '../data/profile';
import { MagneticWrapper } from './MotionPrimitives';

interface HeroProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onExploreWork: () => void;
  onOpenCv: () => void;
}

const PROFILE_PHOTO_PATH = '/assets/aistudio/Premal_118c9c6f.png';

function AmbientParticles({ theme }: { theme: 'dark' | 'light' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(34, Math.max(14, Math.floor((width * height) / 40000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: Math.random() * 1.4 + 0.7,
        alpha: Math.random() * 0.35 + 0.15,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const color = theme === 'dark' ? '252, 163, 17' : '20, 33, 61';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 130) * 0.08})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationId = window.requestAnimationFrame(draw);
    };

    animationId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReduced, theme]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-75"
    />
  );
}

export function Hero({
  theme,
  onToggleTheme,
  onExploreWork,
  onOpenCv,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const [photoError, setPhotoError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 48]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 24]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: prefersReduced ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      {/* Subtle ambient background glows using #14213D and #FCA311 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-36 left-1/5 h-[460px] w-[460px] sm:h-[580px] sm:w-[580px] rounded-full bg-[#14213D]/12 dark:bg-[#14213D]/65 blur-[140px]" />
        <div className="absolute top-1/3 right-1/6 h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] rounded-full bg-[#FCA311]/10 dark:bg-[#FCA311]/12 blur-[130px]" />
      </div>

      <AmbientParticles theme={theme} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Hero Utility Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#d4d4d4] dark:border-[#1f325c] pb-4">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4]">
            <span>{profile.domain}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF]/90 dark:bg-[#14213D]/90 px-3 py-1.5 text-xs font-medium text-[#000000] dark:text-[#FFFFFF] transition-colors duration-150 hover:border-[#FCA311] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-[#FCA311]" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-[#14213D]" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Responsive 2-Column Split */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Typographic Identity Column */}
          <motion.div
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1 flex flex-col justify-center md:col-span-7"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base font-semibold text-[#b46900] dark:text-[#FCA311]"
            >
              Hi there, I&apos;m
            </motion.p>

            {/* Primary Dominant Visual Anchor: Bold & Large Name */}
            <motion.h1
              variants={itemVariants}
              className="mt-2 font-display font-extrabold tracking-[-0.025em] text-[#000000] dark:text-[#FFFFFF] leading-[1.03]"
              style={{
                fontSize: 'clamp(2.75rem, 6.2vw, 4.75rem)',
                fontWeight: 800,
                textWrap: 'balance',
              }}
            >
              <span className="block">Premal Kumar</span>
              <span className="mt-1 block text-[#b46900] dark:text-[#FCA311]">
                Shrestha
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-xs sm:text-sm font-mono text-[#525d73] dark:text-[#b6c0d4]"
            >
              {profile.roleSummary}
            </motion.p>

            {/* Engineering Tagline */}
            <motion.h2
              variants={itemVariants}
              className="mt-6 font-display font-semibold tracking-tight text-[#000000] dark:text-[#FFFFFF] leading-[1.24]"
              style={{
                fontSize: 'clamp(1.3rem, 2.2vw, 1.85rem)',
                textWrap: 'balance',
              }}
            >
              {profile.headlineTop}{' '}
              <span className="font-normal text-[#14213D] dark:text-[#E5E5E5]">
                {profile.headlineBottom}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#14213D] dark:text-[#E5E5E5]"
            >
              {profile.supportingText}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <MagneticWrapper className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onExploreWork}
                  className="inline-flex w-full sm:w-auto min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#FCA311] px-6 py-3 text-sm font-semibold text-[#000000] shadow-md shadow-[#000000]/25 transition-colors duration-150 hover:bg-[#fdb63b] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
                >
                  <span>Explore My Work</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </MagneticWrapper>

              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex w-full sm:w-auto min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF]/90 dark:bg-[#14213D]/90 px-6 py-3 text-sm font-semibold text-[#000000] dark:text-[#FFFFFF] transition-colors duration-150 hover:border-[#FCA311] hover:bg-[#FFFFFF] dark:hover:bg-[#1a2b50] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </motion.div>

            {/* Direct Profile Links */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#14213D] dark:text-[#E5E5E5]"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 transition-colors hover:text-[#b46900] dark:hover:text-[#FCA311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-[#525d73]/60">
                /
              </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 transition-colors hover:text-[#b46900] dark:hover:text-[#FCA311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-[#525d73]/60">
                /
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[40px] items-center gap-2 transition-colors hover:text-[#b46900] dark:hover:text-[#FCA311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Glassmorphism Rounded Profile Portrait */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 relative flex items-center justify-start md:justify-center md:col-span-5"
          >
            {/* Gold & Oxford Navy ambient halo behind glass frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-[#FCA311]/25 via-[#14213D]/30 to-[#FCA311]/10 blur-2xl opacity-85 dark:opacity-85"
            />

            {/* Glassmorphism Backdrop Container */}
            <div className="relative w-44 sm:w-56 md:w-full md:max-w-[400px] rounded-[28px] bg-[#FFFFFF]/80 dark:bg-[#14213D]/70 p-2.5 sm:p-3 backdrop-blur-xl border border-[#d4d4d4] dark:border-[#FCA311]/30 shadow-2xl">
              <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-[#14213D] ring-1 ring-inset ring-black/5 dark:ring-white/10">
                {photoError ? (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#14213D] to-[#000000] p-6 text-center">
                    <User className="h-10 w-10 text-[#FCA311]" />
                    <p className="mt-3 font-display text-base font-semibold text-[#FFFFFF]">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-xs font-mono text-[#E5E5E5]">
                      {profile.location}
                    </p>
                  </div>
                ) : (
                  <img
                    src={PROFILE_PHOTO_PATH}
                    alt="Studio portrait of Premal Kumar Shrestha, Software Developer and Computer Engineering Graduate"
                    referrerPolicy="no-referrer"
                    onError={() => setPhotoError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.03]"
                  />
                )}

                {/* Measured scrim for portrait footer legibility */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#14213D]/25 to-transparent"
                />
                <div className="hidden md:flex absolute bottom-4 left-4 right-4 items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-base font-bold text-[#FFFFFF]">
                      {profile.name}
                    </p>
                    <p className="text-xs font-mono text-[#FCA311]">
                      Software &amp; AI Engineering
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#E5E5E5] whitespace-nowrap shrink-0">
                    Kathmandu, NP
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 sm:mt-12 flex justify-center md:justify-start">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex min-h-[40px] items-center gap-2 text-xs font-mono text-[#525d73] dark:text-[#b6c0d4] transition-colors hover:text-[#b46900] dark:hover:text-[#FCA311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311] rounded-sm"
          >
            <span>Keep scrolling</span>
            <motion.span
              animate={prefersReduced ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
