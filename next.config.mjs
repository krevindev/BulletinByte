// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      "http://192.168.1.4:3000", // your LAN IP
      "http://localhost:3000",   // local dev
    ],
  },
};

export default nextConfig;
