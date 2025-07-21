"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye, Sparkles, Heart, Users, Clock, Gamepad2, Palette, Globe } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Modest AI Web App",
      description: "A clean modest fashion platform for personalized link sharing and styling.",
      tech: ["React.js", "Tailwind CSS", "Vercel AI"],
      icon: "🤖",
      iconBg: "from-pink-500 to-rose-500",
      liveDemo: "#",
      github: null,
      color: "from-pink-500 to-rose-500",
      featured: true,
      lucideIcon: Palette,
    },
    {
      title: "Voices of Palestine",
      description: "A visual storytelling platform highlighting the struggle and resilience of Palestine.",
      tech: ["React.js", "Tailwind CSS", "OpenAI Vision API"],
      icon: "🕊️",
      iconBg: "from-green-500 to-emerald-500",
      liveDemo: "#",
      github: null,
      color: "from-green-500 to-emerald-500",
      featured: true,
      lucideIcon: Heart,
    },
    {
      title: "Nikah‑Min‑Sunnati App",
      description: "A spiritual matrimony platform that simplifies marriage in the Sunnah way.",
      tech: ["React.js", "Firebase", "Tailwind CSS"],
      icon: "💍",
      iconBg: "from-purple-500 to-indigo-500",
      liveDemo: null,
      github: "#",
      color: "from-purple-500 to-indigo-500",
      featured: false,
      lucideIcon: Users,
    },
    {
      title: "Epic Quest Tracker",
      description: "A gamified task tracker that turns daily goals into exciting quests.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "⚔️",
      iconBg: "from-orange-500 to-red-500",
      liveDemo: "#",
      github: null,
      color: "from-orange-500 to-red-500",
      featured: false,
      lucideIcon: Gamepad2,
    },
    {
      title: "Chronos Stopwatch App",
      description: "A minimalist stopwatch with start, pause, and reset functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "⏱️",
      iconBg: "from-blue-500 to-cyan-500",
      liveDemo: "#",
      github: null,
      color: "from-blue-500 to-cyan-500",
      featured: false,
      lucideIcon: Clock,
    },
    {
      title: "Tic Tac Toe Game",
      description: "A fun and interactive two-player Tic Tac Toe game for browsers.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🎮",
      iconBg: "from-teal-500 to-green-500",
      liveDemo: "#",
      github: null,
      color: "from-teal-500 to-green-500",
      featured: false,
      lucideIcon: Globe,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const LucideIcon = project.lucideIcon
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  scale: 1.02,
                }}
                className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 ${
                  project.featured ? "lg:col-span-1 md:col-span-1" : ""
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                  >
                    <Sparkles size={12} />
                    Featured
                  </motion.div>
                )}

                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Icon Section */}
                <div className="relative overflow-hidden h-48 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                          linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                          linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
                          linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%)
                        `,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                      }}
                    />
                  </div>

                  {/* Main Icon */}
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="relative z-10">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-r ${project.iconBg} flex items-center justify-center text-4xl shadow-lg`}
                    >
                      {project.icon}
                    </div>
                  </motion.div>

                  {/* Floating Lucide Icon */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 left-4 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md"
                  >
                    <LucideIcon size={16} className={`text-gray-600 dark:text-gray-400`} />
                  </motion.div>

                  {/* Overlay with Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                  >
                    <div className="flex space-x-4">
                      {project.liveDemo && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveDemo}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors border border-white/30"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors border border-white/30"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.sin(i) * 10, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                      className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="p-6 relative z-10">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.liveDemo && (
                      <motion.a
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveDemo}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        GitHub Repo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, ${project.color.split(" ")[1]}, ${project.color.split(" ")[3]})`,
                    filter: "blur(20px)",
                    transform: "scale(1.1)",
                    zIndex: -1,
                  }}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Want to see more? Let's talk!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
