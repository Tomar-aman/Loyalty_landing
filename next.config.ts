import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // SVGR configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
