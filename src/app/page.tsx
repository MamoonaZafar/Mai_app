import About from '@/components/About'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Partner from '@/components/Partner'
import Services from '@/components/Services'
import Work from '@/components/work'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Partner/>
    </div>
  )
}
