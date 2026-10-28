import React from 'react';
import { Layers, Code2, Database, Wrench } from 'lucide-react';
import { stackData } from '../data/stack';

export default function Stack() {
  const getIcon = (type) => {
    switch (type) {
      case 'frontend': return <Layers className="w-4 h-4 text-zinc-400" />;
      case 'backend': return <Code2 className="w-4 h-4 text-zinc-400" />;
      case 'database': return <Database className="w-4 h-4 text-zinc-400" />;
      default: return <Wrench className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="stack" className="py-20 border-t-2 border-zinc-900">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-zinc-400" />
        <span>Tecnologias & Ferramentas</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stackData.map((group) => (
          <div 
            key={group.category}
            className="bg-zinc-900/40 border-2 border-zinc-800 p-6 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              {getIcon(group.type)}
              <h3 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}