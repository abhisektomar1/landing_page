import { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-[50]">
      {/* <img src={logo} alt="landing pge" className="w-[124px] h-[32px]" /> */}
      <h4 className="font-poppins font-semibold xs:text-[20.89px] text-[15.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          Your Logo here
        </h4>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="hidden sm:block font-poppins font-normal cursor-pointer text-[15px] text-white mr-10 ml-44 border-2 rounded-[40px] border-white p-3">
            refer & earn
      </div>

          <button type="button" className={`hidden sm:block py-2 px-6 z-[50] font-poppins font-medium text-[15px] text-white bg-slate-800 rounded-[10px] outline-grey`}>
          Log In
          </button>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1000]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
      <button type="button" className={`py-2 px-6 z-[50] font-poppins font-medium text-[15px] text-white bg-slate-800 rounded-[10px] outline-grey`}>
   Log In
  </button>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
