'use client';

import React, { useState } from 'react';
import { Eye, Lock, Sliders, Type, Square, Hand, Search, ZoomIn, Check, RotateCcw } from 'lucide-react';

export default function PhotoCraftWorkspace() {
  const [activeLayer, setActiveLayer] = useState<string>('caption');
  const [adjustmentVisible, setAdjustmentVisible] = useState(true);

  return (
    <section className="workspace-section">
      <div className="artcraft-container">
        {/* Full Desktop Workspace Frame matching Image 4 */}
        <div className="workspace-frame">
          {/* Top Application Bar */}
          <div className="workspace-top-menubar font-sans">
            <div className="menubar-left">
              <span>File</span>
              <span>Edit</span>
              <span>Image</span>
              <span>Layer</span>
              <span>Type</span>
              <span>Select</span>
              <span>Filter</span>
              <span>View</span>
              <span>Window</span>
              <span>Help</span>
            </div>
            <div className="menubar-center font-mono">
              <span>the-great-wave.jpg •</span>
            </div>
            <div className="menubar-right font-mono">
              <span>Essentials ▾</span>
            </div>
          </div>

          {/* Sub Options Bar */}
          <div className="workspace-options-bar font-sans">
            <div className="options-group">
              <span className="opt-label font-mono">Auto-Select:</span>
              <span className="opt-val">Layer ▾</span>
              <span className="opt-checkbox font-mono">[x] Show Transform Controls</span>
            </div>
          </div>

          {/* Main Workspace 3-Column Layout: Left Tools, Center Canvas, Right Panels */}
          <div className="workspace-body-layout">
            {/* 1. Left Tool Palette (20+ tools) */}
            <div className="left-tool-palette">
              <button className="tool-btn active" title="Move Tool">✛</button>
              <button className="tool-btn" title="Rectangular Marquee">⊡</button>
              <button className="tool-btn" title="Lasso Tool">⚯</button>
              <button className="tool-btn" title="Crop Tool">⌗</button>
              <button className="tool-btn" title="Eyedropper Tool">💧</button>
              <button className="tool-btn" title="Spot Healing Brush">🩹</button>
              <button className="tool-btn" title="Brush Tool">🖌</button>
              <button className="tool-btn" title="Clone Stamp">⎋</button>
              <button className="tool-btn" title="History Brush">↺</button>
              <button className="tool-btn" title="Eraser Tool">⌫</button>
              <button className="tool-btn" title="Gradient Tool">▨</button>
              <button className="tool-btn" title="Blur Tool">◎</button>
              <button className="tool-btn" title="Dodge Tool">◐</button>
              <button className="tool-btn" title="Pen Tool">✒</button>
              <button className="tool-btn" title="Type Tool">T</button>
              <button className="tool-btn" title="Path Selection">➤</button>
              <button className="tool-btn" title="Rectangle Tool">▭</button>
              <button className="tool-btn" title="Hand Tool">✋</button>
              <button className="tool-btn" title="Zoom Tool">🔍</button>

              {/* Foreground / Background Color Chips */}
              <div className="color-chips-box">
                <div className="chip-bg" />
                <div className="chip-fg" />
              </div>
            </div>

            {/* 2. Center Canvas: The Great Wave Art */}
            <div className="center-viewport-canvas">
              <div className="canvas-hokusai-frame">
                {/* SVG Recreation of The Great Wave off Kanagawa */}
                <svg viewBox="0 0 1000 640" className="hokusai-full-svg" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f5ebe0" />
                      <stop offset="60%" stopColor="#e3d5ca" />
                      <stop offset="100%" stopColor="#d5bdaf" />
                    </linearGradient>
                    <linearGradient id="waveIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1b263b" />
                      <stop offset="50%" stopColor="#0d1b2a" />
                      <stop offset="100%" stopColor="#1b4965" />
                    </linearGradient>
                    <linearGradient id="wavePrussian" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#1d3557" />
                      <stop offset="70%" stopColor="#457b9d" />
                      <stop offset="100%" stopColor="#a8dadc" />
                    </linearGradient>
                  </defs>

                  {/* Japanese parchment Sky */}
                  <rect width="1000" height="640" fill="url(#skyGrad)" />

                  {/* Artist signature block in top-left */}
                  <rect x="70" y="50" width="36" height="120" fill="#fdf0d5" stroke="#4a3e3d" strokeWidth="1" />
                  <line x1="88" y1="60" x2="88" y2="150" stroke="#1d1d1d" strokeWidth="2" strokeDasharray="4,6" />

                  {/* Distant Mount Fuji */}
                  <polygon points="520,380 480,450 560,450" fill="#ffffff" />
                  <polygon points="480,450 430,520 610,520" fill="#2b2d42" />

                  {/* Distant wave ripples */}
                  <path d="M0 500 Q200 440, 450 510 T900 480 L1000 520 L1000 640 L0 640 Z" fill="#2c5364" opacity="0.6" />

                  {/* First fishing barge boat */}
                  <path d="M380 500 Q540 560, 680 500 Q560 520, 380 500 Z" fill="#d4a373" />
                  {/* Rowers inside boat */}
                  {[420, 440, 460, 480, 500, 520, 540].map((x) => (
                    <circle key={x} cx={x} cy="495" r="4" fill="#1d3557" />
                  ))}

                  {/* The Gigantic Crest Wave */}
                  <path
                    d="M0 640 L0 260 Q180 140, 320 320 Q440 480, 240 580 Q620 320, 780 480 L1000 520 L1000 640 Z"
                    fill="url(#waveIndigo)"
                  />

                  {/* Clawing Crest Wave Foam Overlay */}
                  <path
                    d="M0 640 L0 300 Q140 180, 280 340 Q400 460, 260 560 Q560 300, 740 440 L1000 500 L1000 640 Z"
                    fill="url(#wavePrussian)"
                    opacity="0.9"
                  />

                  {/* White Claw Foams */}
                  <circle cx="280" cy="180" r="14" fill="#ffffff" />
                  <circle cx="310" cy="160" r="12" fill="#ffffff" />
                  <circle cx="340" cy="170" r="16" fill="#ffffff" />
                  <circle cx="360" cy="200" r="10" fill="#ffffff" />
                  <circle cx="250" cy="220" r="15" fill="#ffffff" />
                  <circle cx="220" cy="260" r="18" fill="#ffffff" />
                  <circle cx="680" cy="380" r="16" fill="#ffffff" />
                  <circle cx="720" cy="360" r="14" fill="#ffffff" />
                  <circle cx="760" cy="390" r="20" fill="#ffffff" />

                  {/* Ocean Spray Specks */}
                  {[
                    [290, 140], [330, 130], [360, 150], [400, 180], [420, 210],
                    [460, 250], [270, 110], [670, 330], [710, 320], [740, 340]
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="#ffffff" />
                  ))}
                </svg>

                {/* Caption Card Overlay (Exact Image 4) */}
                <div className="hokusai-caption-card font-sans">
                  <h2 className="caption-card-title">The Great Wave</h2>
                  <p className="caption-card-sub font-mono">
                    Katsushika Hokusai · c. 1831 · public domain
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Right Side Studio Inspector (Curves + Layers) */}
            <div className="right-studio-inspector font-sans">
              {/* Top Panel: Curves Adjustment (Image 4) */}
              <div className="inspector-panel curves-panel">
                <div className="panel-tab-title">
                  <span>Channel: RGB ▾</span>
                </div>

                {/* Curves Coordinate Histogram Graph */}
                <div className="curves-graph-box">
                  <svg viewBox="0 0 160 120" className="curves-graph-svg">
                    <rect width="160" height="120" fill="#141419" />
                    {/* Background Histogram Silhouette */}
                    <path
                      d="M0 120 L10 110 L25 115 L40 90 L60 80 L80 60 L100 45 L120 30 L140 15 L160 10 L160 120 Z"
                      fill="#272730"
                    />
                    {/* Grid lines */}
                    <line x1="40" y1="0" x2="40" y2="120" stroke="#2c2c36" strokeWidth="1" />
                    <line x1="80" y1="0" x2="80" y2="120" stroke="#2c2c36" strokeWidth="1" />
                    <line x1="120" y1="0" x2="120" y2="120" stroke="#2c2c36" strokeWidth="1" />
                    <line x1="0" y1="30" x2="160" y2="30" stroke="#2c2c36" strokeWidth="1" />
                    <line x1="0" y1="60" x2="160" y2="60" stroke="#2c2c36" strokeWidth="1" />
                    <line x1="0" y1="90" x2="160" y2="90" stroke="#2c2c36" strokeWidth="1" />
                    {/* S-Curve */}
                    <path
                      d="M0 120 Q60 100, 80 60 T160 0"
                      stroke="#ffffff"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="80" cy="60" r="3" fill="#ffffff" />
                  </svg>
                </div>

                {/* Curve Inputs & Checkboxes */}
                <div className="curves-meta font-mono">
                  <div className="input-outputs-row">
                    <span>Input: 0</span>
                    <span>Output: 0</span>
                  </div>
                  <label className="checkbox-row">
                    <input
                      type="checkbox"
                      checked={adjustmentVisible}
                      onChange={() => setAdjustmentVisible(!adjustmentVisible)}
                    />
                    <span>Adjustment visible</span>
                  </label>
                  <label className="checkbox-row">
                    <input type="checkbox" />
                    <span>Clip to layer below</span>
                  </label>
                  <button className="btn-reset-defaults font-sans">
                    Reset to defaults
                  </button>
                </div>
              </div>

              {/* Bottom Panel: Layers Palette (Image 4) */}
              <div className="inspector-panel layers-panel">
                <div className="layers-tab-header font-sans">
                  <span className="tab-active">Layers</span>
                  <span>Channels</span>
                  <span>Paths</span>
                </div>

                <div className="layers-filter-row font-mono">
                  <span>Q Kind ▾</span>
                  <span>Normal ▾</span>
                  <span>Opacity: 100%</span>
                </div>

                <div className="layers-stack-list font-mono">
                  {/* Layer 1: Curves 1 */}
                  <div
                    className={`layer-row ${activeLayer === 'curves' ? 'selected' : ''}`}
                    onClick={() => setActiveLayer('curves')}
                  >
                    <Eye size={12} className="layer-eye" />
                    <span className="layer-type-badge font-sans">fx</span>
                    <span className="layer-name">Curves 1</span>
                    <span className="layer-kind-tag">Curves</span>
                  </div>

                  {/* Layer 2: Vibrance 1 */}
                  <div
                    className={`layer-row ${activeLayer === 'vibrance' ? 'selected' : ''}`}
                    onClick={() => setActiveLayer('vibrance')}
                  >
                    <Eye size={12} className="layer-eye" />
                    <span className="layer-type-badge font-sans">fx</span>
                    <span className="layer-name">Vibrance 1</span>
                    <span className="layer-kind-tag">Vibrance</span>
                  </div>

                  {/* Layer 3: Credit */}
                  <div
                    className={`layer-row ${activeLayer === 'credit' ? 'selected' : ''}`}
                    onClick={() => setActiveLayer('credit')}
                  >
                    <Eye size={12} className="layer-eye" />
                    <span className="layer-type-badge font-sans">T</span>
                    <span className="layer-name">Credit</span>
                    <span className="layer-kind-tag">Type</span>
                  </div>

                  {/* Layer 4: Title */}
                  <div
                    className={`layer-row ${activeLayer === 'title' ? 'selected' : ''}`}
                    onClick={() => setActiveLayer('title')}
                  >
                    <Eye size={12} className="layer-eye" />
                    <span className="layer-type-badge font-sans">T</span>
                    <span className="layer-name">Title</span>
                    <span className="layer-kind-tag">Type</span>
                  </div>

                  {/* Layer 5: Caption Card */}
                  <div
                    className={`layer-row ${activeLayer === 'caption' ? 'selected' : ''}`}
                    onClick={() => setActiveLayer('caption')}
                  >
                    <Eye size={12} className="layer-eye" />
                    <span className="layer-type-badge font-sans">▢</span>
                    <span className="layer-name">Caption Card</span>
                    <span className="layer-kind-tag">Shape</span>
                  </div>

                  {/* Layer 6: Background */}
                  <div
                    className={`layer-row ${activeLayer === 'background' ? 'selected' : ''}`}
                    onClick={() => setActiveLayer('background')}
                  >
                    <Eye size={12} className="layer-eye" />
                    <Lock size={12} className="layer-lock" />
                    <span className="layer-name">Background</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .workspace-section {
          padding-top: 10px;
          padding-bottom: 80px;
          background: #0c0c0e;
        }

        .workspace-frame {
          background: #18181f;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
        }

        .workspace-top-menubar {
          height: 30px;
          background: #1b1b22;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          font-size: 0.72rem;
          color: #d4d4d8;
        }

        .menubar-left {
          display: flex;
          gap: 14px;
          color: #a1a1aa;
        }

        .menubar-left span:hover {
          color: #ffffff;
          cursor: pointer;
        }

        .menubar-center {
          color: #ffffff;
          font-size: 0.68rem;
        }

        .menubar-right {
          color: #a1a1aa;
          font-size: 0.68rem;
        }

        .workspace-options-bar {
          height: 28px;
          background: #141419;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          padding: 0 12px;
          font-size: 0.68rem;
        }

        .options-group {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a1a1aa;
        }

        .workspace-body-layout {
          display: grid;
          grid-template-columns: 44px 1fr 280px;
          height: 600px;

          @media (max-width: 900px) {
            grid-template-columns: 44px 1fr;
          }
        }

        /* 1. Left Toolbar */
        .left-tool-palette {
          background: #141418;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 0;
          gap: 4px;
        }

        .tool-btn {
          width: 28px;
          height: 26px;
          background: transparent;
          border: 1px solid transparent;
          color: #a1a1aa;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          cursor: pointer;
        }

        .tool-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .tool-btn.active {
          background: #272730;
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .color-chips-box {
          position: relative;
          width: 26px;
          height: 26px;
          margin-top: 12px;
        }

        .chip-bg {
          position: absolute;
          right: 2px;
          bottom: 2px;
          width: 14px;
          height: 14px;
          background: #ffffff;
          border: 1px solid #000000;
        }

        .chip-fg {
          position: absolute;
          left: 2px;
          top: 2px;
          width: 14px;
          height: 14px;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        /* 2. Center Viewport */
        .center-viewport-canvas {
          background: #0e0e12;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }

        .canvas-hokusai-frame {
          position: relative;
          width: 100%;
          max-width: 820px;
          aspect-ratio: 1000 / 640;
          border-radius: 2px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
          overflow: hidden;
        }

        .hokusai-full-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .hokusai-caption-card {
          position: absolute;
          bottom: 24px;
          left: 24px;
          background: rgba(18, 18, 24, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 14px 20px;
          border-radius: 6px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7);
        }

        .caption-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .caption-card-sub {
          font-size: 0.75rem;
          color: #a1a1aa;
        }

        /* 3. Right Inspector (Curves & Layers) */
        .right-studio-inspector {
          background: #141419;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;

          @media (max-width: 900px) {
            display: none;
          }
        }

        .inspector-panel {
          padding: 12px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .panel-tab-title {
          font-size: 0.7rem;
          color: #a1a1aa;
          margin-bottom: 10px;
        }

        .curves-graph-box {
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .curves-graph-svg {
          width: 100%;
          height: 110px;
          display: block;
        }

        .curves-meta {
          font-size: 0.68rem;
          color: #a1a1aa;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-outputs-row {
          display: flex;
          justify-content: space-between;
          color: #71717a;
        }

        .checkbox-row {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .btn-reset-defaults {
          background: #272730;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 5px 8px;
          border-radius: 2px;
          font-size: 0.68rem;
          cursor: pointer;
          margin-top: 4px;
        }

        .layers-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .layers-tab-header {
          display: flex;
          gap: 14px;
          font-size: 0.72rem;
          color: #71717a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
          margin-bottom: 8px;
        }

        .layers-tab-header .tab-active {
          color: #ffffff;
          font-weight: 700;
        }

        .layers-filter-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: #a1a1aa;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 6px;
        }

        .layers-stack-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 0.68rem;
        }

        .layer-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          border-radius: 2px;
          cursor: pointer;
          color: #d4d4d8;
        }

        .layer-row:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .layer-row.selected {
          background: #262632;
          color: #ffffff;
        }

        .layer-type-badge {
          font-size: 0.6rem;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.12);
          padding: 1px 4px;
          border-radius: 2px;
        }

        .layer-name {
          flex: 1;
        }

        .layer-kind-tag {
          font-size: 0.62rem;
          color: #71717a;
        }
      `}</style>
    </section>
  );
}
