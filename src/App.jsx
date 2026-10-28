import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import GithubSection from './components/GithubSection';
import Experience from './components/Experience';
import StatusBanner from './components/StatusBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-zinc-100 relative overflow-x-hidden">
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent fixed top-0 left-0 z-50 opacity-30" />

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 relative z-10 pt-28">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <GithubSection />
        <Experience />
        <StatusBanner />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}