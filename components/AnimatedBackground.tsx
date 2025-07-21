"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Binary characters only
  const matrixChars = "01"

  // Generate matrix columns with 0s and 1s only
  const matrixColumns = Array.from({ length: 30 }, (_, i) => (
    <motion.div
      key={`matrix-${i}`}
      className="absolute top-0 text-green-400/40 dark:text-green-400/60 font-mono text-sm leading-tight select-none"
      style={{ left: `${1 + i * 3.3}%` }}
      animate={{
        y: ["-100vh", "100vh"],
      }}
      transition={{
        duration: Math.random() * 8 + 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        delay: Math.random() * 5,
      }}
    >
      {Array.from({ length: 40 }, (_, j) => (
        <motion.div
          key={j}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: j * 0.1,
          }}
        >
          {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
        </motion.div>
      ))}
    </motion.div>
  ))

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-800/80 dark:to-slate-900" />

      {/* Matrix Rain Effect - Only 0s and 1s */}
      <div className="absolute inset-0 opacity-80 dark:opacity-100">{matrixColumns}</div>

      {/* Interactive Mouse Trail */}
      <motion.div
        className="absolute w-6 h-6 border-2 border-cyan-400/60 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <motion.div
          className="absolute inset-0 border border-cyan-300/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </motion.div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Additional Scan Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: "linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.05) 100%)",
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  )
}

export default AnimatedBackground
