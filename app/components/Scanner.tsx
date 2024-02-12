import Image from "next/image";
import React from "react";

import ScannerIcon from "@/public/icons/scannerFilled.svg";
import { cn } from "@/app/utils/cn";
import { NotificationLogs } from "@/app/components";
import { logs } from "@/app/utils/data";

type ScannerProps = {
  isScannerOn: boolean;
  onScannerOn: () => void;
};
export const Scanner = ({ isScannerOn, onScannerOn }: ScannerProps) => {
  return (
    <div className="text-primary">
      <h1 className="header mb-5">Product Scanner</h1>
      <div className="flex justify-between items-center">
        <p>Monitor production status and view logs at the same time.</p>
        <button
          onClick={onScannerOn}
          className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-button-hover active:scale-95",
            {
              "bg-secondary": isScannerOn,
              "bg-[#292D32]": !isScannerOn,
            }
          )}
        >
          <Image alt="" src={ScannerIcon} />
        </button>
      </div>
      <div className="flex gap-6  ">
        <div className="w-1/2 h-[70dvh] bg-primary rounded-xl"></div>
        <div className="flex flex-col w-1/2">
          <p className="font-bold text-base border-b pb-1 border-[#B5BECA]">
            Notification logs
          </p>
          <div className=" flex-1">
            {isScannerOn ? (
                <NotificationLogs logs={logs} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="font-medium ">Click the scan button to start.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
