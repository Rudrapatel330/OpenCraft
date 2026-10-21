'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, ArrowRight, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProductIcon from './ProductIcon';
import { PRODUCTS, Product } from '@/data/products';
import { playGeometricClick, playHoverTick } from '@/utils/audio';

interface HeroOrbitProps {
  onSelectProduct: (p: Product) => void;
  onOpenTerminal: () => void;
}

export default function HeroOrbit({ onSelectProduct, onOpenTerminal }: HeroOrbitProps) {
  const [activeOrbitHover, setActiveOrbitHover] = useState<string | null>(null);

  // Take top 6 apps for the dynamic orbit ring placement
  const orbitApps = PRODUCTS.slice(0, 6);

  const handleCardClick = (product: Product) => {
    playGeometricClick(750, 0.04, 'triangle');
    onSelectProduct(product);
  };

  return (
    <section id="orbit" className="hero-orbit-section">
      {/* Top Coordinate Header Marker */}
      <div className="container">
        <div className="section-marker">
          <span className="marker-index">01</span>
          <span>ORBITAL ARCHITECTURE // ANDROID ECOSYSTEM</span>
          <span className="marker-line" />
          <span className="font-mono text-muted text-xs">LATENCY: &lt;1.8MS</span>
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="container hero-content-wrapper">
        {/* Continuous Concentric Orbit Rings Background */}
        <div className="orbit-field-svg" aria-hidden="true">
          <svg viewBox="0 0 1200 680" className="orbit-svg" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Ellipse 1 (Inner) */}
            <ellipse
              cx="600"
              cy="340"
              rx="360"
              ry="180"
              stroke="url(#orbitGrad1)"
              strokeWidth="1.5"
              strokeDasharray="6,8"
              className="orbit-ring-anim"
            />

            {/* Ellipse 2 (Middle) */}
            <ellipse
              cx="600"
              cy="340"
              rx="540"
              ry="260"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
            />

            {/* Ellipse 3 (Outer) */}
            <ellipse
              cx="600"
              cy="340"
              rx="680"
              ry="330"
              stroke="url(#orbitGrad2)"
              strokeWidth="1.2"
              strokeDasharray="4,12"
            />

            {/* Crosshair coordinate ticks at compass points */}
            <circle cx="600" cy="80" r="3" fill="#38bdf8" />
            <circle cx="600" cy="600" r="3" fill="#a855f7" />
            <circle cx="60" cy="340" r="3" fill="#10b981" />
            <circle cx="1140" cy="340" r="3" fill="#38bdf8" />
          </svg>
        </div>

        {/* Orbiting Satellite App Previews */}
        <div className="orbiting-nodes-container">
          {orbitApps.map((app, idx) => {
            // Calculated positions along ellipse
            const angles = [20, 75, 145, 205, 260, 325];
            const angle = angles[idx];
            const rad = (angle * Math.PI) / 180;
            const rx = 44; // percent width radius
            const ry = 36; // percent height radius
            const left = 50 + rx * Math.cos(rad);
            const top = 50 + ry * Math.sin(rad);

            const isHovered = activeOrbitHover === app.id;

            return (
              <motion.div
                key={app.id}
                className={`orbit-node ${isHovered ? 'hovered' : ''}`}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                onMouseEnter={() => {
                  playHoverTick();
                  setActiveOrbitHover(app.id);
                }}
                onMouseLeave={() => setActiveOrbitHover(null)}
                onClick={() => handleCardClick(app)}
                role="button"
                tabIndex={0}
                title={`Inspect ${app.name}`}
              >
                <div className="node-badge-wrapper">
                  <ProductIcon type={app.iconType} size={48} accent={app.accentColor} />
                  <div className="node-tooltip">
                    <span className="tooltip-name">{app.name}</span>
                    <span className="tooltip-tag font-mono">{app.apkSize} · {app.status}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Hero Identity */}
        <div className="hero-center-box">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-badge-pill"
          >
            <Smartphone size={13} className="text-cyan" />
            <span className="font-mono text-xs">ENGINEERED NATIVE ANDROID APPS</span>
            <span className="pill-dot" />
            <span className="font-mono text-xs text-muted">API 26 — 35</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="hero-main-title font-display"
          >
            Eight apps. <span className="title-accent">One craft.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="hero-subtitle"
          >
            Office suites, gesture RAW photo viewers, Rust NDK micro-runtimes, parametric vector canvases, encrypted vaults, and DSP audio modules. Built natively for Android with zero trackers, pure performance, and direct APK freedom.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="hero-cta-group"
          >
            <a
              href="#lineup"
              onClick={() => playGeometricClick(800, 0.03, 'sine')}
              className="btn-geo-primary"
            >
              <Download size={16} />
              <span>EXPLORE APK LINEUP</span>
            </a>

            <button
              onClick={() => {
                playGeometricClick(1000, 0.03, 'triangle');
                onOpenTerminal();
              }}
              className="btn-geo-secondary"
            >
              <Terminal size={16} />
              <span>INTERACTIVE CLI</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => playGeometricClick(650, 0.02, 'sine')}
              className="btn-geo-secondary"
            >
              <GithubIcon size={16} />
              <span>BROWSE GITHUB</span>
            </a>
          </motion.div>

          {/* Engineering Specifications Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="hero-meta-strip font-mono"
          >
            <span><ShieldCheck size={13} className="inline-icon text-emerald" /> ZERO TELEMETRY</span>
            <span className="dot-sep">·</span>
            <span><Zap size={13} className="inline-icon text-cyan" /> 120HZ TOUCH MATRIX</span>
            <span className="dot-sep">·</span>
            <span>OFFLINE CAPABLE</span>
            <span className="dot-sep">·</span>
            <span>DIRECT APK DOWNLOAD</span>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-orbit-section {
          position: relative;
          min-height: 90vh;
          padding-top: 130px;
          padding-bottom: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .hero-content-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 620px;
        }

        .orbit-field-svg {
          position: absolute;
          inset: -60px -100px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
          opacity: 0.85;
        }

        .orbit-svg {
          width: 100%;
          height: 100%;
          max-width: 1300px;
        }

        .orbiting-nodes-container {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
        }

        .orbit-node {
          position: absolute;
          transform: translate(-50%, -50%);
          pointer-events: auto;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 1024px) {
          .orbiting-nodes-container {
            display: none;
          }
        }

        .node-badge-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node-tooltip {
          position: absolute;
          bottom: -36px;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          opacity: 0;
          pointer-events: none;
          background: rgba(14, 14, 18, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
          white-space: nowrap;
          transition: all 0.2s ease;
          z-index: 20;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
        }

        .orbit-node:hover .node-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .tooltip-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #ffffff;
        }

        .tooltip-tag {
          font-size: 0.62rem;
          color: #38bdf8;
        }

        .hero-center-box {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 24px;
        }

        .pill-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .text-cyan {
          color: #38bdf8;
        }

        .text-emerald {
          color: #34d399;
        }

        .hero-main-title {
          font-size: clamp(2.8rem, 6.2vw, 5.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .title-accent {
          background: linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 1.35vw, 1.22rem);
          color: #a1a1aa;
          line-height: 1.65;
          max-width: 680px;
          margin-bottom: 36px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 34px;
        }

        .hero-meta-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: #71717a;
        }

        .dot-sep {
          opacity: 0.4;
        }

        .inline-icon {
          vertical-align: middle;
          margin-right: 4px;
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
