"use client"

import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { useSound } from "./SoundProvider"
import { AnimatePresence } from "framer-motion"

const SoundToggle = () => {
  const { isPlaying, toggleSound } = useSound()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleSound}
      className="fixed top-6 right-6 z-50 p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Volume2 size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="muted"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <VolumeX size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default SoundToggle
