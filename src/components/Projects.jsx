import { motion } from "framer-motion"

import careerNexusImg from "../assets/careernexus.png"
import spotifyImg from "../assets/spotify.png"
import trendPulseImg from "../assets/trendpulse.png"
import orgUserImg from "../assets/org-user-mng.png"

const projects = [
  {
    title: "CareerNexus",
    subtitle: "Placement & Recruitment Platform",
    description:
      "A full-stack placement platform with role-based access for Admin, TPO, Recruiter, and Students, featuring dashboards, job workflows, and real-time notifications.",
    features: [
      "Role-based authentication & dashboards",
      "Real-time notifications (WebSockets)",
      "Job posting & application workflows",
      "Responsive modern UI",
    ],
    image: careerNexusImg,
    live: "https://carrernexus-c413a.web.app/",
    github: "https://github.com/CareerNexus-Pragati-Engineering-College",
  },
  {
    title: "Spotify Clone",
    subtitle: "Music Streaming Web Application",
    description:
      "A Spotify-inspired full-stack web application focusing on clean UI, authentication, and dynamic content rendering.",
    features: [
      "Authentication flow",
      "Trending songs & artists",
      "Reusable React components",
    ],
    image: spotifyImg,
    live: "https://spotify-clone-silk-sigma.vercel.app/",
    github: "https://github.com/devpranayk/spotify-clone.git",
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
    image: trendPulseImg,
    live: "https://trendpulse-by-devpranayk.vercel.app/",
    github: "https://github.com/devpranayk/trendPulse.git",
  },
  {
    title: "Organization User Management",
    subtitle: "Role-based Organization & User Management System",
    description:
      "A system to manage organizations, users, and roles with structured access control and secure backend integration.",
    features: [
      "Organization & user management",
      "Role-based access control",
      "Clean admin interface",
    ],
    image: orgUserImg,
    frontend: "https://github.com/devpranayk/org-user-management/tree/main/org-user-management-frontend",
    backend: "https://github.com/devpranayk/org-user-management.git",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative px-8 pt-48 pb-32">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="max-w-2xl mb-32">
      <h2 className="text-4xl md:text-5xl font-hero">
        Projects
      </h2>

      <p className="mt-6 text-lg text-gray-700 dark:text-gray-400">
        A selection of real-world projects showcasing full-stack development,
        system design thinking, and modern UI execution.
      </p>
    </div>

    {/* Projects */}
    <div className="space-y-40">


        {projects.map((project, index) => {
          const reverse = index % 2 !== 0

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-20 items-center`}
            >
              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={reverse ? "md:order-2" : ""}
              >
                <h3 className="text-3xl font-semibold">{project.title}</h3>
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

                <div className="mt-8 flex gap-6 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-accent underline underline-offset-8"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-accent underline underline-offset-8"
                    >
                      GitHub
                    </a>
                  )}
                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target="_blank"
                      className="text-accent underline underline-offset-8"
                    >
                      Frontend Repo
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      className="text-accent underline underline-offset-8"
                    >
                      Backend Repo
                    </a>
                  )}
                </div>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={reverse ? "md:order-1" : ""}
              >
                <div className="group relative rounded-3xl overflow-hidden
                backdrop-blur-xl
                bg-white/40 dark:bg-white/5
                border border-white/30
                transition">

                  <img
                    src={project.image}
                    alt={project.title}
                      className="w-full h-full object-cover
                               transition duration-500
                               group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0
                opacity-0 group-hover:opacity-100
                transition
                bg-accent/10 blur-[80px]" />




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
