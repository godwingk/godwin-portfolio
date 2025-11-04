import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaCog,
  FaGraduationCap,
} from "react-icons/fa";

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: "hero", icon: FaHome, label: "Home" },
    { id: "about", icon: FaUser, label: "About" },
    { id: "skills", icon: FaCog, label: "Skills" },
    { id: "education", icon: FaGraduationCap, label: "Education" },
    { id: "projects", icon: FaProjectDiagram, label: "Projects" },
    { id: "contact", icon: FaEnvelope, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Determine active section
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item) => {
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-40"
        >
          <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg rounded-full p-1 sm:p-2 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-500">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`relative block w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-1 sm:mb-2 last:mb-0 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-500 dark:hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm sm:text-base" />

                  {/* Tooltip */}
                  <motion.div
                    className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 rounded text-xs sm:text-sm whitespace-nowrap opacity-0 pointer-events-none transition-colors duration-500 hidden sm:block"
                    whileHover={{ opacity: 1 }}
                  >
                    {item.label}
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
