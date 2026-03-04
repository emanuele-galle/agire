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
    <section ref={ref} className="py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          {/* Stat cells */}
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

          {/* Regions + Map cell */}
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

            {/* Italy map SVG — 3 stelle: Milano, Aosta, Calabria */}
            <svg
              width="90"
              height="120"
              viewBox="0 0 300 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              {/* Italy outline */}
              <path
                d="M120 30 L140 25 L160 15 L185 20 L200 10 L220 15 L235 25 L240 40 L230 55 L220 50 L200 55 L195 70 L205 85 L195 100 L185 95 L175 105 L180 120 L175 135 L185 150 L178 165 L185 180 L175 195 L180 210 L170 225 L175 240 L165 255 L170 270 L160 285 L165 300 L155 315 L148 330 L140 340 L132 355 L125 365 L130 380 L120 390 L110 380 L105 365 L100 355 L95 340 L105 330 L110 315 L105 300 L95 285 L100 270 L110 260 L105 245 L95 230 L100 215 L110 205 L105 190 L95 175 L100 160 L110 150 L105 135 L95 120 L100 105 L110 95 L105 80 L95 65 L100 50 L110 40 L120 30Z"
                stroke="#c0c0c0"
                strokeWidth="2"
                fill="none"
              />
              {/* Sicily */}
              <path
                d="M100 395 L120 390 L140 395 L155 400 L150 415 L135 425 L115 420 L100 410 L100 395Z"
                stroke="#c0c0c0"
                strokeWidth="2"
                fill="none"
              />
              {/* Sardinia */}
              <path
                d="M45 220 L60 210 L75 215 L80 230 L75 250 L65 260 L50 255 L42 240 L45 220Z"
                stroke="#c0c0c0"
                strokeWidth="2"
                fill="none"
              />

              {/* Milano (HQ) */}
              <g transform="translate(155, 72)">
                <polygon
                  points="0,-8 2.3,-2.5 8,-2.5 3.5,1.5 5.5,7.5 0,4 -5.5,7.5 -3.5,1.5 -8,-2.5 -2.3,-2.5"
                  fill="#333"
                />
              </g>
              {/* Aosta */}
              <g transform="translate(118, 48)">
                <polygon
                  points="0,-7 2,-2 7,-2 3,1.2 4.5,6.2 0,3.3 -4.5,6.2 -3,1.2 -7,-2 -2,-2"
                  fill="#333"
                />
              </g>
              {/* Calabria (Catanzaro) */}
              <g transform="translate(150, 340)">
                <polygon
                  points="0,-7 2,-2 7,-2 3,1.2 4.5,6.2 0,3.3 -4.5,6.2 -3,1.2 -7,-2 -2,-2"
                  fill="#333"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
