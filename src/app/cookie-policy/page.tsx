import { Metadata } from 'next'
import { siteConfig } from '@/data/content'

export const metadata: Metadata = {
  title: 'Cookie Policy | AGIRE',
  description: 'Informativa sui cookie di AGIRE S.R.L.',
}

export default function CookiePolicyPage() {
  return (
    <section className="pt-16 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight mb-2">Cookie Policy</h1>
        <p className="text-sm text-neutral-500 mb-10">
          Ultimo aggiornamento: 4 marzo 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-700">
          <section>
            <h2 className="text-lg font-bold text-black mb-3">1. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente, dove vengono memorizzati per essere ritrasmessi al sito alla visita successiva. Sono utilizzati per migliorare la navigazione e l&apos;esperienza utente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">2. Tipologie di Cookie Utilizzati</h2>

            <h3 className="font-semibold text-black mt-4 mb-2">Cookie Tecnici (necessari)</h3>
            <p className="mb-3">
              Sono essenziali per il funzionamento del sito e non possono essere disattivati. Comprendono cookie di sessione e cookie funzionali che consentono la navigazione e l&apos;utilizzo delle funzionalità del sito.
            </p>

            <h3 className="font-semibold text-black mt-4 mb-2">Cookie Analitici</h3>
            <p>
              Questo sito non utilizza attualmente cookie di profilazione o analitici di terze parti. In caso di futura implementazione, verrà richiesto il consenso dell&apos;utente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">3. Cookie di Terze Parti</h2>
            <p>
              Il sito potrebbe contenere link a siti esterni (es. Instagram). Questi siti hanno le proprie politiche sui cookie di cui {siteConfig.companyName} non è responsabile.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">4. Gestione dei Cookie</h2>
            <p className="mb-3">
              L&apos;utente può gestire le preferenze relative ai cookie direttamente dal proprio browser. Ecco le guide per i principali browser:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Google Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
              <li>Mozilla Firefox: Impostazioni → Privacy e sicurezza</li>
              <li>Safari: Preferenze → Privacy</li>
              <li>Microsoft Edge: Impostazioni → Cookie e autorizzazioni sito</li>
            </ul>
            <p className="mt-3">
              La disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">5. Titolare del Trattamento</h2>
            <div className="space-y-1">
              <p><strong className="text-black">{siteConfig.companyName}</strong></p>
              <p>Sede legale: {siteConfig.address}</p>
              <p>P.IVA: {siteConfig.piva}</p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="underline hover:text-black">{siteConfig.email}</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">6. Riferimenti Normativi</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Regolamento UE 2016/679 (GDPR)</li>
              <li>D.Lgs. 196/2003 (Codice Privacy) e successive modifiche</li>
              <li>Provvedimento del Garante Privacy n. 229/2014 (Cookie Law)</li>
              <li>Linee guida del Garante Privacy del 10 giugno 2021</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
