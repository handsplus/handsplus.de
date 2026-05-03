import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://handsplus.de";
const defaultTitle = "Arbeitsschutz & Brandschutz Köln | H&S+";
const defaultDescription =
  "Arbeitsschutz, Brandschutz und Managementsysteme in Köln – Fachkraft für Arbeitssicherheit, Brandschutzbeauftragter, SiGeKo. Kostenlose Erstberatung.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e4d44",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: defaultTitle,
    template: "%s | H&S+",
  },
  description: defaultDescription,
  keywords: [
    "Arbeitsschutz Köln",
    "Brandschutz Köln",
    "Fachkraft für Arbeitssicherheit",
    "Brandschutzbeauftragter",
    "Brandschutz Sachverständiger",
    "SiGeKo",
    "Elektrosicherheit",
    "Managementsysteme",
    "Health and Safety",
    "handsplus",
  ],
  authors: [{ name: "Health and Safety +", url: BASE_URL }],
  creator: "Health and Safety +",
  publisher: "Health and Safety +",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "H&S+ Health and Safety +",
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "H&S+ Health and Safety +" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}#organization`,
    name: "Health and Safety +",
    alternateName: "H&S+ Health and Safety Plus",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/logo.png`,
    description: defaultDescription,
    telephone: "+49-152-28261619",
    email: "kontakt@handsplus.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barcelona-Allee 12",
      addressLocality: "Köln",
      postalCode: "51103",
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.9375,
      longitude: 6.975,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.9375, longitude: 6.975 },
      geoRadius: "50000",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "42",
      reviewCount: "42",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+49-152-28261619",
      email: "kontakt@handsplus.de",
      contactType: "customer service",
      areaServed: "DE",
      availableLanguage: "German",
    },
    knowsAbout: [
      "Arbeitsschutz",
      "Brandschutz",
      "Brandschutz Sachverständiger",
      "Fachkraft für Arbeitssicherheit",
      "Brandschutzbeauftragter",
      "SiGeKo",
      "Elektrosicherheit",
      "Managementsysteme",
      "ISO 45001",
      "DGUV Vorschrift 2",
      "Gefährdungsbeurteilung",
    ],
    sameAs: [
      "https://www.youtube.com/@handsplus",
      "https://www.linkedin.com/company/health-and-safety-plus/",
      "https://www.facebook.com/people/Health-and-Safety-/61565969362568/",
      "https://www.instagram.com/healthandsafetyplus/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "H&S+ Health and Safety +",
    url: BASE_URL,
    description: defaultDescription,
    publisher: { "@id": `${BASE_URL}#organization` },
    inLanguage: "de-DE",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/wissen/faq` },
      "query-input": "required name=search_term_string",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-hero] h1", "[data-hero] p", "main h1", "main h2"],
    },
  };

  const criticalCSS = [
    "body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;-webkit-font-smoothing:antialiased;background:#f8fafc;color:#0f172a;min-height:100vh;margin:0;display:flex;flex-direction:column}",
    "main{flex:1;min-height:60vh;background:#fff;color:#1e293b}",
    ".skip-link{position:absolute;top:-3rem;left:.5rem;z-index:100;padding:.5rem 1rem;background:#1e4d44;color:#fff;font-weight:600;border-radius:.25rem;transition:top .2s ease}.skip-link:focus{top:.5rem;outline:2px solid #68BCA0;outline-offset:2px}",
    "[data-hero]{background:linear-gradient(180deg,#1e4d44 0%,#2d5a4e 50%,#256358 100%);color:#fff;position:relative}",
    "[data-hero] h1{font-size:clamp(1.875rem,4vw,3rem);font-weight:700;letter-spacing:-.025em;max-width:56rem;margin:0}",
    "[data-hero] p{margin-top:1.5rem;font-size:1.125rem;max-width:48rem;color:rgba(255,255,255,.9)}",
  ].join("");

  return (
    <html lang="de">
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <a
          href="#main-content"
          className="skip-link"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 min-h-[60vh] bg-white text-slate-800">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
