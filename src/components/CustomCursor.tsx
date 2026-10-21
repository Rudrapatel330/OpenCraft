'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on devices with mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, .clickable, .glow-card');
      if (interactive) {
        setIsHovered(true);
        const customAction = target.closest('[data-cursor]')?.getAttribute('data-cursor');
        setCursorText(customAction || 'VIEW');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
      }}
    >
      {/* Precision Geometric Crosshair Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? '#38bdf8' : 'rgba(255, 255, 255, 0.4)',
        }}
        transition={{ duration: 0.2 }}
        className="cursor-reticle"
      >
        <div className="cursor-dot" />
        <div className="cursor-cross-h" />
        <div className="cursor-cross-v" />
        {cursorText && (
          <span className="cursor-badge">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Floating Coordinates Telemetry */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: 16,
          translateY: 16,
        }}
        className="cursor-coords"
      >
        <span>X:{String(coords.x).padStart(4, '0')}</span>
        <span>Y:{String(coords.y).padStart(4, '0')}</span>
      </motion.div>

      <style jsx>{`
        .cursor-reticle {
          position: absolute;
          width: 32px;
          height: 32px;
          border: 1px dashed rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease;
        }
        .cursor-dot {
          width: 4px;
          height: 4px;
          background: #38bdf8;
          border-radius: 50%;
        }
        .cursor-cross-h {
          position: absolute;
          width: 10px;
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
        }
        .cursor-cross-v {
          position: absolute;
          height: 10px;
          width: 1px;
          background: rgba(255, 255, 255, 0.3);
        }
        .cursor-badge {
          position: absolute;
          top: -20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #38bdf8;
          background: rgba(7, 7, 9, 0.9);
          padding: 1px 5px;
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 2px;
          white-space: nowrap;
        }
        .cursor-coords {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.35);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
