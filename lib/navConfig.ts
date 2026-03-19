/** Gemeinsame Navigationsdaten (Header Desktop/Mobil). */
export const LEISTUNGEN_LINKS = [
  { href: "/arbeitsschutz", label: "Arbeitsschutz" },
  { href: "/brandschutz", label: "Brandschutz" },
  { href: "/sigeko", label: "SiGeKo" },
  { href: "/elektrosicherheit", label: "Elektrosicherheit" },
  { href: "/schulungen", label: "Schulungen" },
  { href: "/managementsysteme", label: "Managementsysteme" },
] as const;

export const OTHER_LINKS = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/wissen", label: "Wissen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function isLeistungenActive(pathname: string) {
  return (
    pathname === "/leistungen" ||
    LEISTUNGEN_LINKS.some((l) => pathname.startsWith(l.href))
  );
}
