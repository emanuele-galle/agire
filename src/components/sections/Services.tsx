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
    <section ref={ref} className="py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-start gap-6">
          {/* Label */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-3xl font-bold tracking-tight shrink-0 pt-4 hidden lg:block"
          >
            Servizi
          </motion.h2>

          {/* Mobile label */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight mb-4 lg:hidden"
          >
            Servizi
          </motion.h2>

          {/* Cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href="/servizi"
                  className="group block border border-black/15 bg-white/30 backdrop-blur-sm p-4 lg:p-5 h-full hover:border-black/40 hover:bg-white/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold">{service.title}</h3>
                    <ArrowRight size={16} className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-neutral-500">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
