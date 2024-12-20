import React, { useRef } from "react";
import { WorkGallery } from "../components/ui/WorkGallery/WorkGallery";
import { TextDivider } from "../components/ui/TextDivider/TextDivider";
import { Button } from "../components/ui/Button/Button";
import { LetsConnect } from "../components/ui/LetsConnect/LetsConnect";
import { WorkVideos } from "../components/ui/WorkVideos/WorkVideos";

export const Company = ({ data }) => {
  const {
    company,
    mainImage,
    projectType,
    clientOverview,
    challenges,
    solution,
    results,
    conclusion,
    gallery,
    videos,
  } = data;
  const targetRef = useRef(null);
  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div>
      <TextDivider>
        <div className="text-white font-poppins font-semibold text-6xl">
          {company}
        </div>
      </TextDivider>
      <div className="pt-[5rem] px-[5rem]">
        <div className="flex mt-[5rem] justify-between">
          <img
            src={mainImage}
            className="w-[46.25rem] h-[40.625rem] rounded-md"
          />
          <div className="bg-[rgb(32,165,100,0.7)] flex flex-col items-center justify-center py-[2.5rem] px-[5rem] text-poppins text-white rounded-md gap-[1rem]">
            <div className="text-[2rem] font-semibold">Client</div>
            <div className="text-[1.25rem] ">{company}</div>
            <hr className="block h-1 border-t-[1px] w-[20rem] border-white my-[0.75rem]" />
            <div className="text-[2rem] font-semibold">Project Type</div>
            <div className="text-[1.25rem] ">{projectType}</div>
            <hr className="block h-1 border-t-[1px] w-[20rem] border-white my-[0.75rem]" />
            <Button className="py-1 rounded-[3rem] px-[5rem] bg-white hover:border-white mt-[2rem]">
              <div className="flex gap-1 items-center" onClick={handleScroll}>
                <span className="text-[1.5rem] text-black font-poppins font-[500]">
                  Learn More
                </span>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col border-[1px] border-brand my-[5rem] rounded-md font-poppins text-white">
          <div className="px-[5rem] py-[2.5rem]">
            <div className="font-semibold text-[2rem]" ref={targetRef}>
              Client Overview
            </div>
            <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
              {clientOverview}
            </div>
          </div>
          <div className="border-t-[1px] border-brand px-[5rem] py-[2.5rem]">
            <div className="font-semibold text-[2rem]">Challenges</div>
            <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
              <ul className="list-disc pl-[1.25rem]">
                {challenges.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t-[1px] border-brand px-[5rem] py-[2.5rem]">
            <div className="font-semibold text-[2rem]">Solution By Blends</div>
            <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
              <ul className="list-disc pl-[1.25rem]">
                {solution.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t-[1px] border-brand px-[5rem] py-[2.5rem]">
            <div className="font-semibold text-[2rem]">Results</div>
            <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
              {results}
            </div>
          </div>
          <div className="border-t-[1px] border-brand px-[5rem] py-[2.5rem]">
            <div className="font-semibold text-[2rem]">Conclusion</div>
            <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
              {conclusion}
            </div>
          </div>
        </div>
        {gallery ? (
          <WorkGallery images={gallery.images} type={gallery.type} />
        ) : (
          ""
        )}
        <div className="p-[2rem]"></div>
        {videos ? <WorkVideos videos={videos} /> : ""}
        <LetsConnect className="w-full mt-[5rem]" />
        <div className="mt-[5rem]"></div>
      </div>
    </div>
  );
};
