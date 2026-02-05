import { motion } from "framer-motion"

const projects = [
  {
    title: "CareerNexus",
    subtitle: "Placement & Recruitment Platform",
    description:
      "A full-stack placement system with role-based access for Admin, TPO, Recruiter, and Students, featuring dashboards, job workflows, and real-time notifications.",
    features: [
      "Role-based authentication & dashboards",
      "Real-time notifications (WebSockets)",
      "Job posting & application workflows",
      "Responsive modern UI",
    ],
    tech: ["React", "Tailwind", "Node.js", "Express", "WebSockets"],
    github: {
      frontend:
        "https://github.com/CareerNexus-Pragati-Engineering-College/CareerNexus-Frontend",
      backend:
        "https://github.com/CareerNexus-Pragati-Engineering-College/CareerNexus-Backend",
    },
    highlight: true,
  },
  {
    title: "Spotify Clone",
    subtitle: "Music Streaming Web Application",
    description:
      "A Spotify-inspired full-stack application focusing on clean UI, authentication, and dynamic content rendering.",
    features: [
      "Authentication flow",
      "Dynamic song & artist views",
      "Reusable React components",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: {
      frontend: "YOUR_SPOTIFY_FRONTEND_GITHUB",
      backend: "YOUR_SPOTIFY_BACKEND_GITHUB",
    },
  },
  {
    title: "TrendPulse",
    subtitle: "Real-Time News Aggregation Platform",
    description:
      "A modern news platform that fetches and displays live news using external APIs with category-based filtering.",
    features: [
      "Live API-based news updates",
      "Category filtering",
      "Clean responsive UI",
    ],
    tech: ["React", "Express", "GNews API"],
    github: {
      frontend: "YOUR_TRENDPULSE_GITHUB",
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative px-8 pt-48 pb-32">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-hero"
        >
          Selected Projects
        </motion.h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-400 max-w-2xl">
          A curated set of projects demonstrating full-stack development,
          system design thinking, and modern UI execution.
        </p>

        {/* Projects */}
        <div className="mt-32 space-y-40">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-20 items-center ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Panel */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`relative h-[360px] rounded-3xl
                              backdrop-blur-xl
                              bg-white/50 dark:bg-white/5
                              border border-white/40 dark:border-white/15
                              ${
                                project.highlight
                                  ? "scale-105"
                                  : ""
                              }`}
                >
                  {/* Accent Glow */}
                  <div className="absolute inset-0 rounded-3xl
                                  bg-accent/10 blur-[120px]" />
                </motion.div>

                {/* Content Panel */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 text-gray-700 dark:text-gray-400 max-w-xl">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-400">
                    {project.features.map((f, i) => (
                      <li key={i}>— {f}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm rounded-full
                                   bg-white/70 dark:bg-white/10
                                   border border-white/40 dark:border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-6 text-sm">
                    {project.github.frontend && (
                      <a
                        href={project.github.frontend}
                        target="_blank"
                        className="text-accent underline underline-offset-8"
                      >
                        Frontend Code
                      </a>
                    )}
                    {project.github.backend && (
                      <a
                        href={project.github.backend}
                        target="_blank"
                        className="text-accent underline underline-offset-8"
                      >
                        Backend Code
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
