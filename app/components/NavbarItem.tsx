"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { navbarItem, navbarSection } from "@/app/types/navbar";
import { Chart, ColesIcon, ScanIcon } from "@/public/icons";
import { cn } from "@/app/utils/cn";

interface NavbarItemProps {
  data: navbarSection[];
}

export const NavbarItem = ({ data }: NavbarItemProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectProduct = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };
  return (
    <div className="w-72 bg-white h-full overflow-auto text-primary">
      <div className="flex-1 flex-col ">
        <div className=" items-center justify-center flex">
          <Image src={ColesIcon} alt="" className="w-24 h-24" />
        </div>
        <div className="flex flex-col p-4">
          {data.map((section, index) => (
            <div key={index}>
              <p className="text-black uppercase text-base py-4 font-bold">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.items.map((item: navbarItem) => {
                  const isSelected = item.id === selectedId;
                  return (
                    <div
                      key={item.id}
                      onClick={() => selectProduct(item.id)}
                      className={cn(
                        "flex items-center p-2 my-2 text-sm rounded hover:bg-[#FFE7E7] hover:text-secondary",
                        {
                          " text-secondary ": isSelected,
                          " text-black": !isSelected,
                        }
                      )}
                    >
                      {section.title === "Overview" && (
                        <Image
                          alt=""
                          src={item.name === "Dashboard" ? Chart : ScanIcon}
                          className="w-4 h-4"
                        />
                      )}
                      {section.title === "Management" && (
                        <span
                          className={cn(
                            "h-1.5 w-1.5 bg-black rounded-full mr-2 inline-block hover:bg-secondary",
                            {
                              "bg-secondary": isSelected,
                            }
                          )}
                        ></span>
                      )}
                      <span className=" mr-2"></span> {item.name}
                    </div>
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
