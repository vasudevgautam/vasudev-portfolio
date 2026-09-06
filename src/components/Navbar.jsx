import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiSun,
  FiMoon,
  FiCloud,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const links = [
    { name: "Coding", href: "#coding" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Engineering", href: "#engineering" },
  { name: "Certificates", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  /* ================================
     NAVBAR SCROLL EFFECT
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     ACTIVE SECTION
  ================================= */

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ================================
     CLOSE MOBILE MENU
  ================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* ================================
            LOGO
        ================================= */}

        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400 ring-1 ring-blue-500/20 transition group-hover:bg-blue-500/20">
            V
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            Vasudev<span className="text-blue-400">.</span>
          </span>
        </a>

        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-400"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* ================================
            RIGHT ACTIONS
        ================================= */}

       <div className="hidden items-center gap-3 sm:flex">
  {/* Weather App */}
  <a
    href="https://vasudevgautam.github.io/Weather-App/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open Weather App"
    title="Weather App"
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-gray-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
  >
    <FiCloud size={19} />
  </a>

  {/* Theme Toggle */}
  <button
    type="button"
    onClick={toggleTheme}
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-gray-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
    aria-label={
      theme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode"
    }
  >
    <motion.div
      key={theme}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {theme === "dark" ? (
        <FiSun size={18} />
      ) : (
        <FiMoon size={18} />
      )}
    </motion.div>
  </button>

  {/* Resume */}
  <a
    href="/Vasudev_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/20"
  >
    Resume
    <FiArrowUpRight
      size={15}
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  </a>
</div>

        {/* ================================
            MOBILE ACTIONS
        ================================= */}

        <div className="flex items-center gap-2 sm:hidden">
          {/* Mobile Theme */}

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun size={18} />
            ) : (
              <FiMoon size={18} />
            )}
          </button>

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-gray-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </nav>

      {/* ================================
          MOBILE MENU
      ================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl sm:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-5">
              <div className="flex flex-col gap-1">
                {links.map((link, index) => {
                  const isActive = activeSection === link.href;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.2,
                      }}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        {link.name}

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        )}
                      </div>
                    </motion.a>
                  );
                })}

                {/* Mobile Resume */}

                <a
                  href="/Vasudev_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/20"
                >
                  View Resume
                  <FiArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;