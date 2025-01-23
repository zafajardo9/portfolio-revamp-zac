"use client"

import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" />
      <Navbar />
      <div className="container mx-auto px-4 relative">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
