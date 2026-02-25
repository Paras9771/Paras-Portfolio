import Navbar from "../assets/components/common/Navbar";
import Contact from "../assets/components/contact/Contact";
import Hero from "../assets/components/hero/Hero";
import Projects from "../assets/components/projects/Projects";
import Footer from "../assets/components/common/Footer";
import Education from "../assets/components/education/Education";
import Skills from "../assets/components/skills/Skills";
import Achievements from "../assets/components/education/Achivement";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education></Education>
      <Achievements></Achievements>
      <Projects />
      <Skills></Skills>
      <Contact></Contact>
      <Footer />
    </>
  );
}