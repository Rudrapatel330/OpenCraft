/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist_app',
  reactStrictMode: false,
  allowedDevOrigins: [
    'congregative-liliana-unquaffed.ngrok-free.dev',
    '*.ngrok-free.dev',
    '*.ngrok.app',
    '*.ngrok.io',
    'localhost:3000',
  ],
};

export default nextConfig;
