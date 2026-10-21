'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { APPS, AppItem } from '@/data/products';
import GlidingSectionTitle from './GlidingSectionTitle';

interface LineupSectionProps {
  onSelectApp: (app: AppItem) => void;
}

export default function LineupSection({ onSelectApp }: LineupSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('01');

  const tabs = [
    { num: '01', id: 'eagle-share', label: 'PEER-TO-PEER FILE TRANSFER', bg: '#2563eb' },
    { num: '02', id: 'pigeon-music', label: 'OFFLINE HI-FI AUDIO', bg: '#7c3aed' },
    { num: '03', id: 'pigeon-echo', label: 'UNIFIED ECOSYSTEM', bg: '#059669' },
  ];

  const renderCardScreenshot = (previewType: string) => {
    switch (previewType) {
      case 'eagle-share':
        return (
          <div className="preview-canvas-box p2p-box">
            <svg viewBox="0 0 360 190" className="inner-preview-svg" aria-label="Eagle Share Preview">
              <rect width="360" height="190" fill="#0d1117" />
              {/* Radar waves */}
              <circle cx="180" cy="85" r="28" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.6" />
              <circle cx="180" cy="85" r="58" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.4" />
              <circle cx="180" cy="85" r="88" stroke="#3b82f6" strokeWidth="0.8" fill="none" opacity="0.2" />
              {/* Center Transfer Node */}
              <circle cx="180" cy="85" r="14" fill="#1d4ed8" />
              <circle cx="180" cy="85" r="6" fill="#ffffff" />
              {/* Connected peer nodes */}
              <circle cx="95" cy="80" r="11" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="265" cy="90" r="11" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
              <line x1="95" y1="80" x2="168" y2="84" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="192" y1="86" x2="265" y2="90" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />
              {/* Speed HUD top-left corner */}
              <rect x="14" y="14" width="124" height="22" rx="2" fill="#111827" stroke="rgba(255,255,255,0.1)" />
              <text x="22" y="29" fill="#38bdf8" fontSize="10.5" fontFamily="monospace" fontWeight="bold">52.4 MB/s P2P</text>
            </svg>
          </div>
        );

      case 'pigeon-music':
        return (
          <div className="preview-canvas-box music-box">
            <svg viewBox="0 0 360 190" className="inner-preview-svg" aria-label="Pigeon Music Preview">
              <rect width="360" height="190" fill="#0f0c1b" />
              {/* Spectrum Equalizer Visualization */}
              {[
                { x: 40, h: 55, col: '#818cf8' },
                { x: 70, h: 85, col: '#a855f7' },
                { x: 100, h: 115, col: '#c084fc' },
                { x: 130, h: 75, col: '#e879f9' },
                { x: 160, h: 130, col: '#f43f5e' },
                { x: 190, h: 100, col: '#fb7185' },
                { x: 220, h: 120, col: '#e879f9' },
                { x: 250, h: 70, col: '#c084fc' },
                { x: 280, h: 85, col: '#a855f7' },
                { x: 310, h: 45, col: '#818cf8' },
              ].map((bar, idx) => (
                <rect
                  key={idx}
                  x={bar.x}
                  y={165 - bar.h}
                  width="18"
                  height={bar.h}
                  rx="3"
                  fill={bar.col}
                  opacity="0.85"
                />
              ))}
              {/* Top info badge */}
              <rect x="14" y="14" width="180" height="22" rx="2" fill="#1e1633" stroke="rgba(255,255,255,0.12)" />
              <text x="22" y="29" fill="#ffffff" fontSize="10" fontFamily="sans-serif" fontWeight="bold">♪ Synced Lyrics · Hi-Res 24-bit</text>
            </svg>
          </div>
        );

      case 'pigeon-echo':
      default:
        return (
          <div className="preview-canvas-box echo-box">
            <svg viewBox="0 0 360 190" className="inner-preview-svg" aria-label="Pigeon Echo Preview">
              <rect width="360" height="190" fill="#061214" />
              {/* Device bridge wireframe */}
              <rect x="50" y="40" width="85" height="105" rx="6" fill="#0e2327" stroke="#14b8a6" strokeWidth="1.5" />
              <rect x="60" y="52" width="65" height="68" rx="3" fill="#08181b" />
              {/* Monitor Screen */}
              <rect x="210" y="36" width="110" height="78" rx="4" fill="#0e2327" stroke="#14b8a6" strokeWidth="1.5" />
              <rect x="220" y="46" width="90" height="58" rx="2" fill="#08181b" />
              <rect x="250" y="114" width="30" height="22" fill="#0e2327" />
              <rect x="235" y="136" width="60" height="6" rx="2" fill="#0e2327" />
              {/* Bridge Sync Wave */}
              <path d="M135 90 Q 172 55 210 85" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="3 3" fill="none" />
              {/* Top info badge */}
              <rect x="14" y="14" width="140" height="22" rx="2" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1" />
              <text x="22" y="29" fill="#ffffff" fontSize="9.5" fontFamily="monospace">CLIPBOARD BRIDGE</text>
            </svg>
          </div>
        );
    }
  };

  return (
    <section id="lineup" className="artcraft-lineup-section">
      <div className="artcraft-container">
        {/* Section Marker */}
        <div className="sub-header-marker-bar">
          <div className="marker-left font-mono">
            <span>02 / THE LINEUP</span>
          </div>
          <div className="marker-right-spec font-mono">
            <span>PICK A CRAFT TO EXPLORE</span>
          </div>
        </div>

        {/* Horizontal Craft Tabs Bar + LINEUP title */}
        <div className="lineup-header-bar">
          <div className="lineup-tabs-bar font-mono">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.num;
              return (
                <button
                  key={tab.num}
                  onClick={() => {
                    setActiveTab(tab.num);
                    const matched = APPS.find((a) => a.id === tab.id);
                    if (matched) onSelectApp(matched);
                  }}
                  className={`lineup-tab-item ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-num-box" style={{ background: tab.bg }}>
                    {tab.num}
                  </span>
                  <span className="tab-name-label">{tab.label}</span>
                </button>
              );
            })}
          </div>
          <GlidingSectionTitle text="LINEUP" id="lineup-continuity-label" />
        </div>

        {/* 3-Column Product Cards Grid */}
        <div className="lineup-cards-grid">
          {APPS.map((app) => (
            <div
              key={app.id}
              className="artcraft-lineup-card"
              onClick={() => onSelectApp(app)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectApp(app);
                }
              }}
            >
              {/* Top Screenshot Window */}
              <div className="card-screenshot-wrapper">
                {renderCardScreenshot(app.id)}

                {/* Overlapping App Squircle Icon with REAL PNG */}
                <div className="card-overlapping-icon">
                  <div className="squircle-icon-frame">
                    <img
                      src={app.iconSrc}
                      alt={`${app.name} icon`}
                      width={58}
                      height={58}
                      className="squircle-icon-img"
                    />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="card-content-box font-sans">
                <h3 className="card-app-title">{app.name}</h3>
                <p className="card-app-tagline">{app.tagline}</p>

                {/* Status Badges Row */}
                <div className="card-badges-row font-mono">
                  <span className={`pill-status pill-${app.statusColor}`}>
                    {app.status}
                  </span>
                  <span className="pill-status pill-orange">
                    {app.installerStatus}
                  </span>
                </div>

                {/* Platform OS Tags Row */}
                <div className="card-platforms-row font-mono">
                  {app.platforms.map((p) => (
                    <span key={p} className="platform-os-text">
                      {p}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="card-explore-action font-mono">
                  <span>EXPLORE {app.name.toUpperCase()}</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .artcraft-lineup-section {
          padding-top: 30px;
          padding-bottom: 90px;
          background: #0c0c0e;
        }

        .lineup-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 14px;
          margin-bottom: 28px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .lineup-tabs-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .section-continuity-title {
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .lineup-tab-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #a1a1aa;
          font-family: inherit;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 6px 12px;
          border-radius: 2px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .lineup-tab-item:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
        }

        .lineup-tab-item.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }

        .tab-num-box {
          color: #ffffff;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 2px;
        }

        /* 3-Column Cards Grid */
        .lineup-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;

          @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .artcraft-lineup-card {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: border-color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }

        .artcraft-lineup-card:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7);
        }

        .card-screenshot-wrapper {
          position: relative;
          height: 190px;
          background: #09090c;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow: visible;
        }

        .preview-canvas-box {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .inner-preview-svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-overlapping-icon {
          position: absolute;
          left: 18px;
          bottom: -24px;
          z-index: 10;
        }

        .squircle-icon-frame {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          overflow: hidden;
          background: #18181f;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .artcraft-lineup-card:hover .squircle-icon-frame {
          transform: scale(1.06);
          border-color: #3b82f6;
        }

        .squircle-icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* 46px top padding provides generous spacing so icon never touches the title */
        .card-content-box {
          padding: 46px 20px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-app-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 0 0 8px 0;
          line-height: 1.2;
        }

        .card-app-tagline {
          font-size: 0.86rem;
          color: #a1a1aa;
          line-height: 1.45;
          margin-bottom: 16px;
          min-height: 2.9em;
        }

        .card-badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 10px;
        }

        .card-platforms-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.65rem;
          color: #71717a;
          margin-bottom: 20px;
        }

        .platform-os-text {
          letter-spacing: 0.05em;
        }

        .card-explore-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #ffffff;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          transition: color 0.15s ease;
        }

        .artcraft-lineup-card:hover .card-explore-action {
          color: #3b82f6;
        }
      `}</style>
    </section>
  );
}
