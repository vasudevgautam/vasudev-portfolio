import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo / Intro */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              Vasudev<span className="text-blue-400">.</span>
            </a>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Civil Engineering student and aspiring software developer
              passionate about building practical and meaningful digital
              solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/vasudevgautam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              aria-label="GitHub"
            >
              <FiGithub size={19} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vasudev-gautam/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={19} />
            </motion.a>

            <motion.a
              href="mailto:vasudevkumar1445@example.com"
              whileHover={{ y: -4 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              aria-label="Email"
            >
              <FiMail size={19} />
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {currentYear} Vasudev. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

            <motion.a
              href="#home"
              whileHover={{ y: -3 }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:border-blue-500/30 hover:text-blue-400"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;