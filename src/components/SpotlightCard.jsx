import React, { useState, useRef } from 'react';

export default function SpotlightCard({ children, className = '', activeCorners = false }) {
  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpot((prev) => ({ ...prev, active: false }))}
      className={`relative bg-[#09090b] border border-zinc-800/90 hover:border-zinc-700 transition-colors duration-300 flex flex-col justify-between group/card ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, rgba(255,255,255,0.045), transparent 70%)`
        }}
      />

      {activeCorners && (
        <>
          <span className="pointer-events-none absolute top-0 left-0 w-1.5 h-1.5 bg-zinc-500 group-hover/card:bg-zinc-100 transition-colors" />
          <span className="pointer-events-none absolute top-0 right-0 w-1.5 h-1.5 bg-zinc-500 group-hover/card:bg-zinc-100 transition-colors" />
          <span className="pointer-events-none absolute bottom-0 left-0 w-1.5 h-1.5 bg-zinc-500 group-hover/card:bg-zinc-100 transition-colors" />
          <span className="pointer-events-none absolute bottom-0 right-0 w-1.5 h-1.5 bg-zinc-500 group-hover/card:bg-zinc-100 transition-colors" />
        </>
      )}

      {children}
    </div>
  );
}