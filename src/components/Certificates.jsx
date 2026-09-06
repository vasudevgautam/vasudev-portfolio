import { motion } from "framer-motion";
import {
  FiAward,
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";
import Reveal from "./Reveal";

const certificates = [
  {
    number: "01",
    title: "BIS Quiz Certificate",
    organization: "Bureau of Indian Standards",
    year: "2026",
    description:
      "Certificate of participation in a quiz organized by the Bureau of Indian Standards.",
    image: "/certificates/BIS 1.jpeg",
    link: "/certificates/BIS 1.jpeg",
  },
  {
    number: "02",
    title: "BIS Quiz Certificate",
    organization: "Bureau of Indian Standards",
    year: "2026",
    description:
      "Certificate recognizing participation in the BIS quiz and awareness activity.",
    image: "/certificates/BIS 2.jpeg",
    link: "/certificates/BIS 2.jpeg",
  },
  {
    number: "03",
    title: "BIS Quiz Certificate",
    organization: "Bureau of Indian Standards",
    year: "2026",
    description:
      "Certificate received for participation in a Bureau of Indian Standards quiz.",
    image: "/certificates/BIS 3.jpeg",
    link: "/certificates/BIS 3.jpeg",
  },
];

function CertificateCard({ certificate, index }) {
  return (
    <Reveal delay={index * 0.12}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition duration-300 hover:border-blue-500/30 hover:bg-white/5"
      >
        {/* Certificate Preview */}
        <div className="relative aspect-4/3 overflow-hidden bg-black/30">
          <img
            src={certificate.image}
            alt={`${certificate.title} - ${certificate.organization}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/30" />

          {/* Number */}
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xs font-semibold backdrop-blur-md">
            {certificate.number}
          </div>

          {/* Award Icon */}
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-blue-400 backdrop-blur-md">
            <FiAward size={17} />
          </div>

          {/* Preview button */}
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-4 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <FiExternalLink size={16} />
            View Certificate
          </a>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Organization */}
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
              {certificate.organization}
            </p>

            <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
              {certificate.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-xl font-bold transition group-hover:text-blue-400">
            {certificate.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-7 text-gray-400">
            {certificate.description}
          </p>

          {/* Bottom Link */}
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white"
          >
            <FiFileText size={16} />
            Open Certificate
            <FiExternalLink size={14} />
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal>
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
              Recognition
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Certificates
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Certificates and recognitions from my academic and
              extracurricular activities.
            </p>
          </div>
        </Reveal>

        {/* Certificate Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.number}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Highlight */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/2 p-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-medium text-white">
                Continuous participation & learning
              </p>

              <p className="mt-1 text-sm text-gray-500">
                More achievements and certifications can be added here as
                you continue your learning journey.
              </p>
            </div>

            <FiAward
              size={28}
              className="shrink-0 text-blue-400"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Certificates;