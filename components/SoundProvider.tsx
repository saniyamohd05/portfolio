"use client"

import type React from "react"
import { createContext, useContext, useState, useRef, useEffect } from "react"

interface SoundContextType {
  isPlaying: boolean
  toggleSound: () => void
  playEffect: (effect: string) => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const effectsRef = useRef<{ [key: string]: HTMLAudioElement }>({})

  useEffect(() => {
    // Initialize background music (placeholder)
    audioRef.current = new Audio()
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    // Initialize sound effects
    effectsRef.current = {
      click: new Audio(),
      hover: new Audio(),
      magic: new Audio(),
      treasure: new Audio(),
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
      Object.values(effectsRef.current).forEach((audio) => {
        audio.pause()
      })
    }
  }, [])

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const playEffect = (effect: string) => {
    if (effectsRef.current[effect] && isPlaying) {
      effectsRef.current[effect].currentTime = 0
      effectsRef.current[effect].play().catch(() => {
        // Handle audio play restrictions
      })
    }
  }

  return <SoundContext.Provider value={{ isPlaying, toggleSound, playEffect }}>{children}</SoundContext.Provider>
}

export const useSound = () => {
  const context = useContext(SoundContext)
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider")
  }
  return context
}
