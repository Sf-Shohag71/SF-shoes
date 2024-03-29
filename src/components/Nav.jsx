import { useState } from "react";
import { cross, hamburger } from "../assets/icons";
import { siteLogo } from "../assets/images";

import { navLinks } from "../constants";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleNavbar = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={siteLogo}
            alt="logo"
            width={120}
            height={60}
            className="m-0 w-[120px] h-[60px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        {/* Navbar for mobile device */}
        <div className="block md:hidden">
          <button onClick={handleNavbar}>
            {toggleNav ? (
              <img src={cross} alt="menu closing icon" width={25} height={25} />
            ) : (
              <img
                src={hamburger}
                alt="hamburger icon"
                width={25}
                height={25}
              />
            )}
          </button>
        </div>
        <ul
          className={
            toggleNav
              ? "fixed md:hidden left-0 top-0 pt-10 pl-6 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 pt-10 pl-6 bottom-0 left-[-100%]"
          }
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-gray-50 hover:text-white-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
