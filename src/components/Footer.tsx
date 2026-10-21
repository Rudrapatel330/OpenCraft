'use client';

import React from 'react';
import { Download, ArrowUp, Smartphone, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PRODUCTS, Product } from '@/data/products';
import { playGeometricClick } from '@/utils/audio';

interface FooterProps {
  onDirectDownload: (p: Product) => void;
}

export default function Footer({ onDirectDownload }: FooterProps) {
  const scrollToTop = () => {
    playGeometricClick(800, 0.02, 'sine');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="get-it" className="site-footer">
      <div className="container">
        {/* Section Coordinate Marker */}
        <div className="section-marker">
          <span className="marker-index">05</span>
          <span>RELEASES // DIRECT APK REPOSITORIES</span>
          <span className="marker-line" />
          <span className="font-mono text-muted text-xs">OFFLINE-FIRST ARCHITECTURE</span>
        </div>

        {/* Footer Main Call to Action */}
        <div className="footer-cta-box geo-border">
          <div className="cta-left">
            <h2 className="cta-heading font-display">
              Ready to deploy<span className="text-cyan">.</span>
            </h2>
            <p className="cta-sub">
              Direct sideloadable Android APKs. No Google Play account required, no device tracking, and instant hardware-accelerated execution.
            </p>
          </div>

          <div className="cta-right">
            <button
              onClick={() => onDirectDownload(PRODUCTS[0])}
              className="btn-geo-primary"
            >
              <Download size={16} />
              <span>DOWNLOAD CLEANOFFICE (STABLE)</span>
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-geo-secondary"
            >
              <GithubIcon size={16} />
              <span>GITHUB REPOSITORIES</span>
            </a>
          </div>
        </div>

        {/* Quick APK Lineup Matrix in Footer */}
        <div className="footer-quick-grid">
          {PRODUCTS.map((app) => (
            <div key={app.id} className="quick-app-row">
              <div className="quick-left">
                <span className="app-dot" style={{ background: app.accentColor }} />
                <span className="app-name font-display">{app.name}</span>
                <span className="app-ver font-mono text-xs">{app.version}</span>
              </div>
              <button
                onClick={() => onDirectDownload(app)}
                className="btn-quick-dl font-mono text-xs"
              >
                <Download size={12} />
                <span>{app.apkSize}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="footer-bottom-bar font-mono">
          <div className="bottom-left">
            <span>ARCHETYPE // ANDROID LABS</span>
            <span className="sep">·</span>
            <span>KOTLIN + JETPACK COMPOSE + NDK RUST</span>
          </div>

          <button onClick={scrollToTop} className="btn-back-to-top" title="Back to top">
            <span>TOP OF ORBIT</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          padding: 80px 0 50px 0;
          position: relative;
          z-index: 5;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #08080b;
        }

        .footer-cta-box {
          background: #0e0e14;
          padding: 40px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 48px;
        }

        .cta-heading {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }

        .cta-sub {
          font-size: 0.92rem;
          color: #a1a1aa;
          max-width: 520px;
        }

        .cta-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .text-cyan {
          color: #38bdf8;
        }

        .footer-quick-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 48px;

          @media (min-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (min-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .quick-app-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          transition: background 0.15s ease;
        }

        .quick-app-row:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .quick-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .app-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .app-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: #ffffff;
        }

        .app-ver {
          color: #71717a;
        }

        .btn-quick-dl {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #38bdf8;
          padding: 3px 8px;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-quick-dl:hover {
          background: #38bdf8;
          color: #070709;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.7rem;
          color: #71717a;
        }

        .bottom-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sep {
          opacity: 0.4;
        }

        .btn-back-to-top {
          background: transparent;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          font-size: inherit;
          transition: color 0.2s ease;
        }

        .btn-back-to-top:hover {
          color: #38bdf8;
        }
      `}</style>
    </footer>
  );
}
