import React from 'react';
import SpotlightCard from './SpotlightCard';
import RevealOnScroll from './RevealOnScroll';

export default function About({ bootFinished }) {
  return (
    <section id="sobre" className={`scroll-mt-28 space-y-6 ${bootFinished ? 'animate-hero-2' : 'opacity-0'}`}>
      <RevealOnScroll>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-zinc-100 inline-block" />
            <h2 className="font-pixel text-xs uppercase tracking-widest text-zinc-200">
              01 // Sobre Mim
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-zinc-500 hidden sm:inline">
            [2] PERFIL_FULL_STACK
          </span>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <RevealOnScroll delay={70} className="lg:col-span-8">
          <SpotlightCard className="p-7 sm:p-9 h-full">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-zinc-500 uppercase tracking-wider">
                  // Sobre mim
                </span>
                <span className="font-vt text-base text-zinc-500">README.MD</span>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Sou Desenvolvedor Full Stack focado em criar aplicações completas, do front-end ao back-end, além de sistemas desktop e ferramentas práticas para o dia a dia. Prezo por código limpo, bem organizado e bom acabamento visual — algo que trago da minha vivência com design e edição de vídeo. Utilizo IA no dia a dia para acelerar produtividade e refinar entregas, e estou disponível para oportunidades como Desenvolvedor Full Stack.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between font-mono-tech text-xs text-zinc-500">
              <span>Full Stack</span>
              <span>Design & Edição de Vídeo</span>
            </div>
          </SpotlightCard>
        </RevealOnScroll>

        <RevealOnScroll delay={130} className="lg:col-span-4">
          <SpotlightCard activeCorners className="p-7 sm:p-8 h-full bg-[#0b0b0e]">
            <div className="space-y-5">
              <div className="flex items-center justify-between font-mono-tech text-xs text-zinc-500">
                <span>ATUAÇÃO</span>
                <span>[FULL STACK]</span>
              </div>

              <div className="py-3 flex items-center justify-center border border-zinc-800/80 bg-zinc-950">
                <svg width="96" height="48" viewBox="0 0 16 8" shapeRendering="crispEdges" className="opacity-90">
                  <rect x="2" y="1" width="1" height="6" fill="#fafafa" />
                  <rect x="2" y="6" width="4" height="1" fill="#fafafa" />
                  <rect x="8" y="1" width="1" height="6" fill="#a1a1aa" />
                  <rect x="9" y="2" width="1" height="1" fill="#a1a1aa" />
                  <rect x="10" y="3" width="1" height="1" fill="#fafafa" />
                  <rect x="11" y="2" width="1" height="1" fill="#a1a1aa" />
                  <rect x="12" y="1" width="1" height="6" fill="#a1a1aa" />
                </svg>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Versatilidade para atuar ponta a ponta: interfaces com React e TypeScript, APIs com Java, Spring Boot e Python, bancos PostgreSQL e aplicações desktop com Electron.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-zinc-800/80 font-mono-tech text-[11px] text-zinc-500 flex justify-between">
              <span>FOCO</span>
              <span className="text-zinc-300">FULL STACK DEV</span>
            </div>
          </SpotlightCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}