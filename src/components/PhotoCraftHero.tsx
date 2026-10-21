'use client';

import React from 'react';
import { Download } from 'lucide-react';
import ArtCraftIcon from './ArtCraftIcon';
import { GithubIcon } from './Icons';

export default function PhotoCraftHero() {
  return (
    <section id="photocraft" className="photocraft-hero-section">
      <div className="artcraft-container">
        {/* Sub-header Marker (Image 3: 01 / PHOTOCRAFT) */}
        <div className="sub-header-marker-bar">
          <div className="marker-left">
            <span>01 / PHOTOCRAFT</span>
          </div>
          <div className="marker-right-spec font-mono">
            <span>IMAGE EDITOR · EARLY ALPHA</span>
          </div>
          <span className="floating-big-label">PHOTOCRAFT</span>
        </div>

        {/* Center Hero Block (Image 3) */}
        <div className="photocraft-center-content font-sans">
          {/* Centered Squircle Badge */}
          <div className="photocraft-icon-badge">
            <ArtCraftIcon type="fox" size={88} bgColor="#3b82f6" />
            <div className="pill-badge-below font-mono">
              <span className="badge-num">01</span>
              <span>PhotoCraft</span>
            </div>
          </div>

          {/* Headline (Image 3) */}
          <h1 className="photocraft-title">
            The image editor you<br />
            already <span className="blue-word">know</span> how to<br />
            use.
          </h1>

          {/* Subtitle */}
          <p className="photocraft-sub">
            Layers, masks, adjustment layers, layer styles, type, vectors and
            brushes in a native app written entirely in Rust. Open source,
            offline, and yours.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons-row">
            <a href="#download" className="btn-artcraft-white">
              <Download size={15} />
              <span>DOWNLOAD LAUNCHER</span>
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="btn-artcraft-dark"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
              </svg>
              <span>JOIN THE DISCORD</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-artcraft-dark"
            >
              <GithubIcon size={15} />
              <span>VIEW ON GITHUB</span>
            </a>
          </div>

          <div className="platform-footnote font-mono">
            <span>FOR WINDOWS · INSTALLER (64-BIT) · ANDROID APKs</span>
            <a href="#downloads" className="other-platforms-link">
              OTHER PLATFORMS AND DOWNLOADS ↓
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .photocraft-hero-section {
          padding-top: 30px;
          padding-bottom: 60px;
          background: #0c0c0e;
        }

        .photocraft-center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }

        .photocraft-icon-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .pill-badge-below {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: 2px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #ffffff;
        }

        .badge-num {
          background: #3b82f6;
          color: #ffffff;
          padding: 1px 4px;
          border-radius: 2px;
          font-size: 0.65rem;
        }

        .photocraft-title {
          font-size: clamp(2.6rem, 5.5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .blue-word {
          color: #3b82f6;
        }

        .photocraft-sub {
          font-size: 1.1rem;
          color: #a1a1aa;
          line-height: 1.6;
          max-width: 650px;
          margin-bottom: 34px;
        }

        .hero-buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .platform-footnote {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          color: #71717a;
          letter-spacing: 0.08em;
        }

        .other-platforms-link {
          color: #a1a1aa;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .other-platforms-link:hover {
          color: #ffffff;
        }
      `}</style>
    </section>
  );
}
