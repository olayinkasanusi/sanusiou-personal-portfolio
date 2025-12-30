import Carousel from "../ui/Carousel";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import Icons from "../ui/Icons";
import { useParams } from "react-router";
import useNavigation from "../utils/useNavigation";
import { projects } from "../../data/projects";
import TypeOnce from "../ui/TypeOnce";
import { motion } from "framer-motion";

function ProjectDetails() {
  const { projectId } = useParams();
  const handleClick = useNavigation();

  const headerStyling =
    "text-left text-2xl text-white font-montserrat font-semibold mb-4";

  const paragraphStyle = "text-[#a3a3a3] leading-8 font-raleway font-light";

  const containerStyle =
    "max-w-3xl pb-8 w-full flex flex-col justify-between items-start";

  return (
    <motion.div
      className="bg-[#0A192F]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto flex gap-10 flex-col justify-between items-center pb-40 px-5">
        <NavBar />

        {/* Project Header */}
        <motion.div
          className="mx-auto flex flex-col justify-between items-start w-full mt-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={`text-3xl underline ${headerStyling}`}>
            {projects[projectId].name}
          </h1>
          <p className={`mb-4 ${paragraphStyle}`}>
            <TypeOnce
              text={projects[projectId].shortSummary}
              typingSpeed={25}
            />
          </p>
          <motion.div
            className="flex gap-3 justify-between items-center sm:flex-row flex-col"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a href={projects[projectId].links.github} target="_blank">
              <Button size="small">View On Github</Button>
            </a>
            <a
              href={`${
                projects[projectId].disabled !== "disabled"
                  ? projects[projectId].links.liveDemo
                  : ""
              } `}
              target="_blank"
            >
              <Button size="small">View Live Demo</Button>
            </a>
          </motion.div>
          {projects[projectId].login !== undefined && (
            <div>
              <h1 className="text-left text-2xl text-white font-montserrat font-medium mt-2 underline">
                Login with these details
              </h1>
              <p className={paragraphStyle}>
                Email:{" "}
                <span className="font-semibold">
                  {projects[projectId].login.gmail}
                </span>
              </p>
              <p className={paragraphStyle}>
                Password:{" "}
                <span className="font-semibold">
                  {projects[projectId].login.password}
                </span>
              </p>
            </div>
          )}
        </motion.div>

        <Carousel
          slidesData={projects[projectId].slidesData}
          color={projects[projectId].color}
        />

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className={headerStyling}>Project Overview</h1>
          <hr className="text-[#007bff] w-full" />
          <p className={paragraphStyle}>
            {projects[projectId].projectOverview}
          </p>
        </motion.div>

        {/* Goals & Challenges */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 className={headerStyling}>Goals & Challenges</h1>
          <hr className="text-[#007bff] w-full mb-4" />
          <div className="flex gap-10 justify-between items-center md:flex-row flex-col">
            <motion.div
              className="px-8 py-4 bg-[#011831] shadow-md shadow-[#007bff] opacity-80 rounded-xl border border-blue-400"
              whileHover={{ scale: 1.02 }}
            >
              <h1 className="text-white font-montserrat font-semibold tracking-wide text-lg underline">
                Goals
              </h1>
              <ul className={`${paragraphStyle} list-disc text-white`}>
                {projects[projectId].goals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="px-8 py-4 bg-[#011831] shadow-md shadow-[#007bff] opacity-80 rounded-xl border border-blue-400"
              whileHover={{ scale: 1.02 }}
            >
              <h1 className="text-white font-montserrat font-semibold tracking-wide text-lg underline">
                Challenges
              </h1>
              <ul className={`${paragraphStyle} list-disc text-white`}>
                {projects[projectId].challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className={containerStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className={headerStyling}>Technology Stack</h1>
          <hr className="text-[#007bff] w-full mb-4" />
          <motion.div
            className="px-5 py-3 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-10 m-auto sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {projects[projectId].technologyStack.map((tech) => (
              <motion.div
                key={tech.tech}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Icons icon={tech.icon} tech={tech.tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Button onClick={() => handleClick("/contactme")}>Contact Me</Button>
        </motion.div>

        <Footer position="fixed" />
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
