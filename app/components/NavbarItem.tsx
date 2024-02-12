"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navbarItem, navbarSection } from "@/app/types/navbar";
import { Chart, ColesIcon, ScannerIcon } from "@/public/icons";
import { cn } from "@/app/utils/cn";

interface NavbarItemProps {
  data: navbarSection[];
}

export const NavbarItem = ({ data }: NavbarItemProps) => {
  return (
    <div className="w-72 bg-white h-full overflow-auto text-primary">
      <div className="flex-1 flex-col">
        <div className="items-center justify-center flex">
          <Image src={ColesIcon} alt="Logo" className="w-24 h-24" />
        </div>
        <div className="flex flex-col p-4">
          {data.map((section, index) => (
            <div key={index}>
              <p className="uppercase py-4 font-bold">{section.title}</p>
              <ul
                className={cn(
                  "space-y-2",
                  section.title === "Management" && "list-disc list-inside"
                )}
              >
                {section.items.map((item: navbarItem) => {
                  return (
                    <Link key={item.id} href={item.path}>
                      <li
                        className={cn(
                          "flex items-center p-2 my-2 text-sm font-bold rounded cursor-pointer relative hover:bg-[#FFE7E7] hover:text-secondary"
                        )}
                      >
                        {!item.icon && (
                          <span className="mr-2">•</span>
                        )}
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={16}
                            height={16}
                          />
                        )}
                        <span className="ml-2">{item.name}</span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
