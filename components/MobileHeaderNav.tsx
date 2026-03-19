"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LEISTUNGEN_LINKS, OTHER_LINKS } from "@/lib/navConfig";

/**
 * Minimale Client-Insel: nur Mobilmenü-Zustand (Öffnen + Leistungen-Akkordeon).
 * Pfad kommt von usePathname (nach Soft-Navigation sofort korrekt).
 */
export function MobileHeaderNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setLeistungenOpen(false);
  }, [pathname]);

  return (
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
          <ul className="flex flex-col gap-1 list-none pl-0" role="list">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  pathname === "/" ? "text-primary-800" : "text-slate-700"
                }`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Start
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setLeistungenOpen((o) => !o)}
                className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-slate-700"
                aria-expanded={leistungenOpen}
                aria-controls="nav-leistungen-mobile"
                id="nav-leistungen-mobile-btn"
              >
                Leistungen
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform ${leistungenOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id="nav-leistungen-mobile"
                role="region"
                aria-labelledby="nav-leistungen-mobile-btn"
                className={`overflow-hidden transition-[max-height,opacity] duration-200 ${leistungenOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="list-none pl-0 pb-2 pl-4 border-l-2 border-slate-200 ml-2 space-y-0" role="list">
                  {LEISTUNGEN_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2 text-sm transition-colors ${
                          pathname === href ? "text-primary-800 font-medium" : "text-slate-600"
                        }`}
                        aria-current={pathname === href ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {OTHER_LINKS.filter((l) => l.href !== "/").map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    pathname === href ? "text-primary-800" : "text-slate-700"
                  }`}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
