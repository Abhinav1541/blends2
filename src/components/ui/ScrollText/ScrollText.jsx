import React from "react";
import StarLogo from "../../../assets/svg/star.svg";
import DotLogo from "../../../assets/svg/dot.svg";
import Marquee from "react-fast-marquee";

export const ScrollText = () => {
  return (
    <Marquee autoFill={true}>
      <div className="font-akira text-white text-4xl flex gap-2">
        <img src={StarLogo} />
        <div>Innovate</div>
        <img src={DotLogo} />
        <div>Engage</div>
        <img src={DotLogo} />
        <div>Grow</div>
      </div>
    </Marquee>
  );
};
