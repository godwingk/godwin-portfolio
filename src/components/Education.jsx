import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      level: "12th Standard",
      institution: "SGS Memorial Public Matric School",
      location: "Karungal",
      year: "2018",
      description:
        "Completed Higher Secondary Education with focus on Science stream",
      icon: FaSchool,
      color: "#10B981",
      type: "school",
    },
    {
      id: 2,
      level: "Diploma",
      field: "Electronics & Communication Engineering",
      institution: "Engineering College",
      location: "Tamil Nadu",
      year: "2018 - 2021",
      description:
        "Completed Diploma in Electronics and Communication Engineering with strong foundation in technical concepts",
      icon: FaUniversity,
      color: "#3B82F6",
      type: "diploma",
    },
    {
      id: 3,
      level: "Professional Certification",
      field: "Python Full Stack Development",
      institution: "IT Vedant",
      location: "Chennai",
      year: "2025",
      description:
        "Comprehensive training in Python, Django, React, and modern web development technologies",
      icon: FaCode,
      color: "#8B5CF6",
      type: "certification",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-blue-100/30 to-purple-100/30 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-500"></div>
      </div>

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
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
              Education &{" "}
              <span className="text-green-600 dark:text-green-400">
                Learning
              </span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500">
            My educational journey as a fresh graduate, building a strong
            foundation in technology and engineering
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${edu.color}20` }}
                  >
                    <Icon size={28} color={edu.color} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                        {edu.level}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">
                        <FaCalendarAlt size={12} />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    {edu.field && (
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 transition-colors duration-500">
                        {edu.field}
                      </p>
                    )}

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-500">
                      {edu.institution}
                    </h4>

                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-500">
                      <FaMapMarkerAlt size={12} />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3 transition-colors duration-500">
                      {edu.description}
                    </p>

                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: edu.color }}
                    >
                      {edu.type === "diploma"
                        ? "Diploma"
                        : edu.type.charAt(0).toUpperCase() + edu.type.slice(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 transition-colors duration-500">
              <div className="text-4xl mb-3">🎓</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-500">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                Educational Milestones
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-500">
                From school to professional training
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 transition-colors duration-500">
              <div className="text-4xl mb-3">💻</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-500">
                Fresh
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                Graduate Status
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-500">
                Ready to start professional journey
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 transition-colors duration-500">
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-500">
                100%
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                Enthusiasm
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-500">
                Eager to learn and contribute
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
