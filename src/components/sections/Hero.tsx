'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/content'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-marble light-streak overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center" style={{ zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter"
        >
          AGIRE.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-xl sm:text-2xl tracking-wide text-neutral-600"
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
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contatti">Prenota una Call</Button>
          <Button href="/progetti" variant="outline">Scopri i Progetti</Button>
        </motion.div>
      </div>
    </section>
  )
}
