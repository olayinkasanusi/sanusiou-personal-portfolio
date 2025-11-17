import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Button from "../ui/Button";
import useNavigation from "../utils/useNavigation";
import { useNavigate, useSearchParams } from "react-router";

function Image({ src, children, classes, href }) {
  return (
    <>
      <img
        className="w-full h-full object-cover border border-blue-400 rounded-2xl"
        src={src}
      />
      <a
        className={`absolute bottom-2.5 left-2 transform font-raleway  underline ${
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

  const tripleRow =
    "col-span-3 md:col-span-3 relative w-full h-70 overflow-hidden hover:shadow-md hover:shadow-blue-400 rounded-2xl";

  const singleRow =
    "md:col-span-1 col-span-3 relative w-full h-70 overflow-hidden hover:shadow-md hover:shadow-blue-400 rounded-2xl";

  function handleSearchParams(id) {
    searchParams.set("projectId", id);
    setSearchParams(searchParams);
    navigate(`/projects/${id}`);
  }

  return (
    <>
      <div className=" bg-[#0A192F]">
        <div className="flex flex-col justify-between items-center gap-8 w-full mx-auto max-w-4xl">
          <NavBar position="fixed" />

          <div className="mt-25 flex flex-col justify-between items-center">
            <h1 className={headerStyling}>My Featured Projects</h1>
            <p className={`${paragraphStyle} px-5 md:w-xl`}>
              A selection of my best projects, showcasing my skills in creating
              modern, responsive and user friendly applications
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-4 md:grid-rows-2 gap-6 w-full gap-y-8 p-5 md:p-10 bg-transparent">
            <div className={doubleRow} onClick={() => handleSearchParams(0)}>
              <Image src="/oasis-5.png">The wild Oasis App</Image>
            </div>
            <div className={singleRow} onClick={() => handleSearchParams(1)}>
              <Image src="/fast-react-pizza.png" classes="text-black">
                Fast React Pizza Co.
              </Image>
            </div>
            {/* <div className={singleRow} onClick={() => handleSearchParams(0)}>
              <Image src="/fast-react-pizza.png" classes="text-black">
                Fast React Pizza Co.
              </Image>
            </div> */}
            <div className={tripleRow} onClick={() => handleSearchParams(2)}>
              <Image src="/worldwise-3.png">Worldwise App</Image>
            </div>
          </div>
          <div className="mb-30">
            <Button onClick={() => handleClick("/contactme")}>
              Contact Me
            </Button>
          </div>
          <Footer position="fixed" />
        </div>
      </div>
    </>
  );
}

export default Projects;
