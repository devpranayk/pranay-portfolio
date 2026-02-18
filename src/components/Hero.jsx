import { motion } from "framer-motion"

export default function Hero() {

  return (

           <section
         id="intro"
         className="relative min-h-screen flex items-center px-8 overflow-hidden"
       >

                                      {/* hero background (slightly darker) */}


      <div className="absolute inset-0 -z-20
                      bg-gradient-to-b
                      from-[#d6dbe5]
                      via-[#e1e6ef]
                      to-[#edf1f7]
                      dark:from-[#09090c]
                      dark:via-[#0c0c11]
                      dark:to-[#101017]">
      </div>


                                              {/* background wash */}




      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4
                        w-[800px] h-[800px]
                        bg-accent/20 blur-[220px] rounded-full">
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
              href="/PranayKandikonda_dev_resume.pdf"
              target="_blank"
              className="text-accent font-medium text-sm
                         underline underline-offset-8 hover:opacity-80 transition"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="text-sm hover:opacity-70 transition"
            >
              Contact

            </a>
          </div>
        </motion.div>



                                 {/* RIGHT : FUTURISTIC MOTION GRAPHIC */}


        <div className="relative h-[480px] w-full flex items-center justify-center">



                                                       {/* ambient glow */}
          <div className="absolute inset-0
                          bg-accent/10
                          blur-[160px]
                          rounded-full">
          </div>



                                                               {/* orbit container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 42,
              ease: "linear",
            }}
            className="relative w-80 h-80"
          >

                                                                  
                                                                  
                                                                   {/* OUTER STRUCTURE */}
            <div className="absolute inset-0
                            border border-gray-400/60 dark:border-white/20
                            rounded-3xl">
            </div>

                                                        {/* middle floating plane */}


            <motion.div
              animate={{
                x: [0, 14, 0, -14, 0],
                y: [0, -14, 0, 14, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
              className="absolute inset-6
                         backdrop-blur-md
                         bg-white/35 dark:bg-white/5
                         border border-white/30 dark:border-white/15
                         rounded-2xl">
            </motion.div>


                                               
                                               
                                                      {/* front accent plane */}


            <motion.div
              animate={{
                x: [0, -10, 0, 10, 0],
                y: [0, 10, 0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
              }}
              className="absolute inset-12
                         backdrop-blur-md
                         bg-white/50 dark:bg-white/5
                         border border-white/40 dark:border-white/20
                         rounded-xl">
            </motion.div>




          </motion.div>
        </div>

      </div>
    </section>
  )
  
}
