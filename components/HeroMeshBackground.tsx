/** Dekorative Mesh-Hintergrundebenen für grüne Hero-Sektionen (Startseite, Über uns, …). */
export function HeroMeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#1e4d44_0%,#256358_30%,#3b7564_55%,#5aa88f_80%,#68BCA0_100%)]" />
      <div className="hero-mesh-accent absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_88%_18%,rgba(104,188,160,0.55),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_75%_92%,rgba(104,188,160,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_12%_35%,rgba(45,90,78,0.28),transparent_50%)]" />
      <div className="absolute -top-20 right-[5%] h-96 w-96 rounded-full bg-[#68BCA0]/35 blur-[96px] sm:h-[24rem] sm:w-[24rem]" />
      <div className="absolute bottom-0 right-[15%] h-64 w-64 rounded-full bg-[#75c3ab]/30 blur-[72px]" />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
