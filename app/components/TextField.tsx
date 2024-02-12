import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/utils/cn";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  placeholder?: string;
  className?: string;
  hasValue?: boolean;
  label?: string;
  labelClassName?: string;
  isAmount?: boolean;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function Comp(
    {
      placeholder,
      className,
      hasValue = false,
      label,
      labelClassName,
      isAmount,
      ...inputParams
    },
    ref
  ) {
    return (
      <div className="flex flex-col relative w-full">
        {isAmount && (
          <span className="absolute left-3 top-4 text-primary/25 ml-1">
            $
          </span>
        )}
        <input
          ref={ref}
          {...inputParams}
          placeholder={placeholder}
          className={cn(
            "px-3 py-2 bg-white h-14 hover:border-primary text-base border shadow-sm border-primary/25 placeholder:text-primary/25 placeholder-slate-400 focus:outline-none focus:border-primary focus:border-2 focus:ring-0 block w-full rounded-md peer placeholder:font-medium placeholder:text-base",
            {
              "border-primary/25 ring-0 outline-none": !hasValue,
              "pl-7": isAmount
            }
          )}
        />
        <p
          className={cn(
            labelClassName,
            "absolute -top-3.5 left-2 w-fit text-primary/65 peer-focus:text-primary text-xs bg-white p-1 font-semibold",
            !hasValue && "visible"
          )}
        >
          {label}
        </p>
      </div>
    );
  }
);
