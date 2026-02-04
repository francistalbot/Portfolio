import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-mono font-bold transition-all duration-[250ms] ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-moss/50",
  {
    variants: {
      variant: {
        default: "bg-moss text-white border-2 border-moss hover:bg-sage hover:border-sage hover:-translate-y-0.5 shadow-sm",
        destructive:
          "bg-destructive text-white border-2 border-destructive hover:bg-destructive/90 hover:-translate-y-0.5",
        outline:
          "border-2 border-wood dark:border-sage bg-transparent text-wood dark:text-sage hover:bg-wood hover:text-paper dark:hover:bg-sage dark:hover:text-bark-dark hover:-translate-y-0.5 shadow-xs",
        secondary:
          "bg-parchment text-bark-dark border-2 border-parchment hover:bg-[#E0D4BC] hover:-translate-y-0.5",
        ghost:
          "hover:bg-parchment dark:hover:bg-wood/30 text-bark dark:text-parchment",
        link: "underline-offset-4 hover:underline hover:text-sage",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-11 px-8 has-[>svg]:px-6",
        xl: "h-12 px-10 has-[>svg]:px-8",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
