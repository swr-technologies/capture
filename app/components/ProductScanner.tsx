'use client';

import React, { useState } from "react";

import { Scanner } from "@/app/components";

export const ProductScanner = () => {
    const [isScannerOn, setIsScannerOn] = useState(false);

    const toggleScanner = () => {
        setIsScannerOn(!isScannerOn);
      };
    
  return <Scanner isScannerOn={isScannerOn} onScannerOn={toggleScanner} />;
};
