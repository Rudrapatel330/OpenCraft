'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, Search, Filter, ShieldCheck, Download } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { playGeometricClick, playHoverTick } from '@/utils/audio';

interface ProductLineupProps {
  onSelectProduct: (p: Product) => void;
  onDirectDownload: (p: Product) => void;
}

export default function ProductLineup({ onSelectProduct, onDirectDownload }: ProductLineupProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'spec'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="lineup" className="lineup-section">
      <div className="container">
        {/* Engineering Section Coordinate Header */}
        <div className="section-marker">
          <span className="marker-index">02</span>
          <span>THE LINEUP // RELEASES & REPOSITORIES</span>
          <span className="marker-line" />
          <span className="font-mono text-muted text-xs">TOTAL: {PRODUCTS.length} NATIVE ENGINES</span>
        </div>

        {/* Section Title & Subheading */}
        <div className="lineup-header-row">
          <div>
            <h2 className="lineup-heading font-display">Crafted with precision.</h2>
            <p className="lineup-subheading">
              Select any application to inspect its architecture manifest, benchmark telemetry, and direct APK download.
            </p>
          </div>

          {/* View Mode & Filter Controls */}
          <div className="view-controls">
            <div className="search-box">
              <Search size={14} className="search-icon" />
              <input
                type="text"
                placeholder="Filter apps, NDK, Kotlin..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input font-mono"
              />
            </div>

            <div className="mode-toggle">
              <button
                onClick={() => {
                  playGeometricClick(800, 0.02, 'sine');
                  setViewMode('grid');
                }}
                className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                title="Blueprint Grid View"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => {
                  playGeometricClick(800, 0.02, 'sine');
                  setViewMode('spec');
                }}
                className={`mode-btn ${viewMode === 'spec' ? 'active' : ''}`}
                title="Technical Spec Table View"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="category-bar">
          <div className="category-scroll font-mono">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playGeometricClick(900, 0.02, 'sine');
                    setActiveCategory(cat.id);
                  }}
                  className={`cat-pill ${isActive ? 'active' : ''}`}
                >
                  {cat.label}
                  {isActive && <span className="cat-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <motion.div layout className="product-grid">
            <AnimatePresence>
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                >
                  <ProductCard
                    product={product}
                    index={idx}
                    onSelect={onSelectProduct}
                    onDirectDownload={onDirectDownload}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Spec Table View */}
        {viewMode === 'spec' && (
          <div className="spec-table-wrapper geo-border">
            <table className="spec-table font-mono">
              <thead>
                <tr>
                  <th>CODE</th>
                  <th>APP NAME</th>
                  <th>TARGET</th>
                  <th>COLD START</th>
                  <th>RAM</th>
                  <th>APK SIZE</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p, idx) => (
                  <tr
                    key={p.id}
                    onClick={() => onSelectProduct(p)}
                    onMouseEnter={playHoverTick}
                    className="spec-row"
                  >
                    <td className="text-cyan">{String(idx + 1).padStart(2, '0')}</td>
                    <td className="spec-name font-display">{p.name}</td>
                    <td>{p.targetAndroid}</td>
                    <td className="text-emerald">{p.benchmarks.coldStart}</td>
                    <td>{p.benchmarks.ramUsage}</td>
                    <td>{p.apkSize}</td>
                    <td>
                      <span className={`badge-tag badge-${p.statusColor}`}>
                        {p.status}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDirectDownload(p);
                        }}
                        className="btn-spec-dl"
                      >
                        <Download size={13} />
                        <span>APK</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx>{`
        .lineup-section {
          padding: 90px 0;
          position: relative;
          z-index: 5;
        }

        .lineup-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }

        .lineup-heading {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }

        .lineup-subheading {
          font-size: 0.95rem;
          color: #a1a1aa;
          max-width: 580px;
        }

        .view-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          color: #71717a;
          pointer-events: none;
        }

        .search-input {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 8px 12px 8px 32px;
          font-size: 0.78rem;
          border-radius: 4px;
          outline: none;
          width: 220px;
          transition: border-color 0.2s ease;
        }

        .search-input:focus {
          border-color: #38bdf8;
        }

        .mode-toggle {
          display: flex;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2px;
          border-radius: 4px;
        }

        .mode-btn {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: #71717a;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mode-btn.active {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .category-bar {
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
        }

        .category-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .cat-pill {
          background: transparent;
          border: 1px solid transparent;
          color: #71717a;
          padding: 6px 14px;
          font-size: 0.76rem;
          border-radius: 3px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .cat-pill:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.03);
        }

        .cat-pill.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .cat-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #38bdf8;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 24px;
        }

        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .spec-table-wrapper {
          overflow-x: auto;
          background: #0d0d12;
        }

        .spec-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.78rem;
          text-align: left;
        }

        .spec-table th {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: #71717a;
          font-weight: 600;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
        }

        .spec-table td {
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          color: #a1a1aa;
        }

        .spec-row {
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .spec-row:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .spec-name {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .text-cyan { color: #38bdf8; }
        .text-emerald { color: #34d399; }

        .btn-spec-dl {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          border-radius: 3px;
          cursor: pointer;
          font-size: 0.7rem;
        }

        .btn-spec-dl:hover {
          background: #38bdf8;
          color: #070709;
        }
      `}</style>
    </section>
  );
}
