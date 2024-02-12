"use client";

import { useState } from "react";

import { Button, ListItems, CreateProduct } from "@/app/components";
import { Product } from "@/app/types";
import { useProduct } from "@/app/hooks/useProduct";

export const ProductList = () => {
  const { deleteProduct, products } = useProduct();
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [showCreate, setShowCreate] = useState(false);

  const handleOpenCreateNew = () => {
    setEditingProduct(undefined);
    setShowCreate(true);
  };

  const handleClose = () => {
    setShowCreate(false);
    setEditingProduct(undefined);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center pb-10">
        <h1 className="header">List</h1>
        <div className="w-fit">
          <Button
            label="Add Product"
            variant="default"
            onClick={handleOpenCreateNew}
          />
        </div>
      </div>
      <ListItems
        products={products}
        onDelete={(id) => deleteProduct(id)}
        onEdit={(product) => {
          setEditingProduct(product);
          setShowCreate(true);
        }}
      />
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
