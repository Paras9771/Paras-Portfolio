import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["About", "Projects", "Skills", "Achievements", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">

      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center text-white">

        <h1 className="text-lg sm:text-xl font-bold tracking-wide text-sky-400">
          Paras.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm lg:text-base">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 backdrop-blur-lg text-white px-6 py-6 flex flex-col gap-6"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-sky-400 transition"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}