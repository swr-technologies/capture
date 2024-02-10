import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  placeholder: string;
  className?: string;
  hasValue?: boolean;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function Comp(
    { placeholder, className, hasValue = false, ...inputParams },
    ref
  ) {
    return (
      <div className="flex flex-col relative">
        <input
          ref={ref}
          {...inputParams}
          placeholder={placeholder}
          className={cn(
            "px-3 py-2 bg-white border shadow-sm border-primary/25 placeholder:text-primary/25 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-0 block w-full rounded-md sm:text-sm peer placeholder:font-medium placeholder:text-xs",
            {
              "border-primary text-primary ring-0 outline-none": !hasValue,
            }
          )}
        />
        {placeholder && (
          <p
            className={cn(
              "absolute -top-3.5 left-2 w-fit invisible peer-focus:visible text-primary text-xs bg-white p-1 font-medium",
              {
                visible: !hasValue,
              }
            )}
          >
            {placeholder}
          </p>
        )}
      </div>
    );
  }
);
