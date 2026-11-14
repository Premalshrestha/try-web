import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="no-print fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-[#FCA311] via-[#fdb63b] to-[#14213D] pointer-events-none"
      style={{ scaleX }}
    />
  );
}

export function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hoverInteractive, setHoverInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { stiffness: 450, damping: 35, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 450, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (prefersReduced) return;
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest('a, button, [role="button"], input, textarea, select')
      );
      setHoverInteractive(interactive);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [mouseX, mouseY, prefersReduced]);

  if (!enabled || !visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="no-print fixed top-0 left-0 z-40 pointer-events-none hidden lg:block"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FCA311]/60 bg-[#FCA311]/10"
        animate={{
          width: hoverInteractive ? 40 : 24,
          height: hoverInteractive ? 40 : 24,
          opacity: hoverInteractive ? 0.9 : 0.55,
        }}
        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticWrapper({
  children,
  className = '',
  strength = 0.22,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = '',
  delay = 0,
}: SectionRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
