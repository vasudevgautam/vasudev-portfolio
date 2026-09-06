import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "CampusHire",
    category: "Full Stack Web Application",
    description:
      "A full-stack campus recruitment platform designed to connect students and recruiters with a streamlined hiring workflow.",
    image: "/projects/campushire.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/vasudevgautam/CampusHire",
    demo: "#",
    featured: true,
  },
  {
    title: "GamesHub",
    category: "Web Development",
    description:
      "A modern gaming platform containing multiple browser-based games with an interactive and responsive user interface.",
    image: "/projects/gameshub.png",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/vasudevgautam/Gamehub",
    demo: "#",
    featured: true,
  },
  {
    title: "Coding Dashboard",
    category: "Developer Tool",
    description:
      "A coding dashboard for organizing programming practice, tracking problems and presenting coding progress in one place.",
    image: "/projects/coding-dashboard.png",
    technologies: ["React", "JavaScript", "JSON Server"],
    github: "https://github.com/vasudevgautam/CodeArea",
    demo: "#",
  },
  {
    title: "Weather App",
    category: "Web Application",
    description:
      "A responsive weather application that displays weather information through a clean and simple interface.",
    image: "/projects/weather.png",
    technologies: ["React", "API", "JavaScript", "CSS"],
    github: "https://github.com/vasudevgautam/Weather-App",
    demo: "#",
  },
  {
    title: "Tap-Tap Game",
    category: "Game Development",
    description:
      "A browser-based game prototype featuring reusable game systems, score tracking, input handling and leaderboard functionality.",
    image: "/projects/tap-tap.png",
    technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
    github: "https://github.com/vasudevgautam/Tap-Tap-Game",
    demo: "#",
  },
  {
    title: "2048 Game",
    category: "Game Development",
    description:
      "A responsive implementation of the classic 2048 puzzle game with tile movement, merging and score management.",
    image: "/projects/2048.png",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/vasudevgautam/2048-Game",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="My Work"
            title="Featured Projects"
            description="A selection of software projects I've built while developing my skills in frontend, backend, full-stack development and problem solving."
          />
        </Reveal>

        {/* Featured Projects */}

        <div className="grid gap-6 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Reveal key={project.title} delay={index * 0.1}>
                <ProjectCard project={project} featured />
              </Reveal>
            ))}
        </div>

        {/* Other Projects */}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl ${
        featured ? "lg:flex lg:min-h-107.5 lg:flex-col" : ""
      }`}
    >
      {/* Featured Badge */}

      {featured && (
        <div className="absolute left-4 top-4 z-20">
          <span className="rounded-full border border-blue-400/20 bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-400 backdrop-blur-md">
            Featured Project
          </span>
        </div>
      )}

      {/* Project Image */}

      <div
        className={`relative overflow-hidden ${
          featured ? "h-64 sm:h-72" : "h-52"
        }`}
      >
        <img
          src={project.image}
          alt={`${project.title} project`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
            {project.category}
          </p>
        </div>
      </div>

      {/* Project Content */}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
            {project.title}
          </h3>

          <FiArrowUpRight
            size={20}
            className="shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}

        <div className="mt-auto flex gap-3 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button flex items-center gap-2 rounded-lg border border-white/10 bg-white/3 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <FiGithub size={16} />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400"
          >
            Live Demo

            <FiExternalLink
              size={15}
              className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;