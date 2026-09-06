import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import Reveal from "./Reveal";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "vasudev@example.com",
    href: "mailto:vasudev@example.com",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "#",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "#",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Guwahati, Assam, India",
    href: "#",
  },
];

function ContactItem({ item }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-white/6"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
        <Icon size={20} />
      </div>

      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
          {item.label}
        </p>

        <p className="mt-1 truncate text-sm text-gray-300 transition group-hover:text-white">
          {item.value}
        </p>
      </div>

      {item.label !== "Location" && (
        <FiArrowUpRight
          className="ml-auto shrink-0 text-gray-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          size={17}
        />
      )}
    </motion.a>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_j2gzrff",
        "template_42k1tuv",
        e.target,
        {
          publicKey: "SEDLq4aqsNGfGaHoh",
        }
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
          setSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Let's Work Together
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              I'm open to software development opportunities, internships,
              collaborations, and interesting projects.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Information */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-7 lg:col-span-2">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <FiMail size={25} />
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  Have a project in mind?
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Whether you have an opportunity, a project idea, or simply
                  want to connect, feel free to reach out. I'll be happy to
                  hear from you.
                </p>

                <div className="mt-8 space-y-3">
                  {contactInfo.map((item) => (
                    <ContactItem key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-white/10 bg-white/3 p-7 lg:col-span-3"
            >
              <form onSubmit={sendEmail}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Let's work together"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Status Message */}
                {status === "success" && (
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                    <FiCheckCircle size={18} />
                    Message sent successfully!
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <FiAlertCircle size={18} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}

                  <FiSend size={16} />
                </button>
              </form>
            </motion.div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 rounded-2xl border border-blue-500/10 bg-blue-500/3 p-6 text-center">
            <p className="text-sm text-gray-400">
              Currently looking for{" "}
              <span className="font-medium text-blue-400">
                Software Development opportunities
              </span>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;