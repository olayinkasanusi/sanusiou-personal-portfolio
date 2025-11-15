import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

function Projects() {
  return (
    <div className="flex flex-col justify-between items-center gap-8 w-full mx-auto bg-[#0A192F]]">
      <NavBar />
      <div></div>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 max-w-4xl bg-amber-600 h-12">
        <div className="col-span-2 border-2 border-gray-400 bg-red-800 h-5"></div>
        <div className="col-span-1 border-2 border-gray-400 bg-green-500 h-5"></div>
        <div className="col-span-1 border-2 border-gray-400 bg-black h-5"></div>
        <div className="col-span-2 border-2 border-gray-400 bg-blue-800 h-5"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
