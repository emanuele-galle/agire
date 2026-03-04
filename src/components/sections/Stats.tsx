'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { value: '6/7', label: 'Università Italiane' },
  { value: '3', label: 'Regioni' },
  { value: '+', label: 'Progetti Istituzionali' },
  { value: 'Milano', label: 'Headquarter' },
]

const clients = ['Wella', 'Timberland', 'Calabria Straordinaria', 'Regione Lombardia', 'Regione Calabria']

/* Star positions — calibrated on the @svg-maps/italy viewBox (610x793) */
const stars = [
  { label: 'Milano', top: '14%', left: '28%' },
  { label: 'Aosta', top: '10%', left: '10%' },
  { label: 'Calabria', top: '76%', left: '55%' },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-black/15 bg-white/60 backdrop-blur-sm p-4 lg:p-5"
            >
              <div className="text-2xl lg:text-3xl font-bold tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 mt-1.5">{stat.label}</div>
            </motion.div>
          ))}

          {/* Clienti */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border border-black/15 bg-white/60 backdrop-blur-sm p-4 lg:p-5"
          >
            <div className="text-2xl lg:text-3xl font-bold tracking-tight leading-none">
              100+
            </div>
            <div className="text-xs text-neutral-500 mt-1.5">Brand Gestiti</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {clients.slice(0, 3).map((c) => (
                <span key={c} className="text-[10px] text-neutral-400 bg-black/5 px-1.5 py-0.5">{c}</span>
              ))}
            </div>
          </motion.div>

          {/* Italy map with region markers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border border-black/15 bg-white/60 backdrop-blur-sm p-4 lg:p-5 overflow-visible relative flex items-center justify-center"
          >
            {/* Italy map — oversized, spilling out of card for depth */}
            <div className="relative w-[100px] h-[130px] sm:w-[120px] sm:h-[155px] lg:w-[140px] lg:h-[180px] -my-6 sm:-my-10 lg:-my-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/italy-map.svg"
                alt="Mappa Italia"
                className="w-full h-full object-contain opacity-20"
              />
              {stars.map((star) => (
                <span
                  key={star.label}
                  className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full border-2 border-white shadow-sm"
                  style={{ top: star.top, left: star.left }}
                  title={star.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
