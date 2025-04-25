import React from "react";
import TestimonialCarousel from "../TestimonialCarousel";

const RecommendationSection = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Vector 9 - Blurred gradient effect at top right */}
      <div
        className="absolute"
        style={{
          width: "743.67px",
          height: "817.8px",
          right: "-400px",
          top: "-400px",
          background:
            "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
          opacity: 0.2,
          filter: "blur(125px)",
          transform: "rotate(150deg)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default RecommendationSection;
