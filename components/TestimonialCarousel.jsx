"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    title: "Maritime Cyber Security Assessment",
    glowColor: "#d9d4b6",
  },
  {
    title: "Aviation Cyber Security Assessment",
    glowColor: "#67b6c6",
  },
  {
    title: "Satellite Communications (SATCOM) Security Assessment",
    glowColor: "#a49dc9",
  },
];

export default function TestimonialsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [current, setCurrent] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="text-white py-20 px-4 text-center">
      <h1 className="text-4xl uppercase mb-20 text-[#D5FF3F] font-extrabold">
        FlagShip Services
      </h1>

      <div className="flex justify-center gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={cn(
              "border border-[#FFFFFF1A] w-[320px] md:w-[380px] snap-center transition-transform duration-300 ease-in-out",
              "relative text-white p-0 overflow-hidden"
            )}
            style={{
              borderRadius: "24px",
              background: "#0F0F0F",
            }}
          >
            {/* Top Glow - Using the color from the testimonial object */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-3 w-36 rounded-b-full opacity-80 z-10"
              style={{
                background: testimonial.glowColor || "#fefee3",
                boxShadow: `0 0 10px ${testimonial.glowColor || "#fefee3"}`,
              }}
            />

            <div className="relative p-10 flex flex-col justify-center items-center min-h-[200px]">
              <h3 className="text-xl md:text-2xl font-semibold text-center">
                {testimonial.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-3 h-3 rounded-full cursor-pointer",
              current === index ? "bg-white" : "bg-gray-600"
            )}
          />
        ))}
      </div>
    </div>
  );
}
