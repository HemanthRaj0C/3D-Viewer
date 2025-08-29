import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Existing config options */
  typescript: {
    // WARNING: This allows production builds to succeed even if there are type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
