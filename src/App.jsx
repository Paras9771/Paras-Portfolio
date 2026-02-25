import React from "react";

import Navbar from "./assets/components/common/Navbar";
import Hero from "./assets/components/hero/Hero";
import Education from "./assets/components/education/Education";
import Projects from "./assets/components/projects/Projects";
import Skills from "./assets/components/skills/Skills";
import Contact from "./assets/components/contact/Contact";
import Footer from "./assets/components/common/Footer";
import Achievements from "./assets/components/education/Achivement";

const App = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen scroll-smooth">

      <Navbar />

      <main className="pt-20">

        <Hero />

        <Education />

        <Achievements></Achievements>

        <Projects />

        <Skills />

        <Contact />

      </main>

      <Footer />

    </div>
  );
};

export default App;