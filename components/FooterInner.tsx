import Link from "next/link";
import {
  footerSeiten,
  footerLeistungen,
  footerUnternehmen,
  socialLinks,
  IconPhone,
  IconMail,
  IconLocation,
  SocialIcon,
} from "./FooterParts";

export function FooterInner() {
  const footerStyle = { backgroundColor: "#1e4d44", color: "#cbd5e1", padding: "1.5rem 0" };
  return (
    <footer className="text-slate-300" style={footerStyle}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider">Websites</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="https://www.sigeko.koeln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 transition-colors"
                >
                  www.sigeko.koeln
                </a>
              </li>
              <li>
                <a
                  href="https://www.handsplus.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 transition-colors"
                >
                  www.handsplus.de
                </a>
              </li>
              <li>
                <a
                  href="https://www.arbeitssicherheit.nrw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 transition-colors"
                >
                  www.arbeitssicherheit.nrw
                </a>
              </li>
              <li>
                <a
                  href="https://www.brandschutzköln.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 transition-colors"
                >
                  www.brandschutzköln.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.arbeitssicherheitkoeln.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 transition-colors"
                >
                  www.arbeitssicherheitkoeln.de
                </a>
              </li>
            </ul>
            <div>
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Folgen Sie uns</p>
              <div className="flex gap-2">
                {socialLinks.map(({ href, label, icon }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-white/5 text-white/60 hover:text-white/90 hover:border-white/40 transition-colors"
                    aria-label={label}
                  >
                    <SocialIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Seiten</h3>
            <ul className="space-y-2">
              {footerSeiten.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {footerLeistungen.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {footerUnternehmen.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-white/40" aria-hidden>
                  <IconPhone className="w-5 h-5" />
                </span>
                <a href="tel:+4915228261619" className="hover:text-white/80 transition-colors">
                  0152 282 61619
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-white/40" aria-hidden>
                  <IconMail className="w-5 h-5" />
                </span>
                <a href="mailto:kontakt@handsplus.de" className="hover:text-white/80 transition-colors break-all">
                  kontakt@handsplus.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-white/40" aria-hidden>
                  <IconLocation className="w-5 h-5" />
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Barcelona-Allee+12+51103+K%C3%B6ln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  Barcelona-Allee 12, 51103 Köln
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Health and Safety +. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-white/40 text-center mt-0.5">
            Health and Safety + – handsplus.de
          </p>
        </div>
      </div>
    </footer>
  );
}
