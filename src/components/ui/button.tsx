import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary dark:bg-dark-primary rounded-[100px] text-lg font-bold text-primary-foreground hover:text-primary dark:text-dark-primary-foreground shadow-md dark:shadow-dark-md hover:bg-secondary dark:hover:bg-dark-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "px-6 py-3 dark:bg-white bg-gray-800 dark:text-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white transition flex items-center justify-center mx-auto",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-blue-500 underline-offset-4 underline hover:underline-none",
        rn: "bg-[#FFFFFF80] dark:bg-transparent text-gray-600 dark:text-white text-lg font-bold shadow-rn dark:shadow-dark-rn hover:shadow-rn-hover dark:hover:shadow-dark-rn-hover hover:text-gray-500 dark:hover:text-gray-300 !rounded-[100px] transition-colors",
      },
      size: {
        default: "px-12 py-4",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
