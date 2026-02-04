import { motion } from "framer-motion"

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center px-8">

      {/* background wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4
                        w-[800px] h-[800px]
                        bg-accent/15 blur-[220px] rounded-full">
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT : TEXT POSTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-hero text-[80px] leading-[1.05]">
            Pranay Kandikonda
          </h1>

          <p className="mt-6 text-xl text-gray-700 dark:text-gray-400">
            Full Stack Developer
          </p>

          <p className="mt-10 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl">
            I build scalable, clean web applications with a strong focus
            on performance, clarity, and modern system-driven design.
          </p>

          <div className="mt-12 flex gap-8">
            <a
              href="/Pranay_Kandikonda_Resume.pdf"
              target="_blank"
              className="text-accent font-medium text-sm
                         underline underline-offset-8 hover:opacity-80 transition"
            >
              View Resumee
            </a>

            <a
              href="#contact"
              className="text-sm hover:opacity-70 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* RIGHT : ABSTRACT GRAPHIC */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="relative h-[460px] w-full"
>

  {/* soft accent wash behind */}
  <div className="absolute inset-0
                  bg-accent/10
                  blur-[140px]
                  rounded-full">
  </div>

  {/* back outline */}
  <div className="absolute top-8 left-8
                  w-72 h-72
                  border border-gray-300/40 dark:border-white/10
                  rounded-2xl">
  </div>

  {/* middle outline */}
  <div className="absolute top-16 left-16
                  w-72 h-72
                  border border-gray-300/60 dark:border-white/20
                  rounded-2xl">
  </div>

  {/* front glass plane */}
  <div className="absolute top-24 left-24
                  w-72 h-72
                  backdrop-blur-md
                  bg-white/40 dark:bg-white/5
                  border border-white/30 dark:border-white/10
                  rounded-2xl">
  </div>

</motion.div>

      </div>
    </section>
  )
}
