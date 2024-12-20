import React from "react";
import upwardParabola from "../../assets/svg/upwardParabola.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import sentosa from "../../assets/images/sentosa/sentosa.png";
import liveplay from "../../assets/images/liveplay/liveplay.png";
import daulat from "../../assets/images/daulat/daulat.png";
import bharattransit from "../../assets/images/bharattransit/bharattransit.png";
import surge from "../../assets/images/surge/surge.png";
import exogear from "../../assets/images/exogear/exogear.png";
import cute from "../../assets/images/cute/cute.png";
import matrix from "../../assets/images/matrix/matrix.png";
import aasan from "../../assets/images/aasan/aasan.png";
import tshirt from "../../assets/images/tshirt/tshirt.png";
import { Button } from "../ui/Button/Button";
import { WorkCard } from "../ui/WorkCard/WorkCard";
import { LetsConnect } from "../ui/LetsConnect/LetsConnect";
import { HashLink } from "react-router-hash-link";

export const WorkList = () => {
  return (
    <div className="py-5rem relative" id="work">
      <img src={upwardParabola} className="w-[114rem] absolute top-5" />
      <div className="absolute left-1/2 top-0">
        <HashLink smooth to="/work/#work">
          <Button className="relative -left-1/2 bg-black rounded-[1.5rem] py-[1rem] px-[1rem]">
            <div className="flex gap-2">
              <span className="text-xl text-white font-akira">OUR WORK</span>
              <img src={arrowDown} />
            </div>
          </Button>
        </HashLink>
      </div>
      <div className="flex flex-col mt-[10rem] px-[3.75rem] pt-[15rem] pb-[10rem] gap-[3rem]">
        <div className="flex gap-[3.75rem] justify-center">
          <WorkCard
            img={sentosa}
            title="Sentosa Realty"
            description="Branding"
            link="/work/sentosa"
          />
          <WorkCard
            img={liveplay}
            title="Liveplay.in"
            description="Branding"
            link="/work/liveplay"
          />
        </div>
        <div className="flex gap-[3.75rem] justify-center">
          <WorkCard
            img={daulat}
            title="Daulat"
            description="Branding and Content Creation"
            link="/work/daulat"
          />
          <WorkCard
            img={exogear}
            title="Exogear"
            description="Branding"
            link="/work/exogear"
          />
        </div>
        <div className="flex gap-[3.75rem] justify-center">
          <WorkCard
            img={bharattransit}
            title="Bharat Transit"
            description="Branding"
            link="/work/bharattransit"
          />
          <WorkCard
            img={surge}
            title="Surge"
            description="Branding"
            link="/work/surge"
          />
        </div>
        <div className="flex gap-[3.75rem] justify-center">
          <WorkCard
            img={cute}
            title="Cuteiclesandlyor"
            description="Content Creation and Social Media Mangement"
            link="/work/cuteiclesandlyor"
          />
          <WorkCard
            img={matrix}
            title="Matrixs Bar and Kitchen"
            description="Content Creation and Social Media Mangement"
            link="/work/matrix"
          />
        </div>
        <div className="flex gap-[3.75rem] justify-center">
          <WorkCard
            img={aasan}
            title="Aasaan"
            description="Content Creation and Social Media Mangement"
            link="/work/aasaan"
          />
          <WorkCard
            img={tshirt}
            title="The T-Shirt Store"
            description="Product Design"
            link="/work/tshirt"
          />
        </div>
      </div>
      <LetsConnect />
      <div className="mt-[5rem]"></div>
    </div>
  );
};
