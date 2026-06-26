import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/datenschutz",
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Health and Safety + (handsplus.de): Hosting, Kontaktformular, Ihre Rechte nach DSGVO.",
  keywords: ["Datenschutz", "DSGVO", "Health and Safety Plus", "handsplus.de"],
});

export default function DatenschutzPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Datenschutzerklärung
        </h1>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">1. Verantwortlicher</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <strong>Health and Safety +</strong>
            <br />
            Barcelona-Allee 12
            <br />
            51103 Köln
            <br />
            E-Mail:{" "}
            <a href="mailto:kontakt@handsplus.de" className="text-primary-800 hover:text-primary-900">
              kontakt@handsplus.de
            </a>
            <br />
            Telefon: 0152 282 61619
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            2. Erhebung beim Besuch der Website (Hosting)
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Beim Aufruf unserer Website werden durch Ihren Browser automatisch Informationen an den
            Server übermittelt (u. a. IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browsertyp).
            Diese Daten werden zur Bereitstellung und Stabilität der Website verarbeitet.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            <strong>Hosting-Anbieter:</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
            91723, USA. Vercel verarbeitet die genannten Zugriffsdaten als Auftragsverarbeiter.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren
            Betrieb). Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-800 hover:text-primary-900"
            >
              Vercel Datenschutz
            </a>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">3. Kontaktformular</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir die von Ihnen
            eingegebenen Daten (z. B. Name, E-Mail, Telefon, Nachricht, gewähltes Thema), um Ihre
            Anfrage zu bearbeiten und zu beantworten.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Der Versand erfolgt über den Dienst <strong>Formspree</strong> (Formspree, Inc., USA) als
            Auftragsverarbeiter. Die Daten werden an uns per E-Mail zugestellt. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Bearbeitung von Anfragen). Weitere Informationen:{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-800 hover:text-primary-900"
            >
              Formspree Datenschutz
            </a>
            .
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            <strong>Speicherdauer:</strong> Wir speichern Ihre Anfrage nur so lange, wie es für die
            Bearbeitung und etwaige Nachfolgekommunikation erforderlich ist, danach gemäß gesetzlichen
            Aufbewahrungsfristen oder nach Löschung, sofern kein Aufbewahrungsgrund mehr besteht.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">4. Externe Links</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Auf dieser Website verlinken wir zu externen Seiten (z. B. YouTube, LinkedIn, Partner-
            Websites). Beim Aufruf dieser Seiten gelten die jeweiligen Datenschutzerklärungen der
            betreibenden Stellen. Wir haben keinen Einfluss auf deren Datenverarbeitung.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">5. Ihre Rechte</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Sie haben gegenüber dem Verantwortlichen u. a. das Recht auf Auskunft, Berichtigung,
            Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein
            Recht auf Datenübertragbarkeit. Sie können sich bei einer Aufsichtsbehörde beschweren.
            Sofern die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit
            widerrufen.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">6. Änderungen</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Diese Datenschutzerklärung kann bei Bedarf angepasst werden, um Änderungen der Website
            oder der rechtlichen Lage abzubilden. Die jeweils aktuelle Fassung finden Sie auf dieser
            Seite.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/impressum" className="text-primary-800 font-medium hover:text-primary-900">
            Impressum
          </Link>
          <Link href="/" className="text-primary-800 font-medium hover:text-primary-900">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
