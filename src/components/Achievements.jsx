import { motion } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";
import Reveal from "./Reveal";

const achievements = [
  {
    icon: FiAward,
    title: "BIS Quiz Participant",
    organization: "Bureau of Indian Standards",
    year: "2026",
    description:
      "Participated in a BIS quiz focused on standards, quality, and awareness of Indian Standards.",
  },
  {
    icon: FiCode,
    title: "Data Structures & Algorithms",
    organization: "Continuous Learning",
    year: "Ongoing",
    description:
      "Regularly solving programming problems in C++ to strengthen algorithmic thinking and problem-solving skills.",
  },
  {
    icon: FiTrendingUp,
    title: "Software Development",
    organization: "Personal Projects",
    year: "Ongoing",
    description:
      "Building practical applications using React, Node.js, Express, MongoDB, and modern web technologies.",
  },
];

function AchievementCard({ achievement, index }) {
  const Icon = achievement.icon;

  return (
    <Reveal delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -7 }}
        transition={{ duration: 0.25 }}
        className="group h-full rounded-2xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:border-blue-500/30 hover:bg-white/5"
      >
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
            <Icon size={24} />
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
            {achievement.year}
          </span>
        </div>

        {/* Organization */}
        <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
          {achievement.organization}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold transition group-hover:text-blue-400">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-gray-400">
          {achievement.description}
        </p>

        {/* Bottom */}
        <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-gray-600 transition group-hover:text-gray-400">
          <span>Achievement</span>
          <FiArrowUpRight
            size={15}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </motion.div>
    </Reveal>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal>
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
              Beyond Projects
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Achievements
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Highlights from my learning journey, technical development,
              and academic activities.
            </p>
          </div>
        </Reveal>

        {/* Achievement Cards */}
        <div className="grid gap-7 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Highlight */}
        <Reveal delay={0.4}>
          <div className="mt-12 rounded-2xl border border-blue-500/10 bg-blue-500/3 p-6 text-center">
            <p className="text-sm leading-7 text-gray-400">
              Consistently learning, building, and improving through{" "}
              <span className="font-medium text-blue-400">
                coding practice
              </span>{" "}
              and{" "}
              <span className="font-medium text-blue-400">
                practical projects
              </span>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Achievements;