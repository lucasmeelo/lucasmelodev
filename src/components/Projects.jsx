import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projetos" className="py-20 border-t-2 border-zinc-900">
      <div className="mb-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-zinc-400" />
          <span>Projetos em Destaque</span>
        </h2>
        <p className="text-zinc-400 text-xs font-mono">Alguns dos trabalhos e ferramentas desenvolvidas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="group bg-zinc-900/40 border-2 border-zinc-800 p-6 hover:border-zinc-500 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-sm font-mono text-zinc-100 uppercase tracking-wide">
                  {project.title}
                </h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-1.5 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Ver Repositório"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              <p className="text-zinc-400 text-xs font-mono leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-950 text-zinc-400 border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>Acessar Projeto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}