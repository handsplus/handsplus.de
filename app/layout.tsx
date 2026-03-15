import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handsplus.de";
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
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: "H&S+ Health and Safety +" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo.svg"],
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
    "@type": "Organization",
    name: "Health and Safety +",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barcelona-Allee 12",
      addressLocality: "Köln",
      postalCode: "51103",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+49-152-28261619",
      email: "kontakt@handsplus.de",
      contactType: "customer service",
      areaServed: "DE",
      availableLanguage: "German",
    },
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
  };

  return (
    <html lang="de">
      <body
        className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased"
        style={{ minHeight: "100vh", margin: 0, backgroundColor: "#f8fafc", color: "#0f172a" }}
      >
        <a
          href="#main-content"
          className="skip-link"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 min-h-[60vh] bg-white text-slate-800"
          style={{ flex: "1 1 auto", minHeight: "60vh", backgroundColor: "#ffffff", color: "#1e293b" }}
        >
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
