import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-20 bg-black text-white">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mb-12 text-center md:text-left"
      >
        I design and build modern web experiences focused on performance,
        usability, and clean visuals.
      </motion.p>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Visual / Cards - LEFT on Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 order-1 md:order-1"
        >
          {[
            { title: "Projects", value: "10+" },
            { title: "Tech Stack", value: "MERN" },
            { title: "Experience", value: "Frontend" },
            { title: "Focus", value: "UI/UX" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition"
            >
              <h4 className="text-xl font-bold">{item.value}</h4>
              <p className="text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </motion.div>

        {/* Text Content - RIGHT on Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-2 text-center md:text-left"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Frontend Developer & UI Enthusiast
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I’m a B.Tech student passionate about crafting visually engaging,
            responsive web applications using modern technologies like React,
            Tailwind CSS, and JavaScript.
          </p>

          <p className="text-gray-400 mt-4">
            I focus on building products that feel fast, intuitive, and
            professional — not just functional.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
