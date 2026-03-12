"use client";

import { useState } from "react";
import Link from "next/link";

const arbeitssicherheitItems = [
  "Gefährdungsbeurteilung liegt vor und ist aktuell?",
  "Unterweisungen sind dokumentiert und wiederholt?",
  "Betriebsbegehungen durchgeführt?",
  "Arbeitsmittel/PSA geprüft und dokumentiert?",
  "Notfall- und Evakuierungsplan bekannt?",
];

const brandschutzItems = [
  "Brandschutzordnung (Teil A–C) vorhanden?",
  "Fluchtwege gekennzeichnet und freigehalten?",
  "Brandschutzunterweisung durchgeführt?",
  "Feuerlöscher zugänglich und geprüft?",
  "Alarmanlage / Melder funktionsfähig?",
];

const sigekoItems = [
  "SiGeKo für Baustelle bestellt?",
  "Sicherheits- und Gesundheitsschutzplan (SiGePlan) erstellt?",
  "Unternehmerübergabe / -abnahme dokumentiert?",
  "Koordinierungsphase eingehalten?",
];

function ChecklistSection({
  title,
  items,
  checked,
  onToggle,
}: {
  title: string;
  items: string[];
  checked: boolean[];
  onToggle: (i: number) => void;
}) {
  const count = checked.filter(Boolean).length;
  return (
    <section className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-slate-50/50">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">
        {count} von {items.length} erfüllt
      </p>
      <ul className="mt-6 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <input
              type="checkbox"
              id={`check-${title}-${i}`}
              checked={checked[i]}
              onChange={() => onToggle(i)}
              className="mt-1 h-5 w-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor={`check-${title}-${i}`} className="text-slate-700 cursor-pointer select-none">
              {item}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ChecklistenContent() {
  const [asChecked, setAsChecked] = useState<boolean[]>(arbeitssicherheitItems.map(() => false));
  const [bsChecked, setBsChecked] = useState<boolean[]>(brandschutzItems.map(() => false));
  const [sgChecked, setSgChecked] = useState<boolean[]>(sigekoItems.map(() => false));

  const toggle = (setter: React.Dispatch<React.SetStateAction<boolean[]>>, i: number) => {
    setter((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        Selbstbewertung
      </h1>
      <p className="mt-6 text-lg text-slate-600 max-w-2xl">
        Erste Einschätzung für Ihren Betrieb – keine Fachberatung. Wir unterstützen Sie gerne bei der vollständigen Umsetzung.
      </p>

      <div className="mt-12 space-y-10">
        <ChecklistSection
          title="Arbeitssicherheit / Gefährdungsbeurteilung"
          items={arbeitssicherheitItems}
          checked={asChecked}
          onToggle={(i) => toggle(setAsChecked, i)}
        />
        <ChecklistSection
          title="Brandschutz"
          items={brandschutzItems}
          checked={bsChecked}
          onToggle={(i) => toggle(setBsChecked, i)}
        />
        <ChecklistSection
          title="SiGeKo (Baustelle)"
          items={sigekoItems}
          checked={sgChecked}
          onToggle={(i) => toggle(setSgChecked, i)}
        />
      </div>

      <section className="mt-12 p-6 rounded-xl bg-primary-50 border border-primary-100">
        <h2 className="text-xl font-semibold text-slate-900">Professionelle Unterstützung</h2>
        <p className="mt-2 text-slate-600">
          Gefährdungsbeurteilung, Brandschutz oder SiGeKo für Ihre Baustelle – wir beraten Sie gerne.
        </p>
        <Link
          href="/kontakt"
          className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Kostenlose Erstberatung buchen
        </Link>
      </section>

      <div className="mt-10">
        <Link href="/wissen" className="text-primary-800 font-medium hover:text-primary-900 inline-flex items-center">
          ← Zurück zu Wissen & Ressourcen
        </Link>
      </div>
    </>
  );
}
