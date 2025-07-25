"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Mail, ArrowDown } from "lucide-react"

const Hero = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const texts = ["Web Developer", "Creative Coder", "Python Learner"]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < texts[currentIndex].length) {
            setCurrentText(texts[currentIndex].substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(texts[currentIndex].substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setCurrentIndex((currentIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : isMobile ? 150 : 100,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, currentIndex, isDeleting, texts, isMobile])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = async () => {
    try {
      // First, try to fetch the file to check if it exists
      const response = await fetch("/Saniya_Resume.pdf")

      if (!response.ok) {
        throw new Error("Resume file not found")
      }

      // Create blob from response
      const blob = await response.blob()

      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Saniya_Mohd_Resume.pdf"
      link.target = "_blank"
      link.rel = "noopener noreferrer"

      // Trigger download
      document.body.appendChild(link)
      link.click()

      // Cleanup
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Resume download failed:", error)

      // Fallback: Try direct link approach
      try {
        const link = document.createElement("a")
        link.href = "/Saniya_Resume.pdf"
        link.download = "Saniya_Mohd_Resume.pdf"
        link.target = "_blank"
        link.rel = "noopener noreferrer"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (fallbackError) {
        // Final fallback: Show user-friendly message
        alert(
          "Resume download is temporarily unavailable. Please contact me at saniyamohd0504@gmail.com for my resume.",
        )
      }
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 px-4"
    >
      {/* Professional Accent Elements - Simplified for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {!isMobile && (
          <>
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 border border-blue-200/30 dark:border-blue-800/30 rounded-full"
            />

            <motion.div
              animate={{
                opacity: [0.05, 0.15, 0.05],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-1/3 left-1/4 w-24 sm:w-48 h-24 sm:h-48 border border-indigo-200/20 dark:border-indigo-800/20 rotate-45 rounded-lg"
            />
          </>
        )}

        {/* Subtle Professional Dots - Reduced on mobile */}
        {Array.from({ length: isMobile ? 3 : 6 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400/20 dark:bg-blue-500/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <motion.div
              animate={
                !isMobile
                  ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={
                !isMobile
                  ? {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
                  : {}
              }
              className="text-4xl sm:text-6xl mb-4"
            >
              👋
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Saniya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 px-4"
          >
            Frontend Developer & Aspiring Full Stack Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 h-10 sm:h-12"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="text-blue-600"
            >
              |
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4"
          >
            <motion.button
              whileHover={{
                scale: isMobile ? 1.02 : 1.05,
                boxShadow: isMobile ? "0 10px 20px rgba(59, 130, 246, 0.2)" : "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download size={18} />
                View Resume
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: isMobile ? 1.02 : 1.05,
                boxShadow: isMobile ? "0 10px 20px rgba(59, 130, 246, 0.1)" : "0 20px 40px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  whileHover={{ scaleX: 1 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail size={18} />
                Contact Me
              </span>
            </motion.button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={scrollToAbout}
            className="group"
          >
            <motion.div
              animate={!isMobile ? { y: [0, 10, 0] } : {}}
              transition={!isMobile ? { duration: 2, repeat: Number.POSITIVE_INFINITY } : {}}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-600 transition-colors">
                Scroll to explore
              </span>
              <ArrowDown size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
