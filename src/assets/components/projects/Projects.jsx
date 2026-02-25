import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "../common/Reveal";

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-black text-white px-6 py-20"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
                My Projects
            </h2>

            <div className="max-w-6xl mx-auto grid 
        sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}