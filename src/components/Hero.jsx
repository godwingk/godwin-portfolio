import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaCode,
  FaPalette,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "React js Developer",
    "Full Stack Web Developer",
    "Web Developer",
    "JavaScript Developer",
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/godwinkumar-resume.pdf";
    link.download = "Godwin_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/30"
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Welcome to my Portfolio
                </h1>
              </div>
            </motion.div>

            <div className="flex items-center gap-1 sm:gap-2">
              {/* Social Links */}
              <motion.a
                href="https://github.com/godwingk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-white active:scale-95"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-sm sm:text-base" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/godwinkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-blue-400 active:scale-95"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-sm sm:text-base" />
              </motion.a>

              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-emerald-400 active:scale-95"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Go to contact section"
              >
                <FaEnvelope className="text-sm sm:text-base" />
              </motion.button>

              <div className="ml-1 sm:ml-2 pl-1 sm:pl-2 border-l border-slate-700">
                <motion.button
                  onClick={toggleTheme}
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-yellow-400 active:scale-95"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <FaSun className="text-sm sm:text-base" />
                  ) : (
                    <FaMoon className="text-sm sm:text-base" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden pt-14 sm:pt-16 transition-colors duration-500">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-indigo-100/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-gray-900 transition-colors duration-500"></div>

          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-pulse transition-colors duration-500"></div>
          <div
            className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse transition-colors duration-500"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse transition-colors duration-500"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 sm:py-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-6 sm:space-y-8"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Godwin Kumar
                </span>
              </motion.h1>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-500">
                  I'm a{" "}
                  <span className="text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400 animate-pulse transition-colors duration-500">
                    {displayText}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 sm:p-3 rounded-xl bg-white/80 dark:bg-gray-700 text-blue-600 dark:text-blue-400 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaCode className="text-lg sm:text-xl" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="p-2 sm:p-3 rounded-xl bg-white/80 dark:bg-gray-700 text-purple-600 dark:text-purple-400 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaPalette className="text-lg sm:text-xl" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="p-2 sm:p-3 rounded-xl bg-white/80 dark:bg-gray-700 text-green-600 dark:text-green-400 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaRocket className="text-lg sm:text-xl" />
                </motion.div>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Fresh graduate passionate about creating amazing web experiences
                with modern technologies. Ready to bring creative ideas to life
                through clean, efficient code.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="text-sm" />
                  Download CV
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  className="h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-blue-400 shadow-2xl transition-colors duration-500 dark:border-blue-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/profile.png"
                    alt="Godwin - Frontend Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg group active:scale-95 transition-transform duration-300">
                    <img
                      src="/profile.png"
                      alt="Godwin"
                      className="h-full w-full object-cover transform group-active:translate-y-1 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-600/50 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>

                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-600/20 dark:from-blue-400/30 dark:to-purple-600/30 rounded-full opacity-20 animate-pulse transition-colors duration-500"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce transition-colors duration-500"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 dark:bg-purple-500 rounded-full animate-bounce transition-colors duration-500"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
