import React from 'react';
import { GraduationCap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import RevealOnScroll from './RevealOnScroll';

export default function Experience() {
  return (
    <div id="experiencia" className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
      <RevealOnScroll delay={100} className="lg:col-span-7">
        <SpotlightCard className="p-7 sm:p-8 h-full">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-mono-tech text-xs text-zinc-400 uppercase">
                <GraduationCap className="w-4 h-4 text-zinc-200" />
                Formação
              </span>
              <span className="px-2.5 py-0.5 bg-zinc-950 border border-zinc-800 font-mono-tech text-[11px] text-zinc-300">
                EM ANDAMENTO
              </span>
            </div>

            <div className="border-l-2 border-zinc-200 pl-4 py-1 space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-zinc-400 text-sm">Graduação em andamento.</p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between font-mono-tech text-xs text-zinc-500">
            <span>4 SEMESTRE</span>
            <span>ADS</span>
          </div>
        </SpotlightCard>
      </RevealOnScroll>

      <RevealOnScroll delay={150} className="lg:col-span-5">
        <SpotlightCard activeCorners className="p-7 sm:p-8 h-full bg-[#0b0b0e]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-zinc-300">
              <span className="w-2 h-2 bg-zinc-100 inline-block" />
              <span>DISPONÍVEL PARA OPORTUNIDADES</span>
            </div>

            <h3 className="text-lg font-bold text-zinc-100 leading-snug">
              Buscando minha próxima oportunidade em tecnologia.
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Aberto a vagas de estágio e posições de entrada em desenvolvimento de software.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-800/80 font-mono-tech text-[11px] text-zinc-500">
            &gt; Full Stack • Front-end • Back-end
          </div>
        </SpotlightCard>
      </RevealOnScroll>
    </div>
  );
}