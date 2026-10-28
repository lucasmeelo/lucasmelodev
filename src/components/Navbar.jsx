import React, { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#inicio' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'STACK', href: '#stack' },
    { name: 'PROJETOS', href: '#projetos' },
    { name: 'TRAJETÓRIA', href: '#experiencia' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 border-b-2 border-zinc-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-2 font-mono text-xs tracking-wider hover:opacity-80 transition-opacity">
          <span className="w-2 h-2 bg-zinc-100 inline-block animate-pulse" />
          <span className="font-bold text-zinc-100 uppercase tracking-widest">Lucas Melo</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-mono tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/lucasmeelo"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-mono px-3 py-1.5 border border-zinc-700 hover:border-zinc-300 text-zinc-200 transition-all flex items-center gap-1.5 bg-zinc-900"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b-2 border-zinc-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-zinc-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/lucasmeelo"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono px-4 py-2 border border-zinc-700 text-center text-zinc-200 mt-2 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
        </div>
      )}
    </header>
  );
}