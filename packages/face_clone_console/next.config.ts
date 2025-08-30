import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  publicRuntimeConfig: {
    port: process.env.PORT || 3000,
    environment: process.env.ENVIRONMENT || "development",
  },
};

export default nextConfig;
