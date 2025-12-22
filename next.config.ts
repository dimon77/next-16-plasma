import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
};

export default nextConfig;
