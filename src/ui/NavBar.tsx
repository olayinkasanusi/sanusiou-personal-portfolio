import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const getMobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-sans w-full px-3 py-2 rounded-lg transition-all text-sm border duration-300 block text-left whitespace-nowrap ${
      isActive
        ? "text-blue-600 bg-blue-600/10 border-blue-500/15 font-bold"
        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50 border-transparent"
    }`;

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
          transition-all duration-300 ease-in-out origin-top z-50
          ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul
          className="p-3 flex-col flex gap-1 justify-between items-start"
          ref={ref}
        >
          <NavLink
            to="/"
            end
            className={getMobileLinkClass}
            onClick={close}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutme"
            className={getMobileLinkClass}
            onClick={close}
          >
            About Sanusi
          </NavLink>
          <NavLink
            to="/projects"
            className={getMobileLinkClass}
            onClick={close}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={getMobileLinkClass}
            onClick={close}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contactme"
            className={getMobileLinkClass}
            onClick={close}
          >
            Contact Me
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

interface NavBarProps {
  position?: string;
}

function NavBar({ position = "fixed" }: NavBarProps) {
  // Desktop link class builder
  const getDesktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-sans px-4 py-1.5 rounded-full transition-all text-sm font-medium border duration-300 whitespace-nowrap ${
      isActive
        ? "text-blue-600 bg-blue-600/10 border-blue-500/15 font-bold shadow-[inset_0_1px_2px_rgba(59,130,246,0.05)]"
        : "text-slate-600 hover:text-blue-600 border-transparent hover:bg-slate-50"
    }`;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 md:w-auto max-w-5xl mt-0">
      <div className="rounded-full w-auto mx-auto bg-white/80 backdrop-blur-md shadow-md border border-slate-200/50 flex justify-between items-center px-6 py-2.5 z-50 gap-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <p className="font-sans font-semibold text-slate-900 tracking-tight text-sm">
            Sanusi Olayinka
          </p>
        </Link>
        <ul className="justify-between items-center gap-1 hidden md:flex">
          <NavLink
            to="/"
            end
            className={getDesktopLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutme"
            className={getDesktopLinkClass}
          >
            About Sanusi
          </NavLink>
          <NavLink
            to="/projects"
            className={getDesktopLinkClass}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={getDesktopLinkClass}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contactme"
            className={getDesktopLinkClass}
          >
            Contact
          </NavLink>
        </ul>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
