import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-sky-400 "
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg shadow-sky-500/10
            hover:shadow-sky-500/30 transition"
          >
            <h3 className="text-sky-400 text-lg font-semibold mb-3">
              🏆 Hackathon Participant
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Participated in a college-level hackathon and built a real-world
              problem-solving web application with a team.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 
            shadow-lg shadow-sky-500/10 hover:shadow-sky-500/30 transition"
          >
            <h3 className="text-sky-400 text-lg font-semibold mb-3">
              🥈 2nd Position – Technical Event
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Secured 2nd position in a college-level technical competition
              among multiple teams.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 
            shadow-lg shadow-sky-500/10 hover:shadow-sky-500/30 transition"
          >
            <h3 className="text-sky-400 text-lg font-semibold mb-3">
              🚀 Live Project Deployment
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Successfully deployed multiple frontend projects and showcased
              them through a professional portfolio.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}