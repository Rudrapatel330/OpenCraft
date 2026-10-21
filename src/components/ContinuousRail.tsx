'use client';

import React, { useEffect, useState } from 'react';

export default function ContinuousRail() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalScroll));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="continuous-rail-wrapper" aria-hidden="true">
      {/* Background Track Line */}
      <div className="rail-track" />

      {/* Dynamic Continuous Luminous Trace Line */}
      <div
        className="rail-progress"
        style={{
          height: `${scrollProgress * 100}%`,
        }}
      />

      {/* Traveling Luminous Energy Bead */}
      <div
        className="rail-bead"
        style={{
          top: `${scrollProgress * 100}%`,
        }}
      >
        <span className="bead-core" />
        <span className="bead-halo" />
      </div>

      <style jsx>{`
        .continuous-rail-wrapper {
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 2px;
          pointer-events: none;
          z-index: 10;
        }

        @media (min-width: 1024px) {
          .continuous-rail-wrapper {
            left: 36px;
          }
        }

        @media (max-width: 768px) {
          .continuous-rail-wrapper {
            display: none;
          }
        }

        .rail-track {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          left: 0;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.08) 5%,
            rgba(255, 255, 255, 0.08) 95%,
            transparent
          );
        }

        .rail-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            #06b6d4,
            #3b82f6 50%,
            #a855f7
          );
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
          transition: height 0.05s linear;
        }

        .rail-bead {
          position: absolute;
          left: -4px;
          width: 10px;
          height: 10px;
          transform: translateY(-50%);
          transition: top 0.05s linear;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bead-core {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 8px #38bdf8;
        }

        .bead-halo {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(56, 189, 248, 0.6);
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
