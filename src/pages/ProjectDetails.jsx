import Carousel from "../ui/Carousel";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import Icons from "../ui/Icons";
import { useParams } from "react-router";
import useNavigation from "../utils/useNavigation";
import { projects } from "../../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();
  const handleClick = useNavigation();

  const headerStyling =
    "text-left text-2xl text-white font-montserrat font-semibold mb-4";

  const paragraphStyle = "text-[#a3a3a3] leading-8 font-raleway font-light";

  const containerStyle =
    "max-w-3xl pb-8 w-full flex flex-col justify-between items-start";
  return (
    <div className=" bg-[#0A192F]">
      <div className="max-w-3xl mx-auto flex gap-10 flex-col justify-between items-center pb-40 px-5">
        <NavBar />
        <div className="mx-auto flex flex-col justify-between items-start w-full mt-30">
          <h1 className={`text-3xl underline ${headerStyling}`}>
            {projects[projectId].name}
          </h1>
          <p className={` mb-4 ${paragraphStyle}`}>
            {projects[projectId].shortSummary}
          </p>
          <div className="flex gap-3 justify-between items-center sm:flex-row flex-col">
            <a href={projects[projectId].links.github} target="_blank">
              <Button size="small">View On Github</Button>
            </a>
            <a href={projects[projectId].links.liveDemo} target="_blank">
              <Button size="small">View Live Demo</Button>
            </a>
          </div>
        </div>
        <Carousel slidesData={projects[projectId].slidesData} />
        <div className="w-full">
          <h1 className={headerStyling}>Project Overview</h1>
          <hr className="text-[#007bff] w-full" />
          <p className={paragraphStyle}>
            {projects[projectId].projectOverview}
          </p>
        </div>
        <div className="w-full">
          <h1 className={headerStyling}>Goals & Challenges</h1>
          <hr className="text-[#007bff] w-full mb-4" />
          <div className="flex gap-10 justify-between items-center md:flex-row flex-col">
            <div className="px-8 py-4 bg-[#011831] shadow-md shadow-[#007bff] opacity-80 rounded-xl border border-blue-400">
              <h1 className="text-white font-montserrat font-semibold tracking-wide text-lg underline">
                Goals
              </h1>
              <ul className={`${paragraphStyle} list-disc text-white`}>
                {projects[projectId].goals.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div className="px-8 py-4 bg-[#011831] shadow-md shadow-[#007bff] opacity-80 rounded-xl border border-blue-400">
              <h1 className="text-white font-montserrat font-semibold tracking-wide text-lg underline">
                Challenges
              </h1>
              <ul className={`${paragraphStyle} list-disc text-white`}>
                {projects[projectId].challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={containerStyle}>
          <h1 className={headerStyling}>Technology Stack</h1>
          <hr className="text-[#007bff] w-full mb-4" />
          <div className="px-5 py-3 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-10 m-auto sm:grid-cols-2">
            {projects[projectId].technologyStack.map((tech) => (
              <Icons icon={tech.icon} tech={tech.tech} key={tech.tech} />
            ))}
          </div>
        </div>
        <Button onClick={() => handleClick("/contactme")}>Contact Me</Button>
        <Footer position="fixed" />
      </div>
    </div>
  );
}

export default ProjectDetails;
