'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { value: '6/7', label: 'Università Italiane' },
  { value: '3', label: 'Regioni' },
  { value: '+', label: 'Progetti Istituzionali' },
  { value: 'Milano', label: 'Headquarter' },
]

const regions = ['Regione Lombardia', "Valle d'Aosta", 'Calabria']

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="border-y border-black/10 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <div className="flex items-center gap-6 lg:gap-0">
          {/* Stats row */}
          <div className="flex items-center divide-x divide-black/15 flex-1">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-4 lg:px-6 first:pl-0"
              >
                <div className="text-2xl lg:text-3xl font-bold tracking-tight leading-none">{stat.value}</div>
                <div className="text-xs text-neutral-500 mt-1 whitespace-nowrap">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Regions text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden lg:block text-xs text-neutral-500 text-right leading-relaxed"
          >
            {regions.map((r) => (
              <div key={r}>{r}</div>
            ))}
          </motion.div>

          {/* Italy map SVG */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden lg:block ml-6 shrink-0"
          >
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-300">
              {/* Simplified Italy outline */}
              <path d="M35 5 L45 3 L52 8 L55 5 L60 8 L58 15 L62 18 L60 22 L55 20 L50 25 L52 30 L48 35 L50 40 L45 45 L48 50 L42 55 L45 60 L40 65 L42 70 L38 75 L35 72 L32 78 L28 82 L25 80 L22 85 L20 82 L22 78 L18 75 L20 70 L24 72 L28 68 L25 62 L30 58 L28 52 L32 48 L30 42 L34 38 L30 32 L35 28 L32 22 L35 18 L30 14 L33 10 L35 5Z"
                stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
              {/* Sicily */}
              <path d="M25 85 L32 83 L38 86 L35 90 L28 92 L22 90 L25 85Z"
                stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
              {/* Sardinia */}
              <path d="M12 55 L18 52 L22 55 L20 62 L15 65 L10 62 L12 55Z"
                stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
              {/* Star markers for regions */}
              <circle cx="38" cy="18" r="2.5" fill="#555" /> {/* Lombardia - north */}
              <circle cx="30" cy="10" r="2.5" fill="#555" /> {/* Valle d'Aosta - northwest */}
              <circle cx="35" cy="78" r="2.5" fill="#555" /> {/* Calabria - south */}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
