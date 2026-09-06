import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
} from "react-icons/fi";
import Reveal from "./Reveal";

const education = [
  {
    degree: "B.Tech in Civil Engineering",
    institution: "Indian Institute of Technology Guwahati",
    location: "Guwahati, Assam",
    duration: "2023 – 2027",
    status: "Currently Pursuing",
    description:
      "Building a strong foundation in structural engineering, transportation, geotechnical engineering, and other core civil engineering disciplines while developing software engineering skills.",
    highlights: [
      "Structural Engineering",
      "Transportation Engineering",
      "Geotechnical Engineering",
      "Software Development",
    ],
  },
];

function EducationCard({ item, index }) {
  return (
    <Reveal delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:border-blue-500/30 hover:bg-white/5"
      >
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

        {/* Top */}
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/20">
              <FiBookOpen size={26} />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                Education
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                {item.degree}
              </h3>

              <p className="mt-2 text-base font-medium text-gray-300">
                {item.institution}
              </p>
            </div>
          </div>

          <span className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-400">
            {item.status}
          </span>
        </div>

        {/* Details */}
        <div className="relative mt-7 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <FiCalendar className="text-blue-400" size={17} />
            <span>{item.duration}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <FiMapPin className="text-blue-400" size={17} />
            <span>{item.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="relative mt-6 text-sm leading-7 text-gray-400">
          {item.description}
        </p>

        {/* Highlights */}
        <div className="relative mt-6">
          <p className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-300">
            <FiAward className="text-blue-400" size={16} />
            Areas of Study
          </p>

          <div className="flex flex-wrap gap-2">
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-xs text-gray-400 transition hover:border-blue-500/20 hover:text-blue-400"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
              Academic Journey
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Education
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              My academic background and the foundation that shaped my
              engineering and software development journey.
            </p>
          </div>
        </Reveal>

        {/* Education Cards */}
        <div className="space-y-7">
          {education.map((item, index) => (
            <EducationCard
              key={item.degree}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Highlight */}
        <Reveal delay={0.3}>
          <div className="mt-10 rounded-2xl border border-blue-500/10 bg-blue-500/3 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FiBookOpen size={21} />
              </div>

              <div>
                <p className="font-medium text-white">
                  Engineering + Software Development
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Combining my Civil Engineering background with
                  programming, data structures, and full-stack development
                  to build practical software solutions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;