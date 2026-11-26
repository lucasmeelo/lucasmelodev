import React, { useState, useEffect } from 'react';

export default function IntroPreloader({ onComplete }) {
  const [typedText, setTypedText] = useState('');
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const fullMessage = 'welcome to my portfolio :)';

  useEffect(() => {
    let idx = 0;
    const typeTimer = setInterval(() => {
      idx += 1;
      setTypedText(fullMessage.slice(0, idx));
      if (idx >= fullMessage.length) clearInterval(typeTimer);
    }, 38);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(100, prev + 8);
      });
    }, 70);

    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 480);
    }, 1550);

    return () => {
      clearInterval(typeTimer);
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center px-6 transition-all duration-500 ${
        exiting ? 'opacity-0 -translate-y-3 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-md border border-zinc-800 bg-[#09090b] p-6 sm:p-8 space-y-5 relative">
        <span className="absolute -top-1 -left-1 w-2 h-2 bg-zinc-100" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-zinc-100" />
        <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-zinc-100" />
        <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-zinc-100" />

        <div className="flex items-center justify-between font-mono-tech text-[11px] text-zinc-500 border-b border-zinc-800/80 pb-2.5">
          <span>BOOT // LUCAS_MELO.SYS</span>
          <span>{progress}%</span>
        </div>

        <div className="min-h-[36px] flex items-center">
          <p className="font-mono-tech text-base sm:text-lg text-zinc-100 tracking-tight">
            <span className="text-zinc-500 mr-2">&gt;</span>
            {typedText}
            <span className="inline-block w-2 h-4 bg-zinc-100 ml-1 align-middle cursor-blink" />
          </p>
        </div>

        <div className="w-full h-1.5 bg-zinc-900 overflow-hidden">
          <div
            className="h-full bg-zinc-100 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}