import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function WhatWeOfferSection() {
  // Define card data in an array
  const offerCards = [
    {
      id: 1,
      image: "/assets/images/cardImage1.svg",
      title: "Cyber Security",
      description:
        "From identifying vulnerabilities in your system to responding promptly to incidents, our wide range of security services protects your business from online threats.",
    },
    {
      id: 2,
      image: "/assets/images/cardImage2.svg",
      title: "Managed Service Provider",
      description:
        "Proactively monitor, manage, and protect your business's critical systems and data with a full suite of managed IT services in Portland and beyond.",
    },
    {
      id: 3,
      image: "/assets/images/cardImage3.svg",
      title: "IT Consulting",
      description:
        "Need help with a specific IT project? Our team of certified consultants can provide the expertise and guidance you need to get the job done right to be replaced.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 relative overflow-hidden">
      {/* Vector 9 - Blurred gradient effect at bottom right */}
      <div
        className="absolute"
        style={{
          width: "743.67px",
          height: "817.8px",
          right: "-400px",
          bottom: "-400px",
          background:
            "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
          opacity: 0.2,
          filter: "blur(125px)",
          transform: "rotate(150deg)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">What We Offer</h2>
        <p className="text-sm text-gray-300 mt-4">
          From Comprehensive IT Support And Maintenance To Proactive Monitoring
          And Security, Our
          <br />
          Managed Services In Portland Keep Your IT Infrastructure In Top
          Condition, So You Can Focus On Your
          <br />
          Business Goals. We Serve The Entire U.S.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {offerCards.map((card) => (
            <Card
              key={card.id}
              className="w-[347px] h-[426px] bg-gradient-to-b from-[#D5FF3F80] to-[#0F1413] border border-[#FFFFFF33] rounded-xl text-white"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Image at the top */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={200}
                    priority
                  />
                </div>

                {/* Title in the middle */}
                <h3 className="font-semibold text-3xl text-[#D5FF3F] text-center mb-auto">
                  {card.title}
                </h3>

                {/* Read More button at the bottom */}
                <div className="flex justify-start items-center mt-4">
                  <Button className="text-white font-bold text-md">
                    Read More
                  </Button>
                  <Button
                    variant="ghost"
                    className="ml-2 bg-[#D5FF3F1A] rounded-lg size-[26px] cursor-pointer"
                  >
                    <ArrowDownRight className="text-[#D5FF3F] size-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
