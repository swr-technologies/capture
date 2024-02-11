import Image from "next/image";

import { NavbarItem } from "@/app/components";
import { navbarContent } from "@/app/utils/data";
import Menu from '@/public/icons/menu.svg'

export const Navbar = () => {
  return (
    <div className="drawer z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-error drawer-button rounded-full p-1 flex-col flex items-center w-fit ">
          <Image alt="menu" src={Menu}/>
        </label>
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
