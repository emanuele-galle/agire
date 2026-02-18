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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="text-2xl font-bold tracking-tight">AGIRE</span>
              <span className="absolute -top-1 -left-3 h-5 w-5 rounded-full border-2 border-current opacity-60" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contatti"
              className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium bg-black text-white rounded-none hover:bg-neutral-800 transition-colors"
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
          <div className="md:hidden border-t border-neutral-200 bg-white pb-6 pt-4">
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
    </header>
  )
}
