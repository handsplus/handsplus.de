const { distDirForConfig } = require("./scripts/next-dist-dir");

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: distDirForConfig(),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  /** Dev: weniger Client-Chunks (hilft bei vereinzeltem Cache-Mismatch). */
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
        runtimeChunk: false,
      };
    }
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    const out = [];

    if (isDev) {
      out.push({
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, max-age=0",
          },
          { key: "Pragma", value: "no-cache" },
        ],
      });
    }

    out.push({
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    });

    if (process.env.NODE_ENV === "production") {
      out.push({
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      });
    }

    return out;
  },
};

module.exports = nextConfig;
