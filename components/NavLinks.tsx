"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const LEISTUNGEN_LINKS = [
  { href: "/arbeitsschutz", label: "Arbeitsschutz" },
  { href: "/brandschutz", label: "Brandschutz" },
  { href: "/sigeko", label: "SiGeKo" },
  { href: "/elektrosicherheit", label: "Elektrosicherheit" },
  { href: "/schulungen", label: "Schulungen" },
  { href: "/managementsysteme", label: "Managementsysteme" },
];

const OTHER_LINKS = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/wissen", label: "Wissen" },
  { href: "/kontakt", label: "Kontakt" },
];

function isLeistungenActive(pathname: string) {
  return pathname === "/leistungen" || LEISTUNGEN_LINKS.some((l) => l.href !== "/leistungen" && pathname.startsWith(l.href));
}

export function NavLinks({
  variant = "desktop",
  onLinkClick,
}: {
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const leistungenGroupRef = useRef<HTMLDivElement>(null);
  const leistungenActive = isLeistungenActive(pathname);

  // Desktop-Dropdown schließen, sobald die Seite wechselt (z. B. nach Klick auf eine Leistung)
  useEffect(() => {
    setDesktopDropdownOpen(false);
  }, [pathname]);

  const handleLeistungenGroupBlur = () => {
    setTimeout(() => {
      if (!leistungenGroupRef.current?.contains(document.activeElement)) {
        setDesktopDropdownOpen(false);
      }
    }, 0);
  };

  if (variant === "mobile") {
    return (
      <ul className="flex flex-col gap-1 list-none pl-0" role="list">
        <li>
          <Link
            href="/"
            onClick={onLinkClick}
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
            className={`overflow-hidden transition-all ${leistungenOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <ul className="list-none pl-0 pb-2 pl-4 border-l-2 border-slate-200 ml-2 space-y-0" role="list">
              {LEISTUNGEN_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onLinkClick}
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
              onClick={onLinkClick}
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
    );
  }

  // Desktop: Dropdown bei Hover und Focus
  return (
    <>
      <Link
        href="/"
        className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-primary-800" : "text-slate-600 hover:text-slate-900"}`}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Start
      </Link>

      <div
        ref={leistungenGroupRef}
        className="relative group"
        onMouseEnter={() => setDesktopDropdownOpen(true)}
        onMouseLeave={() => setDesktopDropdownOpen(false)}
        onFocus={() => setDesktopDropdownOpen(true)}
        onBlur={handleLeistungenGroupBlur}
      >
        <Link
          href="/leistungen"
          className={`inline-flex items-center gap-0.5 text-sm font-medium transition-colors ${
            leistungenActive ? "text-primary-800" : "text-slate-600 hover:text-slate-900"
          }`}
          aria-current={pathname === "/leistungen" ? "page" : undefined}
          aria-haspopup="true"
          aria-expanded={desktopDropdownOpen}
        >
          Leistungen
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
        <div
          className={`absolute left-0 top-full pt-1 z-50 min-w-[200px] ${desktopDropdownOpen ? "visible" : "invisible"}`}
        >
          <div className="rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
            {LEISTUNGEN_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  pathname === href ? "bg-primary-50 text-primary-800 font-medium" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {OTHER_LINKS.filter((l) => l.href !== "/").map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium transition-colors ${pathname === href ? "text-primary-800" : "text-slate-600 hover:text-slate-900"}`}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
