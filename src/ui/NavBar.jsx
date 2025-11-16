import { NavLink } from "react-router";
import { useState } from "react";
import { useOutSideClick } from "../hooks/useOutsideClick";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function close() {
    setIsOpen(false);
  }

  const ref = useOutSideClick(close);

  const lineClasses =
    "block h-1 w-7 bg-white transform transition duration-300 ease-in-out";

  return (
    <div className="relative md:hidden">
      <button
        className="flex flex-col items-center justify-around h-7 w-7 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
        onClick={toggleMenu}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span
          className={`${lineClasses} ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span className={`${lineClasses} ${isOpen ? "opacity-0" : ""}`}></span>
        <span
          className={`${lineClasses} ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      <div
        id="mobile-menu"
        className={`
          absolute right-0 mt-2 w-48  shadow-md bg-[#0A192F] shadow-blue-400 rounded-md overflow-hidden 
          transition-all duration-500 ease-in-out origin-top
          ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="p-2" ref={ref}>
          <li
            className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
            onClick={toggleMenu}
          >
            Home
          </li>
          <li className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            About
          </li>
          <li className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Projects
          </li>
          <li className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  );
};
function NavBar() {
  return (
    <div className="fixed mt-2 w-9/10 md:w-auto top-0 z-1000">
      <div className="rounded-full w-auto mx-auto shadow-md bg-[#0A192F] shadow-blue-400 flex justify-between items-center px-6 py-2  border-2 border-blue-600 z-100 gap-6">
        <div className="flex justify-between items-center gap-4 md:gap-8">
          <img src="public\logo.png" className="w-4" />{" "}
          <p className="font-raleway font-bold text-white">Sanusi Olayinka</p>
        </div>
        <ul className=" justify-between items-center gap-4 hidden md:flex">
          {/* <NavLink>Home</NavLink>
        <NavLink> About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact Me</NavLink> */}
          <li className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Home
          </li>
          <li className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            About
          </li>
          <li className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Projects
          </li>
          <li className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full">
            Contact Me
          </li>
        </ul>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
