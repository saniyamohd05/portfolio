"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles } from "lucide-react"
import { useSound } from "./SoundProvider"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const ChatbotOrb = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🧙‍♀️ Greetings, brave adventurer! I'm your magical guide through this coding realm. What quest brings you here today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const { playEffect } = useSound()

  const predefinedQuestions = [
    "Tell me about your best project",
    "What tech stacks do you know?",
    "How can we collaborate?",
    "What's your coding philosophy?",
  ]

  const botResponses: { [key: string]: string } = {
    "Tell me about your best project":
      "🏆 My most legendary quest was the Dragon Slayer E-commerce platform! Built with React, Node.js, and MongoDB, it features real-time inventory management, secure payment processing, and a magical user experience. The project taught me the ancient arts of scalable architecture and performance optimization!",
    "What tech stacks do you know?":
      "⚔️ My spell arsenal includes:\n🎨 Frontend Sorcery: React, TypeScript, Next.js, Tailwind CSS\n⚙️ Backend Wizardry: Node.js, Python, PostgreSQL, MongoDB\n☁️ DevOps Enchantments: Docker, AWS, Git, CI/CD\n📱 Mobile Spells: React Native, Flutter, PWA\n\nEach technology is a powerful spell in my coding grimoire!",
    "How can we collaborate?":
      "🤝 I'm always seeking fellow adventurers for epic quests! Whether you need:\n✨ A frontend wizard for your React adventures\n🏗️ A full-stack sorcerer for complete solutions\n🎯 A code mentor to guide your learning journey\n🚀 A project partner for innovative ideas\n\nSend me a message through the enchanted scroll in the Guild Hall!",
    "What's your coding philosophy?":
      "📚 My coding philosophy follows the ancient wisdom:\n🎯 'Clean code is not written by following a set of rules. Clean code is written by programmers who care.'\n⚡ I believe in writing code that tells a story, solving problems with elegance, and always learning new spells.\n🌟 Every bug is a puzzle to solve, every feature is an adventure to embark upon!",
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    playEffect("magic")

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text:
          botResponses[text] ||
          "🔮 That's an interesting question! For more detailed discussions about my magical coding abilities, please visit the Guild Hall and send me an enchanted message. I'd love to help you on your quest!",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)

    setInputMessage("")
  }

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Floating Orb */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen)
          playEffect("magic")
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        {/* Magical Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-md"
        />

        {/* Floating Particles */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-2 rounded-full border-2 border-white/30 border-dashed"
        />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="orb"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 text-2xl"
            >
              🔮
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-purple-500/30 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg"
                >
                  🧙‍♀️
                </motion.div>
                <div>
                  <h3 className="font-bold">Magical Guide</h3>
                  <p className="text-xs opacity-90 flex items-center gap-1">
                    <Sparkles size={12} />
                    Online & Ready to Help
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-900/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[85%] ${message.isBot ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${message.isBot ? "bg-purple-600" : "bg-gray-600"}`}
                    >
                      {message.isBot ? "🧙‍♀️" : "🧑‍💻"}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${message.isBot ? "bg-gray-700 text-gray-100" : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"}`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Predefined Questions */}
            {messages.length <= 2 && (
              <div className="p-4 border-t border-gray-700 bg-gray-800/50">
                <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                  <Sparkles size={12} />
                  Quick Spells:
                </p>
                <div className="space-y-2">
                  {predefinedQuestions.map((question) => (
                    <motion.button
                      key={question}
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuestionClick(question)}
                      className="w-full text-left p-2 text-xs bg-gray-700/50 hover:bg-gray-600/50 rounded text-gray-300 transition-all duration-200 border border-gray-600/30 hover:border-purple-500/30"
                    >
                      ✨ {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-700 bg-gray-800/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage(inputMessage)}
                  className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotOrb
