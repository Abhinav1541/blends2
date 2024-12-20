import React from "react";
import { Button } from "../ui/Button/Button";
import DotGrid from "../../assets/svg/DotGrid.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import upwardParabola from "../../assets/svg/upwardParabola.svg";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../utils/Utils";

export const AboutUs = () => {
  return (
    <div className="pt-[17.5rem] relative" id="aboutus">
      <img src={upwardParabola} className="w-[114rem] absolute top-5" />
      <div className="absolute left-1/2 top-0">
        <HashLink
          smooth
          to="/#aboutus"
          scroll={(el) => scrollWithOffset(el, 150)}
        >
          <Button className="relative -left-1/2 bg-black px-[1.25rem]">
            <span className="text-white font-poppins text-[1.25rem]">
              Lets Get Started
            </span>
          </Button>
        </HashLink>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/2 pt-[2rem]">
          <div className="uppercase font-akira text-7xl flex flex-col gap-5 p-10 bg-green-blur ml-16 rounded-2xl w-fit">
            <div className="text-white">About</div>
            <div className="text-brand">Blends</div>
          </div>
          <div className="flex flex-col ml-[13.375rem] mt-32 w-fit items-center">
            <div className="flex px-[4.6875rem] py-[1.125rem] bg-[rgba(45,44,44,0.4)] text-white font-light text-center gap-20 rounded-xl justify-between w-fit">
              <div className="flex flex-col gap-2">
                <div className="text-5xl font-akira flex justify-center gap-1">
                  <div className="animate-slidein [--delay:300ms] opacity-0">
                    2
                  </div>
                  <div className="animate-slidein [--delay:700ms] opacity-0">
                    5
                  </div>
                  <div className="animate-slidein [--delay:1000ms] opacity-0">
                    +
                  </div>
                </div>
                <div className="text-base font-poppins">Projects Delivered</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-5xl font-akira flex justify-center gap-1">
                  <div className="animate-slidein [--delay:300ms] opacity-0">
                    1
                  </div>
                  <div className="animate-slidein [--delay:700ms] opacity-0">
                    5
                  </div>
                  <div className="animate-slidein [--delay:1000ms] opacity-0">
                    +
                  </div>
                </div>
                <div className="text-base font-poppins">Total Client's</div>
              </div>
            </div>
            <HashLink
              smooth
              to="/#contactus"
              scroll={(el) => scrollWithOffset(el, 200)}
            >
              <Button className="m-auto mt-[5rem]">
                <div className="flex gap-2">
                  <span className="text-xl text-white font-akira">
                    Contact Us
                  </span>
                  <img src={arrowDown} />
                </div>
              </Button>
            </HashLink>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="relative">
            <img src={DotGrid} className="absolute z-1 left-[15rem]" />
            <div className="absolute z-2 backdrop-blur-[0.5rem] w-[80%] bg-[rgba(45,44,44,0.4)] rounded-xl text-white font-poppins text-base flex flex-col px-[1rem] py-[1rem] gap-6 top-[4rem] left-[2rem]">
              <div>
                Welcome to Blends Agency, the leading design agency in Pune and
                a top-rated marketing agency in India, offering comprehensive
                design and marketing solutions for businesses of all sizes.
                Recognized as a creative agency in Pune and a hub for innovative
                digital marketing strategies, we specialize in brand identity
                design, strategic marketing solutions, social media marketing,
                and web design and development.
              </div>
              <div>
                As the best design firm in Maharashtra, we blend creativity and
                technology to deliver exceptional digital marketing solutions
                that drive growth. From corporate identity design to startup
                branding consultancy, our team provides end-to-end services
                tailored to your needs, including graphic design services,
                e-commerce marketing solutions, and user experience design
                services.
              </div>
              <div>
                With a strong focus on Pune digital marketing services and
                branding consultancy, we serve industries ranging from tech
                startups to small businesses, offering expertise in B2B
                marketing, visual branding, and integrated marketing
                communication.
              </div>
              <div>
                At Blends Agency, we help you transform your vision into
                reality. Partner with the top design and marketing agency in
                Pune for innovative, results-driven solutions!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
