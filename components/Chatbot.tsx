"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, User, Bot, Sparkles, ArrowLeft, Minimize2 } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Saniya's AI assistant. How can I help you today? ✨",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isHidden, setIsHidden] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const chatbotHidden = localStorage.getItem("chatbotHidden")
    if (chatbotHidden === "true") {
      setIsHidden(true)
    }
  }, [])

  const predefinedQuestions = [
    "Tell me about your skills",
    "Show me your best project",
    "How can I contact you?",
    "What technologies do you use?",
  ]

  const botResponses: { [key: string]: string } = {
    "Tell me about your skills":
      "🚀 Saniya is skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, Python, and SQL. She's passionate about frontend development and aspiring to become a Full Stack Developer! Her expertise includes creating responsive, user-friendly applications with modern web technologies.",
    "Show me your best project":
      "⭐ Her standout project is the Modest AI Web App - a clean fashion platform built with React.js, Tailwind CSS, and Vercel AI. It showcases her ability to integrate AI technologies with modern web development! She also created Voices of Palestine, a powerful visual storytelling platform.",
    "How can I contact you?":
      "📬 You can reach Saniya through:\n📧 Email: saniyamohd0504@gmail.com\n💼 LinkedIn: linkedin.com/in/mohd-saniya-b-a32204280\n🐙 GitHub: github.com/saniyamohd05\n\nShe typically responds within 24 hours!",
    "What technologies do you use?":
      "💻 Saniya works with modern web technologies including React.js, JavaScript, HTML/CSS, Tailwind CSS, Python, SQL, and she's always learning new tools. She also has experience with Firebase, OpenAI APIs, and various development frameworks! She's particularly passionate about creating beautiful, functional user interfaces.",
    hello:
      "👋 Hello! Welcome to Saniya's portfolio! I'm here to help you learn more about her skills, projects, and experience. What would you like to know?",
    hi: "👋 Hi there! I'm Saniya's AI assistant. Feel free to ask me about her projects, skills, or how to get in touch with her!",
    about:
      "🌟 Saniya is a passionate Computer Science student and frontend developer who loves creating beautiful, functional web applications. She's currently aspiring to become a Full Stack Developer and is always learning new technologies!",
    projects:
      "🚀 Saniya has worked on several exciting projects including the Modest AI Web App, Voices of Palestine storytelling platform, Nikah-Min-Sunnati matrimony app, and various interactive games and tools. Each project showcases different aspects of her development skills!",
    experience:
      "💼 Saniya has experience in frontend development with React.js, JavaScript, HTML/CSS, and Tailwind CSS. She's also learning backend technologies like Python and SQL. Her projects demonstrate her ability to create user-friendly, responsive applications.",
  }

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    // Check for exact matches first
    if (botResponses[input]) {
      return botResponses[input]
    }

    // Check for partial matches
    if (lowerInput.includes("skill") || lowerInput.includes("technology") || lowerInput.includes("tech")) {
      return botResponses["Tell me about your skills"]
    }
    if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("portfolio")) {
      return botResponses["Show me your best project"]
    }
    if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email")) {
      return botResponses["How can I contact you?"]
    }
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return botResponses["hello"]
    }
    if (lowerInput.includes("about") || lowerInput.includes("who")) {
      return botResponses["about"]
    }

    return "Thanks for your message! 😊 For more detailed information, please feel free to contact Saniya directly through the contact form or email. She'd love to hear from you!"
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: text,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate bot typing and response
    setTimeout(() => {
      setIsTyping(false)
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(text),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1500)

    setInputMessage("")
  }

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question)
  }

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Saniya's AI assistant. How can I help you today? ✨",
        isBot: true,
        timestamp: new Date(),
      },
    ])
    setInputMessage("")
    setIsTyping(false)
  }

  const closeChat = () => {
    setIsOpen(false)
    // Optional: Reset chat when closing
    setTimeout(() => {
      resetChat()
    }, 300)
  }

  const hideChatbot = () => {
    setIsHidden(true)
    setIsOpen(false)
    // Store in localStorage so it stays hidden across page reloads
    localStorage.setItem("chatbotHidden", "true")
  }

  const showChatbot = () => {
    setIsHidden(false)
    localStorage.setItem("chatbotHidden", "false")
  }

  // Show quick questions only when there's just the initial message and no input
  const showQuickQuestions = messages.length === 1 && !inputMessage.trim() && !isTyping
  // Show reset button when there are more messages or user is typing
  const showResetButton = messages.length > 1 || inputMessage.trim().length > 0

  if (isHidden) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={showChatbot}
        className="fixed bottom-6 right-6 z-50 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded-full shadow-lg transition-all duration-300"
      >
        Show Chat
      </motion.button>
    )
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
      >
        {/* Animated Ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
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
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <MessageCircle size={24} />
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
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <Bot size={16} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      Saniya's AI Assistant
                      <Sparkles size={14} />
                    </h3>
                    <motion.p
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="text-xs opacity-90"
                    >
                      Online & ready to help
                    </motion.p>
                  </div>
                </div>

                {/* Header Buttons */}
                <div className="flex items-center gap-2">
                  {/* Reset/Back Button */}
                  <AnimatePresence>
                    {showResetButton && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0, x: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={resetChat}
                        className="flex items-center gap-1 px-2 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 text-xs"
                        title="Back to menu"
                      >
                        <ArrowLeft size={12} />
                        <span className="hidden sm:inline">Back</span>
                      </motion.button>
                    )}
                  </AnimatePresence>

                  {/* Hide Chatbot Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={hideChatbot}
                    className="p-1.5 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-all duration-200"
                    title="Hide chatbot completely"
                  >
                    <X size={14} />
                  </motion.button>

                  {/* Close/Minimize Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeChat}
                    className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200"
                    title="Close chat"
                  >
                    <Minimize2 size={14} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[85%] ${message.isBot ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        message.isBot
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                      }`}
                    >
                      {message.isBot ? <Bot size={12} /> : <User size={12} />}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-3 rounded-lg shadow-sm ${
                        message.isBot
                          ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center text-xs">
                      <Bot size={12} />
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Questions */}
            <AnimatePresence>
              {showQuickQuestions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/50"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                    <Sparkles size={12} />
                    Quick questions:
                  </p>
                  <div className="space-y-2">
                    {predefinedQuestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuestionClick(question)}
                        className="w-full text-left p-3 text-xs bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 transition-all duration-200 border border-gray-200/50 dark:border-gray-600/50 shadow-sm"
                      >
                        ✨ {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage(inputMessage)}
                  disabled={!inputMessage.trim()}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-lg transition-all duration-200 shadow-sm disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </motion.button>
              </div>

              {/* Footer hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center"
              >
                Use the minimize button (⊟) above to close this chat
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
