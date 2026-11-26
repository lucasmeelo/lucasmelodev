import React from 'react';
import { Github, ArrowUpRight, Command } from 'lucide-react';

export default function Navbar({ scrolled, scrollProgress, activeSection }) {
  const navItems = [
    { key: '1', id: 'inicio', label: 'Início', href: '#inicio' },
    { key: '2', id: 'sobre', label: 'Sobre', href: '#sobre' },
    { key: '3', id: 'projetos', label: 'Projetos', href: '#projetos' },
    { key: '4', id: 'stack', label: 'Stack', href: '#stack' },
    { key: '5', id: 'contato', label: 'Contato', href: '#contato' }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-zinc-900 z-50">
        <div
          className="h-full bg-zinc-100 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800/90 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 bg-zinc-100 inline-block transition-transform duration-300 group-hover:rotate-90" />
            <span className="font-semibold text-sm tracking-tight text-zinc-100">
              Lucas Melo
            </span>
            <span className="hidden sm:inline-block font-mono-tech text-[11px] text-zinc-500 border-l border-zinc-800 pl-2.5">
              FULL STACK DEV
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-[#09090b] border border-zinc-800/90 p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-2.5 py-1 font-mono-tech text-xs flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  <span
                    className={`text-[10px] px-1 border ${
                      isActive
                        ? 'border-zinc-950/30 text-zinc-900'
                        : 'border-zinc-800 text-zinc-500'
                    }`}
                  >
                    {item.key}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block font-mono-tech text-[11px] text-zinc-500">
              {String(scrollProgress).padStart(3, '0')}%
            </span>
            <a
              href="https://github.com/lucasmeelo"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-[#09090b] border border-zinc-700 hover:border-zinc-300 text-zinc-200 hover:text-white font-mono-tech text-xs flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>
      </header>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-[#09090b]/95 backdrop-blur-md border border-zinc-800 px-2 py-1.5 shadow-[4px_4px_0px_0px_#141418] flex items-center gap-1">
          <span className="hidden sm:flex items-center gap-1 px-2 text-[10px] font-mono-tech text-zinc-500 border-r border-zinc-800 mr-1">
            <Command className="w-3 h-3" />
            <span>NAV</span>
          </span>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-2.5 py-1 font-mono-tech text-[11px] transition-colors ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}