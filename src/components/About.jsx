import { motion } from "framer-motion"

export default function About() {


  return (

           <section
         id="about"
         className="relative min-h-screen px-8 pt-48 pb-32"
       >

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">



                                           {/* LEFT : VISUAL / STATS */}


        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          {[
            
            { title: "Role", value: "Full Stack" },
            { title: "Database", value: "SQL & NoSQL" },
            { title: "Cloud", value: "Google Cloud" },
            { title: "Design", value: "UI / UX" },
          ].map((item, i) => (

            <div

              key={i}
              className="rounded-2xl p-6
                         backdrop-blur-md
                         bg-white/50 dark:bg-white/5
                         border border-white/40 dark:border-white/15
                         transition"
            >

              <h4 className="text-xl font-semibold">
                {item.value}
              </h4>


              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {item.title}
              </p>

            </div>



          ))}

        </motion.div>

                                            {/* RIGHT : TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-hero leading-tight">
            About Me
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-700 dark:text-gray-400 max-w-xl">
            I’m a Full Stack Developer who builds scalable, end-to-end web
            applications — from clean user interfaces to robust backend systems
            and cloud-ready deployments.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl">
            I work across frontend, backend, databases, and cloud infrastructure,
            combining engineering discipline with strong UI/UX sensibility.
            I’m also a Google Cloud Certified Associate Cloud Engineer,
            with a solid understanding of modern cloud systems.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
