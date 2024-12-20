import React from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    const interestedInValues = [];
    event.target
      .querySelectorAll('input[name="Interested In"]:checked')
      .forEach((checkbox) => {
        interestedInValues.push(checkbox.value);
      });
    formData.delete("Interested In");
    formData.append("Interested In", interestedInValues.join(", "));

    formData.append("access_key", "fc40d431-7731-4990-ba20-10f21bdbee90");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex font-poppins text-black text-[1.25rem] font-light gap-[2rem]">
          <div className="flex flex-col w-1/2 gap-[5rem]">
            <div className="flex gap-[1rem] items-center">
              Your name*
              <div className="border-black border-b-[1px] flex-grow">
                <input
                  type="text"
                  name="Name"
                  className="w-full p-2"
                  required
                />
              </div>
            </div>
            <div className="flex gap-[1rem] items-center">
              Phone Number*
              <div className="border-black border-b-[1px] flex-grow">
                <input
                  type="text"
                  name="Phone Number"
                  className="w-full p-2"
                  required
                />
              </div>
            </div>
            <div className="flex gap-[1rem] items-center">
              Company name
              <div className="border-black border-b-[1px] flex-grow">
                <input type="text" name="Company Name" className="w-full p-2" />
              </div>
            </div>
            <div className="flex gap-[1rem] items-start">
              Project details*
              <div className="border-black border-b-[1px] flex-grow">
                <textarea
                  name="Project Details"
                  rows="2"
                  className="w-full p-2"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-[5rem]">
            <div className="flex gap-[1rem] items-center">
              Your Email*
              <div className="border-black border-b-[1px] flex-grow">
                <input
                  type="email"
                  name="Email"
                  className="w-full p-2"
                  required
                />
              </div>
            </div>
            <div className="flex gap-[1rem] items-center">
              Social Media URL
              <div className="border-black border-b-[1px] flex-grow">
                <input
                  type="text"
                  name="Social Media Url"
                  className="w-full p-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
              Interested In*
              <div className="font-poppins">
                <div className="radio-input">
                  <label className="label">
                    <input
                      value="Graphic Design"
                      name="Interested In"
                      id="Graphic Design"
                      type="checkbox"
                    />
                    <span className="text">Graphic Design</span>
                  </label>
                  <label className="label">
                    <input
                      value="Marketing"
                      name="Interested In"
                      id="Marketing"
                      type="checkbox"
                    />
                    <span className="text">Marketing</span>
                  </label>
                  <label className="label">
                    <input
                      value="Social Media"
                      name="Interested In"
                      id="Social Media"
                      type="checkbox"
                    />
                    <span className="text">Social Media</span>
                  </label>
                  <label className="label">
                    <input
                      value="UI/UX"
                      name="Interested In"
                      id="UI/UX"
                      type="checkbox"
                    />
                    <span className="text">UI/UX</span>
                  </label>
                  <label className="label">
                    <input
                      value="Other"
                      name="Interested In"
                      id="Other"
                      type="checkbox"
                    />
                    <span className="text">Other</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1rem] -mt-[2.5rem]">
              Project Budget*
              <div className="font-poppins">
                <div className="flex gap-[3rem]">
                  <label className="flex gap-[0.5rem] sradio-label">
                    <input
                      value="Under 3L"
                      name="Project Budget"
                      id="value-1"
                      type="radio"
                    />
                    <span>Under 50K</span>
                  </label>
                  <label className="flex gap-[0.5rem] sradio-label">
                    <input
                      value="3L-5L"
                      name="Project Budget"
                      id="value-1"
                      type="radio"
                    />
                    <span>50K-1L</span>
                  </label>
                  <label className="flex gap-[0.5rem] sradio-label">
                    <input
                      value="5L-7L"
                      name="Project Budget"
                      id="value-1"
                      type="radio"
                    />
                    <span>1L-3L</span>
                  </label>
                  <label className="flex gap-[0.5rem] sradio-label">
                    <input
                      value="Over 7L"
                      name="Project Budget"
                      id="value-1"
                      type="radio"
                    />
                    <span>Over 3L</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[10rem] flex flex-col items-center gap-[1rem]">
          <button
            type="submit"
            className="text-white text-[1.5rem] font-poppins py-[0.5rem] px-[3rem] border-brand bg-brand border-solid rounded-[2rem] border-[0.125rem] w-fit hover:bg-white hover:text-brand transition-all duration-500 ease-in-out"
          >
            Submit
          </button>
          <span className="text-2xl font-light">{result}</span>
        </div>
        {/* <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button> */}
      </form>
    </div>
  );
};
