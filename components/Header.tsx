import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/components/NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center shrink-0" aria-label="Startseite">
            <Image
              src="/logo.svg"
              alt="H&S+ Health and Safety + – Managementsysteme"
              width={3049}
              height={501}
              className="h-[17px] w-auto"
              priority
              fetchPriority="high"
              sizes="120px"
              unoptimized
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            <NavLinks variant="desktop" />
          </nav>

          {/* Mobil: Menü ohne JavaScript (details/summary) */}
          <details className="lg:hidden group peer" aria-label="Menü öffnen oder schließen">
            <summary className="list-none cursor-pointer p-2 -mr-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menü</span>
              <span className="group-open:hidden inline-block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
              <span className="hidden group-open:inline-block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </summary>
            <nav className="absolute left-0 right-0 top-16 border-t border-slate-200 bg-white py-4 px-4 shadow-lg lg:hidden" aria-label="Mobile Navigation">
              <NavLinks variant="mobile" />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
