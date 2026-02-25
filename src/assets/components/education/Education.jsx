import { motion } from "framer-motion";

export default function AcademicExperience() {
  return (
    <section className="bg-black text-white px-6 py-2">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400 mt-10"
        >
          Education & Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ================= EDUCATION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-6">
              🎓 Education
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold">
                  B.Tech – Computer Science & Engineering
                </h4>
                <p className="text-gray-300 text-sm">
                  Galgotias University, Uttar Pradesh
                </p>
                <p className="text-gray-400 text-sm">
                  CGPA: 7.77 | Final Year
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Diploma – Electronics Engineering
                </h4>
                <p className="text-gray-300 text-sm">
                  Board of Technical Education, Uttar Pradesh
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Higher Secondary (12th)
                </h4>
                <p className="text-gray-300 text-sm">
                  CBSE Board
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Secondary School (10th)
                </h4>
                <p className="text-gray-300 text-sm">
                  CBSE Board
                </p>
              </div>

            </div>
          </motion.div>

          {/* ================= EXPERIENCE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-6">
              💼 Experience
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold">
                  Frontend Developer – Self Projects
                </h4>
                <ul className="text-gray-400 text-sm mt-2 space-y-2 list-disc list-inside">
                  <li>Built Employee Management System with role-based dashboards.</li>
                  <li>Developed DogStudio – interactive 3D portfolio with smooth animations.</li>
                  <li>Created responsive web apps using React & Tailwind CSS.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  Problem Solving & DSA
                </h4>
                <ul className="text-gray-400 text-sm mt-2 space-y-2 list-disc list-inside">
                  <li>Strong foundation in Data Structures & Algorithms (Java).</li>
                  <li>Regular practice for technical interview preparation.</li>
                </ul>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}