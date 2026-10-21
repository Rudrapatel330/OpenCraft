'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface RightMarginTelemetryProps {
  mode?: 'home' | 'detail';
  activeAppTitle?: string;
}

export default function RightMarginTelemetry({ mode = 'home', activeAppTitle = 'PHOTOCRAFT' }: RightMarginTelemetryProps) {
  const [scrollPercent, setScrollPercent] = useState('000%');
  const [activeLabel, setActiveLabel] = useState<string>('OPENCRAFT');
  const prevActiveRef = useRef<string>('');

  const homeSections = [
    { id: 'crafting-apps', label: 'OPENCRAFT' },
    { id: 'lineup', label: 'LINEUP' },
    { id: 'download', label: 'DOWNLOAD' },
    { id: 'download', label: 'GET IT' },
    { id: 'crafting-apps', label: 'GET STARTED' },
  ];

  const detailSections = [
    { id: 'detail-hero', label: activeAppTitle.toUpperCase() },
    { id: 'detail-screenshots', label: 'SCREENSHOTS' },
    { id: 'detail-highlights', label: 'HIGHLIGHTS' },
    { id: 'detail-getit', label: 'GET IT' },
    { id: 'detail-family', label: 'THE FAMILY' },
  ];

  const sections = mode === 'home' ? homeSections : detailSections;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const p = Math.min(100, Math.max(0, (scrollY / total) * 100));
        setScrollPercent(`${String(Math.round(p)).padStart(3, '0')}%`);
      }

      // Check which section is in focus
      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            if (prevActiveRef.current !== item.label) {
              prevActiveRef.current = item.label;
              setActiveLabel(item.label);

              // Continuity Animation: Animate the section's floating big label into view
              const floatingTitle = el.querySelector('.section-continuity-title') || el.querySelector('.floating-big-label');
              if (floatingTitle) {
                gsap.fromTo(
                  floatingTitle,
                  {
                    x: 60,
                    opacity: 0.2,
                    scale: 0.9,
                    color: '#38bdf8',
                  },
                  {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    color: '#ffffff',
                    duration: 0.6,
                    ease: 'power3.out',
                    overwrite: 'auto',
                  }
                );
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id: string, label: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveLabel(label);

      // Trigger continuity animation
      const floatingTitle = el.querySelector('.section-continuity-title') || el.querySelector('.floating-big-label');
      if (floatingTitle) {
        gsap.fromTo(
          floatingTitle,
          {
            x: 80,
            opacity: 0,
            scale: 0.85,
            color: '#38bdf8',
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            color: '#ffffff',
            duration: 0.7,
            ease: 'back.out(1.5)',
            overwrite: 'auto',
          }
        );
      }
    }
  };

  return (
    <aside className="artcraft-right-ruler font-mono" aria-label="Section Telemetry">
      {/* Ticks with numbers from 0 to 30 */}
      <div className="ruler-ticks-track">
        {[0, 5, 10, 15, 20, 25, 30].map((num) => (
          <div key={num} className="ruler-entry">
            <span className="ruler-num">{num}</span>
            <span className="ruler-line" />
          </div>
        ))}
      </div>

      {/* Floating active percentage */}
      <div className="ruler-percent">
        <span className="active-percent">{scrollPercent}</span>
      </div>

      <style jsx>{`
        .artcraft-right-ruler {
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
          width: 70px;
          pointer-events: none;
          z-index: 90;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-right: 18px;
          padding-top: 60px;
          user-select: none;

          @media (max-width: 1024px) {
            display: none !important;
          }
        }

        .ruler-ticks-track {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 22px;
        }

        .ruler-entry {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ruler-num {
          font-size: 0.58rem;
          color: rgba(255, 255, 255, 0.22);
          letter-spacing: 0.05em;
        }

        .ruler-line {
          width: 8px;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
        }

        .ruler-percent {
          font-size: 0.65rem;
          color: #38bdf8;
          font-weight: 700;
          margin-top: 18px;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
        }

        .vertical-nav-labels {
          position: fixed;
          right: 20px;
          bottom: 34px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          pointer-events: auto;

          @media (max-width: 1024px) {
            display: none !important;
          }
        }

        .nav-rail-item {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.32);
          font-family: inherit;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          cursor: pointer;
          padding: 3px 0;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-rail-item:hover {
          color: rgba(255, 255, 255, 0.85);
          transform: translateX(-3px);
        }

        .active-rail-item {
          color: #ffffff !important;
          font-weight: 900;
          transform: translateX(-6px);
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.7);
        }

        .rail-pulse-indicator {
          font-size: 0.5rem;
          color: #38bdf8;
          animation: markerPulse 1.2s ease-in-out infinite;
        }

        @keyframes markerPulse {
          0%, 100% { opacity: 0.7; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); text-shadow: 0 0 8px #38bdf8; }
        }
      `}</style>
    </aside>
  );
}
