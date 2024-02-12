"use client";

import React, { useState } from "react";

import { Navbar, ProductList, Scanner } from "@/app/components";
import { CreateProduct } from "./CreateProduct";
import { useProduct } from "@/app/hooks/useProduct";
import { Product } from "../types";

export const Preview = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const { deleteProduct, products } = useProduct();

  const handleOpenCreateNew = () => {
    setEditingProduct(undefined);
    setShowCreate(true);
  };

  const handleClose = () => {
    setShowCreate(false);
    setEditingProduct(undefined);
  };

  return (
    <div className="mx-auto container h-screen ">
      <div className="pt-10 h-full w-full px-10">
       
      </div>
      {showCreate && (
        <div className="fixed top-0 float-right right-0 h-screen w-full z-40 lg:max-w-[716px]">
          <div
            className="fixed top-0 left-0 w-screen h-full bg-black/50"
            onClick={handleClose}
            role="presentation"
          />
          <CreateProduct
            editingProduct={editingProduct as Product}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};
