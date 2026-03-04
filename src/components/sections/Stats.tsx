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

            <ItalyMap />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ItalyMap() {
  return (
    <svg
      width="80"
      height="110"
      viewBox="0 0 250 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Mainland Italy - realistic outline */}
      <path
        d="M90 8 L105 5 L118 2 L130 8 L142 4 L155 10 L168 6 L178 12 L185 20 L190 30 L182 38 L175 32 L165 36 L158 28 L148 32 L140 26 L132 30 L125 24 L118 30 L112 22 L105 28 L98 20 L92 26 L85 18 L80 24 L74 16 L68 22 L62 14 L58 20 L52 15 L48 22 L42 18 L38 25 L45 32 L52 28 L58 35 L65 30 L72 38 L78 34 L85 42 L80 48 L88 55 L82 62 L90 68 L96 64 L102 72 L98 80 L105 88 L110 82 L116 90 L122 86 L128 95 L134 90 L138 100 L142 95 L148 105 L144 112 L150 120 L146 128 L152 136 L148 144 L154 152 L150 160 L156 168 L152 176 L146 172 L140 180 L136 175 L130 185 L126 180 L120 190 L116 186 L110 196 L106 192 L100 202 L96 198 L92 208 L88 204 L84 214 L80 210 L76 220 L72 216 L68 226 L64 222 L62 232 L58 228 L56 238 L52 234 L50 244 L54 250 L60 246 L64 256 L68 252 L72 262 L76 258 L80 268 L76 274 L82 282 L86 278 L92 288 L96 284 L100 294 L96 300 L102 308 L106 304 L110 312 L106 318 L100 314 L94 320 L88 316 L82 322 L76 318 L72 325 L78 332 L84 328 L90 335 L86 340 L80 336"
        stroke="#b0b0b0"
        strokeWidth="2.5"
        fill="#f0f0f0"
        fillOpacity="0.3"
      />
      {/* Simplified but recognizable Italy shape */}
      <path
        d="M85 12 C95 8, 120 2, 145 8 C160 6, 175 12, 188 22 C192 32, 185 38, 175 35 C165 38, 155 30, 148 35 L140 42 C135 48, 128 52, 120 48 L108 42 C100 38, 92 42, 85 48 L78 55 C72 62, 68 55, 62 48 L55 40 C48 34, 42 28, 38 22 C42 15, 52 10, 62 12 L72 10 Z
        M88 48 C92 55, 98 62, 105 68 C110 75, 108 82, 112 90 C118 98, 122 105, 128 112 C134 120, 138 128, 142 136 C146 145, 144 155, 148 162 C150 170, 146 178, 140 185 C135 192, 130 200, 125 208 C120 215, 116 222, 112 230 C108 238, 104 245, 100 252 C96 260, 92 268, 90 275 C88 282, 92 290, 96 298 C100 305, 104 312, 100 318 C96 324, 88 328, 82 332 C76 336, 72 330, 68 324 L65 316 C62 308, 66 300, 70 292 C74 284, 78 276, 80 268 C82 260, 78 252, 75 245 C72 238, 68 230, 65 222 C62 215, 58 208, 55 200 C52 192, 56 184, 60 176 C64 168, 68 160, 72 152 C76 145, 78 138, 82 130 C85 122, 82 115, 80 108 C78 100, 82 92, 85 85 C88 78, 85 70, 82 62 C80 55, 84 48, 88 48 Z"
        stroke="#aaa"
        strokeWidth="1.5"
        fill="none"
        opacity="0"
      />

      {/* Clean Italy silhouette */}
      <path
        d="M62 15 L75 10 L90 8 L108 5 L125 8 L140 5 L155 10 L170 8 L182 15 L188 25 L182 35 L172 32 L160 28 L148 34 L135 28 L122 22 L108 28 L95 22 L82 28 L70 22 L60 28 L52 22 L48 30 L55 38 L65 34 L75 42 L82 38 L90 48 L85 58 L92 65 L88 75 L95 82 L100 78 L108 88 L105 98 L112 105 L108 115 L115 122 L112 132 L118 140 L115 150 L122 158 L118 168 L125 175 L120 185 L115 180 L108 190 L104 185 L98 195 L94 190 L88 200 L85 210 L80 218 L78 228 L75 238 L72 248 L76 258 L82 268 L85 278 L92 288 L98 298 L102 308 L98 316 L90 322 L82 328 L75 332 L68 325 L65 315 L70 305 L74 295 L70 285 L65 275 L62 265 L58 255 L55 245 L52 235 L56 225 L60 215 L64 205 L68 195 L72 185 L76 175 L78 165 L82 155 L85 145 L82 135 L78 125 L75 115 L78 105 L82 95 L78 85 L75 75 L72 65 L68 55 L62 45 L55 35 L50 25 L55 18 L62 15 Z"
        stroke="#bbb"
        strokeWidth="2"
        fill="#e8e8e8"
        fillOpacity="0.4"
      />

      {/* Sicily */}
      <path
        d="M68 335 L82 330 L95 335 L105 340 L100 352 L88 358 L75 355 L65 348 L68 335 Z"
        stroke="#bbb"
        strokeWidth="2"
        fill="#e8e8e8"
        fillOpacity="0.4"
      />

      {/* Sardinia */}
      <path
        d="M18 185 L28 178 L38 182 L42 195 L38 210 L30 218 L20 215 L15 202 L18 185 Z"
        stroke="#bbb"
        strokeWidth="2"
        fill="#e8e8e8"
        fillOpacity="0.4"
      />

      {/* Star: Milano */}
      <polygon
        points="108,48 111,42 114,48 120,48 115,52 117,58 108,54 99,58 101,52 96,48"
        fill="#222"
      />
      {/* Star: Aosta */}
      <polygon
        points="75,22 77,18 79,22 83,22 80,25 81,29 75,26 69,29 70,25 67,22"
        fill="#222"
      />
      {/* Star: Calabria */}
      <polygon
        points="88,300 90,296 92,300 96,300 93,303 94,307 88,304 82,307 83,303 80,300"
        fill="#222"
      />
    </svg>
  )
}
