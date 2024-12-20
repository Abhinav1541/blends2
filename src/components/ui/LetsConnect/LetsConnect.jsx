import React from "react";
import connect from "../../../assets/svg/connect.svg";
import blackarrowTl from "../../../assets/svg/black-arrow-tl.svg";
import { Button } from "../Button/Button";

export const LetsConnect = ({ className }) => {
  return (
    <div
      className={`${className} w-[82.5rem] h-[24rem] m-auto flex flex-col items-center justify-center relative gap-[4rem]`}
    >
      <img src={connect} className="w-full absolute top-0 left-0 z-0" />
      <div className="text-white relative z-1 uppercase font-akira text-5xl text-center">
        Let's <br /> Connect
      </div>
      <Button className="py-1 rounded-[3rem] px-2 -ml-2 relative z-1 bg-white hover:border-white">
        <div className="flex gap-1 items-center px-1">
          <span className="text-[1.5rem] text-black font-poppins uppercase tracking-wide">
            Get in touch
          </span>
          <img src={blackarrowTl} />
        </div>
      </Button>
    </div>
  );
};
