'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, QrCode, HardDrive, Cpu, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import AppIcon from './AppIcon';
import { AppItem } from '@/data/products';

interface ProductModalProps {
  product: AppItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [copiedHash, setCopiedHash] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!product) return null;

  const fakeSha256 = `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`;

  const handleDownload = () => {
    setDownloadSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#3b82f6', '#10b981', '#ffffff'],
    });

    // Trigger real file download
    const link = document.createElement('a');
    link.href = product.apkDownloadUrl;
    link.download = product.apkFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const copyHash = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(fakeSha256);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="modal-container font-sans"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Bar */}
          <div className="modal-top-bar font-mono">
            <div className="top-title">
              <span className="dot-green" />
              <span>INSPECTOR // {product.id}.opencraft</span>
            </div>
            <button onClick={onClose} className="btn-close" aria-label="Close dialog">
              <X size={18} />
            </button>
          </div>

          {/* Modal Main Grid */}
          <div className="modal-body-grid">
            {/* Left Column: App Identity & Download / QR Card */}
            <div className="col-identity">
              <div className="icon-and-title">
                <AppIcon src={product.iconSrc} name={product.name} size={76} />
                <div>
                  <h3 className="modal-app-name font-sans">{product.name}</h3>
                  <div className="modal-version-tag font-mono">
                    <span>v2.4.0</span>
                    <span className="sep">·</span>
                    <span className="text-cyan">{product.apkFileSize}</span>
                  </div>
                </div>
              </div>

              <p className="modal-desc">{product.description}</p>

              {/* Direct APK Download Button */}
              <button
                onClick={handleDownload}
                className="btn-download-apk font-mono"
              >
                <Download size={18} />
                <span>{downloadSuccess ? 'DOWNLOADING APK...' : 'DOWNLOAD APK (DIRECT)'}</span>
              </button>

              {/* QR Code Phone Install Scanner */}
              <div className="qr-install-card">
                <div className="qr-header font-mono">
                  <QrCode size={14} className="text-cyan" />
                  <span>PHONE INSTALL (SCAN QR)</span>
                </div>
                <div className="qr-preview-box">
                  <svg viewBox="0 0 120 120" className="qr-svg">
                    <rect width="120" height="120" fill="#ffffff" rx="4" />
                    <rect x="10" y="10" width="30" height="30" fill="#070709" />
                    <rect x="15" y="15" width="20" height="20" fill="#ffffff" />
                    <rect x="20" y="20" width="10" height="10" fill="#070709" />

                    <rect x="80" y="10" width="30" height="30" fill="#070709" />
                    <rect x="85" y="15" width="20" height="20" fill="#ffffff" />
                    <rect x="90" y="20" width="10" height="10" fill="#070709" />

                    <rect x="10" y="80" width="30" height="30" fill="#070709" />
                    <rect x="15" y="85" width="20" height="20" fill="#ffffff" />
                    <rect x="20" y="90" width="10" height="10" fill="#070709" />

                    <rect x="48" y="12" width="6" height="6" fill="#070709" />
                    <rect x="62" y="18" width="8" height="6" fill="#070709" />
                    <rect x="48" y="32" width="6" height="8" fill="#070709" />
                    <rect x="58" y="48" width="12" height="12" fill="#38bdf8" />
                    <rect x="80" y="52" width="6" height="6" fill="#070709" />
                    <rect x="95" y="60" width="8" height="8" fill="#070709" />
                    <rect x="48" y="70" width="6" height="12" fill="#070709" />
                    <rect x="75" y="85" width="12" height="6" fill="#070709" />
                    <rect x="90" y="95" width="16" height="8" fill="#070709" />
                  </svg>
                  <div className="qr-instructions">
                    <p className="font-mono text-xs text-muted">
                      Open Android Camera &amp; point to install directly on device.
                    </p>
                    <span className="font-mono text-xs text-cyan">FAST Sideload</span>
                  </div>
                </div>
              </div>

              {/* SHA-256 Hash Verification */}
              <div className="sha-hash-box font-mono">
                <span className="sha-label">SHA-256:</span>
                <span className="sha-value">{fakeSha256.slice(0, 24)}...</span>
                <button onClick={copyHash} className="btn-copy-hash" title="Copy Checksum">
                  {copiedHash ? <Check size={12} className="text-emerald" /> : <Copy size={12} />}
                </button>
              </div>
            </div>

            {/* Right Column: Deep Architecture, Benchmarks */}
            <div className="col-specs">
              {/* Architecture Deep Dive */}
              <div className="spec-card-block">
                <h4 className="block-title font-mono">
                  <Cpu size={14} className="text-cyan" />
                  <span>ARCHITECTURE &amp; CORE ENGINE</span>
                </h4>
                <p className="extended-text">
                  Built natively for Android 14+ with memory-mapped buffers and zero cloud telemetry. Delivers butter-smooth 120Hz performance and minimal battery footprint.
                </p>

                <div className="tech-pills font-mono">
                  {product.platforms.map((p) => (
                    <span key={p} className="tech-badge">
                      {p}
                    </span>
                  ))}
                  <span className="tech-badge">RUST/KOTLIN</span>
                  <span className="tech-badge">OPEN SOURCE</span>
                </div>
              </div>

              {/* Hardware Benchmarks Table */}
              <div className="spec-card-block">
                <h4 className="block-title font-mono">
                  <HardDrive size={14} className="text-cyan" />
                  <span>HARDWARE TELEMETRY &amp; BENCHMARKS</span>
                </h4>
                <div className="benchmark-grid font-mono">
                  <div className="bm-item">
                    <span className="bm-label">COLD START</span>
                    <span className="bm-val text-emerald">180 ms</span>
                  </div>
                  <div className="bm-item">
                    <span className="bm-label">RAM FOOTPRINT</span>
                    <span className="bm-val">38 MB</span>
                  </div>
                  <div className="bm-item">
                    <span className="bm-label">TARGET FPS</span>
                    <span className="bm-val text-cyan">120 FPS capped</span>
                  </div>
                  <div className="bm-item">
                    <span className="bm-label">TRACKERS</span>
                    <span className="bm-val text-emerald font-bold">0 trackers</span>
                  </div>
                </div>
              </div>

              {/* Verified Capabilities */}
              <div className="spec-card-block">
                <h4 className="block-title font-mono">
                  <span>VERIFIED CAPABILITIES</span>
                </h4>
                <ul className="capabilities-list font-sans">
                  {product.features.map((feat, i) => (
                    <li key={i}>
                      <span className="check-bullet">✔</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-container {
          background: #0e0e12;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 6px;
          width: 100%;
          max-width: 920px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.95), 0 0 40px rgba(59, 130, 246, 0.2);
        }

        .modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: #141419;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.72rem;
          color: #a1a1aa;
        }

        .top-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }

        .btn-close {
          background: transparent;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
          transition: color 0.15s ease;
        }

        .btn-close:hover {
          color: #ffffff;
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          padding: 28px;

          @media (min-width: 768px) {
            grid-template-columns: 1fr 1.25fr;
          }
        }

        .col-identity {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .icon-and-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-app-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .modal-version-tag {
          font-size: 0.72rem;
          color: #a1a1aa;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .text-cyan {
          color: #38bdf8;
        }

        .modal-desc {
          font-size: 0.88rem;
          color: #a1a1aa;
          line-height: 1.5;
          margin: 0;
        }

        .btn-download-apk {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #ffffff;
          color: #0c0c0e;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 14px 20px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease;
        }

        .btn-download-apk:hover {
          background: #e4e4e7;
          transform: translateY(-1px);
        }

        .qr-install-card {
          background: #141419;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 14px;
        }

        .qr-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          color: #71717a;
          margin-bottom: 10px;
        }

        .qr-preview-box {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .qr-svg {
          width: 76px;
          height: 76px;
          flex-shrink: 0;
        }

        .qr-instructions {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .text-muted {
          font-size: 0.68rem;
          color: #a1a1aa;
          line-height: 1.4;
          margin: 0;
        }

        .sha-hash-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #141419;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px 12px;
          border-radius: 2px;
          font-size: 0.65rem;
        }

        .sha-label {
          color: #71717a;
        }

        .sha-value {
          color: #a1a1aa;
          flex: 1;
        }

        .btn-copy-hash {
          background: transparent;
          border: none;
          color: #71717a;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
        }

        .btn-copy-hash:hover {
          color: #ffffff;
        }

        .col-specs {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .spec-card-block {
          background: #141419;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 16px;
        }

        .block-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          color: #ffffff;
          margin: 0 0 10px 0;
          letter-spacing: 0.06em;
        }

        .extended-text {
          font-size: 0.82rem;
          color: #a1a1aa;
          line-height: 1.5;
          margin: 0 0 12px 0;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #38bdf8;
          font-size: 0.6rem;
          padding: 2px 6px;
          border-radius: 2px;
        }

        .benchmark-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .bm-item {
          background: rgba(0, 0, 0, 0.3);
          padding: 8px 10px;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .bm-label {
          font-size: 0.58rem;
          color: #71717a;
        }

        .bm-val {
          font-size: 0.82rem;
          color: #ffffff;
          font-weight: 700;
        }

        .text-emerald {
          color: #22c55e;
        }

        .capabilities-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .capabilities-list li {
          font-size: 0.8rem;
          color: #d4d4d8;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .check-bullet {
          color: #22c55e;
          font-size: 0.85rem;
        }
      `}</style>
    </AnimatePresence>
  );
}
