import React from 'react';
import { Github, Linkedin, ChevronRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import Terminal from './Terminal';

export default function Hero({ bootFinished }) {
  return (
    <section id="inicio" className="scroll-mt-28">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-5 ${bootFinished ? 'animate-hero-1' : 'opacity-0'}`}>
        <SpotlightCard activeCorners className="lg:col-span-7 p-7 sm:p-10 min-h-[390px]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-zinc-950 border border-zinc-800 font-mono-tech text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-zinc-100 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-zinc-100" />
              </span>
              <span>Aberto a oportunidades Full Stack</span>
            </div>

            <div className="space-y-3">
              <p className="font-pixel text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest">
                Desenvolvedor Full Stack
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.08]">
                Lucas Melo
              </h1>
            </div>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Technology is the future :)
            </p>
          </div>

          <div className="pt-8 mt-8 border-t border-zinc-800/80 flex flex-wrap items-center gap-3.5">
            <a
              href="#projetos"
              className="px-5 py-2.5 bg-zinc-100 text-zinc-950 hover:bg-white font-semibold text-sm flex items-center gap-2 pixel-btn"
            >
              <span>Ver projetos</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/lucasmeelo"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-400 text-zinc-300 hover:text-white font-mono-tech text-xs flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/devlucasmelo/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-400 text-zinc-300 hover:text-white font-mono-tech text-xs flex items-center gap-2 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </SpotlightCard>

        <Terminal />
      </div>
    </section>
  );
}