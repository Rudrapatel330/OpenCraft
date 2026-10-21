import React from 'react';

interface ProductIconProps {
  type: string;
  size?: number;
  accent?: string;
}

export default function ProductIcon({ type, size = 64, accent = '#38bdf8' }: ProductIconProps) {
  const renderGlyph = () => {
    switch (type) {
      case 'document':
        return (
          <g>
            <defs>
              <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <rect x="22" y="16" width="36" height="48" rx="4" fill="url(#docGrad)" opacity="0.9" />
            <path d="M44 16 L58 30 L44 30 Z" fill="#ffffff" opacity="0.4" />
            <line x1="28" y1="36" x2="52" y2="36" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="28" y1="43" x2="48" y2="43" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <line x1="28" y1="50" x2="42" y2="50" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            {/* Geometric diamond accent */}
            <rect x="47" y="47" width="7" height="7" transform="rotate(45 50.5 50.5)" fill="#ffffff" />
          </g>
        );

      case 'camera':
        return (
          <g>
            <defs>
              <linearGradient id="camGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
            </defs>
            <rect x="18" y="24" width="44" height="34" rx="6" fill="url(#camGrad)" />
            <path d="M30 24 L34 18 L46 18 L50 24 Z" fill="#e11d48" />
            {/* Lens Rings */}
            <circle cx="40" cy="41" r="14" fill="#1c1917" stroke="#ffffff" strokeWidth="2" />
            <circle cx="40" cy="41" r="9" fill="#0f172a" />
            <circle cx="37" cy="38" r="3" fill="#ffffff" opacity="0.8" />
            <circle cx="43" cy="44" r="1.5" fill="#38bdf8" />
          </g>
        );

      case 'cpu':
        return (
          <g>
            <defs>
              <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            {/* Silicon chip body */}
            <rect x="22" y="22" width="36" height="36" rx="4" fill="url(#cpuGrad)" />
            <rect x="28" y="28" width="24" height="24" rx="2" fill="#1c1917" />
            {/* Core Die */}
            <rect x="34" y="34" width="12" height="12" fill="#fbbf24" />
            {/* Pins */}
            {[26, 32, 38, 44, 50].map((coord) => (
              <React.Fragment key={coord}>
                <line x1={coord} y1="16" x2={coord} y2="22" stroke="#fbbf24" strokeWidth="2" />
                <line x1={coord} y1="58" x2={coord} y2="64" stroke="#fbbf24" strokeWidth="2" />
                <line x1="16" y1={coord} x2="22" y2={coord} stroke="#fbbf24" strokeWidth="2" />
                <line x1="58" y1={coord} x2="64" y2={coord} stroke="#fbbf24" strokeWidth="2" />
              </React.Fragment>
            ))}
          </g>
        );

      case 'vector':
        return (
          <g>
            <defs>
              <linearGradient id="vecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            {/* Pen nib */}
            <path
              d="M40 16 L54 36 L46 42 L42 60 L38 60 L34 42 L26 36 Z"
              fill="url(#vecGrad)"
            />
            <circle cx="40" cy="38" r="3" fill="#ffffff" />
            <line x1="40" y1="38" x2="40" y2="60" stroke="#ffffff" strokeWidth="2" />
            {/* Coordinate control handles */}
            <rect x="18" y="20" width="5" height="5" fill="#38bdf8" />
            <rect x="57" y="20" width="5" height="5" fill="#38bdf8" />
            <line x1="23" y1="22.5" x2="57" y2="22.5" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,2" />
          </g>
        );

      case 'notes':
        return (
          <g>
            <defs>
              <linearGradient id="notesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            {/* Hexagonal crest */}
            <polygon
              points="40,16 58,26 58,48 40,58 22,48 22,26"
              fill="url(#notesGrad)"
            />
            {/* Inner knowledge node tree */}
            <circle cx="40" cy="30" r="4" fill="#ffffff" />
            <circle cx="32" cy="45" r="3.5" fill="#ffffff" />
            <circle cx="48" cy="45" r="3.5" fill="#ffffff" />
            <line x1="40" y1="30" x2="32" y2="45" stroke="#ffffff" strokeWidth="2" />
            <line x1="40" y1="30" x2="48" y2="45" stroke="#ffffff" strokeWidth="2" />
            <line x1="32" y1="45" x2="48" y2="45" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2,2" />
          </g>
        );

      case 'audio':
        return (
          <g>
            <defs>
              <linearGradient id="audioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
            <rect x="18" y="20" width="44" height="40" rx="6" fill="url(#audioGrad)" />
            {/* Oscilloscope screen */}
            <rect x="23" y="25" width="34" height="20" rx="3" fill="#082f49" />
            {/* Waveform sine */}
            <path
              d="M24 35 Q29 27, 33 35 T42 35 T51 35 T56 35"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Synth dials */}
            <circle cx="28" cy="52" r="3" fill="#ffffff" />
            <circle cx="40" cy="52" r="3" fill="#ffffff" />
            <circle cx="52" cy="52" r="3" fill="#ffffff" />
          </g>
        );

      case 'radar':
        return (
          <g>
            <defs>
              <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="24" fill="url(#radarGrad)" />
            <circle cx="40" cy="40" r="16" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <circle cx="40" cy="40" r="8" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
            <line x1="40" y1="16" x2="40" y2="64" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            <line x1="16" y1="40" x2="64" y2="40" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            {/* Radar Sweep line */}
            <line x1="40" y1="40" x2="57" y2="23" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="52" cy="30" r="2.5" fill="#34d399" />
          </g>
        );

      case 'folder':
      default:
        return (
          <g>
            <defs>
              <linearGradient id="foldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>
            <path
              d="M18 26 L30 26 L35 31 L62 31 C64 31, 65 32, 65 34 L65 54 C65 56, 64 57, 62 57 L18 57 C16 57, 15 56, 15 54 L15 29 C15 27, 16 26, 18 26 Z"
              fill="url(#foldGrad)"
            />
            {/* Inner document tab */}
            <rect x="23" y="36" width="34" height="16" rx="2" fill="#ffffff" opacity="0.85" />
            <line x1="28" y1="42" x2="44" y2="42" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="47" x2="50" y2="47" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
    }
  };

  return (
    <div
      className="product-icon-container"
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      <svg
        viewBox="0 0 80 80"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="product-icon-svg"
      >
        {/* Soft back shadow */}
        <rect
          x="10"
          y="10"
          width="60"
          height="60"
          rx="16"
          fill="#0e0e12"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.5"
        />
        {/* Glyph Graphic */}
        {renderGlyph()}
      </svg>

      <style jsx>{`
        .product-icon-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .product-icon-container:hover {
          transform: scale(1.06) rotate(-2deg);
        }
        .product-icon-svg {
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6));
        }
      `}</style>
    </div>
  );
}
