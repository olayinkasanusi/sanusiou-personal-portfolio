import Carousel from "../ui/Carousel";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import Icons from "../ui/Icons";

const projects = [
  {
    name: "Quantum-Leap E-Commerce Platform",
    shortSummary:
      "A modern, highly scalable e-commerce site for niche vintage electronics, featuring dynamic inventory management and personalized recommendations.",
    projectOverview:
      "A full-stack application designed to replace a legacy e-commerce system. It includes a user-facing storefront, a secure payment gateway integration, and an admin dashboard for inventory, order processing, and analytics. The platform focuses on high availability and fast load times.",
    goals: [
      "Achieve 99.9% uptime and handle up to 10,000 concurrent users.",
      "Increase conversion rate by 15% through personalized product recommendations.",
      "Reduce inventory discrepancies by 50% using real-time stock tracking.",
    ],
    challenges: [
      "Migrating complex historical order data from the legacy SQL database without downtime.",
      "Implementing a secure, PCI-compliant payment flow.",
      "Optimizing image delivery and rendering for thousands of product listings.",
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
    name: "PulseConnect Health Tracker API",
    shortSummary:
      "A robust backend API for aggregating and analyzing fitness data from various wearable devices and providing secure, anonymized health insights.",
    projectOverview:
      "A RESTful API that acts as a central hub for health data. It includes user authentication, data ingestion endpoints, and endpoints for generating aggregated statistical reports. It emphasizes data security, privacy (HIPAA/GDPR compliance), and high throughput.",
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
  const num = 2;

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
            {projects[num].name}
          </h1>
          <p className={` mb-4 ${paragraphStyle}`}>
            {projects[num].shortSummary}
          </p>
          <div className="flex gap-3 justify-between items-center sm:flex-row flex-col">
            <a>
              <Button size="small">View On Github</Button>
            </a>
            <a>
              <Button size="small">View Live Demo</Button>
            </a>
          </div>
        </div>
        <Carousel slidesData={projects[0].slidesData} />
        <div className="w-full">
          <h1 className={headerStyling}>Project Overview</h1>
          <hr className="text-[#007bff] w-full" />
          <p className={paragraphStyle}>{projects[num].projectOverview}</p>
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
                {projects[num].goals.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div className="px-8 py-4 bg-[#011831] shadow-md shadow-[#007bff] opacity-80 rounded-xl border border-blue-400">
              <h1 className="text-white font-montserrat font-semibold tracking-wide text-lg underline">
                Challenges
              </h1>
              <ul className={`${paragraphStyle} list-disc text-white`}>
                {projects[num].challenges.map((challenge, i) => (
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
            {projects[num].technologyStack.map((tech) => (
              <Icons icon={tech.icon} tech={tech.tech} key={tech.tech} />
            ))}
          </div>
        </div>
        <Button>Contact Me</Button>
        <Footer position="fixed" />
      </div>
    </div>
  );
}

export default ProjectDetails;
