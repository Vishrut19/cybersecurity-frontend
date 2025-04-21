import React from "react";
import ClipButtons from "../ClipButtons";

const BusinessSection = () => {
  return (
    <section className="w-full min-h-screen px-8 py-20 bg-gradient-to-br from-[#201b37] via-[#1a1333] to-[#100c2a] text-white">
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
