import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function WhatWeOfferSection() {
  // Define card data in an array
  const offerCards = [
    {
      id: 1,
      icon: "🔒",
      title: "Cyber Security",
      description:
        "From identifying vulnerabilities in your system to responding promptly to incidents, our wide range of security services protects your business from online threats.",
      isClipped: true,
    },
    {
      id: 2,
      icon: "🛠️",
      title: "Managed Service Provider",
      description:
        "Proactively monitor, manage, and protect your business's critical systems and data with a full suite of managed IT services in Portland and beyond.",
      isClipped: true,
    },
    {
      id: 3,
      icon: "👨‍💼",
      title: "IT Consulting",
      description:
        "Need help with a specific IT project? Our team of certified consultants can provide the expertise and guidance you need to get the job done right to be replaced.",
      isClipped: true,
    },
    {
      id: 4,
      icon: "🌐",
      title: "Website Development",
      description:
        "Do you need a website for your company but don't want to deal with the design, or maintenance processes? Let the Bytagig's skilled team of web developers handle it for you!",
      isClipped: true,
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-[linear-gradient(180deg,_#0B0A1E_0%,_#0A091C_100%)] relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(122,92,246,0.25)_0%,_rgba(0,0,0,0)_70%)] blur-2xl z-0" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {offerCards.map((card) => (
            <Card
              key={card.id}
              className="bg-gradient-to-br from-[#241142] via-[#1A112F] to-[#0D0B1C] border border-[#2A1A43] rounded-xl text-white"
              style={
                card.isClipped
                  ? {
                      clipPath:
                        "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                      borderRadius: "16px",
                    }
                  : {}
              }
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-5">
                    <span className="text-white text-xl">{card.icon}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <Button
                    variant="ghost"
                    className="w-10 h-10 rounded-full p-0 bg-transparent border-2 border-transparent relative group cursor-pointer"
                  >
                    <div
                      className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr 
          from-purple-500 to-pink-500 group-hover:from-pink-500 
          group-hover:to-purple-500"
                    >
                      <div className="bg-[#0B0A1E] w-full h-full rounded-full flex items-center justify-center">
                        <ArrowRight className="text-white w-4 h-4" />
                      </div>
                    </div>
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
