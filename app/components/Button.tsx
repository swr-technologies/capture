import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "default" | "primary" | "primaryDisabled";
  className?: string;
  icon?: any;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  className,
  icon,
  ...buttonParams
}) => {
  return (
    <button
      {...buttonParams}
      className={cn(
        className,
        "w-full text-white py-4 px-6 font-bold text-xl rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-button-hover active:scale-95 disabled:bg-disable disabled:active:scale-100 disabled:text-text-disabled ",
        {
          "bg-secondary": variant === "primary",
          "bg-primary": variant === "default",
        }
      )}
    >
      {label}
    </button>
  );
};
