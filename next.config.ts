import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  images: {
    domains: ["admin.stadtcard.de"], // 👈 add this
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.stadtcard.de",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
