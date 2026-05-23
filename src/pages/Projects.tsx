import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import useNavigation from "../utils/useNavigation";
import { projects, Project, Technology } from "../../data/projects";

function Projects() {
  const handleClick = useNavigation();
  const navigate = useNavigate();

  function handleNavigate(id: number) {
    navigate(`/projects/${id}`);
  }

  return (
    <>
      <Helmet>
        <title>Front-end Projects | Sanusi Olayinka Uthman</title>
        <meta
          name="description"
          content="Explore the engineering showcase of Sanusi Olayinka Uthman, including FinTech platforms, media pipelines, and luxury digital checkouts."
        />
        <link rel="canonical" href="https://sanusiou.pro/projects" />
      </Helmet>
      <div className="bg-white w-full flex items-center flex-col justify-between px-6 py-12 gap-16 overflow-hidden engineering-grid min-h-screen">
        <NavBar position="relative" />

        <div className="max-w-4xl w-full text-left space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
            Selected Front-end Work
          </h1>
          <p className="text-lg text-slate-600 font-sans font-light max-w-2xl">
            A selective index of projects demonstrating state synchronization, dynamic
            checkout flows, media optimization pipelines, and strict WCAG compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                    {projects.map((project: Project, index: number) => (
  <motion.div
    key={project.name}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={() => handleNavigate(index)}
    className="group cursor-pointer bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
  >
    <div>
      <div className="aspect-video w-full overflow-hidden border-b border-slate-100 bg-slate-50">
        <img
          src={project.slidesData[0]?.img || "/dgold-1.png"}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-3">
        <h2 className="text-xl font-bold text-slate-900 font-sans group-hover:text-blue-600 transition-colors">
          {project.name}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
          {project.shortSummary}
        </p>
      </div>
    </div>
    <div className="p-6 pt-0 flex flex-wrap gap-2">
      {project.technologyStack.slice(0, 3).map((tech: Technology) => (
        <span
          key={tech.tech}
          className="text-xs font-semibold px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 rounded-md font-sans"
        >
          {tech.tech}
        </span>
      ))}
    </div>
  </motion.div>
))}
        </div>

        <div className="flex flex-col items-center gap-6 mt-4">
          <Button onClick={() => handleClick("/contactme")}>
            Contact For Collaborations
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Projects;
