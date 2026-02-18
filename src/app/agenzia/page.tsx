'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { team, siteConfig } from '@/data/content'

function TeamMember({ member, index }: { member: typeof team[number]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-32 h-32 mx-auto rounded-full bg-white/30 backdrop-blur-sm border border-black/10 mb-4" />
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-neutral-500 mt-1">{member.role}</p>
    </motion.div>
  )
}

export default function AgenziaPage() {
  return (
    <div>
      <section className="pt-8 pb-12 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight"
          >
            Chi Siamo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed"
          >
            {siteConfig.tagline}. Siamo un team di professionisti con sede a Milano,
            uniti dalla passione per il marketing e la comunicazione.
          </motion.p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { title: 'Strategia', desc: 'Ogni progetto parte da un\'analisi approfondita del mercato e del target per definire obiettivi chiari e misurabili.' },
              { title: 'Creatività', desc: 'Trasformiamo le strategie in contenuti creativi che catturano l\'attenzione e comunicano i valori del brand.' },
              { title: 'Azione', desc: 'Eseguiamo con precisione, monitoriamo i risultati e ottimizziamo continuamente per massimizzare l\'impatto.' },
            ].map((item, i) => (
              <div key={item.title} className="text-center lg:text-left">
                <div className="text-5xl font-bold text-black/10 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Il Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {team.map((member, i) => (
              <TeamMember key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
