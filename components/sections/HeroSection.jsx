import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-dark">
      {/* Vector 6 - bottom right blur effect */}
      <div
        className="absolute w-[263.76px] h-[313.07px] opacity-80"
        style={{
          left: "1473.96px",
          top: "719.13px",
          background:
            "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
          filter: "blur(125px)",
          transform: "rotate(150deg)",
        }}
        aria-hidden="true"
      />

      <h1 className="text-white w-full text-8xl md:text-6xl font-bold leading-tight max-w-4xl relative z-10">
        Reliable{" "}
        <span className="relative inline-block">
          <span className="bg-linear-to-r from-[#D5FF3F] to-[#ffff] bg-clip-text text-transparent font-extrabold text-5xl tracking-wide drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
            Cyber Security
          </span>
        </span>
        And <br />
        IT Support For{" "}
        <span className="relative inline-block">
          <span className="bg-linear-to-r from-[#D5FF3F] to-[#ffff] bg-clip-text text-transparent font-extrabold text-5xl tracking-wide drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
            Businesses
          </span>
        </span>
      </h1>

      <p className="text-gray-300 text-lg mt-6 max-w-2xl relative z-10">
        Bytagig's Managed IT Services Means Never Having To Worry About Your
        Technology Again. Improve Business Efficiencies, Productivity, And
        Profitability With Reliable IT Support From Oregon's Best.
      </p>

      <div className="mt-10 relative z-10">
        <Button
          type="ghost"
          className="border border-dashed bg-[#D5FF3F2E] border-[#D5FF3F] w-[300px] h-[60px] text-[#D5FF3F]"
        >
          Schedule a 15 mins call"
        </Button>
      </div>
    </div>
  );
}
