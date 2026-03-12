"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/components/NavLinks";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Menü automatisch schließen, sobald eine neue Seite geladen wird
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center min-w-0 shrink" aria-label="Startseite">
            <Image
              src="/logo.png"
              alt="H&S+ Health and Safety + – Managementsysteme"
              width={400}
              height={70}
              className="h-[23px] w-auto min-h-[23px] max-w-full object-contain sm:h-[27px]"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 180px, 220px"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            <NavLinks variant="desktop" />
          </nav>

          {/* Mobil: gesteuertes Menü mit Zustand, damit es zuverlässig schließt */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-label="Menü öffnen oder schließen"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="p-2 -mr-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span className="sr-only">Menü</span>
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {mobileOpen && (
              <nav
                className="absolute left-0 right-0 top-16 border-t border-slate-200 bg-white py-4 px-4 shadow-lg"
                aria-label="Mobile Navigation"
              >
                <NavLinks variant="mobile" onLinkClick={() => setMobileOpen(false)} />
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
