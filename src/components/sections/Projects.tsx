'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, siteConfig } from '@/data/content'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const featured = projects.slice(0, 3)

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
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Progetti</h2>
          </motion.div>

          {/* Project cards with images */}
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="/progetti"
                className="group relative block aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
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
              className="group flex flex-col justify-between aspect-[4/3] border border-black/15 bg-white/60 backdrop-blur-sm p-5 hover:bg-white/80 transition-colors"
            >
              <div>
                <h3 className="text-base font-semibold leading-snug">
                  Seguici su
                  <br />
                  Instagram
                </h3>
                <div className="w-8 h-px bg-black/40 mt-3" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">{siteConfig.instagram}</span>
                <ArrowRight
                  size={16}
                  className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
