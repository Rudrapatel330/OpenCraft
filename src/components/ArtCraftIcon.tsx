import React from 'react';

interface ArtCraftIconProps {
  type: string;
  size?: number;
  bgColor?: string;
  className?: string;
}

export default function ArtCraftIcon({
  type,
  size = 64,
  bgColor = '#3b82f6',
  className = '',
}: ArtCraftIconProps) {
  const renderAnimalOrGlyph = () => {
    switch (type) {
      case 'fox': // PhotoCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Detailed Fox / Kitsune head & tail */}
            <path d="M40 22 L48 34 L43 36 L52 46 L42 46 L40 54 L38 46 L28 46 L37 36 L32 34 Z" opacity="0.95" />
            <path d="M40 18 L44 26 L36 26 Z" fill="#ffffff" />
            <circle cx="36" cy="36" r="1.5" fill="#1e3a8a" />
            <circle cx="44" cy="36" r="1.5" fill="#1e3a8a" />
            {/* Tail curve */}
            <path d="M48 46 Q58 38 52 28 Q58 36 50 50 Z" />
            <path d="M32 46 Q22 38 28 28 Q22 36 30 50 Z" />
          </g>
        );

      case 'dragon': // VectorCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Dragon crest & horns */}
            <path d="M40 18 L46 26 L52 24 L48 32 L54 36 L44 40 L46 54 L40 48 L34 54 L36 40 L26 36 L32 32 L28 24 L34 26 Z" />
            <circle cx="37" cy="32" r="1.5" fill="#7f1d1d" />
            <circle cx="43" cy="32" r="1.5" fill="#7f1d1d" />
            <path d="M34 22 L26 18 L32 26 Z" />
            <path d="M46 22 L54 18 L48 26 Z" />
          </g>
        );

      case 'owl': // FilmCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Owl face & feathered body */}
            <ellipse cx="40" cy="38" rx="16" ry="18" />
            <circle cx="34" cy="34" r="6" fill="#4c1d95" />
            <circle cx="46" cy="34" r="6" fill="#4c1d95" />
            <circle cx="34" cy="34" r="2.5" fill="#ffffff" />
            <circle cx="46" cy="34" r="2.5" fill="#ffffff" />
            {/* Beak & feather horns */}
            <polygon points="38,36 42,36 40,42" fill="#facc15" />
            <polygon points="28,24 34,22 32,28" />
            <polygon points="52,24 46,22 48,28" />
          </g>
        );

      case 'lynx': // LightCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Lynx head with ear tufts */}
            <path d="M40 24 L46 32 L52 30 L48 42 L40 52 L32 42 L28 30 L34 32 Z" />
            <line x1="28" y1="28" x2="24" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <line x1="52" y1="28" x2="56" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="36" cy="35" r="1.5" fill="#78350f" />
            <circle cx="44" cy="35" r="1.5" fill="#78350f" />
            <polygon points="38,40 42,40 40,44" fill="#d97706" />
          </g>
        );

      case 'lion': // PdfCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Majestic Lion mane */}
            <circle cx="40" cy="38" r="18" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="3,3" />
            <circle cx="40" cy="38" r="12" />
            <circle cx="36" cy="36" r="1.5" fill="#134e4a" />
            <circle cx="44" cy="36" r="1.5" fill="#134e4a" />
            <polygon points="38,40 42,40 40,44" fill="#0f766e" />
          </g>
        );

      case 'unicorn': // EffectCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Unicorn spiral horn & horse profile */}
            <polygon points="36,26 40,14 44,26" fill="#fef08a" />
            <path d="M34 26 L46 26 L48 38 L42 46 L38 54 L34 44 L32 36 Z" />
            <circle cx="42" cy="34" r="1.5" fill="#831843" />
            <path d="M44 38 Q52 42 48 50" stroke="#ffffff" strokeWidth="2" fill="none" />
          </g>
        );

      case 'cat': // DesignCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Cat with collar */}
            <circle cx="40" cy="38" r="13" />
            <polygon points="30,28 34,18 38,26" />
            <polygon points="50,28 46,18 42,26" />
            <circle cx="36" cy="36" r="1.5" fill="#064e3b" />
            <circle cx="44" cy="36" r="1.5" fill="#064e3b" />
            <polygon points="38,40 42,40 40,43" fill="#ef4444" />
            {/* Collar */}
            <path d="M32 48 Q40 52 48 48" stroke="#facc15" strokeWidth="2.5" fill="none" />
            <circle cx="40" cy="52" r="2" fill="#facc15" />
          </g>
        );

      case 'chameleon': // FigCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Chameleon with curled tail */}
            <ellipse cx="38" cy="38" rx="14" ry="10" />
            <circle cx="44" cy="35" r="4" fill="#ffffff" />
            <circle cx="44" cy="35" r="2" fill="#064e3b" />
            {/* Curled spiral tail */}
            <path d="M24 38 Q20 48 28 50 Q32 48 30 44" stroke="#ffffff" strokeWidth="2.5" fill="none" />
          </g>
        );

      case 'notepad': // WordCraft (Image 1)
        return (
          <g fill="#ffffff">
            <rect x="26" y="20" width="28" height="38" rx="3" fill="#ffffff" />
            <line x1="32" y1="28" x2="48" y2="28" stroke="#3730a3" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="34" x2="48" y2="34" stroke="#3730a3" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="40" x2="44" y2="40" stroke="#3730a3" strokeWidth="2" strokeLinecap="round" />
            {/* Pencil */}
            <polygon points="46,42 54,50 51,53 43,45" fill="#f59e0b" />
            <polygon points="43,45 40,54 49,51" fill="#0f172a" />
          </g>
        );

      case 'bird': // SoundCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Singing Bird with musical beak */}
            <ellipse cx="38" cy="38" rx="13" ry="11" />
            <polygon points="48,34 58,30 48,38" fill="#facc15" />
            <circle cx="42" cy="34" r="1.5" fill="#0c4a6e" />
            {/* Sound waves from beak */}
            <path d="M56 26 Q60 29 56 32" stroke="#ffffff" strokeWidth="1.5" fill="none" />
            <path d="M59 23 Q64 29 59 35" stroke="#ffffff" strokeWidth="1.5" fill="none" />
          </g>
        );

      case 'chart': // DeckCraft (Image 1)
        return (
          <g fill="#ffffff">
            <rect x="22" y="24" width="36" height="26" rx="3" fill="#ffffff" />
            <rect x="26" y="28" width="28" height="18" fill="#18181b" />
            {/* Bar charts inside */}
            <rect x="30" y="38" width="4" height="6" fill="#f97316" />
            <rect x="36" y="34" width="4" height="10" fill="#f97316" />
            <rect x="42" y="30" width="4" height="14" fill="#f97316" />
            {/* Stand */}
            <line x1="40" y1="50" x2="40" y2="56" stroke="#ffffff" strokeWidth="3" />
            <line x1="32" y1="56" x2="48" y2="56" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );

      case 'setsquare': // CADCraft (Image 1)
        return (
          <g fill="#ffffff">
            {/* Triangle Set Square */}
            <polygon points="22,54 58,54 22,18" fill="#ffffff" />
            <polygon points="28,48 48,48 28,28" fill="#0369a1" />
            {/* Ruler tick marks */}
            {[26, 32, 38, 44, 50].map((x) => (
              <line key={x} x1={x} y1="54" x2={x} y2="51" stroke="#0369a1" strokeWidth="1" />
            ))}
          </g>
        );

      case 'spreadsheet': // GridCraft (Image 1)
      default:
        return (
          <g fill="#ffffff">
            <rect x="24" y="20" width="32" height="40" rx="3" fill="#ffffff" />
            <rect x="27" y="23" width="26" height="8" fill="#15803d" />
            {/* Table grid cells */}
            <line x1="24" y1="38" x2="56" y2="38" stroke="#15803d" strokeWidth="1.5" />
            <line x1="24" y1="46" x2="56" y2="46" stroke="#15803d" strokeWidth="1.5" />
            <line x1="35" y1="31" x2="35" y2="60" stroke="#15803d" strokeWidth="1.5" />
            <line x1="45" y1="31" x2="45" y2="60" stroke="#15803d" strokeWidth="1.5" />
          </g>
        );
    }
  };

  return (
    <div
      className={`artcraft-icon-wrapper ${className}`}
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
        className="artcraft-icon-svg"
      >
        {/* Rounded Squircle Background (Exact ArtCraft shape) */}
        <rect
          x="4"
          y="4"
          width="72"
          height="72"
          rx="18"
          fill={bgColor}
        />
        {/* Inner detailed animal/glyph illustration */}
        {renderAnimalOrGlyph()}
      </svg>

      <style jsx>{`
        .artcraft-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .artcraft-icon-wrapper:hover {
          transform: translateY(-2px);
        }
        .artcraft-icon-svg {
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
        }
      `}</style>
    </div>
  );
}
