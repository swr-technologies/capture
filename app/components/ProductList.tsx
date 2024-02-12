"use client";

import { useState } from "react";

import { Button, ListItems, CreateProduct } from "@/app/components";
import { Product } from "@/app/types";
import { useProduct } from "@/app/hooks/useProduct";

export const ProductList = () => {
  const {
    deleteProduct,
    products,
    isCreateProductModalOpen,
    setIsCreateProductModalOpen,
  } = useProduct();
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  const handleOpenCreateNew = () => {
    setEditingProduct(undefined);
    setIsCreateProductModalOpen(true);
  };

  const handleClose = () => {
    setIsCreateProductModalOpen(false);
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
          setIsCreateProductModalOpen(true);
        }}
      />
      {isCreateProductModalOpen && (
        <div className="fixed top-0 float-right right-0 h-full w-full z-40 lg:max-w-[716px]">
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
