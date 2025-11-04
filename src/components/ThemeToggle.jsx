import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme, isTransitioning } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-14 h-8 rounded-full p-1 transition-all duration-500 ease-in-out
        ${
          isDark
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-purple-500/25"
            : "bg-gradient-to-r from-sky-400 to-blue-500 shadow-lg shadow-blue-500/25"
        }
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          isDark
            ? "focus:ring-purple-500 focus:ring-offset-gray-900"
            : "focus:ring-blue-500 focus:ring-offset-white"
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isTransitioning}
    >
      {/* Toggle Circle */}
      <motion.div
        className={`
          w-6 h-6 rounded-full shadow-md flex items-center justify-center text-xs
          ${isDark ? "bg-gray-800 text-purple-300" : "bg-white text-yellow-500"}
        `}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.span
          className={`text-xs transition-opacity duration-300 ${
            isDark ? "opacity-30" : "opacity-70"
          }`}
          animate={{ opacity: isDark ? 0.3 : 0.7 }}
        >
          ☀️
        </motion.span>
        <motion.span
          className={`text-xs transition-opacity duration-300 ${
            isDark ? "opacity-70" : "opacity-30"
          }`}
          animate={{ opacity: isDark ? 0.7 : 0.3 }}
        >
          🌙
        </motion.span>
      </div>

      {/* Ripple Effect */}
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
