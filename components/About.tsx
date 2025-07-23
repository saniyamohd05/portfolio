"use client"

import { motion } from "framer-motion"
import { Code, Rocket, Palette, GraduationCap, Trophy, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

const About = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: "8.5",
      label: "CGPA",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: "15+",
      label: "Projects",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "2+",
      label: "Years",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "100%",
      label: "Passion",
      color: "from-red-500 to-orange-500",
    },
  ]

  const skills = [
    {
      name: "Frontend Development",
      description: "React, Next.js, HTML, CSS, JavaScript",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Problem Solving",
      description: "Algorithm Design, Data Structures",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const floatingIcons = [
    { icon: <Code className="w-6 h-6" />, delay: 0, color: "text-blue-500" },
    { icon: <Rocket className="w-6 h-6" />, delay: 1, color: "text-purple-500" },
    { icon: <Palette className="w-6 h-6" />, delay: 2, color: "text-pink-500" },
  ]

  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    angle: i * 30 * (Math.PI / 180),
  }))

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
              Get to know me
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Profile Picture Section - Top Positioned */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            {/* Rotating Background Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            >
              <div className="w-full h-full rounded-full border-2 border-gradient-to-r from-blue-500/30 to-purple-500/30 border-dashed" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            >
              <div className="w-full h-full rounded-full border-2 border-gradient-to-r from-purple-500/30 to-pink-500/30 border-dotted" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 w-72 h-72 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            >
              <div className="w-full h-full rounded-full border border-gradient-to-r from-pink-500/30 to-red-500/30" />
            </motion.div>

            {/* Floating Sparkles */}
            {sparkles.map((sparkle) => (
              <motion.div
                key={sparkle.id}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: sparkle.delay,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{
                  left: `${50 + 45 * Math.cos(sparkle.angle)}%`,
                  top: `${50 + 45 * Math.sin(sparkle.angle)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            ))}

            {/* Floating Tech Icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: item.delay,
                  ease: "easeInOut",
                }}
                className={`absolute ${item.color}`}
                style={{
                  left: index === 0 ? "-20%" : index === 1 ? "120%" : "50%",
                  top: index === 0 ? "20%" : index === 1 ? "30%" : "-20%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg">
                  {item.icon}
                </div>
              </motion.div>
            ))}

            {/* Main Profile Picture Container */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative z-10">
              {/* Gradient Border Frame */}
              <div className="p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
                <div className="p-2 bg-white dark:bg-gray-900 rounded-full">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/profile-new.jpg"
                      alt="Saniya Mohammed - Frontend Developer working on laptop"
                      fill
                      className="object-cover rounded-full"
                      priority
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full" />
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl -z-10" />
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Saniya Mohammed
              </span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A passionate Frontend Developer and Computer Science student with a love for creating beautiful,
              functional web experiences. I specialize in modern web technologies and enjoy turning complex problems
              into simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently pursuing my degree while building innovative projects that combine creativity with cutting-edge
              technology. I believe in continuous learning and staying updated with the latest trends in web
              development.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
