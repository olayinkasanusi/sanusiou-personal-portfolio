import { Link } from "react-router";
import { useState } from "react";
import { useOutSideClick } from "../hooks/useOutsideClick";
import Logo from "./Logo";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  function close() {
    setIsOpen(false);
  }

  const ref = useOutSideClick(close, false);

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
          absolute right-0 mt-2 w-35  shadow-md bg-[#0A192F] shadow-blue-400 rounded-md overflow-hidden 
          transition-all duration-500 ease-in-out origin-top
          ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul
          className="p-2 flex-col flex gap-2 justify-between items-start "
          ref={ref}
        >
          <Link
            to="/"
            className="font-raleway w-full text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutme"
            className="font-raleway w-full text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="font-raleway w-full text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="font-raleway w-full text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            Blogs
          </Link>
          <Link
            to="/contactme"
            className="font-raleway w-full text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
  );
};
function NavBar() {
  return (
    <div className="fixed mt-2 w-9/10 md:w-auto top-0 z-1000">
      <div className="rounded-full w-auto mx-auto shadow-md bg-[#0A192F] shadow-blue-400 flex justify-between items-center px-6 py-2  border-2 border-blue-600 z-100 gap-6">
        <Link to="/">
          <span className="flex justify-between items-center gap-3">
            <Logo />
            <p className="font-raleway font-bold text-white">Sanusi Olayinka</p>
          </span>
        </Link>
        <ul className=" justify-between items-center gap-4 hidden md:flex">
          <Link
            to="/"
            className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            Home
          </Link>
          <Link
            to="/aboutme"
            className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            Blogs
          </Link>
          <Link
            to="/contactme"
            className="font-raleway text-white font-light active:bg-[#007bff] px-3 hover:bg-[#007bff] p-1 rounded-full"
          >
            Contact Me
          </Link>
        </ul>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
