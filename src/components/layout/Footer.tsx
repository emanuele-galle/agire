import Link from 'next/link'
import Image from 'next/image'
import { Instagram, ArrowUpRight } from 'lucide-react'
import { siteConfig, navLinks, services } from '@/data/content'

export function Footer() {
  return (
    <footer className="bg-marble-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-agire.png"
              alt="AGIRE"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Navigazione</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Servizi</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href="/servizi" className="text-sm text-neutral-300 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal info */}
        <div className="mt-12 pt-6 border-t border-neutral-800 text-xs text-neutral-500 space-y-2">
          <p>{siteConfig.companyName} — Sede legale: {siteConfig.address}</p>
          <p>P.IVA: {siteConfig.piva} — PEC: {siteConfig.pec}</p>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} {siteConfig.companyName} Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-3 text-xs text-neutral-500">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-white transition-colors"
            >
              Seguici su Instagram <ArrowUpRight size={12} />
            </a>
            <span className="text-xs text-neutral-600">
              Made by{' '}
              <a href="https://fodisrl.it" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                FODI S.R.L.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
