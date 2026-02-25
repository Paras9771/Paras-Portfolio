import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React JS", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Java", icon: "☕" },
  { name: "DSA", icon: "🧠" },
  { name: "Git & GitHub", icon: "🐙" }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-black via-[#020617] to-black text-white px-6 py-12"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-sky-500 to-blue-600"
            >

              <div
                className="h-full rounded-2xl bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-3 p-8
                text-center"
              >
                <span className="text-4xl">
                  {skill.icon}
                </span>

                <p className="text-lg font-semibold">
                  {skill.name}
                </p>
              </div>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_70%)]"
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}