'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { services } from '@/data/content'

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Label cell */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-2 sm:col-span-1 lg:col-span-1 border border-black/15 bg-white/60 backdrop-blur-sm p-4 lg:p-5 flex items-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Servizi</h2>
          </motion.div>

          {/* Service cards */}
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              <Link
                href="/servizi"
                className="group block border border-black/15 bg-white/60 backdrop-blur-sm p-4 lg:p-5 h-full hover:border-black/40 hover:bg-white/80 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <ArrowRight
                    size={16}
                    className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="text-xs text-neutral-500">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
