import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Nur Seiten-Pfade: aktuellen Pfad für Server Components (aktive Desktop-Navigation).
 * Keine Middleware auf `/_next/*` – vermeidet Konflikte mit Dev-Assets; Cache-Header nur in next.config.js.
 */
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
