import Image from "next/image";

import { NavbarItem } from "@/app/components";
import { navbarContent } from "@/app/utils/data";
import Menu from "@/public/icons/menu.svg";
import { ColesIcon } from "@/public/icons";

export const Navbar = () => {
  return (
    <div className="drawer z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-fit flex items-center gap-5">
        <label
          htmlFor="my-drawer"
          className="btn btn-error drawer-button rounded-full p-1 flex-col flex items-center w-12 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-button-hover active:scale-95"
        >
          <Image alt="menu" src={Menu} />
        </label>
        <Image src={ColesIcon} alt="Logo" className="w-24 h-24" />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <NavbarItem data={navbarContent} />
      </div>
    </div>
  );
};
