import React, { useState } from "react";
import { Link } from "react-router";
import { useOutSideClick } from "../hooks/useOutsideClick";
import Logo from "./Logo";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  function close() {
    setIsOpen(false);
  }

  const ref = useOutSideClick<HTMLUListElement>(close, false);

  const lineClasses =
    "block h-0.5 w-6 bg-slate-800 transform transition duration-300 ease-in-out";

  return (
    <div className="relative md:hidden">
      <button
        className="flex flex-col items-center justify-around h-6 w-6 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
        onClick={toggleMenu}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span
          className={`${lineClasses} ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span className={`${lineClasses} ${isOpen ? "opacity-0" : ""}`}></span>
        <span
          className={`${lineClasses} ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>
      <div
        id="mobile-menu"
        className={`
          absolute right-0 mt-3 w-48 bg-white border border-slate-200/80 shadow-lg rounded-xl overflow-hidden 
          transition-all duration-300 ease-in-out origin-top
          ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul
          className="p-3 flex-col flex gap-1 justify-between items-start"
          ref={ref}
        >
          <Link
            to="/"
            className="font-sans w-full text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm"
            onClick={close}
          >
            Home
          </Link>
          <Link
            to="/aboutme"
            className="font-sans w-full text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm"
            onClick={close}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="font-sans w-full text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm"
            onClick={close}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="font-sans w-full text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm"
            onClick={close}
          >
            Blogs
          </Link>
          <Link
            to="/contactme"
            className="font-sans w-full text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm"
            onClick={close}
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
  );
};

interface NavBarProps {
  position?: string;
}

function NavBar({ position = "fixed" }: NavBarProps) {
  return (
    <div className={`${position} mt-4 w-11/12 md:w-auto top-0 z-50`}>
      <div className="rounded-full w-auto mx-auto bg-white/85 backdrop-blur-md shadow-sm border border-slate-200/80 flex justify-between items-center px-6 py-2.5 z-50 gap-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <p className="font-sans font-semibold text-slate-900 tracking-tight text-sm">
            Sanusi Olayinka
          </p>
        </Link>
        <ul className="justify-between items-center gap-1 hidden md:flex">
          <Link
            to="/"
            className="font-sans text-slate-600 hover:text-blue-600 px-4 py-1.5 rounded-full transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/aboutme"
            className="font-sans text-slate-600 hover:text-blue-600 px-4 py-1.5 rounded-full transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="font-sans text-slate-600 hover:text-blue-600 px-4 py-1.5 rounded-full transition-colors text-sm font-medium"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="font-sans text-slate-600 hover:text-blue-600 px-4 py-1.5 rounded-full transition-colors text-sm font-medium"
          >
            Blogs
          </Link>
          <Link
            to="/contactme"
            className="font-sans text-slate-600 hover:text-blue-600 px-4 py-1.5 rounded-full transition-colors text-sm font-medium"
          >
            Contact
          </Link>
        </ul>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
