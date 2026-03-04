'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Link from 'next/link'

export function CtaRow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3"
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
