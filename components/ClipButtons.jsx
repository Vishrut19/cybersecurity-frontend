import React from "react";
import { Button } from "@/components/ui/button";
import "../app/globals.css";

const ClipButtons = ({ buttonName, style }) => {
  return (
    <Button
      variant="ghost"
      className="group relative bg-transparent hover:cursor-pointer hover:text-white text-white font-medium px-6 py-3 rounded-none overflow-hidden focus:outline-none focus:ring-0 hover:bg-transparent active:bg-transparent"
    >
      {/* Border Gradient Layer */}
      <span className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(90deg,#3b82f6,#ec4899)] rounded-[5px] p-[1px] clip-button">
        {/* Inner Background Layer */}
        <span
          className="block w-full h-full bg-[radial-gradient(circle_at_top_left,_#1c1c2b,_#0f0f1b,_#10071e)] rounded-[5px] clip-button"
          style={style}
        />
      </span>

      {/* Button Label */}
      <span className="relative z-10 hover:text-white">{buttonName}</span>
    </Button>
  );
};

export default ClipButtons;
