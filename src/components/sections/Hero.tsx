'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { siteConfig } from '@/data/content'

export function Hero() {
  return (
    <section className="pt-8 pb-12 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-7xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none"
        >
          AGIRE.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-xl sm:text-2xl lg:text-3xl tracking-wide text-neutral-700"
        >
          {siteConfig.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-4 text-base sm:text-lg text-neutral-500 max-w-xl mx-auto"
        >
          {siteConfig.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium border border-black bg-black text-white hover:bg-neutral-800 transition-colors min-w-[200px]"
          >
            Prenota una Call
          </Link>
          <Link
            href="/progetti"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium border border-black text-black hover:bg-black hover:text-white transition-colors min-w-[200px]"
          >
            Scopri i Progetti
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
