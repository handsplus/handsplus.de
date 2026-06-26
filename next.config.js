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
  /** Fremd-Domains + www → kanonische Domain (Vercel + Domain bei Projekt hinterlegen). */
  async redirects() {
    const target = "https://handsplus.de";

    /** @param {{ destination: string, sources: string[] }} entry */
    const expandLegacy = ({ destination, sources }) =>
      sources.map((source) => ({ source, destination, permanent: true }));

    const legacyWix = [
      { destination: "/ueber-uns", sources: ["/%C3%BCberuns", "/überuns", "/about-4"] },
      { destination: "/leistungen", sources: ["/leistung-hseq"] },
      {
        destination: "/wissen/blog/akteure-arbeitsschutz",
        sources: [
          "/post/akteure-im-arbeitsschutz-wer-k%C3%BCmmert-sich-um-was",
          "/post/akteure-im-arbeitsschutz-wer-kümmert-sich-um-was",
        ],
      },
      {
        destination: "/wissen/blog/getraenke-am-arbeitsplatz",
        sources: [
          "/post/muss-der-arbeitgeber-getr%C3%A4nke-zur-verf%C3%BCgung-stellen",
          "/post/muss-der-arbeitgeber-getränke-zur-verfügung-stellen",
        ],
      },
      {
        destination: "/wissen/blog/bestellung-fachkraft-arbeitssicherheit",
        sources: [
          "/post/welche-auswirkungen-hat-eine-nicht-erfolgte-bestellung-einer-fachkraft-f%C3%BCr-arbeitssicherheit",
          "/post/welche-auswirkungen-hat-eine-nicht-erfolgte-bestellung-einer-fachkraft-für-arbeitssicherheit",
          "/post/wann-brauche-ich-eine-fachkraft-f%C3%BCr-arbeitssicherheit",
          "/post/wann-brauche-ich-eine-fachkraft-für-arbeitssicherheit",
        ],
      },
      {
        destination: "/wissen/blog/brandschutz-lithium-ionen-batterien",
        sources: ["/post/brandschutz-beim-umgang-mit-lithium-ionen-batterien-begriffsbestimmungen"],
      },
      {
        destination: "/wissen/blog/brandschutz-brennbare-stoffe",
        sources: ["/post/brandschutz-brennbare-stoffe-gefahren-und-eigenschaften"],
      },
      {
        destination: "/wissen/blog/dguv-vorschrift-2",
        sources: [
          "/post/dguv-vorschrift-1-grunds%C3%A4tze-der-pr%C3%A4vention-im-arbeitsschutz",
          "/post/dguv-vorschrift-1-grundsätze-der-prävention-im-arbeitsschutz",
        ],
      },
      {
        destination: "/wissen/blog/gefaehrdungsbeurteilung-ablauf",
        sources: [
          "/post/arbeitssicherheit-gef%C3%A4hrdungsbeurteilung",
          "/post/arbeitssicherheit-gefährdungsbeurteilung",
        ],
      },
      {
        destination: "/sigeko",
        sources: [
          "/post/arbeitssicherheit-auf-baustellen-sigeko-sicherheits-und-gesundheitsschutzkoordinator",
        ],
      },
      { destination: "/arbeitsschutz", sources: ["/post/arbeitsschutz"] },
      { destination: "/brandschutz", sources: ["/post/brandschutzbeauftragte"] },
      {
        destination: "/wissen/blog",
        sources: [
          "/post/mobbing-am-arbeitsplatz-ursachen-folgen-und-pr%C3%A4vention",
          "/post/mobbing-am-arbeitsplatz-ursachen-folgen-und-prävention",
        ],
      },
      {
        destination: "/arbeitsschutz",
        sources: [
          "/post/pflichten%C3%BCbertragung-im-arbeitsschutz",
          "/post/pflichtenübertragung-im-arbeitsschutz",
          "/post/sicherheitsbeauftragte-sibe",
          "/post/wem-muss-die-fachkraft-f%C3%BCr-arbeitssicherheit-unterstellt-werden",
          "/post/wem-muss-die-fachkraft-für-arbeitssicherheit-unterstellt-werden",
          "/post/wie-ist-der-arbeitsschutz-organisiert",
        ],
      },
      {
        destination: "/brandschutz",
        sources: [
          "/post/brandschutz-erlaubnisschein-f%C3%BCr-schwei%C3%9F-schneid-l%C3%B6t-auftau-und-trennschleifarbeiten",
          "/post/brandschutz-erlaubnisschein-für-schweiß-schneid-löt-auftau-und-trennschleifarbeiten",
          "/post/effektiver-brandschutz-warum-sprinkleranlagen-leben-retten-und-mythen-widerlegen",
          "/post/brandschutz-brandbek%C3%A4mpfung-von-elektrofahrzeugen",
          "/post/brandschutz-brandbekämpfung-von-elektrofahrzeugen",
        ],
      },
      {
        destination: "/elektrosicherheit",
        sources: [
          "/post/muss-eine-ladestation-f%C3%BCr-elektro-autos-in-garagen-genehmigt-werden",
          "/post/muss-eine-ladestation-für-elektro-autos-in-garagen-genehmigt-werden",
        ],
      },
    ];

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.handsplus.de" }],
        destination: `${target}/:path*`,
        permanent: true,
      },
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
      ...legacyWix.flatMap(expandLegacy),
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
