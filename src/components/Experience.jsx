import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 border-t-2 border-zinc-900">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-zinc-400" />
        <span>Formação & Experiência</span>
      </h2>

      <div className="space-y-6 max-w-3xl">
        <div className="border-l-2 border-zinc-800 pl-6 relative space-y-1">
          <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-zinc-400" />
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Em andamento</span>
          </div>
          <h3 className="font-bold text-sm font-mono text-zinc-200">Análise e Desenvolvimento de Sistemas</h3>
          <p className="text-zinc-400 text-xs font-mono">Graduação</p>
        </div>
      </div>
    </section>
  );
}