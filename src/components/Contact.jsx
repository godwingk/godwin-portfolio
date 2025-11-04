import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        title: "Portfolio Contact", // optional, or use a field for subject
        date: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "godwinkumar1231@gmail.com",
      href: "mailto:godwinkumar1231@gmail.com",
      color: "#3B82F6",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 98423 19710",
      href: "tel:+919842319710",
      color: "#10B981",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
      color: "#F59E0B",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/godwingk",
      color: "#ffffff",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/godwinkumar",
      color: "#0077B5",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: "https://twitter.com/godwin",
      color: "#1DA1F2",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-indigo-100/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-gray-900 transition-colors duration-500"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
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
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
              Get In{" "}
              <span className="text-blue-600 dark:text-blue-400">Touch</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500">
            Ready to start your next project? Let's work together to create
            something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-500">
              Send Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-500"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-500"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                } text-white`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center font-medium"
                >
                  Message sent successfully! 🎉
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium"
                >
                  Failed to send message. Please try again. ❌
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-500">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <Icon size={20} color={info.color} />
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">
                          {info.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon
                        size={20}
                        color={social.color}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-600/20 dark:to-purple-600/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-500/30 transition-colors duration-500">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
                Let's Build Something Great!
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 transition-colors duration-500">
                I'm always excited to work on new projects and collaborate with
                amazing people.
              </p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-500">
                <span>Available for freelance work</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
