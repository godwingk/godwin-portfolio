import { motion } from "framer-motion";

const About = () => {
  const driveCards = [
    {
      icon: "🎓",
      title: "Education",
      subtitle: "ECE Diploma",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🎯",
      title: "Specialty",
      subtitle: "Full-Stack",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "📚",
      title: "Training",
      subtitle: "IT Vedant",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "⚡",
      title: "Hardware Exp",
      subtitle: "1.5 Years",
      color: "from-gray-500 to-gray-600",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">👨‍💻</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-500">
            Full-stack developer bridging hardware and software engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Professional Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-500"
          >
            {/* Section Title */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                Full-Stack Developer
              </h3>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-500">
              <p>
                I'm a full-stack developer with a{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  unique journey
                </span>{" "}
                that spans both hardware and software engineering. After earning
                my{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Diploma in Electronics & Communication Engineering (2021)
                </span>
                , I spent 1.5 years working hands-on with SGR modules and
                electronic systems.
              </p>

              <p>
                This experience taught me to think systematically, debug complex
                problems, and understand how technology works at a fundamental
                level. But my true passion lies in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  building for the web
                </span>
                .
              </p>

              <p>
                I made a deliberate transition into software development,
                completing intensive training in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Python Full Stack Development at IT Vedant, Chennai (2025)
                </span>
                . Now I create responsive, user-focused web applications using
                modern technologies.
              </p>

              <p>
                What sets me apart is my ability to{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  bridge hardware and software thinking
                </span>
                . I approach web development with the same precision and
                problem-solving mindset I developed working with electronic
                systems, but with a focus on creating intuitive user experiences
                and clean, maintainable code.
              </p>

              <p>
                I'm continuously learning and building-whether it's
                experimenting with new React patterns, optimizing database
                queries, or exploring the latest web technologies.{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Each project is an opportunity to grow and refine my craft
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* What Drives Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-500"
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⚡</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                What Drives Me
              </h3>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {driveCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gray-800 dark:bg-gray-700 rounded-xl p-6 border border-gray-700 dark:border-gray-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                      {card.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-gray-400 dark:text-gray-300 text-sm font-medium transition-colors duration-500">
                        {card.title}
                      </p>
                      <h4 className="text-white text-lg font-semibold">
                        {card.subtitle}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Seeking Opportunities Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-500"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-500">
              I'm currently seeking opportunities as a{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Full-Stack or Frontend Developer
              </span>{" "}
              where I can contribute to impactful projects, collaborate with
              talented teams, and continue growing as an engineer. If you're
              looking for someone who's technically grounded, genuinely
              passionate about development, and eager to make a difference,{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                let's connect
              </span>
              .
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Build Something Together
              <span className="text-lg">🚀</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
