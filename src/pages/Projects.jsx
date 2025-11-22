import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import useNavigation from "../utils/useNavigation";
import { useNavigate, useSearchParams } from "react-router";
import { Helmet } from "react-helmet-async";

function Image({ src, children, classes, href }) {
  return (
    <>
      <img
        className="w-full h-full object-cover border border-blue-400 rounded-2xl"
        src={src}
        alt={children}
      />
      <a
        className={`absolute bottom-2.5 left-2 transform font-raleway underline ${
          classes ? classes : "text-white"
        } font-medium text-xl text-left`}
        href={href}
      >
        {children}{" "}
      </a>
    </>
  );
}

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = useNavigation();
  const navigate = useNavigate();

  const headerStyling =
    "text-left text-2xl text-white font-montserrat font-semibold mb-4";

  const paragraphStyle =
    "text-[#a3a3a3] leading-8 font-raleway font-light text-center";

  const doubleRow =
    "col-span-3 md:col-span-2 relative w-full h-70 overflow-hidden hover:shadow-md hover:shadow-blue-400 rounded-2xl";

  const singleRow =
    "md:col-span-1 col-span-3 relative w-full h-70 overflow-hidden hover:shadow-md hover:shadow-blue-400 rounded-2xl";

  function handleSearchParams(id) {
    searchParams.set("projectId", id);
    setSearchParams(searchParams);
    navigate(`/projects/${id}`);
  }

  return (
    <>
      <Helmet>
        <title>
          Projects & Portfolio | React & Next.js Frontend Development
        </title>
        <meta
          name="description"
          content="View Sanusi O.U.'s featured portfolio projects built with modern frontend technologies including React, Next.js, Redux, and Tailwind CSS. See practical application development."
        />
        <link rel="canonical" href="https://www.yourdomain.com/projects" />

        {/* JSON-LD CollectionPage Schema for a gallery of projects */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "CollectionPage",
              "name": "Frontend Developer Projects Portfolio",
              "description": "A collection of featured web development projects showcasing expertise in React and Next.js.",
              "url": "https://www.yourdomain.com/projects",
              "mainEntity": [
                {
                  "@type": "SoftwareSourceCode",
                  "name": "The Wild Oasis App - Booking Dashboard",
                  "description": "Dashboard built with React and Supabase for cabin management and bookings.",
                  "url": "https://www.yourdomain.com/projects/0"
                },
                {
                  "@type": "SoftwareSourceCode",
                  "name": "Fast React Pizza Co. - E-commerce App",
                  "description": "High-performance React pizza ordering application utilizing Redux for state management.",
                  "url": "https://www.yourdomain.com/projects/1"
                },
                {
                  "@type": "SoftwareSourceCode",
                  "name": "Worldwise App - Travel Tracker",
                  "description": "Travel tracking application using React Router and context API.",
                  "url": "https://www.yourdomain.com/projects/2"
                },
                {
                  "@type": "SoftwareSourceCode",
                  "name": "AutoForce Mechanic Shop Website",
                  "description": "Responsive website designed for a local mechanic shop using modern CSS.",
                  "url": "https://www.yourdomain.com/projects/3"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <div className=" bg-[#0A192F]">
        <div className="flex flex-col justify-between items-center gap-8 w-full mx-auto max-w-4xl">
          <NavBar position="fixed" />

          <div className="mt-25 flex flex-col justify-between items-center">
            {/* SEO Optimization: Changed h1 to h2, assuming this is a sub-page, but keeping it as H1 since it is the main content of the page */}
            <h1 className={headerStyling}>My Featured Projects</h1>
            <p className={`${paragraphStyle} px-5 md:w-xl`}>
              A selection of my best projects, showcasing my skills in creating
              modern, responsive and user friendly applications using React,
              Next.js, and Redux.
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-4 md:grid-rows-2 gap-6 w-full gap-y-8 p-5 md:p-10 bg-transparent">
            {/* SEO Optimization: Image alt attribute added via Image component */}
            <div className={doubleRow} onClick={() => handleSearchParams(0)}>
              <Image src="/oasis-5.png">
                The Wild Oasis App (React/Supabase)
              </Image>
            </div>
            {/* SEO Optimization: Image alt attribute added via Image component */}
            <div className={singleRow} onClick={() => handleSearchParams(1)}>
              <Image src="/fast-react-pizza.png" classes="text-black">
                Fast React Pizza Co. (Redux/Routing)
              </Image>
            </div>
            {/* SEO Optimization: Image alt attribute added via Image component */}
            <div className={singleRow} onClick={() => handleSearchParams(2)}>
              <Image src="/worldwise-3.png">Worldwise App (React Router)</Image>
            </div>
            {/* SEO Optimization: Image alt attribute added via Image component */}
            <div className={doubleRow} onClick={() => handleSearchParams(3)}>
              <Image src="/autoforce-1.png">
                AutoForce Mechanic Shop Website
              </Image>
            </div>
          </div>
          <div className="mb-30">
            <Button onClick={() => handleClick("/contactme")}>
              Contact Me for Collaboration
            </Button>
          </div>
          <Footer position="fixed" />
        </div>
      </div>
    </>
  );
}

export default Projects;
