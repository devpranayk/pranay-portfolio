import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-8 pt-48 pb-32"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-hero"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-700 dark:text-gray-400 max-w-2xl"
        >
          I’m open to internships, full-time roles, collaborations, and
          meaningful projects. If you think we can build something impactful
          together, I’d love to hear from you.
        </motion.p>

        {/* Actions */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                 <a
         href={`mailto:your_email@gmail.com
          ?subject=Regarding%20Portfolio
          &body=Hi%20Pranay,%0A%0AI%20went%20through%20your%20portfolio%20and...`}
        className="group rounded-2xl p-6
                   backdrop-blur-md
                   bg-white/60 dark:bg-white/5
                  border border-white/40 dark:border-white/15
                 transition hover:scale-[1.02]"
       >
        <p className="text-sm text-gray-500">Email</p>
        <p className="mt-2 font-medium group-hover:text-accent">
          pranayk74174174@gmail.com
       </p>
       </a>

          <a
            href="https://www.linkedin.com/in/pranay-kandikonda-2541a5232/"
            target="_blank"
            className="group rounded-2xl p-6
                       backdrop-blur-md
                       bg-white/60 dark:bg-white/5
                       border border-white/40 dark:border-white/15
                       transition hover:scale-[1.02]"
          >
            <p className="text-sm text-gray-500">LinkedIn</p>
            <p className="mt-2 font-medium group-hover:text-accent">
              Connect
            </p>
          </a>

          <a
            href="https://github.com/devpranayk"
            target="_blank"
            className="group rounded-2xl p-6
                       backdrop-blur-md
                       bg-white/60 dark:bg-white/5
                       border border-white/40 dark:border-white/15
                       transition hover:scale-[1.02]"
          >
            <p className="text-sm text-gray-500">GitHub</p>
            <p className="mt-2 font-medium group-hover:text-accent">
              View Repositories
            </p>
          </a>

          <a
              href="/PranayKandikonda_dev_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-6
                         backdrop-blur-md
                         bg-white/60 dark:bg-white/5
                         border border-white/40 dark:border-white/15
                         transition hover:scale-[1.02]"
            >
              <p className="text-sm text-gray-500">Resume</p>
              <p className="mt-2 font-medium group-hover:text-accent">
                Download PDF
              </p>
            </a>


        </div>

      </div>
    </section>
  )
}
