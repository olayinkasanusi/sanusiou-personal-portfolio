import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className="fixed mt-2 top-0">
      <div className="rounded-full w-auto mx-auto shadow-md bg-[#0A192F] shadow-blue-400 flex justify-between items-center px-6 py-2  border-2 border-blue-600 z-100 gap-6">
        <div className="flex justify-between items-center gap-8">
          <img src="public\logo.png" className="w-4" />{" "}
          <p className="font-raleway font-bold text-white">Sanusi Olayinka</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          {/* <NavLink>Home</NavLink>
        <NavLink> About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact Me</NavLink> */}
          <a className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Home
          </a>
          <a className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            About
          </a>
          <a className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Projects
          </a>
          <a className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
