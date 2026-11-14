import React, { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Leadership } from './components/Leadership';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { CustomCursor, ScrollProgressBar } from './components/MotionPrimitives';
import { projects } from './data/projects';
import { profile } from './data/profile';

type RouteState =
  | { view: 'home' }
  | { view: 'projects-archive' }
  | { view: 'project-detail'; slug: string };

function parseRoute(pathname: string): RouteState {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/projects') {
    return { view: 'projects-archive' };
  }
  if (normalized.startsWith('/projects/')) {
    const slug = decodeURIComponent(normalized.slice('/projects/'.length));
    return { view: 'project-detail', slug };
  }
  return { view: 'home' };
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() =>
    typeof window !== 'undefined' ? parseRoute(window.location.pathname) : { view: 'home' }
  );
  const [cvOpen, setCvOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore storage failures in restricted contexts
    }
  }, [theme]);

  // Keep document title synchronized with route
  useEffect(() => {
    if (route.view === 'home') {
      document.title = `${profile.name} | Software Developer & AI Enthusiast`;
    } else if (route.view === 'projects-archive') {
      document.title = `Projects | ${profile.name}`;
    } else {
      const matched = projects.find((p) => p.slug === route.slug);
      document.title = matched
        ? `${matched.title} | ${profile.name}`
        : `Project | ${profile.name}`;
    }
  }, [route]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((path: string, nextRoute: RouteState) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setRoute(nextRoute);
  }, []);

  const handleNavigateHome = useCallback(
    (sectionId?: string) => {
      if (route.view !== 'home') {
        navigateTo('/', { view: 'home' });
        if (sectionId) {
          window.setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      if (!sectionId || sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [navigateTo, route.view]
  );

  const handleSelectProject = useCallback(
    (slug: string) => {
      navigateTo(`/projects/${encodeURIComponent(slug)}`, {
        view: 'project-detail',
        slug,
      });
    },
    [navigateTo]
  );

  const handleViewAllProjects = useCallback(() => {
    navigateTo('/projects', { view: 'projects-archive' });
  }, [navigateTo]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#f5f5f5] text-[#14213D] dark:bg-[#000000] dark:text-[#FFFFFF] transition-colors duration-300">
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar onNavigateHome={handleNavigateHome} />

        {route.view === 'home' ? (
          <main>
            <Hero
              theme={theme}
              onToggleTheme={handleToggleTheme}
              onExploreWork={() => handleNavigateHome('projects')}
              onOpenCv={() => setCvOpen(true)}
            />
            <About />
            <Skills />
            <Projects
              onSelectProject={handleSelectProject}
              onViewAllProjects={handleViewAllProjects}
            />
            <Experience />
            <Education />
            <Leadership />
            <Research />
            <Contact />
          </main>
        ) : route.view === 'projects-archive' ? (
          <ProjectDetail
            slug={null}
            onBackHome={() => handleNavigateHome('projects')}
            onSelectProject={handleSelectProject}
          />
        ) : (
          <ProjectDetail
            slug={route.slug}
            onBackHome={() => handleNavigateHome('projects')}
            onSelectProject={handleSelectProject}
          />
        )}

        <Footer
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onNavigateHome={handleNavigateHome}
        />

        <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
      </div>
    </MotionConfig>
  );
}
