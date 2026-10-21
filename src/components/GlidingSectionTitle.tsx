'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface GlidingSectionTitleProps {
  text: string;
  className?: string;
  id?: string;
}

export default function GlidingSectionTitle({ text, className = '', id }: GlidingSectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const isSettledRef = useRef(false);

  const characters = text.split('');

  useEffect(() => {
    lettersRef.current = lettersRef.current.slice(0, characters.length);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;

      // Trigger condition: when the heading reaches the upper-middle portion of the screen
      const shouldSettle = rect.top <= viewportHeight * 0.72 && rect.bottom >= 0;

      const targets = lettersRef.current.filter(Boolean);
      if (targets.length === 0) return;

      if (shouldSettle && !isSettledRef.current) {
        isSettledRef.current = true;

        // Animate character-by-character from the rotated right edge into the horizontal title
        gsap.to(targets, {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          color: '#ffffff',
          duration: 0.6,
          stagger: 0.035,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      } else if (!shouldSettle && isSettledRef.current && rect.top > viewportHeight * 0.72) {
        // Scrolled back up: glide characters back to the right margin
        isSettledRef.current = false;

        gsap.to(targets, {
          x: isMobile ? 25 : 85,
          y: 0,
          rotation: isMobile ? 0 : 90,
          opacity: 0.25,
          color: '#38bdf8',
          duration: 0.45,
          stagger: {
            each: 0.02,
            from: 'end',
          },
          ease: 'power2.in',
          overwrite: 'auto',
        });
      }
    };

    // Initial positioning setup
    const isMobile = window.innerWidth < 768;
    const initialTargets = lettersRef.current.filter(Boolean);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const inViewOnLoad = rect.top <= window.innerHeight * 0.72 && rect.bottom >= 0;

      if (inViewOnLoad) {
        isSettledRef.current = true;
        gsap.set(initialTargets, {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          color: '#ffffff',
        });
      } else {
        isSettledRef.current = false;
        gsap.set(initialTargets, {
          x: isMobile ? 25 : 85,
          y: 0,
          rotation: isMobile ? 0 : 90,
          opacity: 0.25,
          color: '#38bdf8',
        });
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [characters.length]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`gliding-section-title-wrap font-sans ${className}`}
      aria-label={text}
    >
      <span className="gliding-letters-row">
        {characters.map((char, idx) => (
          <span
            key={`${char}-${idx}`}
            ref={(el) => {
              lettersRef.current[idx] = el;
            }}
            className="gliding-char"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>

      <style jsx>{`
        .gliding-section-title-wrap {
          display: inline-flex;
          align-items: center;
          position: relative;
          user-select: none;
        }

        .gliding-letters-row {
          display: inline-flex;
          align-items: center;
          font-size: clamp(1.4rem, 2.4vw, 2.1rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1;
        }

        .gliding-char {
          display: inline-block;
          transform-origin: center center;
          will-change: transform, opacity, color;
        }

        @media (max-width: 640px) {
          .gliding-letters-row {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
