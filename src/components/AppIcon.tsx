'use client';

import React from 'react';

interface AppIconProps {
  src: string;
  name: string;
  size?: number;
  className?: string;
}

export default function AppIcon({ src, name, size = 68, className = '' }: AppIconProps) {
  return (
    <div
      className={`app-squircle-icon ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      <img
        src={src}
        alt={`${name} app icon`}
        width={size}
        height={size}
        className="app-icon-img"
        loading="eager"
      />

      <style jsx>{`
        .app-squircle-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          overflow: hidden;
          background: #18181f;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .app-squircle-icon:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.8), 0 0 20px rgba(59, 130, 246, 0.25);
        }

        .app-icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 18px;
        }
      `}</style>
    </div>
  );
}
