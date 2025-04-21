"use client";

import React from "react";
import { Button } from "./ui/button";

const ClipButtonWithBackground = ({ buttonName, type, style }) => {
  return (
    <Button
      variant="ghost"
      className="group relative bg-[radial-gradient(circle_at_top_left,_#1c1c2b,_#0f0f1b,_#10071e)] hover:cursor-pointer hover:text-white text-white font-medium px-6 py-3 rounded-[5px] overflow-hidden focus:outline-none focus:ring-0 hover:bg-transparent active:bg-transparent"
      style={style}
    >
      {/* Border Gradient Layer */}
      <span className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(90deg,#2563eb,#db2777)] p-[1px] clip-button"></span>

      {/* Button Label */}
      <span className="relative z-10 hover:text-white" type={type}>
        {buttonName}
      </span>
    </Button>
  );
};

export default ClipButtonWithBackground;
