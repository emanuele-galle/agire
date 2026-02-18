'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { projects, universities, bigCompanies } from '@/data/content'

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-[4/3] bg-neutral-900 overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{project.category}</p>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      </div>
    </motion.div>
  )
}

export default function ProgettiPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-marble light-streak">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight"
          >
            I Nostri Progetti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Oltre 100 brand hanno scelto AGIRE per crescere nel mercato.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">Università Partner</h3>
              <div className="flex flex-wrap gap-3">
                {universities.map((uni) => (
                  <span key={uni} className="px-4 py-2 border border-neutral-200 text-sm">{uni}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">Big Company</h3>
              <div className="flex flex-wrap gap-3">
                {bigCompanies.map((company) => (
                  <span key={company} className="px-4 py-2 border border-neutral-200 text-sm">{company}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
