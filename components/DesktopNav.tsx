import Link from "next/link";
import { LEISTUNGEN_LINKS, OTHER_LINKS, isLeistungenActive } from "@/lib/navConfig";

type DesktopNavProps = { pathname: string };

/**
 * Reine Server-Komponente: kein use client, kein Hydration-Overhead.
 * Dropdown „Leistungen“ per CSS (hover + focus-within), wie zuvor per Maus/Tastatur bedienbar.
 */
export function DesktopNav({ pathname }: DesktopNavProps) {
  const leistungenActive = isLeistungenActive(pathname);

  return (
    <>
      <Link
        href="/"
        className={`text-sm font-medium transition-colors ${
          pathname === "/" ? "text-primary-800" : "text-slate-600 hover:text-slate-900"
        }`}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Start
      </Link>

      <div className="relative group">
        <Link
          href="/leistungen"
          className={`inline-flex items-center gap-0.5 text-sm font-medium transition-colors ${
            leistungenActive ? "text-primary-800" : "text-slate-600 hover:text-slate-900"
          }`}
          aria-current={pathname === "/leistungen" ? "page" : undefined}
          aria-haspopup="true"
        >
          Leistungen
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
        <div
          className="absolute left-0 top-full z-50 min-w-[200px] pt-1 invisible opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
          role="presentation"
        >
          <div className="rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
            {LEISTUNGEN_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  pathname === href
                    ? "bg-primary-50 text-primary-800 font-medium"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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
          className={`text-sm font-medium transition-colors ${
            pathname === href ? "text-primary-800" : "text-slate-600 hover:text-slate-900"
          }`}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
