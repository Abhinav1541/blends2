import React from "react";
import { TextDivider } from "../ui/TextDivider/TextDivider";
import SimpleSlider from "../ui/Slider/SimpleSlider";

export const HearFromThem = () => {
  return (
    <div className="py-[5rem]">
      <TextDivider linecolor="white">
        <div className="text-white font-akira text-6xl uppercase flex">
          Hear from our <div className="text-brand">&nbsp;founders</div>
        </div>
      </TextDivider>
      <div className="px-[5rem] mt-[2rem]">
        <SimpleSlider />
      </div>
    </div>
  );
};
