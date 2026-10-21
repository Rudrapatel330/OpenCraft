'use client';

import React from 'react';

export default function HighlightsBento() {
  const highlights = [
    {
      num: '01',
      title: 'Familiar by design',
      desc: 'The menus, shortcuts, panels and tools your hands already know. Productive on day one, no retraining.',
    },
    {
      num: '02',
      title: 'Native GPU canvas',
      desc: 'Renders on Metal, Vulkan, DirectX 12 and WebGPU. No Electron and no web view, just a fast native compositor.',
    },
    {
      num: '03',
      title: 'Real layered files',
      desc: 'Opens and saves layered PSD and PSB documents. 134 of 135 real-world test files round-trip byte for byte.',
    },
    {
      num: '04',
      title: 'Non-destructive editing',
      desc: '16 adjustment layers, 70+ live-preview filters, smart objects with smart filters, and a full set of layer styles.',
    },
    {
      num: '05',
      title: 'On-device selection',
      desc: "Select subjects and objects and refine masks with tools that run on your machine, not someone else's server.",
    },
    {
      num: '06',
      title: 'Serious color',
      desc: '8, 16 and 32-bit documents in RGB, CMYK, Lab and Grayscale, with ICC color management and soft proofing.',
    },
  ];

  return (
    <section id="highlights" className="artcraft-highlights-section">
      <div className="artcraft-container">
        {/* Sub-header Marker (Image 5: 02 / HIGHLIGHTS) */}
        <div className="sub-header-marker-bar">
          <div className="marker-left">
            <span>02 / HIGHLIGHTS</span>
          </div>
          <div className="marker-right-spec font-mono">
            <span>IMAGE EDITOR · PHOTOCRAFT</span>
          </div>
          <span className="floating-big-label">HIGHLIGHTS</span>
        </div>

        {/* Section Headline */}
        <div className="highlights-header font-sans">
          <h2 className="highlights-title">
            What&apos;s inside<span className="blue-dot">.</span>
          </h2>
        </div>

        {/* 6-Cell Bento Grid (Exact Image 5) */}
        <div className="highlights-bento-grid font-sans">
          {highlights.map((item) => (
            <div key={item.num} className="bento-highlight-box">
              <span className="bento-item-num font-mono">{item.num}</span>
              <h3 className="bento-item-title">{item.title}</h3>
              <p className="bento-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .artcraft-highlights-section {
          padding-top: 20px;
          padding-bottom: 90px;
          background: #0c0c0e;
        }

        .highlights-header {
          margin-bottom: 32px;
        }

        .highlights-title {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .blue-dot {
          color: #3b82f6;
        }

        .highlights-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 1px solid rgba(255, 255, 255, 0.08);

          @media (min-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .bento-highlight-box {
          background: #0c0c0e;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 36px 30px;
          position: relative;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          transition: background 0.2s ease;
        }

        .bento-highlight-box:hover {
          background: #111114;
        }

        .bento-item-num {
          position: absolute;
          top: 20px;
          right: 24px;
          font-size: 0.72rem;
          color: #71717a;
          letter-spacing: 0.08em;
        }

        .bento-item-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
          padding-right: 32px;
        }

        .bento-item-desc {
          font-size: 0.88rem;
          color: #a1a1aa;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
