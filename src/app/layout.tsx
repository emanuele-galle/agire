import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AGIRE | Agenzia di Marketing - Milano',
  description: 'Non lanciamo i brand, li accompagniamo per la mano nel mercato. Branding, Content Creation, Social Media e Collaborazioni.',
  keywords: ['agenzia marketing', 'branding', 'social media', 'content creation', 'Milano', 'influencer marketing'],
  openGraph: {
    title: 'AGIRE | Agenzia di Marketing',
    description: 'Strategia. Creatività. Azione.',
    url: 'https://agire.fodivps2.cloud',
    siteName: 'AGIRE',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="bg-marble-page">
          <div className="content-above">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
