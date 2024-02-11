"use client";

import React, { useState } from "react";

import { Button, TextField } from "@/app/components";
import { CreateProduct } from "./CreateProduct";

export const Preview = () => {
  const [productName, setProductName] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  const handleClose = () => {
    setShowCreate((prev) => !prev);
  };
  return (
    <div>
      <div className="py-9 w-full flex flex-col gap-5 items-center justify-center">
        <TextField
          placeholder="Product name"
          value={productName}
          hasValue={!productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div className="w-fit">
          <Button label="Create" variant="default" onClick={handleClose} />
        </div>
      </div>
      {showCreate && (
        <div className="fixed top-0 float-right right-0 h-screen w-full z-40 lg:max-w-[716px]">
          <div
            className="fixed top-0 left-0 w-screen h-full bg-black/50"
            onClick={handleClose}
            role="presentation"
          />
          <div className="w-full h-full">
            <CreateProduct onClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};
