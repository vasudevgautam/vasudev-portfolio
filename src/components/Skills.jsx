import { motion } from "framer-motion";
import {
  FiCode,
  FiGlobe,
  FiServer,
  FiDatabase,
  FiTool,
  FiLayers,
} from "react-icons/fi";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Programming",
    icon: FiCode,
    description: "Languages and problem-solving tools",
    skills: ["C++", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: FiGlobe,
    description: "Modern web interfaces and applications",
    skills: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: FiServer,
    description: "Server-side development and APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    description: "Data storage and database technologies",
    skills: ["MongoDB", "Mongoose", "JSON"],
  },
  {
    title: "Tools",
    icon: FiTool,
    description: "Development and collaboration tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Core Concepts",
    icon: FiLayers,
    description: "Fundamentals I actively practice",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Problem Solving",
    ],
  },
];

function SkillCard({ group, index }) {
  const Icon = group.icon;

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="group h-full rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:border-blue-500/30 hover:bg-white/5"
      >
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
          <Icon size={23} />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-bold">
          {group.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {group.description}
        </p>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-400 transition hover:border-blue-500/30 hover:text-blue-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
              Technical Stack
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Skills & Technologies
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Technologies and computer science fundamentals I'm using to
              build projects and prepare for software development roles.
            </p>
          </div>
        </Reveal>

        {/* Skill Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Learning Card */}
        <Reveal delay={0.4}>
          <div className="mt-8 rounded-2xl border border-blue-500/10 bg-blue-500/3 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-2 w-2 shrink-0 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50" />

              <p className="text-sm leading-7 text-gray-400">
                <span className="font-medium text-white">
                  Currently learning:
                </span>{" "}
                advanced Data Structures & Algorithms, system design
                fundamentals, and deeper full-stack development.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;