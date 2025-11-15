import Button from "../ui/Button";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import Icons from "../ui/Icons";
import CareerPath from "../ui/CareerPath";

const technologies = [
  { icon: `/react.svg`, tech: "React.js" },
  { icon: "/tailwind.svg", tech: "Tailwindcss" },
  { icon: "/redux.svg", tech: "Redux" },
  { icon: "/nextjs.svg", tech: "Next.js" },
  { icon: "/supabase.svg", tech: "Supabase" },
  { icon: "/vercel.svg", tech: "Vercel" },
];

function AboutMe() {
  const headerStyling =
    "text-left text-2xl text-white font-montserrat font-semibold mb-4";

  const paragraphStyle = "text-[#a3a3a3] leading-8 font-raleway font-light";

  const containerStyle =
    "max-w-3xl pb-8 w-full flex flex-col justify-between items-start border-b border-gray-500";

  return (
    <>
      <div className="bg-[#0A192F] w-full flex items-center flex-col justify-between  gap-10 overflow-scroll">
        <NavBar />
        <div className="max-w-3xl flex items-center justify-between gap-12 border-b border-gray-500 pb-8 mt-20">
          <img
            src="/profile_picture.jpg"
            alt="sanusi_olayinka_img"
            className="rounded-full w-50 float-left border-white border"
          />{" "}
          <div className="text-left flex flex-col gap-5">
            <h1 className="font-montserrat text-3xl text-white font-bold">
              Hello, I am Sanusi Olayinka
            </h1>
            <p className={paragraphStyle}>
              I am a freelance{" "}
              <strong className="font-bold text-white">
                Frontend web developer,
              </strong>{" "}
              constantly honing my skills and bringing digital ideas to life
              through coding, I specialize in creating modern Web Applications
              that are both performant and delightful to use.
            </p>
            <Button>View My Work</Button>
          </div>
        </div>
        <div className={containerStyle}>
          <h1 className={headerStyling}>Core Technologies</h1>
          <div className="px-5 py-3 grid grid-cols-6 gap-10 m-auto">
            {technologies.map((tech) => (
              <Icons icon={tech.icon} tech={tech.tech} key={tech.tech} />
            ))}
          </div>
        </div>
        <div className={containerStyle}>
          <h1 className={headerStyling}>My Learning RoadMap</h1>
          <CareerPath />
        </div>
        <div className={`${containerStyle} border-b-0 mb-30`}>
          <h1 className={headerStyling}>Cerifications</h1>
          <div className="flex justify-between items-center gap-4 flex-row-reverse">
            <img className="w-80" src="/freecodecamp-certificate.png" />
            <p className={`${paragraphStyle} text-gray-400`}>
              Completed the freeCodeCamp Responsive Web Design course in late
              2023. Built hands-on projects with HTML5, CSS3, Flexbox and Grid
              and focused on mobile-first, accessible layouts. I enjoy turning
              designs into usable experiences, iterating from feedback and
              solving layout challenges. Ready to apply these front-end skills
              on real projects and in collaborative teams.{" "}
              <a
                target="_blank"
                href="https://www.freecodecamp.org/certification/sanusi-olayinka7/responsive-web-design"
                className="underline font-bold text-white"
              >
                Check Out the Certification
              </a>
            </p>
          </div>
        </div>
        {/* <footer className="bottom-0 fixed w-full z-30 p-4 text-center text-sm text-gray-400 backdrop-blur-sm bg-gray-900">
          <div></div>
          <p>&copy; 2025 Sanusi Olayinka | All Rights reserved</p>
        </footer> */}
        <Footer position="fixed" />
      </div>
    </>
  );
}

export default AboutMe;
