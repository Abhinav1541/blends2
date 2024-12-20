import React from "react";
import { ContactForm } from "../ui/ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <div className="bg-white" id="contactus">
      <hr className="h-[0.75rem] bg-brand w-full border-0" />
      <div className="px-[3.75rem] py-[5rem]">
        <div className="flex flex-col items-start">
          <div className="text-black font-akira uppercase text-[4.5rem]">
            Let's <br /> <div className="text-brand -mt-8">team up</div>
          </div>
          <div className="text-black font-poppins text-[1.75rem] font-light">
            Let us know your proposal! <br />
            Kindly fill the form, have a great day!
          </div>
        </div>
        <div className="mt-[5rem]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
