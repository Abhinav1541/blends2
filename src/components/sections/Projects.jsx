import React from "react";
import { ScrollText } from "../ui/ScrollText/ScrollText";
import { Button } from "../ui/Button/Button";
import projectsImg from "../../assets/images/projects.png";
import greenline from "../../assets/svg/greenline.svg";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="relative">
      <div className="relative -mt-32  text-white font-akira text-7xl flex flex-col content-center w-full items-center">
        <div>OUR</div>
        <div className="text-brand">PROJECTS</div>
      </div>
      <div className="h-[8rem]"></div>
      <img src={projectsImg} className="w-full" />
      <div className="z-10 absolute top-[77%] w-full bg-grey-blur backdrop-blur-[30px] flex items-center mt-[4rem] pb-[5rem]">
        <div className="w-1/2 flex justify-center">
          <Link to="/work">
            <Button className="bg-black px-[3rem]">
              <span className="text-white font-poppins text-[1.5rem]">
                See all work
              </span>
            </Button>
          </Link>
        </div>
        <div className="text-white font-poppins w-1/2 text-center px-[2.5rem]">
          Blends Agency has delivered impactful results across brand identity
          design, web design, social media marketing, and strategic campaigns.
          As a top design agency in Pune, we’ve worked with startups and
          businesses to craft innovative digital marketing solutions and
          exceptional brand experiences that drive success.
        </div>
      </div>
      <img src={greenline} className="absolute z-10 bottom-0 w-full" />
    </div>
  );
};
