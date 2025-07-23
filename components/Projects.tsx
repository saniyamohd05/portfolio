"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Layout, Brain, Globe, Heart, Target, Timer, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Projects = () => {
  const featuredProjects = [
    {
      title: "Web Landing Page",
      description:
        "A modern, responsive landing page built with HTML, CSS, and JavaScript featuring smooth animations and mobile-first design.",
      icon: <Layout className="w-12 h-12" />,
      emoji: "🌐",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://saniyamohd05.github.io/CODECRAFT_WD_01/",
      githubUrl: "https://github.com/saniyamohd05/CODECRAFT_WD_01",
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "🌐✨💻🎨",
    },
    {
      title: "Modest AI Web App",
      description:
        "An intelligent web application powered by AI, featuring modern UI/UX design and seamless user interactions.",
      icon: <Brain className="w-12 h-12" />,
      emoji: "🤖",
      technologies: ["React", "AI Integration", "Modern UI", "API"],
      liveUrl: "https://v0-modest-ai-web-app.vercel.app/",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "🤖🧠⚡🔮",
    },
    {
      title: "Voices of Palestine",
      description:
        "A powerful web application for image analysis and storytelling, built with modern web technologies.",
      icon: <Globe className="w-12 h-12" />,
      emoji: "🌍",
      technologies: ["Next.js", "Image Analysis", "Web App", "Modern Design"],
      liveUrl: "https://v0-image-analysis-zeta-lyart-7dsuw5g2hh.vercel.app/",
      githubUrl: "#",
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "🌍🕊️📸🎯",
    },
  ]

  const otherProjects = [
    {
      title: "Nikah-Min-Sunnati App",
      description: "A beautiful matrimonial application with modern features",
      icon: <Heart className="w-8 h-8" />,
      emoji: "💕",
      technologies: ["React", "UI/UX", "Web App"],
      liveUrl: "https://nikahminsunnati.vercel.app/",
      githubUrl: "#",
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Epic Quest Tracker",
      description: "A comprehensive project management and tracking system",
      icon: <Target className="w-8 h-8" />,
      emoji: "🎯",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://saniyamohd05.github.io/Projects/",
      githubUrl: "https://github.com/saniyamohd05/Projects",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Chronos Stopwatch",
      description: "A precise and elegant stopwatch application",
      icon: <Timer className="w-8 h-8" />,
      emoji: "⏱️",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://saniyamohd05.github.io/codecraft_wd__02/",
      githubUrl: "https://github.com/saniyamohd05/codecraft_wd__02",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Tic Tac Toe Game",
      description: "An interactive and fun tic-tac-toe game with smooth animations",
      icon: <Gamepad2 className="w-8 h-8" />,
      emoji: "🎮",
      technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
      liveUrl: "https://saniyamohd05.github.io/CodeCraft__WD_03/",
      githubUrl: "https://github.com/saniyamohd05/CodeCraft__WD_03",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-800/10 dark:to-cyan-800/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              My Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A showcase of my latest work in web development, featuring modern technologies and creative solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 text-6xl flex flex-wrap items-center justify-center gap-4 pointer-events-none overflow-hidden">
                  {project.bgPattern.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 4 + i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                <CardContent className="p-8 relative z-10">
                  {/* Project Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg mb-6 relative`}
                  >
                    {project.icon}
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                      className="absolute -top-2 -right-2 text-2xl"
                    >
                      {project.emoji}
                    </motion.span>
                  </motion.div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      asChild
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300`}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Other Notable Projects</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Additional projects showcasing various skills and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Project Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg mb-4 relative`}
                  >
                    {project.icon}
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                      className="absolute -top-1 -right-1 text-lg"
                    >
                      {project.emoji}
                    </motion.span>
                  </motion.div>

                  {/* Project Info */}
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button asChild size="sm" className={`flex-1 bg-gradient-to-r ${project.gradient} text-xs`}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in working together? Let's create something amazing!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg transition-all duration-300"
          >
            <a href="#contact">
              Get In Touch
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="ml-2"
              >
                →
              </motion.span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
