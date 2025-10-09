/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: process.env.REPLIT_DOMAINS 
    ? [
        process.env.REPLIT_DOMAINS,
        process.env.REPLIT_DEV_DOMAIN,
        '*.replit.dev',
        '*.replit.app',
      ].filter(Boolean)
    : ['*.replit.dev', '*.replit.app'],
};

export default nextConfig;
