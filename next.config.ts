// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Webpack
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  // 👇 This line tells Next.js to not use Turbopack
  turbopack: {
    rules: {
      "*.svg": { loaders: ["@svgr/webpack"], as: "*.js" },
    },
  },
};


export default nextConfig;
