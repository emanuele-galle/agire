'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Link from 'next/link'

const steps = [
  { num: '01', title: 'Analisi' },
  { num: '02', title: 'Direzione' },
  { num: '03', title: 'Produzione' },
  { num: '04', title: 'Distribuzione' },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="border-t border-black/10 py-5 mt-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-4"
        >
          {/* Process steps - single line */}
          <div className="flex items-center gap-2 text-sm">
            {steps.map((step, i) => (
              <span key={step.num} className="flex items-center gap-2">
                <span className="font-semibold">{step.num}</span>
                <span className="text-neutral-600">{step.title}</span>
                {i < steps.length - 1 && <span className="text-neutral-300 mx-1">—</span>}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <span className="text-base lg:text-lg font-semibold">Vuoi iniziare?</span>
            <Link
              href="/contatti"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Prenota una Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
