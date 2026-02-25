import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 6, rotateY: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-blue-400/20 
      shadow-xl shadow-sky-500/10 hover:shadow-sky-500/40"
    >
      <div className="h-52 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          opacity-0 group-hover:opacity-100 transition"
        />
      </div>

      <div className="p-6 text-white relative z-10">
        <h2 className="text-xl font-bold mb-2">
          {project.title}
        </h2>

        <p className="text-gray-300 text-sm">
          {project.description}
        </p>
      </div>

      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 
        transition-all duration-300"
      >
        <div className="flex gap-5">
          <a
            href={project.demo}
            target="_blank"
            className="px-6 py-2 bg-sky-500 
            rounded-lg font-semibold
            hover:bg-sky-600 transition
            shadow-lg shadow-sky-500/40"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-6 py-2 border border-white/30 
            rounded-lg font-semibold
            hover:bg-white/10 transition"
          >
            GitHub
          </a>

        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-1  bg-gradient-to-r from-sky-400 to-blue-500"
      />

    </motion.div>
  );
}