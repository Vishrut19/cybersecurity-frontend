import React from "react";

const ConsultationSection = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-[#0e0c2c] via-[#181045] to-[#1e0f4f] text-white shadow-[inset_0_0_80px_20px_rgba(165,89,255,0.2)]">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-start justify-center pt-40 ml-36">
            <h1 className="capitalize font-bold text-3xl text-white">
              Schedule a free consultation
            </h1>
            <span className="text-gray-300 mt-5 capitalize w-[558px]">
              for more information about any of our services or to request a
              quote contact,
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationSection;
