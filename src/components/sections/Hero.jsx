import React from "react";
import { HeroGreenBall } from "../ui/HeroGreenBall/HeroGreenBall";
import { ScrollText } from "../ui/ScrollText/ScrollText";

export const Hero = () => {
  return (
    <div className="py-[5rem] relative">
      <div className="w-[172rem] h-[36.1rem] rounded-[50%] border-brand border-solid border-[17px] -translate-x-[50%] shadow-[0_0_80px_0_rgba(7,101,56,1)] relative z-[1]"></div>
      <HeroGreenBall />
      <div className="backdrop-blur-[10px] absolute top-0 left-0 w-[100%] h-[100%] z-[2]"></div>
      <div className="text-white font-akira text-6xl text-center z-10 absolute top-[30%] px-[5rem] uppercase">
        The Design and Marketing Agency You NEED
      </div>
      <div className="z-10 absolute top-[55%] py-[10rem] bg-black-blur w-full">
        <ScrollText />
      </div>
    </div>
  );
};
