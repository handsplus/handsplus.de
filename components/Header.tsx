import Link from "next/link";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { DesktopNav } from "@/components/DesktopNav";

const MobileHeaderNav = dynamic(
  () => import("@/components/MobileHeaderNav").then((m) => m.MobileHeaderNav),
  { ssr: false },
);

export function Header() {
  const pathname = headers().get("x-pathname") ?? "/";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center min-w-0 shrink" aria-label="Startseite">
            <img
              src="/logo.svg"
              alt="H&S+ Health and Safety + – Managementsysteme"
              width={400}
              height={70}
              className="h-[19px] w-auto min-h-[19px] max-w-full object-contain sm:h-[22px]"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            <DesktopNav pathname={pathname} />
          </nav>

          <MobileHeaderNav />
        </div>
      </div>
    </header>
  );
}
