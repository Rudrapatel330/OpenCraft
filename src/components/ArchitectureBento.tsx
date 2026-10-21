'use client';

import React from 'react';
import { PHILOSOPHY_PILLARS } from '@/data/products';
import { playHoverTick } from '@/utils/audio';

export default function ArchitectureBento() {
  return (
    <section id="blueprint" className="bento-section">
      <div className="container">
        {/* Section Coordinate Marker */}
        <div className="section-marker">
          <span className="marker-index">03</span>
          <span>BLUEPRINT // ARCHITECTURE & ENGINE SPECIFICATIONS</span>
          <span className="marker-line" />
          <span className="font-mono text-muted text-xs">VULKAN · NDK · RUST</span>
        </div>

        {/* Section Title */}
        <div className="bento-title-box">
          <h2 className="bento-heading font-display">
            What&apos;s inside<span className="text-cyan">.</span>
          </h2>
          <span className="font-mono text-muted bento-tag-right">HIGHLIGHTS // 01 — 06</span>
        </div>

        {/* 6-Cell Engineering Bento Matrix */}
        <div className="bento-grid">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="bento-cell geo-border glow-card"
              onMouseEnter={playHoverTick}
            >
              <div className="cell-top-bar">
                <span className="cell-tag font-mono">{pillar.tag}</span>
                <span className="cell-num font-mono text-cyan">{pillar.num}</span>
              </div>

              <h3 className="cell-title font-display">{pillar.title}</h3>
              <p className="cell-desc">{pillar.desc}</p>

              {/* Decorative engineering corner marker */}
              <div className="cell-corner-mark" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bento-section {
          padding: 90px 0;
          position: relative;
          z-index: 5;
        }

        .bento-title-box {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 36px;
        }

        .bento-heading {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .text-cyan {
          color: #38bdf8;
        }

        .bento-tag-right {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: #71717a;
        }

        @media (max-width: 640px) {
          .bento-tag-right {
            display: none;
          }
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;

          @media (min-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .bento-cell {
          background: #0d0d12;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 200px;
        }

        .cell-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .cell-tag {
          font-size: 0.65rem;
          color: #71717a;
          letter-spacing: 0.1em;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2px 6px;
          border-radius: 2px;
        }

        .cell-num {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .cell-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .cell-desc {
          font-size: 0.86rem;
          color: #a1a1aa;
          line-height: 1.6;
        }

        .cell-corner-mark {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 8px;
          height: 8px;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
