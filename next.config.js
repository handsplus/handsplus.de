const { distDirForConfig } = require("./scripts/next-dist-dir");

/**
 * Security-Header-Baseline (ATT-45).
 * CSP bewusst Report-Only: Site nutzt Inline-JSON-LD + critical CSS + Formspree.
 * Enforce erst nach Report-Auswertung — lieber laufende Site als harte CSP.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy-Report-Only",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self' https://formspree.io",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://formspree.io",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: distDirForConfig(),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  /** Trailing-Slash-Hop vermeiden — Normalisierung läuft in middleware (Legacy/NFC). */
  skipTrailingSlashRedirect: true,
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
    const isProd = process.env.NODE_ENV === "production";
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

    const security = [...SECURITY_HEADERS];
    if (isProd) {
      security.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }

    out.push({
      source: "/(.*)",
      headers: security,
    });

    if (isProd) {
      out.push({
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      });
    }

    return out;
  },
  /**
   * Legacy-Wix + www.handsplus.de → ein Hop in middleware.ts (NFC).
   * Hier nur Alias-Domains und interne Blog-Umzüge.
   */
  async redirects() {
    const target = "https://handsplus.de";

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "arbeitsschutzkoeln.de" }],
        destination: `${target}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.arbeitsschutzkoeln.de" }],
        destination: `${target}/:path*`,
        permanent: true,
      },
      {
        source: "/wissen/blog/unterweisung-arbeitssicherheit-pflicht",
        destination: "/wissen/blog/unterweisung-arbeitsschutz-fristen",
        permanent: true,
      },
      {
        source: "/wissen/blog/sigeko-begehung-seitenschutz-hotelumbau-koeln",
        destination: "/wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln",
        permanent: true,
      },
      {
        source: "/wissen/blog/asr-a5-1-bildschirmarbeitsplaetze",
        destination: "/wissen/blog/asr-a6-bildschirmarbeit",
        permanent: true,
      },
      {
        source: "/wissen/blog/sigeko-projektverlauf-neubau-wipperfuerth",
        destination: "/wissen/blog/sigeko-projektverlauf-neubau-wohngebaeude-nrw",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
