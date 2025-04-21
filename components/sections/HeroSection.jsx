import ClipButtonWithBackground from "../ClipButtonWithBackground";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-r from-[#0B0C2A] via-[#1F1142] to-[#2E0F46] opacity-95 before:content-[''] before:absolute before:inset-0 before:bg-radial-at-b-r before:from-pink-500/20 before:to-transparent">
      <h1 className="text-white w-full text-8xl md:text-6xl font-bold leading-tight max-w-4xl relative z-10">
        Reliable{" "}
        <span className="relative inline-block">
          {/* Radial glow behind */}
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-radial from-[#ff6a00] via-[#a855f7] to-transparent opacity-80 blur-[60px] mix-blend-screen"></span>

          {/* Gradient text with drop shadow */}
          <span className="bg-gradient-to-b from-[#ffb347] to-[#ff6a00] bg-clip-text text-transparent font-extrabold text-5xl tracking-wide drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
            Cyber Security
          </span>
        </span>
        And <br />
        IT Support For{" "}
        <span className="relative inline-block">
          {/* Radial glow behind */}
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-radial from-[#ff6a00] via-[#a855f7] to-transparent opacity-80 blur-[60px] mix-blend-screen"></span>

          {/* Gradient text with drop shadow */}
          <span className="bg-gradient-to-b from-[#ffb347] to-[#ff6a00] bg-clip-text text-transparent font-extrabold text-5xl tracking-wide drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
            Businesses
          </span>
        </span>
      </h1>

      <p className="text-gray-300 text-lg mt-6 max-w-2xl relative z-10">
        Bytagig’s Managed IT Services Means Never Having To Worry About Your
        Technology Again. Improve Business Efficiencies, Productivity, And
        Profitability With Reliable IT Support From Oregon’s Best.
      </p>

      <div className="mt-10">
        <ClipButtonWithBackground buttonName={"Schedule a 15 mins call"} />
      </div>
    </div>
  );
}
