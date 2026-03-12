type ContactStripProps = { variant?: "default" | "light" };

const iconCircleClass = {
  light: "flex shrink-0 items-center justify-center w-9 h-9 rounded-full border border-white/25 bg-white/10 text-white",
  default: "flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600",
};

const linkClass = {
  light: "group flex items-center gap-3 text-white/90 hover:text-white transition-colors",
  default: "inline-flex items-center gap-2 text-slate-700 font-medium hover:text-primary-800 transition-colors",
};

const iconSize = { light: "w-4 h-4", default: "w-5 h-5" };

export function ContactStrip({ variant = "default" }: ContactStripProps) {
  const isLight = variant === "light";
  const circleClass = iconCircleClass[variant];
  const link = linkClass[variant];
  const iconCl = iconSize[variant];
  const labelClass = isLight ? "text-[10px] text-white/60 uppercase tracking-widest font-medium" : "text-slate-500";

  if (isLight) {
    return (
      <div className="flex flex-wrap items-center gap-6 sm:gap-8">
        <a href="tel:+4915228261619" className={link}>
          <span className={circleClass}>
            <svg className={iconCl} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </span>
          <span className="flex flex-col gap-px">
            <span className={labelClass}>Telefon</span>
            <span className="text-sm font-semibold text-white tracking-tight">0152 282 61619</span>
          </span>
        </a>
        <a href="mailto:kontakt@handsplus.de?subject=Kostenlose%20Beratung" className={link}>
          <span className={circleClass}>
            <svg className={iconCl} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </span>
          <span className="flex flex-col gap-px">
            <span className={labelClass}>E-Mail</span>
            <span className="text-sm font-semibold text-white tracking-tight">kontakt@handsplus.de</span>
          </span>
        </a>
        <a href="https://wa.me/4915228261619" target="_blank" rel="noopener noreferrer" className={link}>
          <span className={circleClass}>
            <svg className={iconCl} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <span className="flex flex-col gap-px">
            <span className={labelClass}>WhatsApp</span>
            <span className="text-sm font-semibold text-white tracking-tight">Chat starten</span>
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-6 sm:gap-8">
      <a href="tel:+4915228261619" className={link}>
        <span className="sr-only">Telefon</span>
        <svg className={`${iconCl} text-slate-500`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span><span className={labelClass}>Telefon</span> 0152 282 61619</span>
      </a>
      <a href="mailto:kontakt@handsplus.de?subject=Kostenlose%20Beratung" className={link}>
        <span className="sr-only">E-Mail</span>
        <svg className={`${iconCl} text-slate-500`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span><span className={labelClass}>E-Mail</span> kontakt@handsplus.de</span>
      </a>
      <a href="https://wa.me/4915228261619" target="_blank" rel="noopener noreferrer" className={link}>
        <span className="sr-only">WhatsApp</span>
        <svg className={`${iconCl} text-slate-500`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span><span className={labelClass}>WhatsApp</span> Chat starten</span>
      </a>
    </div>
  );
}
