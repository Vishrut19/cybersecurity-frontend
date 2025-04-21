import React from "react";
import ClipInputs from "./ClipInputs";
import ClipButtons from "./ClipButtons";
import ClipButtonWithBackground from "./ClipButtonWithBackground";

const footerSectionData = [
  {
    id: 1,
    title: "About Us",
    type: "links",
    items: [
      { id: 1, text: "About Us", href: "/" },
      { id: 2, text: "Contact", href: "/" },
      { id: 3, text: "Review Us", href: "/" },
    ],
  },
  {
    id: 2,
    title: "Contact Us",
    type: "contact",
    items: [
      { label: "Address", value: "Satkhira, Kaliganj, BD" },
      { label: "Email", value: "aburaihan.it009@gmail.com" },
      { label: "Phone", value: "+88 01407152619" },
    ],
  },
  {
    id: 3,
    title: "Follow Us:",
    type: "follow",
    items: [
      { id: 1, value: "Facebook" },
      { id: 2, value: "Twitter" },
      { id: 3, value: "LinkedIn" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-5 gap-6 bg-[radial-gradient(circle_at_top_left,_#1c1c2b,_#0f0f1b,_#10071e)] text-white px-12 pt-12 pb-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#2B77FE] text-3xl font-extrabold">Logo</h1>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-400">
              Stay safe from cyber threats
            </span>
            <span className="text-sm text-gray-400">
              with strong security measures.
            </span>
          </div>
        </div>
        {footerSectionData.map((section) => (
          <div key={section.id}>
            <h3 className="text-lg font-semibold text-white mb-3">
              {section.title}
            </h3>

            {section.type === "links" && (
              <ul className="space-y-1">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <a className="text-sm text-gray-400" href={item.href}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {section.type === "contact" && (
              <div className="space-y-2">
                {section.items.map((item, index) => (
                  <p key={index} className="text-sm text-gray-400">
                    <span className="text-sm text-gray-300 font-semibold">
                      {item.label}:
                    </span>{" "}
                    {item.value}
                  </p>
                ))}
              </div>
            )}
            {section.type === "follow" && (
              <div className="flex flex-col space-y-2">
                {section.items.map((item) => (
                  <span key={item.id} className="text-sm text-gray-400">
                    {item.value}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
          <ClipInputs
            type="email"
            placeholder="Enter your email..."
            className="border-[#2f2e37] rounded-[2px] w-full bg-transparent px-4 py-2 text-white placeholder:text-gray-200 outline-none"
          />
          <ClipButtonWithBackground buttonName={"Subscribe"} />
        </div>
      </footer>
      <div className="w-full border-t border-white/10 bg-[radial-gradient(circle_at_top_left,_#1c1c2b,_#0f0f1b,_#10071e)] text-center text-sm text-white/70 px-4 py-4">
        <span>Copyright © 2023 Bytagig</span>
      </div>
    </>
  );
};

export default Footer;
