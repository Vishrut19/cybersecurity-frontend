import React from "react";
import FaqAccordion from "../FaqAccordion";

const FaqSection = () => {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at top left, #181629 0%, #0e0c18 100%)",
      }}
    >
      <div className="flex flex-col justify-start items-start px-20 py-20">
        <h1 className="text-3xl font-bold text-[#fcf9fd] ml-3">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-2 gap-4 pt-10 w-full ">
          <FaqAccordion />
          <img
            src="../../assets/images/image4.jpeg"
            alt="faqImage"
            className="relative w-[500px] h-[250px] ml-[120px] mt-[120px] rounded-md z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
