'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Cpu, Shield, ArrowUpRight } from 'lucide-react';
import ProductIcon from './ProductIcon';
import { Product } from '@/data/products';
import { playHoverTick, playGeometricClick } from '@/utils/audio';

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (p: Product) => void;
  onDirectDownload: (p: Product) => void;
}

export default function ProductCard({ product, index, onSelect, onDirectDownload }: ProductCardProps) {
  const numFormatted = String(index + 1).padStart(2, '0');

  return (
    <article
      className="product-card geo-border glow-card"
      data-cursor="INSPECT"
      onMouseEnter={playHoverTick}
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      aria-label={`Inspect ${product.name}`}
    >
      {/* Card Header Coordinate */}
      <div className="card-top-bar font-mono">
        <div className="top-index-group">
          <span className="card-idx">{numFormatted}</span>
          <span className="card-cat-label">{product.categoryLabel.toUpperCase()}</span>
        </div>
        <div className="card-apk-badge">
          <span className="badge-tag badge-cyan">{product.apkSize}</span>
        </div>
      </div>

      {/* Simulated Device Screen Mockup / Interactive Placeholder */}
      <div className="mockup-frame">
        {/* Placeholder UI Grid / Canvas */}
        <div className="mockup-content">
          <div className="mockup-header-bar">
            <span className="mockup-dot red" />
            <span className="mockup-dot yellow" />
            <span className="mockup-dot green" />
            <span className="mockup-title font-mono">{product.packageId}</span>
          </div>

          {/* Generative Visual Canvas Preview tailored to the app type */}
          <div className="mockup-preview-area">
            {product.iconType === 'document' && (
              <div className="preview-canvas doc-preview">
                <div className="preview-line long accent" />
                <div className="preview-line short" />
                <div className="preview-line medium" />
                <div className="preview-grid-box" />
              </div>
            )}
            {product.iconType === 'camera' && (
              <div className="preview-canvas photo-preview">
                <div className="photo-wave-art" />
                <div className="photo-reticle-box" />
              </div>
            )}
            {product.iconType === 'cpu' && (
              <div className="preview-canvas cpu-preview">
                <div className="cpu-trace-line" />
                <span className="cpu-code font-mono text-xs">$ cargo ndk build --target aarch64</span>
              </div>
            )}
            {product.iconType === 'vector' && (
              <div className="preview-canvas vector-preview">
                <div className="bezier-curve-anim" />
                <div className="bezier-node n1" />
                <div className="bezier-node n2" />
              </div>
            )}
            {product.iconType === 'notes' && (
              <div className="preview-canvas notes-preview">
                <span className="notes-tag font-mono text-xs"># [[Architecture]] &gt;&gt; [[Rust]]</span>
                <div className="notes-graph-ring" />
              </div>
            )}
            {product.iconType === 'audio' && (
              <div className="preview-canvas audio-preview">
                <div className="audio-wave-anim" />
              </div>
            )}
            {product.iconType === 'radar' && (
              <div className="preview-canvas radar-preview">
                <div className="radar-sweep-anim" />
                <span className="font-mono text-xs text-cyan">FPS: 120.0 · JANK: 0</span>
              </div>
            )}
            {product.iconType === 'folder' && (
              <div className="preview-canvas folder-preview">
                <div className="split-pane left font-mono text-xs">/storage/emulated/0</div>
                <div className="split-pane right font-mono text-xs">/system/bin (RO)</div>
              </div>
            )}

            {/* Subtle Grid Lines & Corner ticks */}
            <div className="canvas-grid-lines" />
          </div>
        </div>

        {/* Floating App Squircle Icon overlapping bottom of preview */}
        <div className="card-floating-icon">
          <ProductIcon type={product.iconType} size={64} accent={product.accentColor} />
        </div>
      </div>

      {/* Product Details */}
      <div className="card-body">
        <div className="title-row">
          <h3 className="product-title font-display">{product.name}</h3>
          <span className="version-pill font-mono">{product.version}</span>
        </div>

        <p className="product-tagline">{product.tagline}</p>

        {/* Platform & Status Tags */}
        <div className="tags-row">
          <span className={`badge-tag badge-${product.statusColor}`}>{product.status}</span>
          <span className="badge-tag">ANDROID 14+</span>
          <span className="badge-tag">{product.architecture.split(' ')[0]}</span>
        </div>

        {/* Card Footer Actions */}
        <div className="card-footer-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              playGeometricClick(850, 0.03, 'sine');
              onSelect(product);
            }}
            className="explore-link"
          >
            <span>INSPECT SPECS</span>
            <ArrowUpRight size={14} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              playGeometricClick(950, 0.04, 'triangle');
              onDirectDownload(product);
            }}
            className="direct-dl-btn"
            title={`Download ${product.name} APK`}
          >
            <Download size={14} />
            <span className="font-mono text-xs">APK</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          display: flex;
          flex-direction: column;
          background: #0f0f14;
          cursor: pointer;
          border-radius: 4px;
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
        }

        .top-index-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-idx {
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(56, 189, 248, 0.1);
          padding: 2px 6px;
          border-radius: 2px;
        }

        .card-cat-label {
          font-size: 0.65rem;
          color: #a1a1aa;
          letter-spacing: 0.08em;
        }

        .mockup-frame {
          position: relative;
          height: 190px;
          background: #08080c;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          overflow: visible;
        }

        .mockup-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .mockup-header-bar {
          height: 24px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 10px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .mockup-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .mockup-dot.red { background: #ef4444; }
        .mockup-dot.yellow { background: #f59e0b; }
        .mockup-dot.green { background: #10b981; }

        .mockup-title {
          font-size: 0.62rem;
          color: #71717a;
          margin-left: 6px;
        }

        .mockup-preview-area {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 80%);
        }

        .preview-canvas {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .doc-preview .preview-line {
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 8px;
        }
        .doc-preview .preview-line.long { width: 85%; }
        .doc-preview .preview-line.short { width: 45%; }
        .doc-preview .preview-line.medium { width: 65%; }
        .doc-preview .preview-line.accent { background: rgba(56, 189, 248, 0.4); }

        .photo-wave-art {
          width: 100%;
          height: 60px;
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.2), rgba(168, 85, 247, 0.2));
          border: 1px dashed rgba(244, 63, 94, 0.4);
          border-radius: 4px;
        }

        .cpu-preview {
          background: rgba(245, 158, 11, 0.05);
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 8px;
          border-radius: 3px;
        }

        .vector-preview {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bezier-curve-anim {
          width: 80%;
          height: 2px;
          background: #a855f7;
          box-shadow: 0 0 10px #a855f7;
        }

        .audio-preview {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .audio-wave-anim {
          width: 90%;
          height: 36px;
          background-image: repeating-linear-gradient(90deg, #06b6d4 0px, #06b6d4 3px, transparent 3px, transparent 8px);
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }

        .radar-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .folder-preview {
          display: flex;
          gap: 8px;
        }
        .split-pane {
          flex: 1;
          padding: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 3px;
          color: #a1a1aa;
        }

        .canvas-grid-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .card-floating-icon {
          position: absolute;
          left: 18px;
          bottom: -24px;
          z-index: 10;
        }

        .card-body {
          padding: 34px 18px 18px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .product-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .version-pill {
          font-size: 0.65rem;
          color: #71717a;
          background: rgba(255, 255, 255, 0.04);
          padding: 2px 6px;
          border-radius: 2px;
        }

        .product-tagline {
          font-size: 0.84rem;
          color: #a1a1aa;
          line-height: 1.45;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.45em;
        }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .card-footer-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: auto;
        }

        .explore-link {
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: $font-mono;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 0;
        }

        .explore-link:hover {
          color: #38bdf8;
        }

        .direct-dl-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          padding: 5px 10px;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .direct-dl-btn:hover {
          background: #38bdf8;
          color: #070709;
        }
      `}</style>
    </article>
  );
}
