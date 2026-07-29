import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Featured images are served from the WordPress uploads directory.
    remotePatterns: [
      new URL("https://dooda.com.au/**"),
      new URL("http://localhost:8899/**"),
    ],
  },
};

export default nextConfig;
