import Image from "next/image";
import React from "react";

const logoImages = [
  {
    id: 1,
    src: "../../assets/logos/avast_logo.svg",
  },
  {
    id: 2,
    src: "../../assets/logos/avg_logo.svg",
  },
  {
    id: 3,
    src: "../../assets/logos/checkpoint_logo.svg",
  },
  {
    id: 4,
    src: "../../assets/logos/cisco_logo.svg",
  },
  {
    id: 5,
    src: "../../assets/logos/fortinet_logo.svg",
  },
  {
    id: 6,
    src: "../../assets/logos/mcafee_logo.svg",
  },
  {
    id: 7,
    src: "../../assets/logos/norton_logo.svg",
  },
  {
    id: 8,
    src: "../../assets/logos/paloaltonetworks_logo.svg",
  },
  {
    id: 9,
    src: "../../assets/logos/zscaler_logo.svg",
  },
];

const PartnerSection = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
        {/* Vector 9 - Gradient blur effect */}
        <div
          className="absolute w-[743.67px] h-[817.8px] opacity-20 blur-[125px]"
          style={{
            background:
              "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
            transform: "rotate(150deg)",
            right: "-200px",
            bottom: "-400px",
            zIndex: "-1",
          }}
        />

        <h3 className="text-4xl font-bold text-[#D5FF3F] ml-3 uppercase mb-20">
          Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center mt-6">
          {logoImages.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              alt="logo"
              width={150}
              height={150}
              className="text-white"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnerSection;
