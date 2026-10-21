export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
}

export interface AppItem {
  id: string;
  name: string;
  categoryNumber: string;
  categoryName: string;
  tagline: string;
  description: string;
  status: string;
  statusColor: 'blue' | 'orange' | 'green';
  installerStatus: string;
  platforms: string[];
  iconSrc: string;
  apkDownloadUrl: string;
  apkFileName: string;
  apkFileSize: string;
  previewType: 'eagle-share' | 'pigeon-music' | 'pigeon-echo';
  features: string[];
  screenshots: ScreenshotItem[];
}

export const APPS: AppItem[] = [
  {
    id: 'eagle-share',
    name: 'Eagle Share',
    categoryNumber: '01',
    categoryName: 'PEER-TO-PEER FILE TRANSFER',
    tagline: 'Blazing fast, cross-platform local wireless sharing with zero cloud limits.',
    description: 'High-speed peer-to-peer file transfer over local Wi-Fi, Hotspot, and WebRTC. Transfer gigabyte files, APKs, photos, and folders between Android and PC with up to 50MB/s speeds and end-to-end local security.',
    status: 'STABLE RELEASE',
    statusColor: 'green',
    installerStatus: 'INSTALLERS READY',
    platforms: ['ANDROID', 'WINDOWS', 'MACOS', 'LINUX', 'WEB'],
    iconSrc: '/icons/eagle_share_icon.png',
    apkDownloadUrl: '/apks/Eagle-Share.apk',
    apkFileName: 'Eagle-Share.apk',
    apkFileSize: '1.6 MB',
    previewType: 'eagle-share',
    features: [
      'Up to 50 MB/s local Wi-Fi & Hotspot transmission speeds',
      'No file size restrictions, zero mobile data consumption',
      'Browser WebShare mode to send files to any PC or iPhone without app install',
      'Encrypted local handshake with zero cloud telemetry',
    ],
    screenshots: [
      {
        id: 'es-1',
        title: 'P2P Radar & Device Pairing',
        subtitle: 'Local Wi-Fi discovery with instant device pairing and zero cloud telemetry.',
        src: '/screenshots/eagle_share/e1.png',
      },
      {
        id: 'es-2',
        title: 'High-Speed Batch Transfer',
        subtitle: 'Up to 50 MB/s memory-mapped socket throughput for large files and folders.',
        src: '/screenshots/eagle_share/e2.png',
      },
    ],
  },
  {
    id: 'pigeon-music',
    name: 'Pigeon Music',
    categoryNumber: '02',
    categoryName: 'OFFLINE HI-FI AUDIO PLAYER',
    tagline: 'Modern, high-fidelity offline music player tailored with Material You.',
    description: 'A pure offline audio listening sanctuary for Android. Built with a 10-band parametric equalizer, gapless playback, synchronized LRC lyrics, tag editor, and stunning dynamic themes extracted from album artwork.',
    status: 'STABLE RELEASE',
    statusColor: 'blue',
    installerStatus: 'INSTALLERS READY',
    platforms: ['ANDROID 14+', 'APK DIRECT', 'F-DROID'],
    iconSrc: '/icons/pegion_music_logo_original.png',
    apkDownloadUrl: '/apks/Pegion-Music.apk',
    apkFileName: 'Pegion-Music.apk',
    apkFileSize: '7.0 MB',
    previewType: 'pigeon-music',
    features: [
      'Bit-perfect 24-bit / 192kHz Hi-Res FLAC, ALAC, and MP3 playback',
      'Integrated 10-band equalizer with bass boost and virtualizer',
      'Floating timed synced lyrics display and embedded artwork parser',
      'Zero ads, zero subscriptions, 100% offline local library scan',
    ],
    screenshots: [
      {
        id: 'pm-1',
        title: 'Material You Now Playing',
        subtitle: 'Adaptive color theme extracted dynamically from lossless album artwork.',
        src: '/screenshots/pigeon_music/Pegion_S1.png',
      },
      {
        id: 'pm-2',
        title: 'Offline Music Library',
        subtitle: 'Instant local storage scanning with gapless queue and ID3 tag metadata.',
        src: '/screenshots/pigeon_music/p2.png',
      },
      {
        id: 'pm-3',
        title: '10-Band Parametric Equalizer',
        subtitle: 'Studio-grade hardware audio output routing with decibel curve controls.',
        src: '/screenshots/pigeon_music/P3.png',
      },
      {
        id: 'pm-4',
        title: 'Synchronized LRC Lyrics',
        subtitle: 'Smooth scrolling time-synced lyrics with translation and typography scaling.',
        src: '/screenshots/pigeon_music/p4.png',
      },
      {
        id: 'pm-5',
        title: 'Soundstage & Reverb Presets',
        subtitle: 'Hardware audio virtualizer and bass enhancement for audiophile gear.',
        src: '/screenshots/pigeon_music/p5.png',
      },
    ],
  },
  {
    id: 'pigeon-echo',
    name: 'Pigeon Echo',
    categoryNumber: '03',
    categoryName: 'UNIFIED ECOSYSTEM & DEVICE SYNC',
    tagline: 'Seamless clipboard sync, notification relay and smart PC companion.',
    description: 'Bridges your Android phone and desktop workstation into a unified ecosystem. Seamlessly share your clipboard in real-time, reply to phone notifications from PC, control media, and send quick links instantly.',
    status: 'IN DEVELOPMENT',
    statusColor: 'orange',
    installerStatus: 'INSTALLERS READY',
    platforms: ['ANDROID', 'WINDOWS', 'LINUX'],
    iconSrc: '/icons/Pegion_Echo_system.png',
    apkDownloadUrl: '/apks/Eagle-Share.apk',
    apkFileName: 'Pigeon-Echo.apk',
    apkFileSize: 'Preview Beta',
    previewType: 'pigeon-echo',
    features: [
      'End-to-end encrypted local clipboard sharing between phone and desktop',
      'Real-time phone notification mirror with quick inline replies',
      'Shared media playback controller and volume handoff',
      'Zero external server dependency — runs 100% within your local network',
    ],
    screenshots: [
      {
        id: 'pe-1',
        title: 'Encrypted Clipboard Bridge',
        subtitle: 'Instant phone-to-PC clipboard sync over authenticated local Wi-Fi.',
        src: '/screenshots/eagle_share/e1.png',
      },
      {
        id: 'pe-2',
        title: 'Notification Relay & Actions',
        subtitle: 'Read and reply to mobile phone alerts directly from your desktop monitor.',
        src: '/screenshots/eagle_share/e2.png',
      },
    ],
  },
];

export const PRODUCTS = APPS;
export type Product = AppItem;
