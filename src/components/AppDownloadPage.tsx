'use client';

import React, { useState } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import AppIcon from './AppIcon';
import { AppItem, APPS } from '@/data/products';

interface AppDownloadPageProps {
  app: AppItem;
  onBack: () => void;
  onBackToHome: () => void;
  onSelectApp: (app: AppItem) => void;
}

export default function AppDownloadPage({ app, onBack, onBackToHome, onSelectApp }: AppDownloadPageProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#38bdf8', '#3b82f6', '#10b981', '#ffffff'],
    });

    const link = document.createElement('a');
    link.href = app.apkDownloadUrl;
    link.download = app.apkFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="app-download-page font-sans">
      <div className="artcraft-container">
        {/* Top Marker Bar */}
        <div className="sub-header-marker-bar">
          <div className="marker-left font-mono">
            <button onClick={onBack} className="btn-back-link" aria-label="Back to app">
              <ArrowLeft size={14} />
              <span>BACK TO {app.name.toUpperCase()}</span>
            </button>
            <span className="sep-slash">/</span>
            <button onClick={onBackToHome} className="btn-back-link text-muted" aria-label="Back to all apps">
              <span>ALL APPS</span>
            </button>
          </div>
          <div className="marker-right-spec font-mono">
            <span>{app.name.toUpperCase()} · ANDROID 14+ · APK DIRECT</span>
          </div>
        </div>

        {/* Clean Centered Download Showcase Container */}
        <div className="download-center-wrapper">
          {/* App Header Box */}
          <div className="download-hero-card">
            <div className="app-icon-badge-row">
              <AppIcon src={app.iconSrc} name={app.name} size={90} />
              <div className="app-meta-tags font-mono">
                <span className="meta-pill-cat">{app.categoryNumber}</span>
                <span className="meta-pill-status">{app.status}</span>
              </div>
            </div>

            <h1 className="download-title">Download {app.name}<span className="blue-dot">.</span></h1>

            <p className="download-description">
              {app.description}
            </p>

            {/* Direct Action Buttons */}
            <div className="download-buttons-group">
              <button
                onClick={handleDownload}
                className="btn-download-main font-sans"
              >
                <Download size={18} />
                <span>{downloadSuccess ? 'DOWNLOADING APK...' : `DOWNLOAD ${app.name.toUpperCase()} APK (${app.apkFileSize})`}</span>
              </button>

              <button onClick={onBack} className="btn-back-main font-sans">
                <span>← BACK TO APP DETAILS</span>
              </button>
            </div>

            <div className="file-sub-info font-mono">
              <span>FILE: {app.apkFileName} ({app.apkFileSize})</span>
              <a href={app.apkDownloadUrl} download={app.apkFileName} className="direct-link">
                DIRECT BROWSER LINK
              </a>
            </div>
          </div>



          {/* Sister Apps Quick Switcher */}
          <div className="other-apps-bar font-mono">
            <span className="other-apps-label">DOWNLOAD OTHER OPENCRAFT APPS:</span>
            <div className="other-apps-list">
              {APPS.filter((a) => a.id !== app.id).map((other) => (
                <button
                  key={other.id}
                  onClick={() => onSelectApp(other)}
                  className="btn-other-app"
                >
                  <AppIcon src={other.iconSrc} name={other.name} size={24} />
                  <span>{other.name.toUpperCase()}</span>
                  <span className="text-muted">({other.apkFileSize})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .app-download-page {
          min-height: 100vh;
          background: #0c0c0e;
          padding-top: 24px;
          padding-bottom: 90px;
        }

        .btn-back-link {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          font-size: 0.72rem;
          font-weight: 700;
          transition: color 0.15s ease;
          padding: 0;
        }

        .btn-back-link:hover {
          color: #3b82f6;
        }

        .sep-slash {
          color: rgba(255, 255, 255, 0.25);
          margin: 0 4px;
        }

        .text-muted {
          color: #71717a;
        }

        .text-cyan {
          color: #38bdf8;
        }

        .text-emerald {
          color: #22c55e;
        }

        .blue-dot {
          color: #3b82f6;
        }

        .download-center-wrapper {
          max-width: 920px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .download-hero-card {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        @media (max-width: 640px) {
          .download-hero-card {
            padding: 24px 16px;
          }
        }

        .app-icon-badge-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .app-meta-tags {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .meta-pill-cat {
          background: #3b82f6;
          color: #ffffff;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 2px;
        }

        .meta-pill-status {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #a1a1aa;
          font-size: 0.65rem;
          padding: 2px 7px;
          border-radius: 2px;
          letter-spacing: 0.06em;
        }

        .download-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 14px 0;
        }

        .download-description {
          font-size: 1.02rem;
          color: #a1a1aa;
          line-height: 1.6;
          max-width: 640px;
          margin: 0 0 28px 0;
        }

        .download-buttons-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 100%;
          max-width: 580px;
          margin-bottom: 18px;
        }

        @media (max-width: 640px) {
          .download-buttons-group {
            flex-direction: column;
          }
        }

        .btn-download-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #ffffff;
          color: #0c0c0e;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 16px 24px;
          border: 1px solid #ffffff;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
        }

        .btn-download-main:hover {
          background: #e4e4e7;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(255, 255, 255, 0.2);
        }

        .btn-back-main {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #18181f;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 16px 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          width: 100%;
        }

        @media (min-width: 641px) {
          .btn-back-main {
            width: auto;
          }
        }

        .btn-back-main:hover {
          background: #22222b;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .file-sub-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-size: 0.7rem;
          color: #71717a;
          flex-wrap: wrap;
        }

        .direct-link {
          color: #38bdf8;
          text-decoration: underline;
        }

        /* 2-Column Sideload Details Grid */
        .sideload-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;

          @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
          }
        }

        .sideload-card {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: #ffffff;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .qr-content-flex {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .qr-box {
          width: 96px;
          height: 96px;
          flex-shrink: 0;
          background: #ffffff;
          padding: 6px;
          border-radius: 4px;
        }

        .qr-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .qr-steps-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .qr-step-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          color: #a1a1aa;
        }

        .step-badge {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          padding: 2px 6px;
          border-radius: 2px;
          font-size: 0.62rem;
          font-weight: 700;
        }

        .btn-copy-hash {
          background: transparent;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: inherit;
          font-size: 0.68rem;
          font-weight: 700;
          transition: color 0.15s ease;
        }

        .btn-copy-hash:hover {
          color: #ffffff;
        }

        .hash-code-pill {
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 2px;
          padding: 10px 12px;
          font-size: 0.68rem;
          color: #38bdf8;
          word-break: break-all;
        }

        .release-specs-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 12px;
        }

        .spec-unit {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .spec-unit-label {
          font-size: 0.58rem;
          color: #71717a;
          letter-spacing: 0.08em;
        }

        .spec-unit-val {
          font-size: 0.78rem;
          color: #ffffff;
          font-weight: 700;
        }

        /* Other apps strip */
        .other-apps-bar {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .other-apps-label {
          font-size: 0.68rem;
          color: #71717a;
          letter-spacing: 0.08em;
        }

        .other-apps-list {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn-other-app {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 2px;
          font-family: inherit;
          font-size: 0.68rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.15s ease;
        }

        .btn-other-app:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #3b82f6;
          color: #38bdf8;
        }
      `}</style>
    </div>
  );
}
