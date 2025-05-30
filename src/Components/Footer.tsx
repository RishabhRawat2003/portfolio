"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RishabhRawat2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700/30 text-gray-300 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-rawat-371453228/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700/30 text-gray-300 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:rajputrishabh359@gmail.com"
              className="p-3 bg-gray-700/30 text-gray-300 rounded-lg hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
              aria-label="Send Email"
            >
              <FiMail className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400">
            <p className="text-sm">
              &copy; {currentYear} Rishabh Rawat. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;