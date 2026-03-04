import Link from 'next/link'
import Image from 'next/image'
import { Instagram, ArrowUpRight } from 'lucide-react'
import { siteConfig, navLinks, services } from '@/data/content'

export function Footer() {
  return (
    <footer className="bg-marble-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-20">
        {/* Top: Logo + Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logo-agire.png"
              alt="AGIRE"
              width={80}
              height={80}
              className="mb-3 w-14 h-14 lg:w-20 lg:h-20"
            />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation + Services side by side on mobile */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Pagine</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Servizi</h4>
            <ul className="space-y-2">
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
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Contatti</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
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
                  <Instagram size={14} />
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal + Bottom — compact */}
        <div className="mt-8 pt-5 border-t border-neutral-800 text-xs text-neutral-500">
          <p>{siteConfig.companyName} — P.IVA: {siteConfig.piva} — PEC: {siteConfig.pec}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 justify-between">
            <div className="flex items-center gap-3">
              <span>&copy; {new Date().getFullYear()} {siteConfig.companyName}</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie</Link>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                Instagram <ArrowUpRight size={10} />
              </a>
              <span className="text-neutral-600">
                Made by{' '}
                <a href="https://fodisrl.it" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  FODI S.R.L.
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
