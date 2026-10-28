import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function GithubSection() {
  return (
    <section className="py-16 border-t-2 border-zinc-900">
      <div className="bg-zinc-900/30 border-2 border-zinc-800 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-sm font-bold font-mono uppercase text-zinc-100 tracking-wide">Código aberto. Projetos reais.</h3>
          <p className="text-zinc-400 text-xs font-mono leading-relaxed">
            Explore meus repositórios completos, commits, estudos e experimentos diretamente no perfil do GitHub.
          </p>
        </div>
        <a
          href="https://github.com/lucasmeelo"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 bg-zinc-100 text-zinc-950 hover:bg-zinc-300 font-mono text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap uppercase tracking-wider"
        >
          <span>VER GITHUB</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}