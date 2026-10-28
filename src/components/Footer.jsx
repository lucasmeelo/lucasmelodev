import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-zinc-900 py-8 text-center font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Lucas Melo. Todos os direitos reservados.</p>
        <p>Designed & Built with React + Tailwind</p>
      </div>
    </footer>
  );
}