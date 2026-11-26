import React, { useState } from 'react';
import {
  Github,
  ArrowUpRight,
  Cpu,
  HardDrive,
  FileCode2,
  Maximize2,
  X,
  Monitor,
  Network,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import RevealOnScroll from './RevealOnScroll';
import { featuredProject, githubProjects } from '../data/projects';

export default function Projects({ bootFinished, modalOpen, setModalOpen }) {
  const [electronView, setElectronView] = useState('preview');

  const ArchitectureDiagram = () => (
    <div className="border border-zinc-800 bg-zinc-950 p-5 sm:p-7 space-y-5">
      <div className="flex items-center justify-between border-b border-zinc-800/90 pb-3 font-mono-tech text-xs text-zinc-400">
        <span>STACK_STRUCTURE // ELECTRON_DESKTOP</span>
        <span>REACT + TS + ELECTRON</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
        {[
          { step: '01', title: 'Electron Shell', desc: 'Janela frameless, ambiente desktop nativo e geração de PDF.' },
          { step: '02', title: 'React + TypeScript', desc: 'Quadro Kanban interativo, KPIs reativos e tipagem estrita.' },
          { step: '03', title: 'Tailwind CSS', desc: 'Interface dark minimalista e hierarquia visual de alto contraste.' }
        ].map((node, idx, arr) => (
          <div key={node.step} className="flex items-center gap-2">
            <div className="flex-1 bg-[#09090b] border border-zinc-800 p-4 space-y-1.5 h-full">
              <span className="font-mono-tech text-[10px] text-zinc-500 block">[{node.step}]</span>
              <div className="font-semibold text-sm text-zinc-100">{node.title}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">{node.desc}</p>
            </div>
            {idx < arr.length - 1 && <ArrowRight className="hidden md:block w-4 h-4 text-zinc-600 shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );

  const PreviewFrame = ({ isModal = false }) => (
    <div className="border border-zinc-800 bg-[#0d0d0f] overflow-hidden select-none">
      <div className="bg-[#121215] border-b border-zinc-800/90 px-3.5 py-2 flex items-center justify-between text-[11px] text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-zinc-200">Dashboard</span>
          <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-[10px] text-zinc-300">
            <ChevronLeft className="w-3 h-3 text-zinc-500" />
            <span>Novembro de 2026</span>
            <ChevronRight className="w-3 h-3 text-zinc-500" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-[10px] text-zinc-500 w-36">
            <Search className="w-2.5 h-2.5" />
            <span>Buscar...</span>
          </div>
          {!isModal && (
            <button
              onClick={() => setModalOpen(true)}
              className="px-2 py-0.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono-tech text-[10px] flex items-center gap-1 transition-colors"
            >
              <Maximize2 className="w-2.5 h-2.5" />
              <span>Ampliar</span>
            </button>
          )}
          <div className="flex items-center gap-2 text-zinc-500 pl-1">
            <span>—</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>
      </div>

      <div className="relative bg-[#111113]">
        <img
          src={featuredProject.image}
          alt={featuredProject.title}
          className="w-full h-auto object-cover block"
        />
      </div>
    </div>
  );

  return (
    <section id="projetos" className={`scroll-mt-28 space-y-8 ${bootFinished ? 'animate-hero-3' : 'opacity-0'}`}>
      <RevealOnScroll>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-zinc-100 inline-block" />
            <h2 className="font-pixel text-xs uppercase tracking-widest text-zinc-200">
              02 // Projetos em Destaque
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-zinc-500 hidden sm:inline">
            [3] CASE_STUDY_&_REPOS
          </span>
        </div>
      </RevealOnScroll>

      {/* Projeto Destaque em Electron */}
      <RevealOnScroll delay={80}>
        <SpotlightCard activeCorners className="p-6 sm:p-8 lg:p-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-950 border border-zinc-700 font-mono-tech text-[11px] text-zinc-300">
                <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                <span>{featuredProject.subtitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                {featuredProject.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
                {featuredProject.description}
              </p>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2.5 bg-zinc-100 text-zinc-950 hover:bg-white font-semibold text-xs font-mono-tech flex items-center gap-2 pixel-btn self-start lg:self-auto"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspecionar Projeto</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="inline-flex bg-zinc-950 border border-zinc-800 p-1">
                <button
                  onClick={() => setElectronView('preview')}
                  className={`px-3 py-1.5 font-mono-tech text-xs flex items-center gap-2 transition-colors ${
                    electronView === 'preview'
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>[01] INTERFACE PREVIEW</span>
                </button>
                <button
                  onClick={() => setElectronView('architecture')}
                  className={`px-3 py-1.5 font-mono-tech text-xs flex items-center gap-2 transition-colors ${
                    electronView === 'architecture'
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>[02] STACK & ESTRUTURA</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400 font-mono-tech text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {electronView === 'preview' ? <PreviewFrame /> : <ArchitectureDiagram />}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800/90 p-6 space-y-4">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                <HardDrive className="w-4 h-4 text-zinc-400" />
                <span>Como foi feito</span>
              </div>

              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Desenvolvi a aplicação unindo o ambiente desktop do <strong>Electron</strong> com uma interface reativa construída em <strong>React</strong> e <strong>TypeScript</strong>, focando em agilidade operacional e leitura rápida das métricas.
                </p>
                <ul className="space-y-2.5 text-zinc-400">
                  {featuredProject.howItWasBuilt.map((item) => (
                    <li key={item.step} className="flex items-start gap-2.5">
                      <span className="text-zinc-200 font-mono-tech text-xs mt-0.5">[{item.step}]</span>
                      <span>
                        <strong className="text-zinc-200">{item.title}:</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800/90 p-6 space-y-3.5">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                <FileCode2 className="w-4 h-4 text-zinc-400" />
                <span>Stack Principal</span>
              </div>

              <div className="space-y-2.5 font-mono-tech text-xs">
                {featuredProject.tools.map((tool) => (
                  <div key={tool.name} className="p-3 bg-[#09090b] border border-zinc-800/90">
                    <div className="text-zinc-100 font-semibold mb-1">{tool.name}</div>
                    <p className="text-zinc-400 font-sans text-xs">{tool.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </RevealOnScroll>

      {/* Outros Repositórios do GitHub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {githubProjects.map((proj, idx) => (
          <RevealOnScroll key={proj.name} delay={100 + idx * 80}>
            <SpotlightCard className="p-6 sm:p-7 h-full group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[11px] px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400">
                    {proj.tag}
                  </span>
                  <a href={proj.repo} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {proj.name}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">{proj.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400 font-mono-tech text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-zinc-200 hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        ))}
      </div>

      {/* Modal de Inspeção do Projeto */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-5xl bg-[#09090b] border border-zinc-700 p-5 sm:p-7 space-y-6 shadow-2xl my-auto animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="space-y-1">
                <span className="font-mono-tech text-[11px] text-zinc-500 block">
                  CASE STUDY // ELECTRON DESKTOP APPLICATION
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100">{featuredProject.title}</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 bg-zinc-950 border border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-1.5 font-mono-tech text-xs transition-colors"
              >
                <span>ESC</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <PreviewFrame isModal />
            <ArchitectureDiagram />
          </div>
        </div>
      )}
    </section>
  );
}