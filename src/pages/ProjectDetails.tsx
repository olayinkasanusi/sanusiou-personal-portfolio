import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import Icons from "../ui/Icons";
import useNavigation from "../utils/useNavigation";
import { projects } from "../../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();
  const handleClick = useNavigation();

  const index = projectId ? parseInt(projectId, 10) : 0;
  const project = projects[index];

  if (!project) {
    return (
      <div className="bg-white min-h-screen text-slate-800 flex flex-col justify-center items-center font-sans">
        <h1 className="text-3xl mb-4 font-bold">Project Not Found</h1>
        <Button
          onClick={() => handleClick("/projects")}
          variant="secondary-glass"
          size="medium"
        >
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.name} | Case Study</title>
        <meta name="description" content={project.shortSummary} />
        <link rel="canonical" href={`https://sanusiou.pro/projects/${index}`} />
      </Helmet>
      <div className="bg-white min-h-screen engineering-grid w-full flex flex-col justify-between items-center px-6 pt-28 pb-12 md:pt-36 gap-16 overflow-hidden">
        <NavBar position="relative" />

        <div className="max-w-3xl w-full text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-sans">
              {project.name}
            </h1>
            <p className="text-lg text-slate-600 font-sans font-light">
              {project.shortSummary}
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Button size="small" variant="secondary-glass" className="w-auto px-4">View On Github</Button>
            </a>
            <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer">
              <Button size="small" variant="primary-glass" className="w-auto px-4">View Live Demo</Button>
            </a>
          </div>
        </div>

        <div className="max-w-3xl w-full">
          <Carousel slidesData={project.slidesData} />
        </div>

        <div className="max-w-3xl w-full text-left space-y-4">
          <h2 className="text-2xl font-bold font-sans text-slate-900">
            Project Overview
          </h2>
          <hr className="border-slate-200 w-full" />
          <p className="text-slate-600 leading-relaxed font-sans font-light">
            {project.projectOverview}
          </p>
        </div>

        <div className="max-w-3xl w-full text-left space-y-4">
          <h2 className="text-2xl font-bold font-sans text-slate-900">
            Goals & Challenges
          </h2>
          <hr className="border-slate-200 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <h3 className="text-slate-900 font-sans font-bold text-lg">
                Goals
              </h3>
              <ul className="text-slate-600 text-sm leading-relaxed list-disc pl-5 space-y-2 font-light">
                {project.goals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <h3 className="text-slate-900 font-sans font-bold text-lg">
                Challenges
              </h3>
              <ul className="text-slate-600 text-sm leading-relaxed list-disc pl-5 space-y-2 font-light">
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl w-full text-left space-y-4">
          <h2 className="text-2xl font-bold font-sans text-slate-900">
            Technology Stack
          </h2>
          <hr className="border-slate-200 w-full" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {project.technologyStack.map((tech) => (
              <Icons key={tech.tech} icon={tech.icon} tech={tech.tech} />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <Button onClick={() => handleClick("/contactme")}>Contact Me</Button>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProjectDetails;
