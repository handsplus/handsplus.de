"use client";

import { useState } from "react";
import Link from "next/link";

export function RechnerContent() {
  const [beschaeftigt, setBeschaeftigt] = useState<number>(50);
  const [anteil, setAnteil] = useState<number>(100);

  const anwesend = Math.max(0, (beschaeftigt * anteil) / 100);
  const pro50 = Math.ceil(anwesend / 50) || 0;
  const prozent5 = Math.ceil(anwesend * 0.05) || 0;
  const brandschutzhelfer = anwesend === 0 ? 0 : Math.max(1, Math.max(pro50, prozent5));

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        Nützliche Berechnungen
      </h1>
      <p className="mt-6 text-lg text-slate-600 max-w-2xl">
        Orientierungshilfen für Brandschutzhelfer und SiGeKo – unverbindlich, ohne Gewähr.
      </p>

      <section className="mt-12 p-6 sm:p-8 rounded-xl border border-slate-200 bg-slate-50/50">
        <h2 className="text-xl font-semibold text-slate-900">
          Anzahl Brandschutzhelfer (ASR A2.2)
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Nach ASR A2.2 „Maßnahmen gegen Brände“ müssen ausreichend Brandschutzhelfer ausgebildet sein. Orientierung: mind. 5 % der Beschäftigten bzw. 1 Helfer pro 50 Beschäftigte – der höhere Wert gilt.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="beschaeftigt" className="block text-sm font-medium text-slate-700 mb-1">
              Anzahl der Beschäftigten
            </label>
            <input
              id="beschaeftigt"
              type="number"
              min={1}
              max={10000}
              value={beschaeftigt}
              onChange={(e) => setBeschaeftigt(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="anteil" className="block text-sm font-medium text-slate-700 mb-1">
              Anteil anwesend (z. B. Schicht) in %
            </label>
            <input
              id="anteil"
              type="number"
              min={1}
              max={100}
              value={anteil}
              onChange={(e) => setAnteil(Math.max(1, Math.min(100, parseInt(e.target.value, 10) || 100)))}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
        </div>
        <p className="mt-6 p-4 rounded-lg bg-white border border-primary-200 text-slate-800 font-medium">
          Orientierungswert: mind. <strong>{brandschutzhelfer} Brandschutzhelfer</strong>
        </p>
        <p className="mt-2 text-sm text-slate-500">
          (1 pro 50 Beschäftigte bzw. 5 % – es gilt der höhere Wert; bei 50 Beschäftigten: 1 pro 50 = 1, 5 % = 3)
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Unverbindliche Orientierung. Maßgeblich sind ASR A2.2 und die Gefährdungsbeurteilung. Wir beraten Sie gerne.
        </p>
      </section>

      <section className="mt-12 p-6 sm:p-8 rounded-xl border border-slate-200 bg-slate-50/50">
        <h2 className="text-xl font-semibold text-slate-900">SiGeKo-Honorar</h2>
        <p className="mt-2 text-slate-600">
          Das Honorar für die Sicherheits- und Gesundheitsschutzkoordination hängt von Baustellengröße, Laufzeit und Leistungsumfang ab (z. B. nur Koordinierungsphase oder auch Überwachung). Es gibt keine verbindlichen Tarife – wir erstellen Ihnen gerne ein individuelles Angebot.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Unverbindliches Angebot anfragen
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
