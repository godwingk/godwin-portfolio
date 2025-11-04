import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaTimes,
  FaChevronDown,
  FaMagic,
  FaUser,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiVite,
  SiDjango,
  SiPython,
} from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "YouTube Clone",
      description:
        "A fully responsive YouTube clone built with React, Vite, and Tailwind CSS using the YouTube Data API v3.",
      image:
        "https://images.unsplash.com/photo-1746608942838-a484d55ffeda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tech: [FaReact, SiVite, SiTailwindcss, FaMagic],
      detailedDescription:
        "A feature-rich and responsive YouTube Clone built with React.js and Vite, designed for high performance and a sleek modern UI. It integrates the YouTube Data API v3 to fetch and play real videos dynamically, featuring smooth animations, theme toggling, and an optimized user experience across all devices.",
      features: [
        "Real-Time Video Search and Playback via YouTube Data API",
        "Dynamic Routing for Videos and Channels",
        "Dark/Light Mode with Persistent User Preference",
        "Fully Responsive Layout for Mobile, Tablet, and Desktop",
        "Animated UI using Framer Motion",
      ],
      technologies: [
        "React 18",
        "Vite",
        "TailwindCSS",
        "Framer Motion",
        "YouTube Data API v3",
        "React Router DOM",
      ],
      color: "from-red-500 to-orange-600",
    },
    {
      id: 2,
      title: "Food Delivery App",
      description:
        "A full-stack food delivery platform built with React.js and Django, featuring authentication, restaurant browsing, and AI-powered recommendations.",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
      tech: [FaReact, SiDjango, SiPython, SiTailwindcss],
      detailedDescription:
        "A complete food delivery solution combining React.js frontend and Django REST backend. It enables users to browse restaurants, manage carts, place orders, and receive AI-driven meal recommendations. Includes an admin dashboard for restaurant and menu management with JWT authentication for secure access.",
      features: [
        "User Authentication with JWT",
        "Restaurant & Menu Browsing",
        "Add/Remove Items to Cart in Real-Time",
        "Order History & Status Tracking",
        "AI-Powered Food Recommendations",
        "Responsive UI with Modern Design",
        "Admin Panel for Content Management",
      ],
      technologies: [
        "React.js",
        "Django",
        "Django REST Framework",
        "Tailwind CSS",
        "JWT Authentication",
        "SQLite",
      ],
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website showcasing my projects and skills with dark/light theme support",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: [FaReact, SiVite, SiTailwindcss, FaMagic],
      detailedDescription:
        "A comprehensive personal portfolio built with React and modern web technologies. Features a responsive design, smooth animations, theme switching, and a functional contact form. Showcases my projects, skills, and professional journey with an intuitive user experience.",
      features: [
        "Dark/Light Theme Toggle with Persistent Settings",
        "Fully Responsive Design for All Devices",
        "Smooth Animations with Framer Motion",
        "Interactive Project Showcase with Modals",
        "Functional Contact Form with EmailJS Integration",
        "Professional Navigation with Social Links",
        "Mobile-Optimized User Experience",
      ],
      technologies: [
        "React 18",
        "Vite",
        "TailwindCSS",
        "Framer Motion",
        "EmailJS",
        "React Context API",
      ],
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // Different animation variants for mobile and desktop
  const modalVariants = {
    hidden: isMobile
      ? { opacity: 0, y: "100%" }
      : { opacity: 0, scale: 0.8, y: 50 },
    visible: isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 },
    exit: isMobile
      ? { opacity: 0, y: "100%" }
      : { opacity: 0, scale: 0.8, y: 50 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-800 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-gray-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-gray-900 transition-colors duration-500"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
              My{" "}
              <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500">
            Here are some projects I've worked on to showcase my skills and
            creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tech Stack Icons */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tech.map((TechIcon, techIndex) => (
                    <div
                      key={techIndex}
                      className="w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <TechIcon size={16} className="text-white" />
                    </div>
                  ))}
                </div>

                {/* Click Indicator */}
                <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">
                    {isMobile ? "Tap to view" : "Click to view"}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-500">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-500">
            Want to see more projects or collaborate on something new?
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal - Responsive Design */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: isMobile ? 0.4 : 0.3,
              }}
              className={`
                bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full overflow-y-auto transition-colors duration-500
                ${
                  isMobile
                    ? "rounded-t-3xl max-h-[85vh] min-h-[50vh]"
                    : "rounded-2xl max-w-2xl max-h-[90vh] m-4"
                }
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Handle Bar */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-12 h-1 bg-gray-400 dark:bg-gray-600 rounded-full transition-colors duration-500"></div>
                </div>
              )}

              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`w-full object-cover ${
                    isMobile ? "h-48 rounded-t-3xl" : "h-64 rounded-t-2xl"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 to-transparent transition-colors duration-500 ${
                    isMobile ? "rounded-t-3xl" : "rounded-t-2xl"
                  }`}
                ></div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className={`absolute top-4 right-4 ${
                    isMobile ? "w-12 h-12" : "w-10 h-10"
                  } bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors duration-300`}
                >
                  {isMobile ? (
                    <FaChevronDown size={18} />
                  ) : (
                    <FaTimes size={16} />
                  )}
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-6">
                  <h3
                    className={`font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500 ${
                      isMobile ? "text-xl" : "text-2xl"
                    }`}
                  >
                    {selectedProject.title}
                  </h3>
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${selectedProject.color} rounded-full`}
                  ></div>
                </div>
              </div>

              {/* Modal Content */}
              <div className={`space-y-6 ${isMobile ? "p-4" : "p-6"}`}>
                {/* Description */}
                <div>
                  <h4
                    className={`font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-500 ${
                      isMobile ? "text-base" : "text-lg"
                    }`}
                  >
                    About This Project
                  </h4>
                  <p
                    className={`text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-500 ${
                      isMobile ? "text-sm" : "text-base"
                    }`}
                  >
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4
                    className={`font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-500 ${
                      isMobile ? "text-base" : "text-lg"
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-2 text-gray-600 dark:text-gray-300 transition-colors duration-500 ${
                          isMobile ? "text-sm" : "text-base"
                        }`}
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4
                    className={`font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-500 ${
                      isMobile ? "text-base" : "text-lg"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 rounded-full font-medium border border-blue-200 dark:border-blue-600/30 transition-colors duration-500 ${
                          isMobile ? "text-xs" : "text-sm"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile Bottom Spacing */}
                {isMobile && <div className="h-4"></div>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
