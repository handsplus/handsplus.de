import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  CANONICAL_ORIGIN,
  normalizeLegacyPath,
  resolveLegacyTarget,
} from "@/lib/legacy-wix-redirects";

/**
 * P1-4: Legacy-Wix + www in genau einem Hop (NFC/Latin-1-Normalisierung).
 * Zusätzlich: aktueller Pfad für die Desktop-Navigation.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const rawPath = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  const legacyTarget = resolveLegacyTarget(rawPath);

  if (legacyTarget) {
    if (legacyTarget.startsWith("http://") || legacyTarget.startsWith("https://")) {
      return NextResponse.redirect(legacyTarget, 308);
    }
    return NextResponse.redirect(new URL(legacyTarget + search, CANONICAL_ORIGIN), 308);
  }

  if (host === "www.handsplus.de") {
    const p = normalizeLegacyPath(rawPath);
    return NextResponse.redirect(new URL(p + search, CANONICAL_ORIGIN), 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
