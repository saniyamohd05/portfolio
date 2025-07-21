"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Chatbot from "@/components/Chatbot"
import AnimatedBackground from "@/components/AnimatedBackground"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </div>
    </ThemeProvider>
  )
}
