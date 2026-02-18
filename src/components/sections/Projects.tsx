'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Instagram } from 'lucide-react'
import Link from 'next/link'
import { projects, siteConfig } from '@/data/content'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const featured = projects.slice(0, 3)

  return (
    <section ref={ref} className="py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-start gap-6">
          {/* Label - same style as Services */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-3xl font-bold tracking-tight shrink-0 pt-2 hidden lg:block"
          >
            Progetti
          </motion.h2>

          {/* Mobile label */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight mb-4 lg:hidden"
          >
            Progetti
          </motion.h2>

          {/* Cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href="/progetti" className="group relative block aspect-[4/3] bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 bg-neutral-700 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-base font-semibold text-white">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Instagram CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between aspect-[4/3] border border-black/15 bg-white/30 backdrop-blur-sm p-5 hover:bg-white/50 transition-colors"
              >
                <div>
                  <h3 className="text-base font-semibold leading-snug">Seguici su<br />Instagram</h3>
                  <div className="w-8 h-px bg-black/40 mt-3" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">{siteConfig.instagram}</span>
                  <ArrowRight size={16} className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
