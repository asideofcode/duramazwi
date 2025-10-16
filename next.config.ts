import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during builds
  },
  // Exclude admin routes in production builds
  ...(process.env.NODE_ENV === 'production' && {
    async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/admin/:path*',
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
