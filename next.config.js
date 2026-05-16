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
  /** arbeitsschutzkoeln.de → kanonische Domain (Vercel + Domain bei Projekt hinterlegen). */
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

      // Alte Wix-Seiten → neue Seiten
      { source: "/%C3%BCberuns", destination: "/ueber-uns", permanent: true },
      { source: "/überuns", destination: "/ueber-uns", permanent: true },
      { source: "/about-4", destination: "/ueber-uns", permanent: true },
      { source: "/datenschutz", destination: "/impressum", permanent: true },
      { source: "/leistung-hseq", destination: "/leistungen", permanent: true },

      // Alte Wix-Blog-Posts → passende neue Blog-Artikel oder Leistungsseiten
      { source: "/post/akteure-im-arbeitsschutz-wer-k%C3%BCmmert-sich-um-was", destination: "/wissen/blog/akteure-arbeitsschutz", permanent: true },
      { source: "/post/muss-der-arbeitgeber-getr%C3%A4nke-zur-verf%C3%BCgung-stellen", destination: "/wissen/blog/getraenke-am-arbeitsplatz", permanent: true },
      { source: "/post/welche-auswirkungen-hat-eine-nicht-erfolgte-bestellung-einer-fachkraft-f%C3%BCr-arbeitssicherheit", destination: "/wissen/blog/bestellung-fachkraft-arbeitssicherheit", permanent: true },
      { source: "/post/brandschutz-beim-umgang-mit-lithium-ionen-batterien-begriffsbestimmungen", destination: "/wissen/blog/brandschutz-lithium-ionen-batterien", permanent: true },
      { source: "/post/brandschutz-brennbare-stoffe-gefahren-und-eigenschaften", destination: "/wissen/blog/brandschutz-brennbare-stoffe", permanent: true },
      { source: "/post/dguv-vorschrift-1-grunds%C3%A4tze-der-pr%C3%A4vention-im-arbeitsschutz", destination: "/wissen/blog/dguv-vorschrift-2", permanent: true },
      { source: "/post/arbeitssicherheit-gef%C3%A4hrdungsbeurteilung", destination: "/wissen/blog/gefaehrdungsbeurteilung-ablauf", permanent: true },
      { source: "/post/arbeitssicherheit-auf-baustellen-sigeko-sicherheits-und-gesundheitsschutzkoordinator", destination: "/sigeko", permanent: true },
      { source: "/post/arbeitsschutz", destination: "/arbeitsschutz", permanent: true },
      { source: "/post/brandschutzbeauftragte", destination: "/brandschutz", permanent: true },
      { source: "/post/mobbing-am-arbeitsplatz-ursachen-folgen-und-pr%C3%A4vention", destination: "/wissen/blog", permanent: true },
      { source: "/post/wann-brauche-ich-eine-fachkraft-f%C3%BCr-arbeitssicherheit", destination: "/wissen/blog/bestellung-fachkraft-arbeitssicherheit", permanent: true },
      { source: "/post/pflichten%C3%BCbertragung-im-arbeitsschutz", destination: "/arbeitsschutz", permanent: true },
      { source: "/post/sicherheitsbeauftragte-sibe", destination: "/arbeitsschutz", permanent: true },
      { source: "/post/wem-muss-die-fachkraft-f%C3%BCr-arbeitssicherheit-unterstellt-werden", destination: "/arbeitsschutz", permanent: true },
      { source: "/post/wie-ist-der-arbeitsschutz-organisiert", destination: "/arbeitsschutz", permanent: true },
      { source: "/post/brandschutz-erlaubnisschein-f%C3%BCr-schwei%C3%9F-schneid-l%C3%B6t-auftau-und-trennschleifarbeiten", destination: "/brandschutz", permanent: true },
      { source: "/post/muss-eine-ladestation-f%C3%BCr-elektro-autos-in-garagen-genehmigt-werden", destination: "/elektrosicherheit", permanent: true },

      // Kannibalisierung: doppelter Unterweisungs-Blog → Hauptartikel
      {
        source: "/wissen/blog/unterweisung-arbeitssicherheit-pflicht",
        destination: "/wissen/blog/unterweisung-arbeitsschutz-fristen",
        permanent: true,
      },
      { source: "/post/effektiver-brandschutz-warum-sprinkleranlagen-leben-retten-und-mythen-widerlegen", destination: "/brandschutz", permanent: true },
      { source: "/post/brandschutz-brandbek%C3%A4mpfung-von-elektrofahrzeugen", destination: "/brandschutz", permanent: true },
    ];
  },
};

module.exports = nextConfig;
