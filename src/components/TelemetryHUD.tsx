'use client';

import React, { useEffect, useState } from 'react';
import { playGeometricClick } from '@/utils/audio';

const SECTIONS = [
  { id: 'orbit', label: 'ORBIT', code: '01' },
  { id: 'lineup', label: 'LINEUP', code: '02' },
  { id: 'blueprint', label: 'BLUEPRINT', code: '03' },
  { id: 'benchmarks', label: 'BENCHMARKS', code: '04' },
  { id: 'get-it', label: 'GET APK', code: '05' },
];

export default function TelemetryHUD() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('orbit');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(Math.round(progress));
      }

      // Determine active section
      for (const sect of [...SECTIONS].reverse()) {
        const el = document.getElementById(sect.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sect.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playGeometricClick(900, 0.02, 'sine');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="telemetry-hud" aria-label="Page Telemetry and Section Navigator">
      {/* Top telemetry status */}
      <div className="telemetry-top">
        <span className="telemetry-dot" />
        <span className="telemetry-percent font-mono">
          {String(scrollProgress).padStart(3, '0')}%
        </span>
      </div>

      {/* Engineering ruler tick marks */}
      <div className="telemetry-ticks" aria-hidden="true">
        {[0, 5, 10, 15, 20, 25, 30].map((num, i) => (
          <div key={i} className="tick-row">
            <span className="tick-mark" />
            <span className="tick-label font-mono">{num}</span>
          </div>
        ))}
      </div>

      {/* Section breadcrumbs */}
      <nav className="telemetry-nav">
        {SECTIONS.map((sect) => {
          const isActive = activeSection === sect.id;
          return (
            <button
              key={sect.id}
              onClick={() => scrollTo(sect.id)}
              className={`telemetry-link ${isActive ? 'active' : ''}`}
              title={`Jump to section ${sect.label}`}
            >
              <span className="link-code font-mono">{sect.code}</span>
              <span className="link-text font-mono">{sect.label}</span>
              {isActive && <span className="active-pip" />}
            </button>
          );
        })}
      </nav>

      <style jsx>{`
        .telemetry-hud {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 90;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 20px;
          pointer-events: auto;
          user-select: none;
        }

        @media (max-width: 1024px) {
          .telemetry-hud {
            display: none;
          }
        }

        .telemetry-top {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(7, 7, 9, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3px 8px;
          border-radius: 3px;
        }

        .telemetry-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
          animation: pulse 2s infinite ease-in-out;
        }

        .telemetry-percent {
          font-size: 0.72rem;
          font-weight: 600;
          color: #38bdf8;
        }

        .telemetry-ticks {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
          margin-right: 4px;
        }

        .tick-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tick-mark {
          width: 8px;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
        }

        .tick-label {
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.25);
          width: 14px;
          text-align: right;
        }

        .telemetry-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          background: rgba(14, 14, 18, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 10px 12px;
          border-radius: 4px;
        }

        .telemetry-link {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.4);
          transition: all 0.2s ease;
          position: relative;
          padding: 2px 0;
        }

        .telemetry-link:hover {
          color: #ffffff;
        }

        .telemetry-link.active {
          color: #38bdf8;
        }

        .link-code {
          font-size: 0.62rem;
          opacity: 0.6;
        }

        .link-text {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .active-pip {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 6px #38bdf8;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </aside>
  );
}
