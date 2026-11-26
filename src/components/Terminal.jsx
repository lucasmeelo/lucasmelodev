import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Terminal() {
  const [terminalTab, setTerminalTab] = useState('profile');
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });
  const [viewportSize, setViewportSize] = useState({ w: 1440, h: 900 });

  useEffect(() => {
    const updateSize = () => setViewportSize({ w: window.innerWidth, h: window.innerHeight });
    const handlePointerMove = (e) => setCursorCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });

    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <SpotlightCard className="lg:col-span-5 p-0 overflow-hidden">
      <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-mono-tech text-xs text-zinc-300">telemetry.sys</span>
        </div>
        <div className="flex items-center gap-1 font-mono-tech text-[11px]">
          <button
            onClick={() => setTerminalTab('profile')}
            className={`px-2 py-0.5 border transition-colors ${
              terminalTab === 'profile'
                ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                : 'border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            profile.ts
          </button>
          <button
            onClick={() => setTerminalTab('architecture')}
            className={`px-2 py-0.5 border transition-colors ${
              terminalTab === 'architecture'
                ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                : 'border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            architecture.sh
          </button>
        </div>
      </div>

      <div className="bg-[#070709] border-b border-zinc-800/80 px-4 py-2 flex items-center justify-between font-mono-tech text-[10px] text-zinc-500">
        <span>
          CURSOR: X:{String(cursorCoords.x).padStart(4, '0')} Y:{String(cursorCoords.y).padStart(4, '0')}
        </span>
        <span>
          RES: {viewportSize.w}×{viewportSize.h}
        </span>
      </div>

      <div className="p-5 sm:p-6 font-mono-tech text-xs sm:text-[13px] text-zinc-300 space-y-3 flex-1 flex flex-col justify-center">
        {terminalTab === 'profile' ? (
          <>
            <div className="text-zinc-500">// Identificação do Desenvolvedor</div>
            <div className="space-y-1 leading-relaxed">
              <div>
                <span className="text-zinc-500">export const</span>{' '}
                <span className="text-zinc-100 font-semibold">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-zinc-500">name:</span> <span className="text-zinc-200">"Lucas Melo"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-500">role:</span> <span className="text-zinc-200">"Full Stack Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-500">stack:</span> [<span className="text-zinc-200">"React"</span>,{' '}
                <span className="text-zinc-200">"TS"</span>, <span className="text-zinc-200">"Java"</span>,{' '}
                <span className="text-zinc-200">"Python"</span>],
              </div>
              <div className="pl-4">
                <span className="text-zinc-500">creative:</span> [<span className="text-zinc-200">"Design"</span>,{' '}
                <span className="text-zinc-200">"Video"</span>],
              </div>
              <div className="pl-4">
                <span className="text-zinc-500">available:</span> <span className="text-zinc-100 font-semibold">true</span>
              </div>
              <div>&#125;;</div>
            </div>
          </>
        ) : (
          <div className="space-y-3">
            <div className="text-zinc-500">$ ./check_engineering_principles.sh</div>
            <div className="space-y-2 text-zinc-300">
              <div className="flex items-start gap-2">
                <span className="text-zinc-500">[01]</span>
                <span>Arquitetura limpa, legível e modular.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-zinc-500">[02]</span>
                <span>Resolução prática de problemas reais.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-zinc-500">[03]</span>
                <span>Direção visual e precisão nos detalhes de UI.</span>
              </div>
            </div>
          </div>
        )}

        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="text-zinc-200">&gt;</span> press [1-5] to jump
            <span className="w-1.5 h-3.5 bg-zinc-200 inline-block cursor-blink" />
          </span>
          <span>MONO // 1-BIT</span>
        </div>
      </div>

      <div className="bg-zinc-950 border-t border-zinc-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0].map((bit, i) => (
            <span key={i} className={`w-1.5 h-1.5 ${bit ? 'bg-zinc-400' : 'bg-zinc-800'}`} />
          ))}
        </div>
        <span className="font-vt text-sm text-zinc-500 tracking-wider">SYS.READY</span>
      </div>
    </SpotlightCard>
  );
}