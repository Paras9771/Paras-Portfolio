import { motion } from "framer-motion";
import ParticlesBg from "../common/ParticlesBg";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center text-white px-6 overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBg />
      </div>

      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{ backgroundImage: "url(/images/hero-bg.png)" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block mb-5 px-5 py-2 rounded-full text-sm font-medium
          bg-gradient-to-r from-sky-400/20 to-blue-500/20 text-sky-400 border border-sky-400/30">
            🚀 Open to Junior Frontend / React Developer Roles
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Paras Tomar
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-xl md:text-2xl text-sky-400 font-semibold"
          >
            React Developer | Frontend Engineer
          </motion.h2>

          <p className="mt-5 text-lg text-gray-300 max-w-xl">
            Computer Science student and React Developer skilled in building responsive,
            user-friendly, and scalable web applications. Passionate about problem-solving,
            clean code, and creating impactful digital experiences using modern web technologies.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <a
              href="#projects"
              className="px-5 md:px-8 py-2 md:py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition shadow-lg shadow-sky-500/40 text-center"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 md:px-6 py-2 md:py-3 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 transition text-center"
            >
              👁 View Resume
            </a>

            <a
              href="/resume.pdf"
              download="Paras_Tomar_Resume.pdf"
              className="px-5 md:px-6 py-2 md:py-3 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 transition text-center"
            >
              📥 Download
            </a>

            <a
              href="#contact"
              className="px-5 md:px-8 py-2 md:py-3 rounded-lg border border-white/30 hover:bg-white/10 transition text-center"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-5 mt-8 text-gray-400">
            <a
              href="https://github.com/Paras9771"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/parastomar123/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="relative w-80 h-96 md:w-[360px] md:h-[420px] rounded-2xl bg-white/10 backdrop-blur-xl 
            border border-white/20 shadow-xl shadow-sky-500/30 overflow-hidden group flex items-center justify-center"
          >
            <img
              src="/images/profile-image.jpeg"
              alt="Paras Tomar"
              className="w-full h-full object-contain p-4 bg-black/30 group-hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}