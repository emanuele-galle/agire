'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Instagram } from 'lucide-react'
import Link from 'next/link'
import { projects, siteConfig } from '@/data/content'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featured = projects.slice(0, 3)

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold tracking-tight mb-12"
        >
          Progetti
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link href="/progetti" className="group relative block aspect-[4/3] bg-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Instagram CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between aspect-[4/3] bg-neutral-100 border border-neutral-200 p-6 hover:bg-neutral-200 transition-colors"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">Seguici su Instagram</h3>
                <div className="w-8 h-px bg-black mt-3" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Instagram size={16} />
                  {siteConfig.instagram}
                </div>
                <ArrowRight size={18} className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/progetti" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
            Vedi tutti i progetti <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
