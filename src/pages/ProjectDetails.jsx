import Carousel from "../ui/Carousel";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import Icons from "../ui/Icons";
import { useParams } from "react-router";
import useNavigation from "../utils/useNavigation";

const projects = [
  {
    name: "The Wild Oasis App",
    shortSummary:
      "A modern, highly scalable internal Administration App for the hotel management, for checking in, out guests bookings, adding available cabins and so on",
    projectOverview:
      "A full Stack App developed for the convenience of the hotel managements, where the bookings can be edited, the settings can be edited, featuring dark and light mode for user experience..",
    goals: [
      "Having a dashboard that gives the general overview of the hotel accommoddations",
      "Reducing bereaucacy in the hotel by a large margin",
      "Making sure that the data and uptime of the hotel are updated instantly and immediately",
    ],
    challenges: [
      "I encountered a difficult challange in the filtering/sorting methods of the app",
      "Implementing a secure login, where only the login of the authenticator can add other users",
      "Optimizing image delivery and rendering for Cabin details",
    ],
    technologyStack: [
      { icon: `/react.svg`, tech: "React.js" },
      { icon: "/tailwind.svg", tech: "Tailwindcss" },
      { icon: "/redux.svg", tech: "Redux" },
      { icon: "/nextjs.svg", tech: "Next.js" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
    slidesData: [
      {
        id: 0,
        title: "Booking Page",
        img: "/oasis-1.png",
      },
      {
        id: 1,
        title: "Cabin Page",
        img: "/oasis-2.png",
      },
      {
        id: 2,
        title: "Dashboard Page",
        img: "/oasis-3.png",
      },
      {
        id: 3,
        title: "Settings Page",
        img: "/oasis-4.png",
      },
      {
        id: 4,
        title: "Users Page",
        img: "/oasis-5.png",
      },
    ],
  },
  {
    name: "The WorldWise App",
    shortSummary:
      "A DEMO traveller app for noting the cities visited and writing a summary about those cities",
    projectOverview:
      "It has a fake user login used to access the app and made use of the leaflet map API for pinpointing and marking the cities visited",
    goals: [
      "Process over 1 million data points per day from connected devices.",
      "Ensure all data storage and transmission adheres to strict regulatory compliance standards.",
      "Provide developers with clear, well-documented API endpoints (using OpenAPI/Swagger).",
    ],
    challenges: [
      "Maintaining high data accuracy and consistency across different device data formats.",
      "Implementing robust encryption and access controls to ensure user privacy.",
      "Scaling the database architecture to handle rapid ingestion and querying of time-series data.",
    ],
    technologyStack: [
      { icon: `/react.svg`, tech: "React.js" },
      { icon: "/tailwind.svg", tech: "Tailwindcss" },
      { icon: "/redux.svg", tech: "Redux" },
      { icon: "/nextjs.svg", tech: "Next.js" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
  },
  {
    name: "Skyline Property Management CRM",
    shortSummary:
      "A custom Customer Relationship Management (CRM) system tailored for real estate firms to manage leads, properties, and client communication.",
    projectOverview:
      "A comprehensive internal tool featuring a centralized dashboard for real estate agents. Key modules include lead tracking, automated email scheduling, property listing management, and a calendar for viewing appointments and open houses.",
    goals: [
      "Streamline lead-to-client conversion time by 25%.",
      "Integrate with a third-party email service (e.g., SendGrid) for automated outreach.",
      "Create a user-friendly interface that requires minimal training for agents.",
    ],
    challenges: [
      "Designing a flexible data model to accommodate different property types (residential, commercial).",
      "Ensuring real-time synchronization between the CRM and the agent's external calendar applications.",
      "Building a complex permissions system to control data visibility among different agent roles.",
    ],
    technologyStack: [
      { icon: `/react.svg`, tech: "React.js" },
      { icon: "/tailwind.svg", tech: "Tailwindcss" },
      { icon: "/redux.svg", tech: "Redux" },
      { icon: "/nextjs.svg", tech: "Next.js" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
  },
  {
    name: "Code-Sculptor Documentation Generator",
    shortSummary:
      "A developer tool that analyzes code repositories (e.g., GitHub) and automatically generates and hosts organized project documentation.",
    projectOverview:
      "A command-line interface (CLI) and web service that parses source code comments and structure (e.g., JSDoc, JavaDoc) to produce professional, searchable documentation. It includes features for version control and theme customization.",
    goals: [
      "Support documentation generation for at least three major programming languages (e.g., Python, JavaScript, Java).",
      "Generate documentation pages in under 5 seconds for repositories with up to 100,000 lines of code.",
      "Host the generated documentation automatically on a static file hosting service.",
    ],
    challenges: [
      "Developing accurate parsing logic for various code comment standards and language syntax trees.",
      "Ensuring the generated documentation is fully responsive and accessible.",
      "Managing API rate limits when interacting with version control services like GitHub/GitLab.",
    ],
    technologyStack: [
      { icon: `/react.svg`, tech: "React.js" },
      { icon: "/tailwind.svg", tech: "Tailwindcss" },
      { icon: "/redux.svg", tech: "Redux" },
      { icon: "/nextjs.svg", tech: "Next.js" },
      { icon: "/supabase.svg", tech: "Supabase" },
      { icon: "/vercel.svg", tech: "Vercel" },
    ],
  },
];

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
            <a href="">
              <Button size="small">View On Github</Button>
            </a>
            <a href="">
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
