import { motion } from "framer-motion";
import {
  FiBox,
  FiLayers,
  FiDroplet,
  FiExternalLink,
  FiArrowUpRight,
  FiTool,
} from "react-icons/fi";
import Reveal from "./Reveal";

const engineeringProjects = [
  {
    number: "01",
    title: "Seismic Design of G+4 RCC Framed Residential Building",
    type: "Structural Engineering",
    icon: FiBox,
    duration: "Jul 2026 – Ongoing",
    tools: ["STAAD.Pro", "RCDC", "IS 875", "IS 1893"],
    description:
      "Modeled and analyzed a G+4 RCC space frame considering wind and seismic actions. The project includes a stair-lift core modeled using shell elements and ductile reinforcement detailing.",
    highlights: [
      "G+4 RCC space frame",
      "Wind load analysis",
      "Modal seismic analysis",
      "RCDC reinforcement detailing",
    ],
    link: "https://github.com/vasudevgautam/Gplus4-building",
  },
  {
    number: "02",
    title: "Multi-Tier Steel Pipe Rack – Refinery Process Unit",
    type: "Steel Structural Design",
    icon: FiLayers,
    duration: "Jul 2025 – Aug 2025",
    tools: ["STAAD.Pro", "IS 800:2007", "IS 875", "IS 1893"],
    description:
      "Designed a 36 m long, three-tier steel pipe rack for a refinery process unit using limit state design principles and relevant Indian Standards.",
    highlights: [
      "36 m pipe rack",
      "3-tier steel structure",
      "Limit State Design",
      "Zone V seismic consideration",
    ],
    link: "https://github.com/vasudevgautam/steel-pipe-rack-refinery",
  },
  {
    number: "03",
    title: "500 kL Intze-Type Elevated Water Tank",
    type: "Water Resources & Structural Design",
    icon: FiDroplet,
    duration: "Self Project",
    tools: ["STAAD.Pro", "IS 3370", "IS 11682"],
    description:
      "Designed a 500 kL Intze-type elevated water tank with focus on staging behavior, structural members, and governing ring beam design.",
    highlights: [
      "500 kL capacity",
      "Intze-type tank",
      "Staging analysis",
      "Governing ring beam design",
    ],
    link: "https://github.com/vasudevgautam/intze_tank_staging",
  },
];

function EngineeringCard({ project, index }) {
  const Icon = project.icon;

  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -7 }}
        transition={{ duration: 0.25 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:border-blue-500/30 hover:bg-white/5"
      >
        {/* Glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

        {/* Header */}
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
            <Icon size={23} />
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500">
            {project.number}
          </span>
        </div>

        {/* Type */}
        <p className="relative mt-7 text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
          {project.type}
        </p>

        {/* Title */}
        <h3 className="relative mt-3 text-xl font-bold leading-8 text-white transition group-hover:text-blue-400">
          {project.title}
        </h3>

        {/* Duration */}
        <p className="relative mt-3 text-xs text-gray-600">
          {project.duration}
        </p>

        {/* Description */}
        <p className="relative mt-5 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="relative mt-6 space-y-2">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-3 text-sm text-gray-500"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {highlight}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="relative mt-7 border-t border-white/10 pt-5">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gray-600">
            <FiTool size={14} />
            Tools & Standards
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-gray-500 transition hover:border-blue-500/30 hover:text-blue-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Project Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-blue-400"
        >
          View Project
          <FiExternalLink size={15} />
        </a>

        <FiArrowUpRight
          size={20}
          className="absolute bottom-7 right-7 text-gray-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
        />
      </motion.article>
    </Reveal>
  );
}

function EngineeringProjects() {
  return (
    <section id="engineering" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
              Civil Engineering
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Engineering Projects
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Selected structural engineering projects demonstrating my
              academic background, analytical skills, and experience with
              industry-standard design tools.
            </p>
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="grid gap-7 lg:grid-cols-3">
          {engineeringProjects.map((project, index) => (
            <EngineeringCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Why It Matters */}
        <Reveal delay={0.35}>
          <div className="mt-12 rounded-2xl border border-blue-500/10 bg-blue-500/3 p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FiTool size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Engineering background, software mindset
                </h3>

                <p className="mt-2 max-w-4xl text-sm leading-7 text-gray-500">
                  My engineering projects have strengthened my analytical
                  thinking, attention to detail, and ability to work with
                  complex technical problems. I bring the same approach to
                  software development and problem solving.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default EngineeringProjects;