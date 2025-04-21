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
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0B0B1C] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]">
        <h3 className="font-semibold text-[#fcf9fd] text-3xl text-center">
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
