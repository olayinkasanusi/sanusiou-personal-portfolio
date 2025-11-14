import Button from "../ui/Button";
import NavBar from "../ui/NavBar";

const technologies = [
  { icon: "", technology: "React.js" },
  { icon: "", technology: "Tailwind.css" },
  { icon: "", technology: "Redux" },
  { icon: "", technology: "Next.js" },
  { icon: "", technology: "Supabase" },
  { icon: "", technology: "Vercel" },
];

function AboutMe() {
  return (
    <>
      <div className="bg-[#0A192F] w-full h-dvh flex items-center flex-col justify-between gap-4">
        <NavBar />
        <div className="max-w-3xl flex items-center justify-between gap-12 border-b border-gray-500 pb-8">
          <img
            src="public\profile_picture.jpg"
            className="rounded-full w-50 float-left border-white border"
          />{" "}
          <div className="text-left flex flex-col gap-5">
            <h1 className="font-montserrat text-3xl text-white font-bold">
              Hello, I am Sanusi Olayinka
            </h1>
            <p className="text-[#707070] leading-8 font-raleway font-light">
              I am a freelance web developer, constantly honing my skills and
              bringing digital ideas to life through coding, I specialize in
              creating modern Web Applications that are both performant and
              delightful to use.
            </p>
            <Button>View My Work</Button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default AboutMe;
