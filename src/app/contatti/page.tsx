'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, MapPin, Instagram, Send } from 'lucide-react'
import { siteConfig } from '@/data/content'

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Contatti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500"
          >
            Raccontaci il tuo progetto. Ti rispondiamo entro 24 ore.
          </motion.p>
        </div>
      </section>

      <section className="py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/30 backdrop-blur-sm border border-black/10 p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/50 flex items-center justify-center mb-4">
                    <Send size={24} className="text-neutral-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Messaggio Inviato</h3>
                  <p className="text-neutral-500">Ti risponderemo il prima possibile.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full border border-black/15 bg-white/50 px-4 py-3 text-sm focus:border-black focus:outline-none transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full border border-black/15 bg-white/50 px-4 py-3 text-sm focus:border-black focus:outline-none transition-colors"
                      placeholder="La tua email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefono</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full border border-black/15 bg-white/50 px-4 py-3 text-sm focus:border-black focus:outline-none transition-colors"
                      placeholder="Il tuo numero (opzionale)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Messaggio</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full border border-black/15 bg-white/50 px-4 py-3 text-sm focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Raccontaci il tuo progetto..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Invia Messaggio
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-6">Informazioni</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={20} className="text-neutral-400 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">{siteConfig.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={20} className="text-neutral-400 mt-0.5 shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="text-neutral-600 hover:text-black transition-colors">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Instagram size={20} className="text-neutral-400 mt-0.5 shrink-0" />
                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-black transition-colors">
                      {siteConfig.instagram}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="aspect-[4/3] bg-white/20 backdrop-blur-sm border border-black/10 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="text-sm">Milano, Italia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
