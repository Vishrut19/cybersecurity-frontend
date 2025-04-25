import React from "react";
import FaqAccordion from "../FaqAccordion";

const FaqSection = () => {
  return (
    <div className="w-full min-h-screen relative">
      {/* Vector 8 - Blurred gradient background */}
      <div
        className="absolute opacity-20 blur-[125px]"
        style={{
          width: "904.03px",
          height: "994.15px",
          left: "-400px",
          top: "50%", // Middle of the section
          transform: "translateY(-50%) rotate(150deg)",
          background:
            "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
          zIndex: "0",
        }}
      ></div>

      <div className="flex flex-col justify-start items-start px-20 py-20 relative z-10">
        <h1 className="text-4xl font-bold text-[#D5FF3F] ml-3 uppercase">
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
