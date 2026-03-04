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

/* Star positions as % of the map container — calibrated on the @svg-maps/italy viewBox (610x793) */
const stars = [
  { label: 'Milano', top: '14%', left: '28%' },
  { label: 'Aosta', top: '10%', left: '10%' },
  { label: 'Calabria', top: '78%', left: '78%' },
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

          {/* Regions + Italy map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-2 border border-black/15 bg-white/60 backdrop-blur-sm p-4 lg:p-5 flex items-center justify-between gap-4"
          >
            <div className="text-xs text-neutral-500 leading-relaxed">
              {regions.map((r) => (
                <div key={r}>{r}</div>
              ))}
            </div>

            {/* Real Italy map with star markers */}
            <div className="relative shrink-0 w-[70px] h-[90px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/italy-map.svg"
                alt="Mappa Italia"
                className="w-full h-full object-contain opacity-30"
              />
              {/* Star markers */}
              {stars.map((star) => (
                <span
                  key={star.label}
                  className="absolute w-2.5 h-2.5 bg-black rounded-full border border-white"
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
