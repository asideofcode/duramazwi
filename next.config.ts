import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  htmlLimitedBots: '.*', // This regex matches all user agents
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during builds
  },
  // Configure Turbopack for dev (Next.js 15.3+)
  turbopack: {
    rules: {
      '*.svg': {
        as: '*.js',
        loaders: ['@svgr/webpack'],
      },
    },
  },
  // Configure webpack for production builds
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Hide admin routes and API endpoints in production
  ...(process.env.NODE_ENV === 'production' && {
    async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/admin/:path*',
            destination: '/404',
          },
          {
            source: '/api/admin/:path*',
            destination: '/404',
          },
        ],
        afterFiles: [],
        fallback: [],
      };
    },
  }),
};

export default nextConfig;
