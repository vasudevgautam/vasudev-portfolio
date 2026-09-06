import { motion } from "framer-motion";
import {
  FiCode,
  FiBookOpen,
  FiLayers,
  FiTarget,
} from "react-icons/fi";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: FiCode,
    title: "Problem Solving",
    text: "Regularly practicing Data Structures & Algorithms using C++.",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Development",
    text: "Building web applications with React, Node.js, Express, and MongoDB.",
  },
  {
    icon: FiBookOpen,
    title: "Engineering Background",
    text: "Civil Engineering foundation with experience in structural design and analysis.",
  },
  {
    icon: FiTarget,
    title: "Career Goal",
    text: "Working toward a Software Development Engineer role.",
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Engineering Mindset.
              <br />
              <span className="text-gray-500">Software Ambition.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Story */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/3 p-7 sm:p-9">
              <p className="text-lg leading-8 text-gray-300">
                I'm a Civil Engineering student with a growing passion for
                software development and problem solving. While my academic
                journey is rooted in engineering, I've developed a strong
                interest in programming and modern web technologies.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-400">
                I work with C++, React, Node.js, Express, and MongoDB, and I
                enjoy building projects that solve practical problems. Along
                with development, I regularly practice Data Structures and
                Algorithms to improve my logical thinking and coding skills.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-400">
                My goal is to combine my engineering mindset with software
                development skills and start my career as a Software
                Development Engineer.
              </p>

              {/* Quote */}
              <div className="mt-8 border-l-2 border-blue-500 pl-5">
                <p className="text-sm italic leading-7 text-gray-500">
                  "Learn continuously. Build practically. Improve every day."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Highlights */}
          <div className="space-y-4 lg:col-span-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:border-blue-500/30 hover:bg-white/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;