'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Palette, Camera, Share2, Link as LinkIcon, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/content'

const iconMap = { Palette, Camera, Share2, Link: LinkIcon }

function ServiceBlock({ service, index }: { service: typeof services[number]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = iconMap[service.icon as keyof typeof iconMap]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${index > 0 ? 'border-t border-neutral-200' : ''}`}
    >
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <div className="text-6xl font-bold text-neutral-100 mb-4">0{index + 1}</div>
        <div className="flex items-center gap-3 mb-4">
          {Icon && <Icon size={24} className="text-neutral-600" />}
          <h2 className="text-2xl lg:text-3xl font-bold">{service.title}</h2>
        </div>
        <p className="text-neutral-500 leading-relaxed mb-6">{service.detail}</p>
        <Button href="/contatti" variant="outline">
          Richiedi Info <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
      <div className={`aspect-[4/3] bg-neutral-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`} />
    </motion.div>
  )
}

export default function ServiziPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-marble light-streak">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight"
          >
            I Nostri Servizi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Offriamo soluzioni integrate per accompagnare il tuo brand in ogni fase del percorso di crescita.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        {services.map((service, i) => (
          <ServiceBlock key={service.title} service={service} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pronto a far crescere il tuo brand?</h2>
          <p className="text-neutral-400 mb-8">Parliamo del tuo progetto e troviamo la soluzione giusta per te.</p>
          <Button href="/contatti" className="bg-white text-black hover:bg-neutral-200">
            Prenota una Call
          </Button>
        </div>
      </section>
    </div>
  )
}
