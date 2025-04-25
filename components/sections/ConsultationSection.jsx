import Image from "next/image";
import React from "react";
import ConsultationForm from "../ConsultationForm";

const ConsultationSection = () => {
  return (
    <>
      <div className="w-full min-h-screen text-white relative">
        {/* Vector 9 - Gradient blur effect continuation */}
        <div
          className="absolute w-[500px] h-[500px] opacity-20 blur-[125px]"
          style={{
            background:
              "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
            transform: "rotate(150deg)",
            right: "-200px",
            top: "-100px",
            zIndex: "-1",
          }}
        />

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-start justify-center pt-40 ml-36">
            <h1 className="uppercase font-bold text-3xl text-[#D5FF3F]">
              Schedule a free consultation
            </h1>
            <span className="text-white text-md mt-5 capitalize w-[620px]">
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
