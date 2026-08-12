import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root: an unrelated lockfile in a parent directory
  // otherwise wins the inference and Turbopack resolves from the wrong place.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Real project stills land in /public/media. Remote sources (CDN, DAM) get
    // added here rather than being inlined at the call site.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
