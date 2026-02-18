'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/content'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/60 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <div className="relative">
              <span className="absolute -top-0.5 -left-4 h-5 w-5 rounded-full border-[1.5px] border-current opacity-50" />
              <span className="text-xl font-bold tracking-tight">AGIRE</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-black ${
                  pathname === link.href ? 'text-black font-medium' : 'text-neutral-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/contatti"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-black transition-colors"
            >
              Prenota una Call
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-black/10 bg-white/90 backdrop-blur-md pb-6 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`text-lg ${pathname === link.href ? 'font-medium text-black' : 'text-neutral-500'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contatti"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-black text-white"
              >
                Prenota una Call
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Separator line */}
      <div className="border-b border-black/10" />
    </header>
  )
}
