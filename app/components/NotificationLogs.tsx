import React from "react";
import { NotificationLog } from "@/app/types";
import { cn } from "@/app/utils/cn";

type NotificationLogsProps = {
  logs: NotificationLog[];
};

export const NotificationLogs = ({ logs }: NotificationLogsProps) => {
  return (
    <div className="mt-5 h-[58vh] overflow-auto">
        {logs.map((log, index) => (
          <div key={index} className="flex items-center py-4 justify-between font-bold text-xs ">
            <p>{log.date}</p>
            <p>{log.time}</p>
            <span className="font-medium">
              Product #{log.productId}{" "}
              {log.status === "Success"
                ? "has matched the records."
                : "has failed to match records."}
            </span>
            <div
              className={cn(
                "px-4 py-1 rounded-full",
                {
                  "bg-green-200 text-green-800": log.status === "Success",
                  "bg-red-200 text-red-800": log.status === "Failed",
                }
              )}
            >
              {log.status}
            </div>
          </div>
        ))}
    </div>
  );
};
