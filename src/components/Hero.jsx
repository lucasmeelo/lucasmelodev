import React from 'react';
import { Github, Linkedin, ChevronRight } from 'lucide-react';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
            <span>DISPONÍVEL PARA OPORTUNIDADES</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 uppercase">
              Lucas Melo
            </h1>
            <p className="text-sm sm:text-base font-mono text-zinc-400 tracking-wider">
              Full-Stack Developer 
            </p>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl font-mono">
            Technology is the future :)
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="px-5 py-2.5 bg-zinc-100 text-zinc-950 font-mono font-bold text-xs hover:bg-zinc-300 transition-all flex items-center gap-2"
            >
              <span>VER PROJETOS</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            
            <a
              href="https://github.com/lucasmeelo"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>

            <a
              href="https://www.linkedin.com/in/devlucasmelo/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Terminal />
        </div>
      </div>
    </section>
  );
}