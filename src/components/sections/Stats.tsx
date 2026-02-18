'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { stats, regions } from '@/data/content'

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-neutral-200 flex-1">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="text-3xl lg:text-4xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-neutral-500 text-right"
          >
            {regions.map((r) => (
              <div key={r}>{r}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
