'use client';

import React, { useState } from 'react';
import { Download, ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import AppIcon from './AppIcon';
import { AppItem, APPS } from '@/data/products';
import { GithubIcon } from './Icons';
import GlidingSectionTitle from './GlidingSectionTitle';

interface AppDetailPageProps {
  app: AppItem;
  onBack: () => void;
  onSelectApp: (app: AppItem) => void;
  onNavigateToDownload: (app: AppItem) => void;
}

export default function AppDetailPage({ app, onBack, onSelectApp, onNavigateToDownload }: AppDetailPageProps) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // App-specific highlights matching reference
  const getAppHighlights = (appId: string) => {
    if (appId === 'eagle-share') {
      return [
        { num: '01', title: 'Local Wi-Fi & WebRTC', desc: 'Direct peer-to-peer transmission over local hotspot, Wi-Fi LAN, and WebRTC with zero intermediary servers.' },
        { num: '02', title: 'Up to 50 MB/s speed', desc: 'Memory-mapped socket buffers engineered for raw transfer speeds across smartphones and PCs.' },
        { num: '03', title: 'Cross-platform WebShare', desc: 'Send to any desktop browser or device with built-in instant local web receiver.' },
        { num: '04', title: 'End-to-end encrypted', desc: 'Cryptographically verified local device handshake ensures complete data privacy.' },
        { num: '05', title: 'Zero file size limits', desc: 'Send large 4K video files, RAW archives, and full backup directory trees with zero throttling.' },
        { num: '06', title: 'Open source & private', desc: 'Zero cloud telemetry, no account login required, and zero analytics tracking.' },
      ];
    } else if (appId === 'pigeon-music') {
      return [
        { num: '01', title: 'Bit-perfect audio engine', desc: 'Direct hardware audio output routing supporting 24-bit / 192kHz Hi-Res FLAC, ALAC, WAV, and MP3.' },
        { num: '02', title: '10-Band parametric EQ', desc: 'Studio equalizer with precision decibel gain curves, bass boost, and custom reverb profiles.' },
        { num: '03', title: 'Synchronized LRC lyrics', desc: 'Real-time smooth scrolling synced lyrics display with typography scaling and translations.' },
        { num: '04', title: 'Dynamic Material You', desc: 'Adaptive color theme extracted dynamically from lossless album artwork with buttery transitions.' },
        { num: '05', title: 'Pure audio sanctuary', desc: 'Zero advertisements, zero subscriptions, zero background battery drain.' },
        { num: '06', title: 'ID3 metadata editor', desc: 'Direct on-device editing of song tags, artist metadata, album artwork, and lyric files.' },
      ];
    } else {
      return [
        { num: '01', title: 'Local clipboard sync', desc: 'Instant encrypted clipboard synchronization between your Android smartphone and desktop workstation.' },
        { num: '02', title: 'Notification bridge', desc: 'Read and reply to mobile phone alerts directly from your desktop workstation monitor.' },
        { num: '03', title: 'Media playback handoff', desc: 'Control smartphone audio playback and volume directly using PC keyboard media keys.' },
        { num: '04', title: 'Zero-config pairing', desc: 'Instant local network peer discovery using mDNS multicast on your Wi-Fi network.' },
        { num: '05', title: 'Zero cloud storage', desc: 'Your private clipboard data never touches any external cloud server.' },
        { num: '06', title: 'Ultra-lightweight', desc: 'Minimal socket background polling optimized for all-day battery life.' },
      ];
    }
  };

  const highlights = getAppHighlights(app.id);
  const screenshots = app.screenshots || [];
  const currentScreenshot = screenshots[activeScreenshotIdx] || screenshots[0];

  return (
    <div className="app-detail-page font-sans">
      <div className="artcraft-container">
        {/* 1. Sub-Header Marker Bar */}
        <div className="sub-header-marker-bar">
          <div className="marker-left font-mono">
            <button onClick={onBack} className="btn-back-link font-mono" aria-label="Back to lineup">
              <ArrowLeft size={14} />
              <span>ALL APPS</span>
            </button>
            <span className="sep-slash">/</span>
            <span className="text-white font-bold">{app.categoryNumber} · {app.name.toUpperCase()}</span>
          </div>
          <div className="marker-right-spec font-mono">
            <span>{app.categoryName} · {app.status}</span>
          </div>
        </div>

        {/* 2. App Hero */}
        <section id="detail-hero" className="app-hero-center">
          <div className="app-hero-icon-block">
            <AppIcon src={app.iconSrc} name={app.name} size={90} />
            <div className="app-id-pill font-mono">
              <span className="pill-num">{app.categoryNumber}</span>
              <span>{app.name}</span>
            </div>
          </div>

          <h1 className="app-hero-title">
            The {app.name} you<br />
            already <span className="blue-word">know</span> how to<br />
            use.
          </h1>

          <p className="app-hero-description">
            {app.description}
          </p>

          <div className="app-hero-btn-row">
            <button
              onClick={() => onNavigateToDownload(app)}
              className="btn-artcraft-white btn-hero-dl"
            >
              <Download size={15} />
              <span>DOWNLOAD APK ({app.apkFileSize})</span>
            </button>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="btn-artcraft-dark"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
            <span>FOR ANDROID 14+ · APK DIRECT &amp; F-DROID RELEASES</span>
            <span className="text-gray">OPEN SOURCE · ZERO TRACKERS · NO SUBSCRIPTIONS</span>
          </div>
        </section>

        {/* 3. Section 02: Screenshots Gallery in Native Smartphone 9:19.5 Aspect Ratio */}
        <section id="detail-screenshots" className="app-screenshots-section">
          <div className="sub-header-marker-bar">
            <div className="marker-left font-mono">
              <span>02 / SCREENSHOTS</span>
            </div>
            <div className="marker-right-spec font-mono">
              <span>CAPTURED IN {app.name.toUpperCase()} · ANDROID 15</span>
            </div>
          </div>

          <div className="screenshots-header-flex">
            <div className="screenshots-sub-intro font-sans">
              <span className="font-mono text-xs text-blue">PORTRAIT ASPECT RATIO (9:19.5)</span>
              <h3 className="screenshots-main-heading">Live Device Captures</h3>
            </div>
            <GlidingSectionTitle text="SCREENSHOTS" />
          </div>

          {/* Screenshot Showcase Container */}
          <div className="screenshots-studio-container">
            {/* Left: Interactive Selector Tabs */}
            <div className="screenshots-selector-col font-sans">
              <span className="selector-group-label font-mono">SELECT SCREENSHOT ({screenshots.length} CAPTURES)</span>
              <div className="selector-list">
                {screenshots.map((s, idx) => {
                  const isActive = activeScreenshotIdx === idx;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`selector-item-btn ${isActive ? 'active-item' : ''}`}
                    >
                      <span className="selector-num font-mono">0{idx + 1}</span>
                      <div className="selector-text-wrap">
                        <span className="selector-item-title">{s.title}</span>
                        <span className="selector-item-sub">{s.subtitle}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {currentScreenshot && (
                <div className="screenshot-actions-box">
                  <a
                    href={currentScreenshot.src}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-view-fullsize font-mono"
                  >
                    <span>VIEW FULL RESOLUTION</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>

            {/* Right: Modern Smartphone Mockup in Exact 9:19.5 Ratio */}
            <div className="screenshots-device-col">
              <div className="smartphone-bezel-frame">
                {/* Smartphone Punchhole Camera */}
                <div className="smartphone-punchhole" />

                {/* Screenshot Image in Native Aspect Ratio */}
                {currentScreenshot ? (
                  <img
                    src={currentScreenshot.src}
                    alt={currentScreenshot.title}
                    className="smartphone-screen-img"
                  />
                ) : (
                  <div className="smartphone-empty">No screenshot</div>
                )}

                {/* Glass reflection gradient */}
                <div className="smartphone-glare-overlay" />
              </div>

              {currentScreenshot && (
                <div className="screenshot-caption-pill font-mono">
                  <span>{currentScreenshot.title}</span>
                </div>
              )}
            </div>
          </div>

          {/* Horizontal Thumbnails Strip in 9:19.5 Ratio */}
          <div className="screenshots-thumbnails-strip">
            {screenshots.map((s, idx) => {
              const isActive = activeScreenshotIdx === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveScreenshotIdx(idx)}
                  className={`thumbnail-card ${isActive ? 'active-thumb' : ''}`}
                  title={s.title}
                >
                  <div className="thumb-img-wrapper">
                    <img src={s.src} alt={s.title} className="thumb-img" />
                  </div>
                  <span className="thumb-label font-mono">0{idx + 1} · {s.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. Section 03: What's inside. (03 / HIGHLIGHTS) */}
        <section id="detail-highlights" className="app-highlights-section">
          <div className="sub-header-marker-bar">
            <div className="marker-left font-mono">
              <span>03 / HIGHLIGHTS</span>
            </div>
            <div className="marker-right-spec font-mono">
              <span>{app.name.toUpperCase()} · ARCHITECTURE</span>
            </div>
          </div>

          <div className="highlights-header-flex font-sans">
            <h2 className="highlights-title">
              What&apos;s inside<span className="blue-dot">.</span>
            </h2>
            <GlidingSectionTitle text="HIGHLIGHTS" />
          </div>

          <div className="highlights-bento-grid font-sans">
            {highlights.map((item) => (
              <div key={item.num} className="bento-highlight-box">
                <span className="bento-item-num font-mono">{item.num}</span>
                <h3 className="bento-item-title">{item.title}</h3>
                <p className="bento-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Section 04: GET IT with Generous Vertical Gaps & Real APK Modal Launcher */}
        <section id="detail-getit" className="app-getit-section">
          <div className="sub-header-marker-bar">
            <div className="marker-left font-mono">
              <span>04 / GET IT</span>
            </div>
            <div className="marker-right-spec font-mono">
              <span>APK DIRECT · SHA-256 VERIFIED</span>
            </div>
          </div>

          <div className="getit-box font-sans">
            <div className="getit-header-flex">
              <div>
                <h2 className="getit-title">Download {app.name}<span className="blue-dot">.</span></h2>
                <p className="getit-desc">
                  {app.id === 'eagle-share'
                    ? 'Fast, high-speed peer-to-peer file transfer over local Wi-Fi, Hotspot, and WebRTC with zero cloud limits, zero trackers, and no subscriptions.'
                    : app.id === 'pigeon-music'
                    ? 'Modern offline Hi-Fi music player with 10-band studio equalizer and synchronized LRC lyrics. 100% free and open source.'
                    : 'Unified Android-to-PC ecosystem bridge with real-time clipboard sync and notification mirror.'}
                </p>
              </div>
              <GlidingSectionTitle text="GET IT" />
            </div>

            {/* Action Buttons Row with Generous Margins */}
            <div className="getit-btn-row">
              <button
                onClick={() => onNavigateToDownload(app)}
                className="btn-artcraft-white btn-getit-large"
              >
                <Download size={16} />
                <span>INSPECT &amp; DOWNLOAD APK ({app.apkFileSize})</span>
              </button>
              <a
                href={app.apkDownloadUrl}
                download={app.apkFileName}
                className="btn-artcraft-dark btn-getit-large"
              >
                <Download size={15} />
                <span>DIRECT FILE DOWNLOAD</span>
              </a>
              <button onClick={onBack} className="btn-artcraft-dark btn-getit-large">
                <span>← BACK TO ALL APPS</span>
              </button>
            </div>

            {/* Release Specs Grid */}
            <div className="getit-specs-grid font-mono">
              <div className="spec-card">
                <span className="spec-label">PACKAGE NAME</span>
                <span className="spec-value">{app.apkFileName}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">VERSION</span>
                <span className="spec-value">v2.4.0 (Stable)</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">MINIMUM OS</span>
                <span className="spec-value">Android 14+ (API 34)</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">SECURITY</span>
                <span className="spec-value text-green">SHA-256 Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Section 05: THE FAMILY (Sister Apps Switcher) */}
        <section id="detail-family" className="app-family-section">
          <div className="sub-header-marker-bar">
            <div className="marker-left font-mono">
              <span>05 / THE FAMILY</span>
            </div>
            <div className="marker-right-spec font-mono">
              <span>EXPLORE SISTER APPS</span>
            </div>
          </div>

          <div className="family-header-flex">
            <h3 className="family-main-heading font-sans">OpenCraft Family</h3>
            <GlidingSectionTitle text="THE FAMILY" />
          </div>

          <div className="family-cards-grid">
            {APPS.filter((a) => a.id !== app.id).map((other) => (
              <div
                key={other.id}
                className="family-app-card"
                onClick={() => onSelectApp(other)}
                role="button"
                tabIndex={0}
              >
                <div className="family-card-left">
                  <AppIcon src={other.iconSrc} name={other.name} size={60} />
                </div>
                <div className="family-card-right font-sans">
                  <h4 className="family-name">{other.name}</h4>
                  <p className="family-tagline">{other.tagline}</p>
                  <span className="family-link font-mono">
                    <span>EXPLORE {other.name.toUpperCase()}</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .app-detail-page {
          padding-top: 24px;
          padding-bottom: 90px;
          background: #0c0c0e;
        }

        .btn-back-link {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          font-size: inherit;
          font-weight: 700;
          transition: color 0.15s ease;
        }

        .btn-back-link:hover {
          color: #3b82f6;
        }

        .app-hero-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 840px;
          margin: 0 auto 60px auto;
          position: relative;
        }

        .hero-app-title-header {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 24px;
        }

        .section-continuity-title {
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .app-hero-icon-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .app-id-pill {
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

        .pill-num {
          background: #3b82f6;
          color: #ffffff;
          padding: 1px 5px;
          border-radius: 2px;
          font-size: 0.65rem;
        }

        .app-hero-title {
          font-size: clamp(2.6rem, 5.2vw, 4.6rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 22px;
        }

        .blue-word {
          color: #3b82f6;
        }

        .app-hero-description {
          font-size: 1.05rem;
          color: #d4d4d8;
          line-height: 1.65;
          max-width: 640px;
          margin-bottom: 32px;
        }

        .app-hero-btn-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .btn-hero-dl {
          cursor: pointer;
        }

        .platform-footnote {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          color: #a1a1aa;
          letter-spacing: 0.08em;
        }

        /* 3. Screenshots Gallery Section in Native 9:19.5 Aspect Ratio */
        .app-screenshots-section {
          margin-bottom: 80px;
        }

        .screenshots-header-flex {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .screenshots-sub-intro {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .text-blue {
          color: #38bdf8;
        }

        .screenshots-main-heading {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
        }

        .screenshots-studio-container {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 32px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          margin-bottom: 24px;

          @media (min-width: 900px) {
            grid-template-columns: 1.1fr 0.9fr;
            align-items: center;
          }
        }

        .screenshots-selector-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .selector-group-label {
          font-size: 0.68rem;
          color: #71717a;
          letter-spacing: 0.08em;
        }

        .selector-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .selector-item-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 14px 16px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .selector-item-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .selector-item-btn.active-item {
          background: rgba(59, 130, 246, 0.08);
          border-color: #3b82f6;
          box-shadow: 0 0 16px rgba(59, 130, 246, 0.2);
        }

        .selector-num {
          font-size: 0.7rem;
          font-weight: 700;
          color: #3b82f6;
          padding-top: 2px;
        }

        .selector-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .selector-item-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .selector-item-sub {
          font-size: 0.78rem;
          color: #a1a1aa;
          line-height: 1.4;
        }

        .screenshot-actions-box {
          margin-top: 12px;
        }

        .btn-view-fullsize {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 2px;
          font-size: 0.7rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .btn-view-fullsize:hover {
          background: #ffffff;
          color: #0c0c0e;
        }

        .screenshots-device-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Smartphone Frame in True 9:19.5 Aspect Ratio */
        .smartphone-bezel-frame {
          height: 520px;
          aspect-ratio: 766 / 1600;
          background: #000;
          border: 3.5px solid rgba(255, 255, 255, 0.18);
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(59, 130, 246, 0.2);
        }

        .smartphone-punchhole {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.25);
          z-index: 10;
        }

        .smartphone-screen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .smartphone-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #71717a;
        }

        .smartphone-glare-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 40%);
          pointer-events: none;
        }

        .screenshot-caption-pill {
          margin-top: 14px;
          font-size: 0.72rem;
          color: #a1a1aa;
          letter-spacing: 0.06em;
        }

        /* Thumbnails Strip */
        .screenshots-thumbnails-strip {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 12px;
        }

        .thumbnail-card {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .thumbnail-card:hover {
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .thumbnail-card.active-thumb {
          border-color: #3b82f6;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
        }

        .thumb-img-wrapper {
          height: 120px;
          aspect-ratio: 766 / 1600;
          border-radius: 6px;
          overflow: hidden;
          background: #000;
        }

        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .thumb-label {
          font-size: 0.62rem;
          color: #a1a1aa;
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* 4. Highlights Bento */
        .app-highlights-section {
          margin-bottom: 80px;
        }

        .highlights-header-flex {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .highlights-title {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
        }

        .blue-dot {
          color: #3b82f6;
        }

        .highlights-bento-grid {
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

        .bento-highlight-box {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .bento-highlight-box:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .bento-item-num {
          font-size: 0.65rem;
          color: #3b82f6;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .bento-item-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .bento-item-desc {
          font-size: 0.85rem;
          color: #a1a1aa;
          line-height: 1.5;
          margin: 0;
        }

        /* 5. Section 04: GET IT with Generous Vertical Gaps */
        .app-getit-section {
          margin-bottom: 80px;
          padding-top: 10px;
        }

        .getit-box {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 36px 32px;
        }

        .getit-header-flex {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .getit-title {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 1.1;
        }

        .getit-desc {
          font-size: 1.02rem;
          color: #a1a1aa;
          line-height: 1.65;
          max-width: 660px;
          margin: 0;
        }

        .getit-btn-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .btn-getit-large {
          padding: 14px 24px;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .getit-specs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;

          @media (min-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (min-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .spec-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .spec-label {
          font-size: 0.62rem;
          color: #71717a;
          letter-spacing: 0.08em;
        }

        .spec-value {
          font-size: 0.85rem;
          color: #ffffff;
          font-weight: 600;
        }

        .text-green {
          color: #22c55e;
        }

        /* 6. Section 05: THE FAMILY */
        .app-family-section {
          margin-bottom: 60px;
        }

        .family-header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .family-main-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .family-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;

          @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .family-app-card {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .family-app-card:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
        }

        .family-card-right {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .family-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .family-tagline {
          font-size: 0.82rem;
          color: #a1a1aa;
          margin: 0;
          line-height: 1.4;
        }

        .family-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.68rem;
          font-weight: 700;
          color: #3b82f6;
          margin-top: 4px;
        }

        @media (max-width: 640px) {
          .app-hero-btn-row,
          .getit-btn-row {
            flex-direction: column;
            width: 100%;
          }
          .app-hero-btn-row button,
          .app-hero-btn-row a,
          .getit-btn-row button,
          .getit-btn-row a {
            width: 100%;
            justify-content: center;
          }
          .smartphone-bezel-frame {
            height: 420px;
            max-width: calc(420px * 766 / 1600);
            border-radius: 24px;
          }
          .screenshots-studio-container {
            padding: 16px 12px;
            gap: 20px;
          }
          .getit-specs-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .family-cards-grid {
            grid-template-columns: 1fr;
          }
          .sub-header-marker-bar {
            flex-wrap: wrap;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
