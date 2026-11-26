import React from 'react';
import { FolderGit2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import RevealOnScroll from './RevealOnScroll';

export default function GithubSection() {
  return (
    <RevealOnScroll delay={140}>
      <SpotlightCard className="p-7 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-zinc-500">
              <FolderGit2 className="w-4 h-4 text-zinc-300" />
              <span>github.com/lucasmeelo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
              Código aberto. Projetos reais.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Explore meus repositórios públicos, estudos práticos, ferramentas e commits diretamente no meu perfil do GitHub.
            </p>
          </div>

          <a
            href="https://github.com/lucasmeelo"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-zinc-100 text-zinc-950 hover:bg-white font-semibold text-sm flex items-center gap-2 pixel-btn whitespace-nowrap"
          >
            <span>Ver GitHub →</span>
          </a>
        </div>
      </SpotlightCard>
    </RevealOnScroll>
  );
}