import { Metadata } from 'next'
import { siteConfig } from '@/data/content'

export const metadata: Metadata = {
  title: 'Privacy Policy | AGIRE',
  description: 'Informativa sulla privacy di AGIRE S.R.L.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-16 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-neutral-500 mb-10">
          Ultimo aggiornamento: 4 marzo 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-700">
          <section>
            <h2 className="text-lg font-bold text-black mb-3">1. Titolare del Trattamento</h2>
            <div className="space-y-1">
              <p><strong className="text-black">{siteConfig.companyName}</strong></p>
              <p>Sede legale: {siteConfig.address}</p>
              <p>P.IVA: {siteConfig.piva}</p>
              <p>PEC: {siteConfig.pec}</p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="underline hover:text-black">{siteConfig.email}</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">2. Dati Raccolti</h2>
            <p className="mb-3">Raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li><strong className="text-black">Dati di contatto:</strong> nome, cognome, email, numero di telefono</li>
              <li><strong className="text-black">Dati di navigazione:</strong> indirizzo IP, browser, sistema operativo (tramite cookie tecnici)</li>
              <li><strong className="text-black">Dati forniti volontariamente:</strong> informazioni inviate tramite il form di contatto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">3. Finalità del Trattamento</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Risposta alle richieste di contatto e preventivo</li>
              <li>Gestione dei rapporti commerciali e delle collaborazioni</li>
              <li>Invio di comunicazioni relative ai servizi offerti (previo consenso)</li>
              <li>Adempimento di obblighi di legge e regolamentari</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">4. Base Giuridica</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Esecuzione di un contratto o misure precontrattuali</li>
              <li>Consenso dell&apos;interessato (form di contatto)</li>
              <li>Legittimo interesse del titolare (analisi statistiche anonime)</li>
              <li>Obblighi di legge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">5. Modalità di Trattamento</h2>
            <p>
              I dati sono trattati con strumenti elettronici e cartacei, con logiche strettamente correlate alle finalità indicate e comunque in modo da garantire la sicurezza e la riservatezza dei dati stessi, nel rispetto delle misure organizzative, fisiche e logiche previste dalle disposizioni vigenti.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">6. Conservazione dei Dati</h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti e comunque non oltre 24 mesi dalla raccolta, salvo obblighi di legge che ne impongano una conservazione più lunga.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">7. Comunicazione e Diffusione</h2>
            <p>
              I dati personali non saranno diffusi. Potranno essere comunicati a soggetti terzi quali fornitori di servizi tecnici (hosting, email), consulenti fiscali e legali, autorità competenti nei casi previsti dalla legge.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">8. Diritti dell&apos;Interessato</h2>
            <p className="mb-3">
              Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 (GDPR), l&apos;interessato ha diritto di:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali</li>
            </ul>
            <p className="mt-3">
              Per esercitare i propri diritti, scrivere a: <a href={`mailto:${siteConfig.email}`} className="underline hover:text-black">{siteConfig.email}</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">9. Cookie</h2>
            <p>
              Per informazioni sui cookie utilizzati da questo sito, si rimanda alla <a href="/cookie-policy" className="underline hover:text-black">Cookie Policy</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
