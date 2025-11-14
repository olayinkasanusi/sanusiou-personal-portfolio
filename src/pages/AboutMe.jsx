import Button from "../ui/Button";
import NavBar from "../ui/NavBar";

function AboutMe() {
  return (
    <>
      <div className="bg-[#0A192F] w-full h-dvh flex items-center flex-col justify-between gap-6">
        <NavBar />
        <div className="max-w-3xl flex items-center justify-between">
          <img />{" "}
          <div className="text-left flex flex-col gap-3">
            <h1>Hello, I am Sanusi Olayinka</h1>
            <p>
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
