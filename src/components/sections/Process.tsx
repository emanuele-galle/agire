'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { processSteps } from '@/data/content'

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-20 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-16 text-center"
        >
          Il Nostro Processo
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-neutral-100 mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 text-neutral-300 text-2xl">&mdash;</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-neutral-200"
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold">Vuoi iniziare?</h3>
            <p className="text-neutral-500 mt-1">Raccontaci il tuo progetto</p>
          </div>
          <Button href="/contatti">Prenota una Call</Button>
        </motion.div>
      </div>
    </section>
  )
}
