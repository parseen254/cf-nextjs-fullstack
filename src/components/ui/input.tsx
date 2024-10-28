import * as React from "react";

import { ArrowBigUpDash, EyeIcon, EyeOffIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  endIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [capsLockActive, setCapsLockActive] = React.useState(false);

    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
      event
    ) => {
      const capsLockOn = event.getModifierState("CapsLock");
      setCapsLockActive(capsLockOn);
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const inputClasses = cn(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      startIcon && "pl-10",
      endIcon && "pr-10",
      type === "password" && !capsLockActive && "pr-16",
      className
    );
    return (
      <div className={cn("relative", className)}>
        {startIcon && (
          <div className="text-muted-foreground  absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {React.createElement(startIcon)}
          </div>
        )}
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={cn(inputClasses)}
          onKeyDown={handleKeyPress}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="text-muted-foreground absolute right-0 flex items-center pr-3 -translate-y-1/2 top-1/2 gap-x-1">
            {React.createElement(endIcon)}
          </div>
        )}
        {type === "password" && (
          <div className="absolute right-0 flex items-center pr-3 -translate-y-1/2 top-1/2 gap-x-1">
            {showPassword ? (
              <EyeOffIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                size={20}
              />
            ) : (
              <EyeIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                size={20}
              />
            )}
            {capsLockActive && type === "password" && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ArrowBigUpDash size={20} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Caps Lock is on!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
