import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-20 border-t-2 border-zinc-900">
      <div className="max-w-3xl">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-zinc-400" />
          <span>Sobre Mim</span>
        </h2>
        <div className="bg-zinc-900/40 border-2 border-zinc-800 p-8 space-y-4 font-mono text-sm">
          <p className="text-zinc-300 leading-relaxed">
            Desenvolvedor Full Stack, focado em qualidade de código, boas práticas e aprimoramento contínuo. Adaptável a novas tecnologias e ferramentas.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Fora da programação, também trabalho com edição de vídeos e design nas horas vagas. São áreas que fazem parte do meu lado criativo e que acabam se complementando com o desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}