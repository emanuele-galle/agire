import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { CtaRow } from '@/components/sections/CtaRow'
import { Process } from '@/components/sections/Process'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <CtaRow />
      <Process />
    </>
  )
}
