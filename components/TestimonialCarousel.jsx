"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ian",
    quote:
      "Bytagig is the third IT company we have used and are definitely the best. John and team are a great fit for us as a smaller company. The service and value are excellent.",
    border: "border-blue-500",
  },
  {
    name: "Grant",
    quote:
      "John is one of the nicest people I have met. He took the time to sit down with me to address what was needed for my small business. The worry of internet security.",
    border: "border-orange-400",
  },
  {
    name: "Sadie",
    quote:
      "I’ve never experienced such a dedicated & responsive IT company. John and his team are so quick to answer my questions and get my problems resolved.",
    border: "border-fuchsia-500",
  },
  {
    name: "Sabrina",
    quote:
      "John with Bytagig is very knowledgeable and responsive. All of our IT needs have been met with professionalism and quality work. Thank you John.",
    border: "border-lime-400",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className=" text-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Recommendations From Past Customers
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-10">
        Customer Recommendations Can Be A Powerful Tool For Businesses To
        Establish Trust And Credibility With Potential Customers. Positive
        Reviews Can Help Attract New Business And Encourage Customer Loyalty.
      </p>

      <div className="flex justify-center gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={cn(
              "w-[280px] md:w-[300px] snap-center transition-transform duration-300 ease-in-out",
              "relative text-white p-0 overflow-hidden border border-[#3a6bff]",
              testimonial.border
            )}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)",
              borderRadius: "24px",
              background: "#11111c",
              boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)",
            }}
          >
            <div className="bg-[#11111c] p-6 h-full w-full">
              <h3 className="text-xl font-bold text-center">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 italic mt-3 text-center">
                "{testimonial.quote}"
              </p>
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
