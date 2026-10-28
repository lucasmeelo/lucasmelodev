import React from 'react';

export default function StatusBanner() {
  return (
    <section className="py-12 border-t-2 border-zinc-900">
      <div className="p-6 border-2 border-zinc-800 bg-zinc-900/20">
        <p className="text-xs font-mono text-zinc-300 leading-relaxed">
          <span className="text-zinc-500">&gt;</span> Buscando minha próxima oportunidade em tecnologia. Aberto a vagas de estágio e posições de entrada em desenvolvimento de software.
        </p>
      </div>
    </section>
  );
}