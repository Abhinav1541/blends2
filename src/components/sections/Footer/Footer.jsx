import React from "react";
import blends from "../../../assets/svg/blends.svg";
import whatsapp from "../../../assets/svg/Whatsapp.svg";
import linkedin from "../../../assets/svg/LinkedIn.svg";
import instagram from "../../../assets/svg/instagram.svg";
import arrowTl from "../../../assets/svg/arrow-tl.svg";
import { Button } from "../../ui/Button/Button";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../../utils/Utils";

export const Footer = () => {
  return (
    <div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
      <div className="flex pt-[7rem] pb-[2.5rem]">
        <div className="flex flex-col ml-[3.75rem] gap-[1.5rem]">
          <div className="flex gap-[1.375rem]">
            <img src={blends} className="h-[6.25rem]" />
          </div>
          <div className="text-white font-poppins text-[1rem] font-light">
            Transforming Ideas into Impactful Brands.
            <br />
            Your partner in creative design and digital marketing solutions.
          </div>
        </div>
        <div className="flex flex-col text-white font-akira text-[1.25rem] gap-[3rem] uppercase ml-[12.5rem]">
          <HashLink smooth to="/work">
            <div>Work</div>
          </HashLink>
          <HashLink
            smooth
            to="/#whatweoffer"
            scroll={(el) => scrollWithOffset(el, 150)}
          >
            <div>Services</div>
          </HashLink>
          <HashLink
            smooth
            to="/#aboutus"
            scroll={(el) => scrollWithOffset(el, 150)}
          >
            <div>About</div>
          </HashLink>
          <HashLink
            smooth
            to="/#contactus"
            scroll={(el) => scrollWithOffset(el, 200)}
          >
            <div>Contact</div>
          </HashLink>
        </div>
        <div className="flex flex-col ml-[10.75rem] gap-[1.25rem]">
          <div className="flex gap-[5rem]">
            <a
              href="https://in.linkedin.com/company/blends-agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} />
            </a>
            <a
              href="https://www.instagram.com/blends.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} />
            </a>
          </div>
          <div className="text-white font-poppins text-[1rem] font-light mt-[2rem] flex gap-[1.5rem] items-start">
            <div className="flex flex-col">
              <div>Email:</div>
              <div className="invisible">lol</div>
              <div className="invisible">lol</div>
              <div>Phone:</div>
            </div>
            <div className="flex flex-col">
              <div>connect@blends.agency / </div>
              <div>blendsagency@gmail.com</div>
              <div className="invisible">lol</div>
              <div>+91 86258 91532</div>
            </div>
          </div>
          <HashLink
            smooth
            to="/#contactus"
            scroll={(el) => scrollWithOffset(el, 200)}
          >
            <Button className="rounded-[2.5rem] px-2 -ml-2 py-[0] mt-[2rem]">
              <div className="flex gap-1 items-center">
                <span className="text-[1.5rem] text-white font-akira uppercase tracking-wide">
                  Get in touch
                </span>
                <img src={arrowTl} />
              </div>
            </Button>
          </HashLink>
        </div>
      </div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
      <div className="flex items-center justify-center py-[2.625rem] text-white opacity-[0.8] font-poppins">
        © Copyright 2024 Blends Inc.
      </div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
    </div>
  );
};
