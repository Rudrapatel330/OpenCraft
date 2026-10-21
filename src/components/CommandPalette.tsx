'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Smartphone, Terminal, Volume2, ArrowRight, X } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { playGeometricClick, toggleSound } from '@/utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
  onOpenTerminal: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProduct,
  onOpenTerminal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredApps = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelect = (product: Product) => {
    playGeometricClick(900, 0.03, 'sine');
    onSelectProduct(product);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="palette-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="palette-window geo-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input Bar */}
          <div className="search-bar">
            <Search size={18} className="search-icon text-cyan" />
            <input
              type="text"
              autoFocus
              placeholder="Search native apps, NDK, APKs, commands..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              className="palette-input font-mono"
            />
            <button onClick={onClose} className="palette-close">
              <X size={16} />
            </button>
          </div>

          {/* Quick Actions List */}
          <div className="palette-results">
            {/* Apps section */}
            <div className="group-label font-mono">NATIVE ANDROID APKS ({filteredApps.length})</div>
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => handleSelect(app)}
                className="result-item"
              >
                <div className="item-left">
                  <Smartphone size={16} className="text-cyan" />
                  <div>
                    <span className="item-name font-display">{app.name}</span>
                    <span className="item-meta font-mono text-xs">{app.apkSize} · {app.tagline}</span>
                  </div>
                </div>
                <ArrowRight size={14} className="item-arrow" />
              </div>
            ))}

            {/* System Actions */}
            <div className="group-label font-mono">ENGINEERING COMMANDS</div>
            <div
              onClick={() => {
                onOpenTerminal();
                onClose();
              }}
              className="result-item"
            >
              <div className="item-left">
                <Terminal size={16} className="text-emerald" />
                <div>
                  <span className="item-name font-display">Launch Interactive CLI</span>
                  <span className="item-meta font-mono text-xs">Run apk-stats, bench-test, and repo commands</span>
                </div>
              </div>
              <ArrowRight size={14} className="item-arrow" />
            </div>

            <div
              onClick={() => {
                toggleSound();
                onClose();
              }}
              className="result-item"
            >
              <div className="item-left">
                <Volume2 size={16} className="text-purple" />
                <div>
                  <span className="item-name font-display">Toggle Audio Synthesizer</span>
                  <span className="item-meta font-mono text-xs">Switch Web Audio micro-feedback clicks</span>
                </div>
              </div>
              <ArrowRight size={14} className="item-arrow" />
            </div>
          </div>

          {/* Footer Hints */}
          <div className="palette-footer font-mono">
            <span>ESC TO CLOSE</span>
            <span>ENTER TO SELECT</span>
            <span className="text-cyan">CTRL+K TOGGLE</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .palette-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 15vh;
        }

        .palette-window {
          width: 100%;
          max-width: 620px;
          background: #0f0f15;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
        }

        .search-bar {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 12px;
        }

        .search-icon {
          flex-shrink: 0;
        }

        .palette-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .palette-close {
          background: transparent;
          border: none;
          color: #71717a;
          cursor: pointer;
        }

        .palette-results {
          max-height: 380px;
          overflow-y: auto;
          padding: 12px;
        }

        .group-label {
          font-size: 0.65rem;
          color: #71717a;
          letter-spacing: 0.08em;
          padding: 8px 10px 4px 10px;
        }

        .result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .result-item:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .item-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
          display: block;
        }

        .item-meta {
          color: #71717a;
          display: block;
        }

        .item-arrow {
          color: #71717a;
        }

        .result-item:hover .item-arrow {
          color: #38bdf8;
          transform: translateX(2px);
        }

        .palette-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.62rem;
          color: #71717a;
        }

        .text-cyan { color: #38bdf8; }
        .text-emerald { color: #34d399; }
        .text-purple { color: #c084fc; }
      `}</style>
    </AnimatePresence>
  );
}
