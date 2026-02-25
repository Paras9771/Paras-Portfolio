import { motion } from "framer-motion";
import Reveal from "../common/Reveal";
import toast from "react-hot-toast";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    toast.success("Message sent successfully! 🚀");

    window.location.href = `mailto:parastomar851@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${email}%0D%0A%0D%0A${message}`;

    form.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br 
      from-[#020617] via-black to-[#0f172a] 
      text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Let’s{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h2>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <h3 className="text-2xl font-semibold">
                Get in touch 🚀
              </h3>

              <p className="text-gray-400 leading-relaxed">
                I’m currently open for internships and junior frontend roles.<br></br>
                Feel free to reach out if you want to collaborate or discuss opportunities.
              </p>

              <div className="space-y-3 text-gray-300">

                <p>📧 <span className="text-sky-400">parastomar851@gmail.com</span></p>
                <p>📍 Uttar Pradesh, India</p>

                <div className="flex gap-6 pt-4">

                  <a
                    href="https://github.com/Paras9771" target="_blank" className="hover:text-sky-400 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/parastomar123/" target="_blank" className="hover:text-sky-400 transition"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="mailto:parastomar851@gmail.com" className="hover:text-sky-400 transition"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 shadow-xl shadow-sky-500/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name" type="text" placeholder="Your Name" required
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                />
                <input
                  name="email" type="email" placeholder="Your Email" required
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                />

                <textarea
                  name="message" rows="5" placeholder="Your Message"
                  required
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-105 transition-transform duration-300 
                  px-6 py-3 rounded-lg font-semibold shadow-lg shadow-sky-500/30"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}