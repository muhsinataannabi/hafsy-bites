/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Ignore TypeScript errors during deployment
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Ignore ESLint warnings during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
