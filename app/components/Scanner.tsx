"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import ScannerIcon from "@/public/icons/scannerFilled.svg";
import { cn } from "@/app/utils/cn";
import { NotificationLogs } from "@/app/components";
import { logs } from "@/app/utils/data";
import ScannerLottie from "@/app/lottie/Scanner.json";

type ScannerProps = {
  isScannerOn: boolean;
  onScannerOn: () => void;
};
export const Scanner = ({ isScannerOn, onScannerOn }: ScannerProps) => {
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().catch((error) => console.error('Error playing the video stream', error));
        };
      }
    } catch (error) {
      console.error("Error accessing the camera", error);
    }
  };

  const stopCamera = () => {
    cameraStream?.getTracks().forEach((track) => track.stop());
    setCameraStream(null);
  };

  useEffect(() => {
    if (isScannerOn) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => stopCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScannerOn]);

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
      <div className="flex gap-6 h-full  ">
        <div className={cn("w-1/2 h-[60vh] rounded-xl", !isScannerOn && "bg-primary")}>
          {isScannerOn && (
            <div className="relative h-[60vh] rounded-xl overflow-hidden w-full">
              <video
                ref={videoRef}
                className="w-full h-full object-fill opacity-0 transition-opacity duration-500"
                autoPlay
                playsInline
                onLoadedMetadata={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              ></video>
              <Lottie animationData={ScannerLottie} className="w-full h-full absolute top-0" />
            </div>
          )}
        </div>
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
