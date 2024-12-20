import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BlendsIcon } from "../BlendsIcon/BlendsIcon";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { NavHashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../../utils/Utils";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm h-[100px] flex items-center z-50 pl-[6rem]">
      <ul className="flex items-center w-full justify-center gap-[8rem]">
        <li>
          <NavHashLink
            className=" text-white font-akira text-lg"
            smooth
            to="/#aboutus"
            scroll={(el) => scrollWithOffset(el, 150)}
          >
            ABOUT US
          </NavHashLink>
        </li>
        <li className="">
          <NavLink to="/work" className="text-white font-akira text-lg">
            OUR WORK
          </NavLink>
        </li>
        <li className="">
          <Link to="/">
            <BlendsIcon />
          </Link>
        </li>
        <li>
          <NavHashLink
            className="text-white font-akira text-lg"
            smooth
            to="/#whatweoffer"
            scroll={(el) => scrollWithOffset(el, 100)}
          >
            OUR SERVICES
          </NavHashLink>
        </li>
        <li className="">
          <NavHashLink
            smooth
            to="/#contactus"
            scroll={(el) => scrollWithOffset(el, 200)}
          >
            <Button>
              <span className="text-white font-akira text-lg">CONTACT US</span>
            </Button>
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
};
