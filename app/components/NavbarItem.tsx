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
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectProduct = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const getIconSrc = (itemName: string) => {
    switch (itemName) {
      case "Dashboard":
        return Chart;
      case "Camera Scanner":
        return ScannerIcon;
      default:
        return null;
    }
  };
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
                  const isSelected = item.id === selectedId;
                  const iconSrc = getIconSrc(item.name);
                  return (
                    <Link key={item.id} href={item.value}>
                      <li
                        onClick={() => selectProduct(item.id)}
                        className={cn(
                          "flex items-center p-2 my-2 text-sm font-bold rounded cursor-pointer relative hover:bg-[#FFE7E7] hover:text-secondary",
                          {
                            "bg-[#FFE7E7] text-secondary": isSelected,
                            "list-disc list-inside ":
                              section.title === "Management",
                          }
                        )}
                      >
                        {iconSrc && (
                          <Image
                            src={iconSrc}
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
