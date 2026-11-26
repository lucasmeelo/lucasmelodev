import React, { useState, useEffect } from 'react';
import IntroPreloader from './components/IntroPreloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GithubSection from './components/GithubSection';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [bootFinished, setBootFinished] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 24);

      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(pct);

      const sections = ['inicio', 'sobre', 'projetos', 'stack', 'contato'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionMap = {
      '1': 'inicio',
      '2': 'sobre',
      '3': 'projetos',
      '4': 'stack',
      '5': 'contato'
    };

    const handleKeyPress = (e) => {
      if (!bootFinished) return;
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(false);
        return;
      }

      const targetId = sectionMap[e.key];
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [bootFinished, modalOpen]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 arch-grid selection:bg-zinc-100 selection:text-zinc-950 relative overflow-x-hidden">
      {!bootFinished && <IntroPreloader onComplete={() => setBootFinished(true)} />}

      <Navbar
        scrolled={scrolled}
        scrollProgress={scrollProgress}
        activeSection={activeSection}
      />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-28 space-y-24">
        <Hero bootFinished={bootFinished} />
        <About bootFinished={bootFinished} />

        <div className="space-y-8">
          <Projects
            bootFinished={bootFinished}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
          <GithubSection />
        </div>

        <div className="space-y-6">
          <Stack />
          <Experience />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}