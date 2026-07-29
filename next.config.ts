import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Featured images are served from the WordPress uploads directory.
    remotePatterns: [new URL("https://dooda.com.au/**")],
    /*
     * Development only, and only because of DNS64/NAT64.
     *
     * On a NAT64 network the resolver synthesises an AAAA record for every
     * IPv4-only host, so dooda.com.au (72.60.75.224) also answers as
     * 64:ff9b::483c:4be0. Next resolves with `{ family: 0, all: true }` and
     * refuses the fetch if *any* returned address is private — and it counts
     * the 64:ff9b::/96 well-known prefix as private. The host itself is public,
     * so this is purely a local-network artifact.
     *
     * Left off in production, where the SSRF guard is worth keeping.
     */
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
