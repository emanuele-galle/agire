'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/content'

function AgireLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scalloped circle - cloud/flower shape */}
      <path
        d="M50 5 C56 5, 60 10, 62 14 C66 10, 72 8, 76 12 C80 16, 80 22, 78 26 C83 26, 88 30, 90 35 C92 40, 90 46, 87 49 C91 53, 93 58, 92 63 C91 68, 87 72, 83 73 C85 78, 84 83, 80 87 C76 91, 71 91, 67 89 C65 93, 60 96, 55 96 C50 96, 46 93, 44 90 C40 93, 35 94, 31 91 C27 88, 26 83, 27 79 C22 80, 18 77, 15 73 C12 69, 12 64, 14 60 C10 57, 8 52, 9 47 C10 42, 13 38, 17 36 C15 31, 16 26, 20 22 C24 18, 29 18, 33 20 C34 15, 38 10, 43 8 C46 6, 48 5, 50 5 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

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
          <Link href="/" className="flex items-center gap-2">
            <AgireLogo size={28} />
            <span className="text-xl font-bold tracking-tight">AGIRE</span>
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
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium border border-black text-black hover:bg-black hover:text-white transition-colors"
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
