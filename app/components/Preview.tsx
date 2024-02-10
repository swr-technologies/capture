"use client";

import React, { useState } from "react";

import { TextField } from "@/app/components";

export const Preview = () => {
  const [productName, setProductName] = useState("");
  return (
    <div className="py-9 w-full flex flex-col gap-5 items-center justify-center">
      <TextField
        placeholder="Product name"
        value={productName}
        hasValue={!productName}
        onChange={(e) => setProductName(e.target.value)}
      />
    </div>
  );
};
