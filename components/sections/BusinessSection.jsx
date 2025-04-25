import React from "react";
import ClipButtons from "../ClipButtons";

const BusinessSection = () => {
  return (
    <section className="w-full min-h-screen px-8 py-20 relative overflow-hidden">
      {/* Vector blur effect - continuing from HeroSection */}
      <div
        className="absolute w-[320px] h-[380px] opacity-90"
        style={{
          left: "1473.96px",
          top: "-150px",
          background:
            "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
          filter: "blur(100px)",
          transform: "rotate(150deg)",
        }}
        aria-hidden="true"
      />

      {/* Vector 8 - middle left blur effect */}
      <div
        className="absolute w-[500px] h-[500px] opacity-20"
        style={{
          left: "-100px",
          top: "300px",
          background:
            "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
          filter: "blur(125px)",
          transform: "rotate(150deg)",
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Why Businesses Choose Us</h2>
        <div className="flex flex-col justify-center items-center">
          <span className="text-gray-300 capitalize">
            As A AI Language Model, I Do Not Have A Specific Information About A
            Particular Business Or Service.
          </span>
          <span className="text-gray-300 capitalize">
            However A Business may choose a company based on various reasons
            such as a reputation for
          </span>
          <span className="text-gray-300 capitalize">
            quality products or services
          </span>
        </div>
      </div>
      <div className="max-w-6xl mt-6 mx-auto grid grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center items-start">
          <span className="text-gray-300 font-bold mb-6 capitalize">
            Between developing websites, ensuring cyber security, and managing
            Inventories, most businesses often don't have the time or resources
            to manage their own IT infrastructure - bytagig is here to help.
          </span>
          <span className="text-gray-400 w-[612px]">
            <span>
              We are a full-service IT company with over 13 years of experience
              in the industry.
            </span>
            <br />
            Our team takes a proactive and consultative approach to managed
            services,
            <br />
            working with you to understand your specific needs and objectives.
            From there, we
            <br />
            design and implement a customized solutions that delivers the result
            you need to stay competitive.
          </span>
          <div className="mt-6">
            <ClipButtons
              style={{ background: "#201b37" }}
              buttonName={"Learn More"}
            />
          </div>
        </div>
        <img
          src="/assets/images/image1.png"
          alt="Illustration 1"
          className="ml-52 w-96 h-auto"
        />

        {/* Right Images */}
        <div className="flex flex-col items-center gap-12">
          <img
            src="/assets/images/image2.jpg"
            alt="Illustration 2"
            className="mr-10 w-[500px] h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center -ml-[63px]">
          <span className="text-gray-300 font-bold mb-6 capitalize">
            Between developing websites, ensuring cyber security, and managing
            Inventories, most businesses often don't have the time or resources
            to manage their own IT infrastructure - bytagig is here to help.
          </span>
          <span className="text-gray-400 w-[612px]">
            <span>
              We are a full-service IT company with over 13 years of experience
              in the industry.
            </span>
            <br />
            Our team takes a proactive and consultative approach to managed
            services,
            <br />
            working with you to understand your specific needs and objectives.
            From there, we
            <br />
            design and implement a customized solutions that delivers the result
            you need to stay competitive.
          </span>
          <div className="mt-6 -ml-[490px]">
            <ClipButtons
              style={{ background: "#201b37" }}
              buttonName={"Learn More"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
