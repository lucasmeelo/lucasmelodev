import React from 'react';
import { Layers, Code2, Database, Wrench } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import RevealOnScroll from './RevealOnScroll';
import { stackCategories } from '../data/stack';

export default function Stack() {
  const getIcon = (type) => {
    if (type === 'frontend') return <Layers className="w-3.5 h-3.5 text-zinc-400" />;
    if (type === 'backend') return <Code2 className="w-3.5 h-3.5 text-zinc-400" />;
    if (type === 'database') return <Database className="w-3.5 h-3.5 text-zinc-400" />;
    return <Wrench className="w-3.5 h-3.5 text-zinc-400" />;
  };

  return (
    <section id="stack" className="scroll-mt-28 space-y-6">
      <RevealOnScroll>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-zinc-100 inline-block" />
            <h2 className="font-pixel text-xs uppercase tracking-widest text-zinc-200">
              03 // Stack & Formação
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-zinc-500 hidden sm:inline">
            [4] TECNOLOGIAS_E_BASE
          </span>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stackCategories.map((cat, idx) => (
          <RevealOnScroll key={cat.title} delay={60 + idx * 60}>
            <SpotlightCard className="p-6 h-full">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/90">
                  <div className="flex items-center gap-2">
                    {getIcon(cat.type)}
                    <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-zinc-100">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-vt text-sm text-zinc-600">0{idx + 1}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 hover:border-zinc-500 text-zinc-200 font-mono-tech text-xs transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 flex justify-end">
                <span className="w-1.5 h-1.5 bg-zinc-700 inline-block" />
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}