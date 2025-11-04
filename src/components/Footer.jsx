import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/godwingk",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/godwinkumar",
      label: "LinkedIn",
    },

    {
      icon: FaEnvelope,
      href: "mailto:godwinkumar1231@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-gray-50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-gray-900 transition-colors duration-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                  Godwin
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                Fresh graduate passionate about creating innovative web
                solutions with modern technologies. Ready to contribute and
                grow.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon
                        size={18}
                        className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope
                    className="text-blue-600 dark:text-blue-400"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    godwinkumar1231@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone
                    className="text-blue-600 dark:text-blue-400"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    +91 98423 19710
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt
                    className="text-blue-600 dark:text-blue-400"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    Tamil Nadu, India
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">
              © {currentYear} Godwin. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1 transition-colors duration-500">
              Made with <FaHeart className="text-red-500" size={14} /> by Godwin
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
