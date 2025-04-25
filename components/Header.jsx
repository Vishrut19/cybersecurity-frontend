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
import { Button } from "./ui/button";
import { SunIcon } from "lucide-react";

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
    <header className="flex flex-row justify-between items-center w-full h-[80px] px-8 border-b border-neutral-800 shadow-md">
      <div className="flex items-center relative">
        <div
          className="absolute w-[200.6px] h-[238.11px] opacity-70"
          style={{
            background:
              "linear-gradient(93.46deg, #D5FF3F 4.94%, #FFFFFF 82.09%)",
            filter: "blur(125px)",
            transform: "rotate(150deg)",
          }}
          aria-hidden="true"
        />
        <h1 className="relative z-10 text-3xl font-extrabold px-4 py-2">
          Logo
        </h1>
      </div>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationMenuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-white hover:no-underline">
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
        <Button
          variant="ghost"
          className="rounded-xl size-[45px] bg-[#FFFFFF33]"
        >
          <SunIcon size={40} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
