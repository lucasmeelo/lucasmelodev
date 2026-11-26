import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#050505] pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-zinc-400 inline-block" />
          <span>© {new Date().getFullYear()} Lucas Melo — Desenvolvedor Full Stack</span>
        </div>
        <span>MONO // PIXEL // ARCHITECTURE</span>
      </div>
    </footer>
  );
}