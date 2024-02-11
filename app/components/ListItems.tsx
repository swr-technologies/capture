"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/app/types";
import { cn } from "@/app/utils/cn";
import Menu from "@/public/icons/menuDots.svg";
import ViewIcon from "@/public/icons/eye.svg";
import EditIcon from "@/public/icons/pencil.svg";
import DeleteIcon from "@/public/icons/delete.svg";
import { headers } from "@/app/utils/data";

type ListItemsProps = {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
};

export const ListItems = ({
  products,
  onDelete,
  onEdit,
  onView,
}: ListItemsProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectProduct = (id: string) => {
    setSelectedId((currentSelectedId) =>
      currentSelectedId === id ? null : id
    );
  };

  const menuActions = (product: Product) => [
    {
      label: "View",
      icon: ViewIcon,
      alt: "View icon",
      action: () => onView?.(product.id),
    },
    {
      label: "Edit",
      icon: EditIcon,
      alt: "Edit icon",
      action: () => onEdit?.(product),
    },
    {
      label: "Delete",
      icon: DeleteIcon,
      alt: "Delete icon",
      action: () => onDelete?.(product.id),
    },
  ];
  return (
    <div className="rounded-t-2xl">
      <table className="min-w-full bg-white text-primary  text-left font-bold text-sm">
        <thead>
          <tr className="bg-[#FFE8E8] h-16">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 tracking-wider">
                {header}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const isSelected = product.id === selectedId;
            const actions = menuActions(product);
            return (
              <tr
                key={product.id}
                className={cn(
                  "border-b border-gray-200 h-20 cursor-pointer relative",
                  {
                    "bg-[#FFE8E8]": isSelected,
                  }
                )}
                onClick={() => selectProduct(product.id)}
              >
                <td className="border-b border-gray-200 px-4 py-2">
                  {product.name}
                </td>
                <td className="border-b border-gray-200 px-4 py-2">
                  {product.expiration}
                </td>
                <td className="border-b border-gray-200 px-4 py-2">
                  {product.price}
                </td>
                <td className="border-b border-gray-200 px-4 py-2">
                  {product.measurement} {product.measurementUnits}
                </td>
                <td>
                  <div className="group">
                    <button
                      className="m-2"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Image alt="menu" src={Menu} />
                    </button>
                    <div className="absolute top-14 right-6 invisible group-hover:visible bg-white flex flex-col items-start px-3 h-auto rounded shadow py-4 font-medium text-base">
                      {actions.map(({ label, icon, alt, action }, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex items-center gap-2 p-3 hover:bg-primary/20 w-full rounded active:scale-95",
                            label === "Delete" && "text-secondary"
                          )}
                          onClick={action}
                        >
                          <Image alt={alt} src={icon} width={24} height={24} />
                          <p>{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
