import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 px-6 py-14 border-t border-white/10">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
      >

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r 
          from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Paras.dev
          </h2>
          <p className="text-sm mt-2 text-gray-500">
            Building modern & scalable web experiences
          </p>
        </div>

        <div className="flex gap-10 text-sm">
          <a href="#hero" className="hover:text-sky-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-sky-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-sky-400 transition">
            Contact
          </a>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Paras9771" target="_blank" className="hover:text-sky-400 transition"
          >
            🐙
          </a>

          <a
            href="https://www.linkedin.com/in/parastomar123/" target="_blank" className="hover:text-sky-400 transition"
          >
            💼
          </a>

          <a
            href="mailto:parastomar851@gmail.com"
            className="hover:text-sky-400 transition"
          >
            ✉️
          </a>

        </div>

      </motion.div>

      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Paras Tomar. All rights reserved.
      </div>

    </footer>
  );
}