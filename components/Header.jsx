import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import ClipButtons from "./ClipButtons";

const navigationMenuItems = [
  {
    id: 1,
    title: "Services",
    href: "/",
  },
  {
    id: 2,
    title: "Resources",
    href: "/",
  },
  {
    id: 3,
    title: "About Us",
    href: "/",
  },
  { id: 4, title: "Industeries", href: "/" },
];

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between items-center w-full h-[80px] px-8"
      style={{
        background: `
          radial-gradient(100% 150% at 0% 0%, #131A2B 0%, #1E0F2D 100%),
          radial-gradient(80% 100% at 90% 50%, rgba(255, 0, 150, 0.4), transparent 70%)
        `,
      }}
    >
      <div className="flex items-center">
        <h1 className="text-[#2B77FE] text-3xl font-extrabold">Logo</h1>
      </div>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationMenuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger className="bg-transparent text-gray-400 hover:bg-transparent hover:text-white hover:no-underline">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    Links for {item.title}
                  </NavigationMenuLink>
                  {/* Add specific links for each menu item here */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center">
        <ClipButtons buttonName={"Contact us"} />
      </div>
    </header>
  );
};

export default Header;
