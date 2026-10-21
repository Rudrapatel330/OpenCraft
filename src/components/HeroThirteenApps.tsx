'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { APPS, AppItem } from '@/data/products';
import { GithubIcon } from './Icons';
import GlidingSectionTitle from './GlidingSectionTitle';

interface HeroProps {
  onSelectApp?: (app: AppItem) => void;
}

export default function HeroThirteenApps({ onSelectApp }: HeroProps) {
  return (
    <section id="crafting-apps" className="hero-three-section">
      <div className="artcraft-container">
        {/* Sub-header Marker Bar: clean 2-column hairline bar */}
        <div className="sub-header-marker-bar">
          <div className="marker-left font-mono">
            <span>01 / OPENCRAFT</span>
          </div>
          <div className="marker-right-spec font-mono">
            <span>THREE APPS · OPEN SOURCE · HIGH PERFORMANCE</span>
          </div>
        </div>

        {/* Two-Column Hero Layout */}
        <div className="hero-split-grid">
          {/* Left Column: Big Headline & CTAs */}
          <div className="hero-left-col">
            <h1 className="hero-main-title font-sans">
              Three apps.<br />
              One <span className="blue-word">craft.</span>
            </h1>

            <p className="hero-description font-sans">
              High-speed peer-to-peer file transfer, offline hi-fi music playback, and unified device sync. Native, open-source Android apps built for performance, privacy, and freedom. Built for power users and 100% free.
            </p>

            {/* Action Buttons Row */}
            <div className="hero-buttons-row">
              <a href="#download" className="btn-artcraft-white font-sans">
                <Download size={15} />
                <span>DOWNLOAD SUITE</span>
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="btn-artcraft-dark font-sans"
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
                className="btn-artcraft-dark font-sans"
              >
                <GithubIcon size={15} />
                <span>BROWSE ON GITHUB</span>
              </a>
            </div>

            {/* Installer Subtext */}
            <div className="hero-subnote-box font-sans">
              <span className="platform-tag font-mono">FOR ANDROID · APK DIRECT · 64-BIT ARCH</span>
              <p className="recommended-text">
                <strong>Recommended:</strong> OpenCraft apps install directly via APK or F-Droid with zero trackers, no subscriptions, and 100% offline privacy.{' '}
                <a href="#lineup" className="learn-more-link">Explore the apps</a>
              </p>
            </div>

            {/* Share Links Strip */}
            <div className="share-strip font-mono">
              <span className="share-title">SHARE</span>
              <button
                className="share-link"
                onClick={() => {
                  if (typeof navigator !== 'undefined' && navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
              >
                COPY LINK
              </button>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="share-link">X</a>
              <a href="https://reddit.com" target="_blank" rel="noreferrer" className="share-link">REDDIT</a>
              <a href="https://bsky.app" target="_blank" rel="noreferrer" className="share-link">BLUESKY</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="share-link">LINKEDIN</a>
            </div>
          </div>

          {/* Right Column: Title on top + 3 Real Apps Display with High-Res Squircles */}
          <div className="hero-right-col">
            <div className="hero-right-title-row">
              <GlidingSectionTitle text="OPENCRAFT" id="hero-continuity-label" />
            </div>

            <div className="apps-hero-showcase">
              <div className="showcase-header font-mono">
                <span>OFFICIAL APPS LINEUP</span>
                <span className="text-blue">CLICK TO INSPECT</span>
              </div>

              <div className="three-apps-grid">
                {APPS.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => onSelectApp && onSelectApp(app)}
                    className="hero-app-card"
                    title={`Inspect ${app.name}`}
                  >
                    <div className="hero-icon-squircle">
                      <img
                        src={app.iconSrc}
                        alt={`${app.name} Icon`}
                        width={78}
                        height={78}
                        className="hero-icon-img"
                        loading="eager"
                      />
                    </div>
                    <div className="hero-app-meta">
                      <span className="hero-app-name font-sans">{app.name}</span>
                      <span className="hero-app-cat font-mono">{app.categoryName}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-three-section {
          padding-top: 24px;
          padding-bottom: 70px;
          background: #0c0c0e;
        }

        .hero-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;

          @media (min-width: 1024px) {
            grid-template-columns: 1.15fr 0.95fr;
            gap: 60px;
            align-items: flex-start;
          }
        }

        .hero-main-title {
          font-size: clamp(2.8rem, 5.2vw, 4.8rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin: 0 0 24px 0;
        }

        .blue-word {
          color: #3b82f6;
        }

        .hero-description {
          font-size: 1.05rem;
          color: #a1a1aa;
          line-height: 1.65;
          max-width: 620px;
          margin-bottom: 32px;
        }

        .hero-buttons-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .hero-subnote-box {
          margin-bottom: 28px;
        }

        .platform-tag {
          display: block;
          font-size: 0.68rem;
          color: #71717a;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .recommended-text {
          font-size: 0.84rem;
          color: #a1a1aa;
          line-height: 1.5;
          max-width: 580px;
        }

        .recommended-text strong {
          color: #ffffff;
        }

        .learn-more-link {
          color: #ffffff;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .share-strip {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 14px;
        }

        .share-title {
          color: #71717a;
        }

        .share-link {
          background: transparent;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
          text-decoration: none;
          font-family: inherit;
          font-size: inherit;
          transition: color 0.15s ease;
        }

        .share-link:hover {
          color: #ffffff;
        }

        /* Right Column */
        .hero-right-col {
          display: flex;
          flex-direction: column;
        }

        .hero-right-title-row {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 16px;
        }

        .section-continuity-title {
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .apps-hero-showcase {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 24px;
        }

        .showcase-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.68rem;
          color: #71717a;
          letter-spacing: 0.08em;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 20px;
        }

        .text-blue {
          color: #3b82f6;
        }

        .three-apps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;

          @media (max-width: 640px) {
            grid-template-columns: 1fr;
          }
        }

        .hero-app-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 20px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-app-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(59, 130, 246, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7), 0 0 20px rgba(59, 130, 246, 0.2);
        }

        .hero-icon-squircle {
          width: 78px;
          height: 78px;
          border-radius: 20px;
          overflow: hidden;
          background: #18181f;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-app-meta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .hero-app-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .hero-app-cat {
          font-size: 0.6rem;
          color: #71717a;
          letter-spacing: 0.06em;
          line-height: 1.3;
        }

        .hero-app-card:hover .hero-app-cat {
          color: #a1a1aa;
        }
      `}</style>
    </section>
  );
}
