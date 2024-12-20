import React from "react";
import { Button } from "../Button/Button";
import rightarrows from "../../../assets/svg/rightarrows.svg";
import { Link } from "react-router-dom";

export const WorkCard = ({ img, title, description, link }) => {
  return (
    <div className="flex flex-col items-center relative group">
      <div>
        <img src={img} className="w-[39.375rem] h-[33.5rem]" />
      </div>

      <div className="font-poppins text-white text-[2rem] font-semibold mt-[1.5rem]">
        {title}
      </div>
      <div className="font-poppins text-[#888888] text-[1rem] font-light mt-[0.5rem] group-hover:text-brand transition-all duration-500 ease-in-out">
        {description}
        <div className="absolute -bottom-[0.5rem] left-[40%] w-[20%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out h-[1px] bg-brand"></div>
      </div>
      <div className="absolute opacity-0 bg-[rgb(0,0,0,0.5)] group-hover:opacity-100 transition-all duration-500 ease-in-out w-full h-[33.5rem] top-0 left-0 flex items-center justify-center">
        {!!!link ? (
          <Button className="px-[2.5rem] bg-[rgb(0,0,0,0.8)]">
            <div className="flex gap-4">
              <span className="text-xl text-white font-poppins">Explore</span>
              <img src={rightarrows} />
            </div>
          </Button>
        ) : (
          <Link to={link}>
            <Button className="px-[2.5rem] bg-[rgb(0,0,0,0.8)]">
              <div className="flex gap-4">
                <span className="text-xl text-white font-poppins">Explore</span>
                <img src={rightarrows} />
              </div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
