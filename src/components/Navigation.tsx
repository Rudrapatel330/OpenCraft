'use client';

import React, { useState } from 'react';
import { Sun, ChevronDown, X, Menu } from 'lucide-react';
import { GithubIcon } from './Icons';

interface NavigationProps {
  activeView: 'home' | 'craft-apps' | 'detail';
  onNavigate: (view: 'home' | 'craft-apps' | 'detail') => void;
  onLaunchModal: () => void;
}

export default function Navigation({ activeView, onNavigate, onLaunchModal }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'hero' || id === 'crafting-apps') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('home');
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  };

  return (
    <header className="opencraft-navbar">
      <div className="artcraft-container nav-container">
        {/* Left Side: Logo & Main Navigation Links */}
        <div className="nav-left">
          {/* Stylized Geometric 'O' OpenCraft Mark */}
          <button
            onClick={() => scrollTo('crafting-apps')}
            className="logo-btn"
            aria-label="OpenCraft Home"
          >
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" role="img" aria-label="OpenCraft Logo">
              <polygon points="20,4 36,36 28,36 20,20 12,36 4,36" fill="#ffffff" />
              <polygon points="20,12 28,28 12,28" fill="#0c0c0e" />
            </svg>
            <span className="brand-name font-sans">OPENCRAFT</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="nav-links font-sans" aria-label="Main Navigation">
            <button
              onClick={() => scrollTo('hero')}
              className={`nav-link ${activeView === 'home' ? 'active-boxed' : ''}`}
            >
              HOME
            </button>
            <button onClick={() => scrollTo('lineup')} className="nav-link">
              APPS
            </button>
            <button onClick={() => scrollTo('lineup')} className="nav-link">
              STUDIO
            </button>
            <div className="nav-dropdown">
              <button className="nav-link dropdown-btn" aria-label="Resources menu">
                <span>RESOURCES</span>
                <ChevronDown size={12} className="chevron" />
              </button>
            </div>
            <button onClick={() => scrollTo('download')} className="nav-link">
              DOWNLOAD
            </button>
            <a href="#download" className="nav-link">
              SUPPORT
            </a>

            {/* Boxed OPEN APPS Tab */}
            <div className="craft-apps-pill-box">
              <button
                onClick={() => scrollTo('lineup')}
                className="craft-apps-btn"
                aria-label="Open Apps Catalogue"
              >
                OPEN APPS
              </button>
              <button
                onClick={() => scrollTo('hero')}
                className="craft-apps-close"
                aria-label="Close apps panel"
                title="Toggle View"
              >
                <X size={13} />
              </button>
            </div>
          </nav>
        </div>

        {/* Right Side: Pricing, Discord, Theme Toggle, Launch App button */}
        <div className="nav-right font-sans">
          <a href="#download" className="nav-link-right hide-on-mobile">
            RELEASES
          </a>

          {/* Discord Icon */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="icon-link hide-on-mobile"
            title="Join Discord Community"
            aria-label="Discord Community"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>

          {/* Theme Sun Toggle */}
          <button className="icon-link hide-on-mobile" aria-label="Toggle theme">
            <Sun size={17} />
          </button>

          {/* GET APKS Solid White Button */}
          <button
            onClick={onLaunchModal}
            className="btn-launch-app font-sans"
            aria-label="Download APKs"
          >
            GET APKS
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer font-sans">
          <button onClick={() => scrollTo('hero')} className="mobile-nav-link">
            <span>HOME</span>
          </button>
          <button onClick={() => scrollTo('lineup')} className="mobile-nav-link">
            <span>APPS LINEUP</span>
          </button>
          <button onClick={() => scrollTo('download')} className="mobile-nav-link">
            <span>DOWNLOADS &amp; RELEASES</span>
          </button>
          <button onClick={() => { setMobileMenuOpen(false); onLaunchModal(); }} className="mobile-nav-link text-blue">
            <span>DOWNLOAD ALL APKS</span>
          </button>
          <div className="mobile-drawer-footer">
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="mobile-social-link">
              <span>DISCORD</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="mobile-social-link">
              <span>GITHUB</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .opencraft-navbar {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: #0c0c0e;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          height: 52px;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .logo-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0;
        }

        .brand-name {
          font-size: 0.95rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #ffffff;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
        }

        .nav-link {
          background: transparent;
          border: none;
          color: #d4d4d8;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: color 0.15s ease;
          text-decoration: none;
          padding: 4px 0;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link.active-boxed {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          padding: 4px 10px;
          border-radius: 2px;
        }

        .dropdown-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .craft-apps-pill-box {
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.02);
          overflow: hidden;
        }

        .craft-apps-btn {
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: inherit;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 5px 10px;
          cursor: pointer;
        }

        .craft-apps-close {
          background: transparent;
          border: none;
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          color: #a1a1aa;
          padding: 5px 7px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .craft-apps-close:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hide-on-mobile {
          @media (max-width: 768px) {
            display: none !important;
          }
        }

        .nav-link-right {
          color: #d4d4d8;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .nav-link-right:hover {
          color: #ffffff;
        }

        .icon-link {
          background: transparent;
          border: none;
          color: #d4d4d8;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .icon-link:hover {
          color: #ffffff;
        }

        .btn-launch-app {
          background: #ffffff;
          color: #0c0c0e;
          font-family: inherit;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 7px 14px;
          border: 1px solid #ffffff;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
        }

        .btn-launch-app:hover {
          background: #e4e4e7;
        }

        .btn-mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 6px;
          align-items: center;
          justify-content: center;

          @media (max-width: 900px) {
            display: flex;
          }
        }

        .mobile-nav-drawer {
          position: absolute;
          top: 52px;
          left: 0;
          right: 0;
          background: #0e0e12;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9);
          z-index: 1000;
        }

        .mobile-nav-link {
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-align: left;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
        }

        .text-blue {
          color: #38bdf8 !important;
        }

        .mobile-drawer-footer {
          display: flex;
          gap: 16px;
          padding-top: 8px;
        }

        .mobile-social-link {
          color: #a1a1aa;
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
}
