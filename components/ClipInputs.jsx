import { Input } from "@/components/ui/input";

export default function ClipInputs({ type, placeholder, className }) {
  return (
    <div
      className="relative w-full max-w-md p-[1px]"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
        backgroundColor: "#2f2e37",
        borderRadius: "10px",
      }}
    >
      <div
        className="w-full h-full bg-[#1A1A2E] rounded-[2px]"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
        }}
      >
        <Input type={type} placeholder={placeholder} className={className} />
      </div>
    </div>
  );
}
