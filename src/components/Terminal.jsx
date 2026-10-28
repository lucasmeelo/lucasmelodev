import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Terminal() {
  return (
    <div className="bg-zinc-950 border-2 border-zinc-800 rounded-none shadow-2xl relative font-mono text-xs">
      <div className="bg-zinc-900 px-4 py-2 border-b-2 border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-zinc-600" />
          <div className="w-2 h-2 bg-zinc-600" />
          <div className="w-2 h-2 bg-zinc-600" />
        </div>
        <div className="text-zinc-500 text-[10px] tracking-widest flex items-center gap-1 uppercase">
          <TerminalIcon className="w-3 h-3" />
          <span>developer.config.ts</span>
        </div>
      </div>

      <div className="p-5 space-y-3 text-zinc-300">
        <div>
          <span className="text-zinc-500">// Configurações do perfil</span>
          <br />
          <span className="text-zinc-400">const</span> <span className="text-zinc-100">developer</span> = &#123;
        </div>
        <div className="pl-4 space-y-1">
          <div><span className="text-zinc-500">name:</span> <span className="text-zinc-300">'Lucas Melo'</span>,</div>
          <div><span className="text-zinc-500">role:</span> <span className="text-zinc-300">'Full Stack Developer'</span>,</div>
          <div><span className="text-zinc-500">stack:</span> [<span className="text-zinc-300">'TypeScript'</span>, <span className="text-zinc-300">'React'</span>, <span className="text-zinc-300">'Java'</span>, <span className="text-zinc-300">'Spring'</span>],</div>
          <div><span className="text-zinc-500">status:</span> <span className="text-zinc-300">'Ready for hire'</span></div>
        </div>
        <div>&#125;;</div>
        <div className="pt-2 text-zinc-500 flex items-center gap-2 border-t border-zinc-900">
          <span className="text-zinc-300">&gt;</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
}