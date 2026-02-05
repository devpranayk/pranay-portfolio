import { motion } from "framer-motion"

const skillsData = [
  {
    title: "Programming",
    skills: ["C", "Java", "Python"],
  },
  {
    title: "Web Technologies & Frameworks",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Git", "GitHub", "Postman API"],
  },
  {
    title: "UI/UX & Design Tools",
    skills: ["Figma", "Canva"],
  },
  {
    title: "Cloud Platforms",
    skills: [
      "Google Cloud Platform (GCP) - Associate Cloud Engineer (Certified)",
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-8 pt-48 pb-32"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-hero"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-700 dark:text-gray-400 max-w-2xl"
        >
          Technologies and tools I use to build scalable, clean, and
          production-ready applications.
        </motion.p>

        {/* Skill Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8
                         backdrop-blur-md
                         bg-white/50 dark:bg-white/5
                         border border-white/40 dark:border-white/15"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm rounded-full
                               bg-white/70 dark:bg-white/10
                               border border-white/40 dark:border-white/20
                               text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
