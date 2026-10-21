'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { GithubIcon } from './Icons';
import { APPS, AppItem } from '@/data/products';
import GlidingSectionTitle from './GlidingSectionTitle';

interface ArtCraftFooterProps {
  onOpenDownloadModal?: (app: AppItem) => void;
}

export default function ArtCraftFooter({ onOpenDownloadModal }: ArtCraftFooterProps) {
  return (
    <footer id="download" className="opencraft-footer font-sans">
      <div className="artcraft-container">
        {/* Footer Top Marker */}
        <div className="sub-header-marker-bar">
          <div className="marker-left font-mono">
            <span>03 / DOWNLOADS</span>
          </div>
          <div className="marker-right-spec font-mono">
            <span>DIRECT APK · SHA-256 VERIFIED</span>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="footer-content-row">
          <div className="footer-header-flex">
            <div className="footer-left">
              <h2 className="footer-title">
                Open source<span className="blue-dot">.</span> Free forever<span className="blue-dot">.</span>
              </h2>
              <p className="footer-desc">
                All 3 OpenCraft Android applications are written for performance with zero telemetry, no subscriptions, and 100% offline security. Direct APK downloads ready for your devices.
              </p>
            </div>
            <div className="footer-continuity-wrap">
              <GlidingSectionTitle text="DOWNLOAD" id="download-continuity-label" />
            </div>
          </div>

          <div className="footer-btn-group">
            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal(APPS[0]) : window.open('/apks/Eagle-Share.apk')}
              className="btn-artcraft-white"
            >
              <Download size={15} />
              <span>DOWNLOAD EAGLE SHARE APK</span>
            </button>
            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal(APPS[1]) : window.open('/apks/Pegion-Music.apk')}
              className="btn-artcraft-white"
            >
              <Download size={15} />
              <span>DOWNLOAD PIGEON MUSIC APK</span>
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-artcraft-dark"
            >
              <GithubIcon size={15} />
              <span>GITHUB REPOSITORIES</span>
            </a>
          </div>
        </div>

        {/* Direct APK Download Grid for 3 Apps */}
        <div className="apk-downloads-grid font-mono">
          <div className="apk-card">
            <div className="apk-meta">
              <span className="apk-name font-sans">Eagle Share</span>
              <span className="apk-version">v2.4.0 · 1.6 MB · Stable</span>
            </div>
            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal(APPS[0]) : window.open('/apks/Eagle-Share.apk')}
              className="btn-apk-dl"
            >
              <Download size={13} />
              <span>DOWNLOAD APK</span>
            </button>
          </div>

          <div className="apk-card">
            <div className="apk-meta">
              <span className="apk-name font-sans">Pigeon Music</span>
              <span className="apk-version">v1.8.2 · 7.0 MB · Stable</span>
            </div>
            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal(APPS[1]) : window.open('/apks/Pegion-Music.apk')}
              className="btn-apk-dl"
            >
              <Download size={13} />
              <span>DOWNLOAD APK</span>
            </button>
          </div>

          <div className="apk-card">
            <div className="apk-meta">
              <span className="apk-name font-sans">Pigeon Echo</span>
              <span className="apk-version">v1.1.0 · In Development</span>
            </div>
            <button
              onClick={() => onOpenDownloadModal ? onOpenDownloadModal(APPS[2]) : window.open('/apks/Eagle-Share.apk')}
              className="btn-apk-dl"
            >
              <Download size={13} />
              <span>GET PREVIEW</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom-line font-mono">
          <span>OPENCRAFT · BUILT FOR FREEDOM &amp; PERFORMANCE</span>
          <span>ANDROID 14+ · APK DIRECT · F-DROID RELEASES</span>
        </div>
      </div>

      <style jsx>{`
        .opencraft-footer {
          padding-top: 40px;
          padding-bottom: 50px;
          background: #0c0c0e;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-content-row {
          margin-bottom: 36px;
        }

        .footer-header-flex {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .footer-left {
          flex: 1;
          min-width: 280px;
        }

        .section-continuity-title {
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .footer-title {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .blue-dot {
          color: #3b82f6;
        }

        .footer-desc {
          font-size: 1rem;
          color: #a1a1aa;
          max-width: 600px;
          line-height: 1.6;
          margin: 0;
        }

        .footer-btn-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .apk-downloads-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 40px;

          @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .apk-card {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .apk-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .apk-name {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .apk-version {
          font-size: 0.65rem;
          color: #71717a;
        }

        .btn-apk-dl {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 8px 12px;
          border-radius: 2px;
          font-size: 0.68rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .btn-apk-dl:hover {
          background: #ffffff;
          color: #0c0c0e;
        }

        .footer-bottom-line {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.65rem;
          color: #71717a;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 20px;
          letter-spacing: 0.08em;
        }
      `}</style>
    </footer>
  );
}
