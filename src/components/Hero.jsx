import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-10"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-37.5 top-[20%] h-87.5 w-87.5 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ================================
            LEFT CONTENT
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Available badge */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2 text-sm text-green-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>

            Open to opportunities
          </motion.div>

          {/* Main heading */}

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Vasudev
            </span>
            <span className="text-blue-400">.</span>
          </h1>

          {/* Type animation */}

          <div className="mt-6 text-2xl font-semibold text-gray-300 sm:text-3xl">
            <TypeAnimation
              sequence={[
                "Software Developer",
                1800,
                "Full Stack Developer",
                1800,
                "Problem Solver",
                1800,
                "Civil Engineering Student",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern web applications and solve challenging problems
            using C++, React, Node.js, and MongoDB. I enjoy turning ideas
            into practical, scalable, and user-friendly digital experiences.
          </p>

          {/* CTA */}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-blue-500/30"
            >
              View My Work

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="/Vasudev_Resume.pdf"
              download="Vasudev_Resume.pdf"
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-6 py-3.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              Download Resume

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Social links */}

          <div className="mt-10 flex items-center gap-3">
            <span className="mr-2 text-sm text-gray-500">
              Find me on
            </span>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <FiGithub size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* ================================
            RIGHT CODE CARD
        ================================= */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          {/* Floating glow */}

          <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/90 shadow-2xl backdrop-blur-xl"
          >
            {/* Window header */}

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <span className="text-xs text-gray-500">
                developer.cpp
              </span>

              <div className="w-10" />
            </div>

            {/* Code */}

            <div className="overflow-x-auto p-6 font-mono text-sm leading-8 sm:p-8">
              <div>
                <span className="text-purple-400">#include</span>{" "}
                <span className="text-gray-300">
                  &lt;iostream&gt;
                </span>
              </div>

              <div className="mt-3">
                <span className="text-purple-400">using namespace</span>{" "}
                <span className="text-cyan-400">std</span>
                <span className="text-gray-400">;</span>
              </div>

              <div className="mt-5">
                <span className="text-purple-400">int</span>{" "}
                <span className="text-blue-400">main</span>
                <span className="text-gray-300">() {"{"}</span>
              </div>

              <div className="pl-5">
                <span className="text-purple-400">string</span>{" "}
                <span className="text-gray-300">name = </span>
                <span className="text-green-400">
                  "Vasudev"
                </span>
                <span className="text-gray-400">;</span>
              </div>

              <div className="pl-5">
                <span className="text-purple-400">string</span>{" "}
                <span className="text-gray-300">role = </span>
                <span className="text-green-400">
                  "Software Developer"
                </span>
                <span className="text-gray-400">;</span>
              </div>

              <div className="pl-5">
                <span className="text-purple-400">while</span>
                <span className="text-gray-300"> (</span>
                <span className="text-cyan-400">learning</span>
                <span className="text-gray-300">) {"{"}</span>
              </div>

              <div className="pl-10">
                <span className="text-cyan-400">buildProjects</span>
                <span className="text-gray-300">();</span>
              </div>

              <div className="pl-10">
                <span className="text-cyan-400">solveProblems</span>
                <span className="text-gray-300">();</span>
              </div>

              <div className="pl-10">
                <span className="text-cyan-400">improveSkills</span>
                <span className="text-gray-300">();</span>
              </div>

              <div className="pl-5">
                <span className="text-gray-300">{"}"}</span>
              </div>

              <div>
                <span className="text-gray-300">{"}"}</span>
              </div>

              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="mt-3 inline-block h-5 w-2 bg-blue-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================
          SCROLL INDICATOR
      ================================= */}

      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-blue-400 sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <FiArrowDown size={16} />
      </motion.a>
    </section>
  );
}

export default Hero;