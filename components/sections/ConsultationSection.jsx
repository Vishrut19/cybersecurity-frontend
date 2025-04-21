import Image from "next/image";
import React from "react";
import ConsultationForm from "../ConsultationForm";

const ConsultationSection = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-[#0e0c2c] via-[#181045] to-[#1e0f4f] text-white shadow-[inset_0_0_80px_20px_rgba(165,89,255,0.2)]">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-start justify-center pt-40 ml-36">
            <h1 className="capitalize font-bold text-3xl text-white">
              Schedule a free consultation
            </h1>
            <span className="text-gray-400 text-md mt-5 capitalize w-[620px]">
              for more information about any of our services or to request a
              quote contact,
              <br />
              us today! we look forward to hearing from you - and we can't wait
              to share our
              <br />
              ideas to help your business succeed.
            </span>
            <Image
              className="mt-10 rounded-md"
              src="/assets/images/image3.jpg"
              width={400}
              height={200}
              alt="Consultation Image"
            />
          </div>
          <div className="pt-20">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationSection;
