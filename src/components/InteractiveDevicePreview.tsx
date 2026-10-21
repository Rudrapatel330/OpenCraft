'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw, Eye, Sliders, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import { playGeometricClick } from '@/utils/audio';

export default function InteractiveDevicePreview() {
  const [activeTab, setActiveTab] = useState<'photoview' | 'office' | 'rust' | 'audio'>('photoview');
  const [zoomScale, setZoomScale] = useState(1.0);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoom = (delta: number) => {
    playGeometricClick(900, 0.02, 'sine');
    setZoomScale((prev) => Math.min(3.5, Math.max(0.8, prev + delta)));
  };

  const resetViewport = () => {
    playGeometricClick(600, 0.03, 'sine');
    setZoomScale(1.0);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section id="benchmarks" className="device-preview-section">
      <div className="container">
        {/* Section Coordinate Marker */}
        <div className="section-marker">
          <span className="marker-index">04</span>
          <span>INTERACTIVE HARNESS // NATIVE GESTURE & VIEWPORT TESTBENCH</span>
          <span className="marker-line" />
          <span className="font-mono text-muted text-xs">TOUCH ENGINE: 120HZ</span>
        </div>

        {/* Section Title */}
        <div className="device-header">
          <div>
            <h2 className="device-heading font-display">Simulated native runtime.</h2>
            <p className="device-subheading">
              Interact directly with the custom hardware-accelerated PhotoViewAttacher gesture matrix and document reflow engine right in your browser.
            </p>
          </div>

          {/* Engine Tabs */}
          <div className="engine-tabs font-mono">
            <button
              onClick={() => {
                playGeometricClick(800, 0.02, 'sine');
                setActiveTab('photoview');
              }}
              className={`tab-btn ${activeTab === 'photoview' ? 'active' : ''}`}
            >
              01 PHOTOVIEW ATTACHER
            </button>
            <button
              onClick={() => {
                playGeometricClick(800, 0.02, 'sine');
                setActiveTab('office');
              }}
              className={`tab-btn ${activeTab === 'office' ? 'active' : ''}`}
            >
              02 CLEANOFFICE CANVAS
            </button>
            <button
              onClick={() => {
                playGeometricClick(800, 0.02, 'sine');
                setActiveTab('rust');
              }}
              className={`tab-btn ${activeTab === 'rust' ? 'active' : ''}`}
            >
              03 RUSTDROID NDK TRACER
            </button>
          </div>
        </div>

        {/* Simulated Android Phone Frame */}
        <div className="device-simulator-container">
          <div className="phone-bezel geo-border">
            {/* Status Bar */}
            <div className="phone-status-bar font-mono">
              <span>12:00</span>
              <div className="camera-punchhole" />
              <div className="status-icons">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* App Action Bar */}
            <div className="phone-app-bar font-mono">
              <span className="app-bar-title font-display">
                {activeTab === 'photoview' && 'PhotoPrism // Great Wave Test (108MP)'}
                {activeTab === 'office' && 'CleanOffice // Technical_Architecture_Spec.docx'}
                {activeTab === 'rust' && 'RustDroid APM // SIMD Neon Memory Graph'}
              </span>
              <div className="app-bar-actions">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="bar-icon-btn"
                  title="Toggle Inversion"
                >
                  <Eye size={14} />
                </button>
                <button onClick={resetViewport} className="bar-icon-btn" title="Reset Matrix">
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Interactive Viewport Canvas */}
            <div
              className={`phone-canvas ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <div
                className="canvas-transform-layer"
                style={{
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                }}
              >
                {/* 1. PhotoView Great Wave Art Canvas */}
                {activeTab === 'photoview' && (
                  <div className="hokusai-art-mock">
                    <svg viewBox="0 0 600 380" className="art-svg">
                      <defs>
                        <linearGradient id="waveSky" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0f172a" />
                          <stop offset="100%" stopColor="#1e293b" />
                        </linearGradient>
                        <linearGradient id="waveDeep" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0284c7" />
                          <stop offset="50%" stopColor="#0369a1" />
                          <stop offset="100%" stopColor="#075985" />
                        </linearGradient>
                      </defs>
                      <rect width="600" height="380" fill="url(#waveSky)" />
                      {/* Great Wave Crests */}
                      <path
                        d="M0 380 L0 260 Q120 180, 220 280 T400 240 Q480 140, 600 280 L600 380 Z"
                        fill="url(#waveDeep)"
                      />
                      <path
                        d="M0 380 L0 300 Q150 240, 260 330 T480 300 L600 380 Z"
                        fill="#0c4a6e"
                        opacity="0.8"
                      />
                      {/* Mount Fuji */}
                      <polygon points="300,240 270,300 330,300" fill="#ffffff" opacity="0.9" />
                      {/* Wave foam dots */}
                      <circle cx="210" cy="240" r="4" fill="#ffffff" />
                      <circle cx="230" cy="220" r="3" fill="#ffffff" />
                      <circle cx="250" cy="210" r="5" fill="#ffffff" />
                      <circle cx="460" cy="180" r="4" fill="#ffffff" />
                    </svg>

                    <div className="wave-badge-overlay font-display">
                      <h4>The Great Wave (Attacher Preview)</h4>
                      <p className="font-mono text-xs">Pinch / Drag to test sub-pixel hardware zoom</p>
                    </div>
                  </div>
                )}

                {/* 2. Office Document Canvas */}
                {activeTab === 'office' && (
                  <div className="doc-paper-mock">
                    <div className="doc-title-bar font-display">
                      ARCHITECTURE MANIFEST v2.4
                    </div>
                    <div className="doc-meta-bar font-mono text-xs">
                      Author: Sovereign Developer · License: Apache-2.0 · Target: Android 15
                    </div>
                    <hr className="doc-divider" />
                    <div className="doc-paragraphs">
                      <p>
                        CleanOffice employs a hardware-accelerated document pipeline linked directly
                        through JNI to an embedded C++ layout engine. Unlike web-view based mobile
                        readers, each glyph is cached as an alpha distance field in Vulkan texture memory.
                      </p>
                      <div className="doc-code-block font-mono text-xs">
                        [JNI] SurfaceHolder.lockHardwareCanvas() -&gt; 0ms allocation pause
                      </div>
                      <p>
                        Memory footprint remains bounded strictly under 40 MB regardless of page count.
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. Rust NDK Memory Graph */}
                {activeTab === 'rust' && (
                  <div className="rust-monitor-mock font-mono">
                    <div className="monitor-row">
                      <span className="text-cyan">[THREAD_01_SIMD]</span>
                      <span className="text-emerald">RUNNING // 120 FPS</span>
                    </div>
                    <div className="monitor-graph-bars">
                      {[40, 65, 30, 85, 95, 45, 70, 60, 80, 55, 90, 75, 50, 85].map((val, i) => (
                        <div
                          key={i}
                          className="graph-bar"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                    <div className="monitor-stats">
                      <span>HEAP: 14.2 MB</span>
                      <span>GC PAUSES: 0.00ms</span>
                      <span>INSTRUCTION CACHE: 99.4% HIT</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Viewport Floating HUD Telemetry */}
              <div className="viewport-hud font-mono">
                <span>SCALE: {(zoomScale * 100).toFixed(0)}%</span>
                <span>PAN: [{panOffset.x.toFixed(0)}, {panOffset.y.toFixed(0)}]</span>
                <span className="text-emerald">FPS: 120.0</span>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="phone-controls-bar">
              <div className="zoom-controls">
                <button onClick={() => handleZoom(-0.25)} className="control-btn" title="Zoom Out">
                  <ZoomOut size={15} />
                </button>
                <span className="zoom-label font-mono">{(zoomScale * 100).toFixed(0)}%</span>
                <button onClick={() => handleZoom(0.25)} className="control-btn" title="Zoom In">
                  <ZoomIn size={15} />
                </button>
              </div>

              <div className="gesture-hint font-mono text-xs">
                <span>DRAG TO PAN · WHEEL OR BUTTONS TO ZOOM</span>
              </div>
            </div>

            {/* Android Navigation Gesture Pill */}
            <div className="phone-gesture-pill" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .device-preview-section {
          padding: 90px 0;
          position: relative;
          z-index: 5;
        }

        .device-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 36px;
        }

        .device-heading {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }

        .device-subheading {
          font-size: 0.95rem;
          color: #a1a1aa;
          max-width: 580px;
        }

        .engine-tabs {
          display: flex;
          gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .engine-tabs {
            flex-direction: column;
            width: 100%;
          }
        }

        .tab-btn {
          background: transparent;
          border: none;
          color: #71717a;
          padding: 8px 14px;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-btn:hover {
          color: #ffffff;
        }

        .tab-btn.active {
          background: rgba(255, 255, 255, 0.1);
          color: #38bdf8;
        }

        .device-simulator-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .phone-bezel {
          width: 100%;
          max-width: 900px;
          height: 520px;
          background: #09090d;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.08);
        }

        .phone-status-bar {
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
          background: #060608;
          color: #71717a;
          font-size: 0.65rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .camera-punchhole {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .status-icons {
          display: flex;
          gap: 8px;
        }

        .phone-app-bar {
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .app-bar-title {
          font-size: 0.85rem;
          color: #ffffff;
          font-weight: 600;
        }

        .app-bar-actions {
          display: flex;
          gap: 6px;
        }

        .bar-icon-btn {
          width: 28px;
          height: 28px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #a1a1aa;
          border-radius: 3px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .bar-icon-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .phone-canvas {
          flex: 1;
          position: relative;
          overflow: hidden;
          user-select: none;
        }

        .phone-canvas.dark-theme {
          background: #07070a;
        }

        .phone-canvas.light-theme {
          background: #f4f4f5;
          color: #18181b;
        }

        .canvas-transform-layer {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hokusai-art-mock {
          width: 80%;
          max-width: 540px;
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .art-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .wave-badge-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(7, 7, 9, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 14px;
          border-radius: 4px;
        }

        .wave-badge-overlay h4 {
          font-size: 0.88rem;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .doc-paper-mock {
          width: 85%;
          max-width: 580px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 24px;
          border-radius: 4px;
        }

        .doc-title-bar {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .doc-meta-bar {
          color: #71717a;
          margin-bottom: 12px;
        }

        .doc-divider {
          border: none;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin-bottom: 14px;
        }

        .doc-paragraphs p {
          font-size: 0.84rem;
          line-height: 1.6;
          color: #d4d4d8;
          margin-bottom: 12px;
        }

        .doc-code-block {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          padding: 8px 12px;
          border-radius: 3px;
          margin-bottom: 12px;
        }

        .rust-monitor-mock {
          width: 85%;
          max-width: 580px;
          background: rgba(14, 14, 18, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 4px;
        }

        .monitor-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
          font-size: 0.78rem;
        }

        .monitor-graph-bars {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 90px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 14px;
        }

        .graph-bar {
          flex: 1;
          background: linear-gradient(to top, #0284c7, #38bdf8);
          border-radius: 2px 2px 0 0;
        }

        .monitor-stats {
          display: flex;
          justify-content: space-between;
          font-size: 0.68rem;
          color: #71717a;
        }

        .viewport-hud {
          position: absolute;
          bottom: 12px;
          left: 14px;
          background: rgba(7, 7, 9, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: 3px;
          display: flex;
          gap: 12px;
          font-size: 0.65rem;
          color: #a1a1aa;
          pointer-events: none;
        }

        .phone-controls-bar {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
          background: #060608;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .control-btn {
          width: 26px;
          height: 26px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-radius: 3px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .zoom-label {
          font-size: 0.72rem;
          color: #38bdf8;
          min-width: 42px;
          text-align: center;
        }

        .gesture-hint {
          color: #71717a;
          letter-spacing: 0.06em;
        }

        .phone-gesture-pill {
          width: 120px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          margin: 6px auto;
        }

        .text-cyan { color: #38bdf8; }
        .text-emerald { color: #34d399; }
      `}</style>
    </section>
  );
}
