'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroThirteenApps from '@/components/HeroThirteenApps';
import LineupSection from '@/components/LineupSection';
import AppDetailPage from '@/components/AppDetailPage';
import ArtCraftFooter from '@/components/ArtCraftFooter';
import RightMarginTelemetry from '@/components/RightMarginTelemetry';
import AppDownloadPage from '@/components/AppDownloadPage';
import { APPS, AppItem } from '@/data/products';

export default function HomePage() {
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [downloadApp, setDownloadApp] = useState<AppItem | null>(null);

  // Sync with URL hash or back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      // Separate Download & Inspector Page Route
      if (hash.startsWith('download-')) {
        const appId = hash.replace('download-', '');
        const found = APPS.find((a) => a.id === appId);
        if (found) {
          setDownloadApp(found);
          setSelectedApp(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      // App Detail Page Route
      if (hash === 'eagle-share' || hash === 'pigeon-music' || hash === 'pigeon-echo') {
        const found = APPS.find((a) => a.id === hash);
        if (found) {
          setSelectedApp(found);
          setDownloadApp(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      // Home Page
      if (!hash || hash === 'home' || hash === 'lineup' || hash === 'download') {
        setSelectedApp(null);
        setDownloadApp(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectApp = (app: AppItem) => {
    setSelectedApp(app);
    setDownloadApp(null);
    window.location.hash = app.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToDownload = (app: AppItem) => {
    setDownloadApp(app);
    setSelectedApp(null);
    window.location.hash = `download-${app.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToApp = () => {
    if (downloadApp) {
      setSelectedApp(downloadApp);
      window.location.hash = downloadApp.id;
      setDownloadApp(null);
    } else {
      handleBackToHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedApp(null);
    setDownloadApp(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="opencraft-page-wrapper">
      {/* 1. Global Navigation Bar */}
      <Navigation
        activeView={downloadApp ? 'detail' : selectedApp ? 'detail' : 'home'}
        onNavigate={(view) => {
          if (view === 'home') handleBackToHome();
          else if (view === 'craft-apps') {
            if (selectedApp || downloadApp) handleBackToHome();
            setTimeout(() => {
              const el = document.getElementById('lineup');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }
        }}
        onLaunchModal={() => handleNavigateToDownload(selectedApp || downloadApp || APPS[0])}
      />

      {/* Animated Main View Router */}
      {downloadApp ? (
        /* Dedicated Separate Download & Inspector Page */
        <main
          key={`download-${downloadApp.id}`}
          className="app-download-view-container animate-view-entry"
        >
          <AppDownloadPage
            app={downloadApp}
            onBack={handleBackToApp}
            onBackToHome={handleBackToHome}
            onSelectApp={handleNavigateToDownload}
          />
        </main>
      ) : selectedApp ? (
        /* Dedicated App Detail Page */
        <main
          key={`detail-${selectedApp.id}`}
          className="app-detail-view-container animate-view-entry"
        >
          <AppDetailPage
            app={selectedApp}
            onBack={handleBackToHome}
            onSelectApp={handleSelectApp}
            onNavigateToDownload={handleNavigateToDownload}
          />
          <RightMarginTelemetry
            mode="detail"
            activeAppTitle={selectedApp.name}
          />
        </main>
      ) : (
        /* Home Lineup Page */
        <main
          key="home"
          className="home-lineup-view-container animate-view-entry"
        >
          {/* Hero: Three apps. One craft. with 3 Real Icons */}
          <HeroThirteenApps onSelectApp={handleSelectApp} />

          {/* Section 02: The Lineup (3 real app cards, zero overlap) */}
          <LineupSection onSelectApp={handleSelectApp} />

          {/* Section 03: Open Architecture & Direct APK Downloads */}
          <ArtCraftFooter onOpenDownloadModal={handleNavigateToDownload} />

          {/* Continuity Rail: Tracks scroll progress & animates headers */}
          <RightMarginTelemetry mode="home" />
        </main>
      )}

      <style jsx>{`
        .opencraft-page-wrapper {
          min-height: 100vh;
          background: #0c0c0e;
          color: #ffffff;
          position: relative;
        }

        .home-lineup-view-container,
        .app-detail-view-container,
        .app-download-view-container {
          position: relative;
          width: 100%;
        }

        .animate-view-entry {
          animation: viewSlideFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes viewSlideFade {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
