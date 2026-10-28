import React from 'react';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const email = "lucasjeffersonsm@gmail.com";

  return (
    <section id="contato" className="py-20 border-t-2 border-zinc-900">
      <div className="max-w-xl space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-zinc-100 mb-3 tracking-wide">
            Vamos construir algo?
          </h2>
          <p className="text-zinc-400 text-xs font-mono">
            Sinta-se à vontade para entrar em contato ou se conectar nas redes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <a
            href="https://github.com/lucasmeelo"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900/50 border-2 border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
          <a
            href="https://www.linkedin.com/in/devlucasmelo/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900/50 border-2 border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
        </div>

        <div>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-bold text-xs font-mono hover:bg-zinc-300 transition-colors uppercase tracking-wider"
          >
            <span>Entre em contato</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}